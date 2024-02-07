import {clearDiv} from './gameLogic';
import { loadDaily, loadWeekly, loadMonthly, loadMain } from './loadPage';
import './loadPage'; 


export const getTasks = () => {
    
    let tasksRetreive = localStorage.getItem('tasks');
    let parsedTasks = JSON.parse(tasksRetreive);
        console.log(parsedTasks[0]);
    
    //return JSON.parse(parsed);
}

export const tasks = [];


export const loadTask = ( ) => {
    const taskContainer = document.createElement('div');
    document.getElementById('mainSection').appendChild(taskContainer);
    
    const taskDiv = document.createElement('div');
    taskDiv.textContent = 'To-Do';
    taskContainer.appendChild(taskDiv);
    
    const taskName = document.createElement('input');
    taskName.setAttribute('placeholder', 'task name');
    taskName.setAttribute('maxLength', '25');
    taskName.className = 'taskInput';
    
    const taskDescription = document.createElement('textarea');
    taskDescription.setAttribute('placeholder', 'task details');
    taskDescription.setAttribute('maxLength', '100');
    taskDescription.className = 'taskInputDescription';
    
    const taskDueDate = document.createElement('input');
    taskDueDate.setAttribute('type', 'date');
    taskDueDate.className = 'taskInput';
    
    const taskPriority = document.createElement('input');
    taskPriority.setAttribute('placeholder', 'how urgent is it?');
    taskPriority.setAttribute('maxLength', '15');
    taskPriority.className = 'taskInput';
    
    const createButton = document.createElement('button');
    createButton.innerText = 'create';
    createButton.className = 'taskButton';
    createButton.addEventListener('click', () => {
        onsubmit(tasks);
    })
    
    const clearButton = document.createElement('button');
    clearButton.innerText = 'finished?';
    clearButton.className = 'taskButton';
    clearButton.addEventListener('click', ()=> {
        clearDiv(taskContainer);
    });
    
    taskContainer.append(taskName, taskDescription, taskDueDate, taskPriority, createButton, clearButton);
    
    
    tasks.push(taskContainer);
    //console.log(tasks);
}

const onsubmit = (tasks) => {
    let taskString = JSON.stringify(tasks);
    localStorage.setItem('tasks', taskString);
    
}




export const loadClass = (t) => {
    const lastElement = tasks[tasks.length-1];
    if(t==='daily') {
        lastElement.className = 'dailyTask';
    } else if (t === 'weekly') {
        lastElement.className = 'weeklyTask';
    } else if (t==='monthly') {
        lastElement.className = 'monthlyTask';
    } else {
        lastElement.className = 'allTask';
    }
}