import React from 'react';
import MainContent from './components/MainContent/MainContent';
import Sidebar from './components/Sidebar/Sidebar';
import uniqid from "uniqid";

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
      contactInfo: [
        {
          id: uniqid(),
          category: 'personal',
          type: 'address',
          value: 'Jl. Fiksi No.5'
        },
        {
          id: uniqid(),
          category: 'personal',
          type: 'phone',
          value: '+620000000'
        },
        {
          id: uniqid(),
          category: 'personal',
          type: 'mobile',
          value: '+628100000000'
        },
        {
          id: uniqid(),
          category: 'personal',
          type: 'mail',
          value: 'dummy@dum.gg'
        },
        {
          id: uniqid(),
          category: 'socmed',
          type: 'linkedIn',
          value: 'me.poggers'
        },
        {
          id: uniqid(),
          category: 'socmed',
          type: 'twitter',
          value: '@ggwp'
        },
        {
          id: uniqid(),
          category: 'socmed',
          type: 'discord',
          value: 'ggwp#0001'
        }
      ],
      expInfo: [],
      eduInfo: [],
      skillInfo: [],
      langInfo: []
    };

    this.handleDataAddition = this.handleDataAddition.bind(this);
    this.handleDataEdit = this.handleDataEdit.bind(this);
    this.handleStateUpdate = this.handleStateUpdate.bind(this);
  };

  handleDataEdit = (data, key) => {
    if (key === 'profileInfo') {
      this.setState({
        profileInfo: {
          ...this.state.profileInfo,
          ...data
        }
      });
      return;
    }

    const dataInfo = this.state[key].slice();
    this.setState({
      [key]: dataInfo.map((item) => {
        if (item.id === data.id) {
          return ({
            ...item,
            ...data
          });
        } else {
          return item;
        }
      })
    });
  };

  handleDataAddition = (data, key) => {
    const current = this.state[key].slice();
    this.setState({
      [key]: current.concat(data) 
    });
  };

  handleStateUpdate = (data, key, updateType) => {
    if (updateType === 'add') {
      this.handleDataAddition(data, key);
    } else if (updateType === 'edit') {
      this.handleDataEdit(data, key);
    }
  }

  reportState = () => {
    console.log(this.state.expInfo);
  };

  render() {
    return (
      <>
        <button 
          onClick={this.reportState}
          style={{
            display: "block",
            marginLeft: "100px",
            marginBottom: "50px",
            width: "200px",
            height: "100px"
          }}>Click to reportState</button>
        <div className="wrapper">
          <Sidebar
            contactInfo={this.state.contactInfo}
            skillInfo={this.state.skillInfo}
            langInfo={this.state.langInfo}
            stateUpdate={this.handleStateUpdate}
          />
          <MainContent
            profileInfo={this.state.profileInfo}
            expInfo={this.state.expInfo}
            eduInfo={this.state.eduInfo}
            stateUpdate={this.handleStateUpdate}
          />
        </div>
      </>
    );
  }
};

export default App;