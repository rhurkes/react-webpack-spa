import React, { Component } from 'react';

class User extends Component {
  handleClick(login) {
    this.props.selectUser(login);
  }

  render() {
    const defaultClasses = 'mdl-list__item mdl-button mdl-ink-ripple mdl-default-theme';
    const classes = `${defaultClasses} ${this.props.currentUser === this.props.data.login
      ? 'active' : ''}`;
    return (
      <li className={classes} onClick={() => this.handleClick(this.props.data.login)}>
        <div className="mdl-list__item-primary-content">
          <i className="material-icons mdl-list__item-icon">person</i>
          <span>{this.props.data.login}</span>
        </div>
      </li>
    );
  }
}

User.propTypes = {
  selectUser: React.PropTypes.func,
  data: React.PropTypes.object,
  currentUser: React.PropTypes.string
};

export default User;
