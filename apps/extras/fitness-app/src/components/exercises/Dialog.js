import React, { Fragment, Component } from 'react';
import {
  Button, 
  Dialog, 
  DialogContent, 
  DialogContentText, 
  DialogTitle
} from '@material-ui/core';
import { Add } from '@material-ui/icons';

import Form from './Form';

export default class AppDialog extends Component {
  state = {
    open: false
  }

  handleToggle = () => {
    this.setState({ 
      open: !this.state.open 
    });
  }

  handleSubmit = exercise => {
    this.handleToggle();
    this.props.onCreate(exercise);
  }
  
  render() {
    const { open } = this.state;
    const { muscles } = this.props;

    return (
      <Fragment>
        <Button variant="fab" mini onClick={this.handleToggle}>
          <Add />
        </Button>
        <Dialog
          open={open}
          onClose={this.handleToggle}
        >
          <DialogTitle>
            Create a New Exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill up the form below
            </DialogContentText>
            <Form 
              muscles={muscles} 
              onSubmit={this.handleSubmit}
            />
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}
