var regFname = /^[a-zA-Z]+$/;
var regLname = /^[a-zA-Z]+$/;
var regEmail = /^[a-zA-Z0-9]+\@{1}[a-zA-Z]+\.{1}[a-zA-Z]+$/;
var regNum = /^[0-9]{8,15}$/;
var regPass = /^[a-zA-Z0-9-_.]+$/;

var query;
var myData = [];
signUp();


function signUp() {
    query = location.search.split("?")[1];
    while (query.includes("%40")) {
        query = query.replace("%40", "@");
    }
    for (var i = 0; i < query.split("&").length; i++) {
        key = query.split("&")[i].split("=")[0];
        myData[key] = query.split("&")[i].split("=")[1];
    }
    console.log(query);
    console.log(myData);
    if (regFname.test(myData["usrFname"]) && regLname.test(myData["usrLname"]) && regPass.test(myData["usrNewPass"]) && (regNum.test(myData["usrEM"]) || regEmail.test(myData["usrEM"]))) {
        welcome();
    } else {
        Error();
    }
}

function welcome() {
    document.getElementById("info").innerHTML = "<h1>Hello " + myData["usrFname"] + " " + myData["usrLname"] + "<br>" +
        "Date of birth: " + myData["day"] + " " + myData["month"] + " " + myData["year"] + "<br>" +
        "you're a: " + myData["gender"] + "<br>" +
        "Email address/ number:  " + myData["usrEM"] + "</h1><br>";
}

function Error() {
    document.write("<br> <h1> you have entered <br> your info wrongly!! </h1>".fontcolor("red"));
}