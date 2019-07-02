import React, { Component } from "react";

class JobBoard extends Component {
  constructor({ handleClose, show, children }) {
    super();
    this.state = {
      show: false
    };
  }
}
