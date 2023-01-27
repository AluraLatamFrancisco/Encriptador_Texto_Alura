/*
a= ai
e= enter
i= imes
o= ober
u=ufat
*/

function Encriptado(datos) {
  var datos = document.getElementById("textarea").value;
  alert(datos);
  document.getElementById("textarea").value = "";
  var resul=EnvioEncrip(datos);
  console.log(resul);
 document.getElementById("Resul").innerText=resul;
}

function Desencriptado(datos) {
  var datos = document.getElementById("textarea").value;
  alert(datos);
  document.getElementById("textarea").value = "";
  EnvioDesencr(datos);
}
/*Metodo que realizar el reemplazo de los datos para por nuevos valores*/
function EnvioEncrip(datos) {
  var linea="";
  for (let i = 0; i < datos.length; i++) {
    var element = datos[i];
    console.log("incio  "+element);
    switch (element) {
      case 'a':
        element= "ai";
        break;
      case 'e':
        element = "enter";
        break;
      case 'i':
        element= "imes";
        break;
      case 'o':
        element= "ober";
        break;
      case 'u':
        element = "ufat";
        break;
      case '':
        element= "";
        break;
        default:
    }
    console.log("final  "+element);
    linea=linea+element;
  }
  console.log(linea);
  return linea;
}
function EnvioDesencr(datos) {
  for (let i = 0; i < datos.length; i++) {
    const element = datos[i];
    console.log(element);
    switch (element) {
      case "ai":
        break;
      case "enter":
        break;
      case "imes":
        break;
      case "ober":
        break;
      case "ufat":
        break;
      case "_":
        break;
      default:
    }
  }

  return datos;
}
