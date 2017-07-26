import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('movie-details', {path: "/movie-details/:movie_id"});
  this.route('character-details', {path: "/character-details/:character_id"});
  this.route('home', function() {
    this.route('movies');
    this.route('characters');
    this.route('video');
  });
});

export default Router;
