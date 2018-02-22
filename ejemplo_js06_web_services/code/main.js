$(document).ready(function() {
    var btn_ws_get = $('#btnServicio');
    btn_ws_get.on('click', function() {
        
        var wsUrl = "https://at-capacitaciones-ws-chrisfs313.c9users.io/services/listEntries";

        var jqxhr = $.get(wsUrl, function(data) {
            alert(data);
            
            //var nombre = substr(data, 0, 7);
            var parametros = JSON.parse(data);
            
            console.log(parametros);
            var nombre = parametros.nombre
            var apellido = parametros.apellido
            var edad = parametros.edad
            
            var html = "";
            html += "<tr>";
            html += "    <td class='class_nombre'>" + nombre + "</td>";
            html += "    <td class='class_apellido'>" + apellido + "</td>";
            html += "    <td class='class_edad'>" + edad + "</td>";
            
            html += "    <td>";
            html += "       <button class='btnInfo'>Info</button> ";
            html += "    </td>";
            
            html += "    <td>";
            html += "       <button class='btnEliminar'>Eliminar</button> ";
            html += "    </td>";
            
            html += "</tr>";
            
            $("#table_personas").append(html);     
            
            
            
            
        })
        .fail(function(error, data) {
            //alert("Consultar al departamento TI sobre el servicio.");
            //console.log("error", error);
            
            window.location.href = "no_services.html";
        })
        
    });
    
    var boton = $("#btnComida");
    boton.on('click', function() {
        
        if (ValidarElementos()) {
            var nombre = $("#input_nombre").val();
            var apellido = $("#input_apellido").val();
            var edad = $("#input_edad").val();
            
            var html = "";
            html += "<tr>";
            html += "    <td class='class_nombre'>" + nombre + "</td>";
            html += "    <td class='class_apellido'>" + apellido + "</td>";
            html += "    <td class='class_edad'>" + edad + "</td>";
            
            html += "    <td>";
            html += "       <button class='btnInfo'>Info</button> ";
            html += "    </td>";
            
            html += "    <td>";
            html += "       <button class='btnEliminar'>Eliminar</button> ";
            html += "    </td>";
            
            html += "</tr>";
            
            $("#table_personas").append(html);
        }
    });
    
    $(document).on('click', ".btnEliminar", function() {
        $(this).parent().parent().remove();
    });
    
    $(document).on('click', ".btnInfo", function() {
        var selector = $(this).parent().parent();
        var nombre2 = selector.find(".class_nombre").html();
        var apellido2 = selector.find(".class_apellido").html();
        var edad2 = selector.find(".class_edad").html();
        var edaddelavidu = "";
        alert(nombre2 + " " + apellido2 + " " + edad2);
    });

});

function ValidarElementos() {
    var nombre = $("#input_nombre").val().trim();
    var apellido = $("#input_apellido").val().trim();
    var esValido = nombre.length > 0 && apellido.length > 0;
    
    toastr.remove()
    
    if (nombre.length === 0) {
        toastr.warning('El campo Nombre es requerido.')
    }
    
    if (apellido.length === 0) {
        toastr.warning('El campo Apellido es requerido.')
    }
    
    nombre.length > 0 
        ? $('#val_input_nombre').addClass('hide')
        : $('#val_input_nombre').removeClass('hide');
        
    apellido.length > 0 
        ? $('#val_input_apellido').addClass('hide')
        : $('#val_input_apellido').removeClass('hide');
    
    return esValido;
}