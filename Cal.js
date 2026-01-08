function display(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = "";
}

function calculate() {
    let res = document.getElementById("result").value;
    document.getElementById("result").value = eval(res);
}
