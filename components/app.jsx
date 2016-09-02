import React, { Component } from 'react';
import Header from './header.jsx';
import Drawer from './drawer.jsx';
import Details from './details.jsx';
import github from '../lib/github';

const orgName = 'code42';

class App extends Component {
  constructor(props) {
    super(props);
    this.selectUser = this.selectUser.bind(this);

    this.state = {
      org: {
        details: {},
        users: []
      }
    };
  }

  componentDidMount() {
    github.fetchOrganizationData(orgName, org => {
      const newState = this.state;
      newState.org = org;
      this.setState(newState);
    });
  }

  selectUser(user) {
    this.state.loading = true;
    this.setState(this.state);

    github.fetchUserData(user, details => {
      this.state.user = user;
      this.state.details = details;
      this.state.loading = false;
      this.setState(this.state);
    });
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
        <Header />
        <Drawer
          org={this.state.org.details}
          user={this.state.user}
          users={this.state.org.users}
          selectUser={this.selectUser}
        />
        <Details user={this.state.user} details={this.state.details} loading={this.state.loading} />
      </div>);
  }
}
export default App;
