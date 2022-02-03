import { getMonth, getYear, startOfMonth, getDay, getDaysInMonth, eachWeekendOfMonth  } from 'date-fns';

export function createCalendar(){
    const calendar = document.createElement('div');
    calendar.classList.add('calendar');

    var today = new Date(); 

    //YEAR
    const selectYear = document.createElement('select');
    selectYear.classList.add('calendar');

    for (let index = 0; index < 10; index++) {
        let option = document.createElement("option");
        option.value = getYear(today)+index;
        option.text = option.value;
        selectYear.add(option, null);
    }

    //MONTH
    const selectMonth = document.createElement('select');

    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    for (let index = 0; index < months.length; index++) {
        let option = document.createElement("option");
        option.value = index;
        option.text = months[index];
        selectMonth.add(option, null);
    }

    //DAY
    const selectDay = document.createElement('div');
    selectDay.id = "selectDay";

    const days =["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

    let startDate = startOfMonth(today);
    let startDay = getDay(startDate);
    let daysInMonth = getDaysInMonth(today);
    let daysInLastMonth = getDaysInMonth(getMonth(today)-1);
    let daysColumns = Math.ceil((daysInMonth+startDay)/7);
    
    console.log(daysInLastMonth);
    
    for (let index = 0; index < days.length; index++) {
        let day = document.createElement('div');
        day.textContent = days[index];
        day.classList.add('day');
        selectDay.append(day);
        
    }

    for (let index = 7; index < 7*(daysColumns+1); index++) {
        let day = document.createElement('div');
        day.textContent = index-7-startDay;
        day.classList.add('day');
        selectDay.append(day);       
    }

    calendar.append(selectMonth);
    calendar.append(selectYear);
    calendar.append(selectDay);

    

    let mm = getMonth(today);
    //console.log(getYear(today));


    return calendar;
}