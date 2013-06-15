var UIController = {
  
  load_search_results : function( search_json ){
  
    container = $(".results_container").html("");
    
    search_json = JSON.parse( search_json );
    
    i = 0;
    
    $(search_json.data.results).each( function(index, value)  {
      
      i = i + 1;
      
      //alert(value.domain);
      result = $(".result-container").clone();
      
      $(result).removeClass("result-container");
      $(result).find(".result-title").html( value.title );
      $(result).find(".result-description").html( value.description );
      
      $(result).find(".result-social-score").html( value.score );

      //var d = new Date(value.initial_epoch); // The 0 there is the key, which sets the date to the epoch
      //$(result).find(".result-first-indexed").html( d.getMonth() + "-" + d.getDate() + "-" + d.getFullYear() );
      $(result).find(".result-language").html( value.lang );
      
      $(result).find(".result-domain").html( value.domain );
      
      
      $(result).find(".result-summary").html( value.content );
      $(result).find(".result-summary").css("display","none" );
      
      
      $(result).find(".result-url").html( value.aggregate_link );
      $(result).find(".result-url").attr("href", value.aggregate_link );

      $(result).find(".result-graph").attr("id", "graph_" + i );
      
      $(result).find(".span10").addClass("postit");

      container.append( result );
      
      UIController.draw_chart( value.aggregate_link, "graph_" + i );

    });
  },
    
  draw_chart : function( aggregate_link, graph_id ) {

      clickData = clicksData(aggregate_link);
      var data = google.visualization.arrayToDataTable(clickData);

      var options = {
        title: 'Number of Clicks',
        backgroundColor: '#FFFF88'
      };

      var chart = new google.visualization.LineChart( document.getElementById( graph_id ) );
      chart.draw(data, options);
    }
}
