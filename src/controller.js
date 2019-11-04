"use strict";

(function(exports) {

  function Controller() {
    this.newsmanagerContstructor = new Newsmanager()
    this.api = new Api();
    this.view = new View();
    this.api.fetchData()
  }


  Controller.prototype = {
    getTodaysArticles: function() {
      var element = document.getElementById('news-articles')
      var newsmanager = this.newsmanagerContstructor;
      newsmanager.getArticles(this.api.data);
      var articles = newsmanager.all()
      console.log('articles', articles)
      element.innerHTML = this.view.articlesToHTML(articles)
    }
  }

  exports.Controller = Controller;

})(this);

var controller = new Controller()
window.setTimeout(() => {
  controller.getTodaysArticles()
}, 100)
