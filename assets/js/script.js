const userInput = document.getElementById('addItemInput');
const sendBtn = document.getElementById('add-btn');
const list = document.getElementById('list');

function listeners(){
  sendBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if(validarInput()){
    const valorFormatado = userValueFixed();
    criarItem(valorFormatado.trim());
    userInput.value = '';
  };
})

list.addEventListener('click', (e) => {
    const deleteButton = e.target.closest('img');

    if (deleteButton){
      const item = deleteButton.closest('li');
      item.remove();
    }

  })

}

function validarInput(){
  if (userInput.value.trim() === ''){
        return false;
  } else{
    return true;
  }
}
function criarItem(valorFormatado){
  const inputValue = valorFormatado;
  const item = document.createElement('li');
  const img = document.createElement('img');
  img.src = '../assets/icons/icondelete.svg';
  item.textContent = inputValue;
  item.appendChild(img);
  list.appendChild(item);
  
  return
}


function userValueFixed(){
  let userValue = userInput.value.charAt(0).toUpperCase() + userInput.value.slice(1, userInput.value.length);

  return userValue;
}


listeners();