import React from "react";
import "./AboutMe.css"

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import LinkedinBox from 'mdi-material-ui/Linkedin'
import GithubBox from 'mdi-material-ui/GithubCircle'
import ContactPhoneIcon from '@material-ui/icons/ContactPhone'


const avatar1961w = require("../../../data/images/avatar-1961w.jpg");

const chipStyle = {
    margin: "0.25em",
}

const aboutMeCard = {
    display: "flex",
}

const avatarStyle = {
    "borderRadius": 0,
    width: 200,
    height: 200,
}

export default class AboutMe extends React.Component {
    render() {
        return (
            <div>
                <Card style={aboutMeCard}>
                    <CardMedia image={avatar1961w} style={avatarStyle} title="That's me!" />
                    <div className="aboutMeDetails">
                        <CardContent className="content">
                            <Typography variant="headline">{this.props.name}</Typography>
                            <Typography variant="subheading" color="textSecondary">{this.props.introduction}</Typography> <linkedinBox />
                            <Divider />
                            <Chip
                                avatar={
                                    <Avatar>
                                        <LinkedinBox titleAccess="Linkedin Icon" />
                                    </Avatar>
                                }
                                style={chipStyle}
                                label={this.props.contact.linkedin}
                                onClick={() => openUrl(this.props.contact.linkedin)} />
                            <Chip
                                avatar={
                                    <Avatar>
                                        <GithubBox titleAccess="Github Icon" />
                                    </Avatar>
                                }
                                style={chipStyle}
                                label={this.props.contact.github}
                                onClick={() => openUrl(this.props.contact.github)} />
                            <Chip
                                avatar={
                                    <Avatar>
                                        <ContactPhoneIcon titleAccess="Github Icon" />
                                    </Avatar>
                                }
                                style={chipStyle}
                                label={this.props.contact.phone}
                            />
                        </CardContent>
                    </div>
                </Card>
            </div>
        );
    }
}

function openUrl(url) {
    window.open(url, "_blank");
}
