$(".txtb").on("keyup", function(e){
    if(e.keyCode == 13 && $(".txtb").val() != "")
    {
        var task = $("<div class ='task'></div>").text($(".txtb").val());
        var del = $("<i class ='fas fa-trash-alt'></i>").click(function(){
            var x = $(this).parent();
            x.fadeOut(function(){
                x.remove();
            });
        });

        var check = $("<i class ='fas fa-check'></i>").click(function(){
            var x = $(this).parent();
            x.fadeOut(function(){
                $(".comp").append(x);
                x.fadeIn();
            });
            $(this).remove();
        });

        task.append(del,check);
        $(".notcomp").append(task);
        //clearing text bar
        $(".txtb").val("");
    }

    var deleteAll = $("<i class ='fas fa-check'></i>").click(function(){
        var p = $(this).parent;
        p.fadeOut(function(){
            p.remove
        });

    });
});