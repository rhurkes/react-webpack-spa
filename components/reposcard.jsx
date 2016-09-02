import React from 'react';

const ReposCard = function renderReposCard(props) {
  let repos;

  if (props.repos) {
    repos = props.repos.map(repo => {
      const description = repo.description ? ` - ${repo.description}` : null;
      return (<li key={`repos-${repo.name}`}>
        <a href={repo.html_url}>{repo.name}</a>
        {description}
      </li>);
    });
  }

  return (
    <div className="mdl-card mdl-shadow--2dp repos">
      <div className="mdl-card__title">
        <h2 className="mdl-card__title-text">Repositories</h2>
      </div>
      <div className="mdl-card__supporting-text">
        <ul>{repos}</ul>
      </div>
    </div>
  );
};

ReposCard.propTypes = {
  repos: React.PropTypes.array
};

export default ReposCard;
