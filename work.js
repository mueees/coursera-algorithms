function binarySearch(element, arr) {
    var left = 0;
    var right = arr.length;
    var middle;

    while (left < right) {
        middle = Math.floor((left + right) / 2);

        if (arr[middle] === element) {
            return middle;
        } else if (element < arr[middle]) {
            right = middle;
        } else {
            left = middle + 1;
        }
    }

    return -1;
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
        tempArray,
        arr = [],
        elements = [];

    function readLine(line) {
        if (stage === 0) {
            tempArray = line.toString().split(' ');
            tempArray.shift();

            tempArray.forEach(function (number) {
                arr.push(parseInt(number, 10));
            });

            stage++;
        } else if (stage === 1) {
            tempArray = line.toString().split(' ');
            tempArray.shift();

            tempArray.forEach(function (number) {
                elements.push(parseInt(number, 10));
            });

            var result = [];

            elements.forEach(function (element) {
                result.push(binarySearch(element, arr))
            });

            console.log(result.join(' '));

            process.exit();
        }
    }
})();