$(document).ready(function(){
    $('.answers').css('display', 'none');
});
function toogleAnswer(FAQID){
  let question = document.getElementById(`question${FAQID}`)
  let answers = document.getElementById(`answer${FAQID}`);
  let FaQS = document.getElementById(`FAQ-${FAQID}`);
  if (answers.style.display == "block" || answers.style.display == "") {
    answers.style.display = "none";
    question.classList.remove("rotate");
    question.style.borderBottom ="2px solid grey";
    FaQS.style.borderBottom = "0";

  }else {
    answers.style.display = "block";
    question.classList.add("rotate");
    question.style.border ="0";
    FaQS.style.borderBottom = "2px solid grey";
  }
}
function goTo(link){
  window.location = `./${link}`;
}
let message = document.getElementById('statusMessage');
$("#subsSubmit").click(function(){
   $(".subscribeForm").submit(function(e) {
    e.preventDefault();
    });
    let subsName = $("#subsName").val();
    let subsEmail = $("#subsEmail").val();
      let isValid = validateData(subsName, subsEmail);
      console.log(isValid);
      if (!isValid) {

      }else {
        message.innerHTML = "We are working";
        message.classList.add("statusSucess");
        message.classList.remove("statusWarning");
      }
  });
function validateData(name, email){
  let vname = validateName(name);
  let vmail = validateEmail(email);
  console.log("Valid Name: "+vname);
  console.log("Valid email: "+vmail);
  if (name.length == 0 || email.length == 0) {
    message.innerHTML = "All fields required";
    message.classList.add("statusWarning");
    message.classList.remove("statusSucess");
    return false;
  }else if (vname && vmail) {
    return true;
  }else {
    return false;
  }
}
function validateName(name){
  let isNum = parseInt(name);
  if (name.length < 4 || Number.isInteger(isNum)) {
    message.innerHTML = `Name is too short or a number`;
    message.classList.add("statusWarning");
    message.classList.remove("statusSucess");
    return false;
  }else {
    return true;
  }
}
  function validateEmail(email){
      let atpos = email.indexOf("@");
      let dotpos = email.lastIndexOf(".");
      if (atpos < 1 || (dotpos-atpos < 2) || email.length < 10) {
        message.innerHTML = "Incorrect Email";
        message.classList.add("statusWarning");
        message.classList.remove("statusSucess");
        return false;
      }else {
        return true;
      }
  }
