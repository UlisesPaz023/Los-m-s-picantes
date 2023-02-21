import myJson from '../db.json' assert {type: 'json'};

myJson.games.map((x)=>{
  tableSection.innerHTML += `<tr class="editBody">
  <th scope="row">${x.id}</th>
  <td>${x.name}</td>
  <td>${x.category}</td>
  <td>${x.description}</td>
  <td>${x.published}</td>
  <td>
    <button class="border m-1 p-1 text-decoration-none deleteButton">
      <i class="bi bi-trash"></i>
    </button>
    <button class="border m-1 p-1 text-decoration-none editModalButton" data-bs-toggle="modal" data-bs-target="#editModalButton">
      <i class="bi bi-pencil-square"></i>
    </button>
    <div class="border m-1 p-1 text-decoration-none starButton">
      <i class="starIcon bi bi-star"></i>
      <input class="star" type="radio" name="stars" id="radio${x.id}">
    </div>
  </td>
  </tr>`
});

let star = document.querySelectorAll('.star')
star.forEach((eachStar,i)=>{
  star[i].addEventListener('click', ()=>{
    let radioID = document.getElementById(`radio${i}`)
    if(radioID.checked){
      fetch(`http://localhost:3000/games/${i}`,{
        method: 'PATCH',
        body: JSON.stringify({
          outstanding: true
        }),
        headers: {
          'Content-type':'application/json; charset=UTF-8',
        }
      })
      .then(resp => resp.json())
      .then(resp => console.log(resp))
      .catch((error) => console.log(error))
      console.log(myJson.games[i].outstanding)
    } else {
      fetch(`http://localhost:3000/games/${i}`,{
        method: 'PATCH',
        body: JSON.stringify({
          outstanding: false
        }),
        headers: {
          'Content-type':'application/json; charset=UTF-8',
        }
      })
    }
  })
})

const deleteButton = document.querySelectorAll('.deleteButton')

deleteButton.forEach((eachDeleteBtn, i) => {
  deleteButton[i].addEventListener('click',()=>{
    let confirm = window.confirm('¿Seguro que deseas borrar el juego?.')

    if(confirm) {      
      fetch(`http://localhost:3000/games/${i}`,{
        method: 'DELETE'
      })
      .then(resp => resp.json())
      .then(resp => console.log(resp))
      .catch((error) => console.log(error))
    }
  })
})


const newGameModalButton = document.getElementById('newGameModalButton')
const gameAddButton = document.getElementById('gameAddButton')

newGameModalButton.addEventListener('hidden.bs.modal', ()=>{
  location.reload()
})

newGameModalButton.addEventListener('shown.bs.modal', ()=>{
  console.log('Hola')
  gameAddButton.addEventListener('click',()=>{
    let game = {
      category: (document.formGame.category.value).toUpperCase(),
      name: document.formGame.name.value,
      description: document.formGame.description.value,
    }
    let nullFlag;

    Object.keys(game).forEach(function(key) {
      if(game[key]==='' || game[key]==null){
        nullFlag = true;
      }
    })
    
    const categoryValidation = myJson.games.filter((x)=>{ 
      return x.category==game.category;
    })
    
    if(nullFlag){
      alert('Debes completar todos los campos.')
    }else if(categoryValidation.length>3){
      alert('No se puede agregar más de cuatro juegos de la misma categoría.')
    }else{
      fetch("http://localhost:3000/games",{
        method : 'POST',
        body: JSON.stringify({
          category: game.category,
          name: game.name,
          description: game.description,
          price: 2.45,
          img: '#',
          published: "12/12/12",
          outstanding: false
        }),
        headers: {
          'Content-type':'application/json; charset=UTF-8',
        }
      })
      .then((resp) => resp.json())
      .then((resp) => console.log(resp))
      .catch((error) => console.log(error))
    }
  })
})