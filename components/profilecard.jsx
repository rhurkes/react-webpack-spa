import React from 'react';
import moment from 'moment';

const ProfileCard = function renderProfileCard(props) {
  const profile = props.profile || {};
  let friendlyJoin = 'N/A';
  if (profile && profile.created_at) {
    try {
      const d = new Date(profile.created_at);
      friendlyJoin = moment(d).format('MMMM Do, YYYY');
    } catch (err) {
      // Swallow
    }
  }

  return (
    <div className="mdl-card mdl-shadow--2dp profile">
      <div className="mdl-card__title">
        <img className="user-avatar" alt={profile.name} src={profile.avatar_url} />
        <div>
          <h2 className="mdl-card__title-text">{profile.name}</h2>
          <h3 className="mdl-card__title-text">{profile.login}</h3>
        </div>
      </div>
      <div className="mdl-card__supporting-text">
        <ul>
          <li>Location: {profile.location || 'N/A'}</li>
          <li>Email: {profile.email || 'N/A'}</li>
          <li>Joined: {friendlyJoin}</li>
        </ul>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  profile: React.PropTypes.object
};

export default ProfileCard;
