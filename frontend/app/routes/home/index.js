import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model(){
    return RSVP.hash({
      jobs: this.store.findAll('job'),
      releaseNotes: {
        message: "This is the version 2.0 of application Lemonade! With new operations, faster and simple to use this version brings the power of Apache Spark to execute data minning as easy as build a flow." ,
        version: "2.0",
        date: "15/02/2017"},
      videoTutorial: {
        title: "Basic Tutorial",
        youtubeID: "5_sHXJC9ocA"
      }
    });
  },
});