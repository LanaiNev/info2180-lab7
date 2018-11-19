var button;
var getAll;
var url;
var httpRequest = new XMLHttpRequest();

window.onload = function (){
    button = document.getElementById("lookup");
    getAll = document.getElementsByName("all")[0];
    
    button.onclick = function() {Click ();}
}

function Click(){
    
    if (getAll.checked == true){
        url = "https://info2180-lab7-lanai.c9users.io/world.php?all=true";
    }
    else{
        var text = document.getElementById("country").value;
        url = "https://info2180-lab7-lanai.c9users.io/world.php?country=" + text;
    }

    httpRequest.onreadystatechange = doSomething();
    httpRequest.open('GET', url);
    httpRequest.send();
}

function doSomething() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            var response = httpRequest.responseText;
            var result = document.getElementById("result");
            result.innerHTML = response;
        }
        else {
            alert('There was a problem with the request.');
        }
    }   
}
