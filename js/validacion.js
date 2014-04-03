function ingresar()
{
    var usuario = $("#usuario").val();
    var contrasena = $("#contrasena").val();
    
    if(usuario=="" || contrasena=="")
    {
        $("#result1").html("<h3>Existen campos vacios</h3>");
    }
    else
    {
        $.ajax({
            type:"GET",
            url:"http://cdc.gatolocostudios.com/VersionMobile/Librerias/funciones.php?accion=ingresar&usuario="+usuario+"&contrasena="+contrasena,
            dataType:"text",
            data:$(this).serialize(),
            success:function(response){
                if(response=="Entro")
                {
                    cargarResultados(usuario);
                }
                else
                {
                    $("#result1").html(response);
                }
            }
        })
    } 
}

function cargarResultados(usuario)
{
    $.ajax({
            type:"GET",
            url:"http://cdc.gatolocostudios.com/VersionMobile/Librerias/funciones.php?accion=cargarResultados"
            +"&usuario="+usuario,
            dataType:"text",
            data:$(this).serialize(),
            success:function(response)
            {
                $("#result1").html(response);
            }
        })
}

function cargarTodosPacientes2(nit,opt)
{
    $.ajax({
            type:"GET",
            url:"http://cdc.gatolocostudios.com/VersionMobile/Librerias/funciones.php?accion=cargarTodosPacientes2"
            +"&opt="+opt
            +"&nit="+nit,
            dataType:"text",
            data:$(this).serialize(),
            success:function(response)
            {
                $("#resultadobusqueda").html(response);
            }
        })
}

function buscar(nit)
{
    var palabra = $("#busq").val();
    
    $.ajax({
        type:"GET",
        url:"http://cdc.gatolocostudios.com/VersionMobile/Librerias/funciones.php?accion=buscar"
        +"&palabra="+palabra
        +"&nit="+nit,
        dataType:"text",
        data:$(this).serialize(),
        success:function(response)
        {
            $("#resultBusq").html(response);
        }
    })
    
}