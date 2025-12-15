let mas =document.getElementById("Boton1");
let menos =document.getElementById("Boton2");
let por =document.getElementById("Boton3");
let divison =document.getElementById("Boton4");
let porcentaje =document.getElementById("Boton5");
const span=document.getElementById("span");
const fragment=document.createDocumentFragment();
const texto=document.createElement('span');

/**suma */
const suma = (S1,S2) => {
    let resultado=parseFloat(S1)+parseFloat(S2);
    texto.textContent=resultado;
    fragment.appendChild(texto);
    span.appendChild(fragment);
    span.replaceChild(texto,texto);
}
mas.addEventListener('click',()=>{
    let First= document.getElementById('texto1').value;
    let Second= document.getElementById('texto2').value;
    suma(First,Second);
    

});
/**Resta */
const resta = (S1,S2) => {
    let resultado=parseFloat(S1)-parseFloat(S2);
    texto.textContent=resultado;
    fragment.appendChild(texto);
    span.appendChild(fragment);
    span.replaceChild(texto,texto);
}
menos.addEventListener('click',()=>{
    let First= document.getElementById('texto1').value;
    let Second= document.getElementById('texto2').value;
    
    resta(First,Second);
});
const multiplicacion = (S1,S2) => {
    let resultado=parseFloat(S1)*parseFloat(S2);
    texto.textContent=resultado.toFixed(2);
    fragment.appendChild(texto);
    span.appendChild(fragment);
    span.replaceChild(texto,texto);
}
por.addEventListener('click',()=>{
    let First= document.getElementById('texto1').value;
    let Second= document.getElementById('texto2').value;
    
    multiplicacion(First,Second);
});
const dividir = (S1,S2) => {
    let resultado=parseFloat(S1)/parseFloat(S2);
    let codecimal=resultado.toFixed(2);
    texto.textContent=codecimal;
    fragment.appendChild(texto);
    span.appendChild(fragment);
    span.replaceChild(texto,texto);
}
divison.addEventListener('click',()=>{
    let First= document.getElementById('texto1').value;
    let Second= document.getElementById('texto2').value;
    
    dividir(First,Second);
});
const porcentar = (S1,S2) => {
    let resultado=parseFloat(S1)*(parseFloat(S2)/100);
    texto.textContent=resultado;
    fragment.appendChild(texto);
    span.appendChild(fragment);
    span.replaceChild(texto,texto);
}
porcentaje.addEventListener('click',()=>{
let First= document.getElementById('texto1').value;
let Second= document.getElementById('texto2').value;
    
    porcentar(First,Second);
});
