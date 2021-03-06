// Generated by CoffeeScript 1.6.2

(function() {
  var clicksArray, exports, search,
    _this = this;

  exports = this;

  exports.ACCESS_TOKEN = "ac03071e08039517fc014ac9f47ad28e439447d3";

  exports.API_ADDRESS = "https://api-ssl.bitly.com";

  exports.search = search = function(query) {
    var route;

    route = "/v3/search/";
    return ($.ajax(API_ADDRESS + "/v3/search", {
      type: 'GET',
      dataType: 'html',
      async: false,
      data: {
        access_token: ACCESS_TOKEN,
        query: query
      }
    })).responseText;
  };

  exports.clicksData = clicksData = function(link) {
    var linkData, responseData, route;

    route = "/v3/search/";
    responseData = ($.ajax(API_ADDRESS + "/v3/link/clicks", {
      type: 'GET',
      dataType: 'html',
      async: false,
      data: {
        access_token: ACCESS_TOKEN,
        link: link,
        unit: "hour",
        units: 24,
        rollup: false
      }
    })).responseText;
    responseData = JSON.parse(responseData);
    linkData = responseData.data.link_clicks;

    var dataSet = [ ["Time", "Clicks"] ];
    for (var index = 23; index >= 0; --index) {
      time = linkData[index].dt;
      clicks = linkData[index].clicks;

      var day = moment.unix(time);
      dataSet.push( [day.format("HH:mm"), clicks]);
    }
    return dataSet;
  };

}).call(this);
