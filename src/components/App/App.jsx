import React from 'react';
import 'typeface-roboto';

import Resume from '../Resume/Resume'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Resume />
      </MuiThemeProvider >
    );
  }
}

export default App;
