import React from 'react';
import { formatStartEndDates } from '../../utils/DateFormater';
import './JobExperience.css';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';

const dividerStyle = {
  margin: '1em',
};

const chipStyle = {
  margin: '0.25em',
  fontWeight: 'bold'
};

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
              <Divider style={dividerStyle} />
            </Grid>
            <Grid item key='accomplishmentList' xs={12}>
              {formatAccomplishments(this.props.job.accomplishments)}
            </Grid>
            <Grid item key='accomplishmentsDivider' xs={12}>
              <Divider style={dividerStyle} />
            </Grid>
            <Grid item key='technologyChips' xs={12}>
              {this.props.job.technologies.sort().map(mapTechnologiesToChips)}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

function formatAccomplishments(accomplishments) {
  const accomplishmentStyle = 'body1';
  let htmlContent = [];

  if (accomplishments && typeof (accomplishments[0]) === 'string') {
    htmlContent.push(
      <ul key={accomplishments}>
        <Typography variant={accomplishmentStyle} key={accomplishments}>
          {accomplishments.map(x => <li key={x}>{x}</li>)}
        </Typography>
      </ul>
    );
  } else {
    accomplishments.forEach(x => {
      htmlContent.push(
        <Typography variant={accomplishmentStyle} key={x.sectionTitle}>
          {x.sectionTitle}
        </Typography>
      );
      htmlContent.push(
        <ul key={x.sectionAccomplishments}>
          <Typography variant={accomplishmentStyle} key={x.sectionAccomplishments}>
            {x.sectionAccomplishments.map(section => <li key={section}>{section}</li>)}
          </Typography>
        </ul>
      );
    }
    );
  }

  return htmlContent;
}

function mapTechnologiesToChips(technology) {
  return <Chip
    label={technology}
    key={technology}
    style={chipStyle}
    className='technologyChip' />
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