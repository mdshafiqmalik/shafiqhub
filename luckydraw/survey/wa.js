  let prog=0;function wa(){if(10==prog){let e=document.getElementById("ssubmit");e.innerHTML="Get &#8377; 367.42",e.onclick=takenumber()}else prog++,document.getElementById("pbar").value=prog,document.getElementById("times").innerHTML=`Your shared For ${prog} times`,window.location="whatsapp://send?text=I got 367 rupees by just answering 10 questions. Click on the link to get your reward by just answering 10 easy questions.                 http://earnmore.tech/survey"}function takenumber(){document.getElementById("questions").innerHTML="<center><p class='topic'>We are checking all links you sent <br><br>Wait for 15 seconds</p></center>",setTimeout(function(){document.getElementById("questions").innerHTML="<center><p class='topic'>Please Select a Payment Method<br></p><br><button id='paypal' onclick='goToPaypal()' type='button'> Paypal ($5) </button><br><button id='paytm' onclick='goToPaytm()' type='button'> PayTm (&#8377; 367) </button></center>"},15e3)}function goToPaypal(){document.getElementById("questions").innerHTML="<center><p class='topic'> Enter Your Paypal Connected email<br><br><input id=\"mymail\" type='mail' placeholder='jhon@company.com' required><br><br><button id='paytm' onclick='sucess()' type='submit'> Withdraw </button><span id=\"status\"></span></center>"}function goToPaytm(){document.getElementById("questions").innerHTML="<center><p class='topic'>Enter Your PayTm Mobile Number<br><br><input id=\"num\" type='number' min='10' max'10' required><br><span id=\"status\"></span><br><button id='paytm' onclick='sucess()' type='submit'> Withdraw </button></center>"}function sucess(){document.getElementById("questions").innerHTML="<center><p class='topic'>Please bear with us for 20 seconds more <br><br>we are checking your information before procceding <br><br>Wait for 20 Seconds</p></center>",setTimeout(function(){document.getElementById("questions").innerHTML=`<center><p class='topic'>Your Payment is sucessfully initiated and amount will reflect in the provided payment method within 5-7 days under reference id:<p><br><span style = 'font-family:verdana; color:lightblue; font-size:1.6rem; font-weight:bold;'>${e}</span><br></center>`},2e4);let e="";for(var t=0;t<10;t++)e+="0123456789".charAt(Math.floor(10*Math.random()))}
