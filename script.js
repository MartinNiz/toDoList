let input = document.querySelector('.input');
let btnPrincipal = document.querySelector('.boton-agregar');
let container = document.querySelector('.container');


class Item {
  constructor(nuevaTarea){
    this.crearDiv(nuevaTarea)
  }

  crearDiv(Tarea){
    let inputItem = document.createElement('input', 'text');
    inputItem.disabled = true
    inputItem.classList.add('item-input')
    inputItem.value = Tarea

    let newDiv = document.createElement('div');
    newDiv.classList.add('item')

    let btnEditar = document.createElement('button');
    btnEditar.innerHTML = '<i class="fa fa-lock"></i>'
    btnEditar.classList.add('boton-editar')

    let btnRemover = document.createElement('button');
    btnRemover.innerHTML = '<i class="fa fa-trash"></i>'
    btnRemover.classList.add('boton-remover')

    newDiv.appendChild(inputItem)
    newDiv.appendChild(btnEditar)
    newDiv.appendChild(btnRemover)

    container.appendChild(newDiv)

    btnEditar.addEventListener('click', function(){
      (inputItem.disabled == true) ? inputItem.disabled = false : inputItem.disabled =  true ;
      (inputItem.disabled == true) ? btnEditar.innerHTML = '<i class="fas fa-lock"></i>' : btnEditar.innerHTML = '<i class="fas fa-lock-open"></i>'
    })

    btnRemover.addEventListener('click', function(){
      inputItem.remove()
      btnRemover.remove()
      btnEditar.remove( )
    })
  }
}

function chequearInput () {
  if (input.value == '') {
    alert('input vacio')
  } else {
    new Item(input.value)
    input.value = ''
  }
}

btnPrincipal.addEventListener('click', chequearInput)




