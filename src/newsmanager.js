"use strict";
(function(exports){

  function Newsmanager(newsConstructor) {
    this.articles = [];
    this.newsConstructor = newsConstructor || News;
  }
    Newsmanager.prototype = {
      all: function() {
        return this.articles;
      },

      getArticles: function(GuardianApiResponse) {
        var self = this;
        GuardianApiResponse.forEach(function(article) {
          var field = article.fields;
          var news = new self.newsConstructor(field.headline, field.shortUrl, field.thumbnail);
          self.articles.push(news);
          return self.articles;
        });
      },

      get: function(index) {
        return this.articles[index];
      }
    };
  exports.Newsmanager = Newsmanager;

})(this);
