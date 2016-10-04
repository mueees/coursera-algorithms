function maximizeNumbers(n) {
    var numbers = [];
    var currentNumber = 1;

    while (n > 0) {
        if (2 * currentNumber < n) {
            numbers.push(currentNumber);

            n -= currentNumber;
            currentNumber++;
        } else {
            numbers.push(n);
            n = 0;
        }
    }

    return numbers;
}

// submit
(function () {
    var readline = require('readline');

    process.stdin.setEncoding('utf8');

    var rl = readline.createInterface({
        input: process.stdin,
        terminal: false
    });

    rl.on('line', readLine);

    function readLine(line) {
        var number = parseInt(line.toString(), 10);
        var numbers = maximizeNumbers(number);

        console.log(numbers.length);
        console.log(numbers.join(' ') + ' ');

        process.exit();
    }
})();