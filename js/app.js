//La calculadora debe realizar
// el calculo de un numero

//1. Recurperar la referencia del boton utilizado $
//2. agregar el evento clik al boton 
//3. crear la funcion para realizar el caculo
//4. el resultado se debe mostra en el  elemento adecuado
  
//Recuperar elemento btn1
  $("#btn1").click(function(ev){
  	ev.preventDefault();//Evita que el formulario se 
  	//envie al servidor 
    //ligica para calcular 
    //1. Recuperar lo que ingreso el usuario y guardar en la variable 
    //2. Realizar el calculo y guardar en otra variable 
    let numeroIngresado = $("#n1").val();

   let result = Math.pow(numeroIngresado,2);
	$(".res1").html(`${numeroIngresado}<sup>2</sup>= ${result}`);
  	$(".res1").css("border", "red solid 2px");	

  });
   //Funcion para calcular por separado
   function calcularprueba(){

  }
   	//segundo section //
   	$("#btn2").click(function(){
   		//aca se escrve
   	let plBra=$("#palabra").val();
	console.log(plBra.length);

	$(".res2").text(plBra.length);


   	})

 
