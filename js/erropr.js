function validateForm() {

    let fname = document.contactForm.name.value;
    let mail = document.contactForm.email.value;
    let mobi = document.contactForm.mobile.value;
    let country = document.contactForm.country.value;
    let gender = document.contactForm.gender;



    if (fname == ''){
        document.getElementById("nameErr").innerHTML="PLease enter your name";
    } else {
        let regexname = /^[a-zA-Z ]{2,30}$/;
        
        if(regexname.test(fname)) {
            document.getElementById("nameErr").innerHTML="";    
        } else {
            document.getElementById("nameErr").innerHTML="PLease enter your valid name";
        }
    }

    if (mail == ''){
        document.getElementById("emailErr").innerHTML="PLease enter your email";
    } else {
        let regmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (mail.match(regmail)) {
            document.getElementById("emailErr").innerHTML="";
        } else {
            document.getElementById("emailErr").innerHTML="PLease enter your valid email";
        }

    }

    if (mobi == ''){
        document.getElementById("mobileErr").innerHTML="PLease enter your mobile number";
    } else {

        if (!isNaN(mobi)&&mobi.length == 10) {
            document.getElementById("mobileErr").innerHTML="";    
        } else {
            document.getElementById("mobileErr").innerHTML="PLease enter your valid number";
        }
    }

    if(country === "0") {
        document.getElementById("countryErr").innerHTML="PLease select a country";
    } else {
        document.getElementById("countryErr").innerHTML="";
    }

    let flag = false;

    for (let i=0; i<gender.length; i++) {
        if (gender[i].checked == true){
            flag=true;
            break;
        }
    } 
    if (flag) {
        document.getElementById("genderErr").innerHTML="";
    } else {
        document.getElementById("genderErr").innerHTML="please select gender";
    }

    return false;
}