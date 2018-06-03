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
    /*cannot do this with `direction = "row"` because then it doesn't fill the width to maximun
     cannot for the life of me figure out how to make this work with `xl = {6}` */
    const xsBreakpoint = 12;
    const smBreakpoint = 10;
    const mdBreakPoint = 8;
    const xlBreakPoint = 7;

    return (
      <Grid
        container
        className="resume"
        spacing={32}
        alignContent="center"
        justify="center"
      >
        <Grid
          className="item"
          key="aboutMe" item
          xs={xsBreakpoint}
          sm={smBreakpoint}
          md={mdBreakPoint}
          xl={xlBreakPoint}
        >
          <AboutMe name={this.state.aboutMe.name} 
          introduction={this.state.aboutMe.introduction}
          contact={this.state.aboutMe.contact}/>
        </Grid>

        {this.state.jobs.map((job) =>
          <Grid
            className="item"
            key={job.company.name} item
            xs={xsBreakpoint}
            sm={smBreakpoint}
            md={mdBreakPoint}
            xl={xlBreakPoint}
          >
            <JobExperience job={job} />
          </Grid>
        )}
        
      </Grid>
    );
  }
}
