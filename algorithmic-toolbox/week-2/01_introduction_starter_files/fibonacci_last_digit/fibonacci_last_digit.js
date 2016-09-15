function getFibonacciLastDigit(n) {
    var result;

    if (n <= 1) {
        result = n;
    } else {
        var current = 1;
        var previous = 0;
        var tmp_previous;

        for (var i = 1; i < n; i++) {
            tmp_previous = previous;
            previous = current;
            current = (tmp_previous + current) % 10;
        }

        result = current;
    }

    return result;
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

        console.log(getFibonacciLastDigit(number));

        process.exit();
    }
})();
