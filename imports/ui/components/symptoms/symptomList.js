import { Symptoms } from '/imports/api/symptoms/symptoms.js';
import { Meteor } from 'meteor/meteor';
import './symptomList.html';

Template.symptomList.onCreated(function () {
  Meteor.subscribe('symptoms.all');
});

Template.symptomList.helpers({
  symptoms() {
    return Symptoms.find({});
  },
});

Template.symptomList.events({
  'submit .symptom-link-add'(event) {
    event.preventDefault();

    const target = event.target;
    const { name } = target;

    Meteor.call('symptoms.insert', { name }, (error) => {
      if (error) {
        alert(error.error);
      } else {
        name.value = '';
      }
    });
  },
});
