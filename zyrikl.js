function runner(e){let t=e.innerHTML,i=t.split(""),l=[];for(var n="",r=1,o=0;o<i.length;o++)";"===i[o]&&'"'!==i[o+1]&&i.splice(o,1),i[o]+i[o+1]===";;"&&i.splice(o,2),i[o]+i[o+1]+i[o+2]+i[o+3]==="    "&&i.splice(o,4),i[o]+i[o+1]+i[o+2]+i[o+3]+i[o+4]+i[o+6]+i[o+7]+i[o+8]==="        "&&i.splice(o,8);var h=0;let p=0;for(var s=p;s<i.length;s++){var a="";if("\n"===i[s]){for(var c=h;c<s;c++)a+=i[c];l.push(a),h=s+1}}function f(e,t,i){let l=i.split(" ");if(l[0]===e){let o=l[0].split(""),h=i.split(""),p=[];for(var s=o.length+1;s<h.length;s++)p.push(h[s]);var a="";p.splice(0,1),p.splice(p.length-1,1);for(var c=0;c<p.length;c++)a+=p[c];n+="<"+t+" id='line"+r.toString()+"'>"+a+"</"+t+`>
`}}function d(e,t,i){let l=t.split(" ");if(l[0]===e){let r=l[0].split(""),o=t.split(""),h=[];for(var p=r.length+1;p<o.length;p++)h.push(o[p]);var s="";h.splice(0,1),h.splice(h.length-1,1);for(var a=0;a<h.length;a++)s+=h[a];n+=s+i}}function $(e,t,i,l){let o=i.split(" ");if(o[0]===e){let h=o[0].split(""),p=i.split(""),s=[];for(var a=h.length+1;a<p.length;a++)s.push(p[a]);var c="",f="";s.splice(0,1),s.splice(s.length-1,1);for(var d=0,$=0,g=0;g<s.length;g++)" "===s[g]&&$<1&&(d=g,$+=1);for(var u=0;u<d;u++)c+=s[u];for(var _=d+2;_<s.length;_++)f+=s[_];n+="<"+t+" "+l+'="'+c+' id="line'+r.toString()+'">'+f+"</"+t+`>
`}}function g(e,t,i,l){let o=i.split(" ");if(o[0]===e){let h=o[0].split(""),p=i.split(""),s=[];for(var a=h.length+1;a<p.length;a++)s.push(p[a]);var c="";s.splice(0,1),s.splice(s.length-1,1);for(var f=0;f<s.length;f++)c+=s[f];n+="<"+t+" "+l+'="'+c+'"  id="line'+r.toString()+`" />
`}}function u(e,t,i){i===e&&(n+="<"+t+" id='line"+r.toString()+`' />
`)}function _(e,t,i){i==="BEGIN "+t&&(n+="<"+e+" id='line"+r.toString()+"' >"),i==="END "+t&&(n+="</"+e+`>
`)}for(var v="",b=0;b<l.length;b++)f("echo","p",v=l[b]),d("print",v,"<br />"),d("line",v,""),f("title","h1",v),f("header1","h2",v),f("header2","h3",v),f("header3","h4",v),f("header4","h5",v),f("header5","h6",v),f("HEAD","title",v),$("link","a",v,"href"),$("web_driver","iframe",v,"src"),g("img","img",v,"src"),u("line","hr",v),u("break","br",v),_("div","container",v),g("input_text","input type='text'",v,"placeholder"),g("input_password","input type='password'",v,"placeholder"),g("submit_button","input type='submit'",v,"value"),_("form","form",v),_("code","code_block",v),$("write","textarea",v,"placeholder"),f("code_block","code",v),_("h2","header",v),f("button","button",v),_("pre","mono",v),r++;e.insertAdjacentHTML("beforeend",`
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <style id="styling"></style>
    </head>
    <body>
        <style>
            h1 {font-size: 50pt;}
            h2 {font-size: 40pt;}
            h3 {font-size: 35pt;}
            h4 {font-size: 30pt;}
            h5 {font-size: 25pt;}
            h6 {font-size: 20pt;}
            iframe {width: 800px; height: 500px;}
            code {padding: 10px; background: black; color: white; display: inline-block; width: 60%;}
            zyrikl {display: none;}
        </style>`),e.insertAdjacentHTML("afterend",n+"</body></html>")}const inputval=document.querySelector("zyrikl");runner(inputval);
