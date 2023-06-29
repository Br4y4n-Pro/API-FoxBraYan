let principal = document.querySelector(".principal")
let lista = document.querySelector(".lista")
let url = "https://randomfox.ca/floof/"
let mensaje =document.querySelector(".mensaje")
let link;
let imagen;

mensaje.innerHTML="LA LISTA ESTA VACIA"

function llamarApi(){
  fetch(url)
    .then(response => response.json())
    .then(data => proceso(data))
  }

   function proceso(data){
     link = data.link  
     imagen = data.image

     const div = document.createElement("div")
     div.classList.add("contenedor_img")
     div.innerHTML=`
     <div class ="contenedor_imagen">
     <img src="${imagen}" alt="imagen-zorro">
     </div>
     <p><a href="${link}">${link}</a></p>`

      principal.appendChild(div)
   }

   function valores(){
    const figura = imagen.split("/")
    let listImagen= figura[figura.length -1].split(".")
    let numImg= listImagen[listImagen.length -2]

    return numImg
   }

  function generar(){
    principal.innerHTML=""
    mensaje.innerHTML=""
    // const figura = imagen.split("/")
    // let listImagen= figura[figura.length -1].split(".")
    // let numImg= listImagen[listImagen.length -2]
    let id = valores();
    
// console.log(id)

    const item = document.createElement("div")
   item.classList.add("lista-zone")
   item.innerHTML=`
    <div class="contenido_lista">
      <div class ="contenedor_imagen">
        <img src="${imagen}" alt="imagen-zorro">
      </div>
      <p>
        <a href="${link}">${link}</a>
      </p>
    </div>
    <div class ="btn-contenido">
      <button onclick="abrirModal(${id})" class="btn-modal">Abrir Modal</button>
    </div>

    `
   lista.appendChild(item)

    llamarApi()

    // item.addEventListener("click", abrirModal())

  }

  let modal = document.querySelector(".modal-fondo")

  function abrirModal(id){
      modal.style.display="flex"

      const contenidoModal = document.createElement("div")
      contenidoModal.classList.add("contenido_modal")
      contenidoModal.innerHTML=`
      <img src="https://randomfox.ca/images/${id}.jpg" alt="">
      <p><a href="https://randomfox.ca/?i=${id}">https://randomfox.ca/?i=${id}</a></p>
      <button class="btn-cerrar" onclick="cerrar()">X</button>
      `
      modal.appendChild(contenidoModal)
  }


   llamarApi()

   function cerrar(){
      modal.style.display="none"
      modal.innerHTML=""
   }
