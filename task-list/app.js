// define user interface variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners

loadEventListeners();

// load all event listeners

function loadEventListeners(){
    //add task event listener
    form.addEventListener('submit', addTask);
    // remove task event
    taskList.addEventListener('click', removeTask);
    // clear tasks event
    clearBtn.addEventListener('click', clearTasks);
    // search task items
    filter.addEventListener('keyup', filterTasks);
    // DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);
}

// get tasks from local storage

function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
    // create li elememtn
    const li = document.createElement('li');
    //add a class
    li.className = 'collection-item';
    // create text node and append it to the li
    li.appendChild(document.createTextNode(task));
    // create new link element for the li
    const link = document.createElement('a');
    // add link class
    link.className ='delete-item secondary-content';
    // add icon to html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append link to the li
    li.appendChild(link);

    //append li to the ul
    taskList.appendChild(li);
    });
}

// add task funtcion
function addTask(e){
    e.preventDefault();
    if(taskInput.value === ''){
        alert('Please add a task');
    }

    // create li elememtn
    const li = document.createElement('li');
    //add a class
    li.className = 'collection-item';
    // create text node and append it to the li
    li.appendChild(document.createTextNode(taskInput.value));
    // create new link element for the li
    const link = document.createElement('a');
    // add link class
    link.className ='delete-item secondary-content';
    // add icon to html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append link to the li
    li.appendChild(link);

    //append li to the ul
    console.log(li);
    taskList.appendChild(li);

    // set task in local storage
    localStore(taskInput.value);

    //clear input
    taskInput.value = '';

    e.preventDefault();
}

// store task function

function localStore(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// remove task function

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure you want to delete this item?')){
            e.target.parentElement.parentElement.remove();

            // remove from local storage
            removeLs(e.target.parentElement.parentElement);
        }
    }
}

// remove from local storage

function removeLs(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// clear tasks
function clearTasks(e){
    if(confirm('Clear tasks?')){
        taskList.innerHTML = '';
    }

    // clear from local storage
    clearTasksFromLs();
}

// clear from ls
function clearTasksFromLs(){
    localStorage.clear();
}

// filter tasks
function filterTasks(e){
    const text = e.target.value;
    
    document.querySelectorAll('.collection-item').forEach(function(task){
        if(task.firstChild.textContent.indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })
}