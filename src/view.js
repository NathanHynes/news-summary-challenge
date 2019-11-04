(function(exports) {
  function View() {}

  View.prototype.articlesToHTML = function(articles) {
    var HTMLArticles = "<ol>";
    articles.forEach(function(article, index) {
      console.log('article', article);
      console.log('headline', article.headline);
      console.log('url', article.articleLink);
      console.log('image', article.image);
      HTMLArticles +=
      `<li><div><a href="#${index}"><img src="${article.image}" width="150" height="100"><br>${article.headline}</div></li>`
    });
    return HTMLArticles += "</ol>";
  };
  exports.View = View;
})(this);
