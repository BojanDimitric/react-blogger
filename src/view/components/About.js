import React, { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            about: ''
        };
    }

    componentWillMount() {

    }

    render() {
        const about = this.state.about.map(about =>
            <div className="about">
                <img src={about.imagesrc} alt="me" />
                <h3>O meni</h3>
                <p>{about.about}</p>
            </div>
        );
        return (
            <div className="container px-0">
                {about}
            </div>
        );
    };
}

export default About;