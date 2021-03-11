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
