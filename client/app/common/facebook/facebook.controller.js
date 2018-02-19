class FacebookController {

  constructor() {
    this.name = 'facebook';
    this.blockId = 'fb-root';
  }

  $onInit() {
    if (!document.getElementById(this.blockId)) {
      let div = document.createElement('div');
      div.id = this.blockId;
      document.body.appendChild(div);

      let d = document;
      let s = 'script';
      let id = 'facebook-jssdk';
      let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
      fjs.parentNode.insertBefore(js, fjs);
    }
  }
}

export default FacebookController;
