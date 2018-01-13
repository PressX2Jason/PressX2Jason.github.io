import React from 'react';
import SideNav from '../SideNav/SideNav';
import Resume from '../Resume/Resume'


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <SideNav/>
        <Resume/>
      </div>
    );
  }
}

export default App;
