import React from "react";
import "./AboutMe.css"

import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const avatar1051w = require("../../../data/images/avatar-1961w.jpg");
const avatar1961w = require("../../../data/images/avatar-1961w.jpg")

export default class AboutMe extends React.Component {
    render() {
        return (
            <Card className="card">
                <CardContent>
                    <CardMedia
                        className="media"
                        image={avatar1961w}
                        title="Jason Wu"
                    />
                </CardContent>
            </Card>
        );
    }
}