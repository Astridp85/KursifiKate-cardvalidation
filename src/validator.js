const validator = {
    isValid: function (creditCardNumber) {
        let par = [];
        let imPar = [];
        let resultado = 0;
        
        // invertir el orden del array 
        creditCardNumber = Array.from(creditCardNumber).reverse();
        // separar las posiciones pares de los impares
        for (let i in creditCardNumber) {
            creditCardNumber[i] = parseInt(creditCardNumber[i]);
            //console.log (creditCardNumber);
            if (i % 2 !== 0) {
                par.push(creditCardNumber[i] * 2);
                //console.log (creditCardNumber ());
                for (let k in par) {
                    if (par[k] > 9) {
                        par[k] = (parseInt(par[k] % 10)) + (parseInt(par[k] / 10));
                    }
                }
            } else { 
                imPar.push(creditCardNumber[i]);
            
            }
        }
        // sumar posiciones pares e impares
        const suma = (total,creditCardNumber ) => {
            return total+creditCardNumber;
        }
        ;
        resultado = par.reduce(suma) + imPar.reduce(suma);
        
      
        if (resultado % 10 === 0) {
            return true
            
        } else {
            return false
            
        }
    },
    maskify : function ( creditCardNumber )  {
        if  ( creditCardNumber . length  <  4 )  return  creditCardNumber ;
        const  ultimos4Digitos  =  creditCardNumber . substr ( - 4 ) ;
        const  digitosOcultos  =  creditCardNumber . substr ( 0,  creditCardNumber . length  -  4 ) . replace (/[a-zA-Z0-9]/g, '#') ;
        const enmascarar = digitosOcultos + ultimos4Digitos;
        return  enmascarar 
    }
}

export default validator

