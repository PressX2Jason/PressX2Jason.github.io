import React from "react";
import "./Education.css"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Divider } from "@material-ui/core";

const graduationDateStyle ={
    textAlign: "right",
}

export default class Education extends React.Component {
    render() {
        return (
            <Card>
                <CardContent>
                    <Typography variant="headline" color="primary">
                        Education
                    </Typography>
                    <Typography variant="title">
                        {this.props.education.school}
                    </Typography>
                    <Divider />
                    <Typography variant="body2" color="textSecondary">
                        <Grid container spacing={16}
                            justify="space-between"
                            alignItems="flex-start">
                            <Grid item xs={6}>
                                {this.props.education.degree}
                            </Grid>
                            <Grid item xs={6} style={graduationDateStyle}>
                                    {this.props.education.graduationDate}
                            </Grid>
                        </Grid>
                    </Typography>
                </CardContent>
            </Card>
        )
    };
}

Education.defaultProps = {
    education: {
        "school": ""
    }
}