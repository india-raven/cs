import React, { Component } from "react";

export const JobDescription = props => {
  return (
    <div>
      <h1>Job title: {props.job.title}</h1>
      <h2>Company: {props.job.company}</h2>
      <h2>Location: {props.job.location}</h2>
      <a target={"_blank"} href={props.job.url}>
        Get more info
      </a>
      <h2>Time posted: {props.job.created_at}</h2>
      <p>Description: {props.job.description}</p>
    </div>
  );
};
