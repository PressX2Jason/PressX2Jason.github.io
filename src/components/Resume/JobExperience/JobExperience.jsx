import React from "react";
import { formatStartEndDates } from "./DateFormater";
import "./JobExperience.css"
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export default class JobExperience extends React.Component {
  render() {
    return (
      <Card className="card">
        <CardContent className="content">
          <Typography className="title" color="textSecondary">
            {this.props.job.company.name}
          </Typography>
          <Typography variant="headline" component="h2">
            {this.props.job.title}
          </Typography>
          <Divider />
          <Typography className="p" color="textSecondary" key={`${this.props.job}startEndDate`}>
            {formatStartEndDates(
              this.props.job.startDate,
              this.props.job.endDate
            )}
          </Typography>
          {this.props.job.accomplishments.map(mapAccomplishments)}
        </CardContent>
      </Card>
    );
  }
}

function mapAccomplishments(accomplishment, index) {
  let htmlContent = undefined;
  if (accomplishment.hasOwnProperty("sectionTitle") && accomplishment.hasOwnProperty("sectionAccomplishments")) {
    htmlContent = [
      <Typography component="h3" key={accomplishment.sectionTitle}>
        {accomplishment.sectionTitle}
      </Typography>
    ];

    accomplishment.sectionAccomplishments.forEach(accomplishment => {
      htmlContent.push(<Typography component="p" key={accomplishment}>
        {accomplishment}
      </Typography>)
    });

  } else {
    htmlContent = (
      <Typography component="p" key={accomplishment}>
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

JobExperience.defaultProps = {
  job: {
    company: {},
    accomplishments: []
  }
};
