import angular from 'angular';
import itemComponent from './item.component';
import Facebook from '../../../common/facebook/facebook';
import Youtube from '../../../common/youtube/youtube';

let itemModule = angular.module('item', [Facebook, Youtube])

.component('item', itemComponent)


.name;

export default itemModule;
