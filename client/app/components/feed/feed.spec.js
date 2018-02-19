import FeedModule from './feed';
import FeedController from './feed.controller';
import FeedComponent from './feed.component';
import FeedTemplate from './feed.html';

describe('Feed', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FeedModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FeedController();
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
      expect(FeedTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = FeedComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(FeedTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(FeedController);
    });
  });
});
