 export function loadTask() {

    const task = document.createElement('div');
    task.setAttribute('id', 'taskDiv');
    document.getElementById('mainSection').appendChild(task);

    const taskDiv = document.createElement('div');
    taskDiv.textContent = 'To-Do';
    task.appendChild(taskDiv);

    const taskName = document.createElement('input');
    taskName.type = 'text';
    taskName.setAttribute('placeholder', 'task name');
    taskName.setAttribute('maxLength', '15');
    taskName.className = 'taskInput';
    task.appendChild(taskName);

    const taskDescription = document.createElement('textarea');
    taskDescription.type = 'text';
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
    
}