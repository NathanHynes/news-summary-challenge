"use strict";
(function(exports){

  function News(headline, articleLink, image) {
    this.headline = headline;
    this.articleLink = articleLink
    this.image = image
    this.summary = ''
  }
    News.prototype =  {
      getHeadline: function(){
        return this.headline;
      },
      getArticleLink: function() {
        return this.articleLink;
      },
      getImage: function() {
        return this.image;
      },
      getSummary:function() {
        var self = this;
        var xhr = new XMLHttpRequest();

        xhr.onload = function() {
          var request = JSON.parse(xhr.response);

          self.summary = request.text
        };
        xhr.open('GET', `http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${self.articleLink}`);
        xhr.send();
      }
    }
  exports.News = News;

})(this);
