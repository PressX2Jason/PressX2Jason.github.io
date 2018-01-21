import React from 'react';

import Section from './Section/Section'

export default class Resume extends React.Component {
    render() {
        return (
            <div className="resume">
                I am a Resume.
                <Section/>
            </div>
        );
    }
}