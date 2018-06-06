import React from "react";
import { formatStartEndDates } from "./DateFormater";
import "./JobExperience.css"
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip'

const dividerChipStyle = {
  margin: "1em",
};

const chipStyle = {
  margin: "0.25em",
}

export default class JobExperience extends React.Component {
  render() {
    return (
      <Card className="card">
        <CardContent className="content">
          <Typography variant="headline" color="primary">
            {this.props.job.company.name}
          </Typography>
          <Typography variant="title">
            {this.props.job.title}
          </Typography>
          <Divider />
          <Typography variant="caption" color="textSecondary" key={`${this.props.job}startEndDate`} gutterBottom>
            {formatStartEndDates(this.props.job.startDate, this.props.job.endDate) + (this.props.job.contract ? " (Contract) " : "")}
          </Typography>
          {this.props.job.accomplishments.map(mapAccomplishments)}
          <Divider style={dividerChipStyle} />
          {this.props.job.technologies.sort().map(mapTechnologiesToChips)}
        </CardContent>
      </Card>
    );
  }
}

function mapAccomplishments(accomplishment, index) {
  const sectionTitle = "title"
  const accomplishmentVariant = "body2";

  let htmlContent = undefined;

  if (accomplishment.hasOwnProperty("sectionTitle") && accomplishment.hasOwnProperty("sectionAccomplishments")) {
    htmlContent = [
      <Typography className="sectionTitle" variant={sectionTitle} key={accomplishment.sectionTitle}>
        {accomplishment.sectionTitle}
      </Typography>
    ];
    accomplishment.sectionAccomplishments.forEach(accomplishment => {
      htmlContent.push(
        <Typography className="sectionAccomplishments" variant={accomplishmentVariant} key={accomplishment}>
          {accomplishment}
        </Typography>)
    });
  } else {
    htmlContent = (
      <Typography variant={accomplishmentVariant} key={accomplishment}>
        {accomplishment}
      </Typography>
    );
  }

  if (htmlContent === undefined) {
    const errorMessage = `unhandled accomplishment encountered at ${index}. ${accomplishment}`
    console.log(errorMessage);
    throw errorMessage;
  }
  return htmlContent;
}

function mapTechnologiesToChips(technology, index) {
  return <Chip
    label={technology}
    key={technology}
    style={chipStyle}
    className="technologyChip" />
}