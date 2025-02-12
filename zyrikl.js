function runner(input) {
    const getvalue = input.innerHTML;
    const getvaluelist = getvalue.split("");
    const lines = [];
    var k = 1;

    for (var i = 0; i < getvaluelist.length; i++) {
        if (getvaluelist[i] === "\n") {
            getvaluelist.splice(i, 1);
        }
        if (getvaluelist[i]+getvaluelist[i+1] === "\n\n") {
            getvaluelist.splice(i, 1);
        }
    }
    
    var wordstart = 0;
    const t = 0;

    for (var g = t; g < getvaluelist.length; g++) {
        var prepareword = "";
        if (getvaluelist[g] === ";") {
            for (var j = wordstart; j < g; j++) {
                prepareword = prepareword + getvaluelist[j];
            }
            lines.push(prepareword);
            wordstart = g + 1;
        }
    }

    const finalresult = "";

    function keyWordOneArg(keyword, element, text) {
        const d = text.split(" ");
        if (d[0] === keyword) {
            const keyworddetected = d[0].split("");
            const newd = text.split("");
            const newr = [];
            for (var p = keyworddetected.length+1; p < newd.length; p++) {
                newr.push(newd[p]);
            }
            var newd1 = "";
            newr.splice(0, 1);
            newr.splice(newr.length-1, 1);
            for (var q = 0; q < newr.length; q++) {
                newd1 = newd1 + newr[q];
            }
            input.innerHTML = input.innerHTML + "<"+element+" id='line"+k.toString()+"'>"+newd1+"</"+element+">";
        }
    }

    function keyWordTwoArg(keyword, element, text, src) {
        const d = text.split(" ");
        if (d[0] === keyword) {
            const keyworddetected = d[0].split("");
            const newd = text.split("");
            const newr = [];
            for (var p = keyworddetected.length+1; p < newd.length; p++) {
                newr.push(newd[p]);
            }
            var newd1 = "";
            var newd2 = "";
            newr.splice(0, 1);
            newr.splice(newr.length-1, 1);
            var savelink = 0;
            var firstz = 0;
            for (var z = 0; z < newr.length; z++) {
                if (newr[z] === " ") {
                    if (firstz < 1) {
                        savelink = z;
                        firstz += 1;
                    } else {
                        z = z;
                    }
                }
            }
            for (var q = 0; q < savelink; q++) {
                newd1 = newd1 + newr[q];
            }
            for (var x = savelink+2; x < newr.length; x++) {
                newd2 = newd2 + newr[x];
            }
            input.innerHTML = input.innerHTML + "<"+element+" "+src+'="'+newd1+' id="line'+k.toString()+'">'+newd2+"</"+element+">";
        }
    }

    function closedTag(keyword, element, text, src) {
        const d = text.split(" ");
        if (d[0] === keyword) {
            const keyworddetected = d[0].split("");
            const newd = text.split("");
            const newr = [];
            for (var p = keyworddetected.length+1; p < newd.length; p++) {
                newr.push(newd[p]);
            }
            var newd1 = "";
            var newd2 = "";
            newr.splice(0, 1);
            newr.splice(newr.length-1, 1);
            var savelink = 0;
            for (var z = 0; z < newr.length; z++) {
                if (newr[z] === " ") {
                    savelink = z;
                }
            }
            for (var q = 0; q < savelink; q++) {
                newd1 = newd1 + newr[q];
            }
            for (var x = savelink+2; x < newr.length; x++) {
                newd2 = newd2 + newr[x];
            }
            input.innerHTML = input.innerHTML + "<"+element+" "+src+'="'+newd1+'"  id="line'+k.toString()+'" />';
        }
    }

    function noArg(keyword, element, text) {
        if (text === keyword) {
            input.innerHTML = input.innerHTML + "<"+element+" id='line"+k.toString()+"' />";
        }
    }

    function begin(element, keyword, text) {
        if (text === "BEGIN "+keyword) {
            input.innerHTML = input.innerHTML + "<"+element+" id='line"+k.toString()+"' >";
        }
    }

    function end(element, keyword, text) {
        if (text === "END "+keyword) {
            input.innerHTML = input.innerHTML + "</ "+element+">";
        }
    }
    
    var lineskeyword = "Zyrikl Website";

    input.innerHTML = `
    <head>
        <meta charset="utf-8 />
        <title>`+lineskeyword+`</title>
        <style id="styling"></style>
    </head>
    <body>`;

    var changelinesh = "";

    for (var h = 0; h < lines.length; h++) {
        changelinesh = lines[h];
        changelinesharray = changelinesh.split("");
        for (var findindent = 0; findindent < changelinesharray.length(); findindent++) {
            if (changelinesharray[findindent] === "\n") {
                changelinesharray.splice(findindent, 1);
            }
            if (changelinesharray[0] === " ") {
                changelinesharray.splice(0, 4);
            }
        }
        for (var fixlinesh = 0; fixlinesh < changelinesharray.length(); fixlinesh++) {
            changelinesh = changelinesh + changelinesharray[fixlinesh];
        }
        keyWordOneArg("echo", "p", changelinesh);
        keyWordOneArg("print", "p", changelinesh);
        keyWordOneArg("title", "h1", changelinesh);
        keyWordOneArg("header1", "h2", changelinesh);
        keyWordOneArg("header2", "h3", changelinesh);
        keyWordOneArg("header3", "h4", changelinesh);
        keyWordOneArg("header4", "h5", changelinesh);
        keyWordOneArg("header5", "h6", changelinesh);
        keyWordOneArg("HEAD", "title", changelinesh);
        keyWordTwoArg("link", "a", changelinesh, "href");
        keyWordTwoArg("webdriver", "iframe", changelinesh, "src");
        closedTag("img", "img", changelinesh, "src");
        noArg("line", "hr", changelinesh);
        noArg("break", "br", changelinesh);
        begin("div", "container", changelinesh);
        end("div", "container", changelinesh);
        closedTag("input", "input", changelinesh, "type");
        begin("form", "form", changelinesh);
        end("form", "form", changelinesh);
        keyWordOneArg("write", "textarea", changelinesh);
        keyWordOneArg("codeblock", "code", changelinesh);
        k++;
    }
    input.innerHTML = input.innerHTML + "</body>";
}
const inputval = document.getElementById("zyrikl");
runner(inputval);
