import React from 'react';
import Project from './Project';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Project />);
});
