import React, { Component } from "react";

const jobs = require("../jobs");

export default class JobBoard extends Component {
  constructor({ handleClose, show, children }) {
    super();
  }

  render() {
    const showHideClassName = this.show
      ? "modal display-block"
      : "modal display-none";
    return (
      <div className="job-board">
        <h1>Jobs Near You: </h1>
        <hr />
        <div className="job-list-and-description">
          <div className="job-board-info">
            {jobs.map(job => {
              return (
                <div>
                  <h1>{job.title}</h1>
                  <hr/>
                </div>
              );
            })}
          </div>
          <hr />
          <div className="job-description">
            {jobs.map(job => {
              return <h1>{job.description}</h1>;
            })}
          </div>
        </div>
      </div>
    );
  }
}
