import React from 'react';
import Resume from './Resume';

import { shallow } from 'enzyme';


it('renders without crashing', () => {
  shallow(<Resume />);
});