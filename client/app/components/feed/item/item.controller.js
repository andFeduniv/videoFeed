class ItemController {
  checkProperties = ['title', 'views'];
  errorMapObj = {
    youtube: 'Youtube video is missing',
    url: 'Video is missing',
    facebook: 'Facebook video is missing'
  };

  constructor() {
    this.hasErrors = false;
    this.errorMessage = '';
  }

  $onInit() {
    this.validate();
  }

  validate() {
    for(let item of this.checkProperties) {
      if (!this.data.hasOwnProperty(item)) {
        this.hasErrors = true;
        this.errorMessage = this.errorMapObj[this.data.source];
        break;
      }
    }
  }
}

export default ItemController;
