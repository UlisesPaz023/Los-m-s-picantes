const validacionFcontacto = () => {
  const $form=document.querySelector (".contact-form"),
  $inputs = document.querySelectorAll("[required]");
  
  
  $inputs.forEach((input)=>{
   const $span = document.createElement("span");
   $span.id=input.name;
   $span.textContent=input.title;
   $span.classList.add("contact-form-error","none")
   input.insertAdjacentElement("afterend",$span);
  
  }
  );
  
   document.addEventListener("keyup",(e)=>{
    if (e.target.matches("[required]")) {
     let $input= e.target,
     pattern = $input.pattern||$input.dataset.pattern;
     if (pattern&&$input.value!=="") {
      
      let regex =new RegExp(pattern);
      return !regex.exec($input.value)
      ?document.getElementById($input.name).classList.add("is-active")
      :document.getElementById($input.name).classList.remove("is-active");
     }
     
    }
   });
    document.addEventListener("submit",(e)=>{
      alert("enviando formulario");
      $form.reset();
    });
  
  };
  
  
   
  validacionFcontacto();