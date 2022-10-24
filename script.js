
/*

let input = document.getElementsByClassName('message-input');
let output = document.getElementsByClassName('message-output');
let tranformar = document.getElementById('transform');


if (document.getElementById('encript').checked){
    transformar.addEventListener('click', () => {
        output.value = btoa(input.value);
    })
}
else if(document.getElementById('decript').checked){
    transformar.addEventListener('click', () => {
        output.value = atob(input.value);
    })
}

                            */

var input = document.getElementById('message-input');
var output = document.getElementById('message-output');
var transformar = document.getElementById('transform');
var encript = document.getElementById('encript');
var decript = document.getElementById('decript');
var base64 = document.getElementById('rb1');
var cifra = document.getElementById('rb2');





//Cifra de Cesar//


const KEY = 25;

    //code//

    function codeCesar(input) {
        return input
            .split("")
          .map((ltr) => {
            var charCode = ltr.charCodeAt();
            if (charCode >= 65 && charCode <= 90) {
              return String.fromCharCode(((charCode - 65 + KEY) % 26) + 65);
            } else if (charCode >= 97 && charCode <= 122) {
              return String.fromCharCode(((charCode - 97 + KEY) % 26) + 97);
            } else {
              return ltr;
            }
          })
          .join("");
      }

    //decode//

    function decodeCesar(input) {
        return input
            .split("")
          .map((ltr) => {
            var charCode = ltr.charCodeAt();
            if (charCode >= 65 && charCode <= 90) {
              if (charCode - 65 - KEY < 0) {
                return String.fromCharCode(((charCode - 65 - KEY + 26) % 26) + 65);
              } else {
                return String.fromCharCode(((charCode - 65 - KEY) % 26) + 65);
              }
            } else if (charCode >= 97 && charCode <= 122) {
              if (charCode - 97 - KEY < 0) {
                return String.fromCharCode(((charCode - 97 - KEY + 26) % 26) + 97);
              } else {
                return String.fromCharCode(((charCode - 97 - KEY) % 26) + 97);
              }
            } else {
              return ltr;
            }
          })
          .join("");
    }


//Principal

transformar.addEventListener('click', function (event) {
    event.preventDefault();
    var codeDecode = document.getElementById('code-decode').value;
    var msgvalue = input.value;
    if (codeDecode == 'code' && base64.checked){
        output.value = btoa(msgvalue);
    } else if (codeDecode == 'decode' && base64.checked){
        output.value = atob(msgvalue);
    } else if (codeDecode == 'code' && cifra.checked){
        output.value = codeCesar(msgvalue);
    } else if (codeDecode == 'decode' && cifra.checked){
        output.value = decodeCesar(msgvalue);
    } else {
        console.log('Houve um erro');
    }
}); 

console.log(output);


