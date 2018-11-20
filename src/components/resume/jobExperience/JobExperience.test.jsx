import React from 'react';
import JobExperience from './JobExperience';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<JobExperience />);
});
