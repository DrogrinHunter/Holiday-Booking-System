function opentr(n, arg) {
    if (typeof active !== 'undefined') {
        console.log("Clearing interval");
        active = false;
    }

    $("#main_content").fadeOut("fast", function () {
        $("#main_content").html('');
        $.get(n + ".php", { zone_uuid: arg })
            .done(function (data) {
                $("#main_content").html(data);
                $("#main_content").fadeIn("fast");
            });
    });
}



function menu(n) {
    if (typeof active !== 'undefined') {
        console.log("Clearing interval");
        active = false;
    }


    $("#main_content").fadeOut("fast", function () {
        $("#main_content").html('');
        $.get(n + ".php", function (data) {
            $("#main_content").html(data);
            $("#main_content").fadeIn("fast");
        });
    });



}


function expandmenu(id) {
    $(".sub_items").slideUp("fast");
    $("#" + id).slideDown("fast");
}

setTimeout(menu, 500, "dashboard");