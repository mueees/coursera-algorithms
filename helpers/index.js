exports.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

exports.averageTime = function (testFn, repeatCount) {
    var times = [],
        startTime,
        endTime,
        sum = 0;

    for (var i = 0; i < repeatCount; i++) {
        startTime = new Date();

        testFn();

        endTime = new Date - startTime;

        times.push(endTime);

        console.log(endTime + ' ms / ' + i + ' test; ');
    }

    for (i = 0; i < times.length; i++) {
        sum += times[i];
    }

    console.log(sum / times.length + ' ms');
};

// stress testing
exports.stress = {
    CompareValues: CompareValues
};

function CompareValues(options) {
    this.options = options;
}

CompareValues.prototype = {
    approaches: [],
    
    run: function (count) {
        var statistics = {},
            executedResults = [],
            executedResult,
            startTime,
            approach,
            count = count || 10000000,
            runCount = 0;

        while (runCount < count) {
            var args = this.getArguments();

            for (var i = 0; i < this.approaches.length; i++) {
                startTime = new Date();

                approach = this.approaches[i];
                executedResult = approach.fn.apply(null, args);

                executedResults.push({
                    name: approach.name,
                    result: executedResult,
                    time: new Date() - startTime
                });
            }

            if (this.isResultsEqual(executedResults)) {
                for (i = 0; i < executedResults.length; i++) {
                    if (!statistics[executedResults[i].name]) {
                        statistics[executedResults[i].name] = {
                            name: executedResults[i].name,
                            times: []
                        };
                    }

                    statistics[executedResults[i].name].times.push(executedResults[i].time);
                }

                if (this.options.debug) {
                    console.log(runCount + ' ------------');
                    console.log('Arguments: ' + args);

                    this.printExecutedResults(executedResults);
                    this.printStatistic(statistics);

                    console.log('------------');
                }
            } else {
                console.log('Wrong answer');
                console.log('------------');
                console.log('Arguments: ' + args);

                this.printExecutedResults(executedResults);

                process.exit();
            }

            executedResults = [];
            runCount++;
        }

        console.log('Done');
        console.log('------------');
        this.printStatistic(statistics);

        process.exit();
    },

    printStatistic: function (statistics) {
        for (var approachName in statistics) {
            var sum = 0;

            for (var i = 0; i < statistics[approachName].times.length; i++) {
                sum += statistics[approachName].times[i];
            }

            var averageTime = sum / statistics[approachName].times.length;

            console.log(approachName + ' takes: ' + averageTime + ' ms');
        }
    },

    getArguments: function () {
        throw new Error('Implement getArguments function');
    },

    isResultsEqual: function (executedResults) {
        return Boolean(executedResults.reduce(function (a, b) {
            return (a.result === b.result) ? a : NaN;
        }))
    },

    printExecutedResults: function (executedResults) {
        for (var i = 0; i < executedResults.length; i++) {
            console.log(executedResults[i].name + ': ' + executedResults[i].result + ' / ' + executedResults[i].result + ' ms');
        }
    }
};