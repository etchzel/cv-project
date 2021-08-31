import React from 'react';
import MainContent from './components/MainContent/MainContent';
import Sidebar from './components/Sidebar/Sidebar';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Sidebar/>
        <MainContent/>
      </div>
    );
  }
};

export default App;