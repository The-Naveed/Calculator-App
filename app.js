const findValue = (num) => {
    let data = document.getElementById("userData");
    data.value += num
}

const calculation = _ => {
    let data = document.getElementById("userData");
    data.value = eval(data.value)
}

const clearAllValue = _ => {
    let data = document.getElementById("userData");
    data.value = " "
}

const clearOneValue = _ => {
    let data = document.getElementById("userData");
    data.value = data.value.slice(0, -1)
}