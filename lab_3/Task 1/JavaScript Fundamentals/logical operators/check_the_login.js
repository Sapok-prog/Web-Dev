let enterUser = prompt("who's there?");

if(enterUser === "" || enterUser === null){
    alert("calceled");
}

else if (enterUser == "Admin"){
    let password = prompt("Password?" , "");
    if(password === "" || password === null){
        alert("calceled");
    }
    
    else if(password = "TheMaster"){
        alert("Welcome")
    }
    
    else{
        alert("Wrong password");
    }
}

else{
    alert("I don't know you")
}