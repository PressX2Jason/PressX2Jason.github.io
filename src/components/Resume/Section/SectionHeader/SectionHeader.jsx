import React from "react";
import PropTypes from "prop-types";

export default class SectionHeader extends React.Component {
  render() {
    return (
      <div className="sectionHeader">
        {this.props.company.city}
        {this.props.company.name}
        {this.props.company.province}
        {this.props.startDate} -
        {this.props.endDate}
      </div>
    );
  }
} 

SectionHeader.defaultProps = {
  company: {}
}

SectionHeader.propTypes = {
  company: PropTypes.shape({
    city: PropTypes.string,
    name: PropTypes.string,
    province: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string
  })
}
