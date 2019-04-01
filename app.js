function onReady() {
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  let id=0;


  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return;}

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id++,
    });
    newToDoText.value = ' ';
    renderTheUI();
  }


function renderTheUI(){
  const toDoList = document.getElementById('toDoList');
toDoList.textContent = '';

  toDos.forEach(function(toDo){
    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    const deleteButton = document.createElement('button')
    deleteButton.textContent = "Delete";

    newLi.textContent = toDo.title;

    toDoList.appendChild(newLi);
    newLi.prepend(checkbox);
    newLi.appendChild(deleteButton);

    deleteButton.addEventListener('click', event =>{
        event.preventDefault();
       toDos = toDos.filter( item => item.id !== toDo.id);
       console.log(toDos);

        renderTheUI();
      });
  });
}

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });
renderTheUI();
}

window.onload = function() {
  onReady();
};
