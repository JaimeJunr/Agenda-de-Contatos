const form = document.getElementById('frm')
const nomes = []
const numeros = []



let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();


    addNumber();
    atualiTable();
})


function addNumber(){
    const name = document.getElementById('nm-inp');
    const number = document.getElementById('tl-inp');
    
    if (numeros.includes(number.value)){
        alert('O numero: ' + number.value + ' já está na agenda')
    }else {

    nomes.push(name.value);
    numeros.push(number.value);
    
    let linha = '<tr>';
    linha += '<td>' + name.value + '</td>';
    linha += '<td>' + number.value + '</td>';
    linha += '<tr>'

    linhas += linha;


    name.value = '';
    number.value = '';
}}

function atualiTable(){
    const bodyTable = document.querySelector('tbody');
    bodyTable.innerHTML = linhas;
}