const usuario = JSON.parse(localStorage.getItem('users'));
const btnInicio = document.getElementById("btnI");
const btnCerrar = document.getElementById("btnC");
const btnRegistro = document.getElementById("btnR");
const btnAdmin = document.getElementById("btnA");

if (localStorage.getItem('users')){
  btnCerrar.hidden=true;
}

if (localStorage.getItem('userlog')){
  btnInicio.hidden=true;
  btnRegistro.hidden=true;
  btnCerrar.hidden=false;
  let userLog = JSON.parse(localStorage.getItem('userlog'));
  if(userLog.admin==true){
    btnAdmin.hidden=false;
  }else{
    btnAdmin.hidden=true;
  }
}

if(!localStorage.getItem('userlog')){
  btnCerrar.hidden=true;
  btnAdmin.hidden=true;
}

const registro = () =>{
  let usuarios = {
      apellido: document.getElementById('ape').value,
      name: document.getElementById('nom').value,
      email: document.getElementById('correo1').value,
      contraseña: document.getElementById('contra1').value,
      admin:false
  }
  let banderaVacia;
  let banderaEmail;
  const validarEmail = /^(([^<>()\[\] \\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@( (\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}] )|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  const validarContra = /^(?=.*[a-z])(?=.*[A-Z])([A-Za-z\d$@$!%*?&]|[^ ]){8,}$/;
  let confirmarContraseña = document.getElementById('contra2').value;

  Object.keys(usuarios).forEach((clave)=>{
    if(usuarios[clave]===''||usuarios[clave]==null||confirmarContraseña==''||confirmarContraseña==null){
      banderaVacia = true;
    }
  });

  usuario.map((x)=>{
    if(usuarios.email===x.email){
      banderaEmail = true;
    }
  })

  if(banderaVacia){
    alert('Debe completar todos los campos.');
    return;
  }

  if(!validarEmail.test(usuarios.email)){
    alert('El Email no tiene formato correcto.');
    return;
  }

  if(banderaEmail){
    alert('El Email ya está en uso.')
    return;
  }

  if(usuarios.contraseña.length < 8){
    alert('La contraseña debe tener almenos ocho carácteres.')
    return;
  }

  if(!validarContra.test(usuarios.contraseña)){
    alert('La contraseña debe contener mayúsculas, minúsculas y números.');
    return;
  }

  if(confirmarContraseña !== usuarios.contraseña){
    alert('Las contraseñas no coinciden.')
    return;
  }

  user.push(usuarios)
  const userJson = JSON.stringify(user);
  window.localStorage.setItem('users',userJson);

  if (localStorage.getItem('users')){
    alert('Registro exitoso.');
    window.location= '../PAGES/login.html'
  } 
  document.getElementById("correo").focus()    
}

const inicio = () =>{
  const email = document.getElementById('correo').value.toLowerCase();
  const contra = document.getElementById('contra').value;
  const validarEmail = /^(([^<>()\[\] \\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@( (\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}] )|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

  if(!validarEmail.test(email)){
    alert('El Email no tiene formato correcto.');
    return;
  }

  let bandera;
  let usuarioLog;

  usuario.map((user) =>{
    if(email===user.email.toLowerCase() && contra===user.contraseña){
      bandera=true;
      usuarioLog = user;
    }
    })
    
    if(bandera){
      alert('Ha iniciado sesión')
      delete usuarioLog.contraseña;
      localStorage.setItem('userlog',JSON.stringify(usuarioLog));
      window.location = '../index.html';      
    }
    else{
      alert('Usuario ó contraseña incorrecto.');
    }
}

const volverPag = () =>{
  if (localStorage.getItem('userlog')){
    window.location= './index.html'
    
  }else{
    window.location= '../PAGES/login.html'
  }
}

const cerrarSesion = () => {
  localStorage.removeItem('userlog');
  window.location = '../PAGES/login.html'
};

// document.oncontextmenu = function (){
//   return false
// } 