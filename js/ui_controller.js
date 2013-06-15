var UIController = {
  
  load_search_results : function( search_json ){
  
    container = $(".results_container").html("");
    
    search_json = JSON.parse( search_json );
    
    $(search_json.data.results).each( function(index, value)  {
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

      $(result).addClass("postit");

      container.append( result );

    });
  
  
  }

}
