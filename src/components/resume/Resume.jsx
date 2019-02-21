import React from 'react';
import './Resume.css';

import Grid from '@material-ui/core/Grid';
import AboutMe from './aboutMe/AboutMe';
import JobExperience from './jobExperience/JobExperience';
import Introduction from '../../data/AboutMe';
import WorkExp from '../../data/WorkExperience';
import Education from './education/Education';

const firstCardStyle = {
  paddingTop: '4em',
};

export default class Resume extends React.Component {
  render() {
    return (
      <div className='resume'>
        {centerGrid(<AboutMe name={Introduction.name}
          introduction={Introduction.introduction}
          contact={Introduction.contact}
          downloadLink={Introduction.pdf}
        />,
          Introduction.name,
          firstCardStyle
        )}
        {WorkExp.jobs.map((job) =>
          centerGrid(<JobExperience job={job} />,
            job.company.name))
        }
        {
          centerGrid(<Education education={Introduction.education} />,
            Introduction.education.school)
        }
      </div >
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
  const xsBreakpoint = 12;
  const smBreakpoint = 10;
  const mdBreakPoint = 8;
  const xlBreakPoint = 6;

  return (<Grid
    className='item'
    key={key} item
    xs={xsBreakpoint}
    sm={smBreakpoint}
    md={mdBreakPoint}
    xl={xlBreakPoint}
  >
    {item}
  </Grid>);
}
