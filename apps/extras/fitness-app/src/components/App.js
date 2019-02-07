import React, { Component, Fragment } from 'react';
import { Header, Footer } from './layouts';
import Exercises from './exercises';
import { exercises, muscles } from '../store';

class App extends Component {
  constructor() {
    super();

    this.state = {
      exercises,
      exercise: {},
      editMode: false
    };

    this.handleCategorySelect = this.handleCategorySelect.bind(this);
    this.handleExerciseSelect = this.handleExerciseSelect.bind(this);
    this.handleExerciseCreate = this.handleExerciseCreate.bind(this);
    this.handleExerciseDelete = this.handleExerciseDelete.bind(this);
    this.handleExerciseBeginEdit = this.handleExerciseBeginEdit.bind(this);
    this.handleExerciseEndEdit = this.handleExerciseEndEdit.bind(this);
  }

  getExercisesByMuscles() {
    const initExercises = muscles.reduce((acc, muscle) => ({
      ...acc,
      [muscle]: []
    }), {});

    return Object.entries(
      this.state.exercises.reduce((acc, exercise) => {
        const { muscles } = exercise;
        acc[muscles] = [...acc[muscles], exercise];
        return acc;
      }, initExercises)
    );
  }

  handleExerciseSelect(id) {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: false
    }));
  }

  handleCategorySelect(category) {
    this.setState({ category });
  }

  handleExerciseCreate(exercise) {
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    }));
  }

  handleExerciseDelete(id) {
    this.setState(({ exercises, exercise, editMode }) => ({
      exercises: exercises.filter(ex => ex.id !== id),
      editMode: exercise.id === id ? false : editMode,
      exercise: exercise.id === id ? {} : exercise
    }));
  }

  handleExerciseBeginEdit(id) {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: true
    }));
  }

  handleExerciseEndEdit(exercise) {
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises.map(ex => ex.id === exercise.id ? exercise : ex)
      ],
      exercise
    }));
  }
  
  render() {
    const exercises = this.getExercisesByMuscles();
    const { category, exercise, editMode } = this.state;
    return (
      <Fragment>
        <Header 
          muscles={muscles} 
          onCreate={this.handleExerciseCreate}
        />

        <Exercises 
          editMode={editMode}
          muscles={muscles}
          exercises={exercises}
          category={category}
          exercise={exercise} 
          onSelect={this.handleExerciseSelect}
          onDelete={this.handleExerciseDelete}
          onBeginEdit={this.handleExerciseBeginEdit}
          onEndEdit={this.handleExerciseEndEdit}
        />

        <Footer 
          category={category}
          muscles={muscles} 
          onCategorySelect={this.handleCategorySelect} 
        />
      </Fragment>
    );
  }
}

export default App;
