const wrapper = document.querySelector('.wrapper');
const addTaskBtn = document.getElementById('addTaskBtn');
const blackBackground = document.querySelector('.blackBackground');
const taskList = document.querySelector('.taskList');
const popWindow = document.querySelector('.popWindow');
const popWindowAddBtn = document.getElementById('addBtn');
const popWindowCancelBtn = document.getElementById('cancelBtn');
const popWindowInput = document.querySelector('input');
const userInput = document.querySelector('input');
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/* DATE HOLDER START*/
let dateHolder = document.querySelector('.date');
let date = new Date();
let datum = date.getDate();
let arrayOfTasks = [];
dateHolder.innerHTML = `${getOrdinalNum(datum)} / ${months[date.getMonth()]} / ${date.getFullYear()}`;
function getOrdinalNum(n) {
    return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
}
/* DATE HOLDER END */


const removeClass = () =>{
    popWindow.classList.remove('active');
    blackBackground.classList.remove('active');
    wrapper.classList.remove('hidden');
    userInput.classList.remove('error');
    userInput.placeholder = 'Enter your task here';
};

const addClass = () =>{
    popWindow.classList.add('active');
    blackBackground.classList.add('active');
    wrapper.classList.add('hidden');
   
};
const clearTaskInput = () => {
    userInput.value = '';
  };
const renderTask = () => {
    const userValue = userInput.value;
    const newTask = document.createElement('div');
    const checkBox = document.createElement('div');
    const textHolder = document.createElement('p');
    const removeBtn = document.createElement('div');
    
    newTask.className = 'task';
    checkBox.className = 'checkbox';
    removeBtn.className = 'rmvBtn';
    removeBtn.innerHTML = '<div class="rmvBtn"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  width="25" height="25" viewBox="0 0 172 172" style=" fill:#000000;"> <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#000000"><path d="M49.5575,44.72l-4.8375,4.8375l36.55,36.4425l-36.55,36.4425l4.8375,4.8375l36.6575,-36.4425l36.55,36.4425l4.8375,-4.8375l-36.55,-36.4425l36.55,-36.4425l-4.8375,-4.8375l-36.55,36.4425z"></path></g></g></svg>'
    checkBox.innerHTML = '<svg viewBox="0 0 20 20"><polyline class="st0" points="3.5,10.3 8,14.2 17.7,3 "/></svg>';
    newTask.append(checkBox);
    newTask.append(textHolder);
    newTask.append(removeBtn);
    taskList.append(newTask);
    textHolder.innerText = userValue;
    
    removeBtn.addEventListener('click', () =>{
        newTask.classList.add('deleted');
        newTask.classList.remove('completed');
        removeLocalTodos(userValue);
        newTask.addEventListener('animationend', () =>{
            newTask.remove();
        });
    });
    checkBox.addEventListener('click', () =>{
        textHolder.classList.toggle('completed');
        checkBox.classList.toggle('completed');
        newTask.classList.toggle('completed');
    });
}
const addTaskHandler = () => {
    let userValue = userInput.value;
        if(userValue.trim() === '' ){
            userInput.classList.add('error');
            setTimeout(() => { userInput.classList.remove('error') }, 600);
            return;
        }
        else{
            arrayOfTasks.push(userValue);
            saveLocalTodos(userValue);
        }
        renderTask();
        removeClass();
        clearTaskInput();
}

/* LOCAL STORAGE START*/
const saveLocalTodos = todo => {
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
};
const removeLocalTodos = todo => {
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    let toDoIndex = todos.indexOf(todo);
    console.log(toDoIndex);
    todos.splice(toDoIndex, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}
const getTodos = () => {
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){
        const userValue = todo;
        const newTask = document.createElement('div');
        const checkBox = document.createElement('div');
        const textHolder = document.createElement('p');
        const removeBtn = document.createElement('div');
        
        newTask.className = 'task';
        checkBox.className = 'checkbox';
        removeBtn.className = 'rmvBtn';
        removeBtn.innerHTML = '<div class="rmvBtn"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  width="25" height="25" viewBox="0 0 172 172" style=" fill:#000000;"> <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#000000"><path d="M49.5575,44.72l-4.8375,4.8375l36.55,36.4425l-36.55,36.4425l4.8375,4.8375l36.6575,-36.4425l36.55,36.4425l4.8375,-4.8375l-36.55,-36.4425l36.55,-36.4425l-4.8375,-4.8375l-36.55,36.4425z"></path></g></g></svg>'
        checkBox.innerHTML = '<svg viewBox="0 0 20 20"><polyline class="st0" points="3.5,10.3 8,14.2 17.7,3 "/></svg>';
        newTask.append(checkBox);
        newTask.append(textHolder);
        newTask.append(removeBtn);
        taskList.append(newTask);
        textHolder.innerText = userValue;
        
        removeBtn.addEventListener('click', () =>{
            newTask.classList.add('deleted');
            newTask.classList.remove('completed');
            
            newTask.addEventListener('animationend', () =>{
                newTask.remove();
            });
        });
        checkBox.addEventListener('click', () =>{
            textHolder.classList.toggle('completed');
            checkBox.classList.toggle('completed');
            newTask.classList.toggle('completed');
        });
    });
}
/* LOCAL STORAGE END*/

  document.addEventListener('DOMContentLoaded', getTodos);  
  addTaskBtn.addEventListener('click', addClass);
  blackBackground.addEventListener('click', removeClass);
  popWindowCancelBtn.addEventListener('click', removeClass);
  popWindowAddBtn.addEventListener('click', addTaskHandler);
  
