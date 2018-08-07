import React from 'react';

const AppAlert = ({message, type}) => {
  const alertClass = type === 'info' ? 'alert-info' : 'alert-danger';
  return (
    <div className={`alert ${alertClass}`}>{message}</div>
  );
};

export default AppAlert;