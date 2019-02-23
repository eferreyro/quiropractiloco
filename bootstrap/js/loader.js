
/*cuando hace la carga de la pagina index.html prepara las demás paginas para la vista*/

$(document).ready(function(){
      $("#contenido").load("choza.html");
  });

  $(document).ready(function(){
  $("#choza").click(function(){
    $("#contenido").load("choza.html");
  });
});
$(document).ready(function(){
  $("#citas").click(function(){
    $("#contenido").load("citas.html");
  });
});
$(document).ready(function(){
  $("#pacients").click(function(){
    $("#contenido").load("pacients.html");
  });
});
$(document).ready(function(){
  $("#medics").click(function(){
    $("#contenido").load("medics.html");
  });
});
$(document).ready(function(){
  $("#informs").click(function(){
    $("#contenido").load("informs.html");
  });
});
$(document).ready(function(){
  $("#segs").click(function(){
    $("#contenido").load("segs.html");
  });
});
