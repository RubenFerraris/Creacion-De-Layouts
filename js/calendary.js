let currentMonth = document.querySelector(".current-month");
let calendarDays = document.querySelector(".calendar-days");
let today = new Date();
let date = new Date();
currentMonth.textContent = date.toLocaleDateString("en-US", {month:'long', year:'numeric'});
today.setHours(0,0,0,0);
renderCalendar();
function renderCalendar(){
    const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();
    const totalMonthDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
    const startWeekDay = new Date(date.getFullYear(),date.getMonth(),0).getDay();
    
    calendarDays.innerHTML = "";

    let totalCalendarDay = 6 * 7;
    for (let i = 0; i < totalCalendarDay; i++) {
        let day = i-startWeekDay;

        if(i <= startWeekDay){
            calendarDays.innerHTML += `<div class='padding-day'>${prevLastDay-i}</div>`;
        }else if(i <= startWeekDay+totalMonthDay){
          
            date.setDate(day);
            date.setHours(0,0,0,0);
            
            let dayClass = date.getTime()===today.getTime() ? 'current-day' : 'month-day';
            calendarDays.innerHTML += `<div class='${dayClass}'>${day}</div>`;
        }else{
     
            calendarDays.innerHTML += `<div class='padding-day'>${day-totalMonthDay}</div>`;
        }
    }
}

document.querySelectorAll(".month-btn").forEach(function (element) {
	element.addEventListener("click", function () {
		date = new Date(currentMonth.textContent);
        date.setMonth(date.getMonth() + (element.classList.contains("prev") ? -1 : 1));
		currentMonth.textContent = date.toLocaleDateString("en-US", {month:'long', year:'numeric'});
		renderCalendar();
	});
});

document.querySelectorAll(".btn").forEach(function (element) {
	element.addEventListener("click", function () {
        let btnClass = element.classList;
        date = new Date(currentMonth.textContent);
        if(btnClass.contains("today"))
            date = new Date();
        else if(btnClass.contains("prev-year"))
            date = new Date(date.getFullYear()-1, 0, 1);
        else
            date = new Date(date.getFullYear()+1, 0, 1);
        
		currentMonth.textContent = date.toLocaleDateString("en-US", {month:'long', year:'numeric'});
		renderCalendar();
	});
});
let body = document.getElementById("resto");

fetch('js/restos.json')
    .then(response => {
    
        return response.json()
    })
    .then(data => {
        data.forEach(e => {
        
            body.innerHTML +=
                `<a id="${e.name}" class="restaurante">
        <article class="oferta">
            <div class="img">
                <img src="${e.avatar.src}">
                <span>${e.distance}</span>
            </div>
            <div class="desc">
                <h2>${e.name}</h2>
                <span>Hari ini pukul ${e.close}</span>
                <div class="stats">
                </div>
            </div>
        </article>
    </a>`});
    })