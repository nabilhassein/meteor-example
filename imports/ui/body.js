import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';

import './body.html';
 
Template.body.helpers({
  todos() {
  	return Tasks.find({});
  }
});

Template.body.events({
  'submit .new-task'(event, template) {
    // Prevent default browser form submit
    event.preventDefault();

    var task = template.find('.task').value;
    var deadline = template.find('.deadline').value;

    Tasks.insert({
    	task: task,
    	deadline: deadline,
    });

    }
});