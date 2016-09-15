function changeMoney(n, coins) {
    var coinCount = 0;

    while (n > 0) {
        for (var i = 0; i < coins.length; i++) {
            var currentCoinCount = Math.floor(n / coins[i]);

            if (currentCoinCount >= 1) {
                coinCount += currentCoinCount;
                n -= currentCoinCount * coins[i];
                break;
            }
        }
    }

    return coinCount;
}

// debugger
/*(function () {
 console.log(changeMoney(12, [10, 5, 1]));
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

        console.log(changeMoney(number, [10, 5, 1]));
        process.exit();
    }
})();