import React, { Component, Fragment } from 'react';
import AppBar from './AppBar';

export class Success extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
                <Fragment>
                    <AppBar title='Success' />
                    <h1>Thank You For Your Submmission</h1>
                    <p>You will get an email with futher instructions</p>
                </Fragment>
        )
    }
}

export default Success;
