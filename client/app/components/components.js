import angular from 'angular';
import Feed from './feed/feed';

let componentModule = angular.module('app.components', [
  Feed
])

.name;

export default componentModule;
