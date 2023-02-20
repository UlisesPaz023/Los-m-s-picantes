let cardDinamic = document.getElementById('cardDinamic')

import myJson from '../db.json' assert {type: 'json'};

const categorySort = ( x, y ) => {
  if ( x.category < y.category ){
    return -1;
  }
  if ( x.category > y.category ){
    return 1;
  }
  return 0;
}
myJson.games.sort(categorySort);

myJson.games.map((x)=>{
  if(x.id % 4 === 0){
    cardDinamic.innerHTML += 
    `
    <div class="cardsTitle w-100 text-light text-center fw-bold mt-5">
    <h3 class="cardsTitleText mx-2 my-4 pb-1 border-bottom">${x.category}</h3>
    </div>
    `
  }
  cardDinamic.innerHTML +=
  `
  <a href="#" class="card m-2 card p-0 border-1 rounded-0">
  <figure class="stars position-absolute ps-2">
  <i class="bi bi-star-fill text-warning"></i>
  <i class="bi bi-star-fill text-warning"></i>
  <i class="bi bi-star-fill text-warning"></i>
  <i class="bi bi-star-fill text-warning"></i>
  <i class="bi bi-star text-warning"></i>
  </figure>
  <img src="${x.img}" class="cardImg card-img-top bg-danger rounded-0" alt="img${x.id}">
  <div class="position-absolute bottom-0 w-100 cardbodySize card-body d-flex flex-column justify-content-between p-0 pt-2 px-2 bg-dark text-light">
    <div class="">
      <h4 class="card-title m-0">${x.name}</h4>
      <p class="cardText card-text">${x.description}</p>
    </div>
    <div class="cardFooter d-flex align-items-center justify-content-between">
      <h2>$${x.price}</h2>
      <div class="me-1">
        <i class="bi bi-playstation"></i>
        <i class="bi bi-windows"></i>
      </div>
    </div>
  </div>
  </a>
  `
});

const card = document.querySelectorAll('.card')
const stars = document.querySelectorAll('.stars')
const cardbodySize = document.querySelectorAll('.cardbodySize')
const cardFooter = document.querySelectorAll('.cardFooter')
const cardImg = document.querySelectorAll('.cardImg')

card.forEach((eachCard, i)=>{
  card[i].addEventListener('mouseenter',()=>{
    stars[i].style.transitionDelay = '.3s';
    cardFooter[i].style.transitionDelay = '.3s';
    cardbodySize[i].style.transitionDelay = '0s';
    cardImg[i].style.transitionDelay = '0s';
  })
  
  card[i].addEventListener('mouseleave',()=>{
    stars[i].style.transitionDelay = '0s';
    cardFooter[i].style.transitionDelay = '0s';
    cardbodySize[i].style.transitionDelay = '.3s';
    cardImg[i].style.transitionDelay = '.3s';
  })
})