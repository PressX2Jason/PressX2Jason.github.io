import React from "react";
import Grid from '@material-ui/core/Grid';
import JobExperience from "./JobExperience/JobExperience";
import WorkExp from "../../data/WorkExperience";


export default class Resume extends React.Component {
  render() {
    return (
      <Grid
        container
        className="resume"
        spacing={32}
        alignContent="center"
        justify="center"
      >
        {WorkExp.jobs.map((job) =>
          <Grid
            className="item"
            key={job.company.name} item
            xs={12}
            sm={10}
            md={8}
            xl={7}>
            <JobExperience job={job} />
          </Grid>
        )}

      </Grid>
    );
  }
}
