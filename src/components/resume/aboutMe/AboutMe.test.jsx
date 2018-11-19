import React from 'react';
import AboutMe from './AboutMe';

import { shallow } from 'enzyme';


it('renders without crashing', () => {
  shallow(<AboutMe />);
});