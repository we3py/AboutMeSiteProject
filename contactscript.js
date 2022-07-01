function CheckEmail(){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var mailText = document.getElementById('mail');

    if(mailText.value.match(mailformat))
    {
        return true;
    }
    else
    {
        return false;
    }
}

function CheckName(){
    var fullNameFormat = /^[A-Z][a-z0-9_-]{3,19}\s[A-Z][a-z0-9_-]{3,19}$/;
    var fullName = document.getElementById('fullname');

    if(fullName.value.match(fullNameFormat))
    {
        return true;
    }
    else
    {
        return false;
    }
}

function buttonClick(){

    var isMailCorrect = CheckEmail();
    var isFullnameCorrect = CheckName();

    if(isFullnameCorrect && isMailCorrect){
        alert("Thanks for your message!");
        CleanDataInFields();
    }
    else{
        alert("Correct data");
    }    
}

function EnableButton(){
    var fullName = document.getElementById('fullname').value;
    var mail = document.getElementById('mail').value;
    var content = document.getElementById('content').value;
    button = document.getElementById('sendbutton');

    if(fullName.length == 0 || mail == 0 || content == 0)
    {
        button.disabled = true;
    } 
    else 
    {
        button.disabled = false;
    }
}

function CleanDataInFields(){
    document.getElementById('fullname').value = "";
    document.getElementById('mail').value = "";
    document.getElementById('content').value = "";
}
