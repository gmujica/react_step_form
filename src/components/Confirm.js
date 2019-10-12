import React, { Component, Fragment } from 'react';
import AppBar from './AppBar';
import List from '@material-ui/core/List'; 
import ListItem from '@material-ui/core/List'; 
import ListItemText from '@material-ui/core/ListItemText';
import { Button } from '@material-ui/core';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM (on case of backend save)
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: {
            firstName,
            lastName,
            email,
            ocupation,
            city,
            bio } } = this.props;
        return (

                <Fragment>
                    <AppBar title='Confirm User Data' />
                    <List>
                        <ListItem>
                            <ListItemText
                                primary='Firs Name'
                                secondary={ firstName }
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary='Last Name'
                                secondary={ lastName }
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                                primary='Email'
                                secondary={ email }
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary='Occupation'
                                secondary={ ocupation }
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                                primary='City'
                                secondary={ city }
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                                primary='Bio'
                                secondary={ bio }
                            />
                        </ListItem>
                    </List>
                    <br />
                    <Button 
                        style={styles.button}
                        variant="contained" 
                        color="primary"
                        onClick={this.continue}>
                            Confirm & Continue
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
    }
}

export default FormUserDetails
