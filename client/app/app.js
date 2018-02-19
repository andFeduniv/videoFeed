import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    Components
  ])
  .config(($locationProvider) => {
    "ngInject";
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent)
  .filter('abbreviateNumber', function() {
    return function (value) {
      let suffixes = ["", "K", "M", "B", "T"];
      let suffixNum = Math.floor(("" + value).length/3);
      let shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(2));

      return shortValue + suffixes[suffixNum] + ' views';
    }
  });
