import React from "react";
import "./AboutMe.css"

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const avatar1961w = require("../../../data/images/avatar-1961w.jpg")

const aboutMeCard = {
    display: "flex",
}

const avatarStyle = {
    "border-radius": 0,
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
                            <Typography variant="headline">Jason Wu</Typography>
                            <Typography variant="subheading" color="textSecondary">This is about me</Typography>
                        </CardContent>
                    </div>
                </Card>
            </div>
        );
    }
}