import React from 'react';

const NoUserCard = function renderNoUserCard() {
  return (
    <div className="mdl-card mdl-shadow--2dp">
      <div className="mdl-card__title">
        <h2 className="mdl-card__title-text">No user selected</h2>
      </div>
      <div className="mdl-card__supporting-text">
        Please select a user in the left drawer to see their details.
      </div>
    </div>
  );
};

export default NoUserCard;
