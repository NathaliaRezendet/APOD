
$("#btn").on("click", function(){  
    
    $("#data").val()
    
    $.ajax({
         url:"https://api.nasa.gov/planetary/apod?api_key=bwEwY80LWIuDs7EmdAaxay3yyF2hr60HOLWpFztL&date=" +  $("#data").val(),

        "success": function(resultado){
                       
            $("#principal").html(`<p>${resultado.explanation}</p> <img src="${resultado.url}">`)
                               
            console.log(resultado)
        },     
        
    })
    
})