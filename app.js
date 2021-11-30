const URL = "https://dog.ceo/api/breeds/image/random";

const selectAmount = document.getElementById('amound-dogs');
const mainContainer = document.getElementById('main-container');
const templateCards = document.getElementById('card-template').content;
const button1 = document.getElementById('button-1');
const button3 = document.getElementById('button-3');
const button9 = document.getElementById('button-9');
const button12 = document.getElementById('button-12');
const input = document.getElementById('input-amount');

const fragment = document.createDocumentFragment();

button1.addEventListener('click', (e) =>{
    fetchApi()
    mainContainer.innerHTML="";
});
button3.addEventListener('click', (e) =>{
    for (let i = 0; i <= 2; i++) {
        fetchApi();
        mainContainer.innerHTML="";
    }
});
button9.addEventListener('click', (e) =>{
    for (let i = 0; i <= 8; i++) {
        fetchApi();
        mainContainer.innerHTML="";
    }
});
button12.addEventListener('click', (e) =>{
    for (let i = 0; i <= 11; i++) {
        fetchApi();
        mainContainer.innerHTML="";
    }
});

input.addEventListener("keydown",  (e) =>{
    if (e.keyCode === 13) { 
        generateDogs();
    }
});


function fetchApi(){
    fetch(URL)
    .then(res => res.json())
    .then(data =>{
        bringDog(data);
    })
}


function bringDog(data){
    let clone_template = document.importNode(templateCards,true);
    clone_template.querySelector('#dog-img').setAttribute('src', data.message);

    fragment.appendChild(clone_template);
    mainContainer.appendChild(fragment);
}

function generateDogs(){
    const dogs = input.value;
    for (let index = 0; index < dogs; index++) {
        fetchApi();
        mainContainer.innerHTML="";
    }
}

