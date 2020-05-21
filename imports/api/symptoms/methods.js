// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Symptoms } from './symptoms.js';

Meteor.methods({
  'Symptoms.insert'(attr) {
    check(attr.name, String);

    return Symptoms.insert({
      ...attr
      timestampCreated: new Date(),
    });
  },
});
