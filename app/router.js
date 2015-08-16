import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('profiles');
  this.route('profile', { path: '/profiles/:profileId' });
});

export default Router;
