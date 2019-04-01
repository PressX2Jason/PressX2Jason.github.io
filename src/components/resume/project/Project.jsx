import React from 'react';
import './Project.css';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import TechnologyChips from '../technologyChip/TechnologyChip';
import Accomplishment from '../accomplishment/Accomplishment';

import { formatStartEndDates } from '../../utils/DateFormater';

export default class Project extends React.Component {
    render() {
        return (
            <Card className='card'>
                <CardContent className='content' component='div'>
                    <Grid container spacing={0}>
                        <Grid item key='projectName' xs={12}>
                            <Typography variant='headline' color='primary'>
                                {this.props.project.title}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                        <Grid item xs={6}>
                            <Typography variant='title'>
                                {this.props.project.description}
                            </Typography>
                        </Grid>
                        <Grid item key='startEndDates' xs={6}>
                            <Typography variant='body1' color='textSecondary' key={`${this.props.project.title}startEndDate`} gutterBottom align='right'>
                                {formatStartEndDates(this.props.project.startDate, this.props.project.endDate)}
                            </Typography>
                        </Grid>
                        <Grid item key='startEndDateDivider' xs={12}>
                            <Divider id='projectDivider' />
                        </Grid>
                        <Grid item key='accomplishmentList' xs={12}>
                            <Accomplishment accomplishment={this.props.project.accomplishments} />
                        </Grid>
                        <Grid item key='accomplishmentsDivider' xs={12}>
                            <Divider id='projectDivider' />
                        </Grid>
                        <Grid item key='technologyChips' xs={12}>
                            {this.props.project.technologies.sort().map(tech => <TechnologyChips key={tech} technology={tech} />)}
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

Project.defaultProps = {
    project: {
        title: 'default',
        accomplishments: [],
        technologies: []
    }
}