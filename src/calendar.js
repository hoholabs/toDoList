import { getMonth, getYear, getDay, startOfMonth, getDaysInMonth, format, eachWeekendOfMonth, differenceInCalendarDays  } from 'date-fns';

export function createCalendar(year,month){
    const calendar = document.createElement('div');
    calendar.classList.add('calendar');
    calendar.id = "calendar";

    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const days =["S","M","T","W","T","F","S"]

    const selectYear = document.createElement('select');
    selectYear.id = 'select-year'
    const selectMonth = document.createElement('select');
    selectMonth.id = 'select-month'

    var today = new Date();
    var thisYear = getYear(today);
    var thisMonth = getMonth(today);
    var thisDay = getDay(today);
    
    //YEAR
    
    

    for (let index = 0; index < 10; index++) {
        let option = document.createElement("option");
        option.value = getYear(today)+index;
        option.text = option.value;
        option.addEventListener('click', () => showDays(option.value,selectMonth.value))
        if(index == year){
            option.selected = true;
            showDays(option.value,month)
        }
        selectYear.add(option, null);
    }

    //MONTH
    
    for (let index = 0; index < months.length; index++) {
        let option = document.createElement("option");
        option.value = index;
        option.text = months[index];
        option.addEventListener('click', () => showDays(selectYear.value,option.value))
        if(index == month){
            option.selected = true;
        }
        selectMonth.add(option, null);
    }

    //DAY
    
    function showDays(yy,mm){
        //console.log("showdays");

        if(document.getElementById('selectDay')){clearDays();}
        
        const selectDay = document.createElement('div');
        selectDay.id = "selectDay";

        let showDate = new Date();
        showDate.setFullYear(yy, mm);
        let startDate = startOfMonth(showDate);
        let startDay = getDay(startDate);
        let daysInMonth = getDaysInMonth(showDate);
        let daysInLastMonth = getDaysInMonth(getMonth(showDate)-1);
        let daysColumns = Math.ceil((daysInMonth+startDay)/7);

        //console.log(daysInLastMonth);
        
        //create day headers
        for (let index = 0; index < days.length; index++) {
            let day = document.createElement('div');
            day.textContent = days[index];
            day.classList.add('day');

            // if(days[index] == getDay(today)){
            //     day.style.color = "var(--color3)";
            //     day.style.backgroundColor = "var(--color2)";

            // };
            selectDay.append(day);
            
        }

        for (let index = 0; index < 7*daysColumns; index++) {
            
            let day = document.createElement('div');
            
            
            if((index-startDay+1)>daysInMonth){
                day.textContent = index-startDay-daysInMonth+1;

                day.classList.add('other-month');
            }
            else if(index-startDay>-1){
                        day.textContent = index-startDay+1;
                        day.classList.add('this-month')
                    }
            else{

                day.textContent = daysInLastMonth-startDay+index+1;
                day.classList.add('other-month');
            }

            day.classList.add('day');
            day.addEventListener('click',function(){
                // console.log(selectYear.value);
                // console.log(selectMonth.value);
                // console.log(day.textContent);
                let date = new Date;
                date.setFullYear(selectYear.value,selectMonth.value,day.textContent);
                //console.log(date);
                //console.log(this.parentNode.parentNode.parentNode.parentNode.firstChild.textContent);
                this.parentNode.parentNode.parentNode.parentNode.firstChild.textContent = formatDate(date);
            });
            //console.log(index);
            if(yy == getYear(today) && mm == getMonth(today) && index == getDay(today)){
                //console.log(`mm = ${mm} and getMonth(today) = ${getMonth(today)}`);
                //console.log(`yy = ${yy} and getYear(today) = ${getYear(today)}`);
                day.style.color = "var(--color3)";
                day.style.backgroundColor = "var(--color2)";

            };

            selectDay.append(day);       
        }
        //return selectDay;
        calendar.append(selectDay);
    }

    function clearDays(){
        document.getElementById("selectDay").remove();
        //console.log("cleardays");
    }
    calendar.append(selectMonth);
    calendar.append(selectYear);
    showDays(year,month);
    //console.log(calendar);
    console.log("appendedcalendar");
    return calendar;
}

export function formatDate(date) {

    return format(date,'d MMM yy');

}