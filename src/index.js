import './gameLogic';
import './loadDueTime';
import './storage';

import { taskFinishTime, clearDisplay } from './gameLogic';
import {loadTask} from './todoTask';
import { loadDaily, loadWeekly, loadMonthly } from './loadDueTime';

const header = document.getElementById('header');
const mainSection = document.getElementById('mainSection');
const sidebar = document.getElementById('sidebar')

const todoButton = document.createElement('button');
todoButton.innerText = 'new To-do';
sidebar.appendChild(todoButton);
todoButton.addEventListener('click', () => {
    
    loadTask();
})

const dailyButton = document.createElement('button');
dailyButton.innerText = 'daily';
sidebar.appendChild(dailyButton);
dailyButton.addEventListener('click', () => {
    clearDisplay(mainSection);
    loadDaily();
    taskFinishTime('daily', task);

})

const weekButton = document.createElement('button');
weekButton.innerText = 'weekly';
sidebar.appendChild(weekButton);
weekButton.addEventListener('click',() => {
    clearDisplay(mainSection);
    loadWeekly();
    taskFinishTime('weekly', task);
})

const monthlyButton = document.createElement('button');
monthlyButton.innerText = 'monthly';
sidebar.appendChild(monthlyButton);
monthlyButton.addEventListener('click', () => {
    clearDisplay(mainSection);
    loadMonthly();
    taskFinishTime('monthly', task);
})




