function findValue(num){
    var data = document.getElementById("userData");
    data.value += num
}

function calculation(){
    var data = document.getElementById("userData");
    data.value = eval(data.value)   
}

function clearAllValue(){
    var data = document.getElementById("userData");
    data.value = " "
}

function clearOneValue(){
    var data = document.getElementById("userData");
    data.value = data.value.slice(0,-1)
}