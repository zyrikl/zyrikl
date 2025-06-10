function runner(prototype) {
    htmlWebOutput = "";

    function findArgs(string) {
        var types = ["'", '"', "`"];
        var identify = [];
        var mustSpace = [];
        var uncompress = string.split("");
        var annotatedLine = "";
        // Get rid of any indents
        if (uncompress[0] === " ") {
            var spacesBefore = 1;
            for (var a = 1; a < uncompress.length; a++) {
                if (uncompress[a] === " ") {
                    if (uncompress[a-1] === " ") {
                        spacesBefore++;
                    }
                }
            }
        }
        uncompress.splice(0, spacesBefore);

        // Identify spaces to be converted
        for (var b = 0; b < uncompress.length; b++) {
            for (var c = 0; c < types.length; c++) {
                if (uncompress[b] === types[c]) {
                    identify.push(b);
                }
            }
        }
        for (var c = 0; c < identify.length; c+=2) {
            for (var d = identify[c]; d < identify[c+1]; d++) {
                mustSpace.push(d);
            }
        }
        for (var e = 0; e < uncompress.length; e++) {
            if (uncompress[e] === " ") {
                if (mustSpace.includes(e) === true) {
                    uncompress[e] = "&nbsp;";
                }
            }
        }
        for (var f = 0; f < uncompress.length; f++) {
            annotatedLine += uncompress[f];
        }
        uncompress = annotatedLine.split(" ");

        return uncompress;
    }
    var zyriklCode = prototype.innerHTML;
    var linesList = zyriklCode.split("\n");
    var lineSplit = [];

    function openElement1(element, keyword, string) {
        /* if (string[0] === keyword) {
            var returnString = "";
            var stringList = string.split("");
            stringList.splice(0, 1);
            stringList.splice(stringList.length-1, 1);
            for (var a = 0; a < stringList.length; a++) {
                returnString += stringList[a];
            } */
            htmlWebOutput = htmlWebOutput + `<`+element+`>`+string[1]+`</`+element+`>`;
        // }
    }

    for (var a = 0; a < linesList.length; a++) {
        lineSplit = findArgs(linesList[a]);
        openElement1("p", "echo", lineSplit);
    }
    alert(htmlWebOutput);
    prototype.innerHTML = htmlWebOutput;
}
runner(document.querySelector("zyrikl"));
