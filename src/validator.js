 // ... Ocultando caracteres y reemplazando por ###
const validator = 1234567890123456; 
 const lastDig = validator.slice (-4);
  const masked = lastDig.padStart (16, '#');
  document.querySelector ('grupoTarjeta').innerHTML = masked;

export default validator;
