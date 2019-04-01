import React from 'react';
import './JobExperience.css';

import { formatStartEndDates } from '../../utils/DateFormater';

import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import TechnologyChips from '../technologyChip/TechnologyChip';
import Accomplishment from '../accomplishment/Accomplishment';


export default class JobExperience extends React.Component {
  render() {
    return (
      <Card className='card'>
        <CardContent className='content' component='div'>
          <Grid container spacing={0}>
            <Grid item key='companyName' xs={12}>
              <Typography variant='headline' color='primary'>
                {this.props.job.company.name}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <Typography variant='title'>
                {this.props.job.title}
              </Typography>
            </Grid>
            <Grid item key='startEndDates' xs={6}>
              <Typography variant='body1' color='textSecondary' key={`${this.props.job}startEndDate`} gutterBottom align='right'>
                {formatStartEndDates(this.props.job.startDate, this.props.job.endDate)} {(this.props.job.contract ? '(Contract)' : '')}
              </Typography>
            </Grid>
            <Grid item key='startEndDateDivider' xs={12}>
              <Divider id='jobExperienceDivider' />
            </Grid>
            <Grid item key='accomplishmentList' xs={12}>
              <Accomplishment accomplishment={this.props.job.accomplishments} />
            </Grid>
            <Grid item key='accomplishmentsDivider' xs={12}>
              <Divider id='jobExperienceDivider' />
            </Grid>
            <Grid item key='technologyChips' xs={12}>
              {this.props.job.technologies.sort().map(tech => <TechnologyChips key={tech} technology={tech} />)}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

JobExperience.defaultProps = {
  job: {
    company: {
      name: 'default'
    },
    accomplishments: [
      {
        sectionTitle: 'defaultSection',
        sectionAccomplishments: []
      }
    ],
    technologies: [],
  }
}