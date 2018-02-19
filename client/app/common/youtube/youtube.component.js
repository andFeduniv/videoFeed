import template from './youtube.html';
import controller from './youtube.controller';
import './youtube.scss';

let youtubeComponent = {
  bindings: {
    videoId: '<'
  },
  template,
  controller
};

export default youtubeComponent;
