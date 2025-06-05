function findArgs(string) {
    var uncompress = string.split("");
    var uncompressNew = "";
    var spacesBefore = 0;
    var stringSaver = [];
    var bannedSpace = [];
    var stringAppearance = ['"', "'", "`"];
    if (uncompress[0] === " ") {
        var spacesBefore = 1;
        for (var f = 1; f < uncompress.length; f++) {
            if (uncompress[f] === " ") {
                if (uncompress[f-1] === " ") {
                    spacesBefore++;
                }
            }
        }
    }
    uncompress.splice(0, spacesBefore);
    for (var a = 0; a < uncompress.length; a++) {
        for (var b = 0; b < stringAppearance.length; b++) {
            if (uncompress[a] === stringAppearance[b]) {
                stringSaver.push(a);
            }
        }
    }
    
    for (var c = 0; c < stringSaver.length; c+=2) {
        for (var d = stringSaver[c]-1; d < stringSaver[c+1]+1; d++) {
            bannedSpace.push(d);
        }
    }
    for (var e = 0; e < uncompress.length; e++) {
        if (bannedSpace.includes(e) !== true) {
            if (uncompress[e] === " ") {
                uncompress.splice(e, 1);
            }
            if (uncompress[e] === ";") {
                uncompress.splice(e, 1);
            }
        }
    }
    for (var g = 0; g < uncompress.length; g++) {
        uncompressNew += uncompress[g];
    }
    return uncompressNew;
}
alert(findArgs("    456 '9012 4;6' 'test test test';"))