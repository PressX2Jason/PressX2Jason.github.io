import React from "react";
import "./AboutMe.css"

import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const avatar1961w = require("../../../data/images/avatar-1961w.jpg")

const avatarStyle = {
    "border-radius": 0,
    width: 200,
    height: 200,
}

export default class AboutMe extends React.Component {
    render() {
        return (
            <div className="root">
                <AppBar position="static" color="default">
                    <Toolbar disableGutters>
                        <Avatar alt="Jason Wu" src={avatar1961w} style={avatarStyle} />
                        <Typography variant="title" color="inherit">
                            Jason Wu
                        </Typography>
                        <Typography variant="body2" color="inherit">
                            this is about me
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}