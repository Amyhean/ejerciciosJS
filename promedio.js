/*Te han contratado en una empresa de venta de ropa. Se llegó el buen fin y una de tus tareas es que calcules 
 ¿Cuál tendría que ser el precio final de un saco super padrísimo que cuesta 1560 que tiene un descuento de 18%?
¿Cuáles tendrían que ser las modificaciones que tendrías que hacer en caso de que el descuento sea 10%.
 Los valores deben de ser capturados con promt y mostrados con alertas.*/
 //Considero que ya no se tendria que hacer ningun cambio ya que se le pide al usuario ingresar tanto el precio como el descuento y estas variables al no ser declaradas como constantes pueden alterarse.
 let precioinicial=parseInt(prompt("Ingrese el valor del producto"));
 let descuento=parseInt(prompt("Ingrese el descuento"));
 let montodedescuento= precioinicial*descuento/100;
 let preciofinal= precioinicial-montodedescuento;
 alert("Monto de descuento: $ "+montodedescuento);
 alert("El precio final de su producto es: $ "+preciofinal);