import React from "react";
import "./AboutMe.css"

import StyledButton from './styledButton/StyledButton';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

import LinkedinBox from 'mdi-material-ui/Linkedin';
import GithubBox from 'mdi-material-ui/GithubCircle';
import Download from 'mdi-material-ui/Download';
import Phone from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/Email';


const avatar1961w = require("../../../data/images/avatar-1961w.jpg");

const card = {
    display: "flex",
    wrap: "wrap",
};

const avatarStyle = {
    borderRadius: 0,
    width: "100%",
    height: "100%",
    margin: "auto",
};

const dividerStyle = {
    margin: "1em",
};

export default class AboutMe extends React.Component {
    render() {
        return (
            <Card style={card}>
                <Grid container spacing={16}>
                    <Grid item xs={12} sm={4}>
                        <CardMedia image={avatar1961w} style={avatarStyle} title="That's me!" />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <CardContent>
                            <Grid
                                justify="center"
                                alignItems="center"
                                alignContent="space-around"
                                container
                                spacing={16}
                            >
                                <Grid item xs={12}>
                                    <Typography variant="headline">{this.props.name}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider light style={dividerStyle} />
                                </Grid>
                                <Grid item xs={12}>
                                    {this.props.introduction.map(line => 
                                        <Typography key={line} paragraph variant="body1" color="textSecondary">
                                            {line}
                                        </Typography>
                                    )}
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider style={dividerStyle} />
                                </Grid>
                                <Grid
                                    container
                                    spacing={16}
                                >
                                    <Grid item xs={12} sm={6} md={3} >
                                        <StyledButton icon={<LinkedinBox titleAccess="Linkedin Icon" />} href={this.props.contact.linkedin} />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} >
                                        <StyledButton icon={<GithubBox titleAccess="Github Icon" />} href={this.props.contact.github} />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} >
                                        <StyledButton icon={<Phone titleAccess="Phone number" />} href={`tel:+1-${this.props.contact.phone}`} />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} >
                                        <StyledButton icon={<Email titleAccess="GMail" />} href={`mailto:${this.props.contact.email}`} />
                                    </Grid>
                                    <Grid item xs={12} >
                                        <StyledButton icon={<Download titleAccess="Download pdf copy of the resume" />} href={this.props.downloadLink} text=".pdf" />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        );
    };
};

AboutMe.defaultProps = {
    "contact": {},
    "education": {}
}