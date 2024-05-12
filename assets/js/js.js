let number1 = 0;
let number2 = 0;
let symbol = null;


$('.number').click(function () {
    appendToDisplay($(this).text());
})

function appendToDisplay(value) {
    $('#display-input').val($('#display-input').val() + value);
}



$('.symbol').click(function () {
    number1 = $('#display-input').val();
    $('#display-input').val("");
    symbol = $(this).text();
})

$('#btn-c').on('click', () => {
    $('#display-input').val("")
})

$('.equal').click(function () {
    number2 = $('#display-input').val();
    if (symbol === '+') {
        $('#display-input').val((+number1) + (+number2));
    } else if (symbol === '-') {
        $('#display-input').val((+number1) - (+number2));
    } else if (symbol === '*') {
        $('#display-input').val((+number1) * (+number2));
    } else if (symbol === '/') {
        $('#display-input').val((+number1) / (+number2));
    }
});



