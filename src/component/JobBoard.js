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
        <hr/>
        <section>
        {jobs.map(job => {
          return <h1>{job.title}</h1>;
        })}
        </section>
      </div>
    );
  }
}
