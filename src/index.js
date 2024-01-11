import './todoTask';





import {loadTodo} from './todoTask';

const header = document.getElementById('header');
const mainSection = document.getElementById('mainSection');
const sidebar = document.getElementById('sidebar')
const newTask = document.createElement('button');
newTask.innerText = 'new To-do';
sidebar.appendChild(newTask);

