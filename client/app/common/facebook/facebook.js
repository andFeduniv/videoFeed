import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import facebookComponent from './facebook.component';

let facebookModule = angular.module('facebook', [
  uiRouter
])

.component('facebook', facebookComponent)

.name;

export default facebookModule;
