//Check off by clicking
//When clicked on li existing inside UI, mark as completed
$("ul").on("click", "li",function(){
    $(this).toggleClass("completed");
    // Need not add . when giving class names
});

//Click on X to delete ToDo
//When span is clicked inside an ul
$("ul").on("click", "span",function(event){
    $(this).parent().remove();
    event.stopPropagation();
});

//Add new todos

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //assign input given to a var
        var todoText = $(this).val();

        //Makes input box empty 
        $(this).val(" ");

        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText+ "</li>");
    }
});

//Plus button on h1 tab

$("fa-plus").click(function(){
    $("input").fadeToggle();
})