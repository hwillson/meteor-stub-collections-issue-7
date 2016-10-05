import StubCollections from 'meteor/hwillson:stub-collections';
import { expect } from 'meteor/practicalmeteor:chai';
import faker from 'faker';

import Shifts from './collection';

const data = {
  start: faker.date.past(),
  finish: faker.date.recent(),
  company: {
    shiftId: faker.random.number(),
    unitId: 34,
    personId: 4,
    jobId: 2,
  },
  state: {
    geo_confirmed: false,
    django_has_it: true,
    status: 'delivered',
  },
};

describe('api.shifts.collection', function () {
  beforeEach(function () {
    StubCollections.add([Shifts]);
    StubCollections.stub();
    Shifts.insert(data);
  });

  afterEach(function () {
    StubCollections.restore();
  });

  it('should allow shift inserting through the beforeEach', function () {
    expect(Shifts.find().count()).to.equal(1);
  });
});
