import { loadClass, loadTask, getTasks } from "./todoTask";

export function loadMain() {
    const content = document.getElementById('mainSection');
    const title = document.createElement('h1');
    title.textContent = 'All tasks';
    content.appendChild(title);
    const todoButton = document.createElement('button');
    todoButton.innerText = 'new To-do';
    mainSection.appendChild(todoButton);
    todoButton.addEventListener('click', () => {
        loadTask();
        loadClass();
        
    })
}

export const loadDaily = () => {
    const content = document.getElementById('mainSection');
    const title = document.createElement('h1');
    title.textContent = 'Daily Tasks';
    content.appendChild(title);

    const todoButton = document.createElement('button');
    todoButton.innerText = 'new To-do';
    mainSection.appendChild(todoButton);
    todoButton.addEventListener('click', () => {
    
    loadTask();
    loadClass('daily');
    
    })
}

export const loadWeekly = () => {
    const content = document.getElementById('mainSection');
    const title = document.createElement('h1');
    title.textContent = 'Weekly Tasks';
    content.appendChild(title);
    const todoButton = document.createElement('button');
    todoButton.innerText = 'new To-do';
    mainSection.appendChild(todoButton);
    todoButton.addEventListener('click', () => {
    
    loadTask();
    loadClass('weekly');
    
    })
    

}

export const loadMonthly = () => {
    const content = document.getElementById('mainSection');
    const title = document.createElement('h1');
    title.textContent = 'Monthly Tasks';
    content.appendChild(title);
    const todoButton = document.createElement('button');
    todoButton.innerText = 'new To-do';
    mainSection.appendChild(todoButton);
    todoButton.addEventListener('click', () => {
    
    loadTask();
    loadClass('monthly');
    
    })
    
     
}