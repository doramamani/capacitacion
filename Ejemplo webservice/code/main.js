
$(document).ready(function() {
    var boton = $("#btnComida");
    boton.on('click', function() {
        
        $.get( "https://at-capacitaciones-ws-chrisfs313.c9users.io/services/listEntries", function( data ) {
         $( ".result" ).html( data );
          alert( "Load was performed." );
        });
        
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
        
        alert(nombre2 + " " + apellido2 + " " + edad2);
    });

});

function ValidarElementos() {
    var nombre = $("#input_nombre").val().trim();
    var apellido = $("#input_apellido").val().trim();
    var esValido = nombre.length > 0 && apellido.length > 0;
            //gibhub.warning('Dato obligatorio');
    
    nombre.length > 0 
        ? $('#val_input_nombre').addClass('hide')
        : toastr.info('Nombre - Dato obligatorio');
        
        
        
    apellido.length > 0 
        ? $('#val_input_apellido').addClass('hide')
        : toastr.info('Apellido - Dato obligatorio');
    
    return esValido;
}