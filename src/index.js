import validator from "./validator.js"
const formulario = document.getElementById('validacionTarjeta');

// * Select mes dinámico.
for (let mes = 1; mes <= 12; mes ++ ){
    let optionMes = document.createElement ("option");
    optionMes.value = mes;
    optionMes.innerText = mes;
    formulario.mesSeleccionado.appendChild(optionMes);
}
 // * Select año dinámico.
const actualYear = new Date().getFullYear();
for (let year = actualYear; year <= actualYear + 10; year ++){
    let optionYear = document.createElement ("option");
    optionYear.value = year;
    optionYear.innerText = year;
    formulario.yearSeleccionado.appendChild (optionYear);
}
// * número de tarjeta
formulario.inputNumero1.addEventListener("keyup", (e) => {
let numberInput = e.target.value;
//* sin espacios en blanco, letras y eliminando el último espaciado 
formulario.inputNumero1.value = numberInput
.replace(/\s/g, '').replace(/\D/g, '')

.trim (); // Elimina el último espacio
});

// * Validación tarjeta
//console.log(validator.isValid("12667798654"));
const saltarInput = document.getElementById ("inputNombre");
saltarInput.addEventListener("click", evaluarTarjeta);
function evaluarTarjeta (){
var creditCardNumber = document.getElementById ("inputNumero1").value;
if (validator.isValid(creditCardNumber) == true) {
    //alert ("tarjeta válida");
    confirm('su tarjeta '+ validator.maskify(creditCardNumber) + ' es válida.'  +  " Desea continuar con su compra");
}else {
    //alert ("tarjeta no valida");
 confirm('su tarjeta '+ validator.maskify(creditCardNumber) + ' No es válida.'  +  " Desea continuar con su compra");

}
}
//*Mostrar y ocultar formulario
 const compraOff= document.getElementById("btn4"); 
compraOff.addEventListener("click",ocultar);
function ocultar(){
    document.getElementById("compra").style.display="none";
    document.getElementById("cursos").style.display="block";
}
const compraIn= document.getElementById("carrito"); 
compraIn.addEventListener("click", mostrar);
function mostrar(){
    document.getElementById("compra").style.display="block";
    document.getElementById("cursos").style.display="none";
}
/*var compraIn= element.getElementsByClassName('btn');
compraIn.addEventListener("click", mostrar);
function mostrar(){
    document.getElementById("compra").style.display="block";
    document.getElementById("cursos").style.display="none";
}*/





