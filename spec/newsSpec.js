describe('News', function() {
  var news;

  beforeEach(function() {
    news = new News('Fake Headline', "https://test.com", "https://fakeimage.co.uk/500.jpg");
  });

  describe('getHeadline', function() {
    it('returns the headline', function () {
      expect(news.getHeadline()).toEqual('Fake Headline');
    });
  });

  describe('getArticleLink', function () {
    it('returns a link to the article', function () {
      expect(news.getArticleLink()).toEqual("https://test.com");
    });
  });

  describe('getImage', function () {
    it('returns the image URL', function () {
      expect(news.getImage()).toEqual("https://fakeimage.co.uk/500.jpg");
    });
  });
});
