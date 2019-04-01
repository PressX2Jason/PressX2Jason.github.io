import React from 'react';
import StyledButton from './StyledButton';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<StyledButton />);
});