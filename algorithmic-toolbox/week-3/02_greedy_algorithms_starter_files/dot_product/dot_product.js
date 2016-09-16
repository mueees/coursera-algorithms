function getMaxRevenue(clicks, prices) {
    var revenue = 0;

    clicks.sort(function(a, b){ return a - b});
    prices.sort(function(a, b){ return a - b});

    for(var i = 0; i < clicks.length; i++){
        revenue += clicks[i] * prices[i];
    }

    return revenue;
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
        clicks = [],
        prices = [];

    function readLine(line) {
        switch(stage){
            case 0:
                stage++;

                break;
            case 1:
                var arr = line.toString().split(' ');

                arr.forEach(function (number) {
                    clicks.push(parseInt(number, 10));
                });

                stage++;
                break;
            case 2:
                var arr = line.toString().split(' ');

                arr.forEach(function (number) {
                    prices.push(parseInt(number, 10));
                });

                console.log(getMaxRevenue(clicks, prices));

                process.exit();

                break;
        }
    }
})();