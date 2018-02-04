import React from "react";
import SectionHeader from "./SectionHeader/SectionHeader";

export default class Section extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="section">
        {this.props.job.title}
        <SectionHeader
          company={this.props.job.company}
          startDate={this.props.job.startDate}
          endDate={this.props.job.endDate}
        />
        <div>{this.props.job.accomplishments.map(mapAccomplishments)}</div>
      </div>
    );
  }
}

function mapAccomplishments(accomplishment, index) {
  let htmlContent = undefined;
  if (accomplishment.length && typeof accomplishment.valueOf() === "string") {
    htmlContent = accomplishment;
  } else if (
    accomplishment.sectionTitle &&
    accomplishment.sectionAccomplishments
  ) {
    htmlContent = (
      <span>
        <h1>{accomplishment.sectionTitle}</h1>
        {accomplishment.sectionAccomplishments.map((item, index) => (
          <div key={index}> {item} </div>
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
  return <div key={index}>{htmlContent}</div>;
}

Section.defaultProps = {
  job: {
    accomplishments: []
  }
};
