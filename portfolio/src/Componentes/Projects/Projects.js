import React from 'react';
import SplitText from '../SplitText';
import TrackVisibility from 'react-on-screen';
import './Projects.css'

export default class Projects extends React.Component {
    render() {
        return (
            <div className="home">
                <h1>
                    <SplitText copy="Projects" role="heading" delay="0.4"></SplitText>
                </h1>
            </div>
            );
    }
}