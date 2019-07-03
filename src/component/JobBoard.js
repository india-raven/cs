import React, { Component } from "react";
import Fire from "../Fire";
import firebase from "firebase";
import { JobDescription } from "../component/JobDescription";

const jobs = require("../jobs");

export default class JobBoard extends Component {
  constructor(props) {
    // {
    //   handleClose, show, children;
    // }
    super(props);
    this.state = {
      jobs: [],
      currJob: {}
    };
  }

  convertJobs(obj) {
    console.log("THIS OBJECT:", obj);
    let result = [];
    for (let i in obj) {
      result.push(obj[i]);
    }
    return result;

    // const objArray = Object.values(obj)
    // return objArray
  }

  componentDidMount() {
    firebase
      .database()
      .ref("/")
      .once("value")
      .then(snapshot => {
        const newObj = snapshot.val();
        this.setState({ jobs: this.convertJobs(newObj.Jobs) });
        console.log("HIHIHIH", snapshot.val());
        // console.log(this.state.Client.Client1.firstName);
      });
  }

  render(props) {
    const showHideClassName = this.props.show
      ? "modal display-block"
      : "modal display-none";
    console.log("STATE:", this.state);
    return (
      <div className={showHideClassName}>
        <div className="job-board">
          <h1>Jobs Near You: </h1>
          <button type="button" onClick={this.props.handleClose}>
            close
          </button>
          <hr />
          <div className="job-list-and-description">
            <div className="job-board-info">
              {this.state.jobs.map(job => {
                // "Job1"
                return (
                  <div
                    onClick={() => this.setState({ currJob: job })}
                    key={job.id}
                  >
                    <h1>{job.title}</h1>
                    <hr />
                  </div>
                );
              })}
            </div>
            <hr />
            <div className="job-description">
              <JobDescription job={this.state.currJob} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
