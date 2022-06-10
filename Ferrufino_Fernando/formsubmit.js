

window.onload = setForm;

/*--This fulfills requirement 3.2.6 A.V --*/
function setForm() {
   document.forms[0].onsubmit = function() {
      /*--This fulfills requirement 3.2.6 D --*/
      if (this.checkValidity()) alert("Thank you, we will contact you soon.");
      return false;
   }
}
