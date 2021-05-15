  let prog = 0;
function wa(){
  if (prog == 12) {
    let ssubmit = document.getElementById('ssubmit');
    ssubmit.innerHTML = "Get &#8377; 367.42";
  }else {

    prog++;
    document.getElementById('pbar').value = prog;
    document.getElementById('times').innerHTML = `Your shared For ${prog} times`;
    window.location = 'whatsapp://send?text=http:earnmore.tech/survey';
  }
}
