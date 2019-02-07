import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import CreateDialog from '../exercises/Dialog';

const Header = ({ muscles, onCreate }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="title" color="inherit" style={{flex: 1}}>
        Fitness App
      </Typography>

      <CreateDialog 
        muscles={muscles}
        onCreate={onCreate}
      />
    </Toolbar>
  </AppBar>
);

export default Header;
