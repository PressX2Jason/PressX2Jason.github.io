import React from 'react';
import './Accomplishment.css';

import Typography from '@material-ui/core/Typography';

export default class Accomplishment extends React.Component {
    render() {
        const textVariant = 'body1';
        let htmlContext = null;

        if (this.props.accomplishment && typeof (this.props.accomplishment[0]) === 'string') {
            htmlContent = (
                <ul key={this.props.accomplishment}>
                    <Typography variant={textVariant} key={this.props.accomplishment}>
                        {this.props.accomplishment.map(x => <li key={x}>{x}</li>)}
                    </Typography>
                </ul>
            );
        } else {
            htmlContent = this.props.accomplishment.map(accomplishment =>
                <>
                    <Typography variant={textVariant} key={accomplishment.sectionTitle}>
                        {accomplishment.sectionTitle}
                    </Typography>
                    <ul key={accomplishment.sectionAccomplishments}>
                        <Typography variant={textVariant} key={accomplishment.sectionAccomplishments}>
                            {accomplishment.sectionAccomplishments.map(section => <li key={section}>{section}</li>)}
                        </Typography>
                    </ul>
                </>
            );
        }

        return (htmlContent);
    }
}

Accomplishment.defaultProps = {
    accomplishment: [
        {
            sectionTitle: 'default',
            sectionAccomplishments: []
        }
    ]
}