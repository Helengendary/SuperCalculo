let historico = [];
    
let somado = false;

let valores = document.getElementById("conta");
let print = document.getElementById("printHist");

let parasomar = '';

function arrumarHist() {
    // print.innerHTML = "";
    // print.setAttribute("class", "");
}

function add(num) {
    if (somado) {
        valores.innerHTML = '';
        somado = false;
    }

    arrumarHist();

    parasomar += num;
    valores.innerHTML += num;
}

function showsoma() {
    valores.innerHTML += " = " + eval(parasomar);

    historico.push(parasomar + " = " + eval(parasomar));

    arrumarHist();

    parasomar = "";
    somado = true;
}

function clean() {
    parasomar = 0;
    valores.innerHTML = '';
    
    arrumarHist();

}

function showHist() {
    var table = document.createElement("TABLE");
    table.setAttribute("id", "tabelaHist");

    document.body.appendChild(table);

    for (var i = 0; i < historico.length; i++) {
        var order = historico[i];
        var row = document.createElement("TR");

        var valor = document.createElement("TD");

        row.appendChild(valor);

        var ref = document.createTextNode(order);

        valor.appendChild(ref);

        table.appendChild(row);
        document.body.appendChild(document.createElement('hr'));
    }
}

// function showHist() {
//     console.log(historico);
//     print.setAttribute("cambio");

//     arrumarHist();

//     for (let index = 0; index < historico.length; index++) {
//         console.log(historico[index]);
//         print.innerHTML += historico[index] + `<br>`;
//     }
// }