describe('Newsmanager', function() {
  var newsmanager;

  beforeEach(function() {
    apiResponse = [{

      "id": "politics/2019/nov/03/boris-johnson-apologises-tory-members-not-leaving-eu-october",
      "type": "article",
      "sectionId": "politics",
      "sectionName": "Politics",
      "webPublicationDate": "2019-11-03T15:41:45Z",
      "webTitle": "Headline 1",
      "webUrl": "https://www.theguardian.com/politics",
      "apiUrl": "https://content.guardianapis.com/politics/2019/nov",
      "fields": {
        "headline": "Test Headline",
        "shortUrl": "https://gu.com/p/cjkja",
        "thumbnail": "https://media.guim.co.uk/022707a24cb8792e6c470d0a81de59e1aa3c4e5a/0_278_3634_2179/500.jpg",
      },
      "isHosted": false,
      "pillarId": "pillar/news",
      "pillarName": "News"
    }];
    spy = {}

    var spyConstructor = function spyConstructor(headline, url, thumbnail) {
      spy.headline = headline
      spy.url = url
      spy.thumbnail = thumbnail
    }
    newsmanager = new Newsmanager(spyConstructor);
  });

  describe('all', function() {
    it('returns article Array', function() {
      expect(newsmanager.all()).toEqual([]);
    });
  });

  describe('getArticles', function () {
    it('stores the articles from the Guardian in an array as news items', function () {
      newsmanager.getArticles(apiResponse)
      expect(spy.headline).toEqual("Test Headline")
      expect(spy.url).toEqual("https://gu.com/p/cjkja")
      expect(spy.thumbnail).toEqual("https://media.guim.co.uk/022707a24cb8792e6c470d0a81de59e1aa3c4e5a/0_278_3634_2179/500.jpg")
    });
  });

  describe('get', function() {
    it('returns article at that index', function() {
      var newsmanager2 = new Newsmanager()
      var newsItem = {headline: "Test Headline", url: "https://gu.com/p/cjkja", thumbnail: "https://media.guim.co.uk/022707a24cb8792e6c470d0a81de59e1aa3c4e5a/0_278_3634_2179/500.jpg"}
      newsmanager2.articles.push(newsItem)
      expect(newsmanager2.get(0)).toEqual(newsItem)
    });
  });
});
