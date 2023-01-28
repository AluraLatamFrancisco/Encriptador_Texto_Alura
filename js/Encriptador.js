/*
a= ai
e= enter
i= imes
o= ober
u=ufat
*/

function Encriptado() {
  var datos = document.getElementById("textarea").value;

  if(datos!=""){
    alert(datos);
  document.getElementById("textarea").value = "";
  var resul=EnvioEncrip(datos);
  console.log(resul);
 document.getElementById("Resul").innerText=resul;
 document.getElementById("Resul_Encr").style.display='none';
 document.getElementById("Resultado").style.display='contents';
}else{
    alert("Dato Vacio"+datos);
    document.getElementById("Resul_Encr").style.display='block';
    document.getElementById("Resultado").style.display='none';

}

}

function Desencriptado() {
    var datos = document.getElementById("textarea").value;
    if(datos!=""){
        alert(datos);
      document.getElementById("textarea").value = "";
      var resul=EnvioDesencr(datos);
      console.log(resul);
     document.getElementById("Resul").innerText=resul;
     document.getElementById("Resul_Encr").style.display='none';
     document.getElementById("Resultado").style.display='contents';
    }else{
        alert("Dato Vacio"+datos);
        document.getElementById("Resul_Encr").style.display='block';
        document.getElementById("Resultado").style.display='none';
    
    }
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
//utilizamos la funcion que viene en js de reemplazar los datos
function EnvioDesencr(datos) {
   var tem=datos.replaceAll("ai", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u");
   /* console.log(tem);*/
    return tem;
}
