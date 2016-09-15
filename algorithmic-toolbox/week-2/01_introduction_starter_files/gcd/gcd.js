function getGCD(n1, n2) {
    var gcd;

    if (n2 === 0) {
        gcd = n1;
    } else {
        gcd = getGCD(n2, n1 % n2);
    }

    return gcd;
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
        var n1 = parseInt(line.toString().split(' ')[0], 10);
        var n2 = parseInt(line.toString().split(' ')[1], 10);

        console.log(getGCD(n1, n2));

        process.exit();
    }
})();