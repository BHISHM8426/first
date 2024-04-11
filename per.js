function appendinput(value) {
    document.getElementById("display").value += value;
}

function clearinput(value) {
    document.getElementById("display").value = '';
}

function resultans() {
    try {
        const result = eval(document.getElementById("display").value)
        document.getElementById("display").value = result;
    } catch (error) {
        alert('Invalid input');
        clearinput();
    }

}