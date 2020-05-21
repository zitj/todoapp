console.log('We are connected!');

const addTaskBtn = document.getElementById('addTaskBtn');
const blackBackground = document.querySelector('.blackBackground');
const taskList = document.querySelector('.taskList');

const popWindow = document.querySelector('.popWindow');
const popWindowAddBtn = document.getElementById('addBtn');
const popWindowCancelBtn = document.getElementById('cancelBtn');
const popWindowInput = document.querySelector('input');
const userInput = document.querySelector('input');


let arrayOfTasks = [];
let counter = parseInt(0);



const removeClass = () =>{
    popWindow.classList.remove('active');
    blackBackground.classList.remove('active');
};

const addClass = () =>{
    popWindow.classList.add('active');
    blackBackground.classList.add('active');
};

const clearTaskInput = () => {
    userInput.value = '';
  };

const renderTask = () => {
    const userValue = userInput.value;
    const newTask = document.createElement('div');
    
    newTask.className = 'task';
        newTask.innerHTML = `
        <div class="checkbox"></div>
        <p>${arrayOfTasks[counter]}</p>
        <div class="rmvBtn"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  width="25" height="25" viewBox="0 0 172 172" style=" fill:#000000;">
        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#000000"><path d="M49.5575,44.72l-4.8375,4.8375l36.55,36.4425l-36.55,36.4425l4.8375,4.8375l36.6575,-36.4425l36.55,36.4425l4.8375,-4.8375l-36.55,-36.4425l36.55,-36.4425l-4.8375,-4.8375l-36.55,36.4425z"></path></g></g></svg></div>
        `
        taskList.append(newTask);
        
    }

const addTaskHandler = () => {
        let userValue = userInput.value;
        if(userValue.trim() === ''){
            alert('Please enter valid task.');
            return;
        }
        else{
            arrayOfTasks.push(userValue);
        }
        renderTask();
        removeClass();
        clearTaskInput();
        counter++;
        console.log(arrayOfTasks);
}

  addTaskBtn.addEventListener('click', addClass);
  blackBackground.addEventListener('click', removeClass);
  popWindowCancelBtn.addEventListener('click', removeClass);
  popWindowAddBtn.addEventListener('click', addTaskHandler);