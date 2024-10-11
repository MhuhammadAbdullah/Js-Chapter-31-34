// Question: 1

// console.log(rightNow);

// // Question: 2
// var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
// console.log(months[rightNow.getMonth()]);

// Question: 3
// var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
// console.log(days[rightNow.getDay()]);

// Question: 4

// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// console.log(rightNow.getDay());
// var a = days[rightNow.getDay()];
// if (a == "Sat" || a == "Sun") {
//     console.log("It's Fun Day");
// }
// else {
//     console.log("It's working Day");
// }

//QUESTION 5
// var a = rightNow.getDay();
// if (a < 15) {
//     console.log("First Fifteen Days Of The month");
// }
// else {
//     console.log("Last` Fifteen Days Of The month");
// }

//QUESTION 6

// var currentdate = new Date();
// console.log("Current Date: " + currentdate);
// console.log("Milliseconds since 1 january 1970:" + currentdate.getTime());
// console.log("Milliseconds since 1 january 1970:" + currentdate.getMinutes());


//QUESTION 7

// var currentHour = new Date().getHours();

// if (currentHour < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }

//QUESTION 8

// var laterDate = new Date(2020, 11, 31);

// console.log(laterDate);

//QUESTION 9

// var startingDate = new Date(2015, 4, 18); // May 18, 2015
// var now = new Date();

// // Calculate days passed directly using getTime
// var daysPassed = Math.floor((now.getTime() - startingDate.getTime()) / (1000 * 60 * 60 * 24));

// console.log(daysPassed + "  days have past since 1st Ramadan, 2015");



// var startingdate = new Date(5, 18, 2015);
// var now = new Date();
// var n = now.getDate();
// console.log(n - startingdate + " days has been pased");
