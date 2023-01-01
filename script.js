let CarProd = [];

let Banane = {
    nome: "Banana",
    prezzo: 200,
}

let Mele = {
    nome: "Mele",
    prezzo: 100,
}

function aggProd(prodotti) {
    CarProd.push(prodotti);
    document.getElementById("numeroProdotti").innerHTML = CarProd.length;
    mostraTotale();
}

function mostraTotale() {
    let TotaleConto = document.getElementById("totaleConto");
    TotaleConto.innerHTML="Totale €";

}

function Somma(){
    let somma = 0;
    for (let i = 0; i < CarProd.length; i++) {
        
        somma += CarProd[i].prezzo;
    }
    return somma;
}
