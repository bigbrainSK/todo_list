import { loadMain, loadDaily, loadWeekly, loadMonthly, } from "./loadPage";
import './todoTask';
import './loadPage';

export function clearDiv(obj)  {
    obj.remove();
}



export function clearDisplay(taskContainer) {
        while(taskContainer.firstChild) {
        taskContainer.removeChild(taskContainer.firstChild);
        }
}




//  export const taskFinishTime = (timeframe, obj) => {   //need to give individual divs a class depending on which page they were created on

//     if(timeframe==='daily') {
//         obj.className = 'dailyTask';
//     } 
//     else if(timeframe==='weekly') {
//         obj.className = 'weeklyTask';
//     } 
//     else if(timeframe==='monthly') {
//         obj.className = 'monthlyTask';
//     } else {
//         return;
//     }
//  }