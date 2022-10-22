
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


/*
    transformar.addEventListener('click', function (event) {
        event.preventDefault();
        var codeDecode = document.getElementById('code-decode').value;
        if (codeDecode == 'encript'){
            var msgvalue = input.value;
            output.value = btoa(msgvalue);
        } else if (codeDecode == 'decript'){
            var msgvalue = input.value;
            output.value = atob(msgvalue);
        } else {
            console.log('Houve um erro');
        }
    }); */

transformar.addEventListener('click', function (event) {
    event.preventDefault();
    var msgvalue = input.value
    output.value = btoa(msgvalue);
})



console.log(output);


