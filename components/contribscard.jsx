import React from 'react';

const ContribsCard = function renderContribs(props) {
  const contribs = props.contribs || {};
  const repos = contribs.repos
    ? contribs.repos.map(repo => <li key={`contribs-${repo}`}>{repo}</li>)
    : null;

  return (
    <div className="mdl-card mdl-shadow--2dp contribs">
      <div className="mdl-card__title">
        <h2 className="mdl-card__title-text">{contribs.count || 0} Contributions</h2>
        <span className="mdl-color-text--grey-500">
          Only contributions associated with the last 300 public events,
          or 90 days - whichever is hit first.
        </span>
      </div>
      <div className="mdl-card__supporting-text">
        <ul>{repos}</ul>
      </div>
    </div>
  );
};

ContribsCard.propTypes = {
  contribs: React.PropTypes.object
};

export default ContribsCard;
