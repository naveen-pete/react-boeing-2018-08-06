import React, { Component } from 'react';
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  FormControl: {
    width: 300
  }
});

export default withStyles(styles) (
  class Form extends Component {
    state = this.getInitialState();
    
    getInitialState() {
      const { exercise } = this.props;
      
      return exercise ? exercise : {
        title: '',
        description: '',
        muscles: ''
      };
    }

    // New lifecycle method
    // static getDerivedStateFromProps({ exercise }, state) {
    //   if(!exercise) return null;

    //   // Update state only when user selects a new exercise
    //   return exercise.id !== state.id ? exercise : null;
    // }

    // Old lifecycle method
    // componentWillReceiveProps({ exercise }) {
    //   this.setState({
    //     ...exercise
    //   });
    // }
  
    handleChange = name => ({ target: { value } }) => {
      this.setState({
        [name]: value
      });
    }
  
    handleSubmit = () => {
      // TODO: form validation pending
  
      this.props.onSubmit({
        id: this.state.title.toLocaleLowerCase().replace(/ /g, '-'),
        ...this.state
      });
    }
  
    render() {
      const { exercise, classes, muscles: categories } = this.props;
      const { title, description, muscles } = this.state;

      return (
        <form>
          <TextField
            label="Title"
            value={title}
            onChange={this.handleChange('title')}
            margin="normal"
            className={classes.FormControl}
          />
          <br />
          <FormControl className={classes.FormControl}>
            <InputLabel htmlFor="muscles">Muscles</InputLabel>
            <Select
              value={muscles}
              onChange={this.handleChange('muscles')}
            >
              {categories.map(category => <MenuItem key={category} value={category}>{category}</MenuItem>)}
            </Select>
          </FormControl>
          <br />
          <TextField
            multiline
            rows="4"
            label="Description"
            value={description}
            onChange={this.handleChange('description')}
            margin="normal"
            className={classes.FormControl}
          />
          <br />
          <Button color="primary" variant="raised" onClick={this.handleSubmit}>
            { exercise ? 'Update' : 'Create' }
          </Button>
        </form>
      );
    }
  }
);