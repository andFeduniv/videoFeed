class FeedController {
  constructor() {
    this.title = 'VIDEO FEED';
    this.selectedSource = 'All';
    this.sources = ['All'];

    /// Todo: Move of the api call to a service
    fetch('https://cdn.playbuzz.com/content/feed/items').then(res => {
      return res.json(); /// Todo: Add Error handling.
    }).then(feed =>  {
      this.feed = feed.items;
      this.initSources();
    });
  }

  initSources = () => {
    let sources = new Set(this.feed.map(item => item.source.charAt(0).toUpperCase() + item.source.slice(1)));
    this.sources = this.sources.concat([...sources]);
  }
}

export default FeedController;
