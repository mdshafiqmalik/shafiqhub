function toogleAnswer(e) {
    let o = document.getElementById(`question${e}`),
        t = document.getElementById(`answer${e}`),
        r = document.getElementById(`FAQ-${e}`);
    "block" == t.style.display || "" == t.style.display
        ? ((t.style.display = "none"), o.classList.remove("rotate"), (o.style.borderBottom = "2px solid grey"), (r.style.borderBottom = "0"))
        : ((t.style.display = "block"), o.classList.add("rotate"), (o.style.border = "0"), (r.style.borderBottom = "2px solid grey"));
}
function goTo(e) {
    window.location = `./${e}`;
}
$(document).ready(function () {
    $(".answers").css("display", "none");
});
let Qplace = document.getElementById("qoute"),
    Qauthor = document.getElementById("qouteWriter");
const date = new Date().getDate();
let Qoutes = [
  {
    qoute:"",
    author:""
  },
  {
    qoute:"Spread love everywhere you go. Let no one ever come to you without leaving happier",
    author: "Mother Teresa"
  },
  {
    qoute:"When you reach the end of your rope, tie a knot in it and hang on",
    author: "Franklin D. Roosevelt"
  },
  {
    qoute:"Always remember that you are absolutely unique. Just like everyone else",
    author: "Margaret Mead"
  },
  {
    qoute:"Don't judge each day by the harvest you reap but by the seeds that you plant",
    author: "Robert Louis Stevenson"
  },
  {
    qoute:"The future belongs to those who believe in the beauty of their dreams",
    author: "Eleanor Roosevelt"
  },
  {
    qoute:"Tell me and I forget. Teach me and I remember. Involve me and I learn",
    author: "Benjamin Franklin"
  },
  {
    qoute:"The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart",
    author: "Helen Keller"
  },
  {
    qoute:"It is during our darkest moments that we must focus to see the light",
    author: "Aristotle"
  },
  {
    qoute:"Whoever is happy will make others happy too",
    author: "Anne Frank"
  },
  {
    qoute:"Do not go where the path may lead, go instead where there is no path and leave a trail",
    author: "Ralph Waldo Emerson"
  },
  {
    qoute:"You will face many defeats in life, but never let yourself be defeated",
    author: "Maya Angelou"
  },
  {
    qoute:"The greatest glory in living lies not in never falling, but in rising every time we fall",
    author: "Nelson Mandela"
  },
  {
    qoute:"In the end, it's not the years in your life that count. It's the life in your years",
    author: "Abraham Lincoln"
  },
  {
    qoute:"Never let the fear of striking out keep you from playing the game",
    author: "Babe Ruth"
  },
  {
    qoute:"Life is either a daring adventure or nothing at all",
    author: "Helen Keller"
  },
  {
    qoute:"Many of life's failures are people who did not realize how close they were to success when they gave up",
    author: "Thomas A. Edison"
  },
  {
    qoute:"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose",
    author: "Dr. Seuss"
  },
  {
    qoute:"If life were predictable it would cease to be life and be without flavor.",
    author: "Eleanor Roosevelt"
  },
  {
    qoute:"Life is a succession of lessons which must be lived to be understood.",
    author: "Ralph Waldo Emerson"
  },
  {
    qoute:"Life is never fair, and perhaps it is a good thing for most of us that it is not",
    author: "Oscar Wilde"
  },
  {
    qoute:"The only impossible journey is the one you never begin",
    author: "Tony Robbins"
  },
  {
    qoute:"In this life we cannot do great things. We can only do small things with great love",
    author: "Mother Teresa"
  },
  {
    qoute:"Only a life lived for others is a life worthwhile",
    author: "Albert Einstein"
  },
  {
    qoute:"The purpose of our lives is to be happy",
    author: "Dalai Lama"
  },
  {
    qoute:"Life is what happens when you're busy making other plans",
    author: "John Lennon"
  },
  {
    qoute:"You only live once, but if you do it right, once is enough",
    author: "Mae West"
  },
  {
    qoute:"Live in the sunshine, swim the sea, drink the wild air",
    author: "Ralph Waldo Emerson"
  },
  {
    qoute:"Go confidently in the direction of your dreams! Live the life you've imagined",
    author: "Henry David Thoreau"
  },
  {
    qoute:"Life is really simple, but we insist on making it complicated",
    author: "Confucius"
  },
  {
    qoute:"May you live all the days of your life",
    author: "Jonathan Swift"
  },
  {
    qoute:"Life itself is the most wonderful fairy tale",
    author: "Hans Christian Andersen"
  },
];
Qplace.innerHTML = `<q>${Qoutes[date].qoute}</q>`;
Qauthor.innerHTML = `__${Qoutes[date].authour}`;
