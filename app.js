console.log('We are connected!');

const addTaskBtn = document.getElementById('addTaskBtn');
const popWindow = document.querySelector('.popWindow');
const blackBackground = document.querySelector('.blackBackground');
const popWindowAddBtn = document.getElementById('addBtn');
const popWindowCancelBtn = document.getElementById('cancelBtn');

const removeClass = () =>{
    popWindow.classList.remove('active');
    blackBackground.classList.remove('active');
};

addTaskBtn.addEventListener('click', () =>{
    console.log('You have clicked on addTaskBtn!');
    popWindow.classList.add('active');
    blackBackground.classList.add('active');
});

blackBackground.addEventListener('click', () =>{
   removeClass(); 
});

popWindowCancelBtn.addEventListener('click', () =>{
    removeClass();
});
