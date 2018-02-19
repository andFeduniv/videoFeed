import template from './item.html';
import controller from './item.controller';
import './item.scss';

let itemComponent = {
  bindings: {
    data: '<'
  },
  template,
  controller
};

export default itemComponent;
