let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('todo');
let inputField = document.getElementById('inputField');






addToDoButton.addEventListener('click', function(){
    var makeAction = document.createElement('p');
    makeAction.classList.add('out-put-style');
    makeAction.innerText = inputField.value;
    toDoContainer.appendChild(makeAction);
    inputField.value = "";
    makeAction.addEventListener('click', function(){
        makeAction.style.textDecoration = "line-through";
        makeAction.style.color = "green";
    })

    makeAction.addEventListener('dblclick', function(){
        toDoContainer.removeChild(makeAction);
    })


})