function fibonacciNaive(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacciNaive(n - 1) + fibonacciNaive(n - 2);
    }
}

function fibonacciFast(n) {
    var numbers = new Array(n),
        value,
        result;

    if (n <= 1) {
        result = n;
    } else {
        numbers = [0, 1];

        for (var i = 2; i <= n; i++) {
            value = numbers[i - 1] + numbers[i - 2];

            numbers[i] = value;
        }

        result = numbers[numbers.length - 1];
    }

    return result;
}

// debugger
/*(function () {
 var helpers = require('helpers');

 var compareEngine = new helpers.stress.CompareValues({
 debug: false
 });

 compareEngine.getArguments = function () {
 return [helpers.getRandomInt(0, 50)];
 };

 compareEngine.approaches.push({
 name: 'fibonacciNaive',
 fn: fibonacciNaive
 });

 compareEngine.approaches.push({
 name: 'fibonacciFast',
 fn: fibonacciFast
 });

 compareEngine.run(5000);
 })();*/

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

        console.log(fibonacciFast(number));
        process.exit();
    }
})();