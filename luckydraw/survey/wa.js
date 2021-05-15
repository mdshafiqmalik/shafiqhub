  let prog = 0;
function wa(){
  if (prog == 12) {
    let ssubmit = document.getElementById('ssubmit');
    ssubmit.innerHTML = "Get &#8377; 367.42";
    ssubmit.onclick = takenumber();
  }else {
    prog++;
    document.getElementById('pbar').value = prog;
    document.getElementById('times').innerHTML = `Your shared For ${prog} times`;
    window.location = 'whatsapp://send?text=I got 367 rupees by just answering 10 questions. Click on the link to get your reward by just answering 10 easy questions.     http://earnmore.tech/survey';
  }
}
function takenumber(){
  document.getElementById('questions').innerHTML = "<center><p class='topic'><!-- pf 02 --><div class='ads'><ins class='adsbygoogle'style='display:block'data-ad-format='fluid'data-ad-layout-key='-fb+5w+4e-db+86'data-ad-client='ca-pub-2950653490323756'data-ad-slot='1422493112'></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>Please Select a Payment Method<br></p><br><button id='paypal' onclick='goToPaypal()' type='button'> Paypal ($5) </button><br><button id='paytm' onclick='goToPaytm()' type='button'> PayTm (&#8377; 367) </button></center>";
}
function goToPaypal(){
      document.getElementById('questions').innerHTML = "<center><p class='topic'> <!-- Pf --><div class='ads'><ins class='adsbygoogle'style='display:block'data-ad-format='fluid'data-ad-layout-key='-fb+5w+4e-db+86'data-ad-client='ca-pub-2950653490323756'data-ad-slot='3141579521'></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>Enter Your Paypal Connected email<br><br><input type='mail' placeholder='jhon@company.com' required><br><br><button id='paytm' onclick='sucess()' type='submit'> Withdraw </button></center>";
}
function goToPaytm(){
     document.getElementById('questions').innerHTML = "<center><p class='topic'>Enter Your PayTm Mobile Number<br><br><input type='number' min='10' max'10' required><br><br><button id='paytm' onclick='sucess()' type='submit'> Withdraw </button></center>";
}
function sucess(){
     let result = '';
     let nums = '0123456789';
     for (var i = 0; i < 10; i++) {
       result += nums.charAt(Math.floor(Math.random()*10))
     }
     document.getElementById('questions').innerHTML = `<center><p class='topic'><!-- Pf --><div class='ads'><ins class='adsbygoogle'style='display:block'data-ad-format='fluid'data-ad-layout-key='-fb+5w+4e-db+86'data-ad-client='ca-pub-2950653490323756'data-ad-slot='3141579521'></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>Your Payment is sucessfully initiated and amount will reflect in the respsctive method within 5-7 days under reference id:<p><br><span style = 'font-family:verdana; color:lightblue;'>${result}</span><!-- Pf --><div class='ads'><ins class='adsbygoogle'style='display:block'data-ad-format='fluid'data-ad-layout-key='-fb+5w+4e-db+86'data-ad-client='ca-pub-2950653490323756'data-ad-slot='3141579521'></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div></center>`;
     setTimeout(function(){window.location = "htt://fumacrom.com/MJif"}, 5000);
}
