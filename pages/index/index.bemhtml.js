var BEMHTML = function (c){
l18520: {
l18510: {
l18509: {
l18506: {
l18502: {
l18499: {
l18498: {
l18462: {
l18459: {
l18455: {
l18452: {
l18441: {
l18381: {
l18100: {
l18083: {
l17995: {
l17870: {
l17812: {
l17427: {
l17416: {
l16940: {
l16731: {
l16691: {
l16689: {
l16680: {
l16677: {
/*15461*/switch(this["block"]) {
case "b-text":
/*15462*/if((! this["elem"]) === false) {
/*15463*/switch(this["_mode"]) {
case "tag":
/*15464*/return this["ctx"]["elem"];return;; break;
case "content":
break l18381;; break;
case "attrs":
break l18459;; break;
case "js":
break l18459;; break;
case "mix":
break l18459;; break;
case "default":
break l18452;; break;
case "bem":
break l18459;; break;
case "jsAttr":
break l18459;; break;
case "cls":
break l18459;; break;default: break l18462;}
} else {
break l18498;}; break;
case "b-link":
/*15525*/switch(this["elem"]) {
case "inner":
/*15526*/switch(this["_mode"]) {
case "tag":
/*15527*/return "span";return;; break;
case "content":
/*15528*/if((! this["mods"]["pseudo"]) === false) {
break l16680;} else {
break l18381;}; break;
case "attrs":
/*15541*/if((! this["mods"]["pseudo"]) === false) {
break l16689;} else {
break l16691;}; break;
case "js":
/*15554*/if((! this["mods"]["pseudo"]) === false) {
break l17427;} else {
break l18459;}; break;
case "mix":
break l18459;; break;
case "default":
break l18452;; break;
case "bem":
break l18459;; break;
case "jsAttr":
break l18459;; break;
case "cls":
break l18459;; break;default: break l18462;}
; break;
case "close":
break l16677;; break;
case "content":
break l16677;; break;
case "opener":
break l16677;; break;
case "favicon":
break l16677;; break;
case "js":
break l16677;; break;
case "css":
break l16677;; break;
case "meta":
break l16677;; break;
case "body":
break l16677;; break;
case "head":
break l16677;; break;
case "core":
break l16677;; break;default: break l16677;}
; break;
case "b-cut":
/*16786*/switch(this["elem"]) {
case "inner":
break l17416;; break;
case "close":
/*16850*/switch(this["_mode"]) {
case "tag":
/*16851*/return "i";return;; break;
case "content":
break l18381;; break;
case "attrs":
break l18459;; break;
case "js":
break l16940;; break;
case "mix":
break l18459;; break;
case "default":
break l18452;; break;
case "bem":
break l18459;; break;
case "jsAttr":
break l18459;; break;
case "cls":
break l18459;; break;default: break l18462;}
; break;
case "content":
/*16891*/switch(this["_mode"]) {
case "tag":
break l18459;; break;
case "content":
/*16895*/return [({"elem": "close"}),this["ctx"]["content"]];return;; break;
case "attrs":
break l18459;; break;
case "js":
break l16940;; break;
case "mix":
/*16904*/return [({"block": "b-cut","js": (this["ctx"]["js"] || this["_bCutJs"])})];return;; break;
case "default":
break l18452;; break;
case "bem":
break l18459;; break;
case "jsAttr":
break l18459;; break;
case "cls":
break l18459;; break;default: break l18462;}
; break;
case "opener":
/*16930*/switch(this["_mode"]) {
case "tag":
break l18459;; break;
case "content":
break l18381;; break;
case "attrs":
break l18459;; break;
case "js":
break l16940;; break;
case "mix":
break l18459;; break;
case "default":
/*16948*/if((! (! this["ctx"]["_wrap"])) === false) {
/*16949*/{var __o41 = this,__v41 = __o41["_mode"];(__o41["_mode"]="");var __o42 = this,__v42 = __o42["ctx"];(__o42["ctx"]=({"block": "b-link","mix": [({"block": "b-cut","elem": "opener","elemMods": ({"visibility": "visible"})})],"mods": ({"pseudo": "yes"}),"content": this["ctx"]["content"]}));this.apply();(__o42["ctx"]=__v42);(__o41["_mode"]=__v41)};return;} else {
break l18452;}; break;
case "bem":
break l18459;; break;
case "jsAttr":
break l18459;; break;
case "cls":
break l18459;; break;default: break l18462;}
; break;
case "favicon":
break l17416;; break;
case "js":
break l17416;; break;
case "css":
break l17416;; break;
case "meta":
break l17416;; break;
case "body":
break l17416;; break;
case "head":
break l17416;; break;
case "core":
break l17416;; break;default: break l17416;}
; break;
case "b-page":
/*17479*/switch(this["elem"]) {
case "inner":
break l18083;; break;
case "close":
break l18083;; break;
case "content":
break l18083;; break;
case "opener":
break l18083;; break;
case "favicon":
/*17732*/switch(this["_mode"]) {
case "tag":
break l17812;; break;
case "content":
break l18381;; break;
case "attrs":
/*17737*/return ({"rel": "shortcut icon","href": this["ctx"]["url"]});return;; break;
case "js":
break l18459;; break;
case "mix":
break l18459;; break;
case "default":
break l17995;; break;
case "bem":
break l18455;; break;
case "jsAttr":
break l18459;; break;
case "cls":
break l18459;; break;default: break l18462;}
; break;
case "js":
/*17769*/switch(this["_mode"]) {
case "tag":
break l18441;; break;
case "content":
break l18381;; break;
case "attrs":
/*17774*/if((! this["ctx"]["url"]) === false) {
/*17775*/return ({"src": this["ctx"]["url"]});return;} else {
break l18459;}; break;
case "js":
break l18459;; break;
case "mix":
break l18459;; break;
case "default":
break l17995;; break;
case "bem":
break l18455;; break;
case "jsAttr":
break l18459;; break;
case "cls":
break l18459;; break;default: break l18462;}
; break;
case "css":
/*17810*/if((! this["ctx"]["url"]) === false) {
/*17811*/switch(this["_mode"]) {
case "tag":
break l17812;; break;
case "content":
break l18381;; break;
case "attrs":
/*17816*/return ({"rel": "stylesheet","href": this["ctx"]["url"]});return;; break;
case "js":
break l18459;; break;
case "mix":
break l18459;; break;
case "default":
break l17870;; break;
case "bem":
break l18455;; break;
case "jsAttr":
break l18459;; break;
case "cls":
break l18459;; break;default: break l18462;}
} else {
/*17856*/switch(this["_mode"]) {
case "tag":
/*17857*/return "style";return;; break;
case "content":
break l18381;; break;
case "attrs":
break l18459;; break;
case "js":
break l18459;; break;
case "mix":
break l18459;; break;
case "default":
break l17870;; break;
case "bem":
break l18455;; break;
case "jsAttr":
break l18459;; break;
case "cls":
break l18459;; break;default: break l18462;}
}; break;
case "meta":
/*17903*/switch(this["_mode"]) {
case "tag":
/*17904*/return "meta";return;; break;
case "content":
break l18381;; break;
case "attrs":
/*17908*/return this["ctx"]["attrs"];return;; break;
case "js":
break l18459;; break;
case "mix":
break l18459;; break;
case "default":
break l17995;; break;
case "bem":
break l18455;; break;
case "jsAttr":
break l18459;; break;
case "cls":
break l18459;; break;default: break l18462;}
; break;
case "body":
/*17940*/switch(this["_mode"]) {
case "tag":
/*17941*/return "body";return;; break;
case "content":
break l18381;; break;
case "attrs":
break l18459;; break;
case "js":
break l18459;; break;
case "mix":
break l18459;; break;
case "default":
break l17995;; break;
case "bem":
break l18459;; break;
case "jsAttr":
break l18459;; break;
case "cls":
break l18459;; break;default: break l18462;}
; break;
case "head":
/*17981*/switch(this["_mode"]) {
case "tag":
/*17982*/return "head";return;; break;
case "content":
break l18381;; break;
case "attrs":
break l18459;; break;
case "js":
break l18459;; break;
case "mix":
break l18459;; break;
case "default":
break l17995;; break;
case "bem":
break l18455;; break;
case "jsAttr":
break l18459;; break;
case "cls":
break l18459;; break;default: break l18462;}
; break;
case "core":
break l18083;; break;default: break l18083;}
; break;
case "i-jquery":
/*18146*/switch(this["elem"]) {
case "inner":
break l18498;; break;
case "close":
break l18498;; break;
case "content":
break l18498;; break;
case "opener":
break l18498;; break;
case "favicon":
break l18498;; break;
case "js":
break l18498;; break;
case "css":
break l18498;; break;
case "meta":
break l18498;; break;
case "body":
break l18498;; break;
case "head":
break l18498;; break;
case "core":
/*18377*/switch(this["_mode"]) {
case "tag":
break l18459;; break;
case "content":
break l18381;; break;
case "attrs":
break l18459;; break;
case "js":
break l18459;; break;
case "mix":
break l18459;; break;
case "default":
/*18393*/{var __o31 = this,__v31 = __o31["_mode"];(__o31["_mode"]="");var __o32 = this,__v32 = __o32["ctx"];(__o32["ctx"]=({"block": "b-page","elem": "js","url": "//yandex.st/jquery/1.6.2/jquery.min.js"}));this.apply();(__o32["ctx"]=__v32);(__o31["_mode"]=__v31)};return;; break;
case "bem":
break l18459;; break;
case "jsAttr":
break l18459;; break;
case "cls":
break l18459;; break;default: break l18462;}
; break;default: break l18498;}
; break;
case "i-ua":
/*18439*/if((! (! this["elem"])) === false) {
/*18440*/switch(this["_mode"]) {
case "tag":
break l18441;; break;
case "content":
/*18442*/return [";(function(d,e,c){","e=d.documentElement;","c=\"className\";","r=\"replace\";","e[c]=e[c][r](\"i-ua_js_no\",\"i-ua_js_yes\");","if(d.compatMode!=\"CSS1Compat\")","e[c]=e[c][r](\"i-ua_css_standard\",\"i-ua_css_quirks\")","})(document);"].join("");return;; break;
case "attrs":
break l18459;; break;
case "js":
break l18459;; break;
case "mix":
break l18459;; break;
case "default":
break l18452;; break;
case "bem":
break l18455;; break;
case "jsAttr":
break l18459;; break;
case "cls":
break l18459;; break;default: break l18462;}
} else {
break l18498;}; break;default: break l18498;}
}/*16677*/if((! this["mods"]["pseudo"]) === false) {
/*16678*/switch(this["_mode"]) {
case "tag":
/*16679*/return (this["ctx"]["url"]?"a":"span");return;; break;
case "content":
break l16680;; break;
case "attrs":
break l16689;; break;
case "js":
break l17427;; break;
case "mix":
break l18459;; break;
case "default":
break l18452;; break;
case "bem":
break l18459;; break;
case "jsAttr":
break l18459;; break;
case "cls":
break l18459;; break;default: break l18462;}
} else {
/*16725*/if((! (! this["elem"])) === false) {
/*16726*/switch(this["_mode"]) {
case "tag":
/*16727*/return "a";return;; break;
case "content":
break l18381;; break;
case "attrs":
break l16731;; break;
case "js":
break l18459;; break;
case "mix":
break l18459;; break;
case "default":
break l18452;; break;
case "bem":
break l18459;; break;
case "jsAttr":
break l18459;; break;
case "cls":
break l18459;; break;default: break l18462;}
} else {
break l18498;}}}/*16680*/if((! (! this["ctx"]["_wrap"])) === false) {
/*16681*/if((! (! this["mods"]["inner"])) === false) {
/*16682*/{var __o44 = this,__v44 = __o44["_mode"];(__o44["_mode"]="");var __o45 = this,__v45 = __o45["ctx"];(__o45["ctx"]=({"elem": "inner","content": this["ctx"]["content"],"_wrap": true}));this.apply();(__o45["ctx"]=__v45);(__o44["_mode"]=__v44)};return;} else {
break l18381;}} else {
break l18381;}}/*16689*/if((! (! this["ctx"]["url"])) === false) {
/*16690*/return ({});return;} else {
break l16691;}}/*16691*/if((! (! this["elem"])) === false) {
break l16731;} else {
break l18459;}}/*16731*/{var ctx = this["ctx"],a = ({"href": ctx["url"]}),props = ["title","target"],p = undefined;while((p=props.shift())){(ctx[p] && (a[p]=ctx[p]))}return a};return;}/*16940*/if((! (! this["elem"])) === false) {
break l17427;} else {
break l18459;}}/*17416*/if((! (! this["elem"])) === false) {
/*17417*/switch(this["_mode"]) {
case "tag":
break l18459;; break;
case "content":
break l18381;; break;
case "attrs":
break l18459;; break;
case "js":
break l17427;; break;
case "mix":
break l18459;; break;
case "default":
break l18452;; break;
case "bem":
break l18459;; break;
case "jsAttr":
break l18459;; break;
case "cls":
break l18459;; break;default: break l18462;}
} else {
break l18498;}}/*17427*/return true;return;}/*17812*/return "link";return;}/*17870*/if((! this["ctx"].hasOwnProperty("ie")) === false) {
/*17871*/if((! (! this["ctx"]["_ieCommented"])) === false) {
/*17872*/{var hideRule = ((! this["ctx"]["ie"])?["gt IE 7","<!-->","<!--"]:[this["ctx"]["ie"],"",""]);{var __o37 = this,__v37 = __o37["_mode"];(__o37["_mode"]="");var __o38 = this["ctx"],__v38 = __o38["_ieCommented"];(__o38["_ieCommented"]=true);var __o39 = this,__v39 = __o39["ctx"];(__o39["ctx"]=[(("<!--[if " + hideRule[(0)]) + "]>"),hideRule[(1)],this["ctx"],hideRule[(2)],"<![endif]-->"]);this.apply();(__o39["ctx"]=__v39);(__o38["_ieCommented"]=__v38);(__o37["_mode"]=__v37)}};return;} else {
break l17995;}} else {
break l17995;}}/*17995*/if((! (! this["elem"])) === false) {
break l18100;} else {
break l18452;}}/*18083*/if((! (! this["elem"])) === false) {
/*18084*/switch(this["_mode"]) {
case "tag":
break l18459;; break;
case "content":
break l18381;; break;
case "attrs":
break l18459;; break;
case "js":
break l18459;; break;
case "mix":
break l18459;; break;
case "default":
break l18100;; break;
case "bem":
break l18459;; break;
case "jsAttr":
break l18459;; break;
case "cls":
break l18459;; break;default: break l18462;}
} else {
break l18498;}}/*18100*/{this["_buf"].push("<!DOCTYPE html>");{var __o34 = this,__v34 = __o34["_mode"];(__o34["_mode"]="");var __o35 = this,__v35 = __o35["ctx"];(__o35["ctx"]=({"tag": "html","attrs": ({"class": "i-ua_js_no i-ua_css_standard"}),"content": [({"elem": "head","content": [({"tag": "meta","attrs": ({"charset": "utf-8"})}),({"tag": "meta","attrs": ({"http-equiv": "X-UA-Compatible","content": "IE=EmulateIE7, IE=edge"})}),({"tag": "title","content": this["ctx"]["title"]}),(this["ctx"]["favicon"]?({"elem": "favicon","url": this["ctx"]["favicon"]}):""),this["ctx"]["meta"],({"block": "i-ua"}),this["ctx"]["head"]]}),({"elem": "body","mix": [this["ctx"]],"content": [this["ctx"]["content"]]})]}));this.apply();(__o35["ctx"]=__v35);(__o34["_mode"]=__v34)}};return;}/*18381*/if((! (! this["_start"])) === false) {
break l18499;} else {
break l18502;}}/*18441*/return "script";return;}/*18452*/if((! (! this["_start"])) === false) {
break l18499;} else {
break l18506;}}/*18455*/return false;return;}/*18459*/if((! (! this["_start"])) === false) {
break l18499;} else {
break l18509;}}/*18462*/if((! (! this["_start"])) === false) {
break l18499;} else {
break l18510;}}/*18498*/if((! (! this["_start"])) === false) {
break l18499;} else {
/*18500*/switch(this["_mode"]) {
case "tag":
break l18509;; break;
case "content":
break l18502;; break;
case "attrs":
break l18509;; break;
case "js":
break l18509;; break;
case "mix":
break l18509;; break;
case "default":
break l18506;; break;
case "bem":
break l18509;; break;
case "jsAttr":
break l18509;; break;
case "cls":
break l18509;; break;default: break l18510;}
}}/*18499*/{var BEM = ({}),toString = Object["prototype"]["toString"],SHORT_TAGS = ({"area": (1),"base": (1),"br": (1),"col": (1),"command": (1),"embed": (1),"hr": (1),"img": (1),"input": (1),"keygen": (1),"link": (1),"meta": (1),"param": (1),"source": (1),"wbr": (1)});(function (BEM,undefined){var MOD_DELIM = "_",ELEM_DELIM = "__",NAME_PATTERN = "[a-zA-Z0-9-]+";var buildModPostfix = (function (modName,modVal,buffer){buffer.push(MOD_DELIM,modName,MOD_DELIM,modVal)});var buildBlockClass = (function (name,modName,modVal,buffer){buffer.push(name);(modVal && buildModPostfix(modName,modVal,buffer))});var buildElemClass = (function (block,name,modName,modVal,buffer){buildBlockClass(block,undefined,undefined,buffer);buffer.push(ELEM_DELIM,name);(modVal && buildModPostfix(modName,modVal,buffer))});(BEM["INTERNAL"]=({"NAME_PATTERN": NAME_PATTERN,"MOD_DELIM": MOD_DELIM,"ELEM_DELIM": ELEM_DELIM,"buildModPostfix": (function (modName,modVal,buffer){var res = (buffer || []);buildModPostfix(modName,modVal,res);return (buffer?res:res.join(""))}),"buildClass": (function (block,elem,modName,modVal,buffer){var typeOf = (typeof modName);if((typeOf == "string")){if(((typeof modVal) != "string")){(buffer=modVal);(modVal=modName);(modName=elem);(elem=undefined)}else{undefined}}else{if((typeOf != "undefined")){(buffer=modName);(modName=undefined)}else{if((elem && ((typeof elem) != "string"))){(buffer=elem);(elem=undefined)}else{undefined}}};undefined;if((! ((elem || modName) || buffer))){return block}else{undefined};undefined;var res = (buffer || []);(elem?buildElemClass(block,elem,modName,modVal,res):buildBlockClass(block,modName,modVal,res));return (buffer?res:res.join(""))}),"buildModsClasses": (function (block,elem,mods,buffer){var res = (buffer || []);if(mods){var modName = undefined;for(modName in mods){if(mods.hasOwnProperty(modName)){var modVal = mods[modName];res.push(" ");(elem?buildElemClass(block,elem,modName,modVal,res):buildBlockClass(block,modName,modVal,res))}else{undefined}}}else{undefined};undefined;return (buffer?res:res.join(""))}),"buildClasses": (function (block,elem,mods,buffer){var res = (buffer || []);(elem?buildElemClass(block,elem,undefined,undefined,res):buildBlockClass(block,undefined,undefined,res));this.buildModsClasses(block,elem,mods,buffer);return (buffer?res:res.join(""))})}))})(BEM);var buildEscape = (function (){var ts = ({"\"": "&quot;","&": "&amp;","<": "&lt;",">": "&gt;"}),f = (function (t){return (ts[t] || t)});return (function (r){(r=new RegExp(r,"g"));return (function (s){return ("" + s).replace(r,f)})})})(),ctx = ({"ctx": this,"_start": true,"apply": arguments["callee"],"_buf": [],"_": ({"isArray": (function (obj){return (toString.call(obj) === "[object Array]")}),"isSimple": (function (obj){var t = (typeof obj);return ((t === "string") || (t === "number"))}),"isShortTag": (function (t){return SHORT_TAGS.hasOwnProperty(t)}),"extend": (function (o1,o2){if(((! o1) || (! o2))){return (o1 || o2)}else{undefined};undefined;var res = ({}),n = undefined;for(n in o1){(o1.hasOwnProperty(n) && (res[n]=o1[n]))};undefined;for(n in o2){(o2.hasOwnProperty(n) && (res[n]=o2[n]))};undefined;return res}),"xmlEscape": buildEscape("[&<>]"),"attrEscape": buildEscape("[\"&<>]")}),"BEM": BEM,"isFirst": (function (){return (this["position"] === (1))}),"isLast": (function (){return (this["position"] === this["_listLength"])})});ctx.apply(ctx);return ctx["_buf"].join("")};return;}/*18502*/return this["ctx"]["content"];return;}/*18506*/{var _this = this,BEM = _this["BEM"],v = this["ctx"],buf = this["_buf"],tag = undefined;{var __o9 = this,__v9 = __o9["_mode"];(__o9["_mode"]="tag");(tag=this.apply());(__o9["_mode"]=__v9)}(tag || (tag=(v["tag"] || "div")));var jsParams = undefined,js = undefined;if((v["block"] && (v["js"] !== false))){{var __o11 = this,__v11 = __o11["_mode"];(__o11["_mode"]="js");(js=this.apply());(__o11["_mode"]=__v11)};undefined;(js=(js?this["_"].extend(v["js"],((js === true)?({}):js)):((v["js"] === true)?({}):v["js"])));(js && ((jsParams=({}))[v["block"]]=js))}else{undefined}buf.push("<",tag);var isBEM = undefined;{var __o13 = this,__v13 = __o13["_mode"];(__o13["_mode"]="bem");(isBEM=this.apply());(__o13["_mode"]=__v13)}(((typeof isBEM) != "undefined") || (isBEM=(((typeof v["bem"]) != "undefined")?v["bem"]:(v["block"] || v["elem"]))));var cls = undefined;{var __o15 = this,__v15 = __o15["_mode"];(__o15["_mode"]="cls");(cls=this.apply());(__o15["_mode"]=__v15)}(cls || (cls=v["cls"]));if((isBEM || cls)){buf.push(" class=\"");if(isBEM){BEM["INTERNAL"].buildClasses(this["block"],v["elem"],(v["elemMods"] || v["mods"]),buf);var mix = undefined;{var __o17 = this,__v17 = __o17["_mode"];(__o17["_mode"]="mix");(mix=this.apply());(__o17["_mode"]=__v17)};undefined;(v["mix"] && (mix=(mix?mix.concat(v["mix"]):v["mix"])));if(mix){var i = (0),l = mix["length"],mixItem = undefined,hasItem = undefined,block = undefined;while((i < l)){(mixItem=mix[i++]);((hasItem=(mixItem["block"] || mixItem["elem"])) , (block=(mixItem["block"] || _this["block"])));(hasItem && buf.push(" "));BEM["INTERNAL"][(hasItem?"buildClasses":"buildModsClasses")](block,(mixItem["elem"] || (mixItem["block"]?undefined:_this["elem"])),(mixItem["elemMods"] || mixItem["mods"]),buf);(mixItem["js"] && ((jsParams || (jsParams=({})))[block]=((mixItem["js"] === true)?({}):mixItem["js"])))}}else{undefined}}else{undefined};undefined;(cls && buf.push((isBEM?" ":""),cls));(jsParams && buf.push(" i-bem"));buf.push("\"")}else{undefined}if(jsParams){var jsAttr = undefined;{var __o19 = this,__v19 = __o19["_mode"];(__o19["_mode"]="jsAttr");(jsAttr=this.apply());(__o19["_mode"]=__v19)};undefined;buf.push(" ",(jsAttr || "onclick"),"=\"return ",this["_"].attrEscape(JSON.stringify(jsParams)),"\"")}else{undefined}var attrs = undefined;{var __o21 = this,__v21 = __o21["_mode"];(__o21["_mode"]="attrs");(attrs=this.apply());(__o21["_mode"]=__v21)}(attrs=this["_"].extend(attrs,v["attrs"]));if(attrs){var name = undefined;for(name in attrs){buf.push(" ",name,"=\"",this["_"].attrEscape(attrs[name]),"\"")}}else{undefined}if(this["_"].isShortTag(tag)){buf.push("/>")}else{buf.push(">");var content = undefined;{var __o23 = this,__v23 = __o23["_mode"];(__o23["_mode"]="content");(content=this.apply());(__o23["_mode"]=__v23)};undefined;if((content || (content === (0)))){var isBEM = (this["block"] || this["elem"]);{var __o25 = this,__v25 = __o25["_notNewList"];(__o25["_notNewList"]=false);var __o26 = this,__v26 = __o26["position"];(__o26["position"]=(isBEM?(1):this["position"]));var __o27 = this,__v27 = __o27["_listLength"];(__o27["_listLength"]=(isBEM?(1):this["_listLength"]));var __o28 = this,__v28 = __o28["ctx"];(__o28["ctx"]=content);var __o29 = this,__v29 = __o29["_mode"];(__o29["_mode"]="");this.apply();(__o29["_mode"]=__v29);(__o28["ctx"]=__v28);(__o27["_listLength"]=__v27);(__o26["position"]=__v26);(__o25["_notNewList"]=__v25)}}else{undefined};undefined;buf.push("</",tag,">")}};return;}/*18509*/return undefined;return;}/*18510*/if((! (! this["_mode"])) === false) {
/*18511*/if((! this["_"].isSimple(this["ctx"])) === false) {
/*18512*/{this["_listLength"]--;this["_buf"].push(this["ctx"])};return;} else {
/*18513*/if((! (! this["ctx"])) === false) {
/*18514*/this["_listLength"]--;return;} else {
/*18515*/if((! this["_"].isArray(this["ctx"])) === false) {
/*18516*/{var v = this["ctx"],l = v["length"],i = (0),prevPos = this["position"],prevNotNewList = this["_notNewList"];if(prevNotNewList){(this["_listLength"]+=(l - (1)))}else{(this["position"]=(0));(this["_listLength"]=l)}(this["_notNewList"]=true);while((i < l)){var __o7 = this,__v7 = __o7["ctx"];(__o7["ctx"]=v[i++]);this.apply();(__o7["ctx"]=__v7)}(prevNotNewList || (this["position"]=prevPos))};return;} else {
/*18517*/if((! true) === false) {
/*18518*/{var vBlock = this["ctx"]["block"],vElem = this["ctx"]["elem"],block = (this["_currBlock"] || this["block"]);{var __o0 = this,__v0 = __o0["_mode"];(__o0["_mode"]="default");var __o1 = this,__v1 = __o1["block"];(__o1["block"]=(vBlock || (vElem?block:undefined)));var __o2 = this,__v2 = __o2["_currBlock"];(__o2["_currBlock"]=((vBlock || vElem)?undefined:block));var __o3 = this,__v3 = __o3["elem"];(__o3["elem"]=this["ctx"]["elem"]);var __o4 = this,__v4 = __o4["mods"];(__o4["mods"]=((this["ctx"]["mods"] || this["mods"]) || ({})));var __o5 = this,__v5 = __o5["elemMods"];(__o5["elemMods"]=(this["ctx"]["elemMods"] || ({})));{((this["block"] || this["elem"])?(this["position"]=((this["position"] || (0)) + (1))):this["_listLength"]--);this.apply()}(__o5["elemMods"]=__v5);(__o4["mods"]=__v4);(__o3["elem"]=__v3);(__o2["_currBlock"]=__v2);(__o1["block"]=__v1);(__o0["_mode"]=__v0)}};return;} else {
break l18520;}}}}} else {
break l18520;}}/*18520*/throw true;return;};