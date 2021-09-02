import React from 'react';
import MainContent from './components/MainContent/MainContent';
import Sidebar from './components/Sidebar/Sidebar';

const profilePlaceholder = `
    Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse 
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
    cupidatat non proident, sunt in culpa qui officia deserunt mollit 
    anim id est laborum.
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      profileInfo: {
        fullName: 'Name Surname',
        role: 'Job Role',
        profileDesc: profilePlaceholder,
      },
      contactInfo: {
        personal: [
          {
            type: 'address',
            value: 'Jl. Fiksi No.5'
          },
          {
            type: 'phone',
            value: '+620000000'
          },
          {
            type: 'mobile',
            value: '+628100000000'
          },
          {
            type: 'mail',
            value: 'dummy@dum.gg'
          },
        ],
        socMed: [
          {
            type: 'linkedIn',
            value: 'me.poggers'
          },
          {
            type: 'twitter',
            value: '@ggwp'
          },
          {
            type: 'discord',
            value: 'ggwp#0001'
          }
        ]
      },
      expInfo: [],
      eduInfo: [],
      skillInfo: [],
      langInfo: []
    };
  };

  handleDataAddition = (data, key, updateType) => {
    if (updateType === 'add') {
      const current = this.state[key].slice();
      this.setState({
        [key]: current.concat(data) 
      });
    }
    
  };

  render() {
    return (
      <div className="wrapper">
        <Sidebar
          contactInfo={this.state.contactInfo}
          skillInfo={this.state.skillInfo}
          langInfo={this.state.langInfo}
          update={this.handleDataAddition}
        />
        <MainContent
          profileInfo={this.state.profileInfo}
          expInfo={this.state.expInfo}
          eduInfo={this.state.eduInfo}
          update={this.handleDataAddition}
        />
      </div>
    );
  }
};

export default App;