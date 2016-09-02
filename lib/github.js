// NOTE: strict needed for testing
'use strict'; // eslint-disable-line strict

import 'whatwg-fetch';
import 'promise-polyfill';
import cache from './cache';
import snackbar from './snackbar';

const apiBase = 'https://api.github.com';
const orgDataKey = 'orgData';
const userDataKeyPrefix = 'userData';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseJSON(response) {
  return response.json();
}

const github = {
  fetchOrganizationData: (orgName, cb) => {
    const orgData = cache.get(orgDataKey);
    if (orgData) return cb(orgData);

    const fetchOrg = fetch(`${apiBase}/orgs/${orgName}`)
      .then(checkStatus)
      .then(parseJSON)
      .catch(err => {
        snackbar.show({ message: `Error fetching organization: ${err.message}` });
        throw err;
      });

    const fetchUsers = fetch(`${apiBase}/orgs/${orgName}/members?per_page=100`)
      .then(checkStatus)
      .then(parseJSON)
      .catch(err => {
        snackbar.show({ message: `Error fetching users: ${err.message}` });
        throw err;
      });

    return Promise.all([fetchOrg, fetchUsers])
      .then(data => {
        const newOrgData = { details: data[0] || {}, users: data[1] || {} };
        cache.set(orgDataKey, newOrgData);
        cb(newOrgData);
      })
      .catch(() => {
        // Swallow
      });
  },

  fetchUserData: (user, cb) => {
    const userDataKey = `${userDataKeyPrefix}-${user}`;
    const userData = cache.get(userDataKey);
    if (userData) return cb(userData);

    const fetchUser = fetch(`${apiBase}/users/${user}`)
      .then(checkStatus)
      .then(parseJSON)
      .catch(err => {
        snackbar.show({ message: `Error fetching user: ${err.message}` });
        throw err;
      });

    const fetchRepos = fetch(`${apiBase}/users/${user}/repos?per_page=100`)
      .then(checkStatus)
      .then(parseJSON)
      .catch(err => {
        snackbar.show({ message: `Error fetching repositories: ${err.message}` });
        throw err;
      });

    const fetchOrgs = fetch(`${apiBase}/users/${user}/orgs?per_page=100`)
      .then(checkStatus)
      .then(parseJSON)
      .catch(err => {
        snackbar.show({ message: `Error fetching user orgs: ${err.message}` });
        throw err;
      });

    const fetchEvents = fetch(`${apiBase}/users/${user}/events/public?per_page=300`)
      .then(checkStatus)
      .then(parseJSON)
      .catch(err => {
        snackbar.show({ message: `Error fetching user events: ${err.message}` });
        throw err;
      });

    return Promise.all([fetchUser, fetchRepos, fetchOrgs, fetchEvents])
      .then(data => {
        const contribs = {};

        if (data[3]) {
          const pushes = data[3].filter(evt => evt.type === 'PushEvent');
          contribs.count = pushes.length;
          contribs.repos = pushes.map(evt => evt.repo.name)
            .filter((value, index, self) => self.indexOf(value) === index)
            .sort();
        }

        const newUserData = {
          profile: data[0] || {},
          repos: data[1] || [],
          orgs: data[2] || [],
          contribs
        };

        cache.set(userDataKey, newUserData);
        cb(newUserData);
      })
      .catch(() => {
        // Swallow
      });
  }
};

export default github;
