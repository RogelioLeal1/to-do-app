function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the input text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // create delete button
    let deleteButton = document.createElement('button');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // set the button text
    deleteButton.textContent = "Delete";

    // newLi style
 newLi.classList.add("demo-card-wide", "mdl-shadow--2dp");

    // newLi style *
   newLi.classList.add("mdl-list__item-primary-content");

    // deleteButton styles
   deleteButton.classList.add("mdl-button", "mdl-js-button", "mdl-button--raised", "mdl-js-ripple-effect")

    // attach the checkbox to the li
    newLi.prepend(checkbox);

    // attach the button to the li
    newLi.appendChild(deleteButton);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value = '';



    // delete
    deleteButton.onclick = function () {
      toDoList.removeChild(newLi);
    }

  });
}

window.onload = function() {
  onReady();
};


window.onload = function() {
onReady();
};
