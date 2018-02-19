import angular from 'angular';
import itemComponent from './item.component';
import Facebook from '../../../common/facebook/facebook';
import Youtube from '../../../common/youtube/youtube';

let itemModule = angular.module('item', [Facebook, Youtube])

.component('item', itemComponent)
.filter('numToStr', () => {
  return function(input) {
    input = input || '';
    var out = '';
    for (var i = 0; i < input.length; i++) {
      out = input.charAt(i) + out;
    }
    // conditional based on optional argument
    if (uppercase) {
      out = out.toUpperCase();
    }
    return out;
  };
})


.name;

export default itemModule;
