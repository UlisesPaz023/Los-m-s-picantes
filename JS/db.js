let user = [
  {
    id:1,
    name:'Nicolás',
    apellido:'Chaves',
    email:'nicochaves@gmail.com',
    contraseña: 'nico123',
    admin: true
  },
  {
    id:2,
    name:'Ulises',
    apellido:'Paz',
    email:'ulisespaz@gmail.com',
    contraseña: 'uli123',
    admin: true
  },
  {
    id:3,
    name:'Santiago',
    apellido:'Marat',
    email:'santimarat@gmail.com',
    contraseña: 'santi123',
    admin: true
  },
  {
    id:4,
    name:'Julián',
    apellido:'Llanca',
    email:'julianllanca@gmail.com',
    contraseña: 'juli123',
    admin: true
  },
  {
    id:5,
    name:'Ignacio',
    apellido:'Medina',
    email:'ingaciomedina@gmail.com',
    contraseña: 'nacho123',
    admin: true
  },
  {
    id:6,
    name:'Javier',
    apellido:'Mamaní',
    email:'javiermamani@gmail.com',
    contraseña: 'javi123',
    admin: true
  }
]

if(!localStorage.getItem('users')){
  const userJson = JSON.stringify(user);
  localStorage.setItem('users', userJson);
}

let games = [
  {
    id : 0,
    category: 'ESTRATEGIA',
    name: 'Desesperados III',
    description: 'Money for the vultures',
    price: 2.45,
    img:'./img/card1.jpg',
    published: '12/12/12',
    outstanding: false 
  },
  {
    id : 1,
    category: 'ESTRATEGIA',
    name: 'Thronebreaker',
    description: 'The witcher tales',
    price: 2.45,
    img:'./img/card2.jpg',
    published: '12/12/12',
    outstanding: false 
  },
  {
    id : 2,
    category: 'ESTRATEGIA',
    name: 'Civilization',
    description: 'New Frontier Pass',
    price: 2.45,
    img:'./img/card3.jpg',
    published: '12/12/12',
    outstanding: false 
  },
  {
    id : 3,
    category: 'ESTRATEGIA',
    name: 'Hitman III',
    description: 'Hitman III',
    price: 2.45,
    img:'./img/card4.jpg',
    published: '12/12/12',
    outstanding: false 
  },
  {
    id : 4,
    category: 'LUCHA',
    name: 'Street Fighter V',
    description: 'Arcade Edition',
    price: 2.45,
    img:'./img/card5.jpg',
    published: '12/12/12',
    outstanding: false 
  },
  {
    id : 5,
    category: 'LUCHA',
    name: 'Mortal Kombat XI',
    description: 'Ultimate',
    price: 2.45,
    img:'./img/card6.jpg',
    published: '12/12/12',
    outstanding: false 
  },
  {
    id : 6,
    category: 'LUCHA',
    name: 'The King Of Fighters XV',
    description: 'Ultimate',
    price: 2.45,
    img:'./img/card7.jpg',
    published: '12/12/12',
    outstanding: false 
  },
  {
    id : 7,
    category: 'LUCHA',
    name: 'Tekken 7',
    description: 'Tekken 7',
    price: 2.45,
    img:'./img/card8.jpg',
    published: '12/12/12',
    outstanding: false 
  },
  {
    id : 8,
    category: 'CARRERA',
    name: 'Need For Speed: Payb...',
    description: 'Deluxe Edition',
    price: 2.45,
    img:'./img/card9.webp',
    published: '12/12/12',
    outstanding: false 
  },
  {
    id : 9,
    category: 'CARRERA',
    name: 'Wreckfest',
    description: 'Complete Edition',
    price: 2.45,
    img:'./img/card10.webp',
    published: '12/12/12',
    outstanding: false 
  },
  {
    id : 10,
    category: 'CARRERA',
    name: 'Need For Speed: Heat',
    description: 'Deluxe Edition',
    price: 2.45,
    img:'./img/card11.jpg',
    published: '12/12/12',
    outstanding: false 
  },
  {
    id : 11,
    category: 'CARRERA',
    name: 'Forza Horizon 4',
    description: 'Deluxe Edition',
    price: 2.45,
    img:'./img/card12.jpg',
    published: '12/12/12',
    outstanding: false 
  },
  {
    id : 12,
    category: 'ACCIÓN',
    name: 'Gears Of War IV',
    description: 'Gears Of War IV',
    description1: 'Comienza una nueva saga para una de las franquicias de videojuegos más aclamadas de la historia. Tras escapar por muy poco de un ataque a su pueblo, JD Fenix y sus amigos, Kait y Del, deben rescatar a sus seres queridos y descubrir el origen de su monstruoso enemigo.',
    price: 2.45,
    img:'./img/card13.webp',
    published: '12/12/12',
    outstanding: true 
  },
  {
    id : 13,
    category: 'ACCIÓN',
    name: 'Elden Ring',
    description: 'Elden Ring',
    price: 2.45,
    img:'./img/card14.webp',
    published: '12/12/12',
    outstanding: false 
  },
  {
    id : 14,
    category: 'ACCIÓN',
    name: 'God Of War',
    description: 'Digital Deluxe Edition',
    price: 2.45,
    img:'./img/card15.webp',
    published: '12/12/12',
    outstanding: false 
  },
  {
    id : 15,
    category: 'ACCIÓN',
    name: 'Horizon II',
    description: 'Forbidden West',
    price: 2.45,
    img:'./img/card16.webp',
    published: '12/12/12',
    outstanding: false 
  }
  ]