/*
Copyright (C) 2025, Zyrikl, Inc. This software may not be used without permission from the 
authors. Permission may be granted from Charles Wang (Zyrikl). This software is provided
as is, and any changes made to the original content is not allowed. Usage of this script
is provided under Github User Content and jsDelivr.

Zyrikl v.1.1.0
*/
function runner(prototype) {
    var line = 0;
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
            htmlWebOutput += `<${element} id="line_${line}">${inside}</${element}>`;
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
            htmlWebOutput += `<${element} ${attribute}=${string[1]} id="line_${line}">${inside}</${element}>`;
        }
    }

    function openBeginEnd1(element, keyword, string) {
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
                htmlWebOutput += `<${element} id="line_${line}">`;
            }
        }
        if (string[0] === `END`) {
            if (string[1] === keyword) {
                htmlWebOutput += `</${element}>`;
            }
        }
    }

    function openBeginEnd2(element, attribute, keyword, string) {
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
                htmlWebOutput += `<${element} ${attribute}=${string[2]} id="line_${line}">`;
            }
        }
        if (string[0] === `END`) {
            if (string[1] === keyword) {
                htmlWebOutput += `</${element}>`;
            }
        }
    }

    function closedTag1(element, keyword, string) {
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
            htmlWebOutput += `<${element} id="line_${line}"/>`;
        }
    }

    function closedTag2(element, attribute, keyword, string) {
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
            htmlWebOutput += `<${element} ${attribute}=${string[1]} id="line_${line}"/>`;
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
        line++;
        lineSplit = findArgs(linesList[a]);
        singleLine("echo", lineSplit);

        openElement1("p", "paragraph", lineSplit);
        openElement1("strong", "bold", lineSplit);
        openElement1("em", "italic", lineSplit);
        openElement1("title", "HEAD", lineSplit);
        openElement1("h1", "title", lineSplit);
        openElement1("h2", "header_1", lineSplit);
        openElement1("h3", "header_2", lineSplit);
        openElement1("h4", "header_3", lineSplit);
        openElement1("h5", "header_4", lineSplit);
        openElement1("h6", "header_5", lineSplit);
        openElement1("li", "list_entry", lineSplit);
        openElement1("code", "code_block", lineSplit);
        openElement1("pre", "mono", lineSplit);
        openElement1("button", "button", lineSplit);

        openElement2("a", "href", "link", lineSplit);
        openElement2("iframe", "src", "web_driver", lineSplit);
        openElement2("textarea", "placeholder", "write", lineSplit);

        openBeginEnd1("p", "paragraph", lineSplit);
        openBeginEnd1("strong", "bold", lineSplit);
        openBeginEnd1("em", "italic", lineSplit);
        openBeginEnd1("ul", "bulleted_list", lineSplit);
        openBeginEnd1("div", "container", lineSplit);
        openBeginEnd1("code", "code_block", lineSplit);
        openBeginEnd1("pre", "mono", lineSplit);
        openBeginEnd1("button", "button", lineSplit);

        openBeginEnd2("a", "href", "link", lineSplit)
        openBeginEnd2("ol", "type", "ordered_list", lineSplit);

        closedTag1("br", "enter", lineSplit);
        closedTag1("hr", "line", lineSplit);

        closedTag2("img", "src", "image", lineSplit);
        closedTag2("input type='text'", "placeholder", "input_text", lineSplit);
        closedTag2("input type='password'", "placeholder", "input_password", lineSplit);
        closedTag2("input type='submit'", "placeholder", "submit_button", lineSplit);
        closedTag2("link rel='stylesheet'", "href", "IMPORT", lineSplit);
    }
    requiredHTML1 = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Zyrikl Website</title>
        <style>
            h1 {
                font-size: 70pt;
            }
            h2 {
                font-size: 60pt;
            }
            h3 {
                font-size: 50pt;
            }
            h4 {
                font-size: 40pt;
            }
            h5 {
                font-size: 30pt;
            }
            h6 {
                font-size: 20pt;
            }
        </style>
    </head>
    <body>`;
    requiredHTML2 = `
    </body>
</html>`;
    prototype.insertAdjacentHTML("beforebegin", requiredHTML1);
    prototype.insertAdjacentHTML("afterend", requiredHTML2);
    prototype.innerHTML = htmlWebOutput;
}
runner(document.querySelector("zyrikl"));