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
      $(result).find(".result-url").html( value.aggregate_link );
      $(result).find(".result-url").attr("href", value.aggregate_link );

      container.append( result );

    });
  
  
  }

}
