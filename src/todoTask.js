 import {clearDiv} from './gameLogic';
 import { loadDaily, loadWeekly, loadMonthly, loadMain } from './loadPage';
 import './loadPage'; 

 export const loadTask = (t) => {

    const taskArray = [];
    

    const task = document.createElement('div');
    document.getElementById('mainSection').appendChild(task);

        const taskDiv = document.createElement('div');
        taskDiv.textContent = 'To-Do';
        task.appendChild(taskDiv);

        const taskName = document.createElement('input');
        taskName.type = 'text';
        taskName.setAttribute('placeholder', 'task name');
        taskName.setAttribute('maxLength', '25');
        taskName.className = 'taskInput';
        task.appendChild(taskName);

        const taskDescription = document.createElement('textarea');
        taskDescription.setAttribute('placeholder', 'task details');
        taskDescription.setAttribute('maxLength', '100');
        taskDescription.className = 'taskInputDescription';
        task.appendChild(taskDescription);

        const taskDueDate = document.createElement('input');
        taskDueDate.setAttribute('type', 'date');
        taskDueDate.className = 'taskInput';
        task.appendChild(taskDueDate);

        const taskPriority = document.createElement('input');
        taskPriority.type = 'text';
        taskPriority.setAttribute('placeholder', 'how urgent is it?');
        taskPriority.setAttribute('maxLength', '15');
        taskPriority.className = 'taskInput';
        task.appendChild(taskPriority);

        const clearButton = document.createElement('button');
        clearButton.innerText = 'finished?';
        clearButton.className = 'taskInput';
        task.appendChild(clearButton);
        clearButton.addEventListener('click', ()=> {
            clearDiv(task);
        });


        taskArray.push(task);
        if(t==='daily') {
            taskArray.forEach( (task) => task.className = 'dailyTask');
        } else if (t === 'weekly') {
             taskArray.forEach( (task) => task.className = 'weeklyTask');
        } else if (t==='monthly') {
            taskArray.forEach((task) => task.className = 'monthlyTask');
        } else {
            taskArray.forEach((task) => task.className = 'allTask');
        };

        //taskArray.push(task);

        //return task;
        

        //taskArray.push(task) is how I understand putting the todo div into the array
}