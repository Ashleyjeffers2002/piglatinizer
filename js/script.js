$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
    $("#button").click(function() {
        let Userinput = $(".input").val();
        console.log(Userinput)
    })
});
