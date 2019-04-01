import React from 'react';
import TechnologyChip from './TechnologyChip';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<TechnologyChip />);
});
