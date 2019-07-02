import React, { Component } from "react";
import axios from "axios";

const jobs = require("../jobs");

export default class JobBoard extends Component {
  constructor({ handleClose, show, children }) {
    super();
    const showHideClassName = show
      ? "modal display-block"
      : "modal display-none";
  }

  componentDidMount() {
    const { data } = axios.get("https://jobs.github.com/positions.json");
    console.log("DATA:", data);
  }

  createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      // Check if the XMLHttpRequest object has a "withCredentials" property.
      // "withCredentials" only exists on XMLHTTPRequest2 objects.
      xhr.open(method, url, true);
    } else {
      // Otherwise, CORS is not supported by the browser.
      xhr = null;
    }
    return xhr;
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
