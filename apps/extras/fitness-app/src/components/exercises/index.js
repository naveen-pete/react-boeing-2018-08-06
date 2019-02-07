import React, { Fragment } from 'react';
import { 
  Grid, 
  Paper, 
  Typography, 
  List, 
  ListItem, 
  ListItemText,
  ListItemSecondaryAction,
  IconButton 
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

import Form from './Form';

const styles = {
  paper: {
    padding: 20,
    margin: 10,
    height: 500,
    overflowY: 'auto'
  }
};

const Exercises = ({ 
  editMode,
  muscles,
  exercises, 
  category, 
  exercise,
  exercise: {
    id,
    title = 'Welcome!',
    description = 'Please select an exercise from the list on the left.'
  },
  onSelect,
  onDelete,
  onBeginEdit,
  onEndEdit
}) => (
  <Grid container>
    <Grid item sm>
      <Paper style={ styles.paper }>
        {exercises.map(([group, exercises]) =>
          !category || category === group
            ? <Fragment key={group}>
                <Typography 
                  variant="headline"
                  style={{textTransform: 'capitalize'}}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({id, title}) => 
                    <ListItem button 
                      key={id}
                      onClick={() => onSelect(id)}
                    >
                      <ListItemText primary={title} />

                      <ListItemSecondaryAction>
                        <IconButton onClick={() => onBeginEdit(id)}>
                          <Edit />
                        </IconButton>
                        <IconButton onClick={() => onDelete(id)}>
                          <Delete />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  )}
                </List>
              </Fragment>
            : null
        )}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={ styles.paper }>
        {
          editMode
            ? <Form 
                key={id}
                muscles={muscles} 
                exercise={exercise}
                onSubmit={onEndEdit}
              />
            : <Fragment>
                <Typography 
                  variant="display1"
                >
                  {title}
                </Typography>
                <Typography 
                  variant="subheading"
                  style={{ marginTop: 30 }}
                >
                  {description}
                </Typography>
            </Fragment>
        }
      </Paper>
    </Grid>
  </Grid>
);

export default Exercises;
