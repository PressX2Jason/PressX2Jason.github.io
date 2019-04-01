import React from 'react';
import Accomplishment from './Accomplishment';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Accomplishment />);
});
