import React from 'react';
import './StyledButton.css';

import Button from '@material-ui/core/Button'; 

export default class StyledButton extends React.Component {
    render() {
        return (
            <Button
                fullWidth
                variant='outlined'
                color='primary'
                size='large'
                id='styledButton'
                href={this.props.href}>
                {this.props.icon} {this.props.text}
            </Button>
        );
    };
};

StyledButton.defaultProps = {
    icon: 'test',
};