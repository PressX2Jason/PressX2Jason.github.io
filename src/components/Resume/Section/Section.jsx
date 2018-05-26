import React from "react";
import { formatStartEndDates } from "./DateFormater";
import { Card, CardHeader, CardTitle, CardText } from "material-ui/Card";

export default class Section extends React.Component {
  renderCardWithWidth(widthAsPercent) {
    return (
      <Card style={{ width: widthAsPercent }}>
        <CardHeader title={this.props.job.company.name} />
        <CardTitle
          title={this.props.job.title}
          subtitle={formatStartEndDates(
            this.props.job.startDate,
            this.props.job.endDate
          )}
        />  
        <CardText>
          {this.props.job.accomplishments.map(mapAccomplishments)}
        </CardText>
      </Card>
    );
  }

  render() {
    let width = window.screen.availWidth;
    if (width > 720) {
      return this.renderCardWithWidth("60%");
    } else {
      return this.renderCardWithWidth("90%");
    }
  }
}

function mapAccomplishments(accomplishment, index) {
  let htmlContent = undefined;
  if (accomplishment.length && typeof accomplishment.valueOf() === "string") {
    htmlContent = <p key={index}> {accomplishment} </p>;
  } else if (
    accomplishment.sectionTitle &&
    accomplishment.sectionAccomplishments
  ) {
    htmlContent = (
      <span key={accomplishment.sectionTitle}>
        <h1>{accomplishment.sectionTitle}</h1>
        {accomplishment.sectionAccomplishments.map((item, index) => (
          <p key={index}> {item} </p>
        ))}
      </span>
    );
  }

  if (htmlContent === undefined) {
    const errorMessage = "unhandled accomplishment encountered at {}. {}".format(
      index,
      accomplishment
    );
    console.log(errorMessage);
    throw errorMessage;
  }
  return htmlContent;
}

Section.defaultProps = {
  job: {
    accomplishments: []
  }
};
