import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import App from './components/app';

// const el = React.createElement('h1', { className: 'display-3'}, 'Hello React!');
// const elList = React.createElement('ul', null, 
//   React.createElement('li', null, 'Red'),
//   React.createElement('li', null, 'Green'),
//   React.createElement('li', null, 'Blue')
// );

// JSX
// const elList1 = <ul>
//   <li>Blore</li>
//   <li>Mysore</li>
//   <li>Mangalore</li>
// </ul>;

ReactDOM.render(<App />, document.getElementById('root'));
