import React from 'react';

const LoadingCard = function renderLoadingCard() {
  return (
    <div className="mdl-grid">
      <div className="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-grid loading-card">
        <div className="mdl-card mdl-shadow--2dp loading-card">
          <img alt="Loading" src="assets/loading.gif" />
          <h2>Loading...</h2>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
