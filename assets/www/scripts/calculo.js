$('#page_login_submit').live('click',function(){
  // paso de parametros a variables
    
  var tu = $('#edadtuya').val();
  var ella = $('#edadelella').val();
  var tunovia = $('#page_login_cercatunovia').val();
  var sunovio = $('#page_login_cercasunovia').val();
  
  var borracho = $( "input:radio[id=borracho]:checked" ).val();
  var borrachootro = $( "input:radio[id=borrachootro]:checked" ).val();
  var redessociales = $( "input:radio[id=redessociales]:checked" ).val();
  var solas = $( "input:radio[id=solas]:checked" ).val();
  var casa = $( "input:radio[id=casa]:checked" ).val();
  
  var ruina =0;
  var diferencia_edad = Math.abs(tu -ella);
  
  if(diferencia_edad ==0){
      ruina +=0;
  }else if(diferencia_edad <5){
      ruina +=5;
  }else if (diferencia_edad >=5){
      ruina+=10;
  }
  if(redessociales == 1){
      ruina +=5;
  }
  if(borracho == 1){
      ruina +=10;
  }
  if(borrachootro == 1){
    ruina +=15;
  }
 if(solas == 1){
      ruina +=20;
  }
  if(casa == 1){
    ruina +=5;
  }
  if(tunovia== 0){
      ruina +=20;
  }
  if(tunovia== 0){
      ruina +=30;
  }
  if (tunovia<5){
      ruina +=15;
  }
  if (5<tunovia<9){
      ruina +=5;
  }
  if (sunovio>5){
      ruina +=15;
  }
  if (5<sunovio<9){
      ruina +=5;
  }
  if(ruina <30){
      $.mobile.changePage("poca.html", "slideup");

  }else if(ruina <70){
      $.mobile.changePage("media.html", "slideup");
  }else{
      $.mobile.changePage("alta.html", "slideup");
  }
 
  
  
  return false;
});