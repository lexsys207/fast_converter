var num_1 = document.getElementById("num-1");
var num_2 = document.getElementById("num-2");
var value_convert = document.getElementById("value-convert");
var num_but = 0;

num_1.onclick = function () {
    num_but = 1;
    read();
}

num_2.onclick = function () {
    num_but = 2;
    read();
}

function read() {
    if (num_but == 1) {
        value_convert.innerHTML = "1";
        console.log(1);
    }
    else if (num_but == 2) {
        value_convert.innerHTML = "2";
        console.log(2);
    }
}



