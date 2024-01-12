import './todoTask';





import {loadTask} from './todoTask';

const header = document.getElementById('header');
const mainSection = document.getElementById('mainSection');
const sidebar = document.getElementById('sidebar')

const todoButton = document.createElement('button');
todoButton.innerText = 'new To-do';
sidebar.appendChild(todoButton);
todoButton.addEventListener('click', () => {
    //clearDisplay()
    loadTask();
})





// function clearDisplay() {
//     while(task.firstChild) {
//         task.removeChild(task.firstChild);
//     }
// }