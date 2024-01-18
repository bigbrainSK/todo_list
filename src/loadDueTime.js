

export function loadDaily() {
    const content = document.getElementById('mainSection');
    const title = document.createElement('h1');

    title.textContent = 'Daily Tasks';

    content.appendChild(title);
}

export function loadWeekly() {
    const content = document.getElementById('mainSection');
    const title = document.createElement('h1');
    title.textContent = 'Weekly Tasks';
    content.appendChild(title);
}

export function loadMonthly() {
    const content = document.getElementById('mainSection');
    const title = document.createElement('h1');
    title.textContent = 'Monthly Tasks';
    content.appendChild(title);
}