import React from "react";
import PropTypes from "prop-types";
var moment = require("moment");

export default class SectionHeader extends React.Component {
  render() {
    return (
      <div className="sectionHeader">
        {this.props.company.city}
        {this.props.company.name}
        {this.props.company.province}
        {formatStartEndDates(this.props.startDate, this.props.endDate)}
      </div>
    );
  }
}

function formatStartEndDates(startDate, endDate) {
  return (
    <div>
      {startDate} - {endDate ? endDate : "Current"}{" "}
      {formatDuration(startDate, endDate)}
    </div>
  );
}

function formatDuration(startDate, endDate) {
  const formatString = "YYYY-MM";
  const startMoment = moment(startDate, formatString);
  const endMoment = endDate ? moment(endDate, formatString) : moment();
  const durationMoment = moment.duration(endMoment.diff(startMoment));

  let duration = `
  ${durationMoment.months()} 
  Month${durationMoment.months() > 1 ? "s" : ""}
  `;
  if (durationMoment.years() != 0) {
    duration = `
    ${durationMoment.years()} Years${durationMoment.years() > 1 ? "s" : ""}
     ${duration}
    `;
  }
  return `(${duration})`;
}

SectionHeader.defaultProps = {
  company: {}
};

SectionHeader.propTypes = {
  company: PropTypes.shape({
    city: PropTypes.string,
    name: PropTypes.string,
    province: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string
  })
};
