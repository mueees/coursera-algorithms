function getPoints(segments) {
    var result = {
        totalPoints: 0,
        points: []
    };

    segments.sort(function (a, b) {
        return a.end - b.end;
    });

    while(segments[0]){
        var firstSegment = segments[0];
        var similarSegments = [firstSegment];

        segments.splice(0, 1);

        var i = segments.length;

        while (i--) {
            if(segments[i].start <= firstSegment.end){
                similarSegments.push(segments[i]);

                segments.splice(i, 1);
            }
        }

        result.totalPoints++;
        result.points.push(similarSegments[0].end);
    }

    return result;
}

getPoints([
    {
        start: 2,
        end: 5
    },
    {
        start: 1,
        end: 4
    }
]);

/*
 3
 1 3
 2 5
 3 6
 * */

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
        countOfSegments = 0,
        segments = [];

    function readLine(line) {
        if(stage === 0){
            countOfSegments = parseInt(line.toString(), 10);

            stage++;
        } else if(stage <= countOfSegments){
            var segment = line.toString().split(' ');

            segments.push({
                start: parseInt(segment[0], 10),
                end: parseInt(segment[1], 10)
            });

            if(stage === countOfSegments){
                var result = getPoints(segments);

                console.log(result.totalPoints);
                console.log(result.points.join(' '));

                process.exit();
            }

            stage++;
        }
    }
})();