var prodNew = "";
var countImgs = 0;
var countProd = 0;
var statusProd = 0;

var valProd = false;

var reader = new FileReader();

function nextTab(id) {
    id = parseFloat(id);
    tab = id + 1;

    $("#step" + tab + "").addClass("active");
    $("#step" + id + "").removeClass("active");
}
function prevTab(id) {
    id = parseFloat(id);
    tab = id - 1;
    
    $("#step" + tab + "").addClass("active");
    $("#step" + id + "").removeClass("active");
}

function asignacion() {
    $("#txtCantidad").inputmask({ alias: "currency", prefix: "$", rightAlign: true, allowMinus: false });

    var mask = $("#selLada").val();
    if (mask == "(+ 66)" || mask == "(+ 84)" || mask == "(+ 1)" || mask == "(+ 52)" || mask == "(+ 91)") {
        $("#txtTelefono").inputmask({ mask: "(999) 999-9999" });
    } else if (mask == "(+ 81)" || mask == "(+ 82)" || mask == "(+ 86)") {
        $("#txtTelefono").inputmask({ mask: "(999) 9999-9999" });
    }
}

function popValidacion() {
    $("#popProducto").popover({
        headers: false,
        trigger: "hover",
        placement: "top",
        content: "Este campo es obligatorio para seguir con el formulario.",
    });

    $("#popCantidad").popover({
        headers: false,
        trigger: "hover",
        placement: "top",
        content: "Este campo es obligatorio para seguir con el formulario.",
    });

    $("#popProducto").popover({
        headers: false,
        trigger: "hover",
        placement: "top",
        content: "Este campo es obligatorio para seguir con el formulario.",
    });
    $("#popCantidad").popover({
        headers: false,
        trigger: "hover",
        placement: "top",
        content: "Este campo es obligatorio para seguir con el formulario.",
    });
    $("#popProvCheck").popover({
        headers: false,
        trigger: "hover",
        placement: "top",
        content: "Este campo es obligatorio para seguir con el formulario.",
    });
    $("#popProveedor").popover({
        headers: false,
        trigger: "hover",
        placement: "top",
        content: "Este campo es obligatorio para seguir con el formulario.",
    });
    $("#popContacto").popover({
        headers: false,
        trigger: "hover",
        placement: "top",
        content: "Este campo es obligatorio para seguir con el formulario.",
    });
    $("#popCorreo").popover({
        headers: false,
        trigger: "hover",
        placement: "top",
        content: "Este campo es obligatorio para seguir con el formulario.",
    });
    $("#popDestino").popover({
        headers: false,
        trigger: "hover",
        placement: "top",
        content: "Este campo es obligatorio para seguir con el formulario.",
    });
    $("#popEnvio").popover({
        headers: false,
        trigger: "hover",
        placement: "top",
        content: "Este campo es obligatorio para seguir con el formulario.",
    });
    $("#popIncoterm").popover({
        headers: false,
        trigger: "hover",
        placement: "top",
        content: "Este campo es obligatorio para seguir con el formulario.",
    });
}

function editProvedor() {
    // var dataNombre = $("#dataNombre").html();
    // var dataCorreo = $("#dataCorreo").html();
    // var dataLada = $("#dataLada").html();
    // var dataTelefono = $("#dataTelefono").html();
    // var dataArea = $("#dataArea").html();
    // var dataPuesto = $("#dataPuesto").html();
    // var dataEmpresa = $("#dataEmpresa").html();
    // var dataCalle = $("#dataCalle").html();
    // var dataNoExt = $("#dataNoExt").html();
    // var dataNoInt = $("#dataNoInt").html();
    // var dataEntreCll = $("#dataEntreCll").html();
    // var dataColonia = $("#dataColonia").html();
    // var dataCodigoP = $("#dataCodigoP").html();
    // var dataCiudad = $("#dataCiudad").html();
    // var dataEstado = $("#dataEstado").html();
    // var dataPais = $("#dataPais").html();
    // var dataNotas = $("#dataNotas").html();

    // var txtNombre = $("#txtNombre").val();
    // var txtCorreo = $("#txtCorreo").val();
    // var txtTelefono = $("#txtTelefono").val();
    // var selLada = $("#selLada").val();
    // var txtArea = $("#txtArea").val();
    // var txtPuesto = $("#txtPuesto").val();
    // var txtEmpresa = $("#txtEmpresa").val();
    // var txtCalle = $("#txtCalle").val();
    // var txtEntreC = $("#txtEntreC").val();
    // var txtNoEx = $("#txtNoEx").val();
    // var txtNoIn = $("#txtNoIn").val();
    // var txtColonia = $("#txtColonia").val();
    // var txtCodigoP = $("#txtCodigoP").val();
    // var txtCiudad = $("#txtCiudad").val();
    // var txtEstado = $("#txtEstado").val();
    // var txtPais = $("#txtPais").val();
    // var txtNotas = $("#txtNotas").val();

    // $("#txtNombre").val(dataNombre);
    // $("#txtCorreo").val(dataCorreo);
    // $("#txtArea").val(dataArea);
    // $("#txtPuesto").val(dataPuesto);
    // $("#txtEmpresa").val(dataEmpresa);
    // $("#txtCalle").val(dataCalle);
    // $("#txtEntreC").val(dataEntreCll);
    // $("#txtNoEx").val(dataNoExt);
    // $("#txtNoIn").val(dataNoInt);
    // $("#txtColonia").val(dataColonia);
    // $("#txtCodigoP").val(dataCodigoP);
    // $("#txtCiudad").val(dataCiudad);
    // $("#txtEstado").val(dataEstado);
    // $("#txtPais").val(dataPais);
    // $("#txtNotas").val(dataNotas);

    if (dataLada == "(+ 66)") {
        $("#selLada option[value='" + dataLada + "']").attr("selected", true);
        $("#txtTelefono").inputmask({ mask: "(999) 999-9999" });
        $("#txtTelefono").removeAttr("disabled");
        $("#txtTelefono").val(dataTelefono);
    } else if (dataLada == "(+ 84)") {
        $("#selLada option[value='" + dataLada + "']").attr("selected", true);
        $("#txtTelefono").inputmask({ mask: "(999) 999-9999" });
        $("#txtTelefono").removeAttr("disabled");
        $("#txtTelefono").val(dataTelefono);
    } else if (dataLada == "(+ 1)") {
        $("#selLada option[value='" + dataLada + "']").attr("selected", true);
        $("#txtTelefono").inputmask({ mask: "(999) 999-9999" });
        $("#txtTelefono").removeAttr("disabled");
        $("#txtTelefono").val(dataTelefono);
    } else if (dataLada == "(+ 52)") {
        $("#selLada option[value='" + dataLada + "']").attr("selected", true);
        $("#txtTelefono").inputmask({ mask: "(999) 999-9999" });
        $("#txtTelefono").removeAttr("disabled");
        $("#txtTelefono").val(dataTelefono);
    } else if (dataLada == "(+ 82)") {
        $("#selLada option[value='" + dataLada + "']").attr("selected", true);
        $("#txtTelefono").inputmask({ mask: "(999) 9999-9999" });
        $("#txtTelefono").removeAttr("disabled");
        $("#txtTelefono").val(dataTelefono);
    } else if (dataLada == "(+ 81)") {
        $("#selLada option[value='" + dataLada + "']").attr("selected", true);
        $("#txtTelefono").inputmask({ mask: "(999) 9999-9999" });
        $("#txtTelefono").removeAttr("disabled");
        $("#txtTelefono").val(dataTelefono);
    } else if (dataLada == "(+ 91)") {
        $("#selLada option[value='" + dataLada + "']").attr("selected", true);
        $("#txtTelefono").inputmask({ mask: "(999) 999-9999" });
        $("#txtTelefono").removeAttr("disabled");
        $("#txtTelefono").val(dataTelefono);
    } else if (dataLada == "(+ 86)") {
        $("#selLada option[value='" + dataLada + "']").attr("selected", true);
        $("#txtTelefono").inputmask({ mask: "(999) 9999-9999" });
        $("#txtTelefono").removeAttr("disabled");
        $("#txtTelefono").val(dataTelefono);
    }
}
function cardProd(id) {
    prodNew = '<div class="card" style="margin: 0px; box-shadow: none">'+
                '<div class="card-header py-1 px-2" style="border-top: 1px solid rgba(0, 0, 0, 0.125)">'+
                    '<label class="lbl-form p-0" data-card-widget="collapse" id="dataProducto'+ id +'"></label>'+
                    '<div class="card-tools mt-0">'+
                        '<a type="button" class="btn btn-tool" href="">'+
                            '<i class="fas fa-pen"></i>'+
                        '</a>'+
                        '<a type="button" class="btn btn-tool" data-card-widget="collapse">'+
                            '<i class="fas fa-minus"></i>'+
                        '</a>'+
                        '<a type="button" class="btn btn-tool" data-card-widget="remove">'+
                            '<i class="fas fa-times"></i>'+
                        '</a>'+
                    '</div>'+
                '</div>'+
                '<div class="card-body py-1 px-4" style="display: block;">'+
                    '<div class="text-muted">'+
                        '<p class="text-sm m-0">'+
                            '<strong>Producto: </strong>'+
                            '<span id="dataProdName'+ id +'"></span>'+
                        '</p>'+
                        '<p class="text-sm m-0">'+
                            '<strong>Cantidad: </strong>'+
                            '<span id="dataCantidad'+ id +'"></span>'+
                            '<small id="dataUnidad'+ id +'"></small>'+
                        '</p>'+
                        '<p class="text-sm mb-0 hidden" id="dataRazon'+ id +'">'+
                            '<strong>Razon social:</strong>'+
                            '<span id="dataRzSocial'+ id +'"></span>'+
                        '</p>'+
                        '<p class="text-sm mb-0 hidden" id="dataFiles'+ id +'">'+
                            '<strong>Media: </strong>'+
                            '<a class="btn-imgen" id="dataImgProd'+ id +'">'+
                                '<i class="far fa-fw fa-image"></i>'+
                                '<span id="dataProdImg'+ id +'"></span>'+
                            '</a>'+
                        '</p>'+
                    '</div>'+
                '</div>'+
                '<div class="card-body p-0 hidden" id="cardProveedor'+ id +'">'+
                    '<div class="card m-0 shadow-none collapsed-card">'+
                        '<div class="card-header py-1 px-3">'+
                            '<label class="lbl-form p-0 hidden" id="dataNoProv'+ id +'">No exite proveedor agregar</label>'+
                            '<label class="lbl-form p-0 hidden" data-card-widget="collapse" id="dataProveedor'+ id +'">Proveedor</label>'+
                            '<div class="card-tools mt-0">'+
                                '<a type="button" class="btn btn-tool" href="">'+
                                    '<i class="fas fa-pen"></i>'+
                                '</a>'+
                                '<a type="button" class="btn btn-tool hidden" id="dataTool'+ id +'" data-card-widget="collapse">'+
                                    '<i class="fas fa-minus"></i>'+
                                '</a>'+
                                '<a type="button" class="btn btn-tool" data-card-widget="remove">'+
                                    '<i class="fas fa-times"></i>'+
                                '</a>'+
                            '</div>'+
                        '</div>'+
                        '<div class="card-body py-1 px-4" style="display: none;">'+
                            '<div class="text-muted">'+
                                '<p class="text-sm m-0">'+
                                    '<strong>Proveedor: </strong>'+
                                    '<span id="dataProvName'+ id +'"></span>'+
                                '</p>'+
                                '<p class="text-sm m-0">'+
                                    '<strong>Contacto: </strong>'+
                                    '<span id="dataContacto'+ id +'"></span>'+
                                '</p>'+
                                '<p class="text-sm mb-0">'+
                                    '<strong>Correo: </strong>'+
                                    '<span id="dataCorreo'+ id +'"></span>'+
                                '</p>'+
                                '<p class="text-sm mb-0">'+
                                    '<strong>Teléfono:</strong>'+
                                    '<span id="dataLada'+ id +'"></span>'+
                                    '<span id="datTelefono'+ id +'"></span>'+
                                '</p>'+
                                '<p class="text-sm mb-0">'+
                                    '<strong>Página: </strong>'+
                                    '<span id="dataPagin'+ id +'"></span>'+
                                '</p>'+
                                '<p class="text-sm mb-0">'+
                                    '<strong>No.Factura </strong>'+
                                    '<span id="dataFolio'+ id +'"></span><a href="" class="btn-imgen" id="dataFolioFile'+ id +'">'+
                                        '<i class="far fa-fw fa-image"></i>'+
                                        '<span id="dataFolioName'+ id +'"></span>'+
                                    '</a>'+
                                '</p>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="card-body p-0 hidden" id="cardEnvio'+ id +'">'+
                    '<div class="card m-0 shadow-none collapsed-card">'+
                        '<div class="card-header py-1 px-3">'+
                            '<label class="lbl-form p-0" data-card-widget="collapse" id="dataEnvio'+ id +'">Envio</label>'+
                            '<div class="card-tools mt-0">'+
                                '<a type="button" class="btn btn-tool" href="">'+
                                    '<i class="fas fa-pen"></i>'+
                                '</a>'+
                                '<a type="button" class="btn btn-tool" data-card-widget="collapse">'+
                                    '<i class="fas fa-minus"></i>'+
                                '</a>'+
                            '</div>'+
                        '</div>'+
                        '<div class="card-body py-1 px-4" style="display: none">'+
                            '<div class="text-muted">'+
                                '<p class="text-sm m-0">'+
                                    '<strong>Destino: </strong>'+
                                    '<span id="dataDestino'+ id +'"></span>'+
                                '</p>'+
                                '<p class="text-sm m-0">'+
                                    '<strong>Tipo envio:</strong>'+
                                    '<span id="dataEnvio'+ id +'"></span>'+
                                '</p>'+
                                '<p class="text-sm mb-0">'+
                                    '<strong>Intercom: </strong>'+
                                    '<span id="dataIntercom'+ id +'"></span>'+
                                '</p>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="card-body p-0 hidden" id="cardComentario'+ id +'">'+
                    '<div class="card m-0 shadow-none collapsed-card">'+
                        '<div class="card-header py-1 px-3">'+
                            '<label class="lbl-form p-0" data-card-widget="collapse" id="dataComentario'+ id +'">Comentario</label>'+
                            '<div class="card-tools mt-0">'+
                                '<a type="button" class="btn btn-tool" href="">'+
                                    '<i class="fas fa-pen"></i>'+
                                '</a>'+
                                '<a type="button" class="btn btn-tool" data-card-widget="collapse">'+
                                    '<i class="fas fa-minus"></i>'+
                                '</a>'+
                                '<a type="button" class="btn btn-tool" data-card-widget="remove">'+
                                    '<i class="fas fa-times"></i>'+
                                '</a>'+
                            '</div>'+
                        '</div>'+
                        '<div class="card-body py-2 px-4" style="display: none;">'+
                            '<div class="text-muted">'+
                                '<p class="text-sm m-0">'+
                                    '<strong>Comentario: </strong>'+
                                    '<span id="dataComent'+ id +'"></span>'+
                                '</p>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>';

    $("#cardProductos1").append(prodNew);
    $("#cardProductos2").append(prodNew);
    $("#cardProductos3").append(prodNew);
    $("#cardProductos4").append(prodNew);
}

function validarProducto() {
    selUnidad = $("#selUnidad").val();
    txtProducto = $("#txtProducto").val();
    txtCantidad = $("#txtCantidad").val();

    if (txtProducto != "" && txtCantidad != "" && selUnidad != "") {
        valProd = true;
        $("#btnContinuar1").removeClass("visible");
    } else {
        valProd = false;
        $("#btnContinuar1").addClass("visible");
    }
}

function llenadoProducto(id) {
    cardProd(id);

    spFiles = $("#spFiles").html();
    selUnidad = $("#selUnidad").val();
    txtProducto = $("#txtProducto").val();
    txtCantidad = $("#txtCantidad").val();
    txtRazonSocial = $("#txtRazonSocial").val();

    $("#dataUnidad" + id + "").html(selUnidad);
    $("#dataProducto" + id + "").html(txtProducto);
    $("#dataProdName" + id + "").html(txtProducto);
    $("#dataCantidad" + id + "").html(txtCantidad);

    if (spFiles != "") {
        file = "Prod Img 1." + spFiles;
        $("#dataProdImg" + id + "").html(file);
        $("#dataFiles" + id + "").removeClass("hidden");
    }
    if (txtRazonSocial != "") {
        $("#dataRazon" + id + "").removeClass("hidden");
        $("#dataRzSocial" + id + "").html(txtRazonSocial);
    }
}

