import React from 'react';
import User from './user.jsx';

const Userlist = function renderUserlist(props) {
  const users = props.users.map(u =>
    (<User
      data={u} key={`userlist-${u.login}`}
      currentUser={props.user} selectUser={props.selectUser}
    />));
  return (
    <nav className="mdl-navigation mdl-color--grey-50">
      <ul className="mdl-list">{users}</ul>
    </nav>
  );
};

Userlist.propTypes = {
  users: React.PropTypes.array,
  selectUser: React.PropTypes.func
};

export default Userlist;
