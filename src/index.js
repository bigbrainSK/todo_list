import './loadPage';
import './todoTask';
import './gameLogic';

import { clearDisplay } from './gameLogic';
import {getTasks, loadTask} from './todoTask';
import { loadDaily, loadWeekly, loadMonthly, loadMain } from './loadPage';

loadMain();



const header = document.getElementById('header');
const mainSection = document.getElementById('mainSection');
const sidebar = document.getElementById('sidebar')

const allButton = document.createElement('button');
allButton.innerText = 'all';
sidebar.appendChild(allButton);
allButton.addEventListener('click', () => {
    clearDisplay(mainSection);
    loadMain();
    //getTasks();
})



const dailyButton = document.createElement('button');
dailyButton.innerText = 'daily';
sidebar.appendChild(dailyButton);
dailyButton.addEventListener('click', () => {
    
    clearDisplay(mainSection);
    loadDaily();
    
})

const weekButton = document.createElement('button');
weekButton.innerText = 'weekly';
sidebar.appendChild(weekButton);
weekButton.addEventListener('click',() => {
    clearDisplay(mainSection);
    loadWeekly();
})

const monthlyButton = document.createElement('button');
monthlyButton.innerText = 'monthly';
sidebar.appendChild(monthlyButton);
monthlyButton.addEventListener('click', () => {
    clearDisplay(mainSection);
    loadMonthly();
});





