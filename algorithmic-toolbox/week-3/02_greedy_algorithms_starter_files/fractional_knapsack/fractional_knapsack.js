function packBackpack(maxPackWeight, goods) {
    var backPack = [];
    var currentGoodItemIndex = 0;

    goods.sort(function (a, b) {
        return (b.value/b.weight) - (a.value/a.weight);
    });

    while (maxPackWeight > 0 && currentGoodItemIndex <= (goods.length-1)) {
        var good = goods[currentGoodItemIndex];
        var goodWeight;

        if (good.weight <= maxPackWeight) {
            goodWeight = good.weight;
        } else {
            goodWeight = maxPackWeight;
        }

        backPack.push({
            name: good.name,
            weight: goodWeight
        });

        maxPackWeight -= goodWeight;
        currentGoodItemIndex++;
    }

    return backPack;
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

    var stage = 0,
        firstString,
        numberOfItems,
        backPackCapacity,
        goods = [];

    function readLine(line) {
        if(stage === 0){
            firstString = line.toString().split(' ');

            numberOfItems = parseInt(firstString[0], 10);
            backPackCapacity = parseInt(firstString[1], 10);

            stage++;
        }else if(stage <= numberOfItems){
            var good = line.toString().split(' ');

            goods.push({
                name: 'Good number ' + stage,
                value: parseInt(good[0], 10),
                weight: parseInt(good[1], 10)
            });

            if(stage === numberOfItems){
                var packpack = packBackpack(backPackCapacity, goods);

                var totalValues = 0;

                packpack.forEach(function (good) {
                    var initialGood = goods.find(function (goodItem) {
                        return goodItem.name === good.name;
                    });

                    totalValues += (initialGood.value / initialGood.weight) * good.weight;
                });

                console.log(totalValues);
                process.exit();
            }

            stage++;
        }
    }
})();