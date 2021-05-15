  let prog = 0;
function wa(){
  if (prog == 12) {
    let ssubmit = document.getElementById('ssubmit');
    ssubmit.innerHTML = "Get &#8377; 367.42";
  }else {git add 
    prog++;
    document.getElementById('pbar').value = prog;
    document.getElementById('times').innerHTML = `Your shared For ${prog} times`;
  }
}
