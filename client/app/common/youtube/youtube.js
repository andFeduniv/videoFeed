import angular from 'angular';
import youtubeComponent from './youtube.component';
import YoutubeVideo from './youtube-video';

let youtubeModule = angular.module('youtube', [YoutubeVideo])

.component('youtube', youtubeComponent)

.name;

export default youtubeModule;
