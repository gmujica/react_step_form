import React, { Component, Fragment } from 'react';
import AppBar from './AppBar';
import TextField from '@material-ui/core/TextField'    
import { Button } from '@material-ui/core';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
                <Fragment>
                    <AppBar title='Enter Personal Details' />
                    <TextField
                        style={styles.input}
                        placeholder='Enter Your Ocupation'
                        label='Ocupation'
                        onChange={handleChange('ocupation')}
                        defaultValue={values.ocupation}
                    />
                    <br />
                    <TextField
                        style={styles.input}
                        placeholder='Enter Your City'
                        label='City'
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    />
                    <br />
                    <TextField
                        style={styles.input}
                        placeholder='Enter Your Bio'
                        label='Bio'
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}
                    />
                    <br />
                    <Button 
                        style={styles.button}
                        variant="contained" 
                        color="primary"
                        onClick={this.continue}>
                            Continue
                    </Button>
                    <Button
                        style={styles.button} 
                        variant="contained"
                        onClick={this.back}>
                            Back
                    </Button>
                </Fragment>

        )
    }
}

const styles = {
    button: {
        margin: 15
    },
    input: {
        margin: 15,
        width: 350
    }
}

export default FormPersonalDetails
