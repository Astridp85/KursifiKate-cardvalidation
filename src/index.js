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
formulario.inputNumero.addEventListener("keyup", (e) => {
    let numberInput = e.target.value;
    //* sin espacios en blanco, letras y espacios cada cuatro números y eliminando el último espaciado 
    formulario.inputNumero.value = numberInput
    .replace(/\s/g, '').replace(/\D/g, '').replace(/([0-9]{4})/g, '$1 ')
  .trim ();
});
// * tarjeta no valida


 