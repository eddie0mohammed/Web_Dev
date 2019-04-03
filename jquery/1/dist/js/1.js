
// check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("line-through");
});

//click X to delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//keypress for textBox
$("input[type='text']").keypress(function(e){
    if (e.which == 13){
        // grab todo text from input
        let textEntered = $("input[type='text']").val();
        //clear input
        $(this).val("");
        // create a new li with the text from input and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ textEntered + "</li>");
    }

});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})