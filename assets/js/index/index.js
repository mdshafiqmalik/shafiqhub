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
      if (!isValid) {

      }else {
        message.innerHTML = "We are working";
        message.classList.add("statusSucess");
        message.classList.remove("statusWarning");
      }
  });
function validateData(name, email){
  if (name.length == 0 || email.length == 0) {
    message.innerHTML = "All fields required";
    message.classList.add("statusWarning");
    message.classList.remove("statusSucess");
    return false;
  }else if (validateName(name) && validateEmail(email)) {
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
  var config = {
      apiKey: "AIzaSyCKjB8oCGQ6oBWTdUQea18vsJLIAsU5NFE",
      authDomain: "shafiqhub-db.firebaseapp.com",
      databaseURL: "https://shafiqhub-db-default-rtdb.firebaseio.com",
      projectId: "shafiqhub-db",
      storageBucket: "shafiqhub-db.appspot.com",
      messagingSenderId: "647856676003",
      appId: "1:647856676003:web:04d1b539d00471b2db7316",
      measurementId: "G-Z5TN9P43EY"
    };
  firebase.initializeApp(config);
  firebase.database().ref("/get/all/the/data").once("value", function (data) {
      console.log(data.val());
  });
  var mykey = config.MY_KEY;
  var secretkey = config.SECRET_KEY;
  console.log(mykey);
  console.log(secretkey);
