"use strict";
(function(exports){

  function News(headline, articleLink, image) {
    var headline = headline;
    var articleLink = articleLink
    var image = image

    return {
      headline: function(){
        return headline
      },
      articleLink: function() {
        return articleLink
      },
      image: function() {
        return image
      }
    }

  }

  exports.News = News;

})(this);
