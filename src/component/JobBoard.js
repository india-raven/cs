import React, { Component } from "react";

const jobs = require("../jobs");

export default class JobBoard extends Component {
  constructor({ handleClose, show, children }) {
    super();
    const showHideClassName = show
      ? "modal display-block"
      : "modal display-none";
  }

  render() {
    return (
      <div>
        {jobs.map(job => {
          return <h1>{job.title}</h1>;
        })}
      </div>
    );
  }
}
