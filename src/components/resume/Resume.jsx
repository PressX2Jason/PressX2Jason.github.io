import React from 'react';
import './Resume.css';

import Grid from '@material-ui/core/Grid';

import Introduction from '../../data/AboutMe';
import AboutMe from './aboutMe/AboutMe';
import JobExperience from './jobExperience/JobExperience';
import Project from './project/Project';

import WorkData from '../../data/WorkExperience';
import ProjectData from '../../data/Project';
import EducationData from './education/Education';

const firstCardStyle = {
  paddingTop: '4em',
};

export default class Resume extends React.Component {
  render() {
    return (
      <div className='resume'>
        {centerGrid(
          <AboutMe name={Introduction.name}
            introduction={Introduction.introduction}
            contact={Introduction.contact}
            downloadLink={Introduction.pdf} />,
          Introduction.name,
          firstCardStyle
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
          <EducationData education={Introduction.education} />,
          Introduction.education.school
        )}
      </div>
    );
  }
}

function centerGrid(item, key, style) {
  return (<Grid
    container
    key={key}
    spacing={32}
    justify='center'
    style={style}>
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
