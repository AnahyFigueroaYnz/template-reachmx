$(document).ready(function () {
    jQuery.noConflict();
    jQuery(function ($) {
        $("#popProducto").popover({
            content: "Este campo es obligatorio para seguir con el formulario.",
            trigger: "hover",
            headers: false
        });
        // puerto 2525
        // Email.send({
        //     Host : "smtp.elasticemail.com",
        //     Username : "anahy.figueroa@reachmx.com",
        //     Password : "19A92781D4036E1247C31B7BE19C22E445DB",
        //     To : 'anahy.figueroa@reachmx.com',
        //     From : "anahyfigueroaynz@gmail.com",
        //     Subject : "This is the subject",
        //     Body : "And this is the body"
        // }).then(
        //   message => alert(message)
        // <i class="far fa-calendar-check"></i>
        // );

        $("#selUnidad").change(function () {
            var selUdSel = $(this).children("option:selected").val();
                if (selUdSel == "0") {
                    $("#selUnidad :selected").addClass("sel-disabled");
                    $("#selUnidad").addClass("sel-disabled");
                } else if (selUdSel != "0") {
                    $("#selUnidad :selected").removeClass("sel-disabled");
                    $("#selUnidad").removeClass("sel-disabled");
                }
        });

        $("#txtImgProducto").on('change',function(event) {
            var input = event.currentTarget;
            if (input.files && input.files[0]) {
                var limit = 8;
                var reader = new FileReader();
                var file = $(this).val().split("\\").pop();
                var fileExt = $(this).val().split(".").pop();
                var fileName = file.split(".").shift();
                var fileLenght = fileName.length;

                if (fileLenght > limit) {
                    var firstChart = fileName.substring(0, limit);
                    var lastChart = fileName.slice (fileLenght - 4);
                    var newName = firstChart + "..." + lastChart + "." + fileExt;
                    $(this).siblings("#lblImgProducto").addClass("selected").html(newName);
                    $("#txtImgProducto").attr("disabled", "true");
                    $("#lblImgProducto").attr("disabled", "true");
                    $("#btnLimpiarImg").removeAttr("disabled");
                    $("#lblImgProducto").removeClass("holder");
                }
                
                reader.onload = function (e) {
                    $('#preview').attr('src', e.target.result).fadeIn('slow');
                }
                
                reader.readAsDataURL(input.files[0]);
            }
        });
    
    });
});