(function(exports) {

  function Api() {
    this.data = [];
  }

  Api.prototype.fetchData = function() {
      var self = this;
      var xhr = new XMLHttpRequest();

      xhr.onload = function() {
        var request = JSON.parse(xhr.response);

        self.data = request.response.results;
      };
      xhr.open('GET', "https://content.guardianapis.com/search\?section=politics\&show-fields=headline,thumbnail,short-url\&api-key\=ef5715e1-270a-43d3-8d0f-3419c83802f6");
      xhr.send();
    },

    exports.Api = Api;

})(this);
