import React from 'react';
import ProfileCard from './profilecard.jsx';
import NoUserCard from './nousercard.jsx';
import LoadingCard from './loadingcard.jsx';
import ReposCard from './reposcard.jsx';
import OrgsCard from './orgscard.jsx';
import ContribsCard from './contribscard.jsx';

const Details = function renderDetails(props) {
  const details = props.details || {};

  const profileCard = details.profile
    ? <ProfileCard profile={details.profile} />
    : <NoUserCard />;

  const reposCard = details.repos
    ? <ReposCard repos={details.repos} />
    : null;

  const orgsCard = details.orgs
    ? <OrgsCard orgs={details.orgs} />
    : null;

  const contribsCard = details.contribs
    ? <ContribsCard contribs={details.contribs} />
    : null;

  const guts = props.loading
    ? <LoadingCard />
    : (<div className="mdl-grid">
      <div className="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-grid">
        {profileCard}
        {orgsCard}
      </div>
      <div className="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-grid">
        {contribsCard}
      </div>
      <div className="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-grid">
        {reposCard}
      </div>
    </div>);

  return (<div className="mdl-layout__content mdl-color--grey-100">{guts}</div>);
};

Details.propTypes = {
  details: React.PropTypes.object,
  loading: React.PropTypes.bool
};

export default Details;
