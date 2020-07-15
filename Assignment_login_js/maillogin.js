
function validate(){

    var form = document.forms['MyForm']
    console.log(form);
    var use = form['user'].value
    console.log(use);
    
    var regx = /^([a-zA-Z 0-9\.-]{2,20})@([a-z0-9-]+).([a-z]{2,8})$/;
    var err =  document.getElementById('err')
    if(use === ""){
      err.innerText = " email  should not be empty"
      err.style.display = ""
      err.style.color = "red"
      return false;
    }else if( use.length <= 5 ) {
      err.innerText = " email should not be less than 5"
      err.style.display = ""
      err.style.color = "red"
      return false;
    }
    else if(regx.test(use)==false){
        err.innerText = "enter a correct email id"
      err.style.display = ""
      err.style.color = "red"
      return false;
    }
    else{
      console.log("here");
      document.MyForm.submit()
    }
  new Re
}


