import React from "react";
import Grid from '@material-ui/core/Grid';
import AboutMe from "./aboutMe/AboutMe"
import JobExperience from "./jobExperience/JobExperience";
import Introduction from "../../data/AboutMe";
import WorkExp from "../../data/WorkExperience";


export default class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutMe: Introduction,
      jobs: WorkExp.jobs
    }
  }

  render() {
    return (
      <div className="resume">
        {centerGrid(<AboutMe name={this.state.aboutMe.name}
          introduction={this.state.aboutMe.introduction}
          contact={this.state.aboutMe.contact} />)}

        {this.state.jobs.map((job) =>
          centerGrid(<JobExperience job={job} />, job.company.name))}
      </div >
    );
  }
}

function centerGrid(item, key) {
  return (<Grid
    container
    spacing={16}
    justify="center" >
    {gridItem(item, key)}
  </Grid>
  );
}

function gridItem(item, key) {
  const xsBreakpoint = 12;
  const smBreakpoint = 10;
  const mdBreakPoint = 8;
  const xlBreakPoint = 6;

  return (<Grid
    className="item"
    key={key} item
    xs={xsBreakpoint}
    sm={smBreakpoint}
    md={mdBreakPoint}
    xl={xlBreakPoint}
  >
    {item}
  </Grid>);
}
