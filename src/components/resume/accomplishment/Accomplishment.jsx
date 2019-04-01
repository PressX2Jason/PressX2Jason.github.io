import React from 'react';
import './Accomplishment.css';

import Typography from '@material-ui/core/Typography';

export default class Accomplishment extends React.Component {
    render() {
        return (
            formatAccomplishments(this.props.accomplishment)
        );
    }
}

function formatAccomplishments(accomplishment) {
    const textVariant = 'body1';
    let htmlContent = [];

    if (accomplishment && typeof (accomplishment[0]) === 'string') {
        htmlContent.push(
            <ul key={accomplishment}>
                <Typography variant={textVariant} key={accomplishment}>
                    {accomplishment.map(x => <li key={x}>{x}</li>)}
                </Typography>
            </ul>
        );
    } else {
        accomplishment.forEach(x => {
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

    return htmlContent;
}

Accomplishment.defaultProps = {
    accomplishments: [
        {
            sectionTitle: 'default',
            sectionAccomplishments: []
        }
    ]
}