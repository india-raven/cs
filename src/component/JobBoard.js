import React, { Component } from "react";
// import Fire from "../Fire";
import firebase from "firebase";
import { JobDescription } from "../component/JobDescription";

const jobs = require("../jobs");
// import jobs from '../../public/data/jobs.json';

export default class JobBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      currJob: jobs[0]
    };
  }

  componentDidMount() {
    firebase
      .database()
      .ref("/")
      .once("value")
      .then(snapshot => {
        this.setState({ jobs: snapshot.val() });
      });
  }

  render(props) {
    console.log("JOB BOARD JOBS:", this.state.jobs);
    const showHideClassName = this.props.show
      ? "modal display-block"
      : "modal display-none";
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
