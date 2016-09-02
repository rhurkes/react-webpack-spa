import React from 'react';

const OrgsCard = function renderOrgsCard(props) {
  const orgs = props.orgs
    ? props.orgs.map(org =>
      (<li key={`orgs-${org.login}`}>
        <a href={org.url}>{org.login}</a>
      </li>))
    : null;

  return (
    <div className="mdl-card mdl-shadow--2dp orgs">
      <div className="mdl-card__title">
        <h2 className="mdl-card__title-text">Organizations</h2>
      </div>
      <div className="mdl-card__supporting-text">
        <ul>{orgs}</ul>
      </div>
    </div>
  );
};

OrgsCard.propTypes = {
  orgs: React.PropTypes.array
};

export default OrgsCard;
