import YoutubeModule from './youtube';
import YoutubeController from './youtube.controller';
import YoutubeComponent from './youtube.component';
import YoutubeTemplate from './youtube.html';

describe('Youtube', () => {
  let $rootScope, makeController;

  beforeEach(window.module(YoutubeModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new YoutubeController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(YoutubeTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = YoutubeComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(YoutubeTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(YoutubeController);
    });
  });
});
