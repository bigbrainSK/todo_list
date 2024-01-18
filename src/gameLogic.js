export function clearDiv(obj)  {
    obj.remove();
}


export function taskFinishTime(time, task) {   //need to give individual divs a class depending on which page they were created on

    if(time==='daily') {
        task.setAttribute('class', 'daily');
    } 
    else if(time==='weekly') {
        task.setAttribute('class', 'weekly');
    } 
    else if(time==='monthly') {
        task.setAttribute('class', 'monthly');
    } else {
        return;
    }
 }



export function clearDisplay() {
        while(task.firstChild) {
        task.removeChild(task.firstChild);
        }
}