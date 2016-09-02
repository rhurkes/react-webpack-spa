/* eslint-disable prefer-arrow-callback, func-names, import/no-extraneous-dependencies */

import { default as fetch } from 'whatwg-fetch';
import should from 'should';
import sinon from 'sinon';
import github from '../lib/github';

/* describe('github fetchOrganizationData', function () {
  it('should call callback on success', function () {
    const fetchStub = sinon.stub(this, 'fetch');
    fetchStub.yields(null, { status: 200 });
    return github.fetchOrganizationData()
      .then(results => results.should.equal('success'))
      .finally(() => fetchStub.restore());
  });

  it('should catch errors and swallow on errors', function () {
    return github.fetchOrganizationData()
      .then(results => results.should.equal('success'));
  });
}); */
