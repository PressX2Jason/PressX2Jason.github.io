import React from "react";

import Section from "./Section/Section";
import WorkExp from "../../data/WorkExperience";

export default class Resume extends React.Component {
  render() {
    return (
      <div className="resume">
        {WorkExp.jobs.map(job => <Section job={job} />)}
      </div>
    );
  }
}
