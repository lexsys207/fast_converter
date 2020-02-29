//  PARSER 2 - - - API - - -
function convertCurrency() {
    var from_valute = document.getElementById("from-select").value;
    var to_valute = document.getElementById("to-select").value;
    // Кнопки "У меня в наличии"
    var from_rub = document.getElementById("from-RUB");
    var from_usd = document.getElementById("from-USD");
    var from_jpy = document.getElementById("from-JPY");
    from_rub.onclick = function () {
        document.getElementById("from-select").value = 'RUB';
        from_rub.classList.add('active');
        from_usd.classList.remove('active');
        from_jpy.classList.remove('active');
        convertCurrency();
    }
    from_usd.onclick = function () {
        document.getElementById("from-select").value = 'USD';
        from_rub.classList.remove('active');
        from_usd.classList.add('active');
        from_jpy.classList.remove('active');
        convertCurrency();
    }
    from_jpy.onclick = function () {
        document.getElementById("from-select").value = 'JPY';
        from_rub.classList.remove('active');
        from_usd.classList.remove('active');
        from_jpy.classList.add('active');
        convertCurrency();
    }
    // Кнопки "Необходимо купить"
    var to_rub = document.getElementById("to-RUB");
    var to_usd = document.getElementById("to-USD");
    var to_jpy = document.getElementById("to-JPY");
    to_rub.onclick = function () {
        document.getElementById("to-select").value = 'RUB';
        to_rub.classList.add('active');
        to_usd.classList.remove('active');
        to_jpy.classList.remove('active');
        convertCurrency();
    }
    to_usd.onclick = function () {
        document.getElementById("to-select").value = 'USD';
        to_rub.classList.remove('active');
        to_usd.classList.add('active');
        to_jpy.classList.remove('active');
        convertCurrency();
    }
    to_jpy.onclick = function () {
        document.getElementById("to-select").value = 'JPY';
        to_rub.classList.remove('active');
        to_usd.classList.remove('active');
        to_jpy.classList.add('active');
        convertCurrency();
    }
    // КОНВЕРТЕР
    var xmlhttp = new XMLHttpRequest();
    var url = "https://api.exchangeratesapi.io/latest?symbols=" + from_valute + "," + to_valute;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        // парсер и конвретация
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var result = xmlhttp.responseText;
            var jsResult = JSON.parse(result);
            var oneUnit = jsResult.rates[to_valute] / jsResult.rates[from_valute];
            var from = document.getElementById("from").value;
            var to = document.getElementById("to").value = (oneUnit * from).toFixed(2);
        }
    }
}

















//PARSER 1 - - - Working - - -

// convert.onclick = function () {
//     var first_input = document.getElementById("first_input").value;
//     console.log(first_input * usd);
//     second_input.innerHTML = first_input / usd;

// }

// function converted(valueNum) {
//     document.getElementById("second_input").innerHTML = valueNum;
// }
// function exp() {
//     var getNum = document.getElementById('first_input').value;
//     console.log(getNum);
// }

// num_1.onclick = function () {
//     num_but = 1;
//     read();
//     exp();
// }

// num_2.onclick = function () {
//     num_but = 2;
//     read();
//     function col() {
//         var col = num_but;
//         console.log(col + 'hello');
//     }
//     col();
// }

// function read() {
//     if (num_but == 1) {
//         console.log(1);
//     }
//     else if (num_but == 2) {
//         console.log(2);
//     }
// }

// function CBR_XML_Daily_Ru(rates) {
//     var USDrate = rates.Valute.USD.Value.toFixed(4).replace('.', ',');
// }



