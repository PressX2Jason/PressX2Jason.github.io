import React from 'react';
import './Accomplishment.css';

import Typography from '@material-ui/core/Typography';

export default class Accomplishment extends React.Component {
    render() {
        const textVariant = 'body1';
        let htmlContent = [];
    
        if (this.props.accomplishment && typeof (this.props.accomplishment[0]) === 'string') {
            htmlContent.push(
                <ul key={this.props.accomplishment}>
                    <Typography variant={textVariant} key={this.props.accomplishment}>
                        {this.props.accomplishment.map(x => <li key={x}>{x}</li>)}
                    </Typography>
                </ul>
            );
        } else {
            this.props.accomplishment.forEach(x => {
                htmlContent.push(
                    <Typography variant={textVariant} key={x.sectionTitle}>
                        {x.sectionTitle}
                    </Typography>
                );
                htmlContent.push(
                    <ul key={x.sectionAccomplishments}>
                        <Typography variant={textVariant} key={x.sectionAccomplishments}>
                            {x.sectionAccomplishments.map(section => <li key={section}>{section}</li>)}
                        </Typography>
                    </ul>
                );
            }
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