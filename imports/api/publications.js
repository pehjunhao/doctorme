// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Symptoms } from './symptoms/symptoms.js';

Meteor.publish('symptoms.all', function () {
  return Symptoms.find();
});
