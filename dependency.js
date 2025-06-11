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
        var newAskSemicolon = "";
        var askSemicolon = string[string.length-1];
        var askSemicolonList = askSemicolon.split("");
        if (askSemicolon[askSemicolon.length-1] === `;`) {
            askSemicolonList.splice(askSemicolonList.length-1,1);
        }
        for (var a = 0; a < askSemicolonList.length; a++) {
            newAskSemicolon += askSemicolonList[a];
        }
        string[string.length-1] = newAskSemicolon;

        if (string[0] === keyword) {
            var inside = string[1];
            var insideList = inside.split("");
            insideList.splice(0, 1);
            insideList.splice(insideList.length-1, 1);
            inside = "";
            for (var b = 0; b < insideList.length; b++) {
                inside += insideList[b];
            }
            htmlWebOutput += `<${element}>${inside}</${element}>`;
        }
    }

    function openElement2(element, attribute, keyword, string) {
        var newAskSemicolon = "";
        var askSemicolon = string[string.length-1];
        var askSemicolonList = askSemicolon.split("");
        if (askSemicolon[askSemicolon.length-1] === `;`) {
            askSemicolonList.splice(askSemicolonList.length-1,1);
        }
        for (var a = 0; a < askSemicolonList.length; a++) {
            newAskSemicolon += askSemicolonList[a];
        }
        string[string.length-1] = newAskSemicolon;

        if (string[0] === keyword) {
            var inside = string[2];
            var insideList = inside.split("");
            insideList.splice(0, 1);
            insideList.splice(insideList.length-1, 1);
            inside = "";
            for (var b = 0; b < insideList.length; b++) {
                inside += insideList[b];
            }
            htmlWebOutput += `<${element} ${attribute}=${string[1]}>${inside}</${element}>`;
        }
    }

    function openBeginEnd(element, keyword, string) {
        var newAskSemicolon = "";
        var askSemicolon = string[string.length-1];
        var askSemicolonList = askSemicolon.split("");
        if (askSemicolon[askSemicolon.length-1] === `;`) {
            askSemicolonList.splice(askSemicolonList.length-1,1);
        }
        for (var a = 0; a < askSemicolonList.length; a++) {
            newAskSemicolon += askSemicolonList[a];
        }
        string[string.length-1] = newAskSemicolon;

        if (string[0] === `BEGIN`) {
            if (string[1] === keyword) {
                htmlWebOutput += `<${element}>`;
            }
        }
        if (string[0] === `END`) {
            if (string[1] === keyword) {
                htmlWebOutput += `</${element}>`;
            }
        }
    }

    function singleLine(keyword, string) {
        if (string[0] === keyword) {
            var inside = string[1];
            var insideList = inside.split("");
            insideList.splice(0, 1);
            if (inside[inside.length-1] === ";") {
                insideList.splice(insideList.length-2, 2);
            } else {
                insideList.splice(insideList.length-1, 1);
            }
            inside = "";
            for (var b = 0; b < insideList.length; b++) {
                inside += insideList[b];
            }
            htmlWebOutput += `${inside}`;
        }
    }

    for (var a = 0; a < linesList.length; a++) {
        lineSplit = findArgs(linesList[a]);
        singleLine("echo", lineSplit);

        openElement1("p", "paragraph", lineSplit);
        openElement1("strong", "bold", lineSplit);
        openElement1("em", "italic", lineSplit);

        openBeginEnd("p", "paragraph", lineSplit);
        openBeginEnd("strong", "bold", lineSplit);
        openBeginEnd("em", "italic", lineSplit);
    }
    prototype.innerHTML = htmlWebOutput;
}
runner(document.querySelector("zyrikl"));