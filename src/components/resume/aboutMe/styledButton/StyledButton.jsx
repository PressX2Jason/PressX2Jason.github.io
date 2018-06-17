import React from "react";
import "./StyledButton.css";

import Button from '@material-ui/core/Button'; 

const buttonStyle = {
    minWidth : 0,
}

export default class StyledButton extends React.Component {
    render() {
        return (
            <Button
                fullWidth
                variant="outlined"
                color="primary"
                size="large"
                style={buttonStyle}
                href={this.props.href}>
                {this.props.icon}
            </Button>
        );
    };
};

StyledButton.defaultProps = {
    icon: "test",
};