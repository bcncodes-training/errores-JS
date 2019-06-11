/*función con errores ES5*/
function sumar() {
  try {
    let exception = new Error('Too much arguments');
    if (arguments.length>10){ throw exception};
    let suma=0;
    for (i = 0; i < arguments.length; i++) {
      if (isNaN(parseFloat(arguments[i]))) {
        exception.message='Not a number';  
        throw exception;
      } else {
        suma += parseFloat(arguments[i]);
      }
    }
    return suma;
  } catch (exception) {
      return exception;
  }
}
console.log(sumar(1,2,3,4,5,6,78));

/*función con errores ES6*/

/* function callbackMap(e) {
    e =parseFloat(e)
};

const callbackMap2 = function(e){
    e = parseFloat(e);
}

const callbackMap3 = (e)=>{
    e = parseFloat(e);
}

const callbackMap4 = e=> e=parseFloat(e);
 */

const sumarArray = (...arr) => {
  try {
    let exception = new Error("Not a valid argument number");
    if (arr.length < 1 || arr.length > 10) throw exception;
    /* let arrMap =  arr.map(e => {
        if (isNaN(parseFloat(e))) {
          exception.message = "Not a number";
          throw exception;
        }

        return e = parseFloat(e);
      })

    let acumulador =      arrMap.reduce((acumulador, elemento) => {
        return acumulador + elemento;
      });
    return acumulador; */
    return arr
      .map(e => {
        if (isNaN(parseFloat(e))) {
          exception.message = "Not a number";
          throw exception;
        }

        return e = parseFloat(e);
      })
      .reduce((acumulador, elemento) => {
        return acumulador + elemento;
      });
  } catch (exception) {return exception}
};

console.log(sumarArray());