function editarProducto(id) {
    spFiles = $("#spFiles").html();
    selUnidad = $("#selUnidad").val();
    txtProducto = $("#txtProducto").val();
    txtCantidad = $("#txtCantidad").val();
    txtRazonSocial = $("#txtRazonSocial").val();

    $("#dataUnidad" + id + "").html(selUnidad);
    $("#dataProducto" + id + "").html(txtProducto);
    $("#dataProdName" + id + "").html(txtProducto);
    $("#dataCantidad" + id + "").html(txtCantidad);

    if (spFiles != "") {
        file = "Prod Img 1." + spFiles;
        $("#dataProdImg" + id + "").html(file);
        $("#dataFiles" + id + "").removeClass("hidden");
    }
    if (txtRazonSocial != "") {
        $("#dataRazon" + id + "").removeClass("hidden");
        $("#dataRzSocial" + id + "").html(txtRazonSocial);
    }
}

$(document).ready(function () {
    jQuery.noConflict();
    asignacion();
    popValidacion();
    validarProducto();

    // dataProducto
    // dataProdName
    // dataCantidad
    // dataUnidad
    // dataRzSocial
    // dataImgProd
    // cardProveedor
    // dataProvName
    // dataContacto
    // dataCorreo
    // dataLada
    // datTelefono
    // dataPagin
    // dataFolio
    // dataFolioFile
    // dataFolioName
    // dataEnvio
    // dataDestino
    // dataEnvio
    // dataIntercom
    // dataComentario
    // dataComent

    $("#select")
        .select2({
            tags: true,
            allowClear: true,
            placeholder: "Proveedor",
        })
        .on("select2:unselecting", function () {
            $(this).data("unselecting", true);
        })
        .on("select2:open", function (e) {
            $("input.select2-search__field").prop("placeholder", "Filtrar o agregar proveedor");
        })
        .on("select2:opening", function (e) {
            if ($(this).data("unselecting")) {
                $(this).removeData("unselecting");
                e.preventDefault();
            }
        });

    $("#select").val("Amed Refrigeration Solutions");
    $("#select").trigger("change");
    $(document).on("click", ".next-step", function (event) {
        event.preventDefault();
        id = $(this).data("id");

        var li = "#st" + id + "";
        var tab = "#step" + id + "";
        $(li).removeClass("active");
        $(tab).removeClass("active");

        nextTab(id);
    });

    $(document).on("click", ".prev-step", function (event) {
        event.preventDefault();

        id = $(this).data("id");
        var li = "#st" + id + "";
        var tab = "#step" + id + "";
        $(li).removeClass("active");
        $(tab).removeClass("active");

        prevTab(id);
    });

    $(document).on("click", "#cancelEx", function (event) {
        event.preventDefault();
        countImgs--;

        $("#spFiles").html("");
        $("#fileClip").removeClass("hidden");
        $("#filesUp").addClass("hidden");
        $("#cancelEx").addClass("hidden");
    });

    $(document).on("click", "#cancelFl", function (event) {
        event.preventDefault();
        countImgs--;

        $("#txtFolio").val("");
        $("#fileFolio").removeClass("hidden");
        $("#folioUp").addClass("hidden");
        $("#cancelFl").addClass("hidden");
    });

    $(document).on("click", ".addProd", function (event) {
        event.preventDefault();
        id = $(this).data("id");
        validarProducto();
        // btnVerificar, toolsProd, btnProv, btnEnvio
        if (id == 1) {
            if (valProd == true) {
                countProd++;
                idProd = countProd;

                llenadoProducto(idProd);
                $("#txtIdProd").val(idProd);

                $(".next.toolsProd").removeClass("visible");
                $(".back.btnProv").removeClass("visible");

                $("#btnContinuar1").removeClass("btn-submit addProd");
                $("#btnContinuar1").addClass("btn-save saveProd");
                $("#btnContinuar1").html("Guardar");

                $("#step1").removeClass("active");
                $("#st1").removeClass("active");
                $("#txtStepNow").val(2);
                nextTab(1);
            } else if (valProd == false) {
                Toast.fire({
                    icon: "warning",
                    title: "Llenar campos con * para continuar.",
                });
            }
            // } else if (id == 2) {

            // } else if (id == 3) {

            // } else if (id == 4) {
        }
    });

    $(document).on("click", ".saveProd", function (event) {
        event.preventDefault();
        id = $(this).data("id");
        validarProducto();
        if (id == 1) {
            if (valProd == true) {
                idProd = countProd;
                stepNow = parseFloat($("#txtStepNow").val());
                step = stepNow - 1;

                editarProducto(idProd);

                $("#st1").removeClass("active");
                $("#step1").removeClass("active");

                nextTab(step);

                $(".next.toolsProd").removeClass("visible");
                $(".back.btnProv").removeClass("visible");
            } else if (valProd == false) {
                Toast.fire({
                    icon: "warning",
                    title: "Llenar campos con * para continuar.",
                });
            }
        }
    });

    $(document).on("change", ".chkProv", function (event) {
        event.preventDefault();
        id = $(this).attr("id");

        idProd = $("#txtIdProd").val();
        stepNow = parseFloat($("#txtStepNow").val());

        if (id == "chkSiProv") {
            $("#chkSiProv").attr("checked", true);
            $("#chkNoProv").removeAttr("checked");

            $("#select").removeAttr("disabled");
            $("#selLada").removeAttr("disabled");
            $("#folioUp").removeClass("disabled");
            $("#txtFolio").removeAttr("disabled");
            $("#txtPagina").removeAttr("disabled");
            $("#txtCorreo").removeAttr("disabled");
            $("#txtContacto").removeAttr("disabled");

            $("#dataNoProv"+ idProd +"").addClass("hidden");
        } else if (id == "chkNoProv") {
            $("#chkNoProv").attr("checked", true);
            $("#chkSiProv").removeAttr("checked");

            $("#select").attr("disabled", true);
            $("#selLada").attr("disabled", true);
            $("#txtFolio").attr("disabled", true);
            $("#txtPagina").attr("disabled", true);
            $("#txtCorreo").attr("disabled", true);
            $("#txtContacto").attr("disabled", true);
            $("#folioUp").addClass("disabled", true);

            nextTab(stepNow);

            $("#st2").removeClass("active");
            $("#step2").removeClass("active");

            $(".next.btnProv").removeClass("visible");
            $(".back.btnProv").removeClass("visible");
            $("#dataNoProv"+ idProd +"").removeClass("hidden");
        }
    });
    $(document).on("change", "#fileClip", function (event) {
        event.preventDefault();
        countImgs++;

        files = event.target.files;
        file = event.target.files[0];
        fExt = file.name.split(".").pop();
        fName = file.name.split(".").shift();

        $("#spFiles").html(fExt);
        $("#fileClip").addClass("hidden");
        $("#filesUp").removeClass("hidden");
        $("#cancelEx").removeClass("hidden");
    });

    $(document).on("change", "#fileFolio", function (event) {
        event.preventDefault();
        files = event.target.files;
        file = files[0];
        countImgs++;

        $("#txtFolio").val("No_folio.pdf");
        $("#fileFolio").addClass("hidden");
        $("#folioUp").removeClass("hidden");
        $("#cancelFl").removeClass("hidden");
    });

    $(document).on("change", "#selUnidad", function (event) {
        event.preventDefault();
        validarProducto();

        var selUdSel = $(this).children("option:selected").val();
        if (selUdSel == "0") {
            $("#selUnidad :selected").addClass("sel-disabled");
            $("#selUnidad").addClass("sel-disabled");
        } else if (selUdSel != "0") {
            $("#selUnidad :selected").removeClass("sel-disabled");
            $("#selUnidad").removeClass("sel-disabled");
        }
    });

    $(document).on("change", "#selLada", function (event) {
        if (this.value == "(+ 66)" || this.value == "(+ 84)" || this.value == "(+ 1)" || this.value == "(+ 52)" || this.value == "(+ 91)") {
            $("#txtTelefono").removeAttr("disabled");
            $("#txtTelefono").inputmask({ mask: "(999) 999-9999" });
        } else if (this.value == "(+ 81)" || this.value == "(+ 82)" || this.value == "(+ 86)") {
            $("#txtTelefono").removeAttr("disabled");
            $("#txtTelefono").inputmask({ mask: "(999) 9999-9999" });
        }
    });

    $(document).on("input", "#txtProducto", function () {
        validarProducto();
    });
    $(document).on("input", "#txtCantidad", function () {
        validarProducto();
    });
    jQuery(function ($) {
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
    });
});
