import React from "react";
import { formatStartEndDates } from "./DateFormater";
import "./JobExperience.css";
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Grid from "@material-ui/core/Grid";

const dividerStyle = {
  margin: "1em",
};

const chipStyle = {
  margin: "0.25em",

}

export default class JobExperience extends React.Component {
  render() {
    console.log("processing ")
    return (
      <Card className="card">
        <CardContent className="content">
          <Grid container spacing={0}>
            <Grid item key="companyName" xs={12} sm={4}>
              <Typography variant="headline" color="primary">
                {this.props.job.company.name}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <Typography variant="title">
                {this.props.job.title}
              </Typography>
            </Grid>
            <Grid item key="startEndDates" xs={6}>
              <Typography variant="body1" color="textSecondary" key={`${this.props.job}startEndDate`} gutterBottom align="right">
                {formatStartEndDates(this.props.job.startDate, this.props.job.endDate)} {(this.props.job.contract ? "(Contract)" : "")}
              </Typography>
            </Grid>
            <Grid item key="startEndDateDivider" xs={12}>
              <Divider style={dividerStyle} />
            </Grid>
            <Grid item key="accomplishments" xs={12}>
              {this.props.job.accomplishments.map(mapAccomplishments)}
            </Grid>
            <Grid item key="accomplishmentsDivider" xs={12}>
              <Divider style={dividerStyle} />
            </Grid>
            <Grid item key="technologyChips" xs={12}>
              {this.props.job.technologies.sort().map(mapTechnologiesToChips)}
            </Grid>
          </Grid>
        </CardContent>
      </Card >
    );
  }
}

function mapAccomplishments(accomplishment, index, array) {
  const accomplishmentVariant = "body1";

  let htmlContent = undefined;

  if (accomplishment.hasOwnProperty("sectionTitle") && accomplishment.hasOwnProperty("sectionAccomplishments")) {
    // htmlContent = <SectionLists title={accomplishment.sectionTitle}  list={accomplishment.sectionAccomplishments} listVariant={accomplishmentVariant} />
  } else {
    htmlContent = (
      <Typography variant={accomplishmentVariant} key={accomplishment}>
        {gitaccomplishment}
      </Typography>
    );
  }

  return htmlContent;
}

function SectionLists(props) {
  return (
    <div>
      <Typography className="sectionTitle" variant={props.title} key={props.title}>
        {props.title}
      </Typography>
      <Typography variant={props.listVariant}>
        <ul>
          {props.list.foreach(x => <li>x</li>)}
        </ul>
      </Typography>
    </div>
  );
}

function mapTechnologiesToChips(technology, index) {
  return <Chip
    label={technology}
    key={technology}
    style={chipStyle}
    className="technologyChip" />
}

JobExperience.defaultProps = {

}