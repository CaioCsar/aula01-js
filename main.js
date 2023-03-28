

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

btn1.addEventListener("click", function chamarbtn() {
    //window.alert(`Voce clicou no 1º botão`)
    let textolegal = window.prompt("Digite um texto:")
    
    let texto = document.getElementById("texto")
    texto.innerHTML = textolegal
});

btn2.addEventListener("click", function chamarbtn() {
    window.alert(`Voce clicou no 2º botão`)
});

btn3.addEventListener("click", function chamarbtn() {
    window.alert(`Voce clicou no 3º botão`)
});
