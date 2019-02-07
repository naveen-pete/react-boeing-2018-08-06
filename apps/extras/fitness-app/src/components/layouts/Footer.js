import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

const Footer = ({ muscles, category, onCategorySelect }) => {
  const index = category
    ? muscles.findIndex(muscle => muscle === category) + 1
    : 0;

  return (
    <Paper>
      <Tabs
        value={index}
        indicatorColor="primary"
        textColor="primary"
        centered
        onChange={(e, i) => onCategorySelect(muscles[i - 1])}
      >
        <Tab label="All" />
        {muscles.map(muscle => <Tab label={muscle} key={muscle} />)}
      </Tabs>
    </Paper>
  );
};

export default Footer;
