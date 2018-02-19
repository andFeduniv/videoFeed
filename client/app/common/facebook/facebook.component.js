import template from './facebook.html';
import controller from './facebook.controller';
import './facebook.scss';

let facebookComponent = {
  bindings: {
    'videoId': '<'
  },
  template,
  controller
};

export default facebookComponent;
