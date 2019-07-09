import React, { Component } from "react";
import GeoFire from "../GeoFire";
import firebase from "firebase";
import { JobDescription } from "../component/JobDescription";

const jobs = require("./jobs");
// import jobs from "../../public/data/jobs.json";

export default class JobBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      currJob: jobs[0]
    };
  }

  componentDidMount() {
    this.setState({ jobs: jobs });
  }

  render(props) {
    const showHideClassName = this.props.show
      ? "modal display-block"
      : "modal display-none";
    return (
      <div className={showHideClassName}>
        <div className="job-board">
          <h1>Jobs Near You: </h1>
          <i className="fas fa-times fa-2x" onClick={this.props.handleClose} />
          <hr />
          <div className="job-list-and-description">
            <div className="job-board-info">
              {this.state.jobs.map(job => {
                // "Job1"
                return (
                  <div
                    className="job"
                    onClick={() => this.setState({ currJob: job })}
                    key={job.id}
                  >
                    <h2>
                      {job.title} | {job.company}
                    </h2>
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
