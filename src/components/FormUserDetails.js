import React, { Component, Fragment } from 'react';
import AppBar from './AppBar';
import TextField from '@material-ui/core/TextField'    
import { Button } from '@material-ui/core';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (

                <Fragment>
                    <AppBar title='hola' />
                    <TextField
                        style={styles.input}
                        placeholder='Enter Your First Name'
                        label='First Name'
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br />
                    <TextField
                        style={styles.input}
                        placeholder='Enter Your Last Name'
                        label='First Name'
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                    <br />
                    <TextField
                        style={styles.input}
                        placeholder='Enter Your Email'
                        label='Email'
                        onChange={handleChange('email')} 
                        defaultValue={values.email}
                    />
                    <br />
                    <Button
                        style={styles.button} 
                        variant="contained" 
                        color="primary"
                        onClick={this.continue}>Continue</Button>
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

export default FormUserDetails
