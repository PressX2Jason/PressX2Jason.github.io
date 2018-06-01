import React from 'react';
import 'typeface-roboto';

import "./App.css"
import Resume from '../resume/Resume'

class App extends React.Component {
  render() {
    return (
      <Resume className="resume" />
    );
  }
}

export default App;
