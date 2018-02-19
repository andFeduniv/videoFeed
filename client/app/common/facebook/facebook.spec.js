import FacebookModule from './facebook';
import FacebookController from './facebook.controller';
import FacebookComponent from './facebook.component';
import FacebookTemplate from './facebook.html';

describe('Facebook', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FacebookModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FacebookController();
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
      expect(FacebookTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = FacebookComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(FacebookTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(FacebookController);
    });
  });
});
