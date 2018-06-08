import React from 'react';
import ReactDOM from 'react-dom';
import JobExperience from './JobExperience';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JobExperience/>, div);
});
