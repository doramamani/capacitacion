
$(document).ready(function() {
    var boton = $("#btnComida");
    boton.on('click', function() {
        var nombre = $("#input_nombre").val();
        var apellido = $("#input_apellido").val();
        var edad = $("#input_edad").val();
        
        var html = "";
        html += "<tr>";
        html += "    <td>" + nombre + "</td>";
        html += "    <td>" + apellido + "</td>";
        html += "    <td>" + edad + "</td>";
        html += "    <td>";
        
        html += "       <button class='btnEliminar'>Eliminar</button> ";
        
        html += "    </td>";
        html += "</tr>";
        
        $("#table_personas").append(html);
    });
    
    $(document).on('click', ".btnEliminar", function() {
        $(this).parent().parent().remove();
    });

});