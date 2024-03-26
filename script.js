//Button for the current Date
document.getElementById("clickMeButton").addEventListener("click", function() {
    // Get current date
    var date365 = 0;

var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth(); 
var currentMonthFormat = currentDate.getMonth()+1; 
var currentDay = currentDate.getDate(); 

var monthLength = [31,28,31,30,31,30,31,31,30,31,30,31];

var leapYear = new Date(currentYear, 1, 29); 
if (leapYear.getDate() == 29) { // If it's a leap year, changes 28 to 29
    monthLength[1] = 29;
}

for ( i=0; i < currentMonth; i++ ) { 
    date365 = date365 + monthLength[i];
}
date365 = date365 + currentDay; // Done!

let julian = String(date365).padStart(4, '0');
// Show alert with the formatted date
    alert("Current Date: " + currentMonthFormat + "/" + currentDay + "/" + currentYear + "\n\n\nJulian Date: " + julian);
  });
  
//   Button for Popcorn Date
  document.getElementById("popcornButton").addEventListener("click", function() {
    // Get current date
    var date365 = 2;

var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth(); 
var currentMonthFormat = currentDate.getMonth()+1; 
var currentDay = currentDate.getDate(); 
var monthLength = [31,28,31,30,31,30,31,31,30,31,30,31];
var leapYear = new Date(currentYear, 1, 29); 
if (leapYear.getDate() == 29) { // If it's a leap year, changes 28 to 29
    monthLength[1] = 29;
}

for ( i=0; i < currentMonth; i++ ) { 
    date365 = date365 + monthLength[i];
}
date365 = date365 + currentDay;

let popcornDate = String(date365).padStart(4, '0');
// Show alert with the formatted date
    alert("Julian Date: " + popcornDate);
  });

  //   Button for Boxed Donut Date
  document.getElementById("boxedDonutButton").addEventListener("click", function() {
    // Get current date
    var date365 = 3;

var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth(); 
var currentMonthFormat = currentDate.getMonth()+1; 
var currentDay = currentDate.getDate(); 
var monthLength = [31,28,31,30,31,30,31,31,30,31,30,31];
var leapYear = new Date(currentYear, 1, 29); 
if (leapYear.getDate() == 29) { // If it's a leap year, changes 28 to 29
    monthLength[1] = 29;
}

for ( i=0; i < currentMonth; i++ ) { 
    date365 = date365 + monthLength[i];
}
date365 = date365 + currentDay;

let boxedDonutDate = String(date365).padStart(4, '0');
// Show alert with the formatted date
    alert("Julian Date: " + boxedDonutDate);
  });

    //   Button for Cookie/Hot Dog Bun Date
    document.getElementById("cookieButton").addEventListener("click", function() {
        // Get current date
        var date365 = 7;
    
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth(); 
    var currentMonthFormat = currentDate.getMonth()+1; 
    var currentDay = currentDate.getDate(); 
    var monthLength = [31,28,31,30,31,30,31,31,30,31,30,31];
    var leapYear = new Date(currentYear, 1, 29); 
    if (leapYear.getDate() == 29) { // If it's a leap year, changes 28 to 29
        monthLength[1] = 29;
    }
    
    for ( i=0; i < currentMonth; i++ ) { 
        date365 = date365 + monthLength[i];
    }
    date365 = date365 + currentDay;
    
    let cookieDate = String(date365).padStart(4, '0');
    // Show alert with the formatted date
        alert("Julian Date: " + cookieDate);
      });

         //   Button for Fast Food/Deli Case Date
    document.getElementById("ffDeliButton").addEventListener("click", function() {
        // Get current date
        var date365 = 14;
    
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth(); 
    var currentMonthFormat = currentDate.getMonth()+1; 
    var currentDay = currentDate.getDate(); 
    var monthLength = [31,28,31,30,31,30,31,31,30,31,30,31];
    var leapYear = new Date(currentYear, 1, 29); 
    if (leapYear.getDate() == 29) { // If it's a leap year, changes 28 to 29
        monthLength[1] = 29;
    }
    
    for ( i=0; i < currentMonth; i++ ) { 
        date365 = date365 + monthLength[i];
    }
    date365 = date365 + currentDay;
    
    let ffDeliDate = String(date365).padStart(4, '0');
    // Show alert with the formatted date
        alert("Julian Date: " + ffDeliDate);
      });

               //   Button for Pastry/Nut Date
    document.getElementById("pastryNutsButton").addEventListener("click", function() {
        // Get current date
    var date365 = 28;
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth(); 
    var currentMonthFormat = currentDate.getMonth()+1; 
    var currentDay = currentDate.getDate(); 
    var monthLength = [31,28,31,30,31,30,31,31,30,31,30,31];
    var leapYear = new Date(currentYear, 1, 29); 
    if (leapYear.getDate() == 29) { // If it's a leap year, changes 28 to 29
        monthLength[1] = 29;
    }
    
    for ( i=0; i < currentMonth; i++ ) { 
        date365 = date365 + monthLength[i];
    }
    date365 = date365 + currentDay;
    
    let pastryJulian = String(date365).padStart(4, '0');
    // Show alert with the formatted date
        alert("Julian Date: " + pastryJulian);
      });