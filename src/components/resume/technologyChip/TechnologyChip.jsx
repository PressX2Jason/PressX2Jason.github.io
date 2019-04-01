import React from 'react';
import './TechnologyChip.css';

import Chip from '@material-ui/core/Chip';

export default class TechnologyChip extends React.Component {
    render() {
        return (
            <Chip label={this.props.technology} className='technologyChip' />
        );
    }
}