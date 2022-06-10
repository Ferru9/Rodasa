

const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

/*--This fulfills requirement 3.2.6 A.III --*/
navToggle.addEventListener('click', () => {
     const visibility = primaryNav.getAttribute('data-visible');

     if (visibility === "false") {
          primaryNav.setAttribute("data-visible", true)
          navToggle.setAttribute("aria-expanded", true)
     } else if (visibility === "true"){
          primaryNav.setAttribute("data-visible", false)
          navToggle.setAttribute("aria-expanded", false)
     }
})



// Set the date we're counting down to

/*--This fulfills requirement 3.2.6 B --*/
/*--This fulfills requirement 3.2.6 A.I --*/
var countDownDate = new Date("Jan 25, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  /*--This fulfills requirement 3.2.6 A.IX --*/
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  /*--This fulfills requirement 3.2.6 A.II --*/
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="countdown"
  /*--This fulfills requirement 3.2.6 A.IV --*/
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  /*--This fulfills requirement 3.2.6 A.III --*/
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

var lastModified = document.lastModified;
document.getElementById("modified").innerHTML = "website was last modified on: "+lastModified;


/*--This fulfills requirement 3.2.6 C --*/
function checkDepartment(field){

     /*--This fulfills requirement 3.2.6 A.VI --*/
     var department = ['San Salvador','La Libertad','Santa Ana','San Miguel','Sonsonate','Usulutan', 'Ahuachapán', 'La Unión','La Paz','Chalatenango','Morazan','Cuscatlan','San Vicente','Cabañas']


     /*--This fulfills requirement 3.2.6 A.III --*/
     /*--This fulfills requirement 3.2.6 A.VII --*/
     if(field.value == department[0] || field.value == department[1] || field.value == department[2] || field.value == department[3]
          || field.value == department[4] || field.value == department[5] || field.value == department[6] || field.value == department[7]
          || field.value == department[8] || field.value == department[9] || field.value == department[10] || field.value == department[11]
          || field.value == department[12] || field.value == department[13]){

     var A = document.survey.city.value;
    
     }
     else{
          /*--This fulfills requirement 3.2.6 D --*/
         confirm("Please enter a valid department"); //difference between alert and confirm
         //alert has 1 button 
     }
     
     
 }