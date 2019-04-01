import React from 'react';
import './Education.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

import { formatDate } from '../../utils/DateFormater';


const graduationDateStyle = {
    textAlign: 'right',
}

export default class Education extends React.Component {
    render() {
        return (
            <Card>
                <CardContent>
                    <Typography variant='headline' color='primary'>
                        Education
                    </Typography>
                    <Typography variant='title'>
                        {this.props.education.school}
                    </Typography>
                    <Divider id='educationDivider'/>
                    <Grid container spacing={16}
                        justify='space-between'
                        alignItems='flex-start'>
                        <Grid item xs={6}>
                            <Typography variant='body1' color='textSecondary'>
                                {this.props.education.degree}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} style={graduationDateStyle}>
                            <Typography variant='body1' color='textSecondary'>
                                {formatDate(this.props.education.graduationDate)}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent >
            </Card >
        )
    };
}

Education.defaultProps = {
    education: {
        'school': ''
    }
}