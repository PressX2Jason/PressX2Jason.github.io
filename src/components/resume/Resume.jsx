import React from 'react';
import './Resume.css';

import Grid from '@material-ui/core/Grid';

import AboutMe from './aboutMe/AboutMe';
import JobExperience from './jobExperience/JobExperience';
import Education from './education/Education';
import Project from './project/Project';

import AboutMeData from '../../data/AboutMe';
import WorkData from '../../data/WorkExperience';
import ProjectData from '../../data/Project';


export default class Resume extends React.Component {
  render() {
    return (
      <div className='resume'>
        {centerGrid(
          <AboutMe name={AboutMeData.name}
            introduction={AboutMeData.introduction}
            contact={AboutMeData.contact}
            downloadLink={AboutMeData.pdf} />,
          AboutMeData.name,
          'firstCard'
        )}
        {WorkData.jobs.map(job =>
          centerGrid(
            <JobExperience job={job} />,
            job.company.name
          )
        )}
        {ProjectData.projects.map(project =>
          centerGrid(
            <Project project={project} />,
            project.title
          )
        )}
        {centerGrid(
          <Education education={AboutMeData.education} />,
          AboutMeData.education.school
        )}
      </div>
    );
  }
}

function centerGrid(item, key, className) {
  return (<Grid
    container
    key={key}
    spacing={32}
    justify='center'
    className={className}>
    {gridItem(item, key)}
  </Grid>
  );
}

function gridItem(item, key) {
  return (<Grid
    className='item'
    key={key} item
    xs={12}
    sm={10}
    md={8}
    xl={6}
  >
    {item}
  </Grid>);
}
