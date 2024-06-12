let numbers = [];
let operators = [];

$('.number').click(function () {
    appendToDisplay($(this).text());
});

function appendToDisplay(value) {
    $('#display-input').val($('#display-input').val() + value);
}

$('.symbol').click(function () {
    let currentValue = $('#display-input').val();
    numbers.push(currentValue);
    operators.push($(this).text());
    $('#symbol-display').val($(this).text())
    $('#display-input').val(""); // Clear display for next number input
});

$('#btn-c').on('click', () => {
    $('#display-input').val("");
    $('#symbol-display').val("")
    numbers = [];
    operators = [];
});

$('.equal').click(function () {
    let currentValue = $('#display-input').val();
    numbers.push(currentValue);

    // Perform calculations in sequence
    let result = parseFloat(numbers[0]);
    for (let i = 0; i < operators.length; i++) {
        let nextNumber = parseFloat(numbers[i + 1]);
        if (operators[i] === '+') {
            result += nextNumber;
        } else if (operators[i] === '-') {
            result -= nextNumber;
        } else if (operators[i] === 'x') {
            result *= nextNumber;
        } else if (operators[i] === '/') {
            result /= nextNumber;
        }
    }

    $('#display-input').val(result);
    numbers = [];
    operators = [];
});

$('#btn-x').click(function () {
    let currentValue = $('#display-input').val();
    if (currentValue.length > 0) {
        $('#display-input').val(currentValue.slice(0, -1));
    }
});
