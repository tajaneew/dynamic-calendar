const currentDate = document.querySelector(".current-date"),
daysTag = document.querySelector(".days"),
prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

//console.log(date, currYear, currMonth);

//storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//getDate returns day of month (0-31)
const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), //getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), //getting last date of month 
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), //getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth + 1, 0).getDate(); //getting last date of previous month
    // console.log(lastDateofMonth);
    let liTag = "";

    for (let i= firstDayofMonth; i > 0; i--){ //creating li of previous month last days
        liTag += `<li class= "inactive">${lastDateofLastMonth - i + 1}</li>`;
    }


    for (let i= 1; i <= lastDateofMonth; i++){ //creating li of all days of current month
        //adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                    && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class= "${isToday}">${i}</li>`; //console.log(i);
    }
    
    for (let i= lastDayofMonth; i < 6; i++) { //creating li of next month first days
        liTag += `<li class= "inactive">${i - lastDayofMonth + 1}</li>`;
        
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`; //passing current mon & yr as currentDate text
    daysTag.innerHTML = liTag;

}
renderCalendar();

prevNextIcon.forEach(icon => { //getting prev & next icons
    icon.addEventListener("click", () => { //adding click on both icons
        //console.log(icon);
        //if clicked icon is previous icon the decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            isToday = new Date();
        date = new Date(currYear, currMonth, newDate().getDate()); // creating a new date of current year & month and pass it as date value
        currYear = date.getFullYear(); //updating current year with new date year
        currMonth = date.getMonth(); //updating current month with new date month
    } else { //else pass new date as date value
        date = new Date();
    } // pass the current date as date value
        renderCalendar(); // calling renderCalendar function
    });
});