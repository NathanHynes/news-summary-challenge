describe('News', function() {
  var news;

  beforeEach(function() {
    news = new News('Fake Headline', "https://test.com", "https://fakeimage.co.uk/500.jpg");
  });

  describe('headline', function() {
    it('returns the headline', function () {
      expect(news.headline()).toEqual('Fake Headline');
    });
  });

  describe('articleLink', function () {
    it('returns a link to the article', function () {
      expect(news.articleLink()).toEqual("https://test.com");
    });
  });

  describe('image', function () {
    it('returns the image URL', function () {
      expect(news.image()).toEqual("https://fakeimage.co.uk/500.jpg");
    });
  });
});
