import React from 'react';
import Userlist from './userlist.jsx';

const Drawer = function renderDrawer(props) {
  const userlist = props.users.length
    ? <Userlist user={props.user} users={props.users} selectUser={props.selectUser} />
    : (<div className="loading">
      <div className="mdl-spinner mdl-js-spinner is-active" />
      <div className="mdl-color-text--grey-500">Loading organization...</div>
    </div>);

  return (
    <div className="mdl-layout__drawer mdl-color--grey-50 mdl-color-text--blue-grey-50">
      <div className="md-toolbar-tools">
        <a href={props.org.html_url}>
          <img className="org-avatar" alt={props.org.name} src={props.org.avatar_url} />
          <h1 className="mdl-color-text--grey-500">{props.org.name}</h1>
        </a>
      </div>
      {userlist}
    </div>
  );
};

Drawer.propTypes = {
  users: React.PropTypes.array,
  selectUser: React.PropTypes.func,
  org: React.PropTypes.object,
  user: React.PropTypes.string
};

export default Drawer;
