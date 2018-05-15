import React from 'react';
import SideNav from '../SideNav/SideNav';
import Resume from '../Resume/Resume'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="app">
          <SideNav/>
          <Resume/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
