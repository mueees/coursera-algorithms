function getMaxNumber(numbers) {
    numbers.sort(function (num1, num2) {
        return getFirstNum(num2) - getFirstNum(num1);
    });

    return Number(numbers.join(''));
}

function getFirstNum(number) {
    return Number(number.toExponential(0)[0]);
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

    var stage = 0,
        numbers = [];

    function readLine(line) {
        if (stage === 0) {
            stage++;
        } else if (stage === 1) {
            var arr = line.toString().split(' ');

            arr.forEach(function (number) {
                numbers.push(parseInt(number, 10));
            });

            console.log(getMaxNumber(numbers));

            process.exit();
        }
    }
})();