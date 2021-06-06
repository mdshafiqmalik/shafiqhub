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
let Qplace = document.getElementById('qoute');
let Qauthor = document.getElementById('qouteWriter');
let date = new Date().getDate();
let Qoutes = [
  {
    qoute:"Eighty percent of success is showing up",
    authour:"Woody Allen"
  },
  {
    qoute:"I respect faith, but doubt is what gets you an education",
    authour:"Wilson Mizner"
  },
  {
    qoute:"  It’s not that I’m so smart, it’s just that I stay with problems longer",
    authour:"Albert Einstein"
  },
  {
    qoute:"The greatest obstacle to discovery is not ignorance; it is the illusion of knowledge",
    authour:"Daniel J. Boorstin"
  },
  {
    qoute:"The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails",
    authour:"William Arthur Ward"
  },
  {
    qoute:"If you don’t make mistakes, you’re not working on hard enough problems. And that’s a big mistake",
    authour:"Frank Wilczek"
  },
  {
    qoute:"  You can never get enough of what you don’t really need",
    authour:"Eric Hoffer"
  },
  {
    qoute:"Insanity: doing the same thing over and over again and expecting different results",
    authour:"Albert Einstein"
  },
  {
    qoute:"Do not confuse motion and progress. A rocking horse keeps moving but does not make any progress",
    authour:"Alfred A. Montapert"
  },
  {
    qoute:"I don’t know the key to success, but the key to failure is trying to please everybody",
    authour:"Bill Cosby"
  },
  {
    qoute:"Tomorrow is often the busiest day of the week",
    authour:"Spanish Proverb"
  },
  {
    qoute:"  Be yourself; everyone else is already taken",
    authour:"Oscar Wilde"
  },
  {
    qoute:"There is a great difference between worry and concern. A worried person sees a problem, and a concerned person solves a problem",
    authour:"Harold Stephens"
  },
  {
    qoute:"It is easier to fight for one’s principles than to live up to them",
    authour:"Alfred Adler"
  },
  {
    qoute:"I hear: I forget / I see: I remember / I do: I understand",
    authour:"Chinese Proverb"
  },
  {
    qoute:"Discipline is just choosing between what you want now and what you want most",
    authour:"Unknown Author"
  },
  {
    qoute:"The very best thing you can do for the whole world is to make the most of yourself",
    authour:"Wallace Wattles"
  },
  {
    qoute:"Good judgment comes from experience, and experience comes from bad judgment",
    authour:"Barry LePatner"
  },
  {
    qoute:"When I do good, I feel good; when I do bad, I feel bad, and that is my religion",
    authour:"Abraham Lincoln"
  },
  {
    qoute:"Success consists of going from failure to failure without loss of enthusiasm",
    authour:"Winston Churchill"
  },
  {
    qoute:"If it weren’t for my lawyer, I’d still be in prison. It went a lot faster with two people digging",
    authour:"Joe Martin"
  },
  {
    qoute:"Acquaintance, n.: A person whom we know well enough to borrow from, but not well enough to lend to",
    authour:"Ambrose Bierce"
  },
  {
    qoute:"I like long walks, especially when they are taken by people who annoy me",
    authour:"Noel Coward"
  },
  {
    qoute:"The difference between death and taxes is death doesn’t get worse every time Congress meets",
    authour:"Will Rogers"
  },
  {
    qoute:"You know you’re getting old when you stop to tie your shoelaces and wonder what else you could do while you’re down there",
    authour:"George Burns"
  },
  {
    qoute:"Time flies like an arrow; fruit flies like a banana",
    authour:"Groucho Marx"
  },
  {
    qoute:"Those are my principles. If you don’t like them I have others",
    authour:"Groucho Marx"
  },
  {
    qoute:"Somewhere on this globe, every ten seconds, there is a woman giving birth to a child. She must be found and stopped",
    authour:"Sam Levenson"
  },
  {
    qoute:"Quidquid latine dictum sit, altum sonatur. (Whatever is said in Latin sounds profound",
    authour:"Unknown Author"
  },
  {
    qoute:"The most remarkable thing about my mother is that for thirty years she served the family nothing but leftovers. The original meal has never been found",
    authour:"Calvin Trillin"
  },
  {
    qoute:"The tooth fairy teaches children that they can sell body parts for money",
    authour:"David Richerby"
  }
];
Qplace.innerHTML = Qoutes[date].qoute;
Qauthor.innerHTML = Qoutes[date].authour;
