import React from 'react';
import Education from './education';

import { shallow } from 'enzyme';


it('renders without crashing', () => {
  shallow(<Education />);
});
