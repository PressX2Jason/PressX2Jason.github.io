import React from "react";
import "./AboutMe.css"

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

import LinkedinBox from 'mdi-material-ui/Linkedin';
import GithubBox from 'mdi-material-ui/GithubCircle';
import Download from 'mdi-material-ui/Download';
import Phone from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/Email';


const avatar1961w = require("../../../data/images/avatar-1961w.jpg");

const chipStyle = {
    margin: "0.25em",
}

const card = {
    display: "flex",
    wrap: "wrap"
}

const avatarStyle = {
    borderRadius: 0,
    width: "100%",
    height: "100%",
    margin: "auto",
}

const dividerStyle = {
    margin: "1em",
};

export default class AboutMe extends React.Component {
    constructor(props){
        super(props);

        this.openUrl = this.openUrl.bind(this);
    }

    openUrl(url) {
        window.open(url, "_blank");
    }

    render() {
        return (
            <Card style={card}>
                <Grid container spacing={16}>
                    <Grid item xs={12} sm={4}>
                        <CardMedia image={avatar1961w} style={avatarStyle} title="That's me!" />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <CardContent>
                            <Typography variant="headline">{this.props.name}</Typography>
                            <Divider light style={dividerStyle} />
                            <Typography variant="subheading" color="textSecondary">{this.props.introduction}</Typography>
                            <Divider style={dividerStyle} />
                            <Chip
                                avatar={
                                    <Avatar>
                                        <LinkedinBox titleAccess="Linkedin Icon" />
                                    </Avatar>
                                }
                                style={chipStyle}
                                label="softwaredevjasonwu"
                                onClick={() => this.openUrl(this.props.contact.linkedin)} />
                            <Chip
                                avatar={
                                    <Avatar>
                                        <GithubBox titleAccess="Github Icon" />
                                    </Avatar>
                                }
                                style={chipStyle}
                                label="DrWusiji"
                                onClick={() => this.openUrl(this.props.contact.github)}
                            />
                            <Chip
                                avatar={
                                    <Avatar>
                                        <Phone titleAccess="Phone number" />
                                    </Avatar>
                                }
                                style={chipStyle}
                                label={this.props.contact.phone}
                                onClick={() => this.openUrl(`tel:+1${this.props.contact.phone}`)}
                            />
                            <Chip
                                avatar={
                                    <Avatar>
                                        <Email titleAccess="GMail email" />
                                    </Avatar>
                                }
                                style={chipStyle}
                                label={this.props.contact.email}
                                onClick={() => this.openUrl(`mailto:${this.props.contact.email}`)}
                            />
                            <Chip
                                avatar={
                                    <Avatar>
                                        <Download titleAccess="Download pdf copy of the resume" />
                                    </Avatar>
                                }
                                style={chipStyle}
                                label="Download .pdf"
                                onClick={() => this.openUrl(this.props.downloadLink)}
                            />
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        );
    }
}

AboutMe.defaultProps = {
    "contact": {},
    "education": {}
}