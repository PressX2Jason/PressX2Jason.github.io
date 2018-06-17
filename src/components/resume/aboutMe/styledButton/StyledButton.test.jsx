import React from 'react';
import ReactDOM from 'react-dom';
import StyledButton from './StyledButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StyledButton/>, div);
});
