import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import feedComponent from './feed.component';
import Item from './item/item';

let feedModule = angular.module('feed', [
  uiRouter,
  Item
])

.component('feed', feedComponent)

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('feed', {
      url: '/',
      component: 'feed'
    });
})

.name;

export default feedModule;
