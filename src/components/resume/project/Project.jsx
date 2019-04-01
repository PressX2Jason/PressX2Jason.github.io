import React from 'react';
import './Project.css';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';

import { formatStartEndDates } from '../../utils/DateFormater';

const dividerStyle = {
    margin: '1em',
};


const chipStyle = {
    margin: '0.25em',
    fontWeight: 'bold'
};


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
                            <Divider style={dividerStyle} />
                        </Grid>
                        <Grid item key='accomplishmentList' xs={12}>
                            {formatAccomplishments(this.props.project.accomplishments)}
                        </Grid>
                        <Grid item key='accomplishmentsDivider' xs={12}>
                            <Divider style={dividerStyle} />
                        </Grid>
                        <Grid item key='technologyChips' xs={12}>
                            {this.props.project.technologies.sort().map(mapTechnologiesToChips)}
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

    htmlContent.push(
        <ul key={accomplishments}>
            <Typography variant={accomplishmentStyle} key={accomplishments}>
                {accomplishments.map(x => <li key={x}>{x}</li>)}
            </Typography>
        </ul>
    );

    return htmlContent;
}

function mapTechnologiesToChips(technology) {
    return <Chip
        label={technology}
        key={technology}
        style={chipStyle}
        className='technologyChip' />
}


Project.defaultProps = {
    project: {
        title: 'default',
        accomplishments: [],
        technologies: []
    }
}