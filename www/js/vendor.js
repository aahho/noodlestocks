/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=window.getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return window.document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll)/.test(r+s+p)?e:n(o(e))}function r(e){var o=e&&e.offsetParent,i=o&&o.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(o.nodeName)&&'static'===t(o,'position')?r(o):o:e?e.ownerDocument.documentElement:window.document.documentElement}function p(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||r(e.firstElementChild)===e)}function s(e){return null===e.parentNode?e:s(e.parentNode)}function d(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return window.document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=o?e:t,n=o?t:e,a=document.createRange();a.setStart(i,0),a.setEnd(n,0);var l=a.commonAncestorContainer;if(e!==l&&t!==l||i.contains(n))return p(l)?l:r(l);var f=s(e);return f.host?d(f.host,t):d(e,s(t).host)}function a(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',i=e.nodeName;if('BODY'===i||'HTML'===i){var n=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||n;return r[o]}return e[o]}function l(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=a(t,'top'),n=a(t,'left'),r=o?-1:1;return e.top+=i*r,e.bottom+=i*r,e.left+=n*r,e.right+=n*r,e}function f(e,t){var o='x'===t?'Left':'Top',i='Left'==o?'Right':'Bottom';return+e['border'+o+'Width'].split('px')[0]+ +e['border'+i+'Width'].split('px')[0]}function m(e,t,o,i){return J(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],ie()?o['offset'+e]+i['margin'+('Height'===e?'Top':'Left')]+i['margin'+('Height'===e?'Bottom':'Right')]:0)}function c(){var e=window.document.body,t=window.document.documentElement,o=ie()&&window.getComputedStyle(t);return{height:m('Height',e,t,o),width:m('Width',e,t,o)}}function h(e){return se({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var o={};if(ie())try{o=e.getBoundingClientRect();var i=a(e,'top'),n=a(e,'left');o.top+=i,o.left+=n,o.bottom+=i,o.right+=n}catch(e){}else o=e.getBoundingClientRect();var r={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},p='HTML'===e.nodeName?c():{},s=p.width||e.clientWidth||r.right-r.left,d=p.height||e.clientHeight||r.bottom-r.top,l=e.offsetWidth-s,m=e.offsetHeight-d;if(l||m){var u=t(e);l-=f(u,'x'),m-=f(u,'y'),r.width-=l,r.height-=m}return h(r)}function g(e,o){var i=ie(),r='HTML'===o.nodeName,p=u(e),s=u(o),d=n(e),a=t(o),f=+a.borderTopWidth.split('px')[0],m=+a.borderLeftWidth.split('px')[0],c=h({top:p.top-s.top-f,left:p.left-s.left-m,width:p.width,height:p.height});if(c.marginTop=0,c.marginLeft=0,!i&&r){var g=+a.marginTop.split('px')[0],b=+a.marginLeft.split('px')[0];c.top-=f-g,c.bottom-=f-g,c.left-=m-b,c.right-=m-b,c.marginTop=g,c.marginLeft=b}return(i?o.contains(d):o===d&&'BODY'!==d.nodeName)&&(c=l(c,o)),c}function b(e){var t=e.ownerDocument.documentElement,o=g(e,t),i=J(t.clientWidth,window.innerWidth||0),n=J(t.clientHeight,window.innerHeight||0),r=a(t),p=a(t,'left'),s={top:r-o.top+o.marginTop,left:p-o.left+o.marginLeft,width:i,height:n};return h(s)}function y(e){var i=e.nodeName;return'BODY'===i||'HTML'===i?!1:'fixed'===t(e,'position')||y(o(e))}function w(e,t,i,r){var p={top:0,left:0},s=d(e,t);if('viewport'===r)p=b(s);else{var a;'scrollParent'===r?(a=n(o(e)),'BODY'===a.nodeName&&(a=e.ownerDocument.documentElement)):'window'===r?a=e.ownerDocument.documentElement:a=r;var l=g(a,s);if('HTML'===a.nodeName&&!y(s)){var f=c(),m=f.height,h=f.width;p.top+=l.top-l.marginTop,p.bottom=m+l.top,p.left+=l.left-l.marginLeft,p.right=h+l.left}else p=l}return p.left+=i,p.top+=i,p.right-=i,p.bottom-=i,p}function E(e){var t=e.width,o=e.height;return t*o}function v(e,t,o,i,n){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=w(o,i,r,n),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return se({key:e},s[e],{area:E(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,i=e.height;return t>=o.clientWidth&&i>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function x(e,t,o){var i=d(t,o);return g(o,i)}function O(e){var t=window.getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight),n={width:e.offsetWidth+i,height:e.offsetHeight+o};return n}function L(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function S(e,t,o){o=o.split('-')[0];var i=O(e),n={width:i.width,height:i.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return n[p]=t[p]+t[d]/2-i[d]/2,n[s]=o===s?t[s]-i[a]:t[L(s)],n}function T(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function C(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var i=T(e,function(e){return e[t]===o});return e.indexOf(i)}function D(t,o,i){var n=void 0===i?t:t.slice(0,C(t,'name',i));return n.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var i=t['function']||t.fn;t.enabled&&e(i)&&(o.offsets.popper=h(o.offsets.popper),o.offsets.reference=h(o.offsets.reference),o=i(o,t))}),o}function N(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=x(this.state,this.popper,this.reference),e.placement=v(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=S(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position='absolute',e=D(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function k(e,t){return e.some(function(e){var o=e.name,i=e.enabled;return i&&o===t})}function W(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length-1;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof window.document.body.style[r])return r}return null}function P(){return this.state.isDestroyed=!0,k(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.left='',this.popper.style.position='',this.popper.style.top='',this.popper.style[W('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function B(e){var t=e.ownerDocument;return t?t.defaultView:window}function H(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||H(n(p.parentNode),t,o,i),i.push(p)}function A(e,t,o,i){o.updateBound=i,B(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return H(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=A(this.reference,this.options,this.state,this.scheduleUpdate))}function M(e,t){return B(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function R(){this.state.eventsEnabled&&(window.cancelAnimationFrame(this.scheduleUpdate),this.state=M(this.reference,this.state))}function U(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function Y(e,t){Object.keys(t).forEach(function(o){var i='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&U(t[o])&&(i='px'),e.style[o]=t[o]+i})}function F(e,t){Object.keys(t).forEach(function(o){var i=t[o];!1===i?e.removeAttribute(o):e.setAttribute(o,t[o])})}function j(e,t,o){var i=T(e,function(e){var o=e.name;return o===t}),n=!!i&&e.some(function(e){return e.name===o&&e.enabled&&e.order<i.order});if(!n){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return n}function K(e){return'end'===e?'start':'start'===e?'end':e}function q(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=ae.indexOf(e),i=ae.slice(o+1).concat(ae.slice(0,o));return t?i.reverse():i}function V(e,t,o,i){var n=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+n[1],p=n[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=i;}var d=h(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?J(document.documentElement.clientHeight,window.innerHeight||0):J(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function z(e,t,o,i){var n=[0,0],r=-1!==['right','left'].indexOf(i),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(T(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,i){var n=(1===i?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return V(e,n,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,i){U(o)&&(n[t]+=o*('-'===e[i-1]?-1:1))})}),n}function G(e,t){var o,i=t.offset,n=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=n.split('-')[0];return o=U(+i)?[+i,0]:z(i,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var _=Math.min,X=Math.floor,J=Math.max,Q='undefined'!=typeof window&&'undefined'!=typeof window.document,Z=['Edge','Trident','Firefox'],$=0,ee=0;ee<Z.length;ee+=1)if(Q&&0<=navigator.userAgent.indexOf(Z[ee])){$=1;break}var i,te=Q&&window.Promise,oe=te?function(e){var t=!1;return function(){t||(t=!0,Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},$))}},ie=function(){return void 0==i&&(i=-1!==navigator.appVersion.indexOf('MSIE 10')),i},ne=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},re=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),pe=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},se=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},de=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],ae=de.slice(3),le={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},fe=function(){function t(o,i){var n=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};ne(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=oe(this.update.bind(this)),this.options=se({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=i&&i.jquery?i[0]:i,this.options.modifiers={},Object.keys(se({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){n.options.modifiers[e]=se({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return se({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return re(t,[{key:'update',value:function(){return N.call(this)}},{key:'destroy',value:function(){return P.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return R.call(this)}}]),t}();return fe.Utils=('undefined'==typeof window?global:window).PopperUtils,fe.placements=de,fe.Defaults={placement:'bottom',eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],i=t.split('-')[1];if(i){var n=e.offsets,r=n.reference,p=n.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:pe({},d,r[d]),end:pe({},d,r[d]+r[a]-p[a])};e.offsets.popper=se({},p,l[i])}return e}},offset:{order:200,enabled:!0,fn:G,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||r(e.instance.popper);e.instance.reference===o&&(o=r(o));var i=w(e.instance.popper,e.instance.reference,t.padding,o);t.boundaries=i;var n=t.priority,p=e.offsets.popper,s={primary:function(e){var o=p[e];return p[e]<i[e]&&!t.escapeWithReference&&(o=J(p[e],i[e])),pe({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=p[o];return p[e]>i[e]&&!t.escapeWithReference&&(n=_(p[o],i[e]-('right'===e?p.width:p.height))),pe({},o,n)}};return n.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';p=se({},p,s[t](e))}),e.offsets.popper=p,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,i=t.reference,n=e.placement.split('-')[0],r=X,p=-1!==['top','bottom'].indexOf(n),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(i[d])&&(e.offsets.popper[d]=r(i[d])-o[a]),o[d]>r(i[s])&&(e.offsets.popper[d]=r(i[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){if(!j(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var n=e.placement.split('-')[0],r=e.offsets,p=r.popper,s=r.reference,d=-1!==['left','right'].indexOf(n),a=d?'height':'width',l=d?'Top':'Left',f=l.toLowerCase(),m=d?'left':'top',c=d?'bottom':'right',u=O(i)[a];s[c]-u<p[f]&&(e.offsets.popper[f]-=p[f]-(s[c]-u)),s[f]+u>p[c]&&(e.offsets.popper[f]+=s[f]+u-p[c]);var g=s[f]+s[a]/2-u/2,b=t(e.instance.popper,'margin'+l).replace('px',''),y=g-h(e.offsets.popper)[f]-b;return y=J(_(p[a]-u,y),0),e.arrowElement=i,e.offsets.arrow={},e.offsets.arrow[f]=Math.round(y),e.offsets.arrow[m]='',e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(k(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=w(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),i=e.placement.split('-')[0],n=L(i),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case le.FLIP:p=[i,n];break;case le.CLOCKWISE:p=q(i);break;case le.COUNTERCLOCKWISE:p=q(i,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(i!==s||p.length===d+1)return e;i=e.placement.split('-')[0],n=L(i);var a=e.offsets.popper,l=e.offsets.reference,f=X,m='left'===i&&f(a.right)>f(l.left)||'right'===i&&f(a.left)<f(l.right)||'top'===i&&f(a.bottom)>f(l.top)||'bottom'===i&&f(a.top)<f(l.bottom),c=f(a.left)<f(o.left),h=f(a.right)>f(o.right),u=f(a.top)<f(o.top),g=f(a.bottom)>f(o.bottom),b='left'===i&&c||'right'===i&&h||'top'===i&&u||'bottom'===i&&g,y=-1!==['top','bottom'].indexOf(i),w=!!t.flipVariations&&(y&&'start'===r&&c||y&&'end'===r&&h||!y&&'start'===r&&u||!y&&'end'===r&&g);(m||b||w)&&(e.flipped=!0,(m||b)&&(i=p[d+1]),w&&(r=K(r)),e.placement=i+(r?'-'+r:''),e.offsets.popper=se({},e.offsets.popper,S(e.instance.popper,e.offsets.reference,e.placement)),e=D(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],i=e.offsets,n=i.popper,r=i.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return n[p?'left':'top']=r[o]-(s?n[p?'width':'height']:0),e.placement=L(t),e.offsets.popper=h(n),e}},hide:{order:800,enabled:!0,fn:function(e){if(!j(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=T(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,i=t.y,n=e.offsets.popper,p=T(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==p&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===p?t.gpuAcceleration:p,l=r(e.instance.popper),f=u(l),m={position:n.position},c={left:X(n.left),top:X(n.top),bottom:X(n.bottom),right:X(n.right)},h='bottom'===o?'top':'bottom',g='right'===i?'left':'right',b=W('transform');if(d='bottom'==h?-f.height+c.bottom:c.top,s='right'==g?-f.width+c.right:c.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[h]=0,m[g]=0,m.willChange='transform';else{var y='bottom'==h?-1:1,w='right'==g?-1:1;m[h]=d*y,m[g]=s*w,m.willChange=h+', '+g}var E={"x-placement":e.placement};return e.attributes=se({},E,e.attributes),e.styles=se({},m,e.styles),e.arrowStyles=se({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return Y(e.instance.popper,e.styles),F(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&Y(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,i,n){var r=x(n,t,e),p=v(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),Y(t,{position:'absolute'}),o},gpuAcceleration:void 0}}},fe});
//# sourceMappingURL=popper.min.js.map

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.moment=t()}(this,function(){"use strict";function e(){return Yt.apply(null,arguments)}function t(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function n(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function s(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0}function i(e){return void 0===e}function r(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function a(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function o(e,t){var n,s=[];for(n=0;n<e.length;++n)s.push(t(e[n],n));return s}function u(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function l(e,t){for(var n in t)u(t,n)&&(e[n]=t[n]);return u(t,"toString")&&(e.toString=t.toString),u(t,"valueOf")&&(e.valueOf=t.valueOf),e}function d(e,t,n,s){return je(e,t,n,s,!0).utc()}function h(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function c(e){return null==e._pf&&(e._pf=h()),e._pf}function f(e){if(null==e._isValid){var t=c(e),n=Ot.call(t.parsedDateParts,function(e){return null!=e}),s=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(s=s&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return s;e._isValid=s}return e._isValid}function m(e){var t=d(NaN);return null!=e?l(c(t),e):c(t).userInvalidated=!0,t}function _(e,t){var n,s,r;if(i(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),i(t._i)||(e._i=t._i),i(t._f)||(e._f=t._f),i(t._l)||(e._l=t._l),i(t._strict)||(e._strict=t._strict),i(t._tzm)||(e._tzm=t._tzm),i(t._isUTC)||(e._isUTC=t._isUTC),i(t._offset)||(e._offset=t._offset),i(t._pf)||(e._pf=c(t)),i(t._locale)||(e._locale=t._locale),xt.length>0)for(n=0;n<xt.length;n++)i(r=t[s=xt[n]])||(e[s]=r);return e}function y(t){_(this,t),this._d=new Date(null!=t._d?t._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===Tt&&(Tt=!0,e.updateOffset(this),Tt=!1)}function g(e){return e instanceof y||null!=e&&null!=e._isAMomentObject}function p(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function w(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=p(t)),n}function v(e,t,n){var s,i=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),a=0;for(s=0;s<i;s++)(n&&e[s]!==t[s]||!n&&w(e[s])!==w(t[s]))&&a++;return a+r}function M(t){!1===e.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+t)}function k(t,n){var s=!0;return l(function(){if(null!=e.deprecationHandler&&e.deprecationHandler(null,t),s){for(var i,r=[],a=0;a<arguments.length;a++){if(i="","object"==typeof arguments[a]){i+="\n["+a+"] ";for(var o in arguments[0])i+=o+": "+arguments[0][o]+", ";i=i.slice(0,-2)}else i=arguments[a];r.push(i)}M(t+"\nArguments: "+Array.prototype.slice.call(r).join("")+"\n"+(new Error).stack),s=!1}return n.apply(this,arguments)},n)}function S(t,n){null!=e.deprecationHandler&&e.deprecationHandler(t,n),bt[t]||(M(n),bt[t]=!0)}function D(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function Y(e,t){var s,i=l({},e);for(s in t)u(t,s)&&(n(e[s])&&n(t[s])?(i[s]={},l(i[s],e[s]),l(i[s],t[s])):null!=t[s]?i[s]=t[s]:delete i[s]);for(s in e)u(e,s)&&!u(t,s)&&n(e[s])&&(i[s]=l({},i[s]));return i}function O(e){null!=e&&this.set(e)}function x(e,t){var n=e.toLowerCase();Ut[n]=Ut[n+"s"]=Ut[t]=e}function T(e){return"string"==typeof e?Ut[e]||Ut[e.toLowerCase()]:void 0}function b(e){var t,n,s={};for(n in e)u(e,n)&&(t=T(n))&&(s[t]=e[n]);return s}function P(e,t){Nt[e]=t}function W(e){var t=[];for(var n in e)t.push({unit:n,priority:Nt[n]});return t.sort(function(e,t){return e.priority-t.priority}),t}function R(e,t,n){var s=""+Math.abs(e),i=t-s.length;return(e>=0?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+s}function C(e,t,n,s){var i=s;"string"==typeof s&&(i=function(){return this[s]()}),e&&(Vt[e]=i),t&&(Vt[t[0]]=function(){return R(i.apply(this,arguments),t[1],t[2])}),n&&(Vt[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function F(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function U(e){var t,n,s=e.match(Ht);for(t=0,n=s.length;t<n;t++)Vt[s[t]]?s[t]=Vt[s[t]]:s[t]=F(s[t]);return function(t){var i,r="";for(i=0;i<n;i++)r+=D(s[i])?s[i].call(t,e):s[i];return r}}function N(e,t){return e.isValid()?(t=H(t,e.localeData()),Gt[t]=Gt[t]||U(t),Gt[t](e)):e.localeData().invalidDate()}function H(e,t){var n=5;for(Lt.lastIndex=0;n>=0&&Lt.test(e);)e=e.replace(Lt,function(e){return t.longDateFormat(e)||e}),Lt.lastIndex=0,n-=1;return e}function L(e,t,n){rn[e]=D(t)?t:function(e,s){return e&&n?n:t}}function G(e,t){return u(rn,e)?rn[e](t._strict,t._locale):new RegExp(V(e))}function V(e){return j(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,i){return t||n||s||i}))}function j(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function I(e,t){var n,s=t;for("string"==typeof e&&(e=[e]),r(t)&&(s=function(e,n){n[t]=w(e)}),n=0;n<e.length;n++)an[e[n]]=s}function E(e,t){I(e,function(e,n,s,i){s._w=s._w||{},t(e,s._w,s,i)})}function A(e,t,n){null!=t&&u(an,e)&&an[e](t,n._a,n,e)}function z(e){return Z(e)?366:365}function Z(e){return e%4==0&&e%100!=0||e%400==0}function $(t,n){return function(s){return null!=s?(J(this,t,s),e.updateOffset(this,n),this):q(this,t)}}function q(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function J(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&Z(e.year())?e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Q(n,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function B(e,t){return(e%t+t)%t}function Q(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=B(t,12);return e+=(t-n)/12,1===n?Z(e)?29:28:31-n%7%2}function X(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)r=d([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(i=yn.call(this._shortMonthsParse,a))?i:null:-1!==(i=yn.call(this._longMonthsParse,a))?i:null:"MMM"===t?-1!==(i=yn.call(this._shortMonthsParse,a))?i:-1!==(i=yn.call(this._longMonthsParse,a))?i:null:-1!==(i=yn.call(this._longMonthsParse,a))?i:-1!==(i=yn.call(this._shortMonthsParse,a))?i:null}function K(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=w(t);else if(t=e.localeData().monthsParse(t),!r(t))return e;return n=Math.min(e.date(),Q(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function ee(t){return null!=t?(K(this,t),e.updateOffset(this,!0),this):q(this,"Month")}function te(){function e(e,t){return t.length-e.length}var t,n,s=[],i=[],r=[];for(t=0;t<12;t++)n=d([2e3,t]),s.push(this.monthsShort(n,"")),i.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""));for(s.sort(e),i.sort(e),r.sort(e),t=0;t<12;t++)s[t]=j(s[t]),i[t]=j(i[t]);for(t=0;t<24;t++)r[t]=j(r[t]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+s.join("|")+")","i")}function ne(e,t,n,s,i,r,a){var o=new Date(e,t,n,s,i,r,a);return e<100&&e>=0&&isFinite(o.getFullYear())&&o.setFullYear(e),o}function se(e){var t=new Date(Date.UTC.apply(null,arguments));return e<100&&e>=0&&isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e),t}function ie(e,t,n){var s=7+t-n;return-((7+se(e,0,s).getUTCDay()-t)%7)+s-1}function re(e,t,n,s,i){var r,a,o=1+7*(t-1)+(7+n-s)%7+ie(e,s,i);return o<=0?a=z(r=e-1)+o:o>z(e)?(r=e+1,a=o-z(e)):(r=e,a=o),{year:r,dayOfYear:a}}function ae(e,t,n){var s,i,r=ie(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1;return a<1?s=a+oe(i=e.year()-1,t,n):a>oe(e.year(),t,n)?(s=a-oe(e.year(),t,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function oe(e,t,n){var s=ie(e,t,n),i=ie(e+1,t,n);return(z(e)-s+i)/7}function ue(e,t){return"string"!=typeof e?e:isNaN(e)?"number"==typeof(e=t.weekdaysParse(e))?e:null:parseInt(e,10)}function le(e,t){return"string"==typeof e?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function de(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)r=d([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(i=yn.call(this._weekdaysParse,a))?i:null:"ddd"===t?-1!==(i=yn.call(this._shortWeekdaysParse,a))?i:null:-1!==(i=yn.call(this._minWeekdaysParse,a))?i:null:"dddd"===t?-1!==(i=yn.call(this._weekdaysParse,a))?i:-1!==(i=yn.call(this._shortWeekdaysParse,a))?i:-1!==(i=yn.call(this._minWeekdaysParse,a))?i:null:"ddd"===t?-1!==(i=yn.call(this._shortWeekdaysParse,a))?i:-1!==(i=yn.call(this._weekdaysParse,a))?i:-1!==(i=yn.call(this._minWeekdaysParse,a))?i:null:-1!==(i=yn.call(this._minWeekdaysParse,a))?i:-1!==(i=yn.call(this._weekdaysParse,a))?i:-1!==(i=yn.call(this._shortWeekdaysParse,a))?i:null}function he(){function e(e,t){return t.length-e.length}var t,n,s,i,r,a=[],o=[],u=[],l=[];for(t=0;t<7;t++)n=d([2e3,1]).day(t),s=this.weekdaysMin(n,""),i=this.weekdaysShort(n,""),r=this.weekdays(n,""),a.push(s),o.push(i),u.push(r),l.push(s),l.push(i),l.push(r);for(a.sort(e),o.sort(e),u.sort(e),l.sort(e),t=0;t<7;t++)o[t]=j(o[t]),u[t]=j(u[t]),l[t]=j(l[t]);this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+a.join("|")+")","i")}function ce(){return this.hours()%12||12}function fe(e,t){C(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function me(e,t){return t._meridiemParse}function _e(e){return e?e.toLowerCase().replace("_","-"):e}function ye(e){for(var t,n,s,i,r=0;r<e.length;){for(t=(i=_e(e[r]).split("-")).length,n=(n=_e(e[r+1]))?n.split("-"):null;t>0;){if(s=ge(i.slice(0,t).join("-")))return s;if(n&&n.length>=t&&v(i,n,!0)>=t-1)break;t--}r++}return null}function ge(e){var t=null;if(!Fn[e]&&"undefined"!=typeof module&&module&&module.exports)try{t=Pn._abbr,require("./locale/"+e),pe(t)}catch(e){}return Fn[e]}function pe(e,t){var n;return e&&(n=i(t)?ve(e):we(e,t))&&(Pn=n),Pn._abbr}function we(e,t){if(null!==t){var n=Cn;if(t.abbr=e,null!=Fn[e])S("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),n=Fn[e]._config;else if(null!=t.parentLocale){if(null==Fn[t.parentLocale])return Un[t.parentLocale]||(Un[t.parentLocale]=[]),Un[t.parentLocale].push({name:e,config:t}),null;n=Fn[t.parentLocale]._config}return Fn[e]=new O(Y(n,t)),Un[e]&&Un[e].forEach(function(e){we(e.name,e.config)}),pe(e),Fn[e]}return delete Fn[e],null}function ve(e){var n;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Pn;if(!t(e)){if(n=ge(e))return n;e=[e]}return ye(e)}function Me(e){var t,n=e._a;return n&&-2===c(e).overflow&&(t=n[un]<0||n[un]>11?un:n[ln]<1||n[ln]>Q(n[on],n[un])?ln:n[dn]<0||n[dn]>24||24===n[dn]&&(0!==n[hn]||0!==n[cn]||0!==n[fn])?dn:n[hn]<0||n[hn]>59?hn:n[cn]<0||n[cn]>59?cn:n[fn]<0||n[fn]>999?fn:-1,c(e)._overflowDayOfYear&&(t<on||t>ln)&&(t=ln),c(e)._overflowWeeks&&-1===t&&(t=mn),c(e)._overflowWeekday&&-1===t&&(t=_n),c(e).overflow=t),e}function ke(e,t,n){return null!=e?e:null!=t?t:n}function Se(t){var n=new Date(e.now());return t._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}function De(e){var t,n,s,i,r=[];if(!e._d){for(s=Se(e),e._w&&null==e._a[ln]&&null==e._a[un]&&Ye(e),null!=e._dayOfYear&&(i=ke(e._a[on],s[on]),(e._dayOfYear>z(i)||0===e._dayOfYear)&&(c(e)._overflowDayOfYear=!0),n=se(i,0,e._dayOfYear),e._a[un]=n.getUTCMonth(),e._a[ln]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=r[t]=s[t];for(;t<7;t++)e._a[t]=r[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[dn]&&0===e._a[hn]&&0===e._a[cn]&&0===e._a[fn]&&(e._nextDay=!0,e._a[dn]=0),e._d=(e._useUTC?se:ne).apply(null,r),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[dn]=24),e._w&&void 0!==e._w.d&&e._w.d!==e._d.getDay()&&(c(e).weekdayMismatch=!0)}}function Ye(e){var t,n,s,i,r,a,o,u;if(null!=(t=e._w).GG||null!=t.W||null!=t.E)r=1,a=4,n=ke(t.GG,e._a[on],ae(Ie(),1,4).year),s=ke(t.W,1),((i=ke(t.E,1))<1||i>7)&&(u=!0);else{r=e._locale._week.dow,a=e._locale._week.doy;var l=ae(Ie(),r,a);n=ke(t.gg,e._a[on],l.year),s=ke(t.w,l.week),null!=t.d?((i=t.d)<0||i>6)&&(u=!0):null!=t.e?(i=t.e+r,(t.e<0||t.e>6)&&(u=!0)):i=r}s<1||s>oe(n,r,a)?c(e)._overflowWeeks=!0:null!=u?c(e)._overflowWeekday=!0:(o=re(n,s,i,r,a),e._a[on]=o.year,e._dayOfYear=o.dayOfYear)}function Oe(e){var t,n,s,i,r,a,o=e._i,u=Nn.exec(o)||Hn.exec(o);if(u){for(c(e).iso=!0,t=0,n=Gn.length;t<n;t++)if(Gn[t][1].exec(u[1])){i=Gn[t][0],s=!1!==Gn[t][2];break}if(null==i)return void(e._isValid=!1);if(u[3]){for(t=0,n=Vn.length;t<n;t++)if(Vn[t][1].exec(u[3])){r=(u[2]||" ")+Vn[t][0];break}if(null==r)return void(e._isValid=!1)}if(!s&&null!=r)return void(e._isValid=!1);if(u[4]){if(!Ln.exec(u[4]))return void(e._isValid=!1);a="Z"}e._f=i+(r||"")+(a||""),Fe(e)}else e._isValid=!1}function xe(e,t,n,s,i,r){var a=[Te(e),vn.indexOf(t),parseInt(n,10),parseInt(s,10),parseInt(i,10)];return r&&a.push(parseInt(r,10)),a}function Te(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function be(e){return e.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}function Pe(e,t,n){return!e||Yn.indexOf(e)===new Date(t[0],t[1],t[2]).getDay()||(c(n).weekdayMismatch=!0,n._isValid=!1,!1)}function We(e,t,n){if(e)return En[e];if(t)return 0;var s=parseInt(n,10),i=s%100;return 60*((s-i)/100)+i}function Re(e){var t=In.exec(be(e._i));if(t){var n=xe(t[4],t[3],t[2],t[5],t[6],t[7]);if(!Pe(t[1],n,e))return;e._a=n,e._tzm=We(t[8],t[9],t[10]),e._d=se.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),c(e).rfc2822=!0}else e._isValid=!1}function Ce(t){var n=jn.exec(t._i);null===n?(Oe(t),!1===t._isValid&&(delete t._isValid,Re(t),!1===t._isValid&&(delete t._isValid,e.createFromInputFallback(t)))):t._d=new Date(+n[1])}function Fe(t){if(t._f!==e.ISO_8601)if(t._f!==e.RFC_2822){t._a=[],c(t).empty=!0;var n,s,i,r,a,o=""+t._i,u=o.length,l=0;for(i=H(t._f,t._locale).match(Ht)||[],n=0;n<i.length;n++)r=i[n],(s=(o.match(G(r,t))||[])[0])&&((a=o.substr(0,o.indexOf(s))).length>0&&c(t).unusedInput.push(a),o=o.slice(o.indexOf(s)+s.length),l+=s.length),Vt[r]?(s?c(t).empty=!1:c(t).unusedTokens.push(r),A(r,s,t)):t._strict&&!s&&c(t).unusedTokens.push(r);c(t).charsLeftOver=u-l,o.length>0&&c(t).unusedInput.push(o),t._a[dn]<=12&&!0===c(t).bigHour&&t._a[dn]>0&&(c(t).bigHour=void 0),c(t).parsedDateParts=t._a.slice(0),c(t).meridiem=t._meridiem,t._a[dn]=Ue(t._locale,t._a[dn],t._meridiem),De(t),Me(t)}else Re(t);else Oe(t)}function Ue(e,t,n){var s;return null==n?t:null!=e.meridiemHour?e.meridiemHour(t,n):null!=e.isPM?((s=e.isPM(n))&&t<12&&(t+=12),s||12!==t||(t=0),t):t}function Ne(e){var t,n,s,i,r;if(0===e._f.length)return c(e).invalidFormat=!0,void(e._d=new Date(NaN));for(i=0;i<e._f.length;i++)r=0,t=_({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],Fe(t),f(t)&&(r+=c(t).charsLeftOver,r+=10*c(t).unusedTokens.length,c(t).score=r,(null==s||r<s)&&(s=r,n=t));l(e,n||t)}function He(e){if(!e._d){var t=b(e._i);e._a=o([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),De(e)}}function Le(e){var t=new y(Me(Ge(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function Ge(e){var n=e._i,s=e._f;return e._locale=e._locale||ve(e._l),null===n||void 0===s&&""===n?m({nullInput:!0}):("string"==typeof n&&(e._i=n=e._locale.preparse(n)),g(n)?new y(Me(n)):(a(n)?e._d=n:t(s)?Ne(e):s?Fe(e):Ve(e),f(e)||(e._d=null),e))}function Ve(s){var u=s._i;i(u)?s._d=new Date(e.now()):a(u)?s._d=new Date(u.valueOf()):"string"==typeof u?Ce(s):t(u)?(s._a=o(u.slice(0),function(e){return parseInt(e,10)}),De(s)):n(u)?He(s):r(u)?s._d=new Date(u):e.createFromInputFallback(s)}function je(e,i,r,a,o){var u={};return!0!==r&&!1!==r||(a=r,r=void 0),(n(e)&&s(e)||t(e)&&0===e.length)&&(e=void 0),u._isAMomentObject=!0,u._useUTC=u._isUTC=o,u._l=r,u._i=e,u._f=i,u._strict=a,Le(u)}function Ie(e,t,n,s){return je(e,t,n,s,!1)}function Ee(e,n){var s,i;if(1===n.length&&t(n[0])&&(n=n[0]),!n.length)return Ie();for(s=n[0],i=1;i<n.length;++i)n[i].isValid()&&!n[i][e](s)||(s=n[i]);return s}function Ae(e){for(var t in e)if(-1===yn.call(Zn,t)||null!=e[t]&&isNaN(e[t]))return!1;for(var n=!1,s=0;s<Zn.length;++s)if(e[Zn[s]]){if(n)return!1;parseFloat(e[Zn[s]])!==w(e[Zn[s]])&&(n=!0)}return!0}function ze(e){var t=b(e),n=t.year||0,s=t.quarter||0,i=t.month||0,r=t.week||0,a=t.day||0,o=t.hour||0,u=t.minute||0,l=t.second||0,d=t.millisecond||0;this._isValid=Ae(t),this._milliseconds=+d+1e3*l+6e4*u+1e3*o*60*60,this._days=+a+7*r,this._months=+i+3*s+12*n,this._data={},this._locale=ve(),this._bubble()}function Ze(e){return e instanceof ze}function $e(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function qe(e,t){C(e,0,0,function(){var e=this.utcOffset(),n="+";return e<0&&(e=-e,n="-"),n+R(~~(e/60),2)+t+R(~~e%60,2)})}function Je(e,t){var n=(t||"").match(e);if(null===n)return null;var s=((n[n.length-1]||[])+"").match($n)||["-",0,0],i=60*s[1]+w(s[2]);return 0===i?0:"+"===s[0]?i:-i}function Be(t,n){var s,i;return n._isUTC?(s=n.clone(),i=(g(t)||a(t)?t.valueOf():Ie(t).valueOf())-s.valueOf(),s._d.setTime(s._d.valueOf()+i),e.updateOffset(s,!1),s):Ie(t).local()}function Qe(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Xe(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function Ke(e,t){var n,s,i,a=e,o=null;return Ze(e)?a={ms:e._milliseconds,d:e._days,M:e._months}:r(e)?(a={},t?a[t]=e:a.milliseconds=e):(o=qn.exec(e))?(n="-"===o[1]?-1:1,a={y:0,d:w(o[ln])*n,h:w(o[dn])*n,m:w(o[hn])*n,s:w(o[cn])*n,ms:w($e(1e3*o[fn]))*n}):(o=Jn.exec(e))?(n="-"===o[1]?-1:(o[1],1),a={y:et(o[2],n),M:et(o[3],n),w:et(o[4],n),d:et(o[5],n),h:et(o[6],n),m:et(o[7],n),s:et(o[8],n)}):null==a?a={}:"object"==typeof a&&("from"in a||"to"in a)&&(i=nt(Ie(a.from),Ie(a.to)),(a={}).ms=i.milliseconds,a.M=i.months),s=new ze(a),Ze(e)&&u(e,"_locale")&&(s._locale=e._locale),s}function et(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function tt(e,t){var n={milliseconds:0,months:0};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function nt(e,t){var n;return e.isValid()&&t.isValid()?(t=Be(t,e),e.isBefore(t)?n=tt(e,t):((n=tt(t,e)).milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function st(e,t){return function(n,s){var i,r;return null===s||isNaN(+s)||(S(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),r=n,n=s,s=r),n="string"==typeof n?+n:n,i=Ke(n,s),it(this,i,e),this}}function it(t,n,s,i){var r=n._milliseconds,a=$e(n._days),o=$e(n._months);t.isValid()&&(i=null==i||i,o&&K(t,q(t,"Month")+o*s),a&&J(t,"Date",q(t,"Date")+a*s),r&&t._d.setTime(t._d.valueOf()+r*s),i&&e.updateOffset(t,a||o))}function rt(e,t){var n,s=12*(t.year()-e.year())+(t.month()-e.month()),i=e.clone().add(s,"months");return n=t-i<0?(t-i)/(i-e.clone().add(s-1,"months")):(t-i)/(e.clone().add(s+1,"months")-i),-(s+n)||0}function at(e){var t;return void 0===e?this._locale._abbr:(null!=(t=ve(e))&&(this._locale=t),this)}function ot(){return this._locale}function ut(e,t){C(0,[e,e.length],0,t)}function lt(e,t,n,s,i){var r;return null==e?ae(this,s,i).year:(r=oe(e,s,i),t>r&&(t=r),dt.call(this,e,t,n,s,i))}function dt(e,t,n,s,i){var r=re(e,t,n,s,i),a=se(r.year,0,r.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}function ht(e){return e}function ct(e,t,n,s){var i=ve(),r=d().set(s,t);return i[n](r,e)}function ft(e,t,n){if(r(e)&&(t=e,e=void 0),e=e||"",null!=t)return ct(e,t,n,"month");var s,i=[];for(s=0;s<12;s++)i[s]=ct(e,s,n,"month");return i}function mt(e,t,n,s){"boolean"==typeof e?(r(t)&&(n=t,t=void 0),t=t||""):(n=t=e,e=!1,r(t)&&(n=t,t=void 0),t=t||"");var i=ve(),a=e?i._week.dow:0;if(null!=n)return ct(t,(n+a)%7,s,"day");var o,u=[];for(o=0;o<7;o++)u[o]=ct(t,(o+a)%7,s,"day");return u}function _t(e,t,n,s){var i=Ke(t,n);return e._milliseconds+=s*i._milliseconds,e._days+=s*i._days,e._months+=s*i._months,e._bubble()}function yt(e){return e<0?Math.floor(e):Math.ceil(e)}function gt(e){return 4800*e/146097}function pt(e){return 146097*e/4800}function wt(e){return function(){return this.as(e)}}function vt(e){return function(){return this.isValid()?this._data[e]:NaN}}function Mt(e,t,n,s,i){return i.relativeTime(t||1,!!n,e,s)}function kt(e,t,n){var s=Ke(e).abs(),i=ks(s.as("s")),r=ks(s.as("m")),a=ks(s.as("h")),o=ks(s.as("d")),u=ks(s.as("M")),l=ks(s.as("y")),d=i<=Ss.ss&&["s",i]||i<Ss.s&&["ss",i]||r<=1&&["m"]||r<Ss.m&&["mm",r]||a<=1&&["h"]||a<Ss.h&&["hh",a]||o<=1&&["d"]||o<Ss.d&&["dd",o]||u<=1&&["M"]||u<Ss.M&&["MM",u]||l<=1&&["y"]||["yy",l];return d[2]=t,d[3]=+e>0,d[4]=n,Mt.apply(null,d)}function St(e){return(e>0)-(e<0)||+e}function Dt(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n,s=Ds(this._milliseconds)/1e3,i=Ds(this._days),r=Ds(this._months);t=p((e=p(s/60))/60),s%=60,e%=60;var a=n=p(r/12),o=r%=12,u=i,l=t,d=e,h=s?s.toFixed(3).replace(/\.?0+$/,""):"",c=this.asSeconds();if(!c)return"P0D";var f=c<0?"-":"",m=St(this._months)!==St(c)?"-":"",_=St(this._days)!==St(c)?"-":"",y=St(this._milliseconds)!==St(c)?"-":"";return f+"P"+(a?m+a+"Y":"")+(o?m+o+"M":"")+(u?_+u+"D":"")+(l||d||h?"T":"")+(l?y+l+"H":"")+(d?y+d+"M":"")+(h?y+h+"S":"")}var Yt,Ot;Ot=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,s=0;s<n;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1};var xt=e.momentProperties=[],Tt=!1,bt={};e.suppressDeprecationWarnings=!1,e.deprecationHandler=null;var Pt;Pt=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)u(e,t)&&n.push(t);return n};var Wt={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Rt={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Ct=/\d{1,2}/,Ft={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Ut={},Nt={},Ht=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Lt=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Gt={},Vt={},jt=/\d/,It=/\d\d/,Et=/\d{3}/,At=/\d{4}/,zt=/[+-]?\d{6}/,Zt=/\d\d?/,$t=/\d\d\d\d?/,qt=/\d\d\d\d\d\d?/,Jt=/\d{1,3}/,Bt=/\d{1,4}/,Qt=/[+-]?\d{1,6}/,Xt=/\d+/,Kt=/[+-]?\d+/,en=/Z|[+-]\d\d:?\d\d/gi,tn=/Z|[+-]\d\d(?::?\d\d)?/gi,nn=/[+-]?\d+(\.\d{1,3})?/,sn=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,rn={},an={},on=0,un=1,ln=2,dn=3,hn=4,cn=5,fn=6,mn=7,_n=8;C("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),C(0,["YY",2],0,function(){return this.year()%100}),C(0,["YYYY",4],0,"year"),C(0,["YYYYY",5],0,"year"),C(0,["YYYYYY",6,!0],0,"year"),x("year","y"),P("year",1),L("Y",Kt),L("YY",Zt,It),L("YYYY",Bt,At),L("YYYYY",Qt,zt),L("YYYYYY",Qt,zt),I(["YYYYY","YYYYYY"],on),I("YYYY",function(t,n){n[on]=2===t.length?e.parseTwoDigitYear(t):w(t)}),I("YY",function(t,n){n[on]=e.parseTwoDigitYear(t)}),I("Y",function(e,t){t[on]=parseInt(e,10)}),e.parseTwoDigitYear=function(e){return w(e)+(w(e)>68?1900:2e3)};var yn,gn=$("FullYear",!0);yn=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},C("M",["MM",2],"Mo",function(){return this.month()+1}),C("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),C("MMMM",0,0,function(e){return this.localeData().months(this,e)}),x("month","M"),P("month",8),L("M",Zt),L("MM",Zt,It),L("MMM",function(e,t){return t.monthsShortRegex(e)}),L("MMMM",function(e,t){return t.monthsRegex(e)}),I(["M","MM"],function(e,t){t[un]=w(e)-1}),I(["MMM","MMMM"],function(e,t,n,s){var i=n._locale.monthsParse(e,s,n._strict);null!=i?t[un]=i:c(n).invalidMonth=e});var pn=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,wn="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),vn="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Mn=sn,kn=sn;C("w",["ww",2],"wo","week"),C("W",["WW",2],"Wo","isoWeek"),x("week","w"),x("isoWeek","W"),P("week",5),P("isoWeek",5),L("w",Zt),L("ww",Zt,It),L("W",Zt),L("WW",Zt,It),E(["w","ww","W","WW"],function(e,t,n,s){t[s.substr(0,1)]=w(e)});var Sn={dow:0,doy:6};C("d",0,"do","day"),C("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),C("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),C("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),C("e",0,0,"weekday"),C("E",0,0,"isoWeekday"),x("day","d"),x("weekday","e"),x("isoWeekday","E"),P("day",11),P("weekday",11),P("isoWeekday",11),L("d",Zt),L("e",Zt),L("E",Zt),L("dd",function(e,t){return t.weekdaysMinRegex(e)}),L("ddd",function(e,t){return t.weekdaysShortRegex(e)}),L("dddd",function(e,t){return t.weekdaysRegex(e)}),E(["dd","ddd","dddd"],function(e,t,n,s){var i=n._locale.weekdaysParse(e,s,n._strict);null!=i?t.d=i:c(n).invalidWeekday=e}),E(["d","e","E"],function(e,t,n,s){t[s]=w(e)});var Dn="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Yn="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),On="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),xn=sn,Tn=sn,bn=sn;C("H",["HH",2],0,"hour"),C("h",["hh",2],0,ce),C("k",["kk",2],0,function(){return this.hours()||24}),C("hmm",0,0,function(){return""+ce.apply(this)+R(this.minutes(),2)}),C("hmmss",0,0,function(){return""+ce.apply(this)+R(this.minutes(),2)+R(this.seconds(),2)}),C("Hmm",0,0,function(){return""+this.hours()+R(this.minutes(),2)}),C("Hmmss",0,0,function(){return""+this.hours()+R(this.minutes(),2)+R(this.seconds(),2)}),fe("a",!0),fe("A",!1),x("hour","h"),P("hour",13),L("a",me),L("A",me),L("H",Zt),L("h",Zt),L("k",Zt),L("HH",Zt,It),L("hh",Zt,It),L("kk",Zt,It),L("hmm",$t),L("hmmss",qt),L("Hmm",$t),L("Hmmss",qt),I(["H","HH"],dn),I(["k","kk"],function(e,t,n){var s=w(e);t[dn]=24===s?0:s}),I(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),I(["h","hh"],function(e,t,n){t[dn]=w(e),c(n).bigHour=!0}),I("hmm",function(e,t,n){var s=e.length-2;t[dn]=w(e.substr(0,s)),t[hn]=w(e.substr(s)),c(n).bigHour=!0}),I("hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[dn]=w(e.substr(0,s)),t[hn]=w(e.substr(s,2)),t[cn]=w(e.substr(i)),c(n).bigHour=!0}),I("Hmm",function(e,t,n){var s=e.length-2;t[dn]=w(e.substr(0,s)),t[hn]=w(e.substr(s))}),I("Hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[dn]=w(e.substr(0,s)),t[hn]=w(e.substr(s,2)),t[cn]=w(e.substr(i))});var Pn,Wn=/[ap]\.?m?\.?/i,Rn=$("Hours",!0),Cn={calendar:Wt,longDateFormat:Rt,invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:Ct,relativeTime:Ft,months:wn,monthsShort:vn,week:Sn,weekdays:Dn,weekdaysMin:On,weekdaysShort:Yn,meridiemParse:Wn},Fn={},Un={},Nn=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Hn=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ln=/Z|[+-]\d\d(?::?\d\d)?/,Gn=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Vn=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],jn=/^\/?Date\((\-?\d+)/i,In=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,En={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};e.createFromInputFallback=k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),e.ISO_8601=function(){},e.RFC_2822=function(){};var An=k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Ie.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:m()}),zn=k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Ie.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:m()}),Zn=["year","quarter","month","week","day","hour","minute","second","millisecond"];qe("Z",":"),qe("ZZ",""),L("Z",tn),L("ZZ",tn),I(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Je(tn,e)});var $n=/([\+\-]|\d\d)/gi;e.updateOffset=function(){};var qn=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Jn=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;Ke.fn=ze.prototype,Ke.invalid=function(){return Ke(NaN)};var Bn=st(1,"add"),Qn=st(-1,"subtract");e.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",e.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Xn=k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});C(0,["gg",2],0,function(){return this.weekYear()%100}),C(0,["GG",2],0,function(){return this.isoWeekYear()%100}),ut("gggg","weekYear"),ut("ggggg","weekYear"),ut("GGGG","isoWeekYear"),ut("GGGGG","isoWeekYear"),x("weekYear","gg"),x("isoWeekYear","GG"),P("weekYear",1),P("isoWeekYear",1),L("G",Kt),L("g",Kt),L("GG",Zt,It),L("gg",Zt,It),L("GGGG",Bt,At),L("gggg",Bt,At),L("GGGGG",Qt,zt),L("ggggg",Qt,zt),E(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,s){t[s.substr(0,2)]=w(e)}),E(["gg","GG"],function(t,n,s,i){n[i]=e.parseTwoDigitYear(t)}),C("Q",0,"Qo","quarter"),x("quarter","Q"),P("quarter",7),L("Q",jt),I("Q",function(e,t){t[un]=3*(w(e)-1)}),C("D",["DD",2],"Do","date"),x("date","D"),P("date",9),L("D",Zt),L("DD",Zt,It),L("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),I(["D","DD"],ln),I("Do",function(e,t){t[ln]=w(e.match(Zt)[0],10)});var Kn=$("Date",!0);C("DDD",["DDDD",3],"DDDo","dayOfYear"),x("dayOfYear","DDD"),P("dayOfYear",4),L("DDD",Jt),L("DDDD",Et),I(["DDD","DDDD"],function(e,t,n){n._dayOfYear=w(e)}),C("m",["mm",2],0,"minute"),x("minute","m"),P("minute",14),L("m",Zt),L("mm",Zt,It),I(["m","mm"],hn);var es=$("Minutes",!1);C("s",["ss",2],0,"second"),x("second","s"),P("second",15),L("s",Zt),L("ss",Zt,It),I(["s","ss"],cn);var ts=$("Seconds",!1);C("S",0,0,function(){return~~(this.millisecond()/100)}),C(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),C(0,["SSS",3],0,"millisecond"),C(0,["SSSS",4],0,function(){return 10*this.millisecond()}),C(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),C(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),C(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),C(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),C(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),x("millisecond","ms"),P("millisecond",16),L("S",Jt,jt),L("SS",Jt,It),L("SSS",Jt,Et);var ns;for(ns="SSSS";ns.length<=9;ns+="S")L(ns,Xt);for(ns="S";ns.length<=9;ns+="S")I(ns,function(e,t){t[fn]=w(1e3*("0."+e))});var ss=$("Milliseconds",!1);C("z",0,0,"zoneAbbr"),C("zz",0,0,"zoneName");var is=y.prototype;is.add=Bn,is.calendar=function(t,n){var s=t||Ie(),i=Be(s,this).startOf("day"),r=e.calendarFormat(this,i)||"sameElse",a=n&&(D(n[r])?n[r].call(this,s):n[r]);return this.format(a||this.localeData().calendar(r,this,Ie(s)))},is.clone=function(){return new y(this)},is.diff=function(e,t,n){var s,i,r;if(!this.isValid())return NaN;if(!(s=Be(e,this)).isValid())return NaN;switch(i=6e4*(s.utcOffset()-this.utcOffset()),t=T(t)){case"year":r=rt(this,s)/12;break;case"month":r=rt(this,s);break;case"quarter":r=rt(this,s)/3;break;case"second":r=(this-s)/1e3;break;case"minute":r=(this-s)/6e4;break;case"hour":r=(this-s)/36e5;break;case"day":r=(this-s-i)/864e5;break;case"week":r=(this-s-i)/6048e5;break;default:r=this-s}return n?r:p(r)},is.endOf=function(e){return void 0===(e=T(e))||"millisecond"===e?this:("date"===e&&(e="day"),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms"))},is.format=function(t){t||(t=this.isUtc()?e.defaultFormatUtc:e.defaultFormat);var n=N(this,t);return this.localeData().postformat(n)},is.from=function(e,t){return this.isValid()&&(g(e)&&e.isValid()||Ie(e).isValid())?Ke({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},is.fromNow=function(e){return this.from(Ie(),e)},is.to=function(e,t){return this.isValid()&&(g(e)&&e.isValid()||Ie(e).isValid())?Ke({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},is.toNow=function(e){return this.to(Ie(),e)},is.get=function(e){return e=T(e),D(this[e])?this[e]():this},is.invalidAt=function(){return c(this).overflow},is.isAfter=function(e,t){var n=g(e)?e:Ie(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=T(i(t)?"millisecond":t))?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())},is.isBefore=function(e,t){var n=g(e)?e:Ie(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=T(i(t)?"millisecond":t))?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())},is.isBetween=function(e,t,n,s){return("("===(s=s||"()")[0]?this.isAfter(e,n):!this.isBefore(e,n))&&(")"===s[1]?this.isBefore(t,n):!this.isAfter(t,n))},is.isSame=function(e,t){var n,s=g(e)?e:Ie(e);return!(!this.isValid()||!s.isValid())&&("millisecond"===(t=T(t||"millisecond"))?this.valueOf()===s.valueOf():(n=s.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))},is.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},is.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},is.isValid=function(){return f(this)},is.lang=Xn,is.locale=at,is.localeData=ot,is.max=zn,is.min=An,is.parsingFlags=function(){return l({},c(this))},is.set=function(e,t){if("object"==typeof e)for(var n=W(e=b(e)),s=0;s<n.length;s++)this[n[s].unit](e[n[s].unit]);else if(e=T(e),D(this[e]))return this[e](t);return this},is.startOf=function(e){switch(e=T(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e&&this.weekday(0),"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this},is.subtract=Qn,is.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},is.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},is.toDate=function(){return new Date(this.valueOf())},is.toISOString=function(){if(!this.isValid())return null;var e=this.clone().utc();return e.year()<0||e.year()>9999?N(e,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):D(Date.prototype.toISOString)?this.toDate().toISOString():N(e,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},is.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z");var n="["+e+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i=t+'[")]';return this.format(n+s+"-MM-DD[T]HH:mm:ss.SSS"+i)},is.toJSON=function(){return this.isValid()?this.toISOString():null},is.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},is.unix=function(){return Math.floor(this.valueOf()/1e3)},is.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},is.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},is.year=gn,is.isLeapYear=function(){return Z(this.year())},is.weekYear=function(e){return lt.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},is.isoWeekYear=function(e){return lt.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},is.quarter=is.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},is.month=ee,is.daysInMonth=function(){return Q(this.year(),this.month())},is.week=is.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},is.isoWeek=is.isoWeeks=function(e){var t=ae(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},is.weeksInYear=function(){var e=this.localeData()._week;return oe(this.year(),e.dow,e.doy)},is.isoWeeksInYear=function(){return oe(this.year(),1,4)},is.date=Kn,is.day=is.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=ue(e,this.localeData()),this.add(e-t,"d")):t},is.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},is.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var t=le(e,this.localeData());return this.day(this.day()%7?t:t-7)}return this.day()||7},is.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},is.hour=is.hours=Rn,is.minute=is.minutes=es,is.second=is.seconds=ts,is.millisecond=is.milliseconds=ss,is.utcOffset=function(t,n,s){var i,r=this._offset||0;if(!this.isValid())return null!=t?this:NaN;if(null!=t){if("string"==typeof t){if(null===(t=Je(tn,t)))return this}else Math.abs(t)<16&&!s&&(t*=60);return!this._isUTC&&n&&(i=Qe(this)),this._offset=t,this._isUTC=!0,null!=i&&this.add(i,"m"),r!==t&&(!n||this._changeInProgress?it(this,Ke(t-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,e.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?r:Qe(this)},is.utc=function(e){return this.utcOffset(0,e)},is.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Qe(this),"m")),this},is.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=Je(en,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this},is.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?Ie(e).utcOffset():0,(this.utcOffset()-e)%60==0)},is.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},is.isLocal=function(){return!!this.isValid()&&!this._isUTC},is.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},is.isUtc=Xe,is.isUTC=Xe,is.zoneAbbr=function(){return this._isUTC?"UTC":""},is.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},is.dates=k("dates accessor is deprecated. Use date instead.",Kn),is.months=k("months accessor is deprecated. Use month instead",ee),is.years=k("years accessor is deprecated. Use year instead",gn),is.zone=k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}),is.isDSTShifted=k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!i(this._isDSTShifted))return this._isDSTShifted;var e={};if(_(e,this),(e=Ge(e))._a){var t=e._isUTC?d(e._a):Ie(e._a);this._isDSTShifted=this.isValid()&&v(e._a,t.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted});var rs=O.prototype;rs.calendar=function(e,t,n){var s=this._calendar[e]||this._calendar.sameElse;return D(s)?s.call(t,n):s},rs.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])},rs.invalidDate=function(){return this._invalidDate},rs.ordinal=function(e){return this._ordinal.replace("%d",e)},rs.preparse=ht,rs.postformat=ht,rs.relativeTime=function(e,t,n,s){var i=this._relativeTime[n];return D(i)?i(e,t,n,s):i.replace(/%d/i,e)},rs.pastFuture=function(e,t){var n=this._relativeTime[e>0?"future":"past"];return D(n)?n(t):n.replace(/%s/i,t)},rs.set=function(e){var t,n;for(n in e)D(t=e[n])?this[n]=t:this["_"+n]=t;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},rs.months=function(e,n){return e?t(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||pn).test(n)?"format":"standalone"][e.month()]:t(this._months)?this._months:this._months.standalone},rs.monthsShort=function(e,n){return e?t(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[pn.test(n)?"format":"standalone"][e.month()]:t(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},rs.monthsParse=function(e,t,n){var s,i,r;if(this._monthsParseExact)return X.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(i=d([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(r="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[s]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s;if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s;if(!n&&this._monthsParse[s].test(e))return s}},rs.monthsRegex=function(e){return this._monthsParseExact?(u(this,"_monthsRegex")||te.call(this),e?this._monthsStrictRegex:this._monthsRegex):(u(this,"_monthsRegex")||(this._monthsRegex=kn),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},rs.monthsShortRegex=function(e){return this._monthsParseExact?(u(this,"_monthsRegex")||te.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(u(this,"_monthsShortRegex")||(this._monthsShortRegex=Mn),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},rs.week=function(e){return ae(e,this._week.dow,this._week.doy).week},rs.firstDayOfYear=function(){return this._week.doy},rs.firstDayOfWeek=function(){return this._week.dow},rs.weekdays=function(e,n){return e?t(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(n)?"format":"standalone"][e.day()]:t(this._weekdays)?this._weekdays:this._weekdays.standalone},rs.weekdaysMin=function(e){return e?this._weekdaysMin[e.day()]:this._weekdaysMin},rs.weekdaysShort=function(e){return e?this._weekdaysShort[e.day()]:this._weekdaysShort},rs.weekdaysParse=function(e,t,n){var s,i,r;if(this._weekdaysParseExact)return de.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(i=d([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(i,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(i,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(i,"").replace(".",".?")+"$","i")),this._weekdaysParse[s]||(r="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[s]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[s].test(e))return s;if(n&&"ddd"===t&&this._shortWeekdaysParse[s].test(e))return s;if(n&&"dd"===t&&this._minWeekdaysParse[s].test(e))return s;if(!n&&this._weekdaysParse[s].test(e))return s}},rs.weekdaysRegex=function(e){return this._weekdaysParseExact?(u(this,"_weekdaysRegex")||he.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(u(this,"_weekdaysRegex")||(this._weekdaysRegex=xn),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},rs.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(u(this,"_weekdaysRegex")||he.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(u(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Tn),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},rs.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(u(this,"_weekdaysRegex")||he.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(u(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=bn),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},rs.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},rs.meridiem=function(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"},pe("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===w(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),e.lang=k("moment.lang is deprecated. Use moment.locale instead.",pe),e.langData=k("moment.langData is deprecated. Use moment.localeData instead.",ve);var as=Math.abs,os=wt("ms"),us=wt("s"),ls=wt("m"),ds=wt("h"),hs=wt("d"),cs=wt("w"),fs=wt("M"),ms=wt("y"),_s=vt("milliseconds"),ys=vt("seconds"),gs=vt("minutes"),ps=vt("hours"),ws=vt("days"),vs=vt("months"),Ms=vt("years"),ks=Math.round,Ss={ss:44,s:45,m:45,h:22,d:26,M:11},Ds=Math.abs,Ys=ze.prototype;return Ys.isValid=function(){return this._isValid},Ys.abs=function(){var e=this._data;return this._milliseconds=as(this._milliseconds),this._days=as(this._days),this._months=as(this._months),e.milliseconds=as(e.milliseconds),e.seconds=as(e.seconds),e.minutes=as(e.minutes),e.hours=as(e.hours),e.months=as(e.months),e.years=as(e.years),this},Ys.add=function(e,t){return _t(this,e,t,1)},Ys.subtract=function(e,t){return _t(this,e,t,-1)},Ys.as=function(e){if(!this.isValid())return NaN;var t,n,s=this._milliseconds;if("month"===(e=T(e))||"year"===e)return t=this._days+s/864e5,n=this._months+gt(t),"month"===e?n:n/12;switch(t=this._days+Math.round(pt(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return 24*t+s/36e5;case"minute":return 1440*t+s/6e4;case"second":return 86400*t+s/1e3;case"millisecond":return Math.floor(864e5*t)+s;default:throw new Error("Unknown unit "+e)}},Ys.asMilliseconds=os,Ys.asSeconds=us,Ys.asMinutes=ls,Ys.asHours=ds,Ys.asDays=hs,Ys.asWeeks=cs,Ys.asMonths=fs,Ys.asYears=ms,Ys.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*w(this._months/12):NaN},Ys._bubble=function(){var e,t,n,s,i,r=this._milliseconds,a=this._days,o=this._months,u=this._data;return r>=0&&a>=0&&o>=0||r<=0&&a<=0&&o<=0||(r+=864e5*yt(pt(o)+a),a=0,o=0),u.milliseconds=r%1e3,e=p(r/1e3),u.seconds=e%60,t=p(e/60),u.minutes=t%60,n=p(t/60),u.hours=n%24,a+=p(n/24),i=p(gt(a)),o+=i,a-=yt(pt(i)),s=p(o/12),o%=12,u.days=a,u.months=o,u.years=s,this},Ys.clone=function(){return Ke(this)},Ys.get=function(e){return e=T(e),this.isValid()?this[e+"s"]():NaN},Ys.milliseconds=_s,Ys.seconds=ys,Ys.minutes=gs,Ys.hours=ps,Ys.days=ws,Ys.weeks=function(){return p(this.days()/7)},Ys.months=vs,Ys.years=Ms,Ys.humanize=function(e){if(!this.isValid())return this.localeData().invalidDate();var t=this.localeData(),n=kt(this,!e,t);return e&&(n=t.pastFuture(+this,n)),t.postformat(n)},Ys.toISOString=Dt,Ys.toString=Dt,Ys.toJSON=Dt,Ys.locale=at,Ys.localeData=ot,Ys.toIsoString=k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Dt),Ys.lang=Xn,C("X",0,0,"unix"),C("x",0,0,"valueOf"),L("x",Kt),L("X",nn),I("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))}),I("x",function(e,t,n){n._d=new Date(w(e))}),e.version="2.19.1",function(e){Yt=e}(Ie),e.fn=is,e.min=function(){return Ee("isBefore",[].slice.call(arguments,0))},e.max=function(){return Ee("isAfter",[].slice.call(arguments,0))},e.now=function(){return Date.now?Date.now():+new Date},e.utc=d,e.unix=function(e){return Ie(1e3*e)},e.months=function(e,t){return ft(e,t,"months")},e.isDate=a,e.locale=pe,e.invalid=m,e.duration=Ke,e.isMoment=g,e.weekdays=function(e,t,n){return mt(e,t,n,"weekdays")},e.parseZone=function(){return Ie.apply(null,arguments).parseZone()},e.localeData=ve,e.isDuration=Ze,e.monthsShort=function(e,t){return ft(e,t,"monthsShort")},e.weekdaysMin=function(e,t,n){return mt(e,t,n,"weekdaysMin")},e.defineLocale=we,e.updateLocale=function(e,t){if(null!=t){var n,s=Cn;null!=Fn[e]&&(s=Fn[e]._config),(n=new O(t=Y(s,t))).parentLocale=Fn[e],Fn[e]=n,pe(e)}else null!=Fn[e]&&(null!=Fn[e].parentLocale?Fn[e]=Fn[e].parentLocale:null!=Fn[e]&&delete Fn[e]);return Fn[e]},e.locales=function(){return Pt(Fn)},e.weekdaysShort=function(e,t,n){return mt(e,t,n,"weekdaysShort")},e.normalizeUnits=T,e.relativeTimeRounding=function(e){return void 0===e?ks:"function"==typeof e&&(ks=e,!0)},e.relativeTimeThreshold=function(e,t){return void 0!==Ss[e]&&(void 0===t?Ss[e]:(Ss[e]=t,"s"===e&&(Ss.ss=t-1),!0))},e.calendarFormat=function(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},e.prototype=is,e});
/*!
 * Bootstrap v4.0.0-beta (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");!function(t){var e=jQuery.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),function(){function t(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function e(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(t){function e(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function n(t){return(t[0]||t).nodeType}function i(){return{bindType:s.end,delegateType:s.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}}function o(){if(window.QUnit)return!1;var t=document.createElement("bootstrap");for(var e in a)if(void 0!==t.style[e])return{end:a[e]};return!1}function r(e){var n=this,i=!1;return t(this).one(l.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||l.triggerTransitionEnd(n)},e),this}var s=!1,a={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},l={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(e){var n=e.getAttribute("data-target");n&&"#"!==n||(n=e.getAttribute("href")||"");try{return t(n).length>0?n:null}catch(t){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(e){t(e).trigger(s.end)},supportsTransitionEnd:function(){return Boolean(s)},typeCheckConfig:function(t,i,o){for(var r in o)if(o.hasOwnProperty(r)){var s=o[r],a=i[r],l=a&&n(a)?"element":e(a);if(!new RegExp(s).test(l))throw new Error(t.toUpperCase()+': Option "'+r+'" provided type "'+l+'" but expected type "'+s+'".')}}};return s=o(),t.fn.emulateTransitionEnd=r,l.supportsTransitionEnd()&&(t.event.special[l.TRANSITION_END]=i()),l}(jQuery),s=(function(t){var e="alert",i=t.fn[e],s={DISMISS:'[data-dismiss="alert"]'},a={CLOSE:"close.bs.alert",CLOSED:"closed.bs.alert",CLICK_DATA_API:"click.bs.alert.data-api"},l={ALERT:"alert",FADE:"fade",SHOW:"show"},h=function(){function e(t){n(this,e),this._element=t}return e.prototype.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},e.prototype.dispose=function(){t.removeData(this._element,"bs.alert"),this._element=null},e.prototype._getRootElement=function(e){var n=r.getSelectorFromElement(e),i=!1;return n&&(i=t(n)[0]),i||(i=t(e).closest("."+l.ALERT)[0]),i},e.prototype._triggerCloseEvent=function(e){var n=t.Event(a.CLOSE);return t(e).trigger(n),n},e.prototype._removeElement=function(e){var n=this;t(e).removeClass(l.SHOW),r.supportsTransitionEnd()&&t(e).hasClass(l.FADE)?t(e).one(r.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(150):this._destroyElement(e)},e.prototype._destroyElement=function(e){t(e).detach().trigger(a.CLOSED).remove()},e._jQueryInterface=function(n){return this.each(function(){var i=t(this),o=i.data("bs.alert");o||(o=new e(this),i.data("bs.alert",o)),"close"===n&&o[n](this)})},e._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},o(e,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}}]),e}();t(document).on(a.CLICK_DATA_API,s.DISMISS,h._handleDismiss(new h)),t.fn[e]=h._jQueryInterface,t.fn[e].Constructor=h,t.fn[e].noConflict=function(){return t.fn[e]=i,h._jQueryInterface}}(jQuery),function(t){var e="button",i=t.fn[e],r={ACTIVE:"active",BUTTON:"btn",FOCUS:"focus"},s={DATA_TOGGLE_CARROT:'[data-toggle^="button"]',DATA_TOGGLE:'[data-toggle="buttons"]',INPUT:"input",ACTIVE:".active",BUTTON:".btn"},a={CLICK_DATA_API:"click.bs.button.data-api",FOCUS_BLUR_DATA_API:"focus.bs.button.data-api blur.bs.button.data-api"},l=function(){function e(t){n(this,e),this._element=t}return e.prototype.toggle=function(){var e=!0,n=!0,i=t(this._element).closest(s.DATA_TOGGLE)[0];if(i){var o=t(this._element).find(s.INPUT)[0];if(o){if("radio"===o.type)if(o.checked&&t(this._element).hasClass(r.ACTIVE))e=!1;else{var a=t(i).find(s.ACTIVE)[0];a&&t(a).removeClass(r.ACTIVE)}if(e){if(o.hasAttribute("disabled")||i.hasAttribute("disabled")||o.classList.contains("disabled")||i.classList.contains("disabled"))return;o.checked=!t(this._element).hasClass(r.ACTIVE),t(o).trigger("change")}o.focus(),n=!1}}n&&this._element.setAttribute("aria-pressed",!t(this._element).hasClass(r.ACTIVE)),e&&t(this._element).toggleClass(r.ACTIVE)},e.prototype.dispose=function(){t.removeData(this._element,"bs.button"),this._element=null},e._jQueryInterface=function(n){return this.each(function(){var i=t(this).data("bs.button");i||(i=new e(this),t(this).data("bs.button",i)),"toggle"===n&&i[n]()})},o(e,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}}]),e}();t(document).on(a.CLICK_DATA_API,s.DATA_TOGGLE_CARROT,function(e){e.preventDefault();var n=e.target;t(n).hasClass(r.BUTTON)||(n=t(n).closest(s.BUTTON)),l._jQueryInterface.call(t(n),"toggle")}).on(a.FOCUS_BLUR_DATA_API,s.DATA_TOGGLE_CARROT,function(e){var n=t(e.target).closest(s.BUTTON)[0];t(n).toggleClass(r.FOCUS,/^focus(in)?$/.test(e.type))}),t.fn[e]=l._jQueryInterface,t.fn[e].Constructor=l,t.fn[e].noConflict=function(){return t.fn[e]=i,l._jQueryInterface}}(jQuery),function(t){var e="carousel",s="bs.carousel",a="."+s,l=t.fn[e],h={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},c={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},u={NEXT:"next",PREV:"prev",LEFT:"left",RIGHT:"right"},d={SLIDE:"slide"+a,SLID:"slid"+a,KEYDOWN:"keydown"+a,MOUSEENTER:"mouseenter"+a,MOUSELEAVE:"mouseleave"+a,TOUCHEND:"touchend"+a,LOAD_DATA_API:"load.bs.carousel.data-api",CLICK_DATA_API:"click.bs.carousel.data-api"},f={CAROUSEL:"carousel",ACTIVE:"active",SLIDE:"slide",RIGHT:"carousel-item-right",LEFT:"carousel-item-left",NEXT:"carousel-item-next",PREV:"carousel-item-prev",ITEM:"carousel-item"},p={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},_=function(){function l(e,i){n(this,l),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(i),this._element=t(e)[0],this._indicatorsElement=t(this._element).find(p.INDICATORS)[0],this._addEventListeners()}return l.prototype.next=function(){this._isSliding||this._slide(u.NEXT)},l.prototype.nextWhenVisible=function(){document.hidden||this.next()},l.prototype.prev=function(){this._isSliding||this._slide(u.PREV)},l.prototype.pause=function(e){e||(this._isPaused=!0),t(this._element).find(p.NEXT_PREV)[0]&&r.supportsTransitionEnd()&&(r.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},l.prototype.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},l.prototype.to=function(e){var n=this;this._activeElement=t(this._element).find(p.ACTIVE_ITEM)[0];var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)t(this._element).one(d.SLID,function(){return n.to(e)});else{if(i===e)return this.pause(),void this.cycle();var o=e>i?u.NEXT:u.PREV;this._slide(o,this._items[e])}},l.prototype.dispose=function(){t(this._element).off(a),t.removeData(this._element,s),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},l.prototype._getConfig=function(n){return n=t.extend({},h,n),r.typeCheckConfig(e,n,c),n},l.prototype._addEventListeners=function(){var e=this;this._config.keyboard&&t(this._element).on(d.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(t(this._element).on(d.MOUSEENTER,function(t){return e.pause(t)}).on(d.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&t(this._element).on(d.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},l.prototype._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next();break;default:return}},l.prototype._getItemIndex=function(e){return this._items=t.makeArray(t(e).parent().find(p.ITEM)),this._items.indexOf(e)},l.prototype._getItemByDirection=function(t,e){var n=t===u.NEXT,i=t===u.PREV,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===u.PREV?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},l.prototype._triggerSlideEvent=function(e,n){var i=this._getItemIndex(e),o=this._getItemIndex(t(this._element).find(p.ACTIVE_ITEM)[0]),r=t.Event(d.SLIDE,{relatedTarget:e,direction:n,from:o,to:i});return t(this._element).trigger(r),r},l.prototype._setActiveIndicatorElement=function(e){if(this._indicatorsElement){t(this._indicatorsElement).find(p.ACTIVE).removeClass(f.ACTIVE);var n=this._indicatorsElement.children[this._getItemIndex(e)];n&&t(n).addClass(f.ACTIVE)}},l.prototype._slide=function(e,n){var i=this,o=t(this._element).find(p.ACTIVE_ITEM)[0],s=this._getItemIndex(o),a=n||o&&this._getItemByDirection(e,o),l=this._getItemIndex(a),h=Boolean(this._interval),c=void 0,_=void 0,g=void 0;if(e===u.NEXT?(c=f.LEFT,_=f.NEXT,g=u.LEFT):(c=f.RIGHT,_=f.PREV,g=u.RIGHT),a&&t(a).hasClass(f.ACTIVE))this._isSliding=!1;else if(!this._triggerSlideEvent(a,g).isDefaultPrevented()&&o&&a){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(a);var m=t.Event(d.SLID,{relatedTarget:a,direction:g,from:s,to:l});r.supportsTransitionEnd()&&t(this._element).hasClass(f.SLIDE)?(t(a).addClass(_),r.reflow(a),t(o).addClass(c),t(a).addClass(c),t(o).one(r.TRANSITION_END,function(){t(a).removeClass(c+" "+_).addClass(f.ACTIVE),t(o).removeClass(f.ACTIVE+" "+_+" "+c),i._isSliding=!1,setTimeout(function(){return t(i._element).trigger(m)},0)}).emulateTransitionEnd(600)):(t(o).removeClass(f.ACTIVE),t(a).addClass(f.ACTIVE),this._isSliding=!1,t(this._element).trigger(m)),h&&this.cycle()}},l._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(s),o=t.extend({},h,t(this).data());"object"===(void 0===e?"undefined":i(e))&&t.extend(o,e);var r="string"==typeof e?e:o.slide;if(n||(n=new l(this,o),t(this).data(s,n)),"number"==typeof e)n.to(e);else if("string"==typeof r){if(void 0===n[r])throw new Error('No method named "'+r+'"');n[r]()}else o.interval&&(n.pause(),n.cycle())})},l._dataApiClickHandler=function(e){var n=r.getSelectorFromElement(this);if(n){var i=t(n)[0];if(i&&t(i).hasClass(f.CAROUSEL)){var o=t.extend({},t(i).data(),t(this).data()),a=this.getAttribute("data-slide-to");a&&(o.interval=!1),l._jQueryInterface.call(t(i),o),a&&t(i).data(s).to(a),e.preventDefault()}}},o(l,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return h}}]),l}();t(document).on(d.CLICK_DATA_API,p.DATA_SLIDE,_._dataApiClickHandler),t(window).on(d.LOAD_DATA_API,function(){t(p.DATA_RIDE).each(function(){var e=t(this);_._jQueryInterface.call(e,e.data())})}),t.fn[e]=_._jQueryInterface,t.fn[e].Constructor=_,t.fn[e].noConflict=function(){return t.fn[e]=l,_._jQueryInterface}}(jQuery),function(t){var e="collapse",s="bs.collapse",a=t.fn[e],l={toggle:!0,parent:""},h={toggle:"boolean",parent:"string"},c={SHOW:"show.bs.collapse",SHOWN:"shown.bs.collapse",HIDE:"hide.bs.collapse",HIDDEN:"hidden.bs.collapse",CLICK_DATA_API:"click.bs.collapse.data-api"},u={SHOW:"show",COLLAPSE:"collapse",COLLAPSING:"collapsing",COLLAPSED:"collapsed"},d={WIDTH:"width",HEIGHT:"height"},f={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},p=function(){function a(e,i){n(this,a),this._isTransitioning=!1,this._element=e,this._config=this._getConfig(i),this._triggerArray=t.makeArray(t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var o=t(f.DATA_TOGGLE),s=0;s<o.length;s++){var l=o[s],h=r.getSelectorFromElement(l);null!==h&&t(h).filter(e).length>0&&this._triggerArray.push(l)}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}return a.prototype.toggle=function(){t(this._element).hasClass(u.SHOW)?this.hide():this.show()},a.prototype.show=function(){var e=this;if(!this._isTransitioning&&!t(this._element).hasClass(u.SHOW)){var n=void 0,i=void 0;if(this._parent&&((n=t.makeArray(t(this._parent).children().children(f.ACTIVES))).length||(n=null)),!(n&&(i=t(n).data(s))&&i._isTransitioning)){var o=t.Event(c.SHOW);if(t(this._element).trigger(o),!o.isDefaultPrevented()){n&&(a._jQueryInterface.call(t(n),"hide"),i||t(n).data(s,null));var l=this._getDimension();t(this._element).removeClass(u.COLLAPSE).addClass(u.COLLAPSING),this._element.style[l]=0,this._triggerArray.length&&t(this._triggerArray).removeClass(u.COLLAPSED).attr("aria-expanded",!0),this.setTransitioning(!0);var h=function(){t(e._element).removeClass(u.COLLAPSING).addClass(u.COLLAPSE).addClass(u.SHOW),e._element.style[l]="",e.setTransitioning(!1),t(e._element).trigger(c.SHOWN)};if(r.supportsTransitionEnd()){var d="scroll"+(l[0].toUpperCase()+l.slice(1));t(this._element).one(r.TRANSITION_END,h).emulateTransitionEnd(600),this._element.style[l]=this._element[d]+"px"}else h()}}}},a.prototype.hide=function(){var e=this;if(!this._isTransitioning&&t(this._element).hasClass(u.SHOW)){var n=t.Event(c.HIDE);if(t(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();if(this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",r.reflow(this._element),t(this._element).addClass(u.COLLAPSING).removeClass(u.COLLAPSE).removeClass(u.SHOW),this._triggerArray.length)for(var o=0;o<this._triggerArray.length;o++){var s=this._triggerArray[o],a=r.getSelectorFromElement(s);null!==a&&(t(a).hasClass(u.SHOW)||t(s).addClass(u.COLLAPSED).attr("aria-expanded",!1))}this.setTransitioning(!0);var l=function(){e.setTransitioning(!1),t(e._element).removeClass(u.COLLAPSING).addClass(u.COLLAPSE).trigger(c.HIDDEN)};this._element.style[i]="",r.supportsTransitionEnd()?t(this._element).one(r.TRANSITION_END,l).emulateTransitionEnd(600):l()}}},a.prototype.setTransitioning=function(t){this._isTransitioning=t},a.prototype.dispose=function(){t.removeData(this._element,s),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},a.prototype._getConfig=function(n){return n=t.extend({},l,n),n.toggle=Boolean(n.toggle),r.typeCheckConfig(e,n,h),n},a.prototype._getDimension=function(){return t(this._element).hasClass(d.WIDTH)?d.WIDTH:d.HEIGHT},a.prototype._getParent=function(){var e=this,n=t(this._config.parent)[0],i='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return t(n).find(i).each(function(t,n){e._addAriaAndCollapsedClass(a._getTargetFromElement(n),[n])}),n},a.prototype._addAriaAndCollapsedClass=function(e,n){if(e){var i=t(e).hasClass(u.SHOW);n.length&&t(n).toggleClass(u.COLLAPSED,!i).attr("aria-expanded",i)}},a._getTargetFromElement=function(e){var n=r.getSelectorFromElement(e);return n?t(n)[0]:null},a._jQueryInterface=function(e){return this.each(function(){var n=t(this),o=n.data(s),r=t.extend({},l,n.data(),"object"===(void 0===e?"undefined":i(e))&&e);if(!o&&r.toggle&&/show|hide/.test(e)&&(r.toggle=!1),o||(o=new a(this,r),n.data(s,o)),"string"==typeof e){if(void 0===o[e])throw new Error('No method named "'+e+'"');o[e]()}})},o(a,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return l}}]),a}();t(document).on(c.CLICK_DATA_API,f.DATA_TOGGLE,function(e){/input|textarea/i.test(e.target.tagName)||e.preventDefault();var n=t(this),i=r.getSelectorFromElement(this);t(i).each(function(){var e=t(this),i=e.data(s)?"toggle":n.data();p._jQueryInterface.call(e,i)})}),t.fn[e]=p._jQueryInterface,t.fn[e].Constructor=p,t.fn[e].noConflict=function(){return t.fn[e]=a,p._jQueryInterface}}(jQuery),function(t){if("undefined"==typeof Popper)throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");var e="dropdown",s="bs.dropdown",a="."+s,l=t.fn[e],h=new RegExp("38|40|27"),c={HIDE:"hide"+a,HIDDEN:"hidden"+a,SHOW:"show"+a,SHOWN:"shown"+a,CLICK:"click"+a,CLICK_DATA_API:"click.bs.dropdown.data-api",KEYDOWN_DATA_API:"keydown.bs.dropdown.data-api",KEYUP_DATA_API:"keyup.bs.dropdown.data-api"},u={DISABLED:"disabled",SHOW:"show",DROPUP:"dropup",MENURIGHT:"dropdown-menu-right",MENULEFT:"dropdown-menu-left"},d={DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:".dropdown form",MENU:".dropdown-menu",NAVBAR_NAV:".navbar-nav",VISIBLE_ITEMS:".dropdown-menu .dropdown-item:not(.disabled)"},f={TOP:"top-start",TOPEND:"top-end",BOTTOM:"bottom-start",BOTTOMEND:"bottom-end"},p={placement:f.BOTTOM,offset:0,flip:!0},_={placement:"string",offset:"(number|string)",flip:"boolean"},g=function(){function l(t,e){n(this,l),this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}return l.prototype.toggle=function(){if(!this._element.disabled&&!t(this._element).hasClass(u.DISABLED)){var e=l._getParentFromElement(this._element),n=t(this._menu).hasClass(u.SHOW);if(l._clearMenus(),!n){var i={relatedTarget:this._element},o=t.Event(c.SHOW,i);if(t(e).trigger(o),!o.isDefaultPrevented()){var r=this._element;t(e).hasClass(u.DROPUP)&&(t(this._menu).hasClass(u.MENULEFT)||t(this._menu).hasClass(u.MENURIGHT))&&(r=e),this._popper=new Popper(r,this._menu,this._getPopperConfig()),"ontouchstart"in document.documentElement&&!t(e).closest(d.NAVBAR_NAV).length&&t("body").children().on("mouseover",null,t.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),t(this._menu).toggleClass(u.SHOW),t(e).toggleClass(u.SHOW).trigger(t.Event(c.SHOWN,i))}}}},l.prototype.dispose=function(){t.removeData(this._element,s),t(this._element).off(a),this._element=null,this._menu=null,null!==this._popper&&this._popper.destroy(),this._popper=null},l.prototype.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},l.prototype._addEventListeners=function(){var e=this;t(this._element).on(c.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},l.prototype._getConfig=function(n){var i=t(this._element).data();return void 0!==i.placement&&(i.placement=f[i.placement.toUpperCase()]),n=t.extend({},this.constructor.Default,t(this._element).data(),n),r.typeCheckConfig(e,n,this.constructor.DefaultType),n},l.prototype._getMenuElement=function(){if(!this._menu){var e=l._getParentFromElement(this._element);this._menu=t(e).find(d.MENU)[0]}return this._menu},l.prototype._getPlacement=function(){var e=t(this._element).parent(),n=this._config.placement;return e.hasClass(u.DROPUP)||this._config.placement===f.TOP?(n=f.TOP,t(this._menu).hasClass(u.MENURIGHT)&&(n=f.TOPEND)):t(this._menu).hasClass(u.MENURIGHT)&&(n=f.BOTTOMEND),n},l.prototype._detectNavbar=function(){return t(this._element).closest(".navbar").length>0},l.prototype._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:{offset:this._config.offset},flip:{enabled:this._config.flip}}};return this._inNavbar&&(t.modifiers.applyStyle={enabled:!this._inNavbar}),t},l._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(s),o="object"===(void 0===e?"undefined":i(e))?e:null;if(n||(n=new l(this,o),t(this).data(s,n)),"string"==typeof e){if(void 0===n[e])throw new Error('No method named "'+e+'"');n[e]()}})},l._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var n=t.makeArray(t(d.DATA_TOGGLE)),i=0;i<n.length;i++){var o=l._getParentFromElement(n[i]),r=t(n[i]).data(s),a={relatedTarget:n[i]};if(r){var h=r._menu;if(t(o).hasClass(u.SHOW)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&t.contains(o,e.target))){var f=t.Event(c.HIDE,a);t(o).trigger(f),f.isDefaultPrevented()||("ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),n[i].setAttribute("aria-expanded","false"),t(h).removeClass(u.SHOW),t(o).removeClass(u.SHOW).trigger(t.Event(c.HIDDEN,a)))}}}},l._getParentFromElement=function(e){var n=void 0,i=r.getSelectorFromElement(e);return i&&(n=t(i)[0]),n||e.parentNode},l._dataApiKeydownHandler=function(e){if(!(!h.test(e.which)||/button/i.test(e.target.tagName)&&32===e.which||/input|textarea/i.test(e.target.tagName)||(e.preventDefault(),e.stopPropagation(),this.disabled||t(this).hasClass(u.DISABLED)))){var n=l._getParentFromElement(this),i=t(n).hasClass(u.SHOW);if((i||27===e.which&&32===e.which)&&(!i||27!==e.which&&32!==e.which)){var o=t(n).find(d.VISIBLE_ITEMS).get();if(o.length){var r=o.indexOf(e.target);38===e.which&&r>0&&r--,40===e.which&&r<o.length-1&&r++,r<0&&(r=0),o[r].focus()}}else{if(27===e.which){var s=t(n).find(d.DATA_TOGGLE)[0];t(s).trigger("focus")}t(this).trigger("click")}}},o(l,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return p}},{key:"DefaultType",get:function(){return _}}]),l}();t(document).on(c.KEYDOWN_DATA_API,d.DATA_TOGGLE,g._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API,d.MENU,g._dataApiKeydownHandler).on(c.CLICK_DATA_API+" "+c.KEYUP_DATA_API,g._clearMenus).on(c.CLICK_DATA_API,d.DATA_TOGGLE,function(e){e.preventDefault(),e.stopPropagation(),g._jQueryInterface.call(t(this),"toggle")}).on(c.CLICK_DATA_API,d.FORM_CHILD,function(t){t.stopPropagation()}),t.fn[e]=g._jQueryInterface,t.fn[e].Constructor=g,t.fn[e].noConflict=function(){return t.fn[e]=l,g._jQueryInterface}}(jQuery),function(t){var e="modal",s=".bs.modal",a=t.fn[e],l={backdrop:!0,keyboard:!0,focus:!0,show:!0},h={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},c={HIDE:"hide.bs.modal",HIDDEN:"hidden.bs.modal",SHOW:"show.bs.modal",SHOWN:"shown.bs.modal",FOCUSIN:"focusin.bs.modal",RESIZE:"resize.bs.modal",CLICK_DISMISS:"click.dismiss.bs.modal",KEYDOWN_DISMISS:"keydown.dismiss.bs.modal",MOUSEUP_DISMISS:"mouseup.dismiss.bs.modal",MOUSEDOWN_DISMISS:"mousedown.dismiss.bs.modal",CLICK_DATA_API:"click.bs.modal.data-api"},u={SCROLLBAR_MEASURER:"modal-scrollbar-measure",BACKDROP:"modal-backdrop",OPEN:"modal-open",FADE:"fade",SHOW:"show"},d={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},f=function(){function a(e,i){n(this,a),this._config=this._getConfig(i),this._element=e,this._dialog=t(e).find(d.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}return a.prototype.toggle=function(t){return this._isShown?this.hide():this.show(t)},a.prototype.show=function(e){var n=this;if(!this._isTransitioning){r.supportsTransitionEnd()&&t(this._element).hasClass(u.FADE)&&(this._isTransitioning=!0);var i=t.Event(c.SHOW,{relatedTarget:e});t(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),t(document.body).addClass(u.OPEN),this._setEscapeEvent(),this._setResizeEvent(),t(this._element).on(c.CLICK_DISMISS,d.DATA_DISMISS,function(t){return n.hide(t)}),t(this._dialog).on(c.MOUSEDOWN_DISMISS,function(){t(n._element).one(c.MOUSEUP_DISMISS,function(e){t(e.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(e)}))}},a.prototype.hide=function(e){var n=this;if(e&&e.preventDefault(),!this._isTransitioning&&this._isShown){var i=r.supportsTransitionEnd()&&t(this._element).hasClass(u.FADE);i&&(this._isTransitioning=!0);var o=t.Event(c.HIDE);t(this._element).trigger(o),this._isShown&&!o.isDefaultPrevented()&&(this._isShown=!1,this._setEscapeEvent(),this._setResizeEvent(),t(document).off(c.FOCUSIN),t(this._element).removeClass(u.SHOW),t(this._element).off(c.CLICK_DISMISS),t(this._dialog).off(c.MOUSEDOWN_DISMISS),i?t(this._element).one(r.TRANSITION_END,function(t){return n._hideModal(t)}).emulateTransitionEnd(300):this._hideModal())}},a.prototype.dispose=function(){t.removeData(this._element,"bs.modal"),t(window,document,this._element,this._backdrop).off(s),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},a.prototype.handleUpdate=function(){this._adjustDialog()},a.prototype._getConfig=function(n){return n=t.extend({},l,n),r.typeCheckConfig(e,n,h),n},a.prototype._showElement=function(e){var n=this,i=r.supportsTransitionEnd()&&t(this._element).hasClass(u.FADE);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&r.reflow(this._element),t(this._element).addClass(u.SHOW),this._config.focus&&this._enforceFocus();var o=t.Event(c.SHOWN,{relatedTarget:e}),s=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,t(n._element).trigger(o)};i?t(this._dialog).one(r.TRANSITION_END,s).emulateTransitionEnd(300):s()},a.prototype._enforceFocus=function(){var e=this;t(document).off(c.FOCUSIN).on(c.FOCUSIN,function(n){document===n.target||e._element===n.target||t(e._element).has(n.target).length||e._element.focus()})},a.prototype._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?t(this._element).on(c.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||t(this._element).off(c.KEYDOWN_DISMISS)},a.prototype._setResizeEvent=function(){var e=this;this._isShown?t(window).on(c.RESIZE,function(t){return e.handleUpdate(t)}):t(window).off(c.RESIZE)},a.prototype._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){t(document.body).removeClass(u.OPEN),e._resetAdjustments(),e._resetScrollbar(),t(e._element).trigger(c.HIDDEN)})},a.prototype._removeBackdrop=function(){this._backdrop&&(t(this._backdrop).remove(),this._backdrop=null)},a.prototype._showBackdrop=function(e){var n=this,i=t(this._element).hasClass(u.FADE)?u.FADE:"";if(this._isShown&&this._config.backdrop){var o=r.supportsTransitionEnd()&&i;if(this._backdrop=document.createElement("div"),this._backdrop.className=u.BACKDROP,i&&t(this._backdrop).addClass(i),t(this._backdrop).appendTo(document.body),t(this._element).on(c.CLICK_DISMISS,function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),o&&r.reflow(this._backdrop),t(this._backdrop).addClass(u.SHOW),!e)return;if(!o)return void e();t(this._backdrop).one(r.TRANSITION_END,e).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){t(this._backdrop).removeClass(u.SHOW);var s=function(){n._removeBackdrop(),e&&e()};r.supportsTransitionEnd()&&t(this._element).hasClass(u.FADE)?t(this._backdrop).one(r.TRANSITION_END,s).emulateTransitionEnd(150):s()}else e&&e()},a.prototype._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},a.prototype._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},a.prototype._checkScrollbar=function(){this._isBodyOverflowing=document.body.clientWidth<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},a.prototype._setScrollbar=function(){var e=this;if(this._isBodyOverflowing){t(d.FIXED_CONTENT).each(function(n,i){var o=t(i)[0].style.paddingRight,r=t(i).css("padding-right");t(i).data("padding-right",o).css("padding-right",parseFloat(r)+e._scrollbarWidth+"px")}),t(d.NAVBAR_TOGGLER).each(function(n,i){var o=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",o).css("margin-right",parseFloat(r)+e._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=t("body").css("padding-right");t("body").data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},a.prototype._resetScrollbar=function(){t(d.FIXED_CONTENT).each(function(e,n){var i=t(n).data("padding-right");void 0!==i&&t(n).css("padding-right",i).removeData("padding-right")}),t(d.NAVBAR_TOGGLER).each(function(e,n){var i=t(n).data("margin-right");void 0!==i&&t(n).css("margin-right",i).removeData("margin-right")});var e=t("body").data("padding-right");void 0!==e&&t("body").css("padding-right",e).removeData("padding-right")},a.prototype._getScrollbarWidth=function(){var t=document.createElement("div");t.className=u.SCROLLBAR_MEASURER,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},a._jQueryInterface=function(e,n){return this.each(function(){var o=t(this).data("bs.modal"),r=t.extend({},a.Default,t(this).data(),"object"===(void 0===e?"undefined":i(e))&&e);if(o||(o=new a(this,r),t(this).data("bs.modal",o)),"string"==typeof e){if(void 0===o[e])throw new Error('No method named "'+e+'"');o[e](n)}else r.show&&o.show(n)})},o(a,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return l}}]),a}();t(document).on(c.CLICK_DATA_API,d.DATA_TOGGLE,function(e){var n=this,i=void 0,o=r.getSelectorFromElement(this);o&&(i=t(o)[0]);var s=t(i).data("bs.modal")?"toggle":t.extend({},t(i).data(),t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var a=t(i).one(c.SHOW,function(e){e.isDefaultPrevented()||a.one(c.HIDDEN,function(){t(n).is(":visible")&&n.focus()})});f._jQueryInterface.call(t(i),s,this)}),t.fn[e]=f._jQueryInterface,t.fn[e].Constructor=f,t.fn[e].noConflict=function(){return t.fn[e]=a,f._jQueryInterface}}(jQuery),function(t){var e="scrollspy",s=t.fn[e],a={offset:10,method:"auto",target:""},l={offset:"number",method:"string",target:"(string|element)"},h={ACTIVATE:"activate.bs.scrollspy",SCROLL:"scroll.bs.scrollspy",LOAD_DATA_API:"load.bs.scrollspy.data-api"},c={DROPDOWN_ITEM:"dropdown-item",DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active"},u={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},d={OFFSET:"offset",POSITION:"position"},f=function(){function s(e,i){var o=this;n(this,s),this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(i),this._selector=this._config.target+" "+u.NAV_LINKS+","+this._config.target+" "+u.LIST_ITEMS+","+this._config.target+" "+u.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,t(this._scrollElement).on(h.SCROLL,function(t){return o._process(t)}),this.refresh(),this._process()}return s.prototype.refresh=function(){var e=this,n=this._scrollElement!==this._scrollElement.window?d.POSITION:d.OFFSET,i="auto"===this._config.method?n:this._config.method,o=i===d.POSITION?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),t.makeArray(t(this._selector)).map(function(e){var n=void 0,s=r.getSelectorFromElement(e);if(s&&(n=t(s)[0]),n){var a=n.getBoundingClientRect();if(a.width||a.height)return[t(n)[i]().top+o,s]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},s.prototype.dispose=function(){t.removeData(this._element,"bs.scrollspy"),t(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},s.prototype._getConfig=function(n){if("string"!=typeof(n=t.extend({},a,n)).target){var i=t(n.target).attr("id");i||(i=r.getUID(e),t(n.target).attr("id",i)),n.target="#"+i}return r.typeCheckConfig(e,n,l),n},s.prototype._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},s.prototype._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},s.prototype._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},s.prototype._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;)this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&(void 0===this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}},s.prototype._activate=function(e){this._activeTarget=e,this._clear();var n=this._selector.split(",");n=n.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var i=t(n.join(","));i.hasClass(c.DROPDOWN_ITEM)?(i.closest(u.DROPDOWN).find(u.DROPDOWN_TOGGLE).addClass(c.ACTIVE),i.addClass(c.ACTIVE)):(i.addClass(c.ACTIVE),i.parents(u.NAV_LIST_GROUP).prev(u.NAV_LINKS+", "+u.LIST_ITEMS).addClass(c.ACTIVE)),t(this._scrollElement).trigger(h.ACTIVATE,{relatedTarget:e})},s.prototype._clear=function(){t(this._selector).filter(u.ACTIVE).removeClass(c.ACTIVE)},s._jQueryInterface=function(e){return this.each(function(){var n=t(this).data("bs.scrollspy"),o="object"===(void 0===e?"undefined":i(e))&&e;if(n||(n=new s(this,o),t(this).data("bs.scrollspy",n)),"string"==typeof e){if(void 0===n[e])throw new Error('No method named "'+e+'"');n[e]()}})},o(s,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return a}}]),s}();t(window).on(h.LOAD_DATA_API,function(){for(var e=t.makeArray(t(u.DATA_SPY)),n=e.length;n--;){var i=t(e[n]);f._jQueryInterface.call(i,i.data())}}),t.fn[e]=f._jQueryInterface,t.fn[e].Constructor=f,t.fn[e].noConflict=function(){return t.fn[e]=s,f._jQueryInterface}}(jQuery),function(t){var e=t.fn.tab,i={HIDE:"hide.bs.tab",HIDDEN:"hidden.bs.tab",SHOW:"show.bs.tab",SHOWN:"shown.bs.tab",CLICK_DATA_API:"click.bs.tab.data-api"},s={DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active",DISABLED:"disabled",FADE:"fade",SHOW:"show"},a={DROPDOWN:".dropdown",NAV_LIST_GROUP:".nav, .list-group",ACTIVE:".active",DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',DROPDOWN_TOGGLE:".dropdown-toggle",DROPDOWN_ACTIVE_CHILD:"> .dropdown-menu .active"},l=function(){function e(t){n(this,e),this._element=t}return e.prototype.show=function(){var e=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&t(this._element).hasClass(s.ACTIVE)||t(this._element).hasClass(s.DISABLED))){var n=void 0,o=void 0,l=t(this._element).closest(a.NAV_LIST_GROUP)[0],h=r.getSelectorFromElement(this._element);l&&(o=t.makeArray(t(l).find(a.ACTIVE)),o=o[o.length-1]);var c=t.Event(i.HIDE,{relatedTarget:this._element}),u=t.Event(i.SHOW,{relatedTarget:o});if(o&&t(o).trigger(c),t(this._element).trigger(u),!u.isDefaultPrevented()&&!c.isDefaultPrevented()){h&&(n=t(h)[0]),this._activate(this._element,l);var d=function(){var n=t.Event(i.HIDDEN,{relatedTarget:e._element}),r=t.Event(i.SHOWN,{relatedTarget:o});t(o).trigger(n),t(e._element).trigger(r)};n?this._activate(n,n.parentNode,d):d()}}},e.prototype.dispose=function(){t.removeData(this._element,"bs.tab"),this._element=null},e.prototype._activate=function(e,n,i){var o=this,l=t(n).find(a.ACTIVE)[0],h=i&&r.supportsTransitionEnd()&&l&&t(l).hasClass(s.FADE),c=function(){return o._transitionComplete(e,l,h,i)};l&&h?t(l).one(r.TRANSITION_END,c).emulateTransitionEnd(150):c(),l&&t(l).removeClass(s.SHOW)},e.prototype._transitionComplete=function(e,n,i,o){if(n){t(n).removeClass(s.ACTIVE);var l=t(n.parentNode).find(a.DROPDOWN_ACTIVE_CHILD)[0];l&&t(l).removeClass(s.ACTIVE),n.setAttribute("aria-expanded",!1)}if(t(e).addClass(s.ACTIVE),e.setAttribute("aria-expanded",!0),i?(r.reflow(e),t(e).addClass(s.SHOW)):t(e).removeClass(s.FADE),e.parentNode&&t(e.parentNode).hasClass(s.DROPDOWN_MENU)){var h=t(e).closest(a.DROPDOWN)[0];h&&t(h).find(a.DROPDOWN_TOGGLE).addClass(s.ACTIVE),e.setAttribute("aria-expanded",!0)}o&&o()},e._jQueryInterface=function(n){return this.each(function(){var i=t(this),o=i.data("bs.tab");if(o||(o=new e(this),i.data("bs.tab",o)),"string"==typeof n){if(void 0===o[n])throw new Error('No method named "'+n+'"');o[n]()}})},o(e,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}}]),e}();t(document).on(i.CLICK_DATA_API,a.DATA_TOGGLE,function(e){e.preventDefault(),l._jQueryInterface.call(t(this),"show")}),t.fn.tab=l._jQueryInterface,t.fn.tab.Constructor=l,t.fn.tab.noConflict=function(){return t.fn.tab=e,l._jQueryInterface}}(jQuery),function(t){if("undefined"==typeof Popper)throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");var e="tooltip",s=".bs.tooltip",a=t.fn[e],l=new RegExp("(^|\\s)bs-tooltip\\S+","g"),h={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)"},c={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},u={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip"},d={SHOW:"show",OUT:"out"},f={HIDE:"hide"+s,HIDDEN:"hidden"+s,SHOW:"show"+s,SHOWN:"shown"+s,INSERTED:"inserted"+s,CLICK:"click"+s,FOCUSIN:"focusin"+s,FOCUSOUT:"focusout"+s,MOUSEENTER:"mouseenter"+s,MOUSELEAVE:"mouseleave"+s},p={FADE:"fade",SHOW:"show"},_={TOOLTIP:".tooltip",TOOLTIP_INNER:".tooltip-inner",ARROW:".arrow"},g={HOVER:"hover",FOCUS:"focus",CLICK:"click",MANUAL:"manual"},m=function(){function a(t,e){n(this,a),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}return a.prototype.enable=function(){this._isEnabled=!0},a.prototype.disable=function(){this._isEnabled=!1},a.prototype.toggleEnabled=function(){this._isEnabled=!this._isEnabled},a.prototype.toggle=function(e){if(e){var n=this.constructor.DATA_KEY,i=t(e.currentTarget).data(n);i||(i=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(t(this.getTipElement()).hasClass(p.SHOW))return void this._leave(null,this);this._enter(null,this)}},a.prototype.dispose=function(){clearTimeout(this._timeout),t.removeData(this.element,this.constructor.DATA_KEY),t(this.element).off(this.constructor.EVENT_KEY),t(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&t(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},a.prototype.show=function(){var e=this;if("none"===t(this.element).css("display"))throw new Error("Please use show on visible elements");var n=t.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){t(this.element).trigger(n);var i=t.contains(this.element.ownerDocument.documentElement,this.element);if(n.isDefaultPrevented()||!i)return;var o=this.getTipElement(),s=r.getUID(this.constructor.NAME);o.setAttribute("id",s),this.element.setAttribute("aria-describedby",s),this.setContent(),this.config.animation&&t(o).addClass(p.FADE);var l="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,h=this._getAttachment(l);this.addAttachmentClass(h);var c=!1===this.config.container?document.body:t(this.config.container);t(o).data(this.constructor.DATA_KEY,this),t.contains(this.element.ownerDocument.documentElement,this.tip)||t(o).appendTo(c),t(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new Popper(this.element,o,{placement:h,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:_.ARROW}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),t(o).addClass(p.SHOW),"ontouchstart"in document.documentElement&&t("body").children().on("mouseover",null,t.noop);var u=function(){e.config.animation&&e._fixTransition();var n=e._hoverState;e._hoverState=null,t(e.element).trigger(e.constructor.Event.SHOWN),n===d.OUT&&e._leave(null,e)};r.supportsTransitionEnd()&&t(this.tip).hasClass(p.FADE)?t(this.tip).one(r.TRANSITION_END,u).emulateTransitionEnd(a._TRANSITION_DURATION):u()}},a.prototype.hide=function(e){var n=this,i=this.getTipElement(),o=t.Event(this.constructor.Event.HIDE),s=function(){n._hoverState!==d.SHOW&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),t(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),e&&e()};t(this.element).trigger(o),o.isDefaultPrevented()||(t(i).removeClass(p.SHOW),"ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),this._activeTrigger[g.CLICK]=!1,this._activeTrigger[g.FOCUS]=!1,this._activeTrigger[g.HOVER]=!1,r.supportsTransitionEnd()&&t(this.tip).hasClass(p.FADE)?t(i).one(r.TRANSITION_END,s).emulateTransitionEnd(150):s(),this._hoverState="")},a.prototype.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},a.prototype.isWithContent=function(){return Boolean(this.getTitle())},a.prototype.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-tooltip-"+e)},a.prototype.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0]},a.prototype.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(_.TOOLTIP_INNER),this.getTitle()),e.removeClass(p.FADE+" "+p.SHOW)},a.prototype.setElementContent=function(e,n){var o=this.config.html;"object"===(void 0===n?"undefined":i(n))&&(n.nodeType||n.jquery)?o?t(n).parent().is(e)||e.empty().append(n):e.text(t(n).text()):e[o?"html":"text"](n)},a.prototype.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},a.prototype._getAttachment=function(t){return c[t.toUpperCase()]},a.prototype._setListeners=function(){var e=this;this.config.trigger.split(" ").forEach(function(n){if("click"===n)t(e.element).on(e.constructor.Event.CLICK,e.config.selector,function(t){return e.toggle(t)});else if(n!==g.MANUAL){var i=n===g.HOVER?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN,o=n===g.HOVER?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT;t(e.element).on(i,e.config.selector,function(t){return e._enter(t)}).on(o,e.config.selector,function(t){return e._leave(t)})}t(e.element).closest(".modal").on("hide.bs.modal",function(){return e.hide()})}),this.config.selector?this.config=t.extend({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},a.prototype._fixTitle=function(){var t=i(this.element.getAttribute("data-original-title"));(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},a.prototype._enter=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusin"===e.type?g.FOCUS:g.HOVER]=!0),t(n.getTipElement()).hasClass(p.SHOW)||n._hoverState===d.SHOW?n._hoverState=d.SHOW:(clearTimeout(n._timeout),n._hoverState=d.SHOW,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===d.SHOW&&n.show()},n.config.delay.show):n.show())},a.prototype._leave=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusout"===e.type?g.FOCUS:g.HOVER]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=d.OUT,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){n._hoverState===d.OUT&&n.hide()},n.config.delay.hide):n.hide())},a.prototype._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},a.prototype._getConfig=function(n){return(n=t.extend({},this.constructor.Default,t(this.element).data(),n)).delay&&"number"==typeof n.delay&&(n.delay={show:n.delay,hide:n.delay}),n.title&&"number"==typeof n.title&&(n.title=n.title.toString()),n.content&&"number"==typeof n.content&&(n.content=n.content.toString()),r.typeCheckConfig(e,n,this.constructor.DefaultType),n},a.prototype._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},a.prototype._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(l);null!==n&&n.length>0&&e.removeClass(n.join(""))},a.prototype._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},a.prototype._fixTransition=function(){var e=this.getTipElement(),n=this.config.animation;null===e.getAttribute("x-placement")&&(t(e).removeClass(p.FADE),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},a._jQueryInterface=function(e){return this.each(function(){var n=t(this).data("bs.tooltip"),o="object"===(void 0===e?"undefined":i(e))&&e;if((n||!/dispose|hide/.test(e))&&(n||(n=new a(this,o),t(this).data("bs.tooltip",n)),"string"==typeof e)){if(void 0===n[e])throw new Error('No method named "'+e+'"');n[e]()}})},o(a,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return u}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return f}},{key:"EVENT_KEY",get:function(){return s}},{key:"DefaultType",get:function(){return h}}]),a}();return t.fn[e]=m._jQueryInterface,t.fn[e].Constructor=m,t.fn[e].noConflict=function(){return t.fn[e]=a,m._jQueryInterface},m}(jQuery));!function(r){var a="popover",l=".bs.popover",h=r.fn[a],c=new RegExp("(^|\\s)bs-popover\\S+","g"),u=r.extend({},s.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),d=r.extend({},s.DefaultType,{content:"(string|element|function)"}),f={FADE:"fade",SHOW:"show"},p={TITLE:".popover-header",CONTENT:".popover-body"},_={HIDE:"hide"+l,HIDDEN:"hidden"+l,SHOW:"show"+l,SHOWN:"shown"+l,INSERTED:"inserted"+l,CLICK:"click"+l,FOCUSIN:"focusin"+l,FOCUSOUT:"focusout"+l,MOUSEENTER:"mouseenter"+l,MOUSELEAVE:"mouseleave"+l},g=function(s){function h(){return n(this,h),t(this,s.apply(this,arguments))}return e(h,s),h.prototype.isWithContent=function(){return this.getTitle()||this._getContent()},h.prototype.addAttachmentClass=function(t){r(this.getTipElement()).addClass("bs-popover-"+t)},h.prototype.getTipElement=function(){return this.tip=this.tip||r(this.config.template)[0]},h.prototype.setContent=function(){var t=r(this.getTipElement());this.setElementContent(t.find(p.TITLE),this.getTitle()),this.setElementContent(t.find(p.CONTENT),this._getContent()),t.removeClass(f.FADE+" "+f.SHOW)},h.prototype._getContent=function(){return this.element.getAttribute("data-content")||("function"==typeof this.config.content?this.config.content.call(this.element):this.config.content)},h.prototype._cleanTipClass=function(){var t=r(this.getTipElement()),e=t.attr("class").match(c);null!==e&&e.length>0&&t.removeClass(e.join(""))},h._jQueryInterface=function(t){return this.each(function(){var e=r(this).data("bs.popover"),n="object"===(void 0===t?"undefined":i(t))?t:null;if((e||!/destroy|hide/.test(t))&&(e||(e=new h(this,n),r(this).data("bs.popover",e)),"string"==typeof t)){if(void 0===e[t])throw new Error('No method named "'+t+'"');e[t]()}})},o(h,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return u}},{key:"NAME",get:function(){return a}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return _}},{key:"EVENT_KEY",get:function(){return l}},{key:"DefaultType",get:function(){return d}}]),h}(s);r.fn[a]=g._jQueryInterface,r.fn[a].Constructor=g,r.fn[a].noConflict=function(){return r.fn[a]=h,g._jQueryInterface}}(jQuery)}();
/*
 AngularJS v1.6.6
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(u){'use strict';function oe(a){if(E(a))t(a.objectMaxDepth)&&(Lc.objectMaxDepth=Ub(a.objectMaxDepth)?a.objectMaxDepth:NaN);else return Lc}function Ub(a){return Y(a)&&0<a}function M(a,b){b=b||Error;return function(){var d=arguments[0],c;c="["+(a?a+":":"")+d+"] http://errors.angularjs.org/1.6.6/"+(a?a+"/":"")+d;for(d=1;d<arguments.length;d++){c=c+(1==d?"?":"&")+"p"+(d-1)+"=";var e=encodeURIComponent,f;f=arguments[d];f="function"==typeof f?f.toString().replace(/ \{[\s\S]*$/,""):"undefined"==
typeof f?"undefined":"string"!=typeof f?JSON.stringify(f):f;c+=e(f)}return new b(c)}}function xa(a){if(null==a||$a(a))return!1;if(I(a)||D(a)||B&&a instanceof B)return!0;var b="length"in Object(a)&&a.length;return Y(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"===typeof a.item)}function p(a,b,d){var c,e;if(a)if(A(a))for(c in a)"prototype"!==c&&"length"!==c&&"name"!==c&&a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else if(I(a)||xa(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in
a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==p)a.forEach(b,d,a);else if(Mc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else for(c in a)ra.call(a,c)&&b.call(d,a[c],c,a);return a}function Nc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function Vb(a){return function(b,d){a(d,b)}}function pe(){return++sb}function Wb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=
b[e];if(E(g)||A(g))for(var k=Object.keys(g),h=0,l=k.length;h<l;h++){var m=k[h],n=g[m];d&&E(n)?ea(n)?a[m]=new Date(n.valueOf()):ab(n)?a[m]=new RegExp(n):n.nodeName?a[m]=n.cloneNode(!0):Xb(n)?a[m]=n.clone():(E(a[m])||(a[m]=I(n)?[]:{}),Wb(a[m],[n],!0)):a[m]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function P(a){return Wb(a,ya.call(arguments,1),!1)}function qe(a){return Wb(a,ya.call(arguments,1),!0)}function Z(a){return parseInt(a,10)}function Yb(a,b){return P(Object.create(a),b)}function C(){}
function bb(a){return a}function ka(a){return function(){return a}}function Zb(a){return A(a.toString)&&a.toString!==ha}function w(a){return"undefined"===typeof a}function t(a){return"undefined"!==typeof a}function E(a){return null!==a&&"object"===typeof a}function Mc(a){return null!==a&&"object"===typeof a&&!Oc(a)}function D(a){return"string"===typeof a}function Y(a){return"number"===typeof a}function ea(a){return"[object Date]"===ha.call(a)}function $b(a){switch(ha.call(a)){case "[object Error]":return!0;
case "[object Exception]":return!0;case "[object DOMException]":return!0;default:return a instanceof Error}}function A(a){return"function"===typeof a}function ab(a){return"[object RegExp]"===ha.call(a)}function $a(a){return a&&a.window===a}function cb(a){return a&&a.$evalAsync&&a.$watch}function Na(a){return"boolean"===typeof a}function re(a){return a&&Y(a.length)&&se.test(ha.call(a))}function Xb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function te(a){var b={};a=a.split(",");var d;for(d=
0;d<a.length;d++)b[a[d]]=!0;return b}function za(a){return N(a.nodeName||a[0]&&a[0].nodeName)}function db(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function pa(a,b,d){function c(a,b,c){c--;if(0>c)return"...";var d=b.$$hashKey,g;if(I(a)){g=0;for(var f=a.length;g<f;g++)b.push(e(a[g],c))}else if(Mc(a))for(g in a)b[g]=e(a[g],c);else if(a&&"function"===typeof a.hasOwnProperty)for(g in a)a.hasOwnProperty(g)&&(b[g]=e(a[g],c));else for(g in a)ra.call(a,g)&&(b[g]=e(a[g],c));d?b.$$hashKey=d:delete b.$$hashKey;
return b}function e(a,b){if(!E(a))return a;var d=g.indexOf(a);if(-1!==d)return k[d];if($a(a)||cb(a))throw qa("cpws");var d=!1,e=f(a);void 0===e&&(e=I(a)?[]:Object.create(Oc(a)),d=!0);g.push(a);k.push(e);return d?c(a,e,b):e}function f(a){switch(ha.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(e(a.buffer),
a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(A(a.cloneNode))return a.cloneNode(!0)}
var g=[],k=[];d=Ub(d)?d:NaN;if(b){if(re(b)||"[object ArrayBuffer]"===ha.call(b))throw qa("cpta");if(a===b)throw qa("cpi");I(b)?b.length=0:p(b,function(a,c){"$$hashKey"!==c&&delete b[c]});g.push(a);k.push(b);return c(a,b,d)}return e(a,d)}function ac(a,b){return a===b||a!==a&&b!==b}function sa(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d===typeof b&&"object"===d)if(I(a)){if(!I(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!sa(a[c],
b[c]))return!1;return!0}}else{if(ea(a))return ea(b)?ac(a.getTime(),b.getTime()):!1;if(ab(a))return ab(b)?a.toString()===b.toString():!1;if(cb(a)||cb(b)||$a(a)||$a(b)||I(b)||ea(b)||ab(b))return!1;d=S();for(c in a)if("$"!==c.charAt(0)&&!A(a[c])){if(!sa(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&t(b[c])&&!A(b[c]))return!1;return!0}return!1}function eb(a,b,d){return a.concat(ya.call(b,d))}function Ra(a,b){var d=2<arguments.length?ya.call(arguments,2):[];return!A(b)||b instanceof
RegExp?b:d.length?function(){return arguments.length?b.apply(a,eb(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Pc(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:$a(b)?d="$WINDOW":b&&u.document===b?d="$DOCUMENT":cb(b)&&(d="$SCOPE");return d}function fb(a,b){if(!w(a))return Y(b)||(b=b?2:null),JSON.stringify(a,Pc,b)}function Qc(a){return D(a)?JSON.parse(a):a}function Rc(a,b){a=a.replace(ue,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+
a)/6E4;return T(d)?b:d}function bc(a,b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=Rc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function Aa(a){a=B(a).clone().empty();var b=B("<div>").append(a).html();try{return a[0].nodeType===Oa?N(b):b.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(a,b){return"<"+N(b)})}catch(d){return N(b)}}function Sc(a){try{return decodeURIComponent(a)}catch(b){}}function Tc(a){var b={};p((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,
"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=Sc(e),t(e)&&(f=t(f)?Sc(f):!0,ra.call(b,e)?I(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function cc(a){var b=[];p(a,function(a,c){I(a)?p(a,function(a){b.push(ia(c,!0)+(!0===a?"":"="+ia(a,!0)))}):b.push(ia(c,!0)+(!0===a?"":"="+ia(a,!0)))});return b.length?b.join("&"):""}function gb(a){return ia(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ia(a,b){return encodeURIComponent(a).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function ve(a,b){var d,c,e=Ha.length;for(c=0;c<e;++c)if(d=Ha[c]+b,D(d=a.getAttribute(d)))return d;return null}function we(a,b){var d,c,e={};p(Ha,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});p(Ha,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(xe?(e.strictDi=null!==ve(d,"strict-di"),
b(d,c?[c]:[],e)):u.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))}function Uc(a,b,d){E(d)||(d={});d=P({strictDi:!1},d);var c=function(){a=B(a);if(a.injector()){var c=a[0]===u.document?"document":Aa(a);throw qa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);
b.unshift("ng");c=hb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;u&&e.test(u.name)&&(d.debugInfoEnabled=!0,u.name=u.name.replace(e,""));if(u&&!f.test(u.name))return c();u.name=u.name.replace(f,"");$.resumeBootstrap=function(a){p(a,function(a){b.push(a)});return c()};A($.resumeDeferredBootstrap)&&$.resumeDeferredBootstrap()}function ye(){u.name=
"NG_ENABLE_DEBUG_INFO!"+u.name;u.location.reload()}function ze(a){a=$.element(a).injector();if(!a)throw qa("test");return a.get("$$testability")}function Vc(a,b){b=b||"_";return a.replace(Ae,function(a,c){return(c?b:"")+a.toLowerCase()})}function Be(){var a;if(!Wc){var b=tb();(la=w(b)?u.jQuery:b?u[b]:void 0)&&la.fn.on?(B=la,P(la.fn,{scope:Sa.scope,isolateScope:Sa.isolateScope,controller:Sa.controller,injector:Sa.injector,inheritedData:Sa.inheritedData}),a=la.cleanData,la.cleanData=function(b){for(var c,
e=0,f;null!=(f=b[e]);e++)(c=la._data(f,"events"))&&c.$destroy&&la(f).triggerHandler("$destroy");a(b)}):B=U;$.element=B;Wc=!0}}function ib(a,b,d){if(!a)throw qa("areq",b||"?",d||"required");return a}function ub(a,b,d){d&&I(a)&&(a=a[a.length-1]);ib(A(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ia(a,b){if("hasOwnProperty"===a)throw qa("badname",b);}function Xc(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=
b[g],a&&(a=(e=a)[c]);return!d&&A(a)?Ra(e,a):a}function vb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=B(ya.call(a,0,e))),c.push(b);return c||a}function S(){return Object.create(null)}function dc(a){if(null==a)return"";switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=!Zb(a)||I(a)||ea(a)?fb(a):a.toString()}return a}function Ce(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=M("$injector"),c=M("ng");a=b(a,"angular",Object);a.$$minErr=
a.$$minErr||M;return b(a,"module",function(){var a={};return function(f,g,k){var h={};if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,c,d,g){g||(g=e);return function(){g[d||"push"]([b,c,arguments]);return p}}function b(a,c,d){d||(d=e);return function(b,e){e&&A(e)&&(e.$$moduleName=f);d.push([a,c,arguments]);return p}}if(!g)throw d("nomod",f);var e=[],q=[],G=[],L=a("$injector","invoke","push",q),p={_invokeQueue:e,_configBlocks:q,
_runBlocks:G,info:function(a){if(t(a)){if(!E(a))throw c("aobj","value");h=a;return this}return h},requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator",q),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:b("$compileProvider",
"component"),config:L,run:function(a){G.push(a);return this}};k&&L(k);return p})}})}function ja(a,b){if(I(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(E(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function De(a,b){var d=[];Ub(b)&&(a=$.copy(a,null,b));return JSON.stringify(a,function(a,b){b=Pc(a,b);if(E(b)){if(0<=d.indexOf(b))return"...";d.push(b)}return b})}function Ee(a){P(a,{errorHandlingConfig:oe,bootstrap:Uc,copy:pa,extend:P,merge:qe,equals:sa,
element:B,forEach:p,injector:hb,noop:C,bind:Ra,toJson:fb,fromJson:Qc,identity:bb,isUndefined:w,isDefined:t,isString:D,isFunction:A,isObject:E,isNumber:Y,isElement:Xb,isArray:I,version:Fe,isDate:ea,lowercase:N,uppercase:wb,callbacks:{$$counter:0},getTestability:ze,reloadWithDebugInfo:ye,$$minErr:M,$$csp:Ja,$$encodeUriSegment:gb,$$encodeUriQuery:ia,$$stringify:dc});ec=Ce(u);ec("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Ge});a.provider("$compile",Yc).directive({a:He,input:Zc,
textarea:Zc,form:Ie,script:Je,select:Ke,option:Le,ngBind:Me,ngBindHtml:Ne,ngBindTemplate:Oe,ngClass:Pe,ngClassEven:Qe,ngClassOdd:Re,ngCloak:Se,ngController:Te,ngForm:Ue,ngHide:Ve,ngIf:We,ngInclude:Xe,ngInit:Ye,ngNonBindable:Ze,ngPluralize:$e,ngRepeat:af,ngShow:bf,ngStyle:cf,ngSwitch:df,ngSwitchWhen:ef,ngSwitchDefault:ff,ngOptions:gf,ngTransclude:hf,ngModel:jf,ngList:kf,ngChange:lf,pattern:$c,ngPattern:$c,required:ad,ngRequired:ad,minlength:bd,ngMinlength:bd,maxlength:cd,ngMaxlength:cd,ngValue:mf,
ngModelOptions:nf}).directive({ngInclude:of}).directive(xb).directive(dd);a.provider({$anchorScroll:pf,$animate:qf,$animateCss:rf,$$animateJs:sf,$$animateQueue:tf,$$AnimateRunner:uf,$$animateAsyncRun:vf,$browser:wf,$cacheFactory:xf,$controller:yf,$document:zf,$$isDocumentHidden:Af,$exceptionHandler:Bf,$filter:ed,$$forceReflow:Cf,$interpolate:Df,$interval:Ef,$http:Ff,$httpParamSerializer:Gf,$httpParamSerializerJQLike:Hf,$httpBackend:If,$xhrFactory:Jf,$jsonpCallbacks:Kf,$location:Lf,$log:Mf,$parse:Nf,
$rootScope:Of,$q:Pf,$$q:Qf,$sce:Rf,$sceDelegate:Sf,$sniffer:Tf,$templateCache:Uf,$templateRequest:Vf,$$testability:Wf,$timeout:Xf,$window:Yf,$$rAF:Zf,$$jqLite:$f,$$Map:ag,$$cookieReader:bg})}]).info({angularVersion:"1.6.6"})}function jb(a,b){return b.toUpperCase()}function yb(a){return a.replace(cg,jb)}function fc(a){a=a.nodeType;return 1===a||!a||9===a}function fd(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(gc.test(a)){d=e.appendChild(b.createElement("div"));c=(dg.exec(a)||["",""])[1].toLowerCase();
c=aa[c]||aa._default;d.innerHTML=c[1]+a.replace(eg,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=eb(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";p(f,function(a){e.appendChild(a)});return e}function U(a){if(a instanceof U)return a;var b;D(a)&&(a=Q(a),b=!0);if(!(this instanceof U)){if(b&&"<"!==a.charAt(0))throw hc("nosel");return new U(a)}if(b){b=u.document;var d;a=(d=fg.exec(a))?[b.createElement(d[1])]:(d=fd(a,b))?d.childNodes:
[];ic(this,a)}else A(a)?gd(a):ic(this,a)}function jc(a){return a.cloneNode(!0)}function zb(a,b){!b&&fc(a)&&B.cleanData([a]);a.querySelectorAll&&B.cleanData(a.querySelectorAll("*"))}function hd(a,b,d,c){if(t(c))throw hc("offargs");var e=(c=Ab(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];t(d)&&db(c||[],d);t(d)&&c&&0<c.length||(a.removeEventListener(b,f),delete e[b])};p(b.split(" "),function(a){g(a);Bb[a]&&g(Bb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f),delete e[b]}
function kc(a,b){var d=a.ng339,c=d&&kb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),hd(a)),delete kb[d],a.ng339=void 0))}function Ab(a,b){var d=a.ng339,d=d&&kb[d];b&&!d&&(a.ng339=d=++gg,d=kb[d]={events:{},data:{},handle:void 0});return d}function lc(a,b,d){if(fc(a)){var c,e=t(d),f=!e&&b&&!E(b),g=!b;a=(a=Ab(a,!f))&&a.data;if(e)a[yb(b)]=d;else{if(g)return a;if(f)return a&&a[yb(b)];for(c in b)a[yb(c)]=b[c]}}}function Cb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||
"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Db(a,b){b&&a.setAttribute&&p(b.split(" "),function(b){a.setAttribute("class",Q((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+Q(b)+" "," ")))})}function Eb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");p(b.split(" "),function(a){a=Q(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",Q(d))}}function ic(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=
b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function id(a,b){return Fb(a,"$"+(b||"ngController")+"Controller")}function Fb(a,b,d){9===a.nodeType&&(a=a.documentElement);for(b=I(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(t(d=B.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function jd(a){for(zb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Gb(a,b){b||zb(a);var d=a.parentNode;d&&d.removeChild(a)}function hg(a,
b){b=b||u;if("complete"===b.document.readyState)b.setTimeout(a);else B(b).on("load",a)}function gd(a){function b(){u.document.removeEventListener("DOMContentLoaded",b);u.removeEventListener("load",b);a()}"complete"===u.document.readyState?u.setTimeout(a):(u.document.addEventListener("DOMContentLoaded",b),u.addEventListener("load",b))}function kd(a,b){var d=Hb[b.toLowerCase()];return d&&ld[za(a)]&&d}function ig(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=
b[d||c.type],g=f?f.length:0;if(g){if(w(c.immediatePropagationStopped)){var k=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();k&&k.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var h=f.specialHandlerWrapper||jg;1<g&&(f=ja(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||h(a,c,f[l])}};d.elem=a;return d}function jg(a,b,d){d.call(a,b)}function kg(a,b,d){var c=
b.relatedTarget;c&&(c===a||lg.call(a,c))||d.call(a,b)}function $f(){this.$get=function(){return P(U,{hasClass:function(a,b){a.attr&&(a=a[0]);return Cb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Eb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Db(a,b)}})}}function Pa(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"===d||"object"===d&&null!==a?a.$$hashKey=d+":"+(b||pe)():d+":"+a}function md(){this._keys=[];this._values=
[];this._lastKey=NaN;this._lastIndex=-1}function nd(a){a=Function.prototype.toString.call(a).replace(mg,"");return a.match(ng)||a.match(og)}function pg(a){return(a=nd(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function hb(a,b){function d(a){return function(b,c){if(E(b))p(b,Vb(a));else return a(b,c)}}function c(a,b){Ia(a,"service");if(A(b)||I(b))b=q.instantiate(b);if(!b.$get)throw Ba("pget",a);return n[a+"Provider"]=b}function e(a,b){return function(){var c=z.invoke(b,this);if(w(c))throw Ba("undef",
a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){ib(w(a)||I(a),"modulesToLoad","not an array");var b=[],c;p(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],g=q.get(e[0]);g[e[1]].apply(g,e[2])}}if(!m.get(a)){m.set(a,!0);try{D(a)?(c=ec(a),z.modules[a]=c,b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):A(a)?b.push(q.invoke(a)):I(a)?b.push(q.invoke(a)):ub(a,"module")}catch(e){throw I(a)&&(a=a[a.length-1]),e.message&&
e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ba("modulerr",a,e.stack||e.message||e);}}});return b}function k(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===h)throw Ba("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=h,a[b]=c(b,e),a[b]}catch(g){throw a[b]===h&&delete a[b],g;}finally{l.shift()}}function e(a,c,g){var f=[];a=hb.$$annotate(a,b,g);for(var h=0,k=a.length;h<k;h++){var l=a[h];if("string"!==typeof l)throw Ba("itkn",l);f.push(c&&c.hasOwnProperty(l)?
c[l]:d(l,g))}return f}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);I(a)&&(a=a[a.length-1]);d=a;if(Ca||"function"!==typeof d)d=!1;else{var g=d.$$ngIsClass;Na(g)||(g=d.$$ngIsClass=/^(?:class\b|constructor\()/.test(Function.prototype.toString.call(d)));d=g}return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=I(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,
annotate:hb.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var h={},l=[],m=new Ib,n={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,ka(b),!1)}),constant:d(function(a,b){Ia(a,"constant");n[a]=b;G[a]=b}),decorator:function(a,b){var c=q.get(a+"Provider"),d=c.$get;c.$get=function(){var a=z.invoke(d,c);return z.invoke(b,null,{$delegate:a})}}}},
q=n.$injector=k(n,function(a,b){$.isString(b)&&l.push(b);throw Ba("unpr",l.join(" <- "));}),G={},L=k(G,function(a,b){var c=q.get(a+"Provider",b);return z.invoke(c.$get,c,void 0,a)}),z=L;n.$injectorProvider={$get:ka(L)};z.modules=q.modules=S();var v=g(a),z=L.get("$injector");z.strictDi=b;p(v,function(a){a&&z.invoke(a)});return z}function pf(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,
function(a){if("a"===za(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;A(c)?c=c():Xb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):Y(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=D(a)?a:Y(a)?a.toString():d.hash();var b;a?(b=k.getElementById(a))?f(b):(b=e(k.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var k=b.document;a&&c.$watch(function(){return d.hash()},
function(a,b){a===b&&""===a||hg(function(){c.$evalAsync(g)})});return g}]}function lb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;I(a)&&(a=a.join(" "));I(b)&&(b=b.join(" "));return a+" "+b}function qg(a){D(a)&&(a=a.split(" "));var b=S();p(a,function(a){a.length&&(b[a]=!0)});return b}function Ka(a){return E(a)?a:{}}function rg(a,b,d,c){function e(a){try{a.apply(null,ya.call(arguments,1))}finally{if(L--,0===L)for(;z.length;)try{z.pop()()}catch(b){d.error(b)}}}function f(){y=null;k()}function g(){v=
J();v=w(v)?null:v;sa(v,K)&&(v=K);s=K=v}function k(){var a=s;g();if(Ta!==h.url()||a!==v)Ta=h.url(),s=v,p(H,function(a){a(h.url(),v)})}var h=this,l=a.location,m=a.history,n=a.setTimeout,q=a.clearTimeout,G={};h.isMock=!1;var L=0,z=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){L++};h.notifyWhenNoOutstandingRequests=function(a){0===L?a():z.push(a)};var v,s,Ta=l.href,ma=b.find("base"),y=null,J=c.history?function(){try{return m.state}catch(a){}}:C;g();h.url=function(b,d,e){w(e)&&
(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=s===e;if(Ta===b&&(!c.history||f))return h;var k=Ta&&La(Ta)===La(b);Ta=b;s=e;!c.history||k&&f?(k||(y=b),d?l.replace(b):k?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(y=b)):(m[d?"replaceState":"pushState"](e,"",b),g());y&&(y=b);return h}return y||l.href.replace(/%27/g,"'")};h.state=function(){return v};var H=[],ta=!1,K=null;h.onUrlChange=function(b){if(!ta){if(c.history)B(a).on("popstate",
f);B(a).on("hashchange",f);ta=!0}H.push(b);return b};h.$$applicationDestroyed=function(){B(a).off("hashchange popstate",f)};h.$$checkUrlChange=k;h.baseHref=function(){var a=ma.attr("href");return a?a.replace(/^(https?:)?\/\/[^/]*/,""):""};h.defer=function(a,b){var c;L++;c=n(function(){delete G[c];e(a)},b||0);G[c]=!0;return c};h.defer.cancel=function(a){return G[a]?(delete G[a],q(a),e(C),!0):!1}}function wf(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new rg(a,c,b,
d)}]}function xf(){this.$get=function(){function a(a,c){function e(a){a!==n&&(q?q===a&&(q=a.n):q=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!==b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw M("$cacheFactory")("iid",a);var g=0,k=P({},c,{id:a}),h=S(),l=c&&c.capacity||Number.MAX_VALUE,m=S(),n=null,q=null;return b[a]={put:function(a,b){if(!w(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in h||g++;h[a]=b;g>l&&this.remove(q.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=
m[a];if(!b)return;e(b)}return h[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b===n&&(n=b.p);b===q&&(q=b.n);f(b.n,b.p);delete m[a]}a in h&&(delete h[a],g--)},removeAll:function(){h=S();g=0;m=S();n=q=null},destroy:function(){m=k=h=null;delete b[a]},info:function(){return P({},k,{size:g})}}}var b={};a.info=function(){var a={};p(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function Uf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}
function Yc(a,b){function d(a,b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*([\w$]*)\s*$/,e=S();p(a,function(a,g){if(a in n)e[g]=n[a];else{var f=a.match(d);if(!f)throw ba("iscp",b,g,a,c?"controller bindings definition":"isolate scope definition");e[g]={mode:f[1][0],collection:"*"===f[2],optional:"?"===f[3],attrName:f[4]||g};f[4]&&(n[a]=e[g])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==N(b))throw ba("baddir",a);if(a!==a.trim())throw ba("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;
!I(b)&&E(b)&&p(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive:\s*([\w-]+)\s+(.*)$/,k=/(([\w-]+)(?::([^;]+))?;?)/,h=te("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,n=S();this.directive=function ma(b,d){ib(b,"name");Ia(b,"directive");D(b)?(c(b),ib(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];p(f[b],function(g,
f){try{var h=a.invoke(g);A(h)?h={compile:ka(h)}:!h.compile&&h.link&&(h.compile=ka(h.link));h.priority=h.priority||0;h.index=f;h.name=h.name||b;h.require=e(h);var k=h,l=h.restrict;if(l&&(!D(l)||!/[EACM]/.test(l)))throw ba("badrestrict",l,b);k.restrict=l||"EA";h.$$moduleName=g.$$moduleName;d.push(h)}catch(m){c(m)}});return d}])),f[b].push(d)):p(b,Vb(ma));return this};this.component=function y(a,b){function c(a){function e(b){return A(b)||I(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:
b}var g=b.template||b.templateUrl?b.template:"",f={controller:d,controllerAs:sg(b.controller)||b.controllerAs||"$ctrl",template:e(g),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};p(b,function(a,b){"$"===b.charAt(0)&&(f[b]=a)});return f}if(!D(a))return p(a,Vb(Ra(this,y))),this;var d=b.controller||function(){};p(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,A(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,
c)};this.aHrefSanitizationWhitelist=function(a){return t(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return t(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var q=!0;this.debugInfoEnabled=function(a){return t(a)?(q=a,this):q};var G=!1;this.preAssignBindingsEnabled=function(a){return t(a)?(G=a,this):G};var L=!1;this.strictComponentBindingsEnabled=function(a){return t(a)?(L=a,this):L};var z=10;this.onChangesTtl=
function(a){return arguments.length?(z=a,this):z};var v=!0;this.commentDirectivesEnabled=function(a){return arguments.length?(v=a,this):v};var s=!0;this.cssClassDirectivesEnabled=function(a){return arguments.length?(s=a,this):s};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,b,c,e,n,F,R,x,W,r){function O(){try{if(!--Fa)throw ga=void 0,ba("infchng",z);R.$apply(function(){for(var a=[],b=0,
c=ga.length;b<c;++b)try{ga[b]()}catch(d){a.push(d)}ga=void 0;if(a.length)throw a;})}finally{Fa++}}function mc(a,b){if(b){var c=Object.keys(b),d,e,g;d=0;for(e=c.length;d<e;d++)g=c[d],this[g]=b[g]}else this.$attr={};this.$$element=a}function Ua(a,b,c){Ba.innerHTML="<span "+b+">";b=Ba.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function na(a,b){try{a.addClass(b)}catch(c){}}function ca(a,b,c,d,e){a instanceof B||(a=B(a));var g=Va(a,b,a,c,d,e);ca.$$addScopeClass(a);
var f=null;return function(b,c,d){if(!a)throw ba("multilink");ib(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);f||(f=(d=d&&d[0])?"foreignobject"!==za(d)&&ha.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==f?B(ja(f,B("<div>").append(a).html())):c?Sa.clone.call(a):a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);ca.$$addScopeInfo(d,b);c&&
c(d,b);g&&g(b,d,d,h);c||(a=g=null);return d}}function Va(a,b,c,d,e,g){function f(a,c,d,e){var g,k,l,m,q,n,H;if(s)for(H=Array(c.length),m=0;m<h.length;m+=3)g=h[m],H[g]=c[g];else H=c;m=0;for(q=h.length;m<q;)k=H[h[m++]],c=h[m++],g=h[m++],c?(c.scope?(l=a.$new(),ca.$$addScopeInfo(B(k),l)):l=a,n=c.transcludeOnThisElement?Ma(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?Ma(a,b):null,c(g,l,k,d,n)):g&&g(a,k.childNodes,void 0,e)}for(var h=[],k=I(a)||a instanceof B,l,m,q,n,s,H=0;H<a.length;H++){l=new mc;
11===Ca&&Da(a,H,k);m=M(a[H],[],l,0===H?d:void 0,e);(g=m.length?Y(m,a[H],l,b,c,null,[],[],g):null)&&g.scope&&ca.$$addScopeClass(l.$$element);l=g&&g.terminal||!(q=a[H].childNodes)||!q.length?null:Va(q,g?(g.transcludeOnThisElement||!g.templateOnThisElement)&&g.transclude:b);if(g||l)h.push(H,g,l),n=!0,s=s||g;g=null}return n?f:null}function Da(a,b,c){var d=a[b],e=d.parentNode,g;if(d.nodeType===Oa)for(;;){g=e?d.nextSibling:a[b+1];if(!g||g.nodeType!==Oa)break;d.nodeValue+=g.nodeValue;g.parentNode&&g.parentNode.removeChild(g);
c&&g===a[b+1]&&a.splice(b+1,1)}}function Ma(a,b,c){function d(e,g,f,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,g,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:h})}var e=d.$$slots=S(),g;for(g in b.$$slots)e[g]=b.$$slots[g]?Ma(a,b.$$slots[g],c):null;return d}function M(a,b,c,d,e){var g=c.$attr,f;switch(a.nodeType){case 1:f=za(a);T(b,Ea(f),"E",d,e);for(var h,l,m,q,n=a.attributes,s=0,H=n&&n.length;s<H;s++){var J=!1,G=!1;h=n[s];l=h.name;m=h.value;h=Ea(l);(q=Pa.test(h))&&
(l=l.replace(od,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()}));(h=h.match(Qa))&&$(h[1])&&(J=l,G=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));h=Ea(l.toLowerCase());g[h]=l;if(q||!c.hasOwnProperty(h))c[h]=m,kd(a,h)&&(c[h]=!0);xa(a,b,m,h,q);T(b,h,"A",d,e,J,G)}"input"===f&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete","off");if(!La)break;g=a.className;E(g)&&(g=g.animVal);if(D(g)&&""!==g)for(;a=k.exec(g);)h=Ea(a[2]),T(b,h,"C",d,e)&&(c[h]=Q(a[3])),g=g.substr(a.index+
a[0].length);break;case Oa:oa(b,a.nodeValue);break;case 8:if(!Ka)break;nc(a,b,c,d,e)}b.sort(ka);return b}function nc(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=Ea(f[1]);T(b,h,"M",d,e)&&(c[h]=Q(f[2]))}}catch(k){}}function pd(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ba("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return B(d)}function U(a,b,c){return function(d,e,g,f,h){e=
pd(e[0],b,c);return a(d,e,g,f,h)}}function V(a,b,c,d,e,g){var f;return a?ca(b,c,d,e,g):function(){f||(f=ca(b,c,d,e,g),b=c=g=null);return f.apply(this,arguments)}}function Y(a,b,d,e,g,f,h,k,l){function m(a,b,c,d){if(a){c&&(a=U(a,c,d));a.require=x.require;a.directiveName=W;if(K===x||x.$$isolateScope)a=ua(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=U(b,c,d));b.require=x.require;b.directiveName=W;if(K===x||x.$$isolateScope)b=ua(b,{isolateScope:!0});k.push(b)}}function q(a,e,g,f,l){function m(a,b,c,d){var e;
cb(a)||(d=c,c=b,b=a,a=void 0);ta&&(e=L);c||(c=ta?fa.parent():fa);if(d){var g=l.$$slots[d];if(g)return g(a,b,e,c,O);if(w(g))throw ba("noslot",d,Aa(fa));}else return l(a,b,e,c,O)}var n,x,F,y,R,L,z,fa;b===g?(f=d,fa=d.$$element):(fa=B(g),f=new mc(fa,d));R=e;K?y=e.$new(!0):s&&(R=e.$parent);l&&(z=m,z.$$boundTransclude=l,z.isSlotFilled=function(a){return!!l.$$slots[a]});J&&(L=da(fa,f,z,J,y,e,K));K&&(ca.$$addScopeInfo(fa,y,!0,!(v&&(v===K||v===K.$$originalDirective))),ca.$$addScopeClass(fa,!0),y.$$isolateBindings=
K.$$isolateBindings,x=qa(e,f,y,y.$$isolateBindings,K),x.removeWatches&&y.$on("$destroy",x.removeWatches));for(n in L){x=J[n];F=L[n];var W=x.$$bindings.bindToController;if(G){F.bindingInfo=W?qa(R,f,F.instance,W,x):{};var r=F();r!==F.instance&&(F.instance=r,fa.data("$"+x.name+"Controller",r),F.bindingInfo.removeWatches&&F.bindingInfo.removeWatches(),F.bindingInfo=qa(R,f,F.instance,W,x))}else F.instance=F(),fa.data("$"+x.name+"Controller",F.instance),F.bindingInfo=qa(R,f,F.instance,W,x)}p(J,function(a,
b){var c=a.require;a.bindToController&&!I(c)&&E(c)&&P(L[b].instance,X(b,c,fa,L))});p(L,function(a){var b=a.instance;if(A(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(A(b.$onInit))try{b.$onInit()}catch(e){c(e)}A(b.$doCheck)&&(R.$watch(function(){b.$doCheck()}),b.$doCheck());A(b.$onDestroy)&&R.$on("$destroy",function(){b.$onDestroy()})});n=0;for(x=h.length;n<x;n++)F=h[n],wa(F,F.isolateScope?y:e,fa,f,F.require&&X(F.directiveName,F.require,fa,L),z);var O=e;K&&(K.template||
null===K.templateUrl)&&(O=y);a&&a(O,g.childNodes,void 0,l);for(n=k.length-1;0<=n;n--)F=k[n],wa(F,F.isolateScope?y:e,fa,f,F.require&&X(F.directiveName,F.require,fa,L),z);p(L,function(a){a=a.instance;A(a.$postLink)&&a.$postLink()})}l=l||{};for(var n=-Number.MAX_VALUE,s=l.newScopeDirective,J=l.controllerDirectives,K=l.newIsolateScopeDirective,v=l.templateDirective,y=l.nonTlbTranscludeDirective,R=!1,L=!1,ta=l.hasElementTranscludeDirective,F=d.$$element=B(b),x,W,z,r=e,O,t=!1,Jb=!1,u,Da=0,C=a.length;Da<
C;Da++){x=a[Da];var Ua=x.$$start,D=x.$$end;Ua&&(F=pd(b,Ua,D));z=void 0;if(n>x.priority)break;if(u=x.scope)x.templateUrl||(E(u)?(aa("new/isolated scope",K||s,x,F),K=x):aa("new/isolated scope",K,x,F)),s=s||x;W=x.name;if(!t&&(x.replace&&(x.templateUrl||x.template)||x.transclude&&!x.$$tlb)){for(u=Da+1;t=a[u++];)if(t.transclude&&!t.$$tlb||t.replace&&(t.templateUrl||t.template)){Jb=!0;break}t=!0}!x.templateUrl&&x.controller&&(J=J||S(),aa("'"+W+"' controller",J[W],x,F),J[W]=x);if(u=x.transclude)if(R=!0,
x.$$tlb||(aa("transclusion",y,x,F),y=x),"element"===u)ta=!0,n=x.priority,z=F,F=d.$$element=B(ca.$$createComment(W,d[W])),b=F[0],la(g,ya.call(z,0),b),z[0].$$parentNode=z[0].parentNode,r=V(Jb,z,e,n,f&&f.name,{nonTlbTranscludeDirective:y});else{var na=S();if(E(u)){z=[];var Va=S(),Ma=S();p(u,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Va[a]=b;na[b]=null;Ma[b]=c});p(F.contents(),function(a){var b=Va[Ea(za(a))];b?(Ma[b]=!0,na[b]=na[b]||[],na[b].push(a)):z.push(a)});p(Ma,function(a,b){if(!a)throw ba("reqslot",
b);});for(var N in na)na[N]&&(na[N]=V(Jb,na[N],e))}else z=B(jc(b)).contents();F.empty();r=V(Jb,z,e,void 0,void 0,{needsNewScope:x.$$isolateScope||x.$$newScope});r.$$slots=na}if(x.template)if(L=!0,aa("template",v,x,F),v=x,u=A(x.template)?x.template(F,d):x.template,u=Ia(u),x.replace){f=x;z=gc.test(u)?qd(ja(x.templateNamespace,Q(u))):[];b=z[0];if(1!==z.length||1!==b.nodeType)throw ba("tplrt",W,"");la(g,F,b);C={$attr:{}};u=M(b,[],C);var nc=a.splice(Da+1,a.length-(Da+1));(K||s)&&Z(u,K,s);a=a.concat(u).concat(nc);
ea(d,C);C=a.length}else F.html(u);if(x.templateUrl)L=!0,aa("template",v,x,F),v=x,x.replace&&(f=x),q=ia(a.splice(Da,a.length-Da),F,d,g,R&&r,h,k,{controllerDirectives:J,newScopeDirective:s!==x&&s,newIsolateScopeDirective:K,templateDirective:v,nonTlbTranscludeDirective:y}),C=a.length;else if(x.compile)try{O=x.compile(F,d,r);var T=x.$$originalDirective||x;A(O)?m(null,Ra(T,O),Ua,D):O&&m(Ra(T,O.pre),Ra(T,O.post),Ua,D)}catch($){c($,Aa(F))}x.terminal&&(q.terminal=!0,n=Math.max(n,x.priority))}q.scope=s&&!0===
s.scope;q.transcludeOnThisElement=R;q.templateOnThisElement=L;q.transclude=r;l.hasElementTranscludeDirective=ta;return q}function X(a,b,c,d){var e;if(D(b)){var g=b.match(l);b=b.substring(g[0].length);var f=g[1]||g[3],g="?"===g[2];"^^"===f?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e=f?c.inheritedData(h):c.data(h)}if(!e&&!g)throw ba("ctreq",b,a);}else if(I(b))for(e=[],f=0,g=b.length;f<g;f++)e[f]=X(a,b[f],c,d);else E(b)&&(e={},p(b,function(b,g){e[g]=X(a,b,c,d)}));return e||
null}function da(a,b,c,d,e,g,f){var h=S(),k;for(k in d){var l=d[k],m={$scope:l===f||l.$$isolateScope?e:g,$element:a,$attrs:b,$transclude:c},n=l.controller;"@"===n&&(n=b[l.name]);m=F(n,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function Z(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Yb(a[d],{$$isolateScope:b,$$newScope:c})}function T(b,c,e,g,h,k,l){if(c===h)return null;var m=null;if(f.hasOwnProperty(c)){h=a.get(c+"Directive");for(var n=0,q=h.length;n<q;n++)if(c=
h[n],(w(g)||g>c.priority)&&-1!==c.restrict.indexOf(e)){k&&(c=Yb(c,{$$start:k,$$end:l}));if(!c.$$bindings){var s=m=c,H=c.name,J={isolateScope:null,bindToController:null};E(s.scope)&&(!0===s.bindToController?(J.bindToController=d(s.scope,H,!0),J.isolateScope={}):J.isolateScope=d(s.scope,H,!1));E(s.bindToController)&&(J.bindToController=d(s.bindToController,H,!0));if(J.bindToController&&!s.controller)throw ba("noctrl",H);m=m.$$bindings=J;E(m.isolateScope)&&(c.$$isolateBindings=m.isolateScope)}b.push(c);
m=c}}return m}function $(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function ea(a,b){var c=b.$attr,d=a.$attr;p(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&b[e]!==d&&(d=d.length?d+(("style"===e?";":" ")+b[e]):b[e]),a.$set(e,d,!0,c[e]))});p(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}function ia(a,b,d,g,f,h,k,l){var m=[],n,q,s=b[0],J=a.shift(),x=Yb(J,{templateUrl:null,
transclude:null,replace:null,$$originalDirective:J}),G=A(J.templateUrl)?J.templateUrl(b,d):J.templateUrl,F=J.templateNamespace;b.empty();e(G).then(function(c){var e,H;c=Ia(c);if(J.replace){c=gc.test(c)?qd(ja(F,Q(c))):[];e=c[0];if(1!==c.length||1!==e.nodeType)throw ba("tplrt",J.name,G);c={$attr:{}};la(g,b,e);var K=M(e,[],c);E(J.scope)&&Z(K,!0);a=K.concat(a);ea(d,c)}else e=s,b.html(c);a.unshift(x);n=Y(a,e,d,f,b,J,h,k,l);p(g,function(a,c){a===e&&(g[c]=b[0])});for(q=Va(b[0].childNodes,f);m.length;){c=
m.shift();H=m.shift();var v=m.shift(),y=m.shift(),K=b[0];if(!c.$$destroyed){if(H!==s){var L=H.className;l.hasElementTranscludeDirective&&J.replace||(K=jc(e));la(v,B(H),K);na(B(K),L)}H=n.transcludeOnThisElement?Ma(c,n.transclude,y):y;n(q,c,K,g,H)}}m=null}).catch(function(a){$b(a)&&c(a)});return function(a,b,c,d,e){a=e;b.$$destroyed||(m?m.push(b,c,d,a):(n.transcludeOnThisElement&&(a=Ma(b,n.transclude,e)),n(q,b,c,d,a)))}}function ka(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<
b.name?-1:1:a.index-b.index}function aa(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ba("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,Aa(d));}function oa(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&ca.$$addBindingClass(a);return function(a,c){var e=c.parent();b||ca.$$addBindingClass(e);ca.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ja(a,b){a=N(a||"html");switch(a){case "svg":case "math":var c=
u.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function va(a,b){if("srcdoc"===b)return x.HTML;var c=za(a);if("src"===b||"ngSrc"===b){if(-1===["img","video","audio","source","track"].indexOf(c))return x.RESOURCE_URL}else if("xlinkHref"===b||"form"===c&&"action"===b||"link"===c&&"href"===b)return x.RESOURCE_URL}function xa(a,c,d,e,g){var f=va(a,e),k=h[e]||g,l=b(d,!g,f,k);if(l){if("multiple"===e&&"select"===za(a))throw ba("selmulti",
Aa(a));if(m.test(e))throw ba("nodomevents");c.push({priority:100,compile:function(){return{pre:function(a,c,g){c=g.$$observers||(g.$$observers=S());var h=g[e];h!==d&&(l=h&&b(h,!0,f,k),d=h);l&&(g[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(g.$$observers&&g.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!==b?g.$updateClass(a,b):g.$set(e,a)}))}}}})}}function la(a,b,c){var d=b[0],e=b.length,g=d.parentNode,f,h;if(a)for(f=0,h=a.length;f<h;f++)if(a[f]===d){a[f++]=c;h=f+e-1;for(var k=a.length;f<
k;f++,h++)h<k?a[f]=a[h]:delete a[f];a.length-=e-1;a.context===d&&(a.context=c);break}g&&g.replaceChild(c,d);a=u.document.createDocumentFragment();for(f=0;f<e;f++)a.appendChild(b[f]);B.hasData(d)&&(B.data(c,B.data(d)),B(d).off("$destroy"));B.cleanData(a.querySelectorAll("*"));for(f=1;f<e;f++)delete b[f];b[0]=c;b.length=1}function ua(a,b){return P(function(){return a.apply(null,arguments)},a,b)}function wa(a,b,d,e,g,f){try{a(b,d,e,g,f)}catch(h){c(h,Aa(d))}}function pa(a,b){if(L)throw ba("missingattr",
a,b);}function qa(a,c,d,e,g){function f(b,c,e){A(d.$onChanges)&&!ac(c,e)&&(ga||(a.$$postDigest(O),ga=[]),m||(m={},ga.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Kb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;p(e,function(e,h){var m=e.attrName,q=e.optional,s,H,x,G;switch(e.mode){case "@":q||ra.call(c,m)||(pa(m,g.name),d[h]=c[m]=void 0);q=c.$observe(m,function(a){if(D(a)||Na(a))f(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;s=c[m];D(s)?d[h]=b(s)(a):Na(s)&&(d[h]=s);l[h]=new Kb(oc,
d[h]);k.push(q);break;case "=":if(!ra.call(c,m)){if(q)break;pa(m,g.name);c[m]=void 0}if(q&&!c[m])break;H=n(c[m]);G=H.literal?sa:ac;x=H.assign||function(){s=d[h]=H(a);throw ba("nonassign",c[m],m,g.name);};s=d[h]=H(a);q=function(b){G(b,d[h])||(G(b,s)?x(a,b=d[h]):d[h]=b);return s=b};q.$stateful=!0;q=e.collection?a.$watchCollection(c[m],q):a.$watch(n(c[m],q),null,H.literal);k.push(q);break;case "<":if(!ra.call(c,m)){if(q)break;pa(m,g.name);c[m]=void 0}if(q&&!c[m])break;H=n(c[m]);var F=H.literal,v=d[h]=
H(a);l[h]=new Kb(oc,d[h]);q=a.$watch(H,function(a,b){if(b===a){if(b===v||F&&sa(b,v))return;b=v}f(h,a,b);d[h]=a},F);k.push(q);break;case "&":q||ra.call(c,m)||pa(m,g.name);H=c.hasOwnProperty(m)?n(c[m]):C;if(H===C&&q)break;d[h]=function(b){return H(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var Ja=/^\w/,Ba=u.document.createElement("div"),Ka=v,La=s,Fa=z,ga;mc.prototype={$normalize:Ea,$addClass:function(a){a&&0<a.length&&W.addClass(this.$$element,
a)},$removeClass:function(a){a&&0<a.length&&W.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=rd(a,b);c&&c.length&&W.addClass(this.$$element,c);(c=rd(b,a))&&c.length&&W.removeClass(this.$$element,c)},$set:function(a,b,d,e){var g=kd(this.$$element[0],a),f=sd[a],h=a;g?(this.$$element.prop(a,b),e=g):f&&(this[f]=b,h=f);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Vc(a,"-"));g=za(this.$$element);if("a"===g&&("href"===a||"xlinkHref"===a)||"img"===g&&"src"===a)this[a]=
b=r(b,"src"===a);else if("img"===g&&"srcset"===a&&t(b)){for(var g="",f=Q(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(f)?k:/(,)/,f=f.split(k),k=Math.floor(f.length/2),l=0;l<k;l++)var m=2*l,g=g+r(Q(f[m]),!0),g=g+(" "+Q(f[m+1]));f=Q(f[2*l]).split(/\s/);g+=r(Q(f[0]),!0);2===f.length&&(g+=" "+Q(f[1]));this[a]=b=g}!1!==d&&(null===b||w(b)?this.$$element.removeAttr(e):Ja.test(e)?this.$$element.attr(e,b):Ua(this.$$element[0],e,b));(a=this.$$observers)&&p(a[h],function(a){try{a(b)}catch(d){c(d)}})},
$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=S()),e=d[a]||(d[a]=[]);e.push(b);R.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||w(c[a])||b(c[a])});return function(){db(e,b)}}};var Ga=b.startSymbol(),Ha=b.endSymbol(),Ia="{{"===Ga&&"}}"===Ha?bb:function(a){return a.replace(/\{\{/g,Ga).replace(/}}/g,Ha)},Pa=/^ngAttr[A-Z]/,Qa=/^(.+)Start$/;ca.$$addBindingInfo=q?function(a,b){var c=a.data("$binding")||[];I(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:C;ca.$$addBindingClass=
q?function(a){na(a,"ng-binding")}:C;ca.$$addScopeInfo=q?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:C;ca.$$addScopeClass=q?function(a,b){na(a,b?"ng-isolate-scope":"ng-scope")}:C;ca.$$createComment=function(a,b){var c="";q&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return u.document.createComment(c)};return ca}]}function Kb(a,b){this.previousValue=a;this.currentValue=b}function Ea(a){return a.replace(od,"").replace(tg,jb)}function rd(a,b){var d="",c=a.split(/\s+/),
e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],k=0;k<e.length;k++)if(g===e[k])continue a;d+=(0<d.length?" ":"")+g}return d}function qd(a){a=B(a);var b=a.length;if(1>=b)return a;for(;b--;){var d=a[b];(8===d.nodeType||d.nodeType===Oa&&""===d.nodeValue.trim())&&ug.call(a,b,1)}return a}function sg(a,b){if(b&&D(b))return b;if(D(a)){var d=td.exec(a);if(d)return d[3]}}function yf(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Ia(b,"controller");E(b)?
P(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function e(a,b,c,d){if(!a||!E(a.$scope))throw M("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,k,h){var l,m,n;k=!0===k;h&&D(h)&&(n=h);if(D(f)){h=f.match(td);if(!h)throw ud("ctrlfmt",f);m=h[1];n=n||h[3];f=a.hasOwnProperty(m)?a[m]:Xc(g.$scope,m,!0)||(b?Xc(c,m,!0):void 0);if(!f)throw ud("ctrlreg",m);ub(f,m,!0)}if(k)return k=(I(f)?f[f.length-1]:f).prototype,l=Object.create(k||null),n&&e(g,n,
l,m||f.name),P(function(){var a=d.invoke(f,l,g,m);a!==l&&(E(a)||A(a))&&(l=a,n&&e(g,n,l,m||f.name));return l},{instance:l,identifier:n});l=d.instantiate(f,g,m);n&&e(g,n,l,m||f.name);return l}}]}function zf(){this.$get=["$window",function(a){return B(a.document)}]}function Af(){this.$get=["$document","$rootScope",function(a,b){function d(){e=c.hidden}var c=a[0],e=c&&c.hidden;a.on("visibilitychange",d);b.$on("$destroy",function(){a.off("visibilitychange",d)});return function(){return e}}]}function Bf(){this.$get=
["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function pc(a){return E(a)?ea(a)?a.toISOString():fb(a):a}function Gf(){this.$get=function(){return function(a){if(!a)return"";var b=[];Nc(a,function(a,c){null===a||w(a)||A(a)||(I(a)?p(a,function(a){b.push(ia(c)+"="+ia(pc(a)))}):b.push(ia(c)+"="+ia(pc(a))))});return b.join("&")}}}function Hf(){this.$get=function(){return function(a){function b(a,e,f){null===a||w(a)||(I(a)?p(a,function(a,c){b(a,e+"["+(E(a)?c:"")+"]")}):E(a)&&!ea(a)?
Nc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ia(e)+"="+ia(pc(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function qc(a,b){if(D(a)){var d=a.replace(vg,"").trim();if(d){var c=b("Content-Type"),c=c&&0===c.indexOf(vd),e;(e=c)||(e=(e=d.match(wg))&&xg[e[0]].test(d));if(e)try{a=Qc(d)}catch(f){if(!c)return a;throw rc("baddata",a,f);}}}return a}function wd(a){var b=S(),d;D(a)?p(a.split("\n"),function(a){d=a.indexOf(":");var e=N(Q(a.substr(0,d)));a=Q(a.substr(d+1));e&&(b[e]=
b[e]?b[e]+", "+a:a)}):E(a)&&p(a,function(a,d){var f=N(d),g=Q(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function xd(a){var b;return function(d){b||(b=wd(a));return d?(d=b[N(d)],void 0===d&&(d=null),d):b}}function yd(a,b,d,c){if(A(c))return c(a,b,d);p(c,function(c){a=c(a,b,d)});return a}function Ff(){var a=this.defaults={transformResponse:[qc],transformRequest:[function(a){return E(a)&&"[object File]"!==ha.call(a)&&"[object Blob]"!==ha.call(a)&&"[object FormData]"!==ha.call(a)?fb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
post:ja(sc),put:ja(sc),patch:ja(sc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer",jsonpCallbackParam:"callback"},b=!1;this.useApplyAsync=function(a){return t(a)?(b=!!a,this):b};var d=this.interceptors=[];this.$get=["$browser","$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector","$sce",function(c,e,f,g,k,h,l,m){function n(b){function d(a,b){for(var c=0,e=b.length;c<e;){var g=b[c++],f=b[c++];a=a.then(g,f)}b.length=0;return a}
function e(a,b){var c,d={};p(a,function(a,e){A(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}function g(a){var b=P({},a);b.data=yd(a.data,a.headers,a.status,f.transformResponse);a=a.status;return 200<=a&&300>a?b:h.reject(b)}if(!E(b))throw M("$http")("badreq",b);if(!D(m.valueOf(b.url)))throw M("$http")("badreq",b.url);var f=P({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer,jsonpCallbackParam:a.jsonpCallbackParam},b);f.headers=
function(b){var c=a.headers,d=P({},b.headers),g,f,h,c=P({},c.common,c[N(b.method)]);a:for(g in c){f=N(g);for(h in d)if(N(h)===f)continue a;d[g]=c[g]}return e(d,ja(b))}(b);f.method=wb(f.method);f.paramSerializer=D(f.paramSerializer)?l.get(f.paramSerializer):f.paramSerializer;c.$$incOutstandingRequestCount();var k=[],n=[];b=h.resolve(f);p(v,function(a){(a.request||a.requestError)&&k.unshift(a.request,a.requestError);(a.response||a.responseError)&&n.push(a.response,a.responseError)});b=d(b,k);b=b.then(function(b){var c=
b.headers,d=yd(b.data,xd(c),void 0,b.transformRequest);w(d)&&p(c,function(a,b){"content-type"===N(b)&&delete c[b]});w(b.withCredentials)&&!w(a.withCredentials)&&(b.withCredentials=a.withCredentials);return q(b,d).then(g,g)});b=d(b,n);return b=b.finally(function(){c.$$completeOutstandingRequest(C)})}function q(c,d){function g(a){if(a){var c={};p(a,function(a,d){c[d]=function(c){function d(){a(c)}b?k.$applyAsync(d):k.$$phase?d():k.$apply(d)}});return c}}function l(a,c,d,e,g){function f(){q(c,a,d,e,
g)}R&&(200<=a&&300>a?R.put(O,[a,c,wd(d),e,g]):R.remove(O));b?k.$applyAsync(f):(f(),k.$$phase||k.$apply())}function q(a,b,d,e,g){b=-1<=b?b:0;(200<=b&&300>b?K.resolve:K.reject)({data:a,status:b,headers:xd(d),config:c,statusText:e,xhrStatus:g})}function H(a){q(a.data,a.status,ja(a.headers()),a.statusText,a.xhrStatus)}function v(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var K=h.defer(),F=K.promise,R,x,W=c.headers,r="jsonp"===N(c.method),O=c.url;r?O=m.getTrustedResourceUrl(O):
D(O)||(O=m.valueOf(O));O=G(O,c.paramSerializer(c.params));r&&(O=L(O,c.jsonpCallbackParam));n.pendingRequests.push(c);F.then(v,v);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(R=E(c.cache)?c.cache:E(a.cache)?a.cache:z);R&&(x=R.get(O),t(x)?x&&A(x.then)?x.then(H,H):I(x)?q(x[1],x[0],ja(x[2]),x[3],x[4]):q(x,200,{},"OK","complete"):R.put(O,F));w(x)&&((x=zd(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(W[c.xsrfHeaderName||a.xsrfHeaderName]=x),e(c.method,O,d,l,W,c.timeout,
c.withCredentials,c.responseType,g(c.eventHandlers),g(c.uploadEventHandlers)));return F}function G(a,b){0<b.length&&(a+=(-1===a.indexOf("?")?"?":"&")+b);return a}function L(a,b){if(/[&?][^=]+=JSON_CALLBACK/.test(a))throw rc("badjsonp",a);if((new RegExp("[&?]"+b+"=")).test(a))throw rc("badjsonp",b,a);return a+=(-1===a.indexOf("?")?"?":"&")+b+"=JSON_CALLBACK"}var z=g("$http");a.paramSerializer=D(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var v=[];p(d,function(a){v.unshift(D(a)?l.get(a):
l.invoke(a))});n.pendingRequests=[];(function(a){p(arguments,function(a){n[a]=function(b,c){return n(P({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){p(arguments,function(a){n[a]=function(b,c,d){return n(P({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=a;return n}]}function Jf(){this.$get=function(){return function(){return new u.XMLHttpRequest}}}function If(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return yg(a,
c,a.defer,b,d[0])}]}function yg(a,b,d,c,e){function f(a,b,d){a=a.replace("JSON_CALLBACK",b);var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m);f.removeEventListener("error",m);e.body.removeChild(f);f=null;var g=-1,G="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),G=a.type,g="error"===a.type?404:200);d&&d(g,G)};f.addEventListener("load",m);f.addEventListener("error",m);e.body.appendChild(f);return m}return function(e,
k,h,l,m,n,q,G,L,z){function v(){ma&&ma();y&&y.abort()}function s(a,b,c,e,g,f){t(H)&&d.cancel(H);ma=y=null;a(b,c,e,g,f)}k=k||a.url();if("jsonp"===N(e))var r=c.createCallback(k),ma=f(k,r,function(a,b){var d=200===a&&c.getResponse(r);s(l,a,d,"",b,"complete");c.removeCallback(r)});else{var y=b(e,k);y.open(e,k,!0);p(m,function(a,b){t(a)&&y.setRequestHeader(b,a)});y.onload=function(){var a=y.statusText||"",b="response"in y?y.response:y.responseText,c=1223===y.status?204:y.status;0===c&&(c=b?200:"file"===
ua(k).protocol?404:0);s(l,c,b,y.getAllResponseHeaders(),a,"complete")};y.onerror=function(){s(l,-1,null,null,"","error")};y.onabort=function(){s(l,-1,null,null,"","abort")};y.ontimeout=function(){s(l,-1,null,null,"","timeout")};p(L,function(a,b){y.addEventListener(b,a)});p(z,function(a,b){y.upload.addEventListener(b,a)});q&&(y.withCredentials=!0);if(G)try{y.responseType=G}catch(J){if("json"!==G)throw J;}y.send(w(h)?null:h)}if(0<n)var H=d(v,n);else n&&A(n.then)&&n.then(v)}}function Df(){var a="{{",
b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(n,a).replace(q,b)}function k(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function h(f,h,q,n){function s(a){try{var b=a;a=q?e.getTrusted(q,b):e.valueOf(b);return n&&!t(a)?a:dc(a)}catch(d){c(Fa.interr(f,d))}}if(!f.length||-1===f.indexOf(a)){var p;
h||(h=g(f),p=ka(h),p.exp=f,p.expressions=[],p.$$watchDelegate=k);return p}n=!!n;var r,y,J=0,H=[],ta=[];p=f.length;for(var K=[],F=[];J<p;)if(-1!==(r=f.indexOf(a,J))&&-1!==(y=f.indexOf(b,r+l)))J!==r&&K.push(g(f.substring(J,r))),J=f.substring(r+l,y),H.push(J),ta.push(d(J,s)),J=y+m,F.push(K.length),K.push("");else{J!==p&&K.push(g(f.substring(J)));break}q&&1<K.length&&Fa.throwNoconcat(f);if(!h||H.length){var R=function(a){for(var b=0,c=H.length;b<c;b++){if(n&&w(a[b]))return;K[F[b]]=a[b]}return K.join("")};
return P(function(a){var b=0,d=H.length,e=Array(d);try{for(;b<d;b++)e[b]=ta[b](a);return R(e)}catch(g){c(Fa.interr(f,g))}},{exp:f,expressions:H,$$watchDelegate:function(a,b){var c;return a.$watchGroup(ta,function(d,e){var g=R(d);A(b)&&b.call(this,g,d!==e?c:g,a);c=g})}})}}var l=a.length,m=b.length,n=new RegExp(a.replace(/./g,f),"g"),q=new RegExp(b.replace(/./g,f),"g");h.startSymbol=function(){return a};h.endSymbol=function(){return b};return h}]}function Ef(){this.$get=["$rootScope","$window","$q",
"$$q","$browser",function(a,b,d,c,e){function f(f,h,l,m){function n(){q?f.apply(null,G):f(v)}var q=4<arguments.length,G=q?ya.call(arguments,4):[],L=b.setInterval,p=b.clearInterval,v=0,s=t(m)&&!m,r=(s?c:d).defer(),ma=r.promise;l=t(l)?l:0;ma.$$intervalId=L(function(){s?e.defer(n):a.$evalAsync(n);r.notify(v++);0<l&&v>=l&&(r.resolve(v),p(ma.$$intervalId),delete g[ma.$$intervalId]);s||a.$apply()},h);g[ma.$$intervalId]=r;return ma}var g={};f.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].promise.$$state.pur=
!0,g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return f}]}function tc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=gb(a[b]);return a.join("/")}function Ad(a,b){var d=ua(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=Z(d.port)||zg[d.protocol]||null}function Bd(a,b){if(Ag.test(a))throw mb("badpath",a);var d="/"!==a.charAt(0);d&&(a="/"+a);var c=ua(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):
c.pathname);b.$$search=Tc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function uc(a,b){return a.slice(0,b.length)===b}function va(a,b){if(uc(b,a))return b.substr(a.length)}function La(a){var b=a.indexOf("#");return-1===b?a:a.substr(0,b)}function nb(a){return a.replace(/(#.+)|#$/,"$1")}function vc(a,b,d){this.$$html5=!0;d=d||"";Ad(a,this);this.$$parse=function(a){var d=va(b,a);if(!D(d))throw mb("ipthprfx",a,b);Bd(d,this);this.$$path||(this.$$path=
"/");this.$$compose()};this.$$compose=function(){var a=cc(this.$$search),d=this.$$hash?"#"+gb(this.$$hash):"";this.$$url=tc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1);this.$$urlUpdatedByLocation=!0};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;t(f=va(a,c))?(g=f,g=d&&t(f=va(d,f))?b+(va("/",f)||f):a+g):t(f=va(b,c))?g=b+f:b===c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function wc(a,b,d){Ad(a,this);this.$$parse=function(c){var e=va(a,
c)||va(b,c),f;w(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",w(e)&&(a=c,this.replace())):(f=va(d,e),w(f)&&(f=e));Bd(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;uc(f,e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=cc(this.$$search),e=this.$$hash?"#"+gb(this.$$hash):"";this.$$url=tc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"");this.$$urlUpdatedByLocation=!0};this.$$parseLinkUrl=function(b,d){return La(a)===
La(b)?(this.$$parse(b),!0):!1}}function Cd(a,b,d){this.$$html5=!0;wc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a===La(c)?f=c:(g=va(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=cc(this.$$search),e=this.$$hash?"#"+gb(this.$$hash):"";this.$$url=tc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url;this.$$urlUpdatedByLocation=!0}}function Lb(a){return function(){return this[a]}}
function Dd(a,b){return function(d){if(w(d))return this[a];this[a]=b(d);this.$$compose();return this}}function Lf(){var a="!",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return t(b)?(a=b,this):a};this.html5Mode=function(a){if(Na(a))return b.enabled=a,this;if(E(a)){Na(a.enabled)&&(b.enabled=a.enabled);Na(a.requireBase)&&(b.requireBase=a.requireBase);if(Na(a.rewriteLinks)||D(a.rewriteLinks))b.rewriteLinks=a.rewriteLinks;return this}return b};this.$get=["$rootScope","$browser",
"$sniffer","$rootElement","$window",function(d,c,e,f,g){function k(a,b,d){var e=l.url(),g=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(f){throw l.url(e),l.$$state=g,f;}}function h(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var n=c.url(),q;if(b.enabled){if(!m&&b.requireBase)throw mb("nobase");q=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(m||"/");m=e.history?vc:Cd}else q=La(n),m=wc;var G=q.substr(0,La(q).lastIndexOf("/")+1);l=new m(q,G,"#"+
a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var p=/^\s*(javascript|mailto):/i;f.on("click",function(a){var e=b.rewriteLinks;if(e&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!==a.which&&2!==a.button){for(var h=B(a.target);"a"!==za(h[0]);)if(h[0]===f[0]||!(h=h.parent())[0])return;if(!D(e)||!w(h.attr(e))){var e=h.prop("href"),k=h.attr("href")||h.attr("xlink:href");E(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=ua(e.animVal).href);p.test(e)||!e||h.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(e,
k)||(a.preventDefault(),l.absUrl()!==c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}}});nb(l.absUrl())!==nb(n)&&c.url(l.absUrl(),!0);var z=!0;c.onUrlChange(function(a,b){uc(a,G)?(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,g;a=nb(a);l.$$parse(a);l.$$state=b;g=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(g?(l.$$parse(c),l.$$state=e,k(c,!1,e)):(z=!1,h(c,e)))}),d.$$phase||d.$digest()):g.location.href=a});d.$watch(function(){if(z||l.$$urlUpdatedByLocation){l.$$urlUpdatedByLocation=
!1;var a=nb(c.url()),b=nb(l.absUrl()),g=c.state(),f=l.$$replace,m=a!==b||l.$$html5&&e.history&&g!==l.$$state;if(z||m)z=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,g).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=g):(m&&k(b,f,g===l.$$state?null:l.$$state),h(a,g)))})}l.$$replace=!1});return l}]}function Mf(){var a=!0,b=this;this.debugEnabled=function(b){return t(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){$b(a)&&(a.stack&&
f?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||C;return function(){var a=[];p(arguments,function(b){a.push(c(b))});return Function.prototype.apply.call(e,b,a)}}var f=Ca||/\bEdge\//.test(d.navigator&&d.navigator.userAgent);return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,
arguments)}}()}}]}function Bg(a){return a+""}function Cg(a,b){return"undefined"!==typeof a?a:b}function Ed(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function Dg(a,b){switch(a.type){case r.MemberExpression:if(a.computed)return!1;break;case r.UnaryExpression:return 1;case r.BinaryExpression:return"+"!==a.operator?1:!1;case r.CallExpression:return!1}return void 0===b?Fd:b}function V(a,b,d){var c,e,f=a.isPure=Dg(a,d);switch(a.type){case r.Program:c=!0;p(a.body,function(a){V(a.expression,
b,f);c=c&&a.expression.constant});a.constant=c;break;case r.Literal:a.constant=!0;a.toWatch=[];break;case r.UnaryExpression:V(a.argument,b,f);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case r.BinaryExpression:V(a.left,b,f);V(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case r.LogicalExpression:V(a.left,b,f);V(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case r.ConditionalExpression:V(a.test,
b,f);V(a.alternate,b,f);V(a.consequent,b,f);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case r.Identifier:a.constant=!1;a.toWatch=[a];break;case r.MemberExpression:V(a.object,b,f);a.computed&&V(a.property,b,f);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=a.constant?[]:[a];break;case r.CallExpression:c=d=a.filter?!b(a.callee.name).$stateful:!1;e=[];p(a.arguments,function(a){V(a,b,f);c=c&&a.constant;e.push.apply(e,
a.toWatch)});a.constant=c;a.toWatch=d?e:[a];break;case r.AssignmentExpression:V(a.left,b,f);V(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case r.ArrayExpression:c=!0;e=[];p(a.elements,function(a){V(a,b,f);c=c&&a.constant;e.push.apply(e,a.toWatch)});a.constant=c;a.toWatch=e;break;case r.ObjectExpression:c=!0;e=[];p(a.properties,function(a){V(a.value,b,f);c=c&&a.value.constant;e.push.apply(e,a.value.toWatch);a.computed&&(V(a.key,b,!1),c=c&&a.key.constant,e.push.apply(e,
a.key.toWatch))});a.constant=c;a.toWatch=e;break;case r.ThisExpression:a.constant=!1;a.toWatch=[];break;case r.LocalsExpression:a.constant=!1,a.toWatch=[]}}function Gd(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function Hd(a){return a.type===r.Identifier||a.type===r.MemberExpression}function Id(a){if(1===a.body.length&&Hd(a.body[0].expression))return{type:r.AssignmentExpression,left:a.body[0].expression,right:{type:r.NGValueParameter},operator:"="}}
function Jd(a){this.$filter=a}function Kd(a){this.$filter=a}function xc(a,b,d){this.ast=new r(a,d);this.astCompiler=d.csp?new Kd(b):new Jd(b)}function yc(a){return A(a.valueOf)?a.valueOf():Eg.call(a)}function Nf(){var a=S(),b={"true":!0,"false":!1,"null":null,undefined:void 0},d,c;this.addLiteral=function(a,c){b[a]=c};this.setIdentifierFns=function(a,b){d=a;c=b;return this};this.$get=["$filter",function(e){function f(a,b,c){return null==a||null==b?a===b:"object"!==typeof a||(a=yc(a),"object"!==typeof a||
c)?a===b||a!==a&&b!==b:!1}function g(a,b,c,d,e){var g=d.inputs,h;if(1===g.length){var k=f,g=g[0];return a.$watch(function(a){var b=g(a);f(b,k,g.isPure)||(h=d(a,void 0,void 0,[b]),k=b&&yc(b));return h},b,c,e)}for(var l=[],m=[],n=0,p=g.length;n<p;n++)l[n]=f,m[n]=null;return a.$watch(function(a){for(var b=!1,c=0,e=g.length;c<e;c++){var k=g[c](a);if(b||(b=!f(k,l[c],g[c].isPure)))m[c]=k,l[c]=k&&yc(k)}b&&(h=d(a,void 0,void 0,m));return h},b,c,e)}function k(a,b,c,d,e){function f(a){return d(a)}function h(a,
c,d){l=a;A(b)&&b(a,c,d);t(a)&&d.$$postDigest(function(){t(l)&&k()})}var k,l;return k=d.inputs?g(a,h,c,d,e):a.$watch(f,h,c)}function h(a,b,c,d){function e(a){var b=!0;p(a,function(a){t(a)||(b=!1)});return b}var g,f;return g=a.$watch(function(a){return d(a)},function(a,c,d){f=a;A(b)&&b(a,c,d);e(a)&&d.$$postDigest(function(){e(f)&&g()})},c)}function l(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function m(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,e=c!==h&&c!==k?function(c,
e,g,f){g=d&&f?f[0]:a(c,e,g,f);return b(g,c,e)}:function(c,d,e,g){e=a(c,d,e,g);c=b(e,c,d);return t(e)?c:e},d=!a.inputs;c&&c!==g?(e.$$watchDelegate=c,e.inputs=a.inputs):b.$stateful||(e.$$watchDelegate=g,e.inputs=a.inputs?a.inputs:[a]);e.inputs&&(e.inputs=e.inputs.map(function(a){return a.isPure===Fd?function(b){return a(b)}:a}));return e}var n={csp:Ja().noUnsafeEval,literals:pa(b),isIdentifierStart:A(d)&&d,isIdentifierContinue:A(c)&&c};return function(b,c){var d,f,p;switch(typeof b){case "string":return p=
b=b.trim(),d=a[p],d||(":"===b.charAt(0)&&":"===b.charAt(1)&&(f=!0,b=b.substring(2)),d=new zc(n),d=(new xc(d,e,n)).parse(b),d.constant?d.$$watchDelegate=l:f?d.$$watchDelegate=d.literal?h:k:d.inputs&&(d.$$watchDelegate=g),a[p]=d),m(d,c);case "function":return m(b,c);default:return m(C,c)}}}]}function Pf(){var a=!0;this.$get=["$rootScope","$exceptionHandler",function(b,d){return Ld(function(a){b.$evalAsync(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return t(b)?(a=b,this):a}}function Qf(){var a=
!0;this.$get=["$browser","$exceptionHandler",function(b,d){return Ld(function(a){b.defer(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return t(b)?(a=b,this):a}}function Ld(a,b,d){function c(){return new e}function e(){var a=this.promise=new f;this.resolve=function(b){h(a,b)};this.reject=function(b){m(a,b)};this.notify=function(b){q(a,b)}}function f(){this.$$state={status:0}}function g(){for(;!t&&u.length;){var a=u.shift();if(!a.pur){a.pur=!0;var c=a.value,c="Possibly unhandled rejection: "+
("function"===typeof c?c.toString().replace(/ \{[\s\S]*$/,""):w(c)?"undefined":"string"!==typeof c?De(c,void 0):c);$b(a.value)?b(a.value,c):b(c)}}}function k(b){!d||b.pending||2!==b.status||b.pur||(0===t&&0===u.length&&a(g),u.push(b));!b.processScheduled&&b.pending&&(b.processScheduled=!0,++t,a(function(){var c,e,f;f=b.pending;b.processScheduled=!1;b.pending=void 0;try{for(var k=0,l=f.length;k<l;++k){b.pur=!0;e=f[k][0];c=f[k][b.status];try{A(c)?h(e,c(b.value)):1===b.status?h(e,b.value):m(e,b.value)}catch(n){m(e,
n)}}}finally{--t,d&&0===t&&a(g)}}))}function h(a,b){a.$$state.status||(b===a?n(a,s("qcycle",b)):l(a,b))}function l(a,b){function c(b){f||(f=!0,l(a,b))}function d(b){f||(f=!0,n(a,b))}function e(b){q(a,b)}var g,f=!1;try{if(E(b)||A(b))g=b.then;A(g)?(a.$$state.status=-1,g.call(b,c,d,e)):(a.$$state.value=b,a.$$state.status=1,k(a.$$state))}catch(h){d(h)}}function m(a,b){a.$$state.status||n(a,b)}function n(a,b){a.$$state.value=b;a.$$state.status=2;k(a.$$state)}function q(c,d){var e=c.$$state.pending;0>=
c.$$state.status&&e&&e.length&&a(function(){for(var a,c,g=0,f=e.length;g<f;g++){c=e[g][0];a=e[g][3];try{q(c,A(a)?a(d):d)}catch(h){b(h)}}})}function G(a){var b=new f;m(b,a);return b}function r(a,b,c){var d=null;try{A(c)&&(d=c())}catch(e){return G(e)}return d&&A(d.then)?d.then(function(){return b(a)},G):b(a)}function z(a,b,c,d){var e=new f;h(e,a);return e.then(b,c,d)}function v(a){if(!A(a))throw s("norslvr",a);var b=new f;a(function(a){h(b,a)},function(a){m(b,a)});return b}var s=M("$q",TypeError),t=
0,u=[];P(f.prototype,{then:function(a,b,c){if(w(a)&&w(b)&&w(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&k(this.$$state);return d},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return r(b,y,a)},function(b){return r(b,G,a)},b)}});var y=z;v.prototype=f.prototype;v.defer=c;v.reject=G;v.when=z;v.resolve=y;v.all=function(a){var b=new f,c=0,d=I(a)?[]:{};p(a,function(a,
e){c++;z(a).then(function(a){d[e]=a;--c||h(b,d)},function(a){m(b,a)})});0===c&&h(b,d);return b};v.race=function(a){var b=c();p(a,function(a){z(a).then(b.resolve,b.reject)});return b.promise};return v}function Zf(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);
return function(){b.cancel(c)}};f.supported=e;return f}]}function Of(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++sb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=M("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,k){function h(a){a.currentScope.$$destroyed=
!0}function l(a){9===Ca&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++sb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function n(a){if(s.$$phase)throw d("inprog",
s.$$phase);s.$$phase=a}function q(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function G(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function r(){}function z(){for(;y.length;)try{y.shift()()}catch(a){f(a)}e=null}function v(){null===e&&(e=k.defer(function(){s.$apply(z)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);
d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!==this)&&d.$on("$destroy",h);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:r,get:f,exp:e||a,eq:!!d};c=null;A(b)||(l.fn=C);k||(k=h.$$watchers=[],k.$$digestWatchIndex=-1);k.unshift(l);k.$$digestWatchIndex++;q(this,1);return function(){var a=db(k,l);0<=a&&(q(h,-1),
a<k.$$digestWatchIndex&&k.$$digestWatchIndex--);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,f)):b(e,d,f)}var d=Array(a.length),e=Array(a.length),g=[],f=this,h=!1,k=!0;if(!a.length){var l=!0;f.$evalAsync(function(){l&&b(e,e,f)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,g){e[0]=a;d[0]=c;b(e,a===c?e:d,g)});p(a,function(a,b){var k=f.$watch(a,function(a,g){e[b]=a;d[b]=g;h||(h=!0,f.$evalAsync(c))});g.push(k)});return function(){for(;g.length;)g.shift()()}},
$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!w(e)){if(E(e))if(xa(e))for(f!==n&&(f=n,p=f.length=0,l++),a=e.length,p!==a&&(l++,f.length=p=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==q&&(f=q={},p=0,l++);a=0;for(b in e)ra.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(p++,f[b]=g,l++));if(p>a)for(b in l++,f)ra.call(e,b)||(p--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=
g(a,c),n=[],q={},s=!0,p=0;return this.$watch(m,function(){s?(s=!1,b(e,e,d)):b(e,h,d);if(k)if(E(e))if(xa(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)ra.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,g,h,l,m,q,p,G=b,y,v=[],w,B;n("$digest");k.$$checkUrlChange();this===s&&null!==e&&(k.defer.cancel(e),z());c=null;do{p=!1;y=this;for(q=0;q<t.length;q++){try{B=t[q],l=B.fn,l(B.scope,B.locals)}catch(C){f(C)}c=null}t.length=0;a:do{if(q=y.$$watchers)for(q.$$digestWatchIndex=
q.length;q.$$digestWatchIndex--;)try{if(a=q[q.$$digestWatchIndex])if(m=a.get,(g=m(y))!==(h=a.last)&&!(a.eq?sa(g,h):T(g)&&T(h)))p=!0,c=a,a.last=a.eq?pa(g,null):g,l=a.fn,l(g,h===r?g:h,y),5>G&&(w=4-G,v[w]||(v[w]=[]),v[w].push({msg:A(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:h}));else if(a===c){p=!1;break a}}catch(E){f(E)}if(!(q=y.$$watchersCount&&y.$$childHead||y!==this&&y.$$nextSibling))for(;y!==this&&!(q=y.$$nextSibling);)y=y.$parent}while(y=q);if((p||t.length)&&!G--)throw s.$$phase=
null,d("infdig",b,v);}while(p||t.length);for(s.$$phase=null;J<u.length;)try{u[J++]()}catch(D){f(D)}u.length=J=0;k.$$checkUrlChange()},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===s&&k.$$applicationDestroyed();q(this,-this.$$watchersCount);for(var b in this.$$listenerCount)G(this,this.$$listenerCount[b],b);a&&a.$$childHead===this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&
(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=C;this.$on=this.$watch=this.$watchGroup=function(){return C};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){s.$$phase||t.length||k.defer(function(){t.length&&s.$digest()});t.push({scope:this,fn:g(a),locals:b})},$$postDigest:function(a){u.push(a)},
$apply:function(a){try{n("$apply");try{return this.$eval(a)}finally{s.$$phase=null}}catch(b){f(b)}finally{try{s.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&y.push(b);a=g(a);v()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,G(e,1,a))}},$emit:function(a,
b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=eb([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=
!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=eb([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var s=new m,t=s.$$asyncQueue=[],u=s.$$postDigestQueue=[],y=s.$$applyAsyncQueue=[],J=0;return s}]}function Ge(){var a=
/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return t(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return t(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f;f=ua(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function Fg(a){if("self"===a)return a;if(D(a)){if(-1<a.indexOf("***"))throw wa("iwcard",a);a=Md(a).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*");return new RegExp("^"+
a+"$")}if(ab(a))return new RegExp("^"+a.source+"$");throw wa("imatcher");}function Nd(a){var b=[];t(a)&&p(a,function(a){b.push(Fg(a))});return b}function Sf(){this.SCE_CONTEXTS=oa;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=Nd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=Nd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?zd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=
function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw wa("unsafe");};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),k={};k[oa.HTML]=e(g);k[oa.CSS]=e(g);k[oa.URL]=e(g);k[oa.JS]=e(g);k[oa.RESOURCE_URL]=e(k[oa.URL]);return{trustAs:function(a,b){var c=k.hasOwnProperty(a)?k[a]:null;if(!c)throw wa("icontext",a,b);if(null===b||w(b)||
""===b)return b;if("string"!==typeof b)throw wa("itype",a);return new c(b)},getTrusted:function(d,e){if(null===e||w(e)||""===e)return e;var g=k.hasOwnProperty(d)?k[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===oa.RESOURCE_URL){var g=ua(e.toString()),n,q,p=!1;n=0;for(q=a.length;n<q;n++)if(c(a[n],g)){p=!0;break}if(p)for(n=0,q=b.length;n<q;n++)if(c(b[n],g)){p=!1;break}if(p)return e;throw wa("insecurl",e.toString());}if(d===oa.HTML)return f(e);throw wa("unsafe");},valueOf:function(a){return a instanceof
g?a.$$unwrapTrustedValue():a}}}]}function Rf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ca)throw wa("iequirks");var c=ja(oa);c.isEnabled=function(){return a};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=bb);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,
f=c.getTrusted,g=c.trustAs;p(oa,function(a,b){var d=N(b);c[("parse_as_"+d).replace(Ac,jb)]=function(b){return e(a,b)};c[("get_trusted_"+d).replace(Ac,jb)]=function(b){return f(a,b)};c[("trust_as_"+d).replace(Ac,jb)]=function(b){return g(a,b)}});return c}]}function Tf(){this.$get=["$window","$document",function(a,b){var d={},c=!((!a.nw||!a.nw.process)&&a.chrome&&(a.chrome.app&&a.chrome.app.runtime||!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,e=Z((/android (\d+)/.exec(N((a.navigator||
{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},k=g.body&&g.body.style,h=!1,l=!1;k&&(h=!!("transition"in k||"webkitTransition"in k),l=!!("animation"in k||"webkitAnimation"in k));return{history:!(!c||4>e||f),hasEvent:function(a){if("input"===a&&Ca)return!1;if(w(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Ja(),transitions:h,animations:l,android:e}}]}function Vf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$exceptionHandler",
"$templateCache","$http","$q","$sce",function(b,d,c,e,f){function g(k,h){g.totalPendingRequests++;if(!D(k)||w(d.get(k)))k=f.getTrustedResourceUrl(k);var l=c.defaults&&c.defaults.transformResponse;I(l)?l=l.filter(function(a){return a!==qc}):l===qc&&(l=null);return c.get(k,P({cache:d,transformResponse:l},a)).finally(function(){g.totalPendingRequests--}).then(function(a){d.put(k,a.data);return a.data},function(a){h||(a=Gg("tpload",k,a.status,a.statusText),b(a));return e.reject(a)})}g.totalPendingRequests=
0;return g}]}function Wf(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];p(a,function(a){var c=$.element(a).data("$binding");c&&p(c,function(c){d?(new RegExp("(^|\\s)"+Md(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!==c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],k=0;k<g.length;++k){var h=a.querySelectorAll("["+g[k]+"model"+(d?"=":"*=")+'"'+b+'"]');
if(h.length)return h}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function Xf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,h,l){A(f)||(l=h,h=f,f=C);var m=ya.call(arguments,3),n=t(l)&&!l,q=(n?c:d).defer(),p=q.promise,r;r=b.defer(function(){try{q.resolve(f.apply(null,m))}catch(b){q.reject(b),e(b)}finally{delete g[p.$$timeoutId]}n||
a.$apply()},h);p.$$timeoutId=r;g[r]=q;return p}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].promise.$$state.pur=!0,g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return f}]}function ua(a){Ca&&(X.setAttribute("href",a),a=X.href);X.setAttribute("href",a);return{href:X.href,protocol:X.protocol?X.protocol.replace(/:$/,""):"",host:X.host,search:X.search?X.search.replace(/^\?/,""):"",hash:X.hash?X.hash.replace(/^#/,""):"",hostname:X.hostname,
port:X.port,pathname:"/"===X.pathname.charAt(0)?X.pathname:"/"+X.pathname}}function zd(a){a=D(a)?ua(a):a;return a.protocol===Od.protocol&&a.host===Od.host}function Yf(){this.$get=ka(u)}function Pd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},e="";return function(){var a,g,k,h,l;try{a=d.cookie||""}catch(m){a=""}if(a!==e)for(e=a,a=e.split("; "),c={},k=0;k<a.length;k++)g=a[k],h=g.indexOf("="),0<h&&(l=b(g.substring(0,h)),w(c[l])&&(c[l]=b(g.substring(h+1))));
return c}}function bg(){this.$get=Pd}function ed(a){function b(d,c){if(E(d)){var e={};p(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Qd);b("date",Rd);b("filter",Hg);b("json",Ig);b("limitTo",Jg);b("lowercase",Kg);b("number",Sd);b("orderBy",Td);b("uppercase",Lg)}function Hg(){return function(a,b,d,c){if(!xa(a)){if(null==a)return a;throw M("filter")("notarray",a);}c=
c||"$";var e;switch(Bc(b)){case "function":break;case "boolean":case "null":case "number":case "string":e=!0;case "object":b=Mg(b,d,c,e);break;default:return a}return Array.prototype.filter.call(a,b)}}function Mg(a,b,d,c){var e=E(a)&&d in a;!0===b?b=sa:A(b)||(b=function(a,b){if(w(a))return!1;if(null===a||null===b)return a===b;if(E(b)||E(a)&&!Zb(a))return!1;a=N(""+a);b=N(""+b);return-1!==a.indexOf(b)});return function(f){return e&&!E(f)?ga(f,a[d],b,d,!1):ga(f,a,b,d,c)}}function ga(a,b,d,c,e,f){var g=
Bc(a),k=Bc(b);if("string"===k&&"!"===b.charAt(0))return!ga(a,b.substring(1),d,c,e);if(I(a))return a.some(function(a){return ga(a,b,d,c,e)});switch(g){case "object":var h;if(e){for(h in a)if(h.charAt&&"$"!==h.charAt(0)&&ga(a[h],b,d,c,!0))return!0;return f?!1:ga(a,b,d,c,!1)}if("object"===k){for(h in b)if(f=b[h],!A(f)&&!w(f)&&(g=h===c,!ga(g?a:a[h],f,d,c,g,g)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function Bc(a){return null===a?"null":typeof a}function Qd(a){var b=
a.NUMBER_FORMATS;return function(a,c,e){w(c)&&(c=b.CURRENCY_SYM);w(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Ud(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(/\u00A4/g,c)}}function Sd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Ud(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function Ng(a){var b=0,d,c,e,f,g;-1<(c=a.indexOf(Vd))&&(a=a.replace(Vd,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)===Cc;e++);
if(e===(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)===Cc;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Wd&&(d=d.splice(0,Wd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function Og(a,b,d,c){var e=a.d,f=e.length-a.i;b=w(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=0}else for(f=Math.max(0,f),a.i=1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-
1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Ud(a,b,d,c,e){if(!D(a)&&!Y(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,k=Math.abs(a)+"",h="";if(f)h="\u221e";else{g=Ng(k);Og(g,e,b.minFrac,b.maxFrac);h=g.d;k=g.i;e=g.e;f=[];for(g=h.reduce(function(a,b){return a&&!b},!0);0>k;)h.unshift(0),k++;0<k?f=h.splice(k,h.length):(f=h,h=[0]);k=[];for(h.length>=b.lgSize&&k.unshift(h.splice(-b.lgSize,h.length).join(""));h.length>
b.gSize;)k.unshift(h.splice(-b.gSize,h.length).join(""));h.length&&k.unshift(h.join(""));h=k.join(d);f.length&&(h+=c+f.join(""));e&&(h+="e+"+e)}return 0>a&&!g?b.negPre+h+b.negSuf:b.posPre+h+b.posSuf}function Mb(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=Cc+a;d&&(a=a.substr(a.length-b));return e+a}function da(a,b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12===d&&(f=12);return Mb(f,b,c,e)}}function ob(a,b,d){return function(c,e){var f=
c["get"+a](),g=wb((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Xd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Yd(a){return function(b){var d=Xd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Mb(b,a)}}function Dc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Rd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,k=b[8]?a.setUTCFullYear:a.setFullYear,
h=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=Z(b[9]+b[10]),g=Z(b[9]+b[11]));k.call(a,Z(b[1]),Z(b[2])-1,Z(b[3]));f=Z(b[4]||0)-f;g=Z(b[5]||0)-g;k=Z(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));h.call(a,f,g,k,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,d,f){var g="",k=[],h,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;D(c)&&(c=Pg.test(c)?Z(c):b(c));Y(c)&&(c=new Date(c));if(!ea(c)||!isFinite(c.getTime()))return c;
for(;d;)(l=Qg.exec(d))?(k=eb(k,l,1),d=k.pop()):(k.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=Rc(f,m),c=bc(c,f,!0));p(k,function(b){h=Rg[b];g+=h?h(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Ig(){return function(a,b){w(b)&&(b=2);return fb(a,b)}}function Jg(){return function(a,b,d){b=Infinity===Math.abs(Number(b))?Number(b):Z(b);if(T(b))return a;Y(a)&&(a=a.toString());if(!xa(a))return a;d=!d||isNaN(d)?0:Z(d);d=0>d?Math.max(0,a.length+
d):d;return 0<=b?Ec(a,d,d+b):0===d?Ec(a,b,a.length):Ec(a,Math.max(0,d+b),d)}}function Ec(a,b,d){return D(a)?a.slice(b,d):ya.call(a,b,d)}function Td(a){function b(b){return b.map(function(b){var c=1,d=bb;if(A(b))d=b;else if(D(b)){if("+"===b.charAt(0)||"-"===b.charAt(0))c="-"===b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=d(),d=function(a){return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}
function c(a,b){var c=0,d=a.type,h=b.type;if(d===h){var h=a.value,l=b.value;"string"===d?(h=h.toLowerCase(),l=l.toLowerCase()):"object"===d&&(E(h)&&(h=a.index),E(l)&&(l=b.index));h!==l&&(c=h<l?-1:1)}else c=d<h?-1:1;return c}return function(a,f,g,k){if(null==a)return a;if(!xa(a))throw M("orderBy")("notarray",a);I(f)||(f=[f]);0===f.length&&(f=["+"]);var h=b(f),l=g?-1:1,m=A(k)?k:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:h.map(function(c){var e=
c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("object"===c)a:{if(A(e.valueOf)&&(e=e.valueOf(),d(e)))break a;Zb(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var d=0,e=h.length;d<e;d++){var g=m(a.predicateValues[d],b.predicateValues[d]);if(g)return g*h[d].descending*l}return(m(a.tieBreaker,b.tieBreaker)||c(a.tieBreaker,b.tieBreaker))*l});return a=a.map(function(a){return a.value})}}function Qa(a){A(a)&&(a={link:a});a.restrict=a.restrict||"AC";
return ka(a)}function Nb(a,b,d,c,e){this.$$controls=[];this.$error={};this.$$success={};this.$pending=void 0;this.$name=e(b.name||b.ngForm||"")(d);this.$dirty=!1;this.$valid=this.$pristine=!0;this.$submitted=this.$invalid=!1;this.$$parentForm=Ob;this.$$element=a;this.$$animate=c;Zd(this)}function Zd(a){a.$$classCache={};a.$$classCache[$d]=!(a.$$classCache[pb]=a.$$element.hasClass(pb))}function ae(a){function b(a,b,c){c&&!a.$$classCache[b]?(a.$$animate.addClass(a.$$element,b),a.$$classCache[b]=!0):
!c&&a.$$classCache[b]&&(a.$$animate.removeClass(a.$$element,b),a.$$classCache[b]=!1)}function d(a,c,d){c=c?"-"+Vc(c,"-"):"";b(a,pb+c,!0===d);b(a,$d+c,!1===d)}var c=a.set,e=a.unset;a.clazz.prototype.$setValidity=function(a,g,k){w(g)?(this.$pending||(this.$pending={}),c(this.$pending,a,k)):(this.$pending&&e(this.$pending,a,k),be(this.$pending)&&(this.$pending=void 0));Na(g)?g?(e(this.$error,a,k),c(this.$$success,a,k)):(c(this.$error,a,k),e(this.$$success,a,k)):(e(this.$error,a,k),e(this.$$success,a,
k));this.$pending?(b(this,"ng-pending",!0),this.$valid=this.$invalid=void 0,d(this,"",null)):(b(this,"ng-pending",!1),this.$valid=be(this.$error),this.$invalid=!this.$valid,d(this,"",this.$valid));g=this.$pending&&this.$pending[a]?void 0:this.$error[a]?!1:this.$$success[a]?!0:null;d(this,a,g);this.$$parentForm.$setValidity(a,g,this)}}function be(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function Fc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function Wa(a,
b,d,c,e,f){var g=N(b[0].type);if(!e.android){var k=!1;b.on("compositionstart",function(){k=!0});b.on("compositionend",function(){k=!1;l()})}var h,l=function(a){h&&(f.defer.cancel(h),h=null);if(!k){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=Q(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){h||(h=f.defer(function(){h=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=
a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",m)}b.on("change",l);if(ce[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!h){var b=this.validity,c=b.badInput,d=b.typeMismatch;h=f.defer(function(){h=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Pb(a,b){return function(d,c){var e,f;if(ea(d))return d;
if(D(d)){'"'===d.charAt(0)&&'"'===d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(Sg.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},p(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function qb(a,b,d,c){return function(e,
f,g,k,h,l,m){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function q(a){return t(a)&&!ea(a)?d(a)||void 0:a}Gc(e,f,g,k);Wa(e,f,g,k,h,l);var p=k&&k.$options.getOption("timezone"),r;k.$$parserName=a;k.$parsers.push(function(a){if(k.$isEmpty(a))return null;if(b.test(a))return a=d(a,r),p&&(a=bc(a,p)),a});k.$formatters.push(function(a){if(a&&!ea(a))throw rb("datefmt",a);if(n(a))return(r=a)&&p&&(r=bc(r,p,!0)),m("date")(a,c,p);r=null;return""});if(t(g.min)||g.ngMin){var z;k.$validators.min=
function(a){return!n(a)||w(z)||d(a)>=z};g.$observe("min",function(a){z=q(a);k.$validate()})}if(t(g.max)||g.ngMax){var v;k.$validators.max=function(a){return!n(a)||w(v)||d(a)<=v};g.$observe("max",function(a){v=q(a);k.$validate()})}}}function Gc(a,b,d,c){(c.$$hasNativeValidators=E(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function de(a){a.$$parserName="number";a.$parsers.push(function(b){if(a.$isEmpty(b))return null;if(Tg.test(b))return parseFloat(b)});
a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!Y(b))throw rb("numfmt",b);b=b.toString()}return b})}function Xa(a){t(a)&&!Y(a)&&(a=parseFloat(a));return T(a)?void 0:a}function Hc(a){var b=a.toString(),d=b.indexOf(".");return-1===d?-1<a&&1>a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-d-1}function ee(a,b,d){a=Number(a);var c=(a|0)!==a,e=(b|0)!==b,f=(d|0)!==d;if(c||e||f){var g=c?Hc(a):0,k=e?Hc(b):0,h=f?Hc(d):0,g=Math.max(g,k,h),g=Math.pow(10,g);a*=g;b*=g;d*=g;c&&(a=Math.round(a));e&&(b=Math.round(b));
f&&(d=Math.round(d))}return 0===(a-b)%d}function fe(a,b,d,c,e){if(t(c)){a=a(c);if(!a.constant)throw rb("constexpr",d,c);return a(b)}return e}function Ic(a,b){function d(a,b){if(!a||!a.length)return[];if(!b||!b.length)return a;var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],f=0;f<b.length;f++)if(e===b[f])continue a;c.push(e)}return c}function c(a){var b=a;I(a)?b=a.map(c).join(" "):E(a)&&(b=Object.keys(a).filter(function(b){return a[b]}).join(" "));return b}function e(a){var b=a;if(I(a))b=a.map(e);
else if(E(a)){var c=!1,b=Object.keys(a).filter(function(b){b=a[b];!c&&w(b)&&(c=!0);return b});c&&b.push(void 0)}return b}a="ngClass"+a;var f;return["$parse",function(g){return{restrict:"AC",link:function(k,h,l){function m(a,b){var c=[];p(a,function(a){if(0<b||s[a])s[a]=(s[a]||0)+b,s[a]===+(0<b)&&c.push(a)});return c.join(" ")}function n(a){if(a===b){var c=w,c=m(c&&c.split(" "),1);l.$addClass(c)}else c=w,c=m(c&&c.split(" "),-1),l.$removeClass(c);u=a}function q(a){a=c(a);a!==w&&r(a)}function r(a){if(u===
b){var c=w&&w.split(" "),e=a&&a.split(" "),g=d(c,e),c=d(e,c),g=m(g,-1),c=m(c,1);l.$addClass(c);l.$removeClass(g)}w=a}var t=l[a].trim(),z=":"===t.charAt(0)&&":"===t.charAt(1),t=g(t,z?e:c),v=z?q:r,s=h.data("$classCounts"),u=!0,w;s||(s=S(),h.data("$classCounts",s));"ngClass"!==a&&(f||(f=g("$index",function(a){return a&1})),k.$watch(f,n));k.$watch(t,v,z)}}}]}function Qb(a,b,d,c,e,f,g,k,h){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators=
{};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=h(d.name||"",!1)(a);this.$$parentForm=Ob;this.$options=Rb;this.$$parsedNgModel=e(d.ngModel);this.$$parsedNgModelAssign=this.$$parsedNgModel.assign;this.$$ngModelGet=this.$$parsedNgModel;this.$$ngModelSet=this.$$parsedNgModelAssign;this.$$pendingDebounce=null;this.$$parserValid=
void 0;this.$$currentValidationRunId=0;Object.defineProperty(this,"$$scope",{value:a});this.$$attr=d;this.$$element=c;this.$$animate=f;this.$$timeout=g;this.$$parse=e;this.$$q=k;this.$$exceptionHandler=b;Zd(this);Ug(this)}function Ug(a){a.$$scope.$watch(function(b){b=a.$$ngModelGet(b);if(b!==a.$modelValue&&(a.$modelValue===a.$modelValue||b===b)){a.$modelValue=a.$$rawModelValue=b;a.$$parserValid=void 0;for(var d=a.$formatters,c=d.length,e=b;c--;)e=d[c](e);a.$viewValue!==e&&(a.$$updateEmptyClasses(e),
a.$viewValue=a.$$lastCommittedViewValue=e,a.$render(),a.$$runValidators(a.$modelValue,a.$viewValue,C))}return b})}function Jc(a){this.$$options=a}function ge(a,b){p(b,function(b,c){t(a[c])||(a[c]=b)})}function Ga(a,b){a.prop("selected",b);a.attr("selected",b)}var Lc={objectMaxDepth:5},Vg=/^\/(.+)\/([a-z]*)$/,ra=Object.prototype.hasOwnProperty,N=function(a){return D(a)?a.toLowerCase():a},wb=function(a){return D(a)?a.toUpperCase():a},Ca,B,la,ya=[].slice,ug=[].splice,Wg=[].push,ha=Object.prototype.toString,
Oc=Object.getPrototypeOf,qa=M("ng"),$=u.angular||(u.angular={}),ec,sb=0;Ca=u.document.documentMode;var T=Number.isNaN||function(a){return a!==a};C.$inject=[];bb.$inject=[];var I=Array.isArray,se=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,Q=function(a){return D(a)?a.trim():a},Md=function(a){return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Ja=function(){if(!t(Ja.rules)){var a=u.document.querySelector("[ng-csp]")||u.document.querySelector("[data-ng-csp]");
if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Ja.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Ja;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Ja.rules},tb=function(){if(t(tb.name_))return tb.name_;var a,b,d=Ha.length,c,e;for(b=0;b<d;++b)if(c=Ha[b],a=u.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return tb.name_=e},ue=/:/g,
Ha=["ng-","data-ng-","ng:","x-ng-"],xe=function(a){var b=a.currentScript;if(!b)return!0;if(!(b instanceof u.HTMLScriptElement||b instanceof u.SVGScriptElement))return!1;b=b.attributes;return[b.getNamedItem("src"),b.getNamedItem("href"),b.getNamedItem("xlink:href")].every(function(b){if(!b)return!0;if(!b.value)return!1;var c=a.createElement("a");c.href=b.value;if(a.location.origin===c.origin)return!0;switch(c.protocol){case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":return!0;
default:return!1}})}(u.document),Ae=/[A-Z]/g,Wc=!1,Oa=3,Fe={full:"1.6.6",major:1,minor:6,dot:6,codeName:"interdimensional-cable"};U.expando="ng339";var kb=U.cache={},gg=1;U._data=function(a){return this.cache[a[this.expando]]||{}};var cg=/-([a-z])/g,Xg=/^-ms-/,Bb={mouseleave:"mouseout",mouseenter:"mouseover"},hc=M("jqLite"),fg=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,gc=/<|&#?\w+;/,dg=/<([\w:-]+)/,eg=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,aa={option:[1,'<select multiple="multiple">',
"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};aa.optgroup=aa.option;aa.tbody=aa.tfoot=aa.colgroup=aa.caption=aa.thead;aa.th=aa.td;var lg=u.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Sa=U.prototype={ready:gd,toString:function(){var a=[];p(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},
eq:function(a){return 0<=a?B(this[a]):B(this[this.length+a])},length:0,push:Wg,sort:[].sort,splice:[].splice},Hb={};p("multiple selected checked disabled readOnly required open".split(" "),function(a){Hb[N(a)]=a});var ld={};p("input select option textarea button form details".split(" "),function(a){ld[a]=!0});var sd={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern",ngStep:"step"};p({data:lc,removeData:kc,hasData:function(a){for(var b in kb[a.ng339])return!0;
return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)kc(a[b])}},function(a,b){U[b]=a});p({data:lc,inheritedData:Fb,scope:function(a){return B.data(a,"$scope")||Fb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return B.data(a,"$isolateScope")||B.data(a,"$isolateScopeNoTemplate")},controller:id,injector:function(a){return Fb(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:Cb,css:function(a,b,d){b=yb(b.replace(Xg,"ms-"));if(t(d))a.style[b]=d;
else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Oa&&2!==c&&8!==c&&a.getAttribute){var c=N(b),e=Hb[c];if(t(d))null===d||!1===d&&e?a.removeAttribute(b):a.setAttribute(b,e?c:d);else return a=a.getAttribute(b),e&&null!==a&&(a=c),null===a?void 0:a}},prop:function(a,b,d){if(t(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(w(d)){var c=a.nodeType;return 1===c||c===Oa?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(w(b)){if(a.multiple&&"select"===
za(a)){var d=[];p(a.options,function(a){a.selected&&d.push(a.value||a.text)});return d}return a.value}a.value=b},html:function(a,b){if(w(b))return a.innerHTML;zb(a,!0);a.innerHTML=b},empty:jd},function(a,b){U.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==jd&&w(2===a.length&&a!==Cb&&a!==id?b:c)){if(E(b)){for(e=0;e<g;e++)if(a===lc)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=w(e)?Math.min(g,1):g;for(f=0;f<g;f++){var k=a(this[f],b,c);e=e?e+k:k}return e}for(e=0;e<g;e++)a(this[e],
b,c);return this}});p({removeData:kc,on:function(a,b,d,c){if(t(c))throw hc("onargs");if(fc(a)){c=Ab(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=ig(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,k=function(b,c,g){var k=e[b];k||(k=e[b]=[],k.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f));k.push(d)};g--;)b=c[g],Bb[b]?(k(Bb[b],kg),k(b,void 0,!0)):k(b)}},off:hd,one:function(a,b,d){a=B(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,
b){var d,c=a.parentNode;zb(a);p(new U(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];p(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new U(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;p(new U(b),function(b){a.insertBefore(b,d)})}},
wrap:function(a,b){var d=B(b).eq(0).clone()[0],c=a.parentNode;c&&c.replaceChild(d,a);d.appendChild(a)},remove:Gb,detach:function(a){Gb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;if(c){b=new U(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}}},addClass:Eb,removeClass:Db,toggleClass:function(a,b,d){b&&p(b.split(" "),function(b){var e=d;w(e)&&(e=!Cb(a,b));(e?Eb:Db)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},
find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:jc,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=Ab(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:C,type:f,target:a},b.type&&(c=P(c,
b)),b=ja(g),e=d?[c].concat(d):[c],p(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){U.prototype[b]=function(b,c,e){for(var f,g=0,k=this.length;g<k;g++)w(f)?(f=a(this[g],b,c,e),t(f)&&(f=B(f))):ic(f,a(this[g],b,c,e));return t(f)?f:this}});U.prototype.bind=U.prototype.on;U.prototype.unbind=U.prototype.off;var Yg=Object.create(null);md.prototype={_idx:function(a){if(a===this._lastKey)return this._lastIndex;this._lastKey=a;return this._lastIndex=this._keys.indexOf(a)},_transformKey:function(a){return T(a)?
Yg:a},get:function(a){a=this._transformKey(a);a=this._idx(a);if(-1!==a)return this._values[a]},set:function(a,b){a=this._transformKey(a);var d=this._idx(a);-1===d&&(d=this._lastIndex=this._keys.length);this._keys[d]=a;this._values[d]=b},delete:function(a){a=this._transformKey(a);a=this._idx(a);if(-1===a)return!1;this._keys.splice(a,1);this._values.splice(a,1);this._lastKey=NaN;this._lastIndex=-1;return!0}};var Ib=md,ag=[function(){this.$get=[function(){return Ib}]}],ng=/^([^(]+?)=>/,og=/^[^(]*\(\s*([^)]*)\)/m,
Zg=/,/,$g=/^\s*(_?)(\S+?)\1\s*$/,mg=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ba=M("$injector");hb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw D(d)&&d||(d=a.name||pg(a)),Ba("strictdi",d);b=nd(a);p(b[1].split(Zg),function(a){a.replace($g,function(a,b,d){c.push(d)})})}a.$inject=c}}else I(a)?(b=a.length-1,ub(a[b],"fn"),c=a.slice(0,b)):ub(a,"fn",!0);return c};var he=M("$animate"),sf=function(){this.$get=C},tf=function(){var a=new Ib,b=[];this.$get=
["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=D(b)?b.split(" "):I(b)?b:[],p(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){p(b,function(b){var c=a.get(b);if(c){var d=qg(b.attr("class")),e="",f="";p(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});p(b,function(a){e&&Eb(a,e);f&&Db(a,f)});a.delete(b)}});b.length=0}return{enabled:C,on:C,off:C,pin:C,push:function(g,k,h,l){l&&l();h=h||{};h.from&&g.css(h.from);h.to&&g.css(h.to);if(h.addClass||
h.removeClass)if(k=h.addClass,l=h.removeClass,h=a.get(g)||{},k=e(h,k,!0),l=e(h,l,!1),k||l)a.set(g,h),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},qf=["$provide",function(a){var b=this,d=null,c=null;this.$$registeredAnimations=Object.create(null);this.register=function(c,d){if(c&&"."!==c.charAt(0))throw he("notcsel",c);var g=c+"-animation";b.$$registeredAnimations[c.substr(1)]=g;a.factory(g,d)};this.customFilter=function(a){1===arguments.length&&(c=A(a)?a:null);return c};
this.classNameFilter=function(a){if(1===arguments.length&&(d=a instanceof RegExp?a:null)&&/[(\s|\/)]ng-animate[(\s|\/)]/.test(d.toString()))throw d=null,he("nongcls","ng-animate");return d};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var e;a:{for(e=0;e<d.length;e++){var f=d[e];if(1===f.nodeType){e=f;break a}}e=void 0}!e||e.parentNode||e.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},
enter:function(c,d,h,l){d=d&&B(d);h=h&&B(h);d=d||h.parent();b(c,d,h);return a.push(c,"enter",Ka(l))},move:function(c,d,h,l){d=d&&B(d);h=h&&B(h);d=d||h.parent();b(c,d,h);return a.push(c,"move",Ka(l))},leave:function(b,c){return a.push(b,"leave",Ka(c),function(){b.remove()})},addClass:function(b,c,d){d=Ka(d);d.addClass=lb(d.addclass,c);return a.push(b,"addClass",d)},removeClass:function(b,c,d){d=Ka(d);d.removeClass=lb(d.removeClass,c);return a.push(b,"removeClass",d)},setClass:function(b,c,d,f){f=Ka(f);
f.addClass=lb(f.addClass,c);f.removeClass=lb(f.removeClass,d);return a.push(b,"setClass",f)},animate:function(b,c,d,f,m){m=Ka(m);m.from=m.from?P(m.from,c):c;m.to=m.to?P(m.to,d):d;m.tempClasses=lb(m.tempClasses,f||"ng-inline-animate");return a.push(b,"animate",m)}}}]}],vf=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},uf=function(){this.$get=
["$q","$sniffer","$$animateAsyncRun","$$isDocumentHidden","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){c()?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;p(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===
this._state?a():this._doneCallbacks.push(a)},progress:C,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&
this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(p(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return f}]},rf=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=
null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);k||h.complete();k=!0});return h}var g=e||{};g.$$prepared||(g=pa(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var k,h=new d;return{start:f,end:f}}}]},ba=M("$compile"),oc=new function(){};Yc.$inject=["$provide","$$sanitizeUriProvider"];Kb.prototype.isFirstChange=function(){return this.previousValue===oc};var od=/^((?:x|data)[:\-_])/i,tg=/[:\-_]+(.)/g,ud=M("$controller"),
td=/^(\S+)(\s+as\s+([\w$]+))?$/,Cf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof B&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},vd="application/json",sc={"Content-Type":vd+";charset=utf-8"},wg=/^\[|^\{(?!\{)/,xg={"[":/]$/,"{":/}$/},vg=/^\)]\}',?\n/,rc=M("$http"),Fa=$.$interpolateMinErr=M("$interpolate");Fa.throwNoconcat=function(a){throw Fa("noconcat",a);};Fa.interr=function(a,b){return Fa("interr",a,b.toString())};var Kf=function(){this.$get=function(){function a(a){var b=
function(a){b.data=a;b.called=!0};b.id=a;return b}var b=$.callbacks,d={};return{createCallback:function(c){c="_"+(b.$$counter++).toString(36);var e="angular.callbacks."+c,f=a(c);d[e]=b[c]=f;return e},wasCalled:function(a){return d[a].called},getResponse:function(a){return d[a].data},removeCallback:function(a){delete b[d[a].id];delete d[a]}}}},ah=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,zg={http:80,https:443,ftp:21},mb=M("$location"),Ag=/^\s*[\\/]{2,}/,bh={$$absUrl:"",$$html5:!1,$$replace:!1,absUrl:Lb("$$absUrl"),
url:function(a){if(w(a))return this.$$url;var b=ah.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Lb("$$protocol"),host:Lb("$$host"),port:Lb("$$port"),path:Dd("$$path",function(a){a=null!==a?a.toString():"";return"/"===a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(D(a)||Y(a))a=a.toString(),this.$$search=Tc(a);else if(E(a))a=pa(a,{}),p(a,function(b,
c){null==b&&delete a[c]}),this.$$search=a;else throw mb("isrcharg");break;default:w(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:Dd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};p([Cd,wc,vc],function(a){a.prototype=Object.create(bh);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==vc||!this.$$html5)throw mb("nostate");this.$$state=w(b)?null:b;this.$$urlUpdatedByLocation=
!0;return this}});var Ya=M("$parse"),Eg={}.constructor.prototype.valueOf,Sb=S();p("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Sb[a]=!0});var ch={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},zc=function(a){this.options=a};zc.prototype={constructor:zc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();
else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Sb[b],e=Sb[d];Sb[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=
a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?
this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===
a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=t(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw Ya("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=N(this.text.charAt(this.index));if("."===d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"===d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||
c&&this.isNumber(c)||"e"!==a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;
for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=ch[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var r=function(a,b){this.lexer=
a;this.options=b};r.Program="Program";r.ExpressionStatement="ExpressionStatement";r.AssignmentExpression="AssignmentExpression";r.ConditionalExpression="ConditionalExpression";r.LogicalExpression="LogicalExpression";r.BinaryExpression="BinaryExpression";r.UnaryExpression="UnaryExpression";r.CallExpression="CallExpression";r.MemberExpression="MemberExpression";r.Identifier="Identifier";r.Literal="Literal";r.ArrayExpression="ArrayExpression";r.Property="Property";r.ObjectExpression="ObjectExpression";
r.ThisExpression="ThisExpression";r.LocalsExpression="LocalsExpression";r.NGValueParameter="NGValueParameter";r.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:r.Program,body:a}},expressionStatement:function(){return{type:r.ExpressionStatement,
expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();if(this.expect("=")){if(!Hd(a))throw Ya("lval");a={type:r.AssignmentExpression,left:a,right:this.assignment(),operator:"="}}return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:r.ConditionalExpression,
test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:r.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:r.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.relational()};
return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},
unary:function(){var a;return(a=this.expect("+","-","!"))?{type:r.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=pa(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:r.Literal,value:this.options.literals[this.consume().text]}:
this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:r.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:r.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:r.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");
return a},filter:function(a){a=[a];for(var b={type:r.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:r.Identifier,name:a.text}},constant:function(){return{type:r.Literal,value:this.consume().value}},
arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:r.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:r.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?
(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");return{type:r.ObjectExpression,properties:a}},throwError:function(a,b){throw Ya("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw Ya("ueoe",
this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw Ya("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:r.ThisExpression},
$locals:{type:r.LocalsExpression}}};var Fd=2;Jd.prototype={compile:function(a){var b=this;this.state={nextId:0,filters:{},fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};V(a,b.$filter);var d="",c;this.stage="assign";if(c=Id(a))this.state.computing="assign",d=this.nextId(),this.recurse(c,d),this.return_(d),d="fn.assign="+this.generateFunction("assign","s,v,l");c=Gd(a.body);b.stage="inputs";p(c,function(a,c){var d="fn"+c;b.state[d]={vars:[],body:[],own:{}};b.state.computing=d;
var k=b.nextId();b.recurse(a,k);b.return_(k);b.state.inputs.push({name:d,isPure:a.isPure});a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(a);a='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+d+this.watchFns()+"return fn;";a=(new Function("$filter","getStringValue","ifDefined","plus",a))(this.$filter,Bg,Cg,Ed);this.state=this.stage=void 0;return a},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,
d=this;p(b,function(b){a.push("var "+b.name+"="+d.generateFunction(b.name,"s"));b.isPure&&a.push(b.name,".isPure="+JSON.stringify(b.isPure)+";")});b.length&&a.push("fn.inputs=["+b.map(function(a){return a.name}).join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;p(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?
"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,e,f){var g,k,h=this,l,m,n;c=c||C;if(!f&&t(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case r.Program:p(a.body,function(b,c){h.recurse(b.expression,void 0,void 0,function(a){k=a});c!==a.body.length-1?h.current().body.push(k,";"):h.return_(k)});break;case r.Literal:m=this.escape(a.value);
this.assign(b,m);c(b||m);break;case r.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){k=a});m=a.operator+"("+this.ifDefined(k,0)+")";this.assign(b,m);c(m);break;case r.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){k=a});m="+"===a.operator?this.plus(g,k):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(k,0):"("+g+")"+a.operator+"("+k+")";this.assign(b,m);c(m);break;case r.LogicalExpression:b=b||this.nextId();
h.recurse(a.left,b);h.if_("&&"===a.operator?b:h.not(b),h.lazyRecurse(a.right,b));c(b);break;case r.ConditionalExpression:b=b||this.nextId();h.recurse(a.test,b);h.if_(b,h.lazyRecurse(a.alternate,b),h.lazyRecurse(a.consequent,b));c(b);break;case r.Identifier:b=b||this.nextId();d&&(d.context="inputs"===h.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);h.if_("inputs"===h.stage||h.not(h.getHasOwnProperty("l",a.name)),function(){h.if_("inputs"===
h.stage||"s",function(){e&&1!==e&&h.if_(h.isNull(h.nonComputedMember("s",a.name)),h.lazyAssign(h.nonComputedMember("s",a.name),"{}"));h.assign(b,h.nonComputedMember("s",a.name))})},b&&h.lazyAssign(b,h.nonComputedMember("l",a.name)));c(b);break;case r.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();h.recurse(a.object,g,void 0,function(){h.if_(h.notNull(g),function(){a.computed?(k=h.nextId(),h.recurse(a.property,k),h.getStringValue(k),e&&1!==e&&h.if_(h.not(h.computedMember(g,
k)),h.lazyAssign(h.computedMember(g,k),"{}")),m=h.computedMember(g,k),h.assign(b,m),d&&(d.computed=!0,d.name=k)):(e&&1!==e&&h.if_(h.isNull(h.nonComputedMember(g,a.property.name)),h.lazyAssign(h.nonComputedMember(g,a.property.name),"{}")),m=h.nonComputedMember(g,a.property.name),h.assign(b,m),d&&(d.computed=!1,d.name=a.property.name))},function(){h.assign(b,"undefined")});c(b)},!!e);break;case r.CallExpression:b=b||this.nextId();a.filter?(k=h.filter(a.callee.name),l=[],p(a.arguments,function(a){var b=
h.nextId();h.recurse(a,b);l.push(b)}),m=k+"("+l.join(",")+")",h.assign(b,m),c(b)):(k=h.nextId(),g={},l=[],h.recurse(a.callee,k,g,function(){h.if_(h.notNull(k),function(){p(a.arguments,function(b){h.recurse(b,a.constant?void 0:h.nextId(),void 0,function(a){l.push(a)})});m=g.name?h.member(g.context,g.name,g.computed)+"("+l.join(",")+")":k+"("+l.join(",")+")";h.assign(b,m)},function(){h.assign(b,"undefined")});c(b)}));break;case r.AssignmentExpression:k=this.nextId();g={};this.recurse(a.left,void 0,
g,function(){h.if_(h.notNull(g.context),function(){h.recurse(a.right,k);m=h.member(g.context,g.name,g.computed)+a.operator+k;h.assign(b,m);c(b||m)})},1);break;case r.ArrayExpression:l=[];p(a.elements,function(b){h.recurse(b,a.constant?void 0:h.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(b||m);break;case r.ObjectExpression:l=[];n=!1;p(a.properties,function(a){a.computed&&(n=!0)});n?(b=b||this.nextId(),this.assign(b,"{}"),p(a.properties,function(a){a.computed?
(g=h.nextId(),h.recurse(a.key,g)):g=a.key.type===r.Identifier?a.key.name:""+a.key.value;k=h.nextId();h.recurse(a.value,k);h.assign(h.member(b,g,a.computed),k)})):(p(a.properties,function(b){h.recurse(b.value,a.constant?void 0:h.nextId(),void 0,function(a){l.push(h.escape(b.key.type===r.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case r.ThisExpression:this.assign(b,"s");c(b||"s");break;case r.LocalsExpression:this.assign(b,"l");c(b||"l");break;
case r.NGValueParameter:this.assign(b,"v"),c(b||"v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,
b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},isNull:function(a){return a+"==null"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,
b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(D(a))return"'"+a.replace(this.stringEscapeRegex,
this.stringEscapeFn)+"'";if(Y(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw Ya("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};Kd.prototype={compile:function(a){var b=this;V(a,b.$filter);var d,c;if(d=Id(a))c=this.recurse(d);d=Gd(a.body);var e;d&&(e=[],p(d,function(a,c){var d=
b.recurse(a);d.isPure=a.isPure;a.input=d;e.push(d);a.watchId=c}));var f=[];p(a.body,function(a){f.push(b.recurse(a.expression))});a=0===a.body.length?C:1===a.body.length?f[0]:function(a,b){var c;p(f,function(d){c=d(a,b)});return c};c&&(a.assign=function(a,b,d){return c(a,d,b)});e&&(a.inputs=e);return a},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case r.Literal:return this.value(a.value,b);case r.UnaryExpression:return e=this.recurse(a.argument),
this["unary"+a.operator](e,b);case r.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case r.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case r.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case r.Identifier:return f.identifier(a.name,b,d);case r.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||
(e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d):this.nonComputedMember(c,e,b,d);case r.CallExpression:return g=[],p(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var n=[],q=0;q<g.length;++q)n.push(g[q](a,c,d,f));a=e.apply(void 0,n,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,f){var n=e(a,c,d,f),q;if(null!=n.value){q=
[];for(var p=0;p<g.length;++p)q.push(g[p](a,c,d,f));q=n.value.apply(n.context,q)}return b?{value:q}:q};case r.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,f,g){var n=c(a,d,f,g);a=e(a,d,f,g);n.context[n.name]=a;return b?{value:a}:a};case r.ArrayExpression:return g=[],p(a.elements,function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],q=0;q<g.length;++q)f.push(g[q](a,c,d,e));return b?{value:f}:f};case r.ObjectExpression:return g=[],p(a.properties,
function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===r.Identifier?a.key.name:""+a.key.value,computed:!1,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},q=0;q<g.length;++q)g[q].computed?f[g[q].key(a,c,d,e)]=g[q].value(a,c,d,e):f[g[q].key]=g[q].value(a,c,d,e);return b?{value:f}:f};case r.ThisExpression:return function(a){return b?{value:a}:a};case r.LocalsExpression:return function(a,c){return b?{value:c}:c};case r.NGValueParameter:return function(a,
c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=t(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=t(d)?-d:-0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,e,f,g);k=Ed(k,c);return d?{value:k}:k}},"binary-":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,e,f,g);
k=(t(k)?k:0)-(t(c)?c:0);return d?{value:k}:k}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,
e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,
g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,k){e=a(e,f,g,k)?b(e,f,g,k):d(e,f,g,k);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,
name:void 0,value:a}:a}},identifier:function(a,b,d){return function(c,e,f,g){c=e&&a in e?e:c;d&&1!==d&&c&&null==c[a]&&(c[a]={});e=c?c[a]:void 0;return b?{context:c,name:a,value:e}:e}},computedMember:function(a,b,d,c){return function(e,f,g,k){var h=a(e,f,g,k),l,m;null!=h&&(l=b(e,f,g,k),l+="",c&&1!==c&&h&&!h[l]&&(h[l]={}),m=h[l]);return d?{context:h,name:l,value:m}:m}},nonComputedMember:function(a,b,d,c){return function(e,f,g,k){e=a(e,f,g,k);c&&1!==c&&e&&null==e[b]&&(e[b]={});f=null!=e?e[b]:void 0;
return d?{context:e,name:b,value:f}:f}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};xc.prototype={constructor:xc,parse:function(a){a=this.ast.ast(a);var b=this.astCompiler.compile(a);b.literal=0===a.body.length||1===a.body.length&&(a.body[0].expression.type===r.Literal||a.body[0].expression.type===r.ArrayExpression||a.body[0].expression.type===r.ObjectExpression);b.constant=a.constant;return b}};var wa=M("$sce"),oa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",
JS:"js"},Ac=/_([a-z])/g,Gg=M("$compile"),X=u.document.createElement("a"),Od=ua(u.location.href);Pd.$inject=["$document"];ed.$inject=["$provide"];var Wd=22,Vd=".",Cc="0";Qd.$inject=["$locale"];Sd.$inject=["$locale"];var Rg={yyyy:da("FullYear",4,0,!1,!0),yy:da("FullYear",2,0,!0,!0),y:da("FullYear",1,0,!1,!0),MMMM:ob("Month"),MMM:ob("Month",!0),MM:da("Month",2,1),M:da("Month",1,1),LLLL:ob("Month",!1,!0),dd:da("Date",2),d:da("Date",1),HH:da("Hours",2),H:da("Hours",1),hh:da("Hours",2,-12),h:da("Hours",
1,-12),mm:da("Minutes",2),m:da("Minutes",1),ss:da("Seconds",2),s:da("Seconds",1),sss:da("Milliseconds",3),EEEE:ob("Day"),EEE:ob("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Mb(Math[0<a?"floor":"ceil"](a/60),2)+Mb(Math.abs(a%60),2))},ww:Yd(2),w:Yd(1),G:Dc,GG:Dc,GGG:Dc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},Qg=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,
Pg=/^-?\d+$/;Rd.$inject=["$locale"];var Kg=ka(N),Lg=ka(wb);Td.$inject=["$parse"];var He=ka({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===ha.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),xb={};p(Hb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!==a){var c=Ea("ng-"+b),e=d;"checked"===a&&(e=function(a,
b,e){e.ngModel!==e[c]&&d(a,b,e)});xb[c]=function(){return{restrict:"A",priority:100,link:e}}}});p(sd,function(a,b){xb[b]=function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"===e.ngPattern.charAt(0)&&(c=e.ngPattern.match(Vg))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});p(["src","srcset","href"],function(a){var b=Ea("ng-"+a);xb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===
ha.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Ca&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});var Ob={$addControl:C,$$renameControl:function(a,b){a.$name=b},$removeControl:C,$setValidity:C,$setDirty:C,$setPristine:C,$setSubmitted:C};Nb.$inject=["$element","$attrs","$scope","$animate","$interpolate"];Nb.prototype={$rollbackViewValue:function(){p(this.$$controls,function(a){a.$rollbackViewValue()})},$commitViewValue:function(){p(this.$$controls,
function(a){a.$commitViewValue()})},$addControl:function(a){Ia(a.$name,"input");this.$$controls.push(a);a.$name&&(this[a.$name]=a);a.$$parentForm=this},$$renameControl:function(a,b){var d=a.$name;this[d]===a&&delete this[d];this[b]=a;a.$name=b},$removeControl:function(a){a.$name&&this[a.$name]===a&&delete this[a.$name];p(this.$pending,function(b,d){this.$setValidity(d,null,a)},this);p(this.$error,function(b,d){this.$setValidity(d,null,a)},this);p(this.$$success,function(b,d){this.$setValidity(d,null,
a)},this);db(this.$$controls,a);a.$$parentForm=Ob},$setDirty:function(){this.$$animate.removeClass(this.$$element,Za);this.$$animate.addClass(this.$$element,Tb);this.$dirty=!0;this.$pristine=!1;this.$$parentForm.$setDirty()},$setPristine:function(){this.$$animate.setClass(this.$$element,Za,Tb+" ng-submitted");this.$dirty=!1;this.$pristine=!0;this.$submitted=!1;p(this.$$controls,function(a){a.$setPristine()})},$setUntouched:function(){p(this.$$controls,function(a){a.$setUntouched()})},$setSubmitted:function(){this.$$animate.addClass(this.$$element,
"ng-submitted");this.$submitted=!0;this.$$parentForm.$setSubmitted()}};ae({clazz:Nb,set:function(a,b,d){var c=a[b];c?-1===c.indexOf(d)&&c.push(d):a[b]=[d]},unset:function(a,b,d){var c=a[b];c&&(db(c,d),0===c.length&&delete a[b])}});var ie=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||C}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Nb,compile:function(d,f){d.addClass(Za).addClass(pb);var g=f.name?"name":
a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in e)){var q=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",q);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",q)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var p=g?c(n.$name):C;g&&(p(a,n),e.$observe(g,function(b){n.$name!==b&&(p(a,void 0),n.$$parentForm.$$renameControl(n,b),p=c(n.$name),p(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);
p(a,void 0);P(n,Ob)})}}}}}]},Ie=ie(),Ue=ie(!0),Sg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,dh=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,eh=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,Tg=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,je=/^(\d{4,})-(\d{2})-(\d{2})$/,
ke=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Kc=/^(\d{4,})-W(\d\d)$/,le=/^(\d{4,})-(\d\d)$/,me=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,ce=S();p(["date","datetime-local","month","time","week"],function(a){ce[a]=!0});var ne={text:function(a,b,d,c,e,f){Wa(a,b,d,c,e,f);Fc(c)},date:qb("date",je,Pb(je,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":qb("datetimelocal",ke,Pb(ke,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:qb("time",me,Pb(me,["HH","mm",
"ss","sss"]),"HH:mm:ss.sss"),week:qb("week",Kc,function(a,b){if(ea(a))return a;if(D(a)){Kc.lastIndex=0;var d=Kc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,k=0,h=Xd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),k=b.getMilliseconds());return new Date(c,0,h.getDate()+e,d,f,g,k)}}return NaN},"yyyy-Www"),month:qb("month",le,Pb(le,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Gc(a,b,d,c);de(c);Wa(a,b,d,c,e,f);var g,k;if(t(d.min)||d.ngMin)c.$validators.min=function(a){return c.$isEmpty(a)||
w(g)||a>=g},d.$observe("min",function(a){g=Xa(a);c.$validate()});if(t(d.max)||d.ngMax)c.$validators.max=function(a){return c.$isEmpty(a)||w(k)||a<=k},d.$observe("max",function(a){k=Xa(a);c.$validate()});if(t(d.step)||d.ngStep){var h;c.$validators.step=function(a,b){return c.$isEmpty(b)||w(h)||ee(b,g||0,h)};d.$observe("step",function(a){h=Xa(a);c.$validate()})}},url:function(a,b,d,c,e,f){Wa(a,b,d,c,e,f);Fc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||dh.test(d)}},
email:function(a,b,d,c,e,f){Wa(a,b,d,c,e,f);Fc(c);c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||eh.test(d)}},radio:function(a,b,d,c){var e=!d.ngTrim||"false"!==Q(d.ngTrim);w(d.name)&&b.attr("name",++sb);b.on("click",function(a){var g;b[0].checked&&(g=d.value,e&&(g=Q(g)),c.$setViewValue(g,a&&a.type))});c.$render=function(){var a=d.value;e&&(a=Q(a));b[0].checked=a===c.$viewValue};d.$observe("value",c.$render)},range:function(a,b,d,c,e,f){function g(a,c){b.attr(a,
d[a]);d.$observe(a,c)}function k(a){n=Xa(a);T(c.$modelValue)||(m?(a=b.val(),n>a&&(a=n,b.val(a)),c.$setViewValue(a)):c.$validate())}function h(a){q=Xa(a);T(c.$modelValue)||(m?(a=b.val(),q<a&&(b.val(q),a=q<n?n:q),c.$setViewValue(a)):c.$validate())}function l(a){p=Xa(a);T(c.$modelValue)||(m&&c.$viewValue!==b.val()?c.$setViewValue(b.val()):c.$validate())}Gc(a,b,d,c);de(c);Wa(a,b,d,c,e,f);var m=c.$$hasNativeValidators&&"range"===b[0].type,n=m?0:void 0,q=m?100:void 0,p=m?1:void 0,r=b[0].validity;a=t(d.min);
e=t(d.max);f=t(d.step);var z=c.$render;c.$render=m&&t(r.rangeUnderflow)&&t(r.rangeOverflow)?function(){z();c.$setViewValue(b.val())}:z;a&&(c.$validators.min=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||w(n)||b>=n},g("min",k));e&&(c.$validators.max=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||w(q)||b<=q},g("max",h));f&&(c.$validators.step=m?function(){return!r.stepMismatch}:function(a,b){return c.$isEmpty(b)||w(p)||ee(b,n||0,p)},g("step",l))},checkbox:function(a,b,d,c,e,
f,g,k){var h=fe(k,a,"ngTrueValue",d.ngTrueValue,!0),l=fe(k,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return sa(a,h)});c.$parsers.push(function(a){return a?h:l})},hidden:C,button:C,submit:C,reset:C,file:C},Zc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,
f,g,k){k[0]&&(ne[N(g.type)]||ne.text)(e,f,g,k[0],b,a,d,c)}}}}],fh=/^(true|false|\d+)$/,mf=function(){function a(a,d,c){var e=t(c)?c:9===Ca?"":null;a.prop("value",e);d.$set("value",c)}return{restrict:"A",priority:100,compile:function(b,d){return fh.test(d.ngValue)?function(b,d,f){b=b.$eval(f.ngValue);a(d,f,b)}:function(b,d,f){b.$watch(f.ngValue,function(b){a(d,f,b)})}}}},Me=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,
e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=dc(a)})}}}}],Oe=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=w(a)?"":a})}}}}],Ne=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});
d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],lf=ka({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Pe=Ic("",!0),Re=Ic("Odd",0),Qe=Ic("Even",1),Se=Qa({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Te=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],dd={},gh={blur:!0,focus:!0};
p("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var b=Ea("ng-"+a);dd[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=d(f[b]);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};gh[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var We=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,
terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var k,h,l;d.$watch(e.ngIf,function(d){d?h||g(function(d,f){h=f;d[d.length++]=b.$$createComment("end ngIf",e.ngIf);k={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),h&&(h.$destroy(),h=null),k&&(l=vb(k.clone),a.leave(l).done(function(a){!1!==a&&(l=null)}),k=null))})}}}],Xe=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:$.noop,compile:function(c,
e){var f=e.ngInclude||e.src,g=e.onload||"",k=e.autoscroll;return function(c,e,m,n,q){var p=0,r,z,v,s=function(){z&&(z.remove(),z=null);r&&(r.$destroy(),r=null);v&&(d.leave(v).done(function(a){!1!==a&&(z=null)}),z=v,v=null)};c.$watch(f,function(f){var m=function(a){!1===a||!t(k)||k&&!c.$eval(k)||b()},y=++p;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&y===p){var b=c.$new();n.template=a;a=q(b,function(a){s();d.enter(a,null,e).done(m)});r=b;v=a;r.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){c.$$destroyed||
y!==p||(s(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(s(),n.template=null)})}}}}],of=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,e){ha.call(d[0]).match(/SVG/)?(d.empty(),a(fd(e.template,u.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],Ye=Qa({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),kf=function(){return{restrict:"A",
priority:100,require:"ngModel",link:function(a,b,d,c){var e=d.ngList||", ",f="false"!==d.ngTrim,g=f?Q(e):e;c.$parsers.push(function(a){if(!w(a)){var b=[];a&&p(a.split(g),function(a){a&&b.push(f?Q(a):a)});return b}});c.$formatters.push(function(a){if(I(a))return a.join(e)});c.$isEmpty=function(a){return!a||!a.length}}}},pb="ng-valid",$d="ng-invalid",Za="ng-pristine",Tb="ng-dirty",rb=M("ngModel");Qb.$inject="$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");
Qb.prototype={$$initGetterSetters:function(){if(this.$options.getOption("getterSetter")){var a=this.$$parse(this.$$attr.ngModel+"()"),b=this.$$parse(this.$$attr.ngModel+"($$$p)");this.$$ngModelGet=function(b){var c=this.$$parsedNgModel(b);A(c)&&(c=a(b));return c};this.$$ngModelSet=function(a,c){A(this.$$parsedNgModel(a))?b(a,{$$$p:c}):this.$$parsedNgModelAssign(a,c)}}else if(!this.$$parsedNgModel.assign)throw rb("nonassign",this.$$attr.ngModel,Aa(this.$$element));},$render:C,$isEmpty:function(a){return w(a)||
""===a||null===a||a!==a},$$updateEmptyClasses:function(a){this.$isEmpty(a)?(this.$$animate.removeClass(this.$$element,"ng-not-empty"),this.$$animate.addClass(this.$$element,"ng-empty")):(this.$$animate.removeClass(this.$$element,"ng-empty"),this.$$animate.addClass(this.$$element,"ng-not-empty"))},$setPristine:function(){this.$dirty=!1;this.$pristine=!0;this.$$animate.removeClass(this.$$element,Tb);this.$$animate.addClass(this.$$element,Za)},$setDirty:function(){this.$dirty=!0;this.$pristine=!1;this.$$animate.removeClass(this.$$element,
Za);this.$$animate.addClass(this.$$element,Tb);this.$$parentForm.$setDirty()},$setUntouched:function(){this.$touched=!1;this.$untouched=!0;this.$$animate.setClass(this.$$element,"ng-untouched","ng-touched")},$setTouched:function(){this.$touched=!0;this.$untouched=!1;this.$$animate.setClass(this.$$element,"ng-touched","ng-untouched")},$rollbackViewValue:function(){this.$$timeout.cancel(this.$$pendingDebounce);this.$viewValue=this.$$lastCommittedViewValue;this.$render()},$validate:function(){if(!T(this.$modelValue)){var a=
this.$$lastCommittedViewValue,b=this.$$rawModelValue,d=this.$valid,c=this.$modelValue,e=this.$options.getOption("allowInvalid"),f=this;this.$$runValidators(b,a,function(a){e||d===a||(f.$modelValue=a?b:void 0,f.$modelValue!==c&&f.$$writeModelToScope())})}},$$runValidators:function(a,b,d){function c(){var c=!0;p(h.$validators,function(d,e){var g=Boolean(d(a,b));c=c&&g;f(e,g)});return c?!0:(p(h.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;p(h.$asyncValidators,function(e,
g){var h=e(a,b);if(!h||!A(h.then))throw rb("nopromise",h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?h.$$q.all(c).then(function(){g(d)},C):g(!0)}function f(a,b){k===h.$$currentValidationRunId&&h.$setValidity(a,b)}function g(a){k===h.$$currentValidationRunId&&d(a)}this.$$currentValidationRunId++;var k=this.$$currentValidationRunId,h=this;(function(){var a=h.$$parserName||"parse";if(w(h.$$parserValid))f(a,null);else return h.$$parserValid||(p(h.$validators,function(a,
b){f(b,null)}),p(h.$asyncValidators,function(a,b){f(b,null)})),f(a,h.$$parserValid),h.$$parserValid;return!0})()?c()?e():g(!1):g(!1)},$commitViewValue:function(){var a=this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce);if(this.$$lastCommittedViewValue!==a||""===a&&this.$$hasNativeValidators)this.$$updateEmptyClasses(a),this.$$lastCommittedViewValue=a,this.$pristine&&this.$setDirty(),this.$$parseAndValidate()},$$parseAndValidate:function(){var a=this.$$lastCommittedViewValue,b=this;if(this.$$parserValid=
w(a)?void 0:!0)for(var d=0;d<this.$parsers.length;d++)if(a=this.$parsers[d](a),w(a)){this.$$parserValid=!1;break}T(this.$modelValue)&&(this.$modelValue=this.$$ngModelGet(this.$$scope));var c=this.$modelValue,e=this.$options.getOption("allowInvalid");this.$$rawModelValue=a;e&&(this.$modelValue=a,b.$modelValue!==c&&b.$$writeModelToScope());this.$$runValidators(a,this.$$lastCommittedViewValue,function(d){e||(b.$modelValue=d?a:void 0,b.$modelValue!==c&&b.$$writeModelToScope())})},$$writeModelToScope:function(){this.$$ngModelSet(this.$$scope,
this.$modelValue);p(this.$viewChangeListeners,function(a){try{a()}catch(b){this.$$exceptionHandler(b)}},this)},$setViewValue:function(a,b){this.$viewValue=a;this.$options.getOption("updateOnDefault")&&this.$$debounceViewValueCommit(b)},$$debounceViewValueCommit:function(a){var b=this.$options.getOption("debounce");Y(b[a])?b=b[a]:Y(b["default"])&&(b=b["default"]);this.$$timeout.cancel(this.$$pendingDebounce);var d=this;0<b?this.$$pendingDebounce=this.$$timeout(function(){d.$commitViewValue()},b):this.$$scope.$root.$$phase?
this.$commitViewValue():this.$$scope.$apply(function(){d.$commitViewValue()})},$overrideModelOptions:function(a){this.$options=this.$options.createChild(a)}};ae({clazz:Qb,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]}});var jf=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Qb,priority:1,compile:function(b){b.addClass(Za).addClass("ng-untouched").addClass(pb);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;if(f=f[2])g.$options=
f.$options;g.$$initGetterSetters();b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){function g(){k.$setTouched()}var k=f[0];if(k.$options.getOption("updateOn"))c.on(k.$options.getOption("updateOn"),function(a){k.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){k.$touched||(a.$$phase?b.$evalAsync(g):b.$apply(g))})}}}}}],Rb,hh=/(\s+|^)default(\s+|$)/;Jc.prototype=
{getOption:function(a){return this.$$options[a]},createChild:function(a){var b=!1;a=P({},a);p(a,function(d,c){"$inherit"===d?"*"===c?b=!0:(a[c]=this.$$options[c],"updateOn"===c&&(a.updateOnDefault=this.$$options.updateOnDefault)):"updateOn"===c&&(a.updateOnDefault=!1,a[c]=Q(d.replace(hh,function(){a.updateOnDefault=!0;return" "})))},this);b&&(delete a["*"],ge(a,this.$$options));ge(a,Rb.$$options);return new Jc(a)}};Rb=new Jc({updateOn:"",updateOnDefault:!0,debounce:0,getterSetter:!1,allowInvalid:!1,
timezone:null});var nf=function(){function a(a,d){this.$$attrs=a;this.$$scope=d}a.$inject=["$attrs","$scope"];a.prototype={$onInit:function(){var a=this.parentCtrl?this.parentCtrl.$options:Rb,d=this.$$scope.$eval(this.$$attrs.ngModelOptions);this.$options=a.createChild(d)}};return{restrict:"A",priority:10,require:{parentCtrl:"?^^ngModelOptions"},bindToController:!0,controller:a}},Ze=Qa({terminal:!0,priority:1E3}),ih=M("ngOptions"),jh=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
gf=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!p&&xa(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var n=a.match(jh);if(!n)throw ih("iexp",a,Aa(b));var q=n[5]||n[7],p=n[6];a=/ as /.test(n[0])&&n[1];var r=n[9];b=d(n[2]?n[1]:q);var z=a&&d(a)||b,t=r&&d(r),s=r?function(a,b){return t(c,b)}:function(a){return Pa(a)},
w=function(a,b){return s(a,A(a,b))},u=d(n[2]||n[1]),y=d(n[3]||""),J=d(n[4]||""),H=d(n[8]),B={},A=p?function(a,b){B[p]=b;B[q]=a;return B}:function(a){B[q]=a;return B};return{trackBy:r,getTrackByValue:w,getWatchables:d(H,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var k=a===d?g:d[g],l=a[k],k=A(l,k),l=s(l,k);b.push(l);if(n[2]||n[1])l=u(c,k),b.push(l);n[4]&&(k=J(c,k),b.push(k))}return b}),getOptions:function(){for(var a=[],b={},d=H(c)||[],g=f(d),k=g.length,n=0;n<k;n++){var q=d===
g?n:g[n],p=A(d[q],q),t=z(c,p),q=s(t,p),v=u(c,p),G=y(c,p),p=J(c,p),t=new e(q,t,v,G,p);a.push(t);b[q]=t}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[w(a)]},getViewValueFromOption:function(a){return r?pa(a.viewValue):a.viewValue}}}}}var e=u.document.createElement("option"),f=u.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=C},post:function(d,k,h,l){function m(a){var b=(a=s.getOptionFromViewValue(a))&&
a.element;b&&!b.selected&&(b.selected=!0);return a}function n(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);b.value=a.selectValue}var q=l[0],r=l[1],w=h.multiple;l=0;for(var z=k.children(),v=z.length;l<v;l++)if(""===z[l].value){q.hasEmptyOption=!0;q.emptyOption=z.eq(l);break}k.empty();l=!!q.emptyOption;B(e.cloneNode(!1)).val("?");var s,u=c(h.ngOptions,k,d),A=b[0].createDocumentFragment();q.generateUnknownOptionValue=function(a){return"?"};w?(q.writeValue=
function(a){if(s){var b=a&&a.map(m)||[];s.items.forEach(function(a){a.element.selected&&-1===Array.prototype.indexOf.call(b,a)&&(a.element.selected=!1)})}},q.readValue=function(){var a=k.val()||[],b=[];p(a,function(a){(a=s.selectValueMap[a])&&!a.disabled&&b.push(s.getViewValueFromOption(a))});return b},u.trackBy&&d.$watchCollection(function(){if(I(r.$viewValue))return r.$viewValue.map(function(a){return u.getTrackByValue(a)})},function(){r.$render()})):(q.writeValue=function(a){if(s){var b=k[0].options[k[0].selectedIndex],
c=s.getOptionFromViewValue(a);b&&b.removeAttribute("selected");c?(k[0].value!==c.selectValue&&(q.removeUnknownOption(),k[0].value=c.selectValue,c.element.selected=!0),c.element.setAttribute("selected","selected")):q.selectUnknownOrEmptyOption(a)}},q.readValue=function(){var a=s.selectValueMap[k.val()];return a&&!a.disabled?(q.unselectEmptyOption(),q.removeUnknownOption(),s.getViewValueFromOption(a)):null},u.trackBy&&d.$watch(function(){return u.getTrackByValue(r.$viewValue)},function(){r.$render()}));
l&&(a(q.emptyOption)(d),k.prepend(q.emptyOption),8===q.emptyOption[0].nodeType?(q.hasEmptyOption=!1,q.registerOption=function(a,b){""===b.val()&&(q.hasEmptyOption=!0,q.emptyOption=b,q.emptyOption.removeClass("ng-scope"),r.$render(),b.on("$destroy",function(){var a=q.$isEmptyOptionSelected();q.hasEmptyOption=!1;q.emptyOption=void 0;a&&r.$render()}))}):q.emptyOption.removeClass("ng-scope"));d.$watchCollection(u.getWatchables,function(){var a=s&&q.readValue();if(s)for(var b=s.items.length-1;0<=b;b--){var c=
s.items[b];t(c.group)?Gb(c.element.parentNode):Gb(c.element)}s=u.getOptions();var d={};s.items.forEach(function(a){var b;if(t(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),A.appendChild(b),b.label=null===a.group?"null":a.group,d[a.group]=b);var c=e.cloneNode(!1);b.appendChild(c);n(a,c)}else b=e.cloneNode(!1),A.appendChild(b),n(a,b)});k[0].appendChild(A);r.$render();r.$isEmpty(a)||(b=q.readValue(),(u.trackBy||w?sa(a,b):a===b)||(r.$setViewValue(b),r.$render()))})}}}}],$e=["$locale","$interpolate","$log",
function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,k){function h(a){g.text(a||"")}var l=k.count,m=k.$attr.when&&g.attr(k.$attr.when),n=k.offset||0,q=f.$eval(m)||{},r={},t=b.startSymbol(),z=b.endSymbol(),v=t+l+"-"+n+z,s=$.noop,u;p(k,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+N(c[2]),q[c]=g.attr(k.$attr[b]))});p(q,function(a,d){r[d]=b(a.replace(c,v))});f.$watch(l,function(b){var c=parseFloat(b),e=T(c);e||c in q||(c=a.pluralCat(c-n));c===u||e&&T(u)||(s(),e=r[c],w(e)?(null!=
b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),s=C,h()):s=f.$watch(e,h),u=c)})}}}],af=["$parse","$animate","$compile",function(a,b,d){var c=M("ngRepeat"),e=function(a,b,c,d,e,m,n){a[c]=d;e&&(a[e]=m);a.$index=b;a.$first=0===b;a.$last=b===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var k=g.ngRepeat,h=d.$$createComment("end ngRepeat",k),l=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
if(!l)throw c("iexp",k);var m=l[1],n=l[2],q=l[3],r=l[4],l=m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var t=l[3]||l[1],z=l[2];if(q&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q)))throw c("badident",q);var v,s,u,w,y={$id:Pa};r?v=a(r):(u=function(a,b){return Pa(b)},w=function(a){return a});return function(a,d,f,g,l){v&&(s=function(b,c,d){z&&(y[z]=b);y[t]=c;y.$index=
d;return v(a,y)});var m=S();a.$watchCollection(n,function(f){var g,n,r=d[0],v,y=S(),B,A,G,C,E,D,I;q&&(a[q]=f);if(xa(f))E=f,n=s||u;else for(I in n=s||w,E=[],f)ra.call(f,I)&&"$"!==I.charAt(0)&&E.push(I);B=E.length;I=Array(B);for(g=0;g<B;g++)if(A=f===E?g:E[g],G=f[A],C=n(A,G,g),m[C])D=m[C],delete m[C],y[C]=D,I[g]=D;else{if(y[C])throw p(I,function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",k,C,G);I[g]={id:C,scope:void 0,clone:void 0};y[C]=!0}for(v in m){D=m[v];C=vb(D.clone);b.leave(C);if(C[0].parentNode)for(g=
0,n=C.length;g<n;g++)C[g].$$NG_REMOVED=!0;D.scope.$destroy()}for(g=0;g<B;g++)if(A=f===E?g:E[g],G=f[A],D=I[g],D.scope){v=r;do v=v.nextSibling;while(v&&v.$$NG_REMOVED);D.clone[0]!==v&&b.move(vb(D.clone),null,r);r=D.clone[D.clone.length-1];e(D.scope,g,t,G,z,A,B)}else l(function(a,c){D.scope=c;var d=h.cloneNode(!1);a[a.length++]=d;b.enter(a,null,r);r=d;D.clone=a;y[D.id]=D;e(D.scope,g,t,G,z,A,B)});m=y})}}}}],bf=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,
function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ve=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],cf=Qa(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&p(d,function(a,c){b.css(c,"")});a&&b.css(a)},!0)}),df=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases=
{}}],link:function(d,c,e,f){var g=[],k=[],h=[],l=[],m=function(a,b){return function(c){!1!==c&&a.splice(b,1)}};d.$watch(e.ngSwitch||e.on,function(c){for(var d,e;h.length;)a.cancel(h.pop());d=0;for(e=l.length;d<e;++d){var r=vb(k[d].clone);l[d].$destroy();(h[d]=a.leave(r)).done(m(h,d))}k.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&p(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");k.push({clone:d});a.enter(d,f.parent(),
f)})})})}}}],ef=Qa({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){a=d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a,b,c){return c[b-1]!==a});p(a,function(a){c.cases["!"+a]=c.cases["!"+a]||[];c.cases["!"+a].push({transclude:e,element:b})})}}),ff=Qa({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),kh=M("ngTransclude"),
hf=["$compile",function(a){return{restrict:"EAC",terminal:!0,compile:function(b){var d=a(b.contents());b.empty();return function(a,b,f,g,k){function h(){d(a,function(a){b.append(a)})}if(!k)throw kh("orphan",Aa(b));f.ngTransclude===f.$attr.ngTransclude&&(f.ngTransclude="");f=f.ngTransclude||f.ngTranscludeSlot;k(function(a,c){var d;if(d=a.length)a:{d=0;for(var f=a.length;d<f;d++){var g=a[d];if(g.nodeType!==Oa||g.nodeValue.trim()){d=!0;break a}}d=void 0}d?b.append(a):(h(),c.$destroy())},null,f);f&&!k.isSlotFilled(f)&&
h()}}}}],Je=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"===d.type&&a.put(d.id,b[0].text)}}}],lh={$setViewValue:C,$render:C},mh=["$element","$scope",function(a,b){function d(){g||(g=!0,b.$$postDigest(function(){g=!1;e.ngModelCtrl.$render()}))}function c(a){k||(k=!0,b.$$postDigest(function(){b.$$destroyed||(k=!1,e.ngModelCtrl.$setViewValue(e.readValue()),a&&e.ngModelCtrl.$render())}))}var e=this,f=new Ib;e.selectValueMap={};e.ngModelCtrl=lh;
e.multiple=!1;e.unknownOption=B(u.document.createElement("option"));e.hasEmptyOption=!1;e.emptyOption=void 0;e.renderUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);a.prepend(e.unknownOption);Ga(e.unknownOption,!0);a.val(b)};e.updateUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);Ga(e.unknownOption,!0);a.val(b)};e.generateUnknownOptionValue=function(a){return"? "+Pa(a)+" ?"};e.removeUnknownOption=function(){e.unknownOption.parent()&&
e.unknownOption.remove()};e.selectEmptyOption=function(){e.emptyOption&&(a.val(""),Ga(e.emptyOption,!0))};e.unselectEmptyOption=function(){e.hasEmptyOption&&Ga(e.emptyOption,!1)};b.$on("$destroy",function(){e.renderUnknownOption=C});e.readValue=function(){var b=a.val(),b=b in e.selectValueMap?e.selectValueMap[b]:b;return e.hasOption(b)?b:null};e.writeValue=function(b){var c=a[0].options[a[0].selectedIndex];c&&Ga(B(c),!1);e.hasOption(b)?(e.removeUnknownOption(),c=Pa(b),a.val(c in e.selectValueMap?
c:b),Ga(B(a[0].options[a[0].selectedIndex]),!0)):e.selectUnknownOrEmptyOption(b)};e.addOption=function(a,b){if(8!==b[0].nodeType){Ia(a,'"option value"');""===a&&(e.hasEmptyOption=!0,e.emptyOption=b);var c=f.get(a)||0;f.set(a,c+1);d()}};e.removeOption=function(a){var b=f.get(a);b&&(1===b?(f.delete(a),""===a&&(e.hasEmptyOption=!1,e.emptyOption=void 0)):f.set(a,b-1))};e.hasOption=function(a){return!!f.get(a)};e.$hasEmptyOption=function(){return e.hasEmptyOption};e.$isUnknownOptionSelected=function(){return a[0].options[0]===
e.unknownOption[0]};e.$isEmptyOptionSelected=function(){return e.hasEmptyOption&&a[0].options[a[0].selectedIndex]===e.emptyOption[0]};e.selectUnknownOrEmptyOption=function(a){null==a&&e.emptyOption?(e.removeUnknownOption(),e.selectEmptyOption()):e.unknownOption.parent().length?e.updateUnknownOption(a):e.renderUnknownOption(a)};var g=!1,k=!1;e.registerOption=function(a,b,f,g,k){if(f.$attr.ngValue){var p,r=NaN;f.$observe("value",function(a){var d,f=b.prop("selected");t(r)&&(e.removeOption(p),delete e.selectValueMap[r],
d=!0);r=Pa(a);p=a;e.selectValueMap[r]=a;e.addOption(a,b);b.attr("value",r);d&&f&&c()})}else g?f.$observe("value",function(a){e.readValue();var d,f=b.prop("selected");t(p)&&(e.removeOption(p),d=!0);p=a;e.addOption(a,b);d&&f&&c()}):k?a.$watch(k,function(a,d){f.$set("value",a);var g=b.prop("selected");d!==a&&e.removeOption(d);e.addOption(a,b);d&&g&&c()}):e.addOption(f.value,b);f.$observe("disabled",function(a){if("true"===a||a&&b.prop("selected"))e.multiple?c(!0):(e.ngModelCtrl.$setViewValue(null),e.ngModelCtrl.$render())});
b.on("$destroy",function(){var a=e.readValue(),b=f.value;e.removeOption(b);d();(e.multiple&&a&&-1!==a.indexOf(b)||a===b)&&c(!0)})}}],Ke=function(){return{restrict:"E",require:["select","?ngModel"],controller:mh,priority:1,link:{pre:function(a,b,d,c){var e=c[0],f=c[1];if(f){if(e.ngModelCtrl=f,b.on("change",function(){e.removeUnknownOption();a.$apply(function(){f.$setViewValue(e.readValue())})}),d.multiple){e.multiple=!0;e.readValue=function(){var a=[];p(b.find("option"),function(b){b.selected&&!b.disabled&&
(b=b.value,a.push(b in e.selectValueMap?e.selectValueMap[b]:b))});return a};e.writeValue=function(a){p(b.find("option"),function(b){var c=!!a&&(-1!==Array.prototype.indexOf.call(a,b.value)||-1!==Array.prototype.indexOf.call(a,e.selectValueMap[b.value]));c!==b.selected&&Ga(B(b),c)})};var g,k=NaN;a.$watch(function(){k!==f.$viewValue||sa(g,f.$viewValue)||(g=ja(f.$viewValue),f.$render());k=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}else e.registerOption=C},post:function(a,b,d,c){var e=
c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},Le=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){var c,e;t(d.ngValue)||(t(d.value)?c=a(d.value,!0):(e=a(b.text(),!0))||d.$set("value",b.text()));return function(a,b,d){var h=b.parent();(h=h.data("$selectController")||h.parent().data("$selectController"))&&h.registerOption(a,b,d,c,e)}}}}],ad=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=
function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},$c=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){D(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw M("ngPattern")("noregexp",f,a,Aa(b));e=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||w(e)||e.test(b)}}}}},cd=function(){return{restrict:"A",require:"?ngModel",
link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=Z(a);e=T(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||b.length<=e}}}}},bd=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=Z(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};u.angular.bootstrap?u.console&&console.log("WARNING: Tried to load angular more than once."):
(Be(),Ee($),$.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,
minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),B(function(){we(u.document,Uc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/**
 * State-based routing for AngularJS 1.x
 * NOTICE: This monolithic bundle also bundles the @uirouter/core code.
 *         This causes it to be incompatible with plugins that depend on @uirouter/core.
 *         We recommend switching to the ui-router-core.js and ui-router-angularjs.js bundles instead.
 *         For more information, see https://ui-router.github.io/blog/uirouter-for-angularjs-umd-bundles
 * @version v1.0.10
 * @link https://ui-router.github.io
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("angular")):"function"==typeof define&&define.amd?define(["exports","angular"],e):e(t["@uirouter/angularjs"]={},t.angular)}(this,function(t,e){"use strict";function r(t){function e(r){return r.length>=n?t.apply(null,r):function(){return e(r.concat([].slice.apply(arguments)))}}var r=[].slice.apply(arguments,[1]),n=t.length;return e(r)}function n(){var t=arguments,e=t.length-1;return function(){for(var r=e,n=t[e].apply(this,arguments);r--;)n=t[r].call(this,n);return n}}function i(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return n.apply(null,[].slice.call(arguments).reverse())}function o(t,e){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return t.apply(null,r)&&e.apply(null,r)}}function a(t,e){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return t.apply(null,r)||e.apply(null,r)}}function u(t,e){return function(r){return r[t].apply(r,e)}}function s(t){return function(e){for(var r=0;r<t.length;r++)if(t[r][0](e))return t[r][1](e)}}function c(t){if(te(t)&&t.length){var e=t.slice(0,-1),r=t.slice(-1);return!(e.filter(Ht(Zt)).length||r.filter(Ht(Kt)).length)}return Kt(t)}function f(t){return t}function l(){}function h(t,e,r,n,i){void 0===i&&(i=!1);var o=function(e){return t()[e].bind(r())},a=function(t){return function(){return e[t]=o(t),e[t].apply(null,arguments)}};return(n=n||Object.keys(t())).reduce(function(t,e){return t[e]=i?a(e):o(e),t},e)}function p(t,e){return-1!==t.indexOf(e)}function d(t,e){var r=t.indexOf(e);return r>=0&&t.splice(r,1),t}function v(t,e){return t.push(e),e}function m(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=e.concat({}).reverse(),i=he.apply(null,n);return he({},i,g(t||{},Object.keys(i)))}function y(t,e){var r=[];for(var n in t.path){if(t.path[n]!==e.path[n])break;r.push(t.path[n])}return r}function g(t,e){var r={};for(var n in t)-1!==e.indexOf(n)&&(r[n]=t[n]);return r}function _(t,e){return Object.keys(t).filter(Ht(ve(e))).reduce(function(e,r){return e[r]=t[r],e},{})}function w(t,e){return b(t,jt(e))}function $(t,e){var r=te(t),n=r?[]:{},i=r?function(t){return n.push(t)}:function(t,e){return n[e]=t};return le(t,function(t,r){e(t,r)&&i(t,r)}),n}function S(t,e){var r;return le(t,function(t,n){r||e(t,n)&&(r=t)}),r}function b(t,e){var r=te(t)?[]:{};return le(t,function(t,n){return r[n]=e(t,n)}),r}function R(t,e){return t.push(e),t}function E(t,e){return void 0===e&&(e="assert failure"),function(r){var n=t(r);if(!n)throw new Error(Kt(e)?e(r):e);return n}}function T(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(0===t.length)return[];var r,n=t.reduce(function(t,e){return Math.min(e.length,t)},9007199254740991),i=[];for(r=0;r<n;r++)switch(t.length){case 1:i.push([t[0][r]]);break;case 2:i.push([t[0][r],t[1][r]]);break;case 3:i.push([t[0][r],t[1][r],t[2][r]]);break;case 4:i.push([t[0][r],t[1][r],t[2][r],t[3][r]]);break;default:i.push(t.map(function(t){return t[r]}))}return i}function C(t,e){var r,n;if(te(e)&&(r=e[0],n=e[1]),!Zt(r))throw new Error("invalid parameters to applyPairs");return t[r]=n,t}function P(t){return t.length&&t[t.length-1]||void 0}function k(t,e){return e&&Object.keys(e).forEach(function(t){return delete e[t]}),e||(e={}),he(e,t)}function O(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];if(r)for(var n=Object.keys(r),i=0;i<n.length;i++)t[n[i]]=r[n[i]]}return t}function x(t,e){if(t===e)return!0;if(null===t||null===e)return!1;if(t!==t&&e!==e)return!0;var r=typeof t;if(r!==typeof e||"object"!==r)return!1;var n=[t,e];if(qt(te)(n))return I(t,e);if(qt(ee)(n))return t.getTime()===e.getTime();if(qt(re)(n))return t.toString()===e.toString();if(qt(Kt)(n))return!0;if([Kt,te,ee,re].map(Dt).reduce(function(t,e){return t||!!e(n)},!1))return!1;var i,o={};for(i in t){if(!x(t[i],e[i]))return!1;o[i]=!0}for(i in e)if(!o[i])return!1;return!0}function I(t,e){return t.length===e.length&&T(t,e).reduce(function(t,e){return t&&x(e[0],e[1])},!0)}function j(t){if(!t)return"ui-view (defunct)";var e=t.creationContext?t.creationContext.name||"(root)":"(none)";return"[ui-view#"+t.id+" "+t.$type+":"+t.fqn+" ("+t.name+"@"+e+")]"}function V(e){return Yt(e)?t.Category[e]:t.Category[t.Category[e]]}function A(t,e){var r=Zt(e)?[e]:e;return!!(Kt(r)?r:function(t){for(var e=r,n=0;n<e.length;n++){var i=new Lt(e[n]);if(i&&i.matches(t.name)||!i&&e[n]===t.name)return!0}return!1})(t)}function H(t,e,r){function n(t,n,a){void 0===a&&(a={});var u=new Je(e,r,n,t,o,a);return i.push(u),u.deregister.bind(u)}var i=(t._registeredHooks=t._registeredHooks||{})[r.name]=[],o=me(i);return t[r.name]=n,n}function q(t){return void 0===t&&(t=!1),function(e,r){var n=t?-1:1,i=(e.node.state.path.length-r.node.state.path.length)*n;return 0!==i?i:r.hook.priority-e.hook.priority}}function D(t,e){function r(t){return te(t)?t:zt(t)?[t]:[]}function n(t){switch(t.length){case 0:return;case 1:return"auto"===e?t[0]:t;default:return t}}function i(t,e){return function(i){if(te(i)&&0===i.length)return i;var o=b(r(i),t);return!0===e?0===$(o,function(t){return!t}).length:n(o)}}function o(t){return function(e,n){var i=r(e),o=r(n);if(i.length!==o.length)return!1;for(var a=0;a<i.length;a++)if(!t(i[a],o[a]))return!1;return!0}}var a=this;["encode","decode","equals","$normalize"].forEach(function(e){var r=t[e].bind(t),n="equals"===e?o:i;a[e]=n(r)}),he(this,{dynamic:t.dynamic,name:t.name,pattern:t.pattern,inherit:t.inherit,is:i(t.is.bind(t),!0),$arrayMode:e})}function F(t){function e(){return t.value}return t=Ze(t)&&{value:t}||t,e.__cacheable=!0,he(t,{$$fn:c(t.value)?t.value:e})}function N(e,r,n,i,o){if(e.type&&r&&"string"!==r.name)throw new Error("Param '"+i+"' has two type configurations.");if(e.type&&r&&"string"===r.name&&o.type(e.type))return o.type(e.type);if(r)return r;if(!e.type){var a=n===t.DefType.CONFIG?"any":n===t.DefType.PATH?"path":n===t.DefType.SEARCH?"query":"string";return o.type(a)}return e.type instanceof Ke?e.type:o.type(e.type)}function U(t,e,r){var n=t.squash;if(!e||!1===n)return!1;if(!zt(n)||null==n)return r;if(!0===n||Zt(n))return n;throw new Error("Invalid squash policy: '"+n+"'. Valid policies: false, true, or arbitrary string")}function L(t,e,r,n){var i,o,a=[{from:"",to:r||e?void 0:""},{from:null,to:r||e?void 0:""}];return i=te(t.replace)?t.replace:[],Zt(n)&&i.push({from:n,to:void 0}),o=b(i,jt("from")),$(a,function(t){return-1===o.indexOf(t.from)}).concat(i)}function M(t,e){return e.length<=t?e:e.substr(0,t-3)+"..."}function B(t,e){for(;e.length<t;)e+=" ";return e}function G(t){return t.replace(/^([A-Z])/,function(t){return t.toLowerCase()}).replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function W(t){var e=z(t),r=e.match(/^(function [^ ]+\([^)]*\))/),n=r?r[1]:e,i=t.name||"";return i&&n.match(/function \(/)?"function "+i+n.substr(9):n}function z(t){var e=te(t)?t.slice(-1)[0]:t;return e&&e.toString()||"undefined"}function J(t){function e(t){if(Xt(t)){if(-1!==r.indexOf(t))return"[circular ref]";r.push(t)}return dr(t)}var r=[];return JSON.stringify(t,function(t,r){return e(r)}).replace(/\\"/g,'"')}function Q(t){var e=new RegExp("("+t+")","g");return function(t){return t.split(e).filter(f)}}function K(t,e){return Zt(P(t))&&Zt(e)?t.slice(0,-1).concat(P(t)+e):R(t,e)}function Y(t){return t.name}function Z(t){return t.self.$$state=function(){return t},t.self}function X(t){return t.parent&&t.parent.data&&(t.data=t.self.data=de(t.parent.data,t.data)),t.data}function tt(t){return t.parent?t.parent.path.concat(t):[t]}function et(t){var e=t.parent?he({},t.parent.includes):{};return e[t.name]=!0,e}function rt(t){var e=function(t){var e=ae.$injector;return t.$inject||e&&e.annotate(t,e.strictDi)||"deferred"},r=function(t){return t.provide||t.token},n=s([[jt("resolveFn"),function(t){return new nr(r(t),t.resolveFn,t.deps,t.policy)}],[jt("useFactory"),function(t){return new nr(r(t),t.useFactory,t.deps||t.dependencies,t.policy)}],[jt("useClass"),function(t){return new nr(r(t),function(){return new t.useClass},[],t.policy)}],[jt("useValue"),function(t){return new nr(r(t),function(){return t.useValue},[],t.policy,t.useValue)}],[jt("useExisting"),function(t){return new nr(r(t),f,[t.useExisting],t.policy)}]]),o=s([[i(jt("val"),Zt),function(t){return new nr(t.token,f,[t.val],t.policy)}],[i(jt("val"),te),function(t){return new nr(t.token,P(t.val),t.val.slice(0,-1),t.policy)}],[i(jt("val"),Kt),function(t){return new nr(t.token,t.val,e(t.val),t.policy)}]]),a=s([[Ft(nr),function(t){return t}],[function(t){return!(!t.token||!t.resolveFn)},n],[function(t){return!(!t.provide&&!t.token||!(t.useValue||t.useFactory||t.useExisting||t.useClass))},n],[function(t){return!!(t&&t.val&&(Zt(t.val)||te(t.val)||Kt(t.val)))},o],[Ut(!0),function(t){throw new Error("Invalid resolve value: "+J(t))}]]),u=t.resolve;return(te(u)?u:function(t,e){return Object.keys(t||{}).map(function(r){return{token:r,val:t[r],deps:void 0,policy:e[r]}})}(u,t.resolvePolicy||{})).map(a)}function nt(t,e){var r=["",""],n=t.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!e)return n;switch(e.squash){case!1:r=["(",")"+(e.isOptional?"?":"")];break;case!0:n=n.replace(/\/$/,""),r=["(?:/(",")|/)?"];break;default:r=["("+e.squash+"|",")?"]}return n+r[0]+e.type.pattern.source+r[1]}function it(t,e,r,n){return"/"===n?t:e?yr(n)+t:r?n.slice(1)+t:t}function ot(t){if(!(Kt(t)||Zt(t)||Ft(Ge)(t)||Ge.isDef(t)))throw new Error("'handler' must be a string, function, TargetState, or have a state: 'newtarget' property");return Kt(t)?t:Ut(t)}function at(t){t.addResolvable({token:tn,deps:[],resolveFn:function(){return t.router},data:t.router},""),t.addResolvable({token:hr,deps:[],resolveFn:function(){return t},data:t},""),t.addResolvable({token:"$transition$",deps:[],resolveFn:function(){return t},data:t},""),t.addResolvable({token:"$stateParams",deps:[],resolveFn:function(){return t.params()},data:t.params()},""),t.entering().forEach(function(e){t.addResolvable({token:"$state$",deps:[],resolveFn:function(){return e},data:e},e)})}function ut(t){return function(e,r){return(0,r.$$state()[t])(e,r)}}function st(t,e){var r=e.$$state().lazyLoad,n=r._promise;if(!n){n=r._promise=ae.$q.when(r(t,e)).then(function(e){return e&&Array.isArray(e.states)&&e.states.forEach(function(e){return t.router.stateRegistry.register(e)}),e}).then(function(t){return delete e.lazyLoad,delete e.$$state().lazyLoad,delete r._promise,t},function(t){return delete r._promise,ae.$q.reject(t)})}return n}function ct(t){var e=t._ignoredReason();if(e){Be.traceTransitionIgnored(t);var r=t.router.globals.transition;return"SameAsCurrent"===e&&r&&r.abort(),He.ignored().toPromise()}}function ft(t){if(!t.valid())throw new Error(t.error())}function lt(t){var e=function(t){return t||""},r=gr(t).map(e),n=r[0],i=r[1],o=_r(n).map(e);return{path:o[0],search:o[1],hash:i,url:t}}function ht(t,e,r,n){return function(i){var o=i.locationService=new r(i),a=i.locationConfig=new n(i,e);return{name:t,service:o,configuration:a,dispose:function(t){t.dispose(o),t.dispose(a)}}}}function pt(t){return ae.$injector=An,ae.$q=xn,{name:"vanilla.services",$q:xn,$injector:An,dispose:function(){return null}}}function dt(){var t=null;return function(e,r){return t=t||ae.$injector.get("$templateFactory"),[new ei(e,r,t)]}}function vt(t){if(!t.parent)return{};var e=["controller","controllerProvider","controllerAs","resolveAs"],r=["component","bindings","componentProvider"],n=["templateProvider","templateUrl","template","notify","async"].concat(e),i=r.concat(n);if(zt(t.views)&&Xn(i,t))throw new Error("State '"+t.name+"' has a 'views' object. It cannot also have \"view properties\" at the state level.  Move the following properties into a view (in the 'views' object):  "+i.filter(function(e){return zt(t[e])}).join(", "));var o={},a=t.views||{$default:g(t,i)};return le(a,function(e,i){if(i=i||"$default",Zt(e)&&(e={component:e}),e=he({},e),Xn(r,e)&&Xn(n,e))throw new Error("Cannot combine: "+r.join("|")+" with: "+n.join("|")+" in stateview: '"+i+"@"+t.name+"'");e.resolveAs=e.resolveAs||"$resolve",e.$type="ng1",e.$context=t,e.$name=i;var a=Br.normalizeUIViewTarget(e.$context,e.$name);e.$uiViewName=a.uiViewName,e.$uiViewContextAnchor=a.uiViewContextAnchor,o[i]=e}),o}function mt(t){var e=ae.$injector.get(t+"Directive");if(!e||!e.length)throw new Error("Unable to find component named '"+t+"'");return e.map(ni).reduce(Re,[])}function yt(t){function e(t,e,n,i,o,a){return r._runtimeServices(i,t,n,e),delete di.router,delete di.$get,di}(di=this.router=new tn).stateProvider=new oi(di.stateRegistry,di.stateService),di.stateRegistry.decorator("views",vt),di.stateRegistry.decorator("onExit",ai("onExit")),di.stateRegistry.decorator("onRetain",ai("onRetain")),di.stateRegistry.decorator("onEnter",ai("onEnter")),di.viewService._pluginapi._viewConfigFactory("ng1",dt());var r=di.locationService=di.locationConfig=new ui(t);return ui.monkeyPatchPathParameterType(di),di.router=di,di.$get=e,e.$inject=["$location","$browser","$sniffer","$rootScope","$http","$templateCache"],di}function gt(t,e,r){ae.$injector=t,ae.$q=e,r.stateRegistry.get().map(function(t){return t.$$state().resolvables}).reduce(Re,[]).filter(function(t){return"deferred"===t.deps}).forEach(function(e){return e.deps=t.annotate(e.resolveFn,t.strictDi)})}function _t(t){t.$watch(function(){Be.approximateDigests++})}function wt(t){var e,r=t.match(/^\s*({[^}]*})\s*$/);if(r&&(t="("+r[1]+")"),!(e=t.replace(/\n/g," ").match(/^\s*([^(]*?)\s*(\((.*)\))?\s*$/))||4!==e.length)throw new Error("Invalid state ref '"+t+"'");return{state:e[1]||null,paramExpr:e[3]||null}}function $t(t){var e=t.parent().inheritedData("$uiView"),r=At("$cfg.path")(e);return r?P(r).state.name:void 0}function St(t,e,r){var n=r.uiState||t.current.name,i=he(Et(e,t),r.uiStateOpts||{}),o=t.href(n,r.uiStateParams,i);return{uiState:n,uiStateParams:r.uiStateParams,uiStateOpts:i,href:o}}function bt(t){var e="[object SVGAnimatedString]"===Object.prototype.toString.call(t.prop("href")),r="FORM"===t[0].nodeName;return{attr:r?"action":e?"xlink:href":"href",isAnchor:"A"===t.prop("tagName").toUpperCase(),clickable:!r}}function Rt(t,e,r,n,i){return function(o){var a=o.which||o.button,u=i();if(!(a>1||o.ctrlKey||o.metaKey||o.shiftKey||t.attr("target"))){var s=r(function(){e.go(u.uiState,u.uiStateParams,u.uiStateOpts)});o.preventDefault();var c=n.isAnchor&&!u.href?1:0;o.preventDefault=function(){c--<=0&&r.cancel(s)}}}}function Et(t,e){return{relative:$t(t)||e.$current,inherit:!0,source:"sref"}}function Tt(t,e,r,n){var i;n&&(i=n.events),te(i)||(i=["click"]);for(var o=t.on?"on":"bind",a=0,u=i;a<u.length;a++){var s=u[a];t[o](s,r)}e.$on("$destroy",function(){for(var e=t.off?"off":"unbind",n=0,o=i;n<o.length;n++){var a=o[n];t[e](a,r)}})}function Ct(t){var e=function(e,r,n){return t.is(e,r,n)};return e.$stateful=!0,e}function Pt(t){var e=function(e,r,n){return t.includes(e,r,n)};return e.$stateful=!0,e}function kt(t,r,n,i,o,a){var u=At("viewDecl.controllerAs"),s=At("viewDecl.resolveAs");return{restrict:"ECA",priority:-400,compile:function(i){var a=i.html();return i.empty(),function(i,c){var f=c.data("$uiView");if(!f)return c.html(a),void t(c.contents())(i);var l=f.$cfg||{viewDecl:{},getTemplate:e.noop},h=l.path&&new cr(l.path);c.html(l.getTemplate(c,h)||a),Be.traceUIViewFill(f.$uiView,c.html());var p=t(c.contents()),d=l.controller,v=u(l),m=s(l),y=h&&yi(h);if(i[m]=y,d){var g=r(d,he({},y,{$scope:i,$element:c}));v&&(i[v]=g,i[v][m]=y),c.data("$ngControllerController",g),c.children().data("$ngControllerController",g),Ot(o,n,g,i,l)}if(Zt(l.viewDecl.component))var _=l.viewDecl.component,w=G(_),$=new RegExp("^(x-|data-)?"+w+"$","i"),S=i.$watch(function(){var t=[].slice.call(c[0].children).filter(function(t){return t&&t.tagName&&$.exec(t.tagName)});return t&&It.element(t).data("$"+_+"Controller")},function(t){t&&(Ot(o,n,t,i,l),S())});p(i)}}}}function Ot(t,e,r,n,i){!Kt(r.$onInit)||i.viewDecl.component&&$i||r.$onInit();var o=P(i.path).state.self,a={bind:r};if(Kt(r.uiOnParamsChanged)){var u=new cr(i.path).getResolvable("$transition$").data;n.$on("$destroy",e.onSuccess({},function(t){if(t!==u&&-1===t.exiting().indexOf(o)){var e=t.params("to"),n=t.params("from"),i=t.treeChanges().to.map(function(t){return t.paramSchema}).reduce(Re,[]),a=t.treeChanges().from.map(function(t){return t.paramSchema}).reduce(Re,[]),s=i.filter(function(t){var r=a.indexOf(t);return-1===r||!a[r].type.equals(e[t.id],n[t.id])});if(s.length){var c=s.map(function(t){return t.id}),f=$(e,function(t,e){return-1!==c.indexOf(e)});r.uiOnParamsChanged(f,t)}}},a))}if(Kt(r.uiCanExit)){var s=Si++,c=function(t){return!!t&&(t._uiCanExitIds&&!0===t._uiCanExitIds[s]||c(t.redirectedFrom()))},f={exiting:o.name};n.$on("$destroy",e.onBefore(f,function(e){var n,i=e._uiCanExitIds=e._uiCanExitIds||{};return c(e)||(n=t.when(r.uiCanExit(e))).then(function(t){return i[s]=!1!==t}),n},a))}}var xt=angular,It=e&&e.module?e:xt,jt=function(t){return function(e){return e&&e[t]}},Vt=r(function(t,e,r){return r&&r[t]===e}),At=function(t){return i.apply(null,t.split(".").map(jt))},Ht=function(t){return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return!t.apply(null,e)}},qt=function(t){return function(e){return e.reduce(function(e,r){return e&&!!t(r)},!0)}},Dt=function(t){return function(e){return e.reduce(function(e,r){return e||!!t(r)},!1)}},Ft=function(t){return function(e){return null!=e&&e.constructor===t||e instanceof t}},Nt=function(t){return function(e){return t===e}},Ut=function(t){return function(){return t}},Lt=function(){function t(t){this.text=t,this.glob=t.split(".");var e=this.text.split(".").map(function(t){return"**"===t?"(?:|(?:\\.[^.]*)*)":"*"===t?"\\.[^.]*":"\\."+t}).join("");this.regexp=new RegExp("^"+e+"$")}return t.prototype.matches=function(t){return this.regexp.test("."+t)},t.is=function(t){return!!/[!,*]+/.exec(t)},t.fromString=function(e){return t.is(e)?new t(e):null},t}(),Mt=function(){function t(e){return t.create(e||{})}return t.create=function(e){e=t.isStateClass(e)?new e:e;var r=de(de(e,t.prototype));return e.$$state=function(){return r},r.self=e,r.__stateObjectCache={nameGlob:Lt.fromString(r.name)},r},t.prototype.is=function(t){return this===t||this.self===t||this.fqn()===t},t.prototype.fqn=function(){if(!(this.parent&&this.parent instanceof this.constructor))return this.name;var t=this.parent.fqn();return t?t+"."+this.name:this.name},t.prototype.root=function(){return this.parent&&this.parent.root()||this},t.prototype.parameters=function(t){return((t=m(t,{inherit:!0,matchingKeys:null})).inherit&&this.parent&&this.parent.parameters()||[]).concat($e(this.params)).filter(function(e){return!t.matchingKeys||t.matchingKeys.hasOwnProperty(e.id)})},t.prototype.parameter=function(t,e){return void 0===e&&(e={}),this.url&&this.url.parameter(t,e)||S($e(this.params),Vt("id",t))||e.inherit&&this.parent&&this.parent.parameter(t)},t.prototype.toString=function(){return this.fqn()},t.isStateClass=function(t){return Kt(t)&&!0===t.__uiRouterState},t.isState=function(t){return Xt(t.__stateObjectCache)},t}(),Bt=Object.prototype.toString,Gt=function(t){return function(e){return typeof e===t}},Wt=Gt("undefined"),zt=Ht(Wt),Jt=function(t){return null===t},Qt=a(Jt,Wt),Kt=Gt("function"),Yt=Gt("number"),Zt=Gt("string"),Xt=function(t){return null!==t&&"object"==typeof t},te=Array.isArray,ee=function(t){return"[object Date]"===Bt.call(t)},re=function(t){return"[object RegExp]"===Bt.call(t)},ne=Mt.isState,ie=o(Xt,i(jt("then"),Kt)),oe=function(t){return function(){throw new Error(t+"(): No coreservices implementation for UI-Router is loaded.")}},ae={$q:void 0,$injector:void 0},ue="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||void 0,se=ue.angular||{},ce=se.fromJson||JSON.parse.bind(JSON),fe=se.toJson||JSON.stringify.bind(JSON),le=se.forEach||function(t,e,r){if(te(t))return t.forEach(e,r);Object.keys(t).forEach(function(r){return e(t[r],r)})},he=Object.assign||O,pe=se.equals||x,de=function(t,e){return he(Object.create(t),e)},ve=r(p),me=r(d),ye=r(v),ge=function(t){return t.slice().forEach(function(e){"function"==typeof e&&e(),me(t,e)})},_e=function(t,e){return he(t,e)},we=b,$e=function(t){return Object.keys(t).map(function(e){return t[e]})},Se=function(t,e){return t&&e},be=function(t,e){return t||e},Re=function(t,e){return t.concat(e)},Ee=function(t,e){return te(e)?t.concat(e.reduce(Ee,[])):R(t,e)},Te=function(t,e){return ve(t,e)?t:R(t,e)},Ce=function(t){return t.reduce(Re,[])},Pe=function(t){return t.reduce(Ee,[])},ke=E,Oe=E,xe=function(t){return Object.keys(t).map(function(e){return[e,t[e]]})},Ie=function(t){return t.catch(function(t){return 0})&&t},je=function(t){return Ie(ae.$q.reject(t))},Ve=function(){function t(t,e){void 0===t&&(t=[]),void 0===e&&(e=null),this._items=t,this._limit=e}return t.prototype.enqueue=function(t){var e=this._items;return e.push(t),this._limit&&e.length>this._limit&&e.shift(),t},t.prototype.dequeue=function(){if(this.size())return this._items.splice(0,1)[0]},t.prototype.clear=function(){var t=this._items;return this._items=[],t},t.prototype.size=function(){return this._items.length},t.prototype.remove=function(t){var e=this._items.indexOf(t);return e>-1&&this._items.splice(e,1)[0]},t.prototype.peekTail=function(){return this._items[this._items.length-1]},t.prototype.peekHead=function(){if(this.size())return this._items[0]},t}();!function(t){t[t.SUPERSEDED=2]="SUPERSEDED",t[t.ABORTED=3]="ABORTED",t[t.INVALID=4]="INVALID",t[t.IGNORED=5]="IGNORED",t[t.ERROR=6]="ERROR"}(t.RejectType||(t.RejectType={}));var Ae=0,He=function(){function e(t,e,r){this.$id=Ae++,this.type=t,this.message=e,this.detail=r}return e.prototype.toString=function(){var t=function(t){return t&&t.toString!==Object.prototype.toString?t.toString():J(t)}(this.detail),e=this;return"Transition Rejection($id: "+e.$id+" type: "+e.type+", message: "+e.message+", detail: "+t+")"},e.prototype.toPromise=function(){return he(je(this),{_transitionRejection:this})},e.isRejectionPromise=function(t){return t&&"function"==typeof t.then&&Ft(e)(t._transitionRejection)},e.superseded=function(r,n){var i=new e(t.RejectType.SUPERSEDED,"The transition has been superseded by a different transition",r);return n&&n.redirected&&(i.redirected=!0),i},e.redirected=function(t){return e.superseded(t,{redirected:!0})},e.invalid=function(r){return new e(t.RejectType.INVALID,"This transition is invalid",r)},e.ignored=function(r){return new e(t.RejectType.IGNORED,"The transition was ignored",r)},e.aborted=function(r){return new e(t.RejectType.ABORTED,"The transition has been aborted",r)},e.errored=function(r){return new e(t.RejectType.ERROR,"The transition errored",r)},e.normalize=function(t){return Ft(e)(t)?t:e.errored(t)},e}(),qe=function(t){var e=t.viewDecl,r=e.$context.name||"(root)";return"[View#"+t.$id+" from '"+r+"' state]: target ui-view: '"+e.$uiViewName+"@"+e.$uiViewContextAnchor+"'"},De=Function.prototype.bind.call(console.log,console),Fe=Kt(console.table)?console.table.bind(console):De.bind(console);!function(t){t[t.RESOLVE=0]="RESOLVE",t[t.TRANSITION=1]="TRANSITION",t[t.HOOK=2]="HOOK",t[t.UIVIEW=3]="UIVIEW",t[t.VIEWCONFIG=4]="VIEWCONFIG"}(t.Category||(t.Category={}));var Ne=At("$id"),Ue=At("router.$id"),Le=function(t){return"Transition #"+Ne(t)+"-"+Ue(t)},Me=function(){function e(){this._enabled={},this.approximateDigests=0}return e.prototype._set=function(e,r){var n=this;r.length||(r=Object.keys(t.Category).map(function(t){return parseInt(t,10)}).filter(function(t){return!isNaN(t)}).map(function(e){return t.Category[e]})),r.map(V).forEach(function(t){return n._enabled[t]=e})},e.prototype.enable=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._set(!0,t)},e.prototype.disable=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._set(!1,t)},e.prototype.enabled=function(t){return!!this._enabled[V(t)]},e.prototype.traceTransitionStart=function(e){this.enabled(t.Category.TRANSITION)&&console.log(Le(e)+": Started  -> "+J(e))},e.prototype.traceTransitionIgnored=function(e){this.enabled(t.Category.TRANSITION)&&console.log(Le(e)+": Ignored  <> "+J(e))},e.prototype.traceHookInvocation=function(e,r,n){if(this.enabled(t.Category.HOOK)){var i=At("traceData.hookType")(n)||"internal",o=At("traceData.context.state.name")(n)||At("traceData.context")(n)||"unknown",a=W(e.registeredHook.callback);console.log(Le(r)+":   Hook -> "+i+" context: "+o+", "+M(200,a))}},e.prototype.traceHookResult=function(e,r,n){this.enabled(t.Category.HOOK)&&console.log(Le(r)+":   <- Hook returned: "+M(200,J(e)))},e.prototype.traceResolvePath=function(e,r,n){this.enabled(t.Category.RESOLVE)&&console.log(Le(n)+":         Resolving "+e+" ("+r+")")},e.prototype.traceResolvableResolved=function(e,r){this.enabled(t.Category.RESOLVE)&&console.log(Le(r)+":               <- Resolved  "+e+" to: "+M(200,J(e.data)))},e.prototype.traceError=function(e,r){this.enabled(t.Category.TRANSITION)&&console.log(Le(r)+": <- Rejected "+J(r)+", reason: "+e)},e.prototype.traceSuccess=function(e,r){this.enabled(t.Category.TRANSITION)&&console.log(Le(r)+": <- Success  "+J(r)+", final state: "+e.name)},e.prototype.traceUIViewEvent=function(e,r,n){void 0===n&&(n=""),this.enabled(t.Category.UIVIEW)&&console.log("ui-view: "+B(30,e)+" "+j(r)+n)},e.prototype.traceUIViewConfigUpdated=function(e,r){this.enabled(t.Category.UIVIEW)&&this.traceUIViewEvent("Updating",e," with ViewConfig from context='"+r+"'")},e.prototype.traceUIViewFill=function(e,r){this.enabled(t.Category.UIVIEW)&&this.traceUIViewEvent("Fill",e," with: "+M(200,r))},e.prototype.traceViewSync=function(e){if(this.enabled(t.Category.VIEWCONFIG)){var r=e.map(function(t){var e=t[0],r=t[1];return{"ui-view fqn":e.$type+":"+e.fqn,"state: view name":r&&r.viewDecl.$context.name+": "+r.viewDecl.$name+" ("+r.viewDecl.$type+")"}}).sort(function(t,e){return t["ui-view fqn"].localeCompare(e["ui-view fqn"])});Fe(r)}},e.prototype.traceViewServiceEvent=function(e,r){this.enabled(t.Category.VIEWCONFIG)&&console.log("VIEWCONFIG: "+e+" "+qe(r))},e.prototype.traceViewServiceUIViewEvent=function(e,r){this.enabled(t.Category.VIEWCONFIG)&&console.log("VIEWCONFIG: "+e+" "+j(r))},e}(),Be=new Me;!function(t){t[t.CREATE=0]="CREATE",t[t.BEFORE=1]="BEFORE",t[t.RUN=2]="RUN",t[t.SUCCESS=3]="SUCCESS",t[t.ERROR=4]="ERROR"}(t.TransitionHookPhase||(t.TransitionHookPhase={})),function(t){t[t.TRANSITION=0]="TRANSITION",t[t.STATE=1]="STATE"}(t.TransitionHookScope||(t.TransitionHookScope={}));var Ge=function(){function t(t,e,r,n){this._stateRegistry=t,this._identifier=e,this._identifier=e,this._params=he({},r||{}),this._options=he({},n||{}),this._definition=t.matcher.find(e,this._options.relative)}return t.prototype.name=function(){return this._definition&&this._definition.name||this._identifier},t.prototype.identifier=function(){return this._identifier},t.prototype.params=function(){return this._params},t.prototype.$state=function(){return this._definition},t.prototype.state=function(){return this._definition&&this._definition.self},t.prototype.options=function(){return this._options},t.prototype.exists=function(){return!(!this._definition||!this._definition.self)},t.prototype.valid=function(){return!this.error()},t.prototype.error=function(){var t=this.options().relative;if(!this._definition&&t){var e=t.name?t.name:t;return"Could not resolve '"+this.name()+"' from state '"+e+"'"}return this._definition?this._definition.self?void 0:"State '"+this.name()+"' has an invalid definition":"No such state '"+this.name()+"'"},t.prototype.toString=function(){return"'"+this.name()+"'"+J(this.params())},t.prototype.withState=function(e){return new t(this._stateRegistry,e,this._params,this._options)},t.prototype.withParams=function(e,r){void 0===r&&(r=!1);var n=r?e:he({},this._params,e);return new t(this._stateRegistry,this._identifier,n,this._options)},t.prototype.withOptions=function(e,r){void 0===r&&(r=!1);var n=r?e:he({},this._options,e);return new t(this._stateRegistry,this._identifier,this._params,n)},t.isDef=function(t){return t&&t.state&&(Zt(t.state)||Zt(t.state.name))},t}(),We={current:l,transition:null,traceData:{},bind:null},ze=function(){function e(e,r,n,i){var o=this;this.transition=e,this.stateContext=r,this.registeredHook=n,this.options=i,this.isSuperseded=function(){return o.type.hookPhase===t.TransitionHookPhase.RUN&&!o.options.transition.isActive()},this.options=m(i,We),this.type=n.eventType}return e.prototype.logError=function(t){this.transition.router.stateService.defaultErrorHandler()(t)},e.prototype.invokeHook=function(){var t=this,e=this.registeredHook;if(!e._deregistered){var r=this.getNotCurrentRejection();if(r)return r;var n=this.options;Be.traceHookInvocation(this,this.transition,n);var i=function(r){return e.eventType.getErrorHandler(t)(r)},o=function(r){return e.eventType.getResultHandler(t)(r)};try{var a=e.callback.call(n.bind,t.transition,t.stateContext);return!this.type.synchronous&&ie(a)?a.catch(function(t){return He.normalize(t).toPromise()}).then(o,i):o(a)}catch(t){return i(He.normalize(t))}finally{e.invokeLimit&&++e.invokeCount>=e.invokeLimit&&e.deregister()}}},e.prototype.handleHookResult=function(t){var e=this,r=this.getNotCurrentRejection();return r||(ie(t)?t.then(function(t){return e.handleHookResult(t)}):(Be.traceHookResult(t,this.transition,this.options),!1===t?He.aborted("Hook aborted transition").toPromise():Ft(Ge)(t)?He.redirected(t).toPromise():void 0))},e.prototype.getNotCurrentRejection=function(){var t=this.transition.router;return t._disposed?He.aborted("UIRouter instance #"+t.$id+" has been stopped (disposed)").toPromise():this.transition._aborted?He.aborted().toPromise():this.isSuperseded()?He.superseded(this.options.current()).toPromise():void 0},e.prototype.toString=function(){var t=this,e=t.options,r=t.registeredHook;return(At("traceData.hookType")(e)||"internal")+" context: "+(At("traceData.context.state.name")(e)||At("traceData.context")(e)||"unknown")+", "+M(200,z(r.callback))},e.chain=function(t,e){return t.reduce(function(t,e){return t.then(function(){return e.invokeHook()})},e||ae.$q.when())},e.invokeHooks=function(t,r){for(var n=0;n<t.length;n++){var i=t[n].invokeHook();if(ie(i)){var o=t.slice(n+1);return e.chain(o,i).then(r)}}return r()},e.runAllHooks=function(t){t.forEach(function(t){return t.invokeHook()})},e.HANDLE_RESULT=function(t){return function(e){return t.handleHookResult(e)}},e.LOG_REJECTED_RESULT=function(t){return function(e){ie(e)&&e.catch(function(e){return t.logError(He.normalize(e))})}},e.LOG_ERROR=function(t){return function(e){return t.logError(e)}},e.REJECT_ERROR=function(t){return function(t){return je(t)}},e.THROW_ERROR=function(t){return function(t){throw t}},e}(),Je=function(){function e(t,e,r,n,i,o){void 0===o&&(o={}),this.tranSvc=t,this.eventType=e,this.callback=r,this.matchCriteria=n,this.removeHookFromRegistry=i,this.invokeCount=0,this._deregistered=!1,this.priority=o.priority||0,this.bind=o.bind||null,this.invokeLimit=o.invokeLimit}return e.prototype._matchingNodes=function(t,e){if(!0===e)return t;var r=t.filter(function(t){return A(t.state,e)});return r.length?r:null},e.prototype._getDefaultMatchCriteria=function(){return b(this.tranSvc._pluginapi._getPathTypes(),function(){return!0})},e.prototype._getMatchingNodes=function(e){var r=this,n=he(this._getDefaultMatchCriteria(),this.matchCriteria);return $e(this.tranSvc._pluginapi._getPathTypes()).reduce(function(i,o){var a=o.scope===t.TransitionHookScope.STATE,u=e[o.name]||[],s=a?u:[P(u)];return i[o.name]=r._matchingNodes(s,n[o.name]),i},{})},e.prototype.matches=function(t){var e=this._getMatchingNodes(t);return $e(e).every(f)?e:null},e.prototype.deregister=function(){this.removeHookFromRegistry(this),this._deregistered=!0},e}(),Qe=function(){function e(t){this.transition=t}return e.prototype.buildHooksForPhase=function(t){var e=this;return this.transition.router.transitionService._pluginapi._getEvents(t).map(function(t){return e.buildHooks(t)}).reduce(Re,[]).filter(f)},e.prototype.buildHooks=function(e){var r=this.transition,n=r.treeChanges(),i=this.getMatchingHooks(e,n);if(!i)return[];var o={transition:r,current:r.options().current};return i.map(function(i){return i.matches(n)[e.criteriaMatchPath.name].map(function(n){var a=he({bind:i.bind,traceData:{hookType:e.name,context:n}},o),u=e.criteriaMatchPath.scope===t.TransitionHookScope.STATE?n.state.self:null,s=new ze(r,u,i,a);return{hook:i,node:n,transitionHook:s}})}).reduce(Re,[]).sort(q(e.reverseSort)).map(function(t){return t.transitionHook})},e.prototype.getMatchingHooks=function(e,r){var n=e.hookPhase===t.TransitionHookPhase.CREATE,i=this.transition.router.transitionService;return(n?[i]:[this.transition,i]).map(function(t){return t.getHooks(e.name)}).filter(ke(te,"broken event named: "+e.name)).reduce(Re,[]).filter(function(t){return t.matches(r)})},e}(),Ke=function(){function t(t){this.pattern=/.*/,this.inherit=!0,he(this,t)}return t.prototype.is=function(t,e){return!0},t.prototype.encode=function(t,e){return t},t.prototype.decode=function(t,e){return t},t.prototype.equals=function(t,e){return t==e},t.prototype.$subPattern=function(){var t=this.pattern.toString();return t.substr(1,t.length-2)},t.prototype.toString=function(){return"{ParamType:"+this.name+"}"},t.prototype.$normalize=function(t){return this.is(t)?t:this.decode(t)},t.prototype.$asArray=function(t,e){if(!t)return this;if("auto"===t&&!e)throw new Error("'auto' array mode is for query parameters only");return new D(this,t)},t}(),Ye=Object.prototype.hasOwnProperty,Ze=function(t){return 0===["value","type","squash","array","dynamic"].filter(Ye.bind(t||{})).length};!function(t){t[t.PATH=0]="PATH",t[t.SEARCH=1]="SEARCH",t[t.CONFIG=2]="CONFIG"}(t.DefType||(t.DefType={}));var Xe=function(){function e(e,r,n,i,o){r=N(n=F(n),r,i,e,o.paramTypes);var a=function(){var r={array:i===t.DefType.SEARCH&&"auto"},o=e.match(/\[\]$/)?{array:!0}:{};return he(r,o,n).array}();r=a?r.$asArray(a,i===t.DefType.SEARCH):r;var u=void 0!==n.value||i===t.DefType.SEARCH,s=zt(n.dynamic)?!!n.dynamic:!!r.dynamic,c=zt(n.raw)?!!n.raw:!!r.raw,f=U(n,u,o.defaultSquashPolicy()),l=L(n,a,u,f),h=zt(n.inherit)?!!n.inherit:!!r.inherit;he(this,{id:e,type:r,location:i,isOptional:u,dynamic:s,raw:c,squash:f,replace:l,inherit:h,array:a,config:n})}return e.prototype.isDefaultValue=function(t){return this.isOptional&&this.type.equals(this.value(),t)},e.prototype.value=function(t){var e=this;return t=function(t){for(var r=0,n=e.replace;r<n.length;r++){var i=n[r];if(i.from===t)return i.to}return t}(t),Wt(t)?function(){if(e._defaultValueCache)return e._defaultValueCache.defaultValue;if(!ae.$injector)throw new Error("Injectable functions cannot be called at configuration time");var t=ae.$injector.invoke(e.config.$$fn);if(null!==t&&void 0!==t&&!e.type.is(t))throw new Error("Default value ("+t+") for parameter '"+e.id+"' is not an instance of ParamType ("+e.type.name+")");return e.config.$$fn.__cacheable&&(e._defaultValueCache={defaultValue:t}),t}():this.type.$normalize(t)},e.prototype.isSearch=function(){return this.location===t.DefType.SEARCH},e.prototype.validates=function(t){if((Wt(t)||null===t)&&this.isOptional)return!0;var e=this.type.$normalize(t);if(!this.type.is(e))return!1;var r=this.type.encode(e);return!(Zt(r)&&!this.type.pattern.exec(r))},e.prototype.toString=function(){return"{Param:"+this.id+" "+this.type+" squash: '"+this.squash+"' optional: "+this.isOptional+"}"},e.values=function(t,e){void 0===e&&(e={});for(var r={},n=0,i=t;n<i.length;n++){var o=i[n];r[o.id]=o.value(e[o.id])}return r},e.changed=function(t,e,r){return void 0===e&&(e={}),void 0===r&&(r={}),t.filter(function(t){return!t.type.equals(e[t.id],r[t.id])})},e.equals=function(t,r,n){return void 0===r&&(r={}),void 0===n&&(n={}),0===e.changed(t,r,n).length},e.validates=function(t,e){return void 0===e&&(e={}),t.map(function(t){return t.validates(e[t.id])}).reduce(Se,!0)},e}(),tr=function(){function t(e){if(e instanceof t){var r=e;this.state=r.state,this.paramSchema=r.paramSchema.slice(),this.paramValues=he({},r.paramValues),this.resolvables=r.resolvables.slice(),this.views=r.views&&r.views.slice()}else{var n=e;this.state=n,this.paramSchema=n.parameters({inherit:!1}),this.paramValues={},this.resolvables=n.resolvables.map(function(t){return t.clone()})}}return t.prototype.applyRawParams=function(t){var e=function(e){return[e.id,e.value(t[e.id])]};return this.paramValues=this.paramSchema.reduce(function(t,r){return C(t,e(r))},{}),this},t.prototype.parameter=function(t){return S(this.paramSchema,Vt("id",t))},t.prototype.equals=function(t,e){var r=this.diff(t,e);return r&&0===r.length},t.prototype.diff=function(t,e){if(this.state!==t.state)return!1;var r=e?e(this):this.paramSchema;return Xe.changed(r,this.paramValues,t.paramValues)},t.clone=function(e){return new t(e)},t}(),er=function(){function t(){}return t.makeTargetState=function(t,e){var r=P(e).state;return new Ge(t,r,e.map(jt("paramValues")).reduce(_e,{}),{})},t.buildPath=function(t){var e=t.params();return t.$state().path.map(function(t){return new tr(t).applyRawParams(e)})},t.buildToPath=function(e,r){var n=t.buildPath(r);return r.options().inherit?t.inheritParams(e,n,Object.keys(r.params())):n},t.applyViewConfigs=function(e,r,n){r.filter(function(t){return ve(n,t.state)}).forEach(function(n){var i=$e(n.state.views||{}),o=t.subPath(r,function(t){return t===n}),a=i.map(function(t){return e.createViewConfig(o,t)});n.views=a.reduce(Re,[])})},t.inheritParams=function(t,e,r){function n(t,e){var r=S(t,Vt("state",e));return he({},r&&r.paramValues)}void 0===r&&(r=[]);var i=t.map(function(t){return t.paramSchema}).reduce(Re,[]).filter(function(t){return!t.inherit}).map(jt("id"));return e.map(function(e){var o=he({},e&&e.paramValues),a=g(o,r);o=_(o,r);var u=_(n(t,e.state)||{},i),s=he(o,u,a);return new tr(e.state).applyRawParams(s)})},t.treeChanges=function(e,r,n){for(var i=0,o=Math.min(e.length,r.length);i<o&&e[i].state!==n&&function(e,r){return e.equals(r,t.nonDynamicParams)}(e[i],r[i]);)i++;var a,u,s,c,f;u=(a=e).slice(0,i),s=a.slice(i);var l=u.map(function(t,e){var n=tr.clone(t);return n.paramValues=r[e].paramValues,n});return c=r.slice(i),f=l.concat(c),{from:a,to:f,retained:u,exiting:s,entering:c}},t.matching=function(t,e,r){var n=!1;return T(t,e).reduce(function(t,e){var i=e[0],o=e[1];return(n=n||!i.equals(o,r))?t:t.concat(i)},[])},t.equals=function(e,r,n){return e.length===r.length&&t.matching(e,r,n).length===e.length},t.subPath=function(t,e){var r=S(t,e),n=t.indexOf(r);return-1===n?void 0:t.slice(0,n+1)},t.nonDynamicParams=function(t){return t.state.parameters({inherit:!1}).filter(function(t){return!t.dynamic})},t.paramValues=function(t){return t.reduce(function(t,e){return he(t,e.paramValues)},{})},t}(),rr={when:"LAZY",async:"WAIT"},nr=function(){function t(e,r,n,i,o){if(this.resolved=!1,this.promise=void 0,e instanceof t)he(this,e);else if(Kt(r)){if(Qt(e))throw new Error("new Resolvable(): token argument is required");if(!Kt(r))throw new Error("new Resolvable(): resolveFn argument must be a function");this.token=e,this.policy=i,this.resolveFn=r,this.deps=n||[],this.data=o,this.resolved=void 0!==o,this.promise=this.resolved?ae.$q.when(this.data):void 0}else if(Xt(e)&&e.token&&Kt(e.resolveFn)){var a=e;return new t(a.token,a.resolveFn,a.deps,a.policy,a.data)}}return t.prototype.getPolicy=function(t){var e=this.policy||{},r=t&&t.resolvePolicy||{};return{when:e.when||r.when||rr.when,async:e.async||r.async||rr.async}},t.prototype.resolve=function(t,e){var r=this,n=ae.$q,i=t.findNode(this),o=i&&i.state,a="RXWAIT"===this.getPolicy(o).async?function(t){var e=t.cache(1);return e.take(1).toPromise().then(function(){return e})}:f;return this.promise=n.when().then(function(){return n.all(t.getDependencies(r).map(function(r){return r.get(t,e)}))}).then(function(t){return r.resolveFn.apply(null,t)}).then(a).then(function(t){return r.data=t,r.resolved=!0,Be.traceResolvableResolved(r,e),r.data})},t.prototype.get=function(t,e){return this.promise||this.resolve(t,e)},t.prototype.toString=function(){return"Resolvable(token: "+J(this.token)+", requires: ["+this.deps.map(J)+"])"},t.prototype.clone=function(){return new t(this)},t.fromData=function(e,r){return new t(e,function(){return r},null,null,r)},t}(),ir={when:{LAZY:"LAZY",EAGER:"EAGER"},async:{WAIT:"WAIT",NOWAIT:"NOWAIT",RXWAIT:"RXWAIT"}},or=ir.when,ar=[or.EAGER,or.LAZY],ur=[or.EAGER],sr="Native Injector",cr=function(){function t(t){this._path=t}return t.prototype.getTokens=function(){return this._path.reduce(function(t,e){return t.concat(e.resolvables.map(function(t){return t.token}))},[]).reduce(Te,[])},t.prototype.getResolvable=function(t){return P(this._path.map(function(t){return t.resolvables}).reduce(Re,[]).filter(function(e){return e.token===t}))},t.prototype.getPolicy=function(t){var e=this.findNode(t);return t.getPolicy(e.state)},t.prototype.subContext=function(e){return new t(er.subPath(this._path,function(t){return t.state===e}))},t.prototype.addResolvables=function(t,e){var r=S(this._path,Vt("state",e)),n=t.map(function(t){return t.token});r.resolvables=r.resolvables.filter(function(t){return-1===n.indexOf(t.token)}).concat(t)},t.prototype.resolvePath=function(t,e){var r=this;void 0===t&&(t="LAZY");var n=(ve(ar,t)?t:"LAZY")===ir.when.EAGER?ur:ar;Be.traceResolvePath(this._path,t,e);var i=function(t,e){return function(n){return ve(t,r.getPolicy(n)[e])}},o=this._path.reduce(function(t,o){var a=o.resolvables.filter(i(n,"when")),u=a.filter(i(["NOWAIT"],"async")),s=a.filter(Ht(i(["NOWAIT"],"async"))),c=r.subContext(o.state),f=function(t){return t.get(c,e).then(function(e){return{token:t.token,value:e}})};return u.forEach(f),t.concat(s.map(f))},[]);return ae.$q.all(o)},t.prototype.injector=function(){return this._injector||(this._injector=new fr(this))},t.prototype.findNode=function(t){return S(this._path,function(e){return ve(e.resolvables,t)})},t.prototype.getDependencies=function(t){var e=this,r=this.findNode(t),n=(er.subPath(this._path,function(t){return t===r})||this._path).reduce(function(t,e){return t.concat(e.resolvables)},[]).filter(function(e){return e!==t});return t.deps.map(function(t){var r=n.filter(function(e){return e.token===t});if(r.length)return P(r);var i=e.injector().getNative(t);if(Wt(i))throw new Error("Could not find Dependency Injection token: "+J(t));return new nr(t,function(){return i},[],i)})},t}(),fr=function(){function t(t){this.context=t,this.native=this.get(sr)||ae.$injector}return t.prototype.get=function(t){var e=this.context.getResolvable(t);if(e){if("NOWAIT"===this.context.getPolicy(e).async)return e.get(this.context);if(!e.resolved)throw new Error("Resolvable async .get() not complete:"+J(e.token));return e.data}return this.getNative(t)},t.prototype.getAsync=function(t){var e=this.context.getResolvable(t);return e?e.get(this.context):ae.$q.when(this.native.get(t))},t.prototype.getNative=function(t){return this.native&&this.native.get(t)},t}(),lr=jt("self"),hr=function(){function e(e,r,n){var i=this;if(this._deferred=ae.$q.defer(),this.promise=this._deferred.promise,this._registeredHooks={},this._hookBuilder=new Qe(this),this.isActive=function(){return i.router.globals.transition===i},this.router=n,this._targetState=r,!r.valid())throw new Error(r.error());this._options=he({current:Ut(this)},r.options()),this.$id=n.transitionService._transitionCount++;var o=er.buildToPath(e,r);this._treeChanges=er.treeChanges(e,o,this._options.reloadState),this.createTransitionHookRegFns();var a=this._hookBuilder.buildHooksForPhase(t.TransitionHookPhase.CREATE);ze.invokeHooks(a,function(){return null}),this.applyViewConfigs(n)}return e.prototype.onBefore=function(t,e,r){},e.prototype.onStart=function(t,e,r){},e.prototype.onExit=function(t,e,r){},e.prototype.onRetain=function(t,e,r){},e.prototype.onEnter=function(t,e,r){},e.prototype.onFinish=function(t,e,r){},e.prototype.onSuccess=function(t,e,r){},e.prototype.onError=function(t,e,r){},e.prototype.createTransitionHookRegFns=function(){var e=this;this.router.transitionService._pluginapi._getEvents().filter(function(e){return e.hookPhase!==t.TransitionHookPhase.CREATE}).forEach(function(t){return H(e,e.router.transitionService,t)})},e.prototype.getHooks=function(t){return this._registeredHooks[t]},e.prototype.applyViewConfigs=function(t){var e=this._treeChanges.entering.map(function(t){return t.state});er.applyViewConfigs(t.transitionService.$view,this._treeChanges.to,e)},e.prototype.$from=function(){return P(this._treeChanges.from).state},e.prototype.$to=function(){return P(this._treeChanges.to).state},e.prototype.from=function(){return this.$from().self},e.prototype.to=function(){return this.$to().self},e.prototype.targetState=function(){return this._targetState},e.prototype.is=function(t){return t instanceof e?this.is({to:t.$to().name,from:t.$from().name}):!(t.to&&!A(this.$to(),t.to)||t.from&&!A(this.$from(),t.from))},e.prototype.params=function(t){return void 0===t&&(t="to"),Object.freeze(this._treeChanges[t].map(jt("paramValues")).reduce(_e,{}))},e.prototype.injector=function(t,e){void 0===e&&(e="to");var r=this._treeChanges[e];return t&&(r=er.subPath(r,function(e){return e.state===t||e.state.name===t})),new cr(r).injector()},e.prototype.getResolveTokens=function(t){return void 0===t&&(t="to"),new cr(this._treeChanges[t]).getTokens()},e.prototype.addResolvable=function(t,e){void 0===e&&(e=""),t=Ft(nr)(t)?t:new nr(t);var r="string"==typeof e?e:e.name,n=this._treeChanges.to,i=S(n,function(t){return t.state.name===r});new cr(n).addResolvables([t],i.state)},e.prototype.redirectedFrom=function(){return this._options.redirectedFrom||null},e.prototype.originalTransition=function(){var t=this.redirectedFrom();return t&&t.originalTransition()||this},e.prototype.options=function(){return this._options},e.prototype.entering=function(){return b(this._treeChanges.entering,jt("state")).map(lr)},e.prototype.exiting=function(){return b(this._treeChanges.exiting,jt("state")).map(lr).reverse()},e.prototype.retained=function(){return b(this._treeChanges.retained,jt("state")).map(lr)},e.prototype.views=function(t,e){void 0===t&&(t="entering");var r=this._treeChanges[t];return(r=e?r.filter(Vt("state",e)):r).map(jt("views")).filter(f).reduce(Re,[])},e.prototype.treeChanges=function(t){return t?this._treeChanges[t]:this._treeChanges},e.prototype.redirect=function(t){for(var e=1,r=this;null!=(r=r.redirectedFrom());)if(++e>20)throw new Error("Too many consecutive Transition redirects (20+)");var n={redirectedFrom:this,source:"redirect"};"url"===this.options().source&&!1!==t.options().location&&(n.location="replace");var i=he({},this.options(),t.options(),n);t=t.withOptions(i,!0);var o=this.router.transitionService.create(this._treeChanges.from,t),a=this._treeChanges.entering,u=o._treeChanges.entering;return er.matching(u,a,er.nonDynamicParams).filter(Ht(function(t){return function(e){return t&&e.state.includes[t.name]}}(t.options().reloadState))).forEach(function(t,e){t.resolvables=a[e].resolvables}),o},e.prototype._changedParams=function(){var t=this._treeChanges;if(!(this._options.reload||t.exiting.length||t.entering.length||t.to.length!==t.from.length||T(t.to,t.from).map(function(t){return t[0].state!==t[1].state}).reduce(be,!1))){var e=t.to.map(function(t){return t.paramSchema}),r=[t.to,t.from].map(function(t){return t.map(function(t){return t.paramValues})});return T(e,r[0],r[1]).map(function(t){var e=t[0],r=t[1],n=t[2];return Xe.changed(e,r,n)}).reduce(Re,[])}},e.prototype.dynamic=function(){var t=this._changedParams();return!!t&&t.map(function(t){return t.dynamic}).reduce(be,!1)},e.prototype.ignored=function(){return!!this._ignoredReason()},e.prototype._ignoredReason=function(){var t=this.router.globals.transition,e=this._options.reloadState,r=function(t,r){if(t.length!==r.length)return!1;var n=er.matching(t,r);return t.length===n.filter(function(t){return!e||!t.state.includes[e.name]}).length},n=this.treeChanges(),i=t&&t.treeChanges();return i&&r(i.to,n.to)&&r(i.exiting,n.exiting)?"SameAsPending":0===n.exiting.length&&0===n.entering.length&&r(n.from,n.to)?"SameAsCurrent":void 0},e.prototype.run=function(){var e=this,r=ze.runAllHooks,n=function(t){return e._hookBuilder.buildHooksForPhase(t)},i=n(t.TransitionHookPhase.BEFORE);return ze.invokeHooks(i,function(){var t=e.router.globals;return t.lastStartedTransitionId=e.$id,t.transition=e,t.transitionHistory.enqueue(e),Be.traceTransitionStart(e),ae.$q.when(void 0)}).then(function(){var e=n(t.TransitionHookPhase.RUN);return ze.invokeHooks(e,function(){return ae.$q.when(void 0)})}).then(function(){Be.traceSuccess(e.$to(),e),e.success=!0,e._deferred.resolve(e.to()),r(n(t.TransitionHookPhase.SUCCESS))},function(i){Be.traceError(i,e),e.success=!1,e._deferred.reject(i),e._error=i,r(n(t.TransitionHookPhase.ERROR))}),this.promise},e.prototype.valid=function(){return!this.error()||void 0!==this.success},e.prototype.abort=function(){Wt(this.success)&&(this._aborted=!0)},e.prototype.error=function(){var t=this.$to();if(t.self.abstract)return"Cannot transition to abstract state '"+t.name+"'";var e=t.parameters(),r=this.params(),n=e.filter(function(t){return!t.validates(r[t.id])});return n.length?"Param values not valid for state '"+t.name+"'. Invalid params: [ "+n.map(function(t){return t.id}).join(", ")+" ]":!1===this.success?this._error:void 0},e.prototype.toString=function(){var t=this.from(),e=this.to(),r=function(t){return null!==t["#"]&&void 0!==t["#"]?t:_(t,["#"])};return"Transition#"+this.$id+"( '"+(Xt(t)?t.name:t)+"'"+J(r(this._treeChanges.from.map(jt("paramValues")).reduce(_e,{})))+" -> "+(this.valid()?"":"(X) ")+"'"+(Xt(e)?e.name:e)+"'"+J(r(this.params()))+" )"},e.diToken=e,e}(),pr=null,dr=function(t){var e=He.isRejectionPromise;return(pr=pr||s([[Ht(zt),Ut("undefined")],[Jt,Ut("null")],[ie,Ut("[Promise]")],[e,function(t){return t._transitionRejection.toString()}],[Ft(He),u("toString")],[Ft(hr),u("toString")],[Ft(nr),u("toString")],[c,W],[Ut(!0),f]]))(t)},vr=function(t){return function(e){if(!e)return["",""];var r=e.indexOf(t);return-1===r?[e,""]:[e.substr(0,r),e.substr(r+1)]}},mr=new RegExp("^(?:[a-z]+:)?//[^/]+/"),yr=function(t){return t.replace(/\/[^/]*$/,"")},gr=vr("#"),_r=vr("?"),wr=vr("="),$r=function(t){return t?t.replace(/^#/,""):""},Sr=function(){function t(){this.enqueue=!0,this.typeQueue=[],this.defaultTypes=g(t.prototype,["hash","string","query","path","int","bool","date","json","any"]);this.types=de(b(this.defaultTypes,function(t,e){return new Ke(he({name:e},t))}),{})}return t.prototype.dispose=function(){this.types={}},t.prototype.type=function(t,e,r){if(!zt(e))return this.types[t];if(this.types.hasOwnProperty(t))throw new Error("A type named '"+t+"' has already been defined.");return this.types[t]=new Ke(he({name:t},e)),r&&(this.typeQueue.push({name:t,def:r}),this.enqueue||this._flushTypeQueue()),this},t.prototype._flushTypeQueue=function(){for(;this.typeQueue.length;){var t=this.typeQueue.shift();if(t.pattern)throw new Error("You cannot override a type's .pattern at runtime.");he(this.types[t.name],ae.$injector.invoke(t.def))}},t}();!function(){var t=function(t){var e=function(t){return null!=t?t.toString():t},r={encode:e,decode:e,is:Ft(String),pattern:/.*/,equals:function(t,e){return t==e}};return he({},r,t)};he(Sr.prototype,{string:t({}),path:t({pattern:/[^/]*/}),query:t({}),hash:t({inherit:!1}),int:t({decode:function(t){return parseInt(t,10)},is:function(t){return!Qt(t)&&this.decode(t.toString())===t},pattern:/-?\d+/}),bool:t({encode:function(t){return t&&1||0},decode:function(t){return 0!==parseInt(t,10)},is:Ft(Boolean),pattern:/0|1/}),date:t({encode:function(t){return this.is(t)?[t.getFullYear(),("0"+(t.getMonth()+1)).slice(-2),("0"+t.getDate()).slice(-2)].join("-"):void 0},decode:function(t){if(this.is(t))return t;var e=this.capture.exec(t);return e?new Date(e[1],e[2]-1,e[3]):void 0},is:function(t){return t instanceof Date&&!isNaN(t.valueOf())},equals:function(t,e){return["getFullYear","getMonth","getDate"].reduce(function(r,n){return r&&t[n]()===e[n]()},!0)},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/}),json:t({encode:fe,decode:ce,is:Ft(Object),equals:pe,pattern:/[^/]*/}),any:t({encode:f,decode:f,is:function(){return!0},equals:pe})})}();var br,Rr=function(){function t(t){void 0===t&&(t={}),he(this,t)}return t.prototype.$inherit=function(t,e,r){var n,i=y(e,r),o={},a=[];for(var u in i)if(i[u]&&i[u].params&&(n=Object.keys(i[u].params)).length)for(var s in n)a.indexOf(n[s])>=0||(a.push(n[s]),o[n[s]]=this[n[s]]);return he({},o,t)},t}(),Er=function(t){if(!Zt(t))return!1;var e="^"===t.charAt(0);return{val:e?t.substring(1):t,root:e}},Tr=function(t,e){return function(r){var n=r;n&&n.url&&n.name&&n.name.match(/\.\*\*$/)&&(n.url+="{remainder:any}");var i=Er(n.url),o=r.parent,a=i?t.compile(i.val,{params:r.params||{},paramMap:function(t,e){return!1===n.reloadOnSearch&&e&&(t=he(t||{},{dynamic:!0})),t}}):n.url;if(!a)return null;if(!t.isMatcher(a))throw new Error("Invalid url '"+a+"' in state '"+r+"'");return i&&i.root?a:(o&&o.navigable||e()).url.append(a)}},Cr=function(t){return function(e){return!t(e)&&e.url?e:e.parent?e.parent.navigable:null}},Pr=function(t){return function(e){var r=e.url&&e.url.parameters({inherit:!1})||[],n=$e(we(_(e.params||{},r.map(jt("id"))),function(e,r){return t.fromConfig(r,null,e)}));return r.concat(n).map(function(t){return[t.id,t]}).reduce(C,{})}},kr=function(){function t(t,e){this.matcher=t;var r=this,n=function(){return t.find("")},i=function(t){return""===t.name};this.builders={name:[Y],self:[Z],parent:[function(e){return i(e)?null:t.find(r.parentName(e))||n()}],data:[X],url:[Tr(e,n)],navigable:[Cr(i)],params:[Pr(e.paramFactory)],views:[],path:[tt],includes:[et],resolvables:[rt]}}return t.prototype.builder=function(t,e){var r=this.builders,n=r[t]||[];return Zt(t)&&!zt(e)?n.length>1?n:n[0]:Zt(t)&&Kt(e)?(r[t]=n,r[t].push(e),function(){return r[t].splice(r[t].indexOf(e,1))&&null}):void 0},t.prototype.build=function(t){var e=this,r=e.matcher,n=e.builders,i=this.parentName(t);if(i&&!r.find(i,void 0,!1))return null;for(var o in n)if(n.hasOwnProperty(o)){var a=n[o].reduce(function(t,e){return function(r){return e(r,t)}},l);t[o]=a(t)}return t},t.prototype.parentName=function(t){var e=t.name||"",r=e.split(".");if("**"===r.pop()&&r.pop(),r.length){if(t.parent)throw new Error("States that specify the 'parent:' property should not have a '.' in their name ("+e+")");return r.join(".")}return t.parent?Zt(t.parent)?t.parent:t.parent.name:""},t.prototype.name=function(t){var e=t.name;if(-1!==e.indexOf(".")||!t.parent)return e;var r=Zt(t.parent)?t.parent:t.parent.name;return r?r+"."+e:e},t}(),Or=function(){function t(t){this._states=t}return t.prototype.isRelative=function(t){return 0===(t=t||"").indexOf(".")||0===t.indexOf("^")},t.prototype.find=function(t,e,r){if(void 0===r&&(r=!0),t||""===t){var n=Zt(t),i=n?t:t.name;this.isRelative(i)&&(i=this.resolvePath(i,e));var o=this._states[i];if(o&&(n||!(n||o!==t&&o.self!==t)))return o;if(n&&r){var a=$e(this._states).filter(function(t){return t.__stateObjectCache.nameGlob&&t.__stateObjectCache.nameGlob.matches(i)});return a.length>1&&console.log("stateMatcher.find: Found multiple matches for "+i+" using glob: ",a.map(function(t){return t.name})),a[0]}}},t.prototype.resolvePath=function(t,e){if(!e)throw new Error("No reference point given for path '"+t+"'");for(var r=this.find(e),n=t.split("."),i=0,o=n.length,a=r;i<o;i++)if(""!==n[i]||0!==i){if("^"!==n[i])break;if(!a.parent)throw new Error("Path '"+t+"' not valid for state '"+r.name+"'");a=a.parent}else a=r;var u=n.slice(i).join(".");return a.name+(a.name&&u?".":"")+u},t}(),xr=function(){function t(t,e,r,n,i){this.$registry=t,this.$urlRouter=e,this.states=r,this.builder=n,this.listeners=i,this.queue=[],this.matcher=t.matcher}return t.prototype.dispose=function(){this.queue=[]},t.prototype.register=function(t){var e=this.queue,r=Mt.create(t),n=r.name;if(!Zt(n))throw new Error("State must have a valid name");if(this.states.hasOwnProperty(n)||ve(e.map(jt("name")),n))throw new Error("State '"+n+"' is already defined");return e.push(r),this.flush(),r},t.prototype.flush=function(){for(var t=this,e=this,r=e.queue,n=e.states,i=e.builder,o=[],a=[],u={},s=function(e){return t.states.hasOwnProperty(e)&&t.states[e]};r.length>0;){var c=r.shift(),f=c.name,l=i.build(c),h=a.indexOf(c);if(l){var p=s(f);if(p&&p.name===f)throw new Error("State '"+f+"' is already defined");var d=s(f+".**");d&&this.$registry.deregister(d),n[f]=c,this.attachRoute(c),h>=0&&a.splice(h,1),o.push(c)}else{var v=u[f];if(u[f]=r.length,h>=0&&v===r.length)return r.push(c),n;h<0&&a.push(c),r.push(c)}}return o.length&&this.listeners.forEach(function(t){return t("registered",o.map(function(t){return t.self}))}),n},t.prototype.attachRoute=function(t){!t.abstract&&t.url&&this.$urlRouter.rule(this.$urlRouter.urlRuleFactory.create(t))},t}(),Ir=function(){function t(t){this._router=t,this.states={},this.listeners=[],this.matcher=new Or(this.states),this.builder=new kr(this.matcher,t.urlMatcherFactory),this.stateQueue=new xr(this,t.urlRouter,this.states,this.builder,this.listeners),this._registerRoot()}return t.prototype._registerRoot=function(){var t={name:"",url:"^",views:null,params:{"#":{value:null,type:"hash",dynamic:!0}},abstract:!0};(this._root=this.stateQueue.register(t)).navigable=null},t.prototype.dispose=function(){var t=this;this.stateQueue.dispose(),this.listeners=[],this.get().forEach(function(e){return t.get(e)&&t.deregister(e)})},t.prototype.onStatesChanged=function(t){return this.listeners.push(t),function(){me(this.listeners)(t)}.bind(this)},t.prototype.root=function(){return this._root},t.prototype.register=function(t){return this.stateQueue.register(t)},t.prototype._deregisterTree=function(t){var e=this,r=this.get().map(function(t){return t.$$state()}),n=function(t){var e=r.filter(function(e){return-1!==t.indexOf(e.parent)});return 0===e.length?e:e.concat(n(e))},i=n([t]),o=[t].concat(i).reverse();return o.forEach(function(t){var r=e._router.urlRouter;r.rules().filter(Vt("state",t)).forEach(r.removeRule.bind(r)),delete e.states[t.name]}),o},t.prototype.deregister=function(t){var e=this.get(t);if(!e)throw new Error("Can't deregister state; not found: "+t);var r=this._deregisterTree(e.$$state());return this.listeners.forEach(function(t){return t("deregistered",r.map(function(t){return t.self}))}),r},t.prototype.get=function(t,e){var r=this;if(0===arguments.length)return Object.keys(this.states).map(function(t){return r.states[t].self});var n=this.matcher.find(t,e);return n&&n.self||null},t.prototype.decorator=function(t,e){return this.builder.builder(t,e)},t}(),jr=function(t,e,r){return t[e]=t[e]||r()},Vr=Q("/"),Ar=function(){function e(t,r,n,i){var o=this;this.config=i,this._cache={path:[this]},this._children=[],this._params=[],this._segments=[],this._compiled=[],this.pattern=t,this.config=m(this.config,{params:{},strict:!0,caseInsensitive:!1,paramMap:f});for(var a,u,s,c=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l=/([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,h=0,p=[],d=function(r){if(!e.nameValidator.test(r))throw new Error("Invalid parameter name '"+r+"' in pattern '"+t+"'");if(S(o._params,Vt("id",r)))throw new Error("Duplicate parameter name '"+r+"' in pattern '"+t+"'")},v=function(e,n){var i=e[2]||e[3],a=n?e[4]:e[4]||("*"===e[1]?"[\\s\\S]*":null);return{id:i,regexp:a,cfg:o.config.params[i],segment:t.substring(h,e.index),type:a?r.type(a)||function(t){return de(r.type(n?"query":"path"),{pattern:new RegExp(t,o.config.caseInsensitive?"i":void 0)})}(a):null}};(a=c.exec(t))&&!((u=v(a,!1)).segment.indexOf("?")>=0);)d(u.id),this._params.push(n.fromPath(u.id,u.type,this.config.paramMap(u.cfg,!1))),this._segments.push(u.segment),p.push([u.segment,P(this._params)]),h=c.lastIndex;var y=(s=t.substring(h)).indexOf("?");if(y>=0){var g=s.substring(y);if(s=s.substring(0,y),g.length>0)for(h=0;a=l.exec(g);)d((u=v(a,!0)).id),this._params.push(n.fromSearch(u.id,u.type,this.config.paramMap(u.cfg,!0))),h=c.lastIndex}this._segments.push(s),this._compiled=p.map(function(t){return nt.apply(null,t)}).concat(nt(s))}return e.prototype.append=function(t){return this._children.push(t),t._cache={path:this._cache.path.concat(t),parent:this,pattern:null},t},e.prototype.isRoot=function(){return this._cache.path[0]===this},e.prototype.toString=function(){return this.pattern},e.prototype.exec=function(t,e,r,n){var i=this;void 0===e&&(e={}),void 0===n&&(n={});var o=jr(this._cache,"pattern",function(){return new RegExp(["^",Ce(i._cache.path.map(jt("_compiled"))).join(""),!1===i.config.strict?"/?":"","$"].join(""),i.config.caseInsensitive?"i":void 0)}).exec(t);if(!o)return null;var a=this.parameters(),u=a.filter(function(t){return!t.isSearch()}),s=a.filter(function(t){return t.isSearch()}),c=this._cache.path.map(function(t){return t._segments.length-1}).reduce(function(t,e){return t+e}),f={};if(c!==o.length-1)throw new Error("Unbalanced capture group in route '"+this.pattern+"'");for(var l=0;l<c;l++){for(var h=u[l],p=o[l+1],d=0;d<h.replace.length;d++)h.replace[d].from===p&&(p=h.replace[d].to);p&&!0===h.array&&(p=function(t){var e=function(t){return t.split("").reverse().join("")};return b(b(e(t).split(/-(?!\\)/),e),function(t){return t.replace(/\\-/g,"-")}).reverse()}(p)),zt(p)&&(p=h.type.decode(p)),f[h.id]=h.value(p)}return s.forEach(function(t){for(var r=e[t.id],n=0;n<t.replace.length;n++)t.replace[n].from===r&&(r=t.replace[n].to);zt(r)&&(r=t.type.decode(r)),f[t.id]=t.value(r)}),r&&(f["#"]=r),f},e.prototype.parameters=function(t){return void 0===t&&(t={}),!1===t.inherit?this._params:Ce(this._cache.path.map(function(t){return t._params}))},e.prototype.parameter=function(t,e){var r=this;void 0===e&&(e={});var n=this._cache.parent;return function(){for(var e=0,n=r._params;e<n.length;e++){var i=n[e];if(i.id===t)return i}}()||!1!==e.inherit&&n&&n.parameter(t,e)||null},e.prototype.validates=function(t){var e=function(t,e){return!t||t.validates(e)};return t=t||{},this.parameters().filter(function(e){return t.hasOwnProperty(e.id)}).map(function(r){return e(r,t[r.id])}).reduce(Se,!0)},e.prototype.format=function(t){function r(e){var r=e.value(t[e.id]),n=e.validates(r),i=e.isDefaultValue(r);return{param:e,value:r,isValid:n,isDefaultValue:i,squash:!!i&&e.squash,encoded:e.type.encode(r)}}void 0===t&&(t={});var n=this._cache.path,i=n.map(e.pathSegmentsAndParams).reduce(Re,[]).map(function(t){return Zt(t)?t:r(t)}),o=n.map(e.queryParams).reduce(Re,[]).map(r);if(i.concat(o).filter(function(t){return!1===t.isValid}).length)return null;var a=i.reduce(function(t,r){if(Zt(r))return t+r;var n=r.squash,i=r.encoded,o=r.param;return!0===n?t.match(/\/$/)?t.slice(0,-1):t:Zt(n)?t+n:!1!==n?t:null==i?t:te(i)?t+b(i,e.encodeDashes).join("-"):o.raw?t+i:t+encodeURIComponent(i)},""),u=o.map(function(t){var e=t.param,r=t.squash,n=t.encoded,i=t.isDefaultValue;if(!(null==n||i&&!1!==r)&&(te(n)||(n=[n]),0!==n.length))return e.raw||(n=b(n,encodeURIComponent)),n.map(function(t){return e.id+"="+t})}).filter(f).reduce(Re,[]).join("&");return a+(u?"?"+u:"")+(t["#"]?"#"+t["#"]:"")},e.encodeDashes=function(t){return encodeURIComponent(t).replace(/-/g,function(t){return"%5C%"+t.charCodeAt(0).toString(16).toUpperCase()})},e.pathSegmentsAndParams=function(e){return T(e._segments,e._params.filter(function(e){return e.location===t.DefType.PATH}).concat(void 0)).reduce(Re,[]).filter(function(t){return""!==t&&zt(t)})},e.queryParams=function(e){return e._params.filter(function(e){return e.location===t.DefType.SEARCH})},e.compare=function(t,r){var n=function(t){return t._cache.segments=t._cache.segments||t._cache.path.map(e.pathSegmentsAndParams).reduce(Re,[]).reduce(K,[]).map(function(t){return Zt(t)?Vr(t):t}).reduce(Re,[])},i=function(t){return t._cache.weights=t._cache.weights||n(t).map(function(t){return"/"===t?1:Zt(t)?2:t instanceof Xe?3:void 0})},o=i(t),a=i(r);!function(t,e,r){for(var n=Math.max(t.length,e.length);t.length<n;)t.push(r);for(;e.length<n;)e.push(r)}(o,a,0);var u,s,c=T(o,a);for(s=0;s<c.length;s++)if(0!=(u=c[s][0]-c[s][1]))return u;return 0},e.nameValidator=/^\w+([-.]+\w+)*(?:\[\])?$/,e}(),Hr=function(){function e(){var e=this;this.paramTypes=new Sr,this._isCaseInsensitive=!1,this._isStrictMode=!0,this._defaultSquashPolicy=!1,this._getConfig=function(t){return he({strict:e._isStrictMode,caseInsensitive:e._isCaseInsensitive},t)},this.paramFactory={fromConfig:function(r,n,i){return new Xe(r,n,i,t.DefType.CONFIG,e)},fromPath:function(r,n,i){return new Xe(r,n,i,t.DefType.PATH,e)},fromSearch:function(r,n,i){return new Xe(r,n,i,t.DefType.SEARCH,e)}},he(this,{UrlMatcher:Ar,Param:Xe})}return e.prototype.caseInsensitive=function(t){return this._isCaseInsensitive=zt(t)?t:this._isCaseInsensitive},e.prototype.strictMode=function(t){return this._isStrictMode=zt(t)?t:this._isStrictMode},e.prototype.defaultSquashPolicy=function(t){if(zt(t)&&!0!==t&&!1!==t&&!Zt(t))throw new Error("Invalid squash policy: "+t+". Valid policies: false, true, arbitrary-string");return this._defaultSquashPolicy=zt(t)?t:this._defaultSquashPolicy},e.prototype.compile=function(t,e){return new Ar(t,this.paramTypes,this.paramFactory,this._getConfig(e))},e.prototype.isMatcher=function(t){if(!Xt(t))return!1;var e=!0;return le(Ar.prototype,function(r,n){Kt(r)&&(e=e&&zt(t[n])&&Kt(t[n]))}),e},e.prototype.type=function(t,e,r){var n=this.paramTypes.type(t,e,r);return zt(e)?this:n},e.prototype.$get=function(){return this.paramTypes.enqueue=!1,this.paramTypes._flushTypeQueue(),this},e.prototype.dispose=function(){this.paramTypes.dispose()},e}(),qr=function(){function t(t){this.router=t}return t.prototype.compile=function(t){return this.router.urlMatcherFactory.compile(t)},t.prototype.create=function(t,e){var r=this,n=s([[Zt,function(t){return n(r.compile(t))}],[Ft(Ar),function(t){return r.fromUrlMatcher(t,e)}],[ne,function(t){return r.fromState(t,r.router)}],[Ft(RegExp),function(t){return r.fromRegExp(t,e)}],[Kt,function(t){return new Dr(t,e)}]]),i=n(t);if(!i)throw new Error("invalid 'what' in when()");return i},t.prototype.fromUrlMatcher=function(t,e){var r=e;Zt(e)&&(e=this.router.urlMatcherFactory.compile(e)),Ft(Ar)(e)&&(r=function(t){return e.format(t)});var n={urlMatcher:t,matchPriority:function(e){var r=t.parameters().filter(function(t){return t.isOptional});return r.length?r.filter(function(t){return e[t.id]}).length/r.length:1e-6},type:"URLMATCHER"};return he(new Dr(function(e){var r=t.exec(e.path,e.search,e.hash);return t.validates(r)&&r},r),n)},t.prototype.fromState=function(t,e){var r={state:t,type:"STATE"};return he(this.fromUrlMatcher(t.url,function(r){var n=e.stateService,i=e.globals;n.href(t,r)!==n.href(i.current,i.params)&&n.transitionTo(t,r,{inherit:!0,source:"url"})}),r)},t.prototype.fromRegExp=function(t,e){if(t.global||t.sticky)throw new Error("Rule RegExp must not be global or sticky");var r=Zt(e)?function(t){return e.replace(/\$(\$|\d{1,2})/,function(e,r){return t["$"===r?0:Number(r)]})}:e,n={regexp:t,type:"REGEXP"};return he(new Dr(function(e){return t.exec(e.path)},r),n)},t.isUrlRule=function(t){return t&&["type","match","handler"].every(function(e){return zt(t[e])})},t}(),Dr=function(){return function(t,e){var r=this;this.match=t,this.type="RAW",this.matchPriority=function(t){return 0-r.$id},this.handler=e||f}}(),Fr=function(t,e){return(e.priority||0)-(t.priority||0)},Nr=function(t,e){var r={STATE:4,URLMATCHER:4,REGEXP:3,RAW:2,OTHER:1};return(r[t.type]||0)-(r[e.type]||0)},Ur=function(t,e){return t.urlMatcher&&e.urlMatcher?Ar.compare(t.urlMatcher,e.urlMatcher):0},Lr=function(t,e){var r={STATE:!0,URLMATCHER:!0};return r[t.type]&&r[e.type]?0:(t.$id||0)-(e.$id||0)};br=function(t,e){var r=Fr(t,e);return 0!==r?r:0!==(r=Nr(t,e))?r:0!==(r=Ur(t,e))?r:Lr(t,e)};var Mr=function(){function t(e){this._sortFn=br,this._rules=[],this.interceptDeferred=!1,this._id=0,this._sorted=!1,this._router=e,this.urlRuleFactory=new qr(e),h(Ut(t.prototype),this,Ut(this))}return t.prototype.dispose=function(){this.listen(!1),this._rules=[],delete this._otherwiseFn},t.prototype.sort=function(t){this._rules=this.stableSort(this._rules,this._sortFn=t||this._sortFn),this._sorted=!0},t.prototype.ensureSorted=function(){this._sorted||this.sort()},t.prototype.stableSort=function(t,e){var r=t.map(function(t,e){return{elem:t,idx:e}});return r.sort(function(t,r){var n=e(t.elem,r.elem);return 0===n?t.idx-r.idx:n}),r.map(function(t){return t.elem})},t.prototype.match=function(t){var e=this;this.ensureSorted(),t=he({path:"",search:{},hash:""},t);var r=this.rules();this._otherwiseFn&&r.push(this._otherwiseFn);for(var n,i=0;i<r.length&&(!n||0===this._sortFn(r[i],n.rule));i++){var o=function(r){var n=r.match(t,e._router);return n&&{match:n,rule:r,weight:r.matchPriority(n)}}(r[i]);n=!n||o&&o.weight>n.weight?o:n}return n},t.prototype.sync=function(t){if(!t||!t.defaultPrevented){var e=this._router,r=e.urlService,n=e.stateService,i={path:r.path(),search:r.search(),hash:r.hash()},o=this.match(i);s([[Zt,function(t){return r.url(t,!0)}],[Ge.isDef,function(t){return n.go(t.state,t.params,t.options)}],[Ft(Ge),function(t){return n.go(t.state(),t.params(),t.options())}]])(o&&o.rule.handler(o.match,i,e))}},t.prototype.listen=function(t){var e=this;if(!1!==t)return this._stopFn=this._stopFn||this._router.urlService.onChange(function(t){return e.sync(t)});this._stopFn&&this._stopFn(),delete this._stopFn},t.prototype.update=function(t){var e=this._router.locationService;t?this.location=e.path():e.path()!==this.location&&e.url(this.location,!0)},t.prototype.push=function(t,e,r){var n=r&&!!r.replace;this._router.urlService.url(t.format(e||{}),n)},t.prototype.href=function(t,e,r){var n=t.format(e);if(null==n)return null;r=r||{absolute:!1};var i=this._router.urlService.config,o=i.html5Mode();if(o||null===n||(n="#"+i.hashPrefix()+n),n=it(n,o,r.absolute,i.baseHref()),!r.absolute||!n)return n;var a=!o&&n?"/":"",u=i.port();return u=80===u||443===u?"":":"+u,[i.protocol(),"://",i.host(),u,a,n].join("")},t.prototype.rule=function(t){var e=this;if(!qr.isUrlRule(t))throw new Error("invalid rule");return t.$id=this._id++,t.priority=t.priority||0,this._rules.push(t),this._sorted=!1,function(){return e.removeRule(t)}},t.prototype.removeRule=function(t){me(this._rules,t)},t.prototype.rules=function(){return this.ensureSorted(),this._rules.slice()},t.prototype.otherwise=function(t){var e=ot(t);this._otherwiseFn=this.urlRuleFactory.create(Ut(!0),e),this._sorted=!1},t.prototype.initial=function(t){var e=ot(t);this.rule(this.urlRuleFactory.create(function(t,e){return 0===e.globals.transitionHistory.size()&&!!/^\/?$/.exec(t.path)},e))},t.prototype.when=function(t,e,r){var n=this.urlRuleFactory.create(t,e);return zt(r&&r.priority)&&(n.priority=r.priority),this.rule(n),n},t.prototype.deferIntercept=function(t){void 0===t&&(t=!0),this.interceptDeferred=t},t}(),Br=function(){function t(){var t=this;this._uiViews=[],this._viewConfigs=[],this._viewConfigFactories={},this._pluginapi={_rootViewContext:this._rootViewContext.bind(this),_viewConfigFactory:this._viewConfigFactory.bind(this),_registeredUIViews:function(){return t._uiViews},_activeViewConfigs:function(){return t._viewConfigs}}}return t.prototype._rootViewContext=function(t){return this._rootContext=t||this._rootContext},t.prototype._viewConfigFactory=function(t,e){this._viewConfigFactories[t]=e},t.prototype.createViewConfig=function(t,e){var r=this._viewConfigFactories[e.$type];if(!r)throw new Error("ViewService: No view config factory registered for type "+e.$type);var n=r(t,e);return te(n)?n:[n]},t.prototype.deactivateViewConfig=function(t){Be.traceViewServiceEvent("<- Removing",t),me(this._viewConfigs,t)},t.prototype.activateViewConfig=function(t){Be.traceViewServiceEvent("-> Registering",t),this._viewConfigs.push(t)},t.prototype.sync=function(){function e(t){for(var e=t.viewDecl.$context,r=0;++r&&e.parent;)e=e.parent;return r}var n=this,i=this._uiViews.map(function(t){return[t.fqn,t]}).reduce(C,{}),o=r(function(t,e,r,n){return e*(t(r)-t(n))}),a=this._uiViews.sort(o(function(t){var e=function(t){return t&&t.parent?e(t.parent)+1:1};return 1e4*t.fqn.split(".").length+e(t.creationContext)},1)).map(function(r){var a=n._viewConfigs.filter(t.matches(i,r));return a.length>1&&a.sort(o(e,-1)),[r,a[0]]});Be.traceViewSync(a),a.forEach(function(t){var e=t[0],r=t[1];-1!==n._uiViews.indexOf(e)&&e.configUpdated(r)})},t.prototype.registerUIView=function(t){Be.traceViewServiceUIViewEvent("-> Registering",t);var e=this._uiViews;return e.filter(function(e){return e.fqn===t.fqn&&e.$type===t.$type}).length&&Be.traceViewServiceUIViewEvent("!!!! duplicate uiView named:",t),e.push(t),this.sync(),function(){-1!==e.indexOf(t)?(Be.traceViewServiceUIViewEvent("<- Deregistering",t),me(e)(t)):Be.traceViewServiceUIViewEvent("Tried removing non-registered uiView",t)}},t.prototype.available=function(){return this._uiViews.map(jt("fqn"))},t.prototype.active=function(){return this._uiViews.filter(jt("$config")).map(jt("name"))},t.normalizeUIViewTarget=function(t,e){void 0===e&&(e="");var r=e.split("@"),n=r[0]||"$default",i=Zt(r[1])?r[1]:"^",o=/^(\^(?:\.\^)*)\.(.*$)/.exec(n);return o&&(i=o[1],n=o[2]),"!"===n.charAt(0)&&(n=n.substr(1),i=""),/^(\^(?:\.\^)*)$/.exec(i)?i=i.split(".").reduce(function(t,e){return t.parent},t).name:"."===i&&(i=t.name),{uiViewName:n,uiViewContextAnchor:i}},t.matches=function(t,e){return function(r){if(e.$type!==r.viewDecl.$type)return!1;var n=r.viewDecl,i=n.$uiViewName.split("."),o=e.fqn.split(".");if(!pe(i,o.slice(0-i.length)))return!1;var a=1-i.length||void 0,u=o.slice(0,a).join("."),s=t[u].creationContext;return n.$uiViewContextAnchor===(s&&s.name)}},t}(),Gr=function(){function t(){this.params=new Rr,this.lastStartedTransitionId=-1,this.transitionHistory=new Ve([],1),this.successfulTransitions=new Ve([],1)}return t.prototype.dispose=function(){this.transitionHistory.clear(),this.successfulTransitions.clear(),this.transition=null},t}(),Wr=function(t){return t.reduce(function(t,e){return t[e]=oe(e),t},{dispose:l})},zr=["url","path","search","hash","onChange"],Jr=["port","protocol","host","baseHref","html5Mode","hashPrefix"],Qr=["type","caseInsensitive","strictMode","defaultSquashPolicy"],Kr=["sort","when","initial","otherwise","rules","rule","removeRule"],Yr=["deferIntercept","listen","sync","match"],Zr=function(){function t(t,e){void 0===e&&(e=!0),this.router=t,this.rules={},this.config={};var r=function(){return t.locationService};h(r,this,r,zr,e);var n=function(){return t.locationConfig};h(n,this.config,n,Jr,e);var i=function(){return t.urlMatcherFactory};h(i,this.config,i,Qr);var o=function(){return t.urlRouter};h(o,this.rules,o,Kr),h(o,this,o,Yr)}return t.prototype.url=function(t,e,r){},t.prototype.path=function(){},t.prototype.search=function(){},t.prototype.hash=function(){},t.prototype.onChange=function(t){},t.prototype.parts=function(){return{path:this.path(),search:this.search(),hash:this.hash()}},t.prototype.dispose=function(){},t.prototype.sync=function(t){},t.prototype.listen=function(t){},t.prototype.deferIntercept=function(t){},t.prototype.match=function(t){},t.locationServiceStub=Wr(zr),t.locationConfigStub=Wr(Jr),t}(),Xr=0,tn=function(){function t(t,e){void 0===t&&(t=Zr.locationServiceStub),void 0===e&&(e=Zr.locationConfigStub),this.locationService=t,this.locationConfig=e,this.$id=Xr++,this._disposed=!1,this._disposables=[],this.trace=Be,this.viewService=new Br,this.transitionService=new kn(this),this.globals=new Gr,this.urlMatcherFactory=new Hr,this.urlRouter=new Mr(this),this.stateRegistry=new Ir(this),this.stateService=new On(this),this.urlService=new Zr(this),this._plugins={},this.viewService._pluginapi._rootViewContext(this.stateRegistry.root()),this.globals.$current=this.stateRegistry.root(),this.globals.current=this.globals.$current.self,this.disposable(this.globals),this.disposable(this.stateService),this.disposable(this.stateRegistry),this.disposable(this.transitionService),this.disposable(this.urlRouter),this.disposable(t),this.disposable(e)}return t.prototype.disposable=function(t){this._disposables.push(t)},t.prototype.dispose=function(t){var e=this;t&&Kt(t.dispose)?t.dispose(this):(this._disposed=!0,this._disposables.slice().forEach(function(t){try{"function"==typeof t.dispose&&t.dispose(e),me(e._disposables,t)}catch(t){}}))},t.prototype.plugin=function(t,e){void 0===e&&(e={});var r=new t(this,e);if(!r.name)throw new Error("Required property `name` missing on plugin: "+r);return this._disposables.push(r),this._plugins[r.name]=r},t.prototype.getPlugin=function(t){return t?this._plugins[t]:$e(this._plugins)},t}(),en=function(t){return t.onCreate({},at)},rn=function(t){function e(e){if(e)return e instanceof Ge?e:Zt(e)?n.target(e,t.params(),t.options()):e.state||e.params?n.target(e.state||t.to(),e.params||t.params(),t.options()):void 0}var r=t.to().redirectTo;if(r){var n=t.router.stateService;return Kt(r)?ae.$q.when(r(t)).then(e):e(r)}},nn=function(t){return t.onStart({to:function(t){return!!t.redirectTo}},rn)},on=ut("onExit"),an=function(t){return t.onExit({exiting:function(t){return!!t.onExit}},on)},un=ut("onRetain"),sn=function(t){return t.onRetain({retained:function(t){return!!t.onRetain}},un)},cn=ut("onEnter"),fn=function(t){return t.onEnter({entering:function(t){return!!t.onEnter}},cn)},ln=function(t){return new cr(t.treeChanges().to).resolvePath("EAGER",t).then(l)},hn=function(t){return t.onStart({},ln,{priority:1e3})},pn=function(t,e){return new cr(t.treeChanges().to).subContext(e.$$state()).resolvePath("LAZY",t).then(l)},dn=function(t){return t.onEnter({entering:Ut(!0)},pn,{priority:1e3})},vn=function(t){var e=ae.$q,r=t.views("entering");if(r.length)return e.all(r.map(function(t){return e.when(t.load())})).then(l)},mn=function(t){return t.onFinish({},vn)},yn=function(t){var e=t.views("entering"),r=t.views("exiting");if(e.length||r.length){var n=t.router.viewService;r.forEach(function(t){return n.deactivateViewConfig(t)}),e.forEach(function(t){return n.activateViewConfig(t)}),n.sync()}},gn=function(t){return t.onSuccess({},yn)},_n=function(t){var e=t.router.globals,r=function(){e.transition===t&&(e.transition=null)};t.onSuccess({},function(){e.successfulTransitions.enqueue(t),e.$current=t.$to(),e.current=e.$current.self,k(t.params(),e.params)},{priority:1e4}),t.promise.then(r,r)},wn=function(t){return t.onCreate({},_n)},$n=function(t){var e=t.options(),r=t.router.stateService,n=t.router.urlRouter;if("url"!==e.source&&e.location&&r.$current.navigable){var i={replace:"replace"===e.location};n.push(r.$current.navigable.url,r.params,i)}n.update(!0)},Sn=function(t){return t.onSuccess({},$n,{priority:9999})},bn=function(t){var e=t.router,r=t.entering().filter(function(t){return!!t.$$state().lazyLoad}).map(function(e){return st(t,e)});return ae.$q.all(r).then(function(){if("url"!==t.originalTransition().options().source){var r=t.targetState();return e.stateService.target(r.identifier(),r.params(),r.options())}var n=e.urlService,i=n.match(n.parts()),o=i&&i.rule;if(o&&"STATE"===o.type){var a=o.state,u=i.match;return e.stateService.target(a,u,t.options())}e.urlService.sync()})},Rn=function(t){return t.onBefore({entering:function(t){return!!t.lazyLoad}},bn)},En=function(){return function(t,e,r,n,i,o,a,u){void 0===i&&(i=!1),void 0===o&&(o=ze.HANDLE_RESULT),void 0===a&&(a=ze.REJECT_ERROR),void 0===u&&(u=!1),this.name=t,this.hookPhase=e,this.hookOrder=r,this.criteriaMatchPath=n,this.reverseSort=i,this.getResultHandler=o,this.getErrorHandler=a,this.synchronous=u}}(),Tn=function(t){return t.onBefore({},ct,{priority:-9999})},Cn=function(t){return t.onBefore({},ft,{priority:-1e4})},Pn={location:!0,relative:null,inherit:!1,notify:!0,reload:!1,custom:{},current:function(){return null},source:"unknown"},kn=function(){function e(t){this._transitionCount=0,this._eventTypes=[],this._registeredHooks={},this._criteriaPaths={},this._router=t,this.$view=t.viewService,this._deregisterHookFns={},this._pluginapi=h(Ut(this),{},Ut(this),["_definePathType","_defineEvent","_getPathTypes","_getEvents","getHooks"]),this._defineCorePaths(),this._defineCoreEvents(),this._registerCoreTransitionHooks()}return e.prototype.onCreate=function(t,e,r){},e.prototype.onBefore=function(t,e,r){},e.prototype.onStart=function(t,e,r){},e.prototype.onExit=function(t,e,r){},e.prototype.onRetain=function(t,e,r){},e.prototype.onEnter=function(t,e,r){},e.prototype.onFinish=function(t,e,r){},e.prototype.onSuccess=function(t,e,r){},e.prototype.onError=function(t,e,r){},e.prototype.dispose=function(t){$e(this._registeredHooks).forEach(function(t){return t.forEach(function(e){e._deregistered=!0,me(t,e)})})},e.prototype.create=function(t,e){return new hr(t,e,this._router)},e.prototype._defineCoreEvents=function(){var e=t.TransitionHookPhase,r=ze,n=this._criteriaPaths;this._defineEvent("onCreate",e.CREATE,0,n.to,!1,r.LOG_REJECTED_RESULT,r.THROW_ERROR,!0),this._defineEvent("onBefore",e.BEFORE,0,n.to),this._defineEvent("onStart",e.RUN,0,n.to),this._defineEvent("onExit",e.RUN,100,n.exiting,!0),this._defineEvent("onRetain",e.RUN,200,n.retained),this._defineEvent("onEnter",e.RUN,300,n.entering),this._defineEvent("onFinish",e.RUN,400,n.to),this._defineEvent("onSuccess",e.SUCCESS,0,n.to,!1,r.LOG_REJECTED_RESULT,r.LOG_ERROR,!0),this._defineEvent("onError",e.ERROR,0,n.to,!1,r.LOG_REJECTED_RESULT,r.LOG_ERROR,!0)},e.prototype._defineCorePaths=function(){var e=t.TransitionHookScope.STATE,r=t.TransitionHookScope.TRANSITION;this._definePathType("to",r),this._definePathType("from",r),this._definePathType("exiting",e),this._definePathType("retained",e),this._definePathType("entering",e)},e.prototype._defineEvent=function(t,e,r,n,i,o,a,u){void 0===i&&(i=!1),void 0===o&&(o=ze.HANDLE_RESULT),void 0===a&&(a=ze.REJECT_ERROR),void 0===u&&(u=!1);var s=new En(t,e,r,n,i,o,a,u);this._eventTypes.push(s),H(this,this,s)},e.prototype._getEvents=function(t){return(zt(t)?this._eventTypes.filter(function(e){return e.hookPhase===t}):this._eventTypes.slice()).sort(function(t,e){var r=t.hookPhase-e.hookPhase;return 0===r?t.hookOrder-e.hookOrder:r})},e.prototype._definePathType=function(t,e){this._criteriaPaths[t]={name:t,scope:e}},e.prototype._getPathTypes=function(){return this._criteriaPaths},e.prototype.getHooks=function(t){return this._registeredHooks[t]},e.prototype._registerCoreTransitionHooks=function(){var t=this._deregisterHookFns;t.addCoreResolves=en(this),t.ignored=Tn(this),t.invalid=Cn(this),t.redirectTo=nn(this),t.onExit=an(this),t.onRetain=sn(this),t.onEnter=fn(this),t.eagerResolve=hn(this),t.lazyResolve=dn(this),t.loadViews=mn(this),t.activateViews=gn(this),t.updateGlobals=wn(this),t.updateUrl=Sn(this),t.lazyLoad=Rn(this)},e}(),On=function(){function e(t){this.router=t,this.invalidCallbacks=[],this._defaultErrorHandler=function(t){t instanceof Error&&t.stack?(console.error(t),console.error(t.stack)):t instanceof He?(console.error(t.toString()),t.detail&&t.detail.stack&&console.error(t.detail.stack)):console.error(t)};var r=["current","$current","params","transition"],n=Object.keys(e.prototype).filter(Ht(ve(r)));h(Ut(e.prototype),this,Ut(this),n)}return Object.defineProperty(e.prototype,"transition",{get:function(){return this.router.globals.transition},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"params",{get:function(){return this.router.globals.params},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"current",{get:function(){return this.router.globals.current},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"$current",{get:function(){return this.router.globals.$current},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){this.defaultErrorHandler(l),this.invalidCallbacks=[]},e.prototype._handleInvalidTargetState=function(t,e){function r(){var t=s.dequeue();return void 0===t?He.invalid(e.error()).toPromise():ae.$q.when(t(e,i,c)).then(f).then(function(t){return t||r()})}var n=this,i=er.makeTargetState(this.router.stateRegistry,t),o=this.router.globals,a=function(){return o.transitionHistory.peekTail()},u=a(),s=new Ve(this.invalidCallbacks.slice()),c=new cr(t).injector(),f=function(t){if(t instanceof Ge){var e=t;return(e=n.target(e.identifier(),e.params(),e.options())).valid()?a()!==u?He.superseded().toPromise():n.transitionTo(e.identifier(),e.params(),e.options()):He.invalid(e.error()).toPromise()}};return r()},e.prototype.onInvalid=function(t){return this.invalidCallbacks.push(t),function(){me(this.invalidCallbacks)(t)}.bind(this)},e.prototype.reload=function(t){return this.transitionTo(this.current,this.params,{reload:!zt(t)||t,inherit:!1,notify:!1})},e.prototype.go=function(t,e,r){var n=m(r,{relative:this.$current,inherit:!0},Pn);return this.transitionTo(t,e,n)},e.prototype.target=function(t,e,r){if(void 0===r&&(r={}),Xt(r.reload)&&!r.reload.name)throw new Error("Invalid reload state object");var n=this.router.stateRegistry;if(r.reloadState=!0===r.reload?n.root():n.matcher.find(r.reload,r.relative),r.reload&&!r.reloadState)throw new Error("No such reload state '"+(Zt(r.reload)?r.reload:r.reload.name)+"'");return new Ge(this.router.stateRegistry,t,e,r)},e.prototype.getCurrentPath=function(){var t=this,e=this.router.globals.successfulTransitions.peekTail();return e?e.treeChanges().to:[new tr(t.router.stateRegistry.root())]},e.prototype.transitionTo=function(e,r,n){var i=this;void 0===r&&(r={}),void 0===n&&(n={});var o=this.router,a=o.globals;n=m(n,Pn);n=he(n,{current:function(){return a.transition}});var u=this.target(e,r,n),s=this.getCurrentPath();if(!u.exists())return this._handleInvalidTargetState(s,u);if(!u.valid())return je(u.error());var c=function(e){return function(r){if(r instanceof He){var n=o.globals.lastStartedTransitionId===e.$id;if(r.type===t.RejectType.IGNORED)return n&&o.urlRouter.update(),ae.$q.when(a.current);var u=r.detail;if(r.type===t.RejectType.SUPERSEDED&&r.redirected&&u instanceof Ge){var s=e.redirect(u);return s.run().catch(c(s))}if(r.type===t.RejectType.ABORTED)return n&&o.urlRouter.update(),ae.$q.reject(r)}return i.defaultErrorHandler()(r),ae.$q.reject(r)}},f=this.router.transitionService.create(s,u),l=f.run().catch(c(f));return Ie(l),he(l,{transition:f})},e.prototype.is=function(t,e,r){r=m(r,{relative:this.$current});var n=this.router.stateRegistry.matcher.find(t,r.relative);if(zt(n)){if(this.$current!==n)return!1;if(!e)return!0;var i=n.parameters({inherit:!0,matchingKeys:e});return Xe.equals(i,Xe.values(i,e),this.params)}},e.prototype.includes=function(t,e,r){r=m(r,{relative:this.$current});var n=Zt(t)&&Lt.fromString(t);if(n){if(!n.matches(this.$current.name))return!1;t=this.$current.name}var i=this.router.stateRegistry.matcher.find(t,r.relative),o=this.$current.includes;if(zt(i)){if(!zt(o[i.name]))return!1;if(!e)return!0;var a=i.parameters({inherit:!0,matchingKeys:e});return Xe.equals(a,Xe.values(a,e),this.params)}},e.prototype.href=function(t,e,r){r=m(r,{lossy:!0,inherit:!0,absolute:!1,relative:this.$current}),e=e||{};var n=this.router.stateRegistry.matcher.find(t,r.relative);if(!zt(n))return null;r.inherit&&(e=this.params.$inherit(e,this.$current,n));var i=n&&r.lossy?n.navigable:n;return i&&void 0!==i.url&&null!==i.url?this.router.urlRouter.href(i.url,e,{absolute:r.absolute}):null},e.prototype.defaultErrorHandler=function(t){return this._defaultErrorHandler=t||this._defaultErrorHandler},e.prototype.get=function(t,e){var r=this.router.stateRegistry;return 0===arguments.length?r.get():r.get(t,e||this.$current)},e.prototype.lazyLoad=function(t,e){var r=this.get(t);if(!r||!r.lazyLoad)throw new Error("Can not lazy load "+t);var n=this.getCurrentPath(),i=er.makeTargetState(this.router.stateRegistry,n);return e=e||this.router.transitionService.create(n,i),st(e,r)},e}(),xn={when:function(t){return new Promise(function(e,r){return e(t)})},reject:function(t){return new Promise(function(e,r){r(t)})},defer:function(){var t={};return t.promise=new Promise(function(e,r){t.resolve=e,t.reject=r}),t},all:function(t){if(te(t))return Promise.all(t);if(Xt(t)){var e=Object.keys(t).map(function(e){return t[e].then(function(t){return{key:e,val:t}})});return xn.all(e).then(function(t){return t.reduce(function(t,e){return t[e.key]=e.val,t},{})})}}},In={},jn=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,Vn=/([^\s,]+)/g,An={get:function(t){return In[t]},has:function(t){return null!=An.get(t)},invoke:function(t,e,r){var n=he({},In,r||{}),i=An.annotate(t),o=ke(function(t){return n.hasOwnProperty(t)},function(t){return"DI can't find injectable: '"+t+"'"}),a=i.filter(o).map(function(t){return n[t]});return Kt(t)?t.apply(e,a):t.slice(-1)[0].apply(e,a)},annotate:function(t){if(!c(t))throw new Error("Not an injectable function: "+t);if(t&&t.$inject)return t.$inject;if(te(t))return t.slice(0,-1);var e=t.toString().replace(jn,"");return e.slice(e.indexOf("(")+1,e.indexOf(")")).match(Vn)||[]}},Hn=function(t,e){var r=e[0],n=e[1];return t.hasOwnProperty(r)?te(t[r])?t[r].push(n):t[r]=[t[r],n]:t[r]=n,t},qn=function(t){return t.split("&").filter(f).map(wr).reduce(Hn,{})},Dn=function(t){var e=t.path(),r=t.search(),n=t.hash(),i=Object.keys(r).map(function(t){var e=r[t];return(te(e)?e:[e]).map(function(e){return t+"="+e})}).reduce(Re,[]).join("&");return e+(i?"?"+i:"")+(n?"#"+n:"")},Fn=function(){function t(t,e){var r=this;this.fireAfterUpdate=e,this._listener=function(t){return r._listeners.forEach(function(e){return e(t)})},this._listeners=[],this.hash=function(){return lt(r._get()).hash},this.path=function(){return lt(r._get()).path},this.search=function(){return qn(lt(r._get()).search)},this._location=ue.location,this._history=ue.history}return t.prototype.url=function(t,e){return void 0===e&&(e=!0),zt(t)&&t!==this._get()&&(this._set(null,null,t,e),this.fireAfterUpdate&&this._listeners.forEach(function(e){return e({url:t})})),Dn(this)},t.prototype.onChange=function(t){var e=this;return this._listeners.push(t),function(){return me(e._listeners,t)}},t.prototype.dispose=function(t){ge(this._listeners)},t}(),Nn=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),Un=function(t){function e(e){var r=t.call(this,e,!1)||this;return ue.addEventListener("hashchange",r._listener,!1),r}return Nn(e,t),e.prototype._get=function(){return $r(this._location.hash)},e.prototype._set=function(t,e,r,n){this._location.hash=r},e.prototype.dispose=function(e){t.prototype.dispose.call(this,e),ue.removeEventListener("hashchange",this._listener)},e}(Fn),Ln=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),Mn=function(t){function e(e){return t.call(this,e,!0)||this}return Ln(e,t),e.prototype._get=function(){return this._url},e.prototype._set=function(t,e,r,n){this._url=r},e}(Fn),Bn=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),Gn=function(t){function e(e){var r=t.call(this,e,!0)||this;return r._config=e.urlService.config,ue.addEventListener("popstate",r._listener,!1),r}return Bn(e,t),e.prototype._getBasePrefix=function(){return yr(this._config.baseHref())},e.prototype._get=function(){var t=this._location,e=t.pathname,r=t.hash,n=t.search;n=_r(n)[1],r=gr(r)[1];var i=this._getBasePrefix(),o=e===this._config.baseHref(),a=e.startsWith(i);return(e=o?"/":a?e.substring(i.length):e)+(n?"?"+n:"")+(r?"#"+r:"")},e.prototype._set=function(t,e,r,n){var i=this._getBasePrefix()+r;n?this._history.replaceState(t,e,i):this._history.pushState(t,e,i)},e.prototype.dispose=function(e){t.prototype.dispose.call(this,e),ue.removeEventListener("popstate",this._listener)},e}(Fn),Wn=function(){return function(){var t=this;this._baseHref="",this._port=80,this._protocol="http",this._host="localhost",this._hashPrefix="",this.port=function(){return t._port},this.protocol=function(){return t._protocol},this.host=function(){return t._host},this.baseHref=function(){return t._baseHref},this.html5Mode=function(){return!1},this.hashPrefix=function(e){return zt(e)?t._hashPrefix=e:t._hashPrefix},this.dispose=l}}(),zn=function(){function t(t,e){void 0===e&&(e=!1),this._isHtml5=e,this._baseHref=void 0,this._hashPrefix=""}return t.prototype.port=function(){return location.port?Number(location.port):"https"===this.protocol()?443:80},t.prototype.protocol=function(){return location.protocol.replace(/:/g,"")},t.prototype.host=function(){return location.hostname},t.prototype.html5Mode=function(){return this._isHtml5},t.prototype.hashPrefix=function(t){return zt(t)?this._hashPrefix=t:this._hashPrefix},t.prototype.baseHref=function(t){return zt(t)?this._baseHref=t:zt(this._baseHref)?this._baseHref:this.applyDocumentBaseHref()},t.prototype.applyDocumentBaseHref=function(){var t=document.getElementsByTagName("base")[0];return this._baseHref=t?t.href.substr(location.origin.length):""},t.prototype.dispose=function(){},t}(),Jn=ht("vanilla.hashBangLocation",!1,Un,zn),Qn=ht("vanilla.pushStateLocation",!0,Gn,zn),Kn=ht("vanilla.memoryLocation",!1,Mn,Wn),Yn=function(){function t(){}return t.prototype.dispose=function(t){},t}(),Zn=Object.freeze({root:ue,fromJson:ce,toJson:fe,forEach:le,extend:he,equals:pe,identity:f,noop:l,createProxyFunctions:h,inherit:de,inArray:ve,_inArray:p,removeFrom:me,_removeFrom:d,pushTo:ye,_pushTo:v,deregAll:ge,defaults:m,mergeR:_e,ancestors:y,pick:g,omit:_,pluck:w,filter:$,find:S,mapObj:we,map:b,values:$e,allTrueR:Se,anyTrueR:be,unnestR:Re,flattenR:Ee,pushR:R,uniqR:Te,unnest:Ce,flatten:Pe,assertPredicate:ke,assertMap:Oe,assertFn:E,pairs:xe,arrayTuples:T,applyPairs:C,tail:P,copy:k,_extend:O,silenceUncaughtInPromise:Ie,silentRejection:je,notImplemented:oe,services:ae,Glob:Lt,curry:r,compose:n,pipe:i,prop:jt,propEq:Vt,parse:At,not:Ht,and:o,or:a,all:qt,any:Dt,is:Ft,eq:Nt,val:Ut,invoke:u,pattern:s,isUndefined:Wt,isDefined:zt,isNull:Jt,isNullOrUndefined:Qt,isFunction:Kt,isNumber:Yt,isString:Zt,isObject:Xt,isArray:te,isDate:ee,isRegExp:re,isState:ne,isInjectable:c,isPromise:ie,Queue:Ve,maxLength:M,padString:B,kebobString:G,functionToString:W,fnToString:z,stringify:J,beforeAfterSubstr:vr,hostRegex:mr,stripFile:yr,splitHash:gr,splitQuery:_r,splitEqual:wr,trimHashVal:$r,splitOnDelim:Q,joinNeighborsR:K,get Category(){return t.Category},Trace:Me,trace:Be,get DefType(){return t.DefType},Param:Xe,ParamTypes:Sr,StateParams:Rr,ParamType:Ke,PathNode:tr,PathUtils:er,resolvePolicies:ir,defaultResolvePolicy:rr,Resolvable:nr,NATIVE_INJECTOR_TOKEN:sr,ResolveContext:cr,resolvablesBuilder:rt,StateBuilder:kr,StateObject:Mt,StateMatcher:Or,StateQueueManager:xr,StateRegistry:Ir,StateService:On,TargetState:Ge,get TransitionHookPhase(){return t.TransitionHookPhase},get TransitionHookScope(){return t.TransitionHookScope},HookBuilder:Qe,matchState:A,RegisteredHook:Je,makeEvent:H,get RejectType(){return t.RejectType},Rejection:He,Transition:hr,TransitionHook:ze,TransitionEventType:En,defaultTransOpts:Pn,TransitionService:kn,UrlMatcher:Ar,UrlMatcherFactory:Hr,UrlRouter:Mr,UrlRuleFactory:qr,BaseUrlRule:Dr,UrlService:Zr,ViewService:Br,UIRouterGlobals:Gr,UIRouter:tn,$q:xn,$injector:An,BaseLocationServices:Fn,HashLocationService:Un,MemoryLocationService:Mn,PushStateLocationService:Gn,MemoryLocationConfig:Wn,BrowserLocationConfig:zn,keyValsToObjectR:Hn,getParams:qn,parseUrl:lt,buildUrl:Dn,locationPluginFactory:ht,servicesPlugin:pt,hashLocationPlugin:Jn,pushStateLocationPlugin:Qn,memoryLocationPlugin:Kn,UIRouterPluginBase:Yn}),Xn=function(t,e){return t.reduce(function(t,r){return t||zt(e[r])},!1)},ti=0,ei=function(){function t(t,e,r){var n=this;this.path=t,this.viewDecl=e,this.factory=r,this.$id=ti++,this.loaded=!1,this.getTemplate=function(t,e){return n.component?n.factory.makeComponentTemplate(t,e,n.component,n.viewDecl.bindings):n.template}}return t.prototype.load=function(){var t=this,e=ae.$q,r=new cr(this.path),n=this.path.reduce(function(t,e){return he(t,e.paramValues)},{}),i={template:e.when(this.factory.fromConfig(this.viewDecl,n,r)),controller:e.when(this.getController(r))};return e.all(i).then(function(e){return Be.traceViewServiceEvent("Loaded",t),t.controller=e.controller,he(t,e.template),t})},t.prototype.getController=function(t){var e=this.viewDecl.controllerProvider;if(!c(e))return this.viewDecl.controller;var r=ae.$injector.annotate(e),n=te(e)?P(e):e;return new nr("",n,r).get(t)},t}(),ri=function(){function t(){var t=this;this._useHttp=It.version.minor<3,this.$get=["$http","$templateCache","$injector",function(e,r,n){return t.$templateRequest=n.has&&n.has("$templateRequest")&&n.get("$templateRequest"),t.$http=e,t.$templateCache=r,t}]}return t.prototype.useHttpService=function(t){this._useHttp=t},t.prototype.fromConfig=function(t,e,r){var n=function(t){return ae.$q.when(t).then(function(t){return{template:t}})},i=function(t){return ae.$q.when(t).then(function(t){return{component:t}})};return zt(t.template)?n(this.fromString(t.template,e)):zt(t.templateUrl)?n(this.fromUrl(t.templateUrl,e)):zt(t.templateProvider)?n(this.fromProvider(t.templateProvider,e,r)):zt(t.component)?i(t.component):zt(t.componentProvider)?i(this.fromComponentProvider(t.componentProvider,e,r)):n("<ui-view></ui-view>")},t.prototype.fromString=function(t,e){return Kt(t)?t(e):t},t.prototype.fromUrl=function(t,e){return Kt(t)&&(t=t(e)),null==t?null:this._useHttp?this.$http.get(t,{cache:this.$templateCache,headers:{Accept:"text/html"}}).then(function(t){return t.data}):this.$templateRequest(t)},t.prototype.fromProvider=function(t,e,r){var n=ae.$injector.annotate(t),i=te(t)?P(t):t;return new nr("",i,n).get(r)},t.prototype.fromComponentProvider=function(t,e,r){var n=ae.$injector.annotate(t),i=te(t)?P(t):t;return new nr("",i,n).get(r)},t.prototype.makeComponentTemplate=function(t,e,r,n){n=n||{};var i=It.version.minor>=3?"::":"",o=function(t){var e=G(t);return/^(x|data)-/.exec(e)?"x-"+e:e},a=mt(r).map(function(r){var a=r.name,u=r.type,s=o(a);if(t.attr(s)&&!n[a])return s+"='"+t.attr(s)+"'";var c=n[a]||a;if("@"===u)return s+"='{{"+i+"$resolve."+c+"}}'";if("&"===u){var f=e.getResolvable(c),l=f&&f.data,h=l&&ae.$injector.annotate(l)||[];return s+"='$resolve."+c+(te(l)?"["+(l.length-1)+"]":"")+"("+h.join(",")+")'"}return s+"='"+i+"$resolve."+c+"'"}).join(" "),u=o(r);return"<"+u+" "+a+"></"+u+">"},t}(),ni=function(t){return ii(Xt(t.bindToController)?t.bindToController:t.scope)},ii=function(t){return Object.keys(t||{}).map(function(e){return[e,/^([=<@&])[?]?(.*)/.exec(t[e])]}).filter(function(t){return zt(t)&&te(t[1])}).map(function(t){return{name:t[1][2]||t[0],type:t[1][1]}})},oi=function(){function t(e,r){this.stateRegistry=e,this.stateService=r,h(Ut(t.prototype),this,Ut(this))}return t.prototype.decorator=function(t,e){return this.stateRegistry.decorator(t,e)||this},t.prototype.state=function(t,e){return Xt(t)?e=t:e.name=t,this.stateRegistry.register(e),this},t.prototype.onInvalid=function(t){return this.stateService.onInvalid(t)},t}(),ai=function(t){return function(e,r){var n=e[t],i="onExit"===t?"from":"to";return n?function(t,e){var r=new cr(t.treeChanges(i)),o=he(yi(r),{$state$:e,$transition$:t});return ae.$injector.invoke(n,this,o)}:void 0}},ui=function(){function t(t){this._urlListeners=[],this.$locationProvider=t;var e=Ut(t);h(e,this,e,["hashPrefix"])}return t.prototype.dispose=function(){},t.prototype.onChange=function(t){var e=this;return this._urlListeners.push(t),function(){return me(e._urlListeners)(t)}},t.prototype.html5Mode=function(){var t=this.$locationProvider.html5Mode();return(t=Xt(t)?t.enabled:t)&&this.$sniffer.history},t.prototype.url=function(t,e,r){return void 0===e&&(e=!1),t&&this.$location.url(t),e&&this.$location.replace(),r&&this.$location.state(r),this.$location.url()},t.prototype._runtimeServices=function(t,e,r,n){var i=this;this.$location=e,this.$sniffer=r,t.$on("$locationChangeSuccess",function(t){return i._urlListeners.forEach(function(e){return e(t)})});var o=Ut(e),a=Ut(n);h(o,this,o,["replace","path","search","hash"]),h(o,this,o,["port","protocol","host"]),h(a,this,a,["baseHref"])},t.monkeyPatchPathParameterType=function(t){var e=t.urlMatcherFactory.type("path");e.encode=function(t){return null!=t?t.toString().replace(/(~|\/)/g,function(t){return{"~":"~~","/":"~2F"}[t]}):t},e.decode=function(t){return null!=t?t.toString().replace(/(~~|~2F)/g,function(t){return{"~~":"~","~2F":"/"}[t]}):t}},t}(),si=function(){function t(t){this._router=t,this._urlRouter=t.urlRouter}return t.prototype.$get=function(){var t=this._urlRouter;return t.update(!0),t.interceptDeferred||t.listen(),t},t.prototype.rule=function(t){var e=this;if(!Kt(t))throw new Error("'rule' must be a function");var r=new Dr(function(){return t(ae.$injector,e._router.locationService)},f);return this._urlRouter.rule(r),this},t.prototype.otherwise=function(t){var e=this,r=this._urlRouter;if(Zt(t))r.otherwise(t);else{if(!Kt(t))throw new Error("'rule' must be a string or function");r.otherwise(function(){return t(ae.$injector,e._router.locationService)})}return this},t.prototype.when=function(e,r){return(te(r)||Kt(r))&&(r=t.injectableHandler(this._router,r)),this._urlRouter.when(e,r),this},t.injectableHandler=function(t,e){return function(r){return ae.$injector.invoke(e,null,{$match:r,$stateParams:t.globals.params})}},t.prototype.deferIntercept=function(t){this._urlRouter.deferIntercept(t)},t}();It.module("ui.router.angular1",[]);var ci=It.module("ui.router.init",[]),fi=It.module("ui.router.util",["ng","ui.router.init"]),li=It.module("ui.router.router",["ui.router.util"]),hi=It.module("ui.router.state",["ui.router.router","ui.router.util","ui.router.angular1"]),pi=It.module("ui.router",["ui.router.init","ui.router.state","ui.router.angular1"]),di=(It.module("ui.router.compat",["ui.router"]),null);yt.$inject=["$locationProvider"];var vi=function(t){return["$uiRouterProvider",function(e){var r=e.router[t];return r.$get=function(){return r},r}]};gt.$inject=["$injector","$q","$uiRouter"];_t.$inject=["$rootScope"],ci.provider("$uiRouter",yt),li.provider("$urlRouter",["$uiRouterProvider",function(t){return t.urlRouterProvider=new si(t)}]),fi.provider("$urlService",vi("urlService")),fi.provider("$urlMatcherFactory",["$uiRouterProvider",function(){return di.urlMatcherFactory}]),fi.provider("$templateFactory",function(){return new ri}),hi.provider("$stateRegistry",vi("stateRegistry")),hi.provider("$uiRouterGlobals",vi("globals")),hi.provider("$transitions",vi("transitionService")),hi.provider("$state",["$uiRouterProvider",function(){return he(di.stateProvider,{$get:function(){return di.stateService}})}]),hi.factory("$stateParams",["$uiRouter",function(t){return t.globals.params}]),pi.factory("$view",function(){return di.viewService}),pi.service("$trace",function(){return Be}),pi.run(_t),fi.run(["$urlMatcherFactory",function(t){}]),hi.run(["$state",function(t){}]),li.run(["$urlRouter",function(t){}]),ci.run(gt);var mi,yi=function(t){return t.getTokens().filter(Zt).map(function(e){var r=t.getResolvable(e);return[e,"NOWAIT"===t.getPolicy(r).async?r.promise:r.data]}).reduce(C,{})};mi=["$uiRouter","$timeout",function(t,e){var r=t.stateService;return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(n,i,o,a){function u(){var t=p();l&&l(),f&&(l=f.$$addStateInfo(t.uiState,t.uiStateParams)),null!=t.href&&o.$set(c.attr,t.href)}var s,c=bt(i),f=a[1]||a[0],l=null,h={},p=function(){return St(r,i,h)},d=wt(o.uiSref);h.uiState=d.state,h.uiStateOpts=o.uiSrefOpts?n.$eval(o.uiSrefOpts):{},d.paramExpr&&(n.$watch(d.paramExpr,function(t){h.uiStateParams=he({},t),u()},!0),h.uiStateParams=he({},n.$eval(d.paramExpr))),u(),n.$on("$destroy",t.stateRegistry.onStatesChanged(u)),n.$on("$destroy",t.transitionService.onSuccess({},u)),c.clickable&&(s=Rt(i,r,e,c,p),Tt(i,n,s,h.uiStateOpts))}}}];var gi;gi=["$uiRouter","$timeout",function(t,e){var r=t.stateService;return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(n,i,o,a){function u(){var t=d();h&&h(),f&&(h=f.$$addStateInfo(t.uiState,t.uiStateParams)),null!=t.href&&o.$set(c.attr,t.href)}var s,c=bt(i),f=a[1]||a[0],h=null,p={},d=function(){return St(r,i,p)},v=["uiState","uiStateParams","uiStateOpts"],m=v.reduce(function(t,e){return t[e]=l,t},{});v.forEach(function(t){p[t]=o[t]?n.$eval(o[t]):null,o.$observe(t,function(e){m[t](),m[t]=n.$watch(e,function(e){p[t]=e,u()},!0)})}),u(),n.$on("$destroy",t.stateRegistry.onStatesChanged(u)),n.$on("$destroy",t.transitionService.onSuccess({},u)),c.clickable&&(s=Rt(i,r,e,c,d),Tt(i,n,s,p.uiStateOpts))}}}];var _i;_i=["$state","$stateParams","$interpolate","$uiRouter",function(t,e,r,n){return{restrict:"A",controller:["$scope","$element","$attrs",function(e,i,o){function a(t){t.promise.then(s,l)}function u(e,r,n){var o={state:t.get(e,$t(i))||{name:e},params:r,activeClass:n};return p.push(o),function(){me(p)(o)}}function s(){var r=function(t){return t.split(/\s/).filter(f)},n=function(t){return t.map(function(t){return t.activeClass}).map(r).reduce(Re,[])},o=n(p).concat(r(c)).reduce(Te,[]),a=n(p.filter(function(e){return t.includes(e.state.name,e.params)})),u=!!p.filter(function(e){return t.is(e.state.name,e.params)}).length?r(c):[],s=a.concat(u).reduce(Te,[]),l=o.filter(function(t){return!ve(s,t)});e.$evalAsync(function(){s.forEach(function(t){return i.addClass(t)}),l.forEach(function(t){return i.removeClass(t)})})}var c,h,p=[];c=r(o.uiSrefActiveEq||"",!1)(e);try{h=e.$eval(o.uiSrefActive)}catch(t){}h=h||r(o.uiSrefActive||"",!1)(e),Xt(h)&&le(h,function(t,r){if(Zt(t)){var n=wt(t);u(n.state,e.$eval(n.paramExpr),r)}}),this.$$addStateInfo=function(t,e){if(!(Xt(h)&&p.length>0)){var r=u(t,e,h);return s(),r}},e.$on("$stateChangeSuccess",s),e.$on("$destroy",n.transitionService.onStart({},a)),n.globals.transition&&a(n.globals.transition),s()}]}}],It.module("ui.router.state").directive("uiSref",mi).directive("uiSrefActive",_i).directive("uiSrefActiveEq",_i).directive("uiState",gi),Ct.$inject=["$state"],Pt.$inject=["$state"],It.module("ui.router.state").filter("isState",Ct).filter("includedByState",Pt);var wi;wi=["$view","$animate","$uiViewScroll","$interpolate","$q",function(t,e,r,n,i){function o(t,r){return{enter:function(t,r,n){It.version.minor>2?e.enter(t,null,r).then(n):e.enter(t,null,r,n)},leave:function(t,r){It.version.minor>2?e.leave(t).then(r):e.leave(t,r)}}}function a(t,e){return t===e}var u={$cfg:{viewDecl:{$context:t._pluginapi._rootViewContext()}},$uiView:{}},s={count:0,restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(e,c,f){return function(e,c,l){function h(){if(d&&(Be.traceUIViewEvent("Removing (previous) el",d.data("$uiView")),d.remove(),d=null),m&&(Be.traceUIViewEvent("Destroying scope",R),m.$destroy(),m=null),v){var t=v.data("$uiViewAnim");Be.traceUIViewEvent("Animate out",t),w.leave(v,function(){t.$$animLeave.resolve(),d=null}),d=v,v=null}}function p(t){var n=e.$new(),o=i.defer(),a=i.defer(),u={$cfg:t,$uiView:R},s={$animEnter:o.promise,$animLeave:a.promise,$$animLeave:a};n.$emit("$viewContentLoading",b);var l=f(n,function(t){t.data("$uiViewAnim",s),t.data("$uiView",u),w.enter(t,c,function(){o.resolve(),m&&m.$emit("$viewContentAnimationEnded"),(zt(_)&&!_||e.$eval(_))&&r(t)}),h()});v=l,(m=n).$emit("$viewContentLoaded",t||$),m.$eval(g)}var d,v,m,y,g=l.onload||"",_=l.autoscroll,w=o(),$=void 0,S=c.inheritedData("$uiView")||u,b=n(l.uiView||l.name||"")(e)||"$default",R={$type:"ng1",id:s.count++,name:b,fqn:S.$uiView.fqn?S.$uiView.fqn+"."+b:b,config:null,configUpdated:function(t){(!t||t instanceof ei)&&(a($,t)||(Be.traceUIViewConfigUpdated(R,t&&t.viewDecl&&t.viewDecl.$context),$=t,p(t)))},get creationContext(){var t=At("$cfg.viewDecl.$context")(S),e=At("$uiView.creationContext")(S);return t||e}};Be.traceUIViewEvent("Linking",R),c.data("$uiView",{$uiView:R}),p(),y=t.registerUIView(R),e.$on("$destroy",function(){Be.traceUIViewEvent("Destroying/Unregistering",R),y()})}}};return s}],kt.$inject=["$compile","$controller","$transitions","$view","$q","$timeout"];var $i="function"==typeof It.module("ui.router").component,Si=0;It.module("ui.router.state").directive("uiView",wi),It.module("ui.router.state").directive("uiView",kt),It.module("ui.router.state").provider("$uiViewScroll",function(){var t=!1;this.useAnchorScroll=function(){t=!0},this.$get=["$anchorScroll","$timeout",function(e,r){return t?e:function(t){return r(function(){t[0].scrollIntoView()},0,!1)}}]});t.default="ui.router",t.core=Zn,t.watchDigests=_t,t.getLocals=yi,t.getNg1ViewConfigFactory=dt,t.ng1ViewsBuilder=vt,t.Ng1ViewConfig=ei,t.StateProvider=oi,t.UrlRouterProvider=si,t.root=ue,t.fromJson=ce,t.toJson=fe,t.forEach=le,t.extend=he,t.equals=pe,t.identity=f,t.noop=l,t.createProxyFunctions=h,t.inherit=de,t.inArray=ve,t._inArray=p,t.removeFrom=me,t._removeFrom=d,t.pushTo=ye,t._pushTo=v,t.deregAll=ge,t.defaults=m,t.mergeR=_e,t.ancestors=y,t.pick=g,t.omit=_,t.pluck=w,t.filter=$,t.find=S,t.mapObj=we,t.map=b,t.values=$e,t.allTrueR=Se,t.anyTrueR=be,t.unnestR=Re,t.flattenR=Ee,t.pushR=R,t.uniqR=Te,t.unnest=Ce,t.flatten=Pe,t.assertPredicate=ke,t.assertMap=Oe,t.assertFn=E,t.pairs=xe,t.arrayTuples=T,t.applyPairs=C,t.tail=P,t.copy=k,t._extend=O,t.silenceUncaughtInPromise=Ie,t.silentRejection=je,t.notImplemented=oe,t.services=ae,t.Glob=Lt,t.curry=r,t.compose=n,t.pipe=i,t.prop=jt,t.propEq=Vt,t.parse=At,t.not=Ht,t.and=o,t.or=a,t.all=qt,t.any=Dt,t.is=Ft,t.eq=Nt,t.val=Ut,t.invoke=u,t.pattern=s,t.isUndefined=Wt,t.isDefined=zt,t.isNull=Jt,t.isNullOrUndefined=Qt,t.isFunction=Kt,t.isNumber=Yt,t.isString=Zt,t.isObject=Xt,t.isArray=te,t.isDate=ee,t.isRegExp=re,t.isState=ne,t.isInjectable=c,t.isPromise=ie,t.Queue=Ve,t.maxLength=M,t.padString=B,t.kebobString=G,t.functionToString=W,t.fnToString=z,t.stringify=J,t.beforeAfterSubstr=vr,t.hostRegex=mr,t.stripFile=yr,t.splitHash=gr,t.splitQuery=_r,t.splitEqual=wr,t.trimHashVal=$r,t.splitOnDelim=Q,t.joinNeighborsR=K,t.Trace=Me,t.trace=Be,t.Param=Xe,t.ParamTypes=Sr,t.StateParams=Rr,t.ParamType=Ke,t.PathNode=tr,t.PathUtils=er,t.resolvePolicies=ir,t.defaultResolvePolicy=rr,t.Resolvable=nr,t.NATIVE_INJECTOR_TOKEN=sr,t.ResolveContext=cr,t.resolvablesBuilder=rt,t.StateBuilder=kr,t.StateObject=Mt,t.StateMatcher=Or,t.StateQueueManager=xr,t.StateRegistry=Ir,t.StateService=On,t.TargetState=Ge,t.HookBuilder=Qe,t.matchState=A,t.RegisteredHook=Je,t.makeEvent=H,t.Rejection=He,t.Transition=hr,t.TransitionHook=ze,t.TransitionEventType=En,t.defaultTransOpts=Pn,t.TransitionService=kn,t.UrlMatcher=Ar,t.UrlMatcherFactory=Hr,t.UrlRouter=Mr,t.UrlRuleFactory=qr,t.BaseUrlRule=Dr,t.UrlService=Zr,t.ViewService=Br,t.UIRouterGlobals=Gr,t.UIRouter=tn,t.$q=xn,t.$injector=An,t.BaseLocationServices=Fn,t.HashLocationService=Un,t.MemoryLocationService=Mn,t.PushStateLocationService=Gn,t.MemoryLocationConfig=Wn,t.BrowserLocationConfig=zn,t.keyValsToObjectR=Hn,t.getParams=qn,t.parseUrl=lt,t.buildUrl=Dn,t.locationPluginFactory=ht,t.servicesPlugin=pt,t.hashLocationPlugin=Jn,t.pushStateLocationPlugin=Qn,t.memoryLocationPlugin=Kn,t.UIRouterPluginBase=Yn,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=angular-ui-router.min.js.map

/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 2.5.0 - 2017-01-28
 * License: MIT
 */angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.collapse","ui.bootstrap.tabindex","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.isClass","ui.bootstrap.datepicker","ui.bootstrap.position","ui.bootstrap.datepickerPopup","ui.bootstrap.debounce","ui.bootstrap.multiMap","ui.bootstrap.dropdown","ui.bootstrap.stackedMap","ui.bootstrap.modal","ui.bootstrap.paging","ui.bootstrap.pager","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]);
angular.module("ui.bootstrap.tpls", ["uib/template/accordion/accordion-group.html","uib/template/accordion/accordion.html","uib/template/alert/alert.html","uib/template/carousel/carousel.html","uib/template/carousel/slide.html","uib/template/datepicker/datepicker.html","uib/template/datepicker/day.html","uib/template/datepicker/month.html","uib/template/datepicker/year.html","uib/template/datepickerPopup/popup.html","uib/template/modal/window.html","uib/template/pager/pager.html","uib/template/pagination/pagination.html","uib/template/tooltip/tooltip-html-popup.html","uib/template/tooltip/tooltip-popup.html","uib/template/tooltip/tooltip-template-popup.html","uib/template/popover/popover-html.html","uib/template/popover/popover-template.html","uib/template/popover/popover.html","uib/template/progressbar/bar.html","uib/template/progressbar/progress.html","uib/template/progressbar/progressbar.html","uib/template/rating/rating.html","uib/template/tabs/tab.html","uib/template/tabs/tabset.html","uib/template/timepicker/timepicker.html","uib/template/typeahead/typeahead-match.html","uib/template/typeahead/typeahead-popup.html"]);
angular.module('ui.bootstrap.collapse', [])

  .directive('uibCollapse', ['$animate', '$q', '$parse', '$injector', function($animate, $q, $parse, $injector) {
    var $animateCss = $injector.has('$animateCss') ? $injector.get('$animateCss') : null;
    return {
      link: function(scope, element, attrs) {
        var expandingExpr = $parse(attrs.expanding),
          expandedExpr = $parse(attrs.expanded),
          collapsingExpr = $parse(attrs.collapsing),
          collapsedExpr = $parse(attrs.collapsed),
          horizontal = false,
          css = {},
          cssTo = {};

        init();

        function init() {
          horizontal = !!('horizontal' in attrs);
          if (horizontal) {
            css = {
              width: ''
            };
            cssTo = {width: '0'};
          } else {
            css = {
              height: ''
            };
            cssTo = {height: '0'};
          }
          if (!scope.$eval(attrs.uibCollapse)) {
            element.addClass('in')
              .addClass('collapse')
              .attr('aria-expanded', true)
              .attr('aria-hidden', false)
              .css(css);
          }
        }

        function getScrollFromElement(element) {
          if (horizontal) {
            return {width: element.scrollWidth + 'px'};
          }
          return {height: element.scrollHeight + 'px'};
        }

        function expand() {
          if (element.hasClass('collapse') && element.hasClass('in')) {
            return;
          }

          $q.resolve(expandingExpr(scope))
            .then(function() {
              element.removeClass('collapse')
                .addClass('collapsing')
                .attr('aria-expanded', true)
                .attr('aria-hidden', false);

              if ($animateCss) {
                $animateCss(element, {
                  addClass: 'in',
                  easing: 'ease',
                  css: {
                    overflow: 'hidden'
                  },
                  to: getScrollFromElement(element[0])
                }).start()['finally'](expandDone);
              } else {
                $animate.addClass(element, 'in', {
                  css: {
                    overflow: 'hidden'
                  },
                  to: getScrollFromElement(element[0])
                }).then(expandDone);
              }
            }, angular.noop);
        }

        function expandDone() {
          element.removeClass('collapsing')
            .addClass('collapse')
            .css(css);
          expandedExpr(scope);
        }

        function collapse() {
          if (!element.hasClass('collapse') && !element.hasClass('in')) {
            return collapseDone();
          }

          $q.resolve(collapsingExpr(scope))
            .then(function() {
              element
              // IMPORTANT: The width must be set before adding "collapsing" class.
              // Otherwise, the browser attempts to animate from width 0 (in
              // collapsing class) to the given width here.
                .css(getScrollFromElement(element[0]))
                // initially all panel collapse have the collapse class, this removal
                // prevents the animation from jumping to collapsed state
                .removeClass('collapse')
                .addClass('collapsing')
                .attr('aria-expanded', false)
                .attr('aria-hidden', true);

              if ($animateCss) {
                $animateCss(element, {
                  removeClass: 'in',
                  to: cssTo
                }).start()['finally'](collapseDone);
              } else {
                $animate.removeClass(element, 'in', {
                  to: cssTo
                }).then(collapseDone);
              }
            }, angular.noop);
        }

        function collapseDone() {
          element.css(cssTo); // Required so that collapse works when animation is disabled
          element.removeClass('collapsing')
            .addClass('collapse');
          collapsedExpr(scope);
        }

        scope.$watch(attrs.uibCollapse, function(shouldCollapse) {
          if (shouldCollapse) {
            collapse();
          } else {
            expand();
          }
        });
      }
    };
  }]);

angular.module('ui.bootstrap.tabindex', [])

.directive('uibTabindexToggle', function() {
  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      attrs.$observe('disabled', function(disabled) {
        attrs.$set('tabindex', disabled ? -1 : null);
      });
    }
  };
});

angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse', 'ui.bootstrap.tabindex'])

.constant('uibAccordionConfig', {
  closeOthers: true
})

.controller('UibAccordionController', ['$scope', '$attrs', 'uibAccordionConfig', function($scope, $attrs, accordionConfig) {
  // This array keeps track of the accordion groups
  this.groups = [];

  // Ensure that all the groups in this accordion are closed, unless close-others explicitly says not to
  this.closeOthers = function(openGroup) {
    var closeOthers = angular.isDefined($attrs.closeOthers) ?
      $scope.$eval($attrs.closeOthers) : accordionConfig.closeOthers;
    if (closeOthers) {
      angular.forEach(this.groups, function(group) {
        if (group !== openGroup) {
          group.isOpen = false;
        }
      });
    }
  };

  // This is called from the accordion-group directive to add itself to the accordion
  this.addGroup = function(groupScope) {
    var that = this;
    this.groups.push(groupScope);

    groupScope.$on('$destroy', function(event) {
      that.removeGroup(groupScope);
    });
  };

  // This is called from the accordion-group directive when to remove itself
  this.removeGroup = function(group) {
    var index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  };
}])

// The accordion directive simply sets up the directive controller
// and adds an accordion CSS class to itself element.
.directive('uibAccordion', function() {
  return {
    controller: 'UibAccordionController',
    controllerAs: 'accordion',
    transclude: true,
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/accordion/accordion.html';
    }
  };
})

// The accordion-group directive indicates a block of html that will expand and collapse in an accordion
.directive('uibAccordionGroup', function() {
  return {
    require: '^uibAccordion',         // We need this directive to be inside an accordion
    transclude: true,              // It transcludes the contents of the directive into the template
    restrict: 'A',
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/accordion/accordion-group.html';
    },
    scope: {
      heading: '@',               // Interpolate the heading attribute onto this scope
      panelClass: '@?',           // Ditto with panelClass
      isOpen: '=?',
      isDisabled: '=?'
    },
    controller: function() {
      this.setHeading = function(element) {
        this.heading = element;
      };
    },
    link: function(scope, element, attrs, accordionCtrl) {
      element.addClass('panel');
      accordionCtrl.addGroup(scope);

      scope.openClass = attrs.openClass || 'panel-open';
      scope.panelClass = attrs.panelClass || 'panel-default';
      scope.$watch('isOpen', function(value) {
        element.toggleClass(scope.openClass, !!value);
        if (value) {
          accordionCtrl.closeOthers(scope);
        }
      });

      scope.toggleOpen = function($event) {
        if (!scope.isDisabled) {
          if (!$event || $event.which === 32) {
            scope.isOpen = !scope.isOpen;
          }
        }
      };

      var id = 'accordiongroup-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
      scope.headingId = id + '-tab';
      scope.panelId = id + '-panel';
    }
  };
})

// Use accordion-heading below an accordion-group to provide a heading containing HTML
.directive('uibAccordionHeading', function() {
  return {
    transclude: true,   // Grab the contents to be used as the heading
    template: '',       // In effect remove this element!
    replace: true,
    require: '^uibAccordionGroup',
    link: function(scope, element, attrs, accordionGroupCtrl, transclude) {
      // Pass the heading to the accordion-group controller
      // so that it can be transcluded into the right place in the template
      // [The second parameter to transclude causes the elements to be cloned so that they work in ng-repeat]
      accordionGroupCtrl.setHeading(transclude(scope, angular.noop));
    }
  };
})

// Use in the accordion-group template to indicate where you want the heading to be transcluded
// You must provide the property on the accordion-group controller that will hold the transcluded element
.directive('uibAccordionTransclude', function() {
  return {
    require: '^uibAccordionGroup',
    link: function(scope, element, attrs, controller) {
      scope.$watch(function() { return controller[attrs.uibAccordionTransclude]; }, function(heading) {
        if (heading) {
          var elem = angular.element(element[0].querySelector(getHeaderSelectors()));
          elem.html('');
          elem.append(heading);
        }
      });
    }
  };

  function getHeaderSelectors() {
      return 'uib-accordion-header,' +
          'data-uib-accordion-header,' +
          'x-uib-accordion-header,' +
          'uib\\:accordion-header,' +
          '[uib-accordion-header],' +
          '[data-uib-accordion-header],' +
          '[x-uib-accordion-header]';
  }
});

angular.module('ui.bootstrap.alert', [])

.controller('UibAlertController', ['$scope', '$element', '$attrs', '$interpolate', '$timeout', function($scope, $element, $attrs, $interpolate, $timeout) {
  $scope.closeable = !!$attrs.close;
  $element.addClass('alert');
  $attrs.$set('role', 'alert');
  if ($scope.closeable) {
    $element.addClass('alert-dismissible');
  }

  var dismissOnTimeout = angular.isDefined($attrs.dismissOnTimeout) ?
    $interpolate($attrs.dismissOnTimeout)($scope.$parent) : null;

  if (dismissOnTimeout) {
    $timeout(function() {
      $scope.close();
    }, parseInt(dismissOnTimeout, 10));
  }
}])

.directive('uibAlert', function() {
  return {
    controller: 'UibAlertController',
    controllerAs: 'alert',
    restrict: 'A',
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/alert/alert.html';
    },
    transclude: true,
    scope: {
      close: '&'
    }
  };
});

angular.module('ui.bootstrap.buttons', [])

.constant('uibButtonConfig', {
  activeClass: 'active',
  toggleEvent: 'click'
})

.controller('UibButtonsController', ['uibButtonConfig', function(buttonConfig) {
  this.activeClass = buttonConfig.activeClass || 'active';
  this.toggleEvent = buttonConfig.toggleEvent || 'click';
}])

.directive('uibBtnRadio', ['$parse', function($parse) {
  return {
    require: ['uibBtnRadio', 'ngModel'],
    controller: 'UibButtonsController',
    controllerAs: 'buttons',
    link: function(scope, element, attrs, ctrls) {
      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];
      var uncheckableExpr = $parse(attrs.uibUncheckable);

      element.find('input').css({display: 'none'});

      //model -> UI
      ngModelCtrl.$render = function() {
        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.uibBtnRadio)));
      };

      //ui->model
      element.on(buttonsCtrl.toggleEvent, function() {
        if (attrs.disabled) {
          return;
        }

        var isActive = element.hasClass(buttonsCtrl.activeClass);

        if (!isActive || angular.isDefined(attrs.uncheckable)) {
          scope.$apply(function() {
            ngModelCtrl.$setViewValue(isActive ? null : scope.$eval(attrs.uibBtnRadio));
            ngModelCtrl.$render();
          });
        }
      });

      if (attrs.uibUncheckable) {
        scope.$watch(uncheckableExpr, function(uncheckable) {
          attrs.$set('uncheckable', uncheckable ? '' : undefined);
        });
      }
    }
  };
}])

.directive('uibBtnCheckbox', function() {
  return {
    require: ['uibBtnCheckbox', 'ngModel'],
    controller: 'UibButtonsController',
    controllerAs: 'button',
    link: function(scope, element, attrs, ctrls) {
      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      element.find('input').css({display: 'none'});

      function getTrueValue() {
        return getCheckboxValue(attrs.btnCheckboxTrue, true);
      }

      function getFalseValue() {
        return getCheckboxValue(attrs.btnCheckboxFalse, false);
      }

      function getCheckboxValue(attribute, defaultValue) {
        return angular.isDefined(attribute) ? scope.$eval(attribute) : defaultValue;
      }

      //model -> UI
      ngModelCtrl.$render = function() {
        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
      };

      //ui->model
      element.on(buttonsCtrl.toggleEvent, function() {
        if (attrs.disabled) {
          return;
        }

        scope.$apply(function() {
          ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue());
          ngModelCtrl.$render();
        });
      });
    }
  };
});

angular.module('ui.bootstrap.carousel', [])

.controller('UibCarouselController', ['$scope', '$element', '$interval', '$timeout', '$animate', function($scope, $element, $interval, $timeout, $animate) {
  var self = this,
    slides = self.slides = $scope.slides = [],
    SLIDE_DIRECTION = 'uib-slideDirection',
    currentIndex = $scope.active,
    currentInterval, isPlaying;

  var destroyed = false;
  $element.addClass('carousel');

  self.addSlide = function(slide, element) {
    slides.push({
      slide: slide,
      element: element
    });
    slides.sort(function(a, b) {
      return +a.slide.index - +b.slide.index;
    });
    //if this is the first slide or the slide is set to active, select it
    if (slide.index === $scope.active || slides.length === 1 && !angular.isNumber($scope.active)) {
      if ($scope.$currentTransition) {
        $scope.$currentTransition = null;
      }

      currentIndex = slide.index;
      $scope.active = slide.index;
      setActive(currentIndex);
      self.select(slides[findSlideIndex(slide)]);
      if (slides.length === 1) {
        $scope.play();
      }
    }
  };

  self.getCurrentIndex = function() {
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].slide.index === currentIndex) {
        return i;
      }
    }
  };

  self.next = $scope.next = function() {
    var newIndex = (self.getCurrentIndex() + 1) % slides.length;

    if (newIndex === 0 && $scope.noWrap()) {
      $scope.pause();
      return;
    }

    return self.select(slides[newIndex], 'next');
  };

  self.prev = $scope.prev = function() {
    var newIndex = self.getCurrentIndex() - 1 < 0 ? slides.length - 1 : self.getCurrentIndex() - 1;

    if ($scope.noWrap() && newIndex === slides.length - 1) {
      $scope.pause();
      return;
    }

    return self.select(slides[newIndex], 'prev');
  };

  self.removeSlide = function(slide) {
    var index = findSlideIndex(slide);

    //get the index of the slide inside the carousel
    slides.splice(index, 1);
    if (slides.length > 0 && currentIndex === index) {
      if (index >= slides.length) {
        currentIndex = slides.length - 1;
        $scope.active = currentIndex;
        setActive(currentIndex);
        self.select(slides[slides.length - 1]);
      } else {
        currentIndex = index;
        $scope.active = currentIndex;
        setActive(currentIndex);
        self.select(slides[index]);
      }
    } else if (currentIndex > index) {
      currentIndex--;
      $scope.active = currentIndex;
    }

    //clean the active value when no more slide
    if (slides.length === 0) {
      currentIndex = null;
      $scope.active = null;
    }
  };

  /* direction: "prev" or "next" */
  self.select = $scope.select = function(nextSlide, direction) {
    var nextIndex = findSlideIndex(nextSlide.slide);
    //Decide direction if it's not given
    if (direction === undefined) {
      direction = nextIndex > self.getCurrentIndex() ? 'next' : 'prev';
    }
    //Prevent this user-triggered transition from occurring if there is already one in progress
    if (nextSlide.slide.index !== currentIndex &&
      !$scope.$currentTransition) {
      goNext(nextSlide.slide, nextIndex, direction);
    }
  };

  /* Allow outside people to call indexOf on slides array */
  $scope.indexOfSlide = function(slide) {
    return +slide.slide.index;
  };

  $scope.isActive = function(slide) {
    return $scope.active === slide.slide.index;
  };

  $scope.isPrevDisabled = function() {
    return $scope.active === 0 && $scope.noWrap();
  };

  $scope.isNextDisabled = function() {
    return $scope.active === slides.length - 1 && $scope.noWrap();
  };

  $scope.pause = function() {
    if (!$scope.noPause) {
      isPlaying = false;
      resetTimer();
    }
  };

  $scope.play = function() {
    if (!isPlaying) {
      isPlaying = true;
      restartTimer();
    }
  };

  $element.on('mouseenter', $scope.pause);
  $element.on('mouseleave', $scope.play);

  $scope.$on('$destroy', function() {
    destroyed = true;
    resetTimer();
  });

  $scope.$watch('noTransition', function(noTransition) {
    $animate.enabled($element, !noTransition);
  });

  $scope.$watch('interval', restartTimer);

  $scope.$watchCollection('slides', resetTransition);

  $scope.$watch('active', function(index) {
    if (angular.isNumber(index) && currentIndex !== index) {
      for (var i = 0; i < slides.length; i++) {
        if (slides[i].slide.index === index) {
          index = i;
          break;
        }
      }

      var slide = slides[index];
      if (slide) {
        setActive(index);
        self.select(slides[index]);
        currentIndex = index;
      }
    }
  });

  function getSlideByIndex(index) {
    for (var i = 0, l = slides.length; i < l; ++i) {
      if (slides[i].index === index) {
        return slides[i];
      }
    }
  }

  function setActive(index) {
    for (var i = 0; i < slides.length; i++) {
      slides[i].slide.active = i === index;
    }
  }

  function goNext(slide, index, direction) {
    if (destroyed) {
      return;
    }

    angular.extend(slide, {direction: direction});
    angular.extend(slides[currentIndex].slide || {}, {direction: direction});
    if ($animate.enabled($element) && !$scope.$currentTransition &&
      slides[index].element && self.slides.length > 1) {
      slides[index].element.data(SLIDE_DIRECTION, slide.direction);
      var currentIdx = self.getCurrentIndex();

      if (angular.isNumber(currentIdx) && slides[currentIdx].element) {
        slides[currentIdx].element.data(SLIDE_DIRECTION, slide.direction);
      }

      $scope.$currentTransition = true;
      $animate.on('addClass', slides[index].element, function(element, phase) {
        if (phase === 'close') {
          $scope.$currentTransition = null;
          $animate.off('addClass', element);
        }
      });
    }

    $scope.active = slide.index;
    currentIndex = slide.index;
    setActive(index);

    //every time you change slides, reset the timer
    restartTimer();
  }

  function findSlideIndex(slide) {
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].slide === slide) {
        return i;
      }
    }
  }

  function resetTimer() {
    if (currentInterval) {
      $interval.cancel(currentInterval);
      currentInterval = null;
    }
  }

  function resetTransition(slides) {
    if (!slides.length) {
      $scope.$currentTransition = null;
    }
  }

  function restartTimer() {
    resetTimer();
    var interval = +$scope.interval;
    if (!isNaN(interval) && interval > 0) {
      currentInterval = $interval(timerFn, interval);
    }
  }

  function timerFn() {
    var interval = +$scope.interval;
    if (isPlaying && !isNaN(interval) && interval > 0 && slides.length) {
      $scope.next();
    } else {
      $scope.pause();
    }
  }
}])

.directive('uibCarousel', function() {
  return {
    transclude: true,
    controller: 'UibCarouselController',
    controllerAs: 'carousel',
    restrict: 'A',
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/carousel/carousel.html';
    },
    scope: {
      active: '=',
      interval: '=',
      noTransition: '=',
      noPause: '=',
      noWrap: '&'
    }
  };
})

.directive('uibSlide', ['$animate', function($animate) {
  return {
    require: '^uibCarousel',
    restrict: 'A',
    transclude: true,
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/carousel/slide.html';
    },
    scope: {
      actual: '=?',
      index: '=?'
    },
    link: function (scope, element, attrs, carouselCtrl) {
      element.addClass('item');
      carouselCtrl.addSlide(scope, element);
      //when the scope is destroyed then remove the slide from the current slides array
      scope.$on('$destroy', function() {
        carouselCtrl.removeSlide(scope);
      });

      scope.$watch('active', function(active) {
        $animate[active ? 'addClass' : 'removeClass'](element, 'active');
      });
    }
  };
}])

.animation('.item', ['$animateCss',
function($animateCss) {
  var SLIDE_DIRECTION = 'uib-slideDirection';

  function removeClass(element, className, callback) {
    element.removeClass(className);
    if (callback) {
      callback();
    }
  }

  return {
    beforeAddClass: function(element, className, done) {
      if (className === 'active') {
        var stopped = false;
        var direction = element.data(SLIDE_DIRECTION);
        var directionClass = direction === 'next' ? 'left' : 'right';
        var removeClassFn = removeClass.bind(this, element,
          directionClass + ' ' + direction, done);
        element.addClass(direction);

        $animateCss(element, {addClass: directionClass})
          .start()
          .done(removeClassFn);

        return function() {
          stopped = true;
        };
      }
      done();
    },
    beforeRemoveClass: function (element, className, done) {
      if (className === 'active') {
        var stopped = false;
        var direction = element.data(SLIDE_DIRECTION);
        var directionClass = direction === 'next' ? 'left' : 'right';
        var removeClassFn = removeClass.bind(this, element, directionClass, done);

        $animateCss(element, {addClass: directionClass})
          .start()
          .done(removeClassFn);

        return function() {
          stopped = true;
        };
      }
      done();
    }
  };
}]);

angular.module('ui.bootstrap.dateparser', [])

.service('uibDateParser', ['$log', '$locale', 'dateFilter', 'orderByFilter', 'filterFilter', function($log, $locale, dateFilter, orderByFilter, filterFilter) {
  // Pulled from https://github.com/mbostock/d3/blob/master/src/format/requote.js
  var SPECIAL_CHARACTERS_REGEXP = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;

  var localeId;
  var formatCodeToRegex;

  this.init = function() {
    localeId = $locale.id;

    this.parsers = {};
    this.formatters = {};

    formatCodeToRegex = [
      {
        key: 'yyyy',
        regex: '\\d{4}',
        apply: function(value) { this.year = +value; },
        formatter: function(date) {
          var _date = new Date();
          _date.setFullYear(Math.abs(date.getFullYear()));
          return dateFilter(_date, 'yyyy');
        }
      },
      {
        key: 'yy',
        regex: '\\d{2}',
        apply: function(value) { value = +value; this.year = value < 69 ? value + 2000 : value + 1900; },
        formatter: function(date) {
          var _date = new Date();
          _date.setFullYear(Math.abs(date.getFullYear()));
          return dateFilter(_date, 'yy');
        }
      },
      {
        key: 'y',
        regex: '\\d{1,4}',
        apply: function(value) { this.year = +value; },
        formatter: function(date) {
          var _date = new Date();
          _date.setFullYear(Math.abs(date.getFullYear()));
          return dateFilter(_date, 'y');
        }
      },
      {
        key: 'M!',
        regex: '0?[1-9]|1[0-2]',
        apply: function(value) { this.month = value - 1; },
        formatter: function(date) {
          var value = date.getMonth();
          if (/^[0-9]$/.test(value)) {
            return dateFilter(date, 'MM');
          }

          return dateFilter(date, 'M');
        }
      },
      {
        key: 'MMMM',
        regex: $locale.DATETIME_FORMATS.MONTH.join('|'),
        apply: function(value) { this.month = $locale.DATETIME_FORMATS.MONTH.indexOf(value); },
        formatter: function(date) { return dateFilter(date, 'MMMM'); }
      },
      {
        key: 'MMM',
        regex: $locale.DATETIME_FORMATS.SHORTMONTH.join('|'),
        apply: function(value) { this.month = $locale.DATETIME_FORMATS.SHORTMONTH.indexOf(value); },
        formatter: function(date) { return dateFilter(date, 'MMM'); }
      },
      {
        key: 'MM',
        regex: '0[1-9]|1[0-2]',
        apply: function(value) { this.month = value - 1; },
        formatter: function(date) { return dateFilter(date, 'MM'); }
      },
      {
        key: 'M',
        regex: '[1-9]|1[0-2]',
        apply: function(value) { this.month = value - 1; },
        formatter: function(date) { return dateFilter(date, 'M'); }
      },
      {
        key: 'd!',
        regex: '[0-2]?[0-9]{1}|3[0-1]{1}',
        apply: function(value) { this.date = +value; },
        formatter: function(date) {
          var value = date.getDate();
          if (/^[1-9]$/.test(value)) {
            return dateFilter(date, 'dd');
          }

          return dateFilter(date, 'd');
        }
      },
      {
        key: 'dd',
        regex: '[0-2][0-9]{1}|3[0-1]{1}',
        apply: function(value) { this.date = +value; },
        formatter: function(date) { return dateFilter(date, 'dd'); }
      },
      {
        key: 'd',
        regex: '[1-2]?[0-9]{1}|3[0-1]{1}',
        apply: function(value) { this.date = +value; },
        formatter: function(date) { return dateFilter(date, 'd'); }
      },
      {
        key: 'EEEE',
        regex: $locale.DATETIME_FORMATS.DAY.join('|'),
        formatter: function(date) { return dateFilter(date, 'EEEE'); }
      },
      {
        key: 'EEE',
        regex: $locale.DATETIME_FORMATS.SHORTDAY.join('|'),
        formatter: function(date) { return dateFilter(date, 'EEE'); }
      },
      {
        key: 'HH',
        regex: '(?:0|1)[0-9]|2[0-3]',
        apply: function(value) { this.hours = +value; },
        formatter: function(date) { return dateFilter(date, 'HH'); }
      },
      {
        key: 'hh',
        regex: '0[0-9]|1[0-2]',
        apply: function(value) { this.hours = +value; },
        formatter: function(date) { return dateFilter(date, 'hh'); }
      },
      {
        key: 'H',
        regex: '1?[0-9]|2[0-3]',
        apply: function(value) { this.hours = +value; },
        formatter: function(date) { return dateFilter(date, 'H'); }
      },
      {
        key: 'h',
        regex: '[0-9]|1[0-2]',
        apply: function(value) { this.hours = +value; },
        formatter: function(date) { return dateFilter(date, 'h'); }
      },
      {
        key: 'mm',
        regex: '[0-5][0-9]',
        apply: function(value) { this.minutes = +value; },
        formatter: function(date) { return dateFilter(date, 'mm'); }
      },
      {
        key: 'm',
        regex: '[0-9]|[1-5][0-9]',
        apply: function(value) { this.minutes = +value; },
        formatter: function(date) { return dateFilter(date, 'm'); }
      },
      {
        key: 'sss',
        regex: '[0-9][0-9][0-9]',
        apply: function(value) { this.milliseconds = +value; },
        formatter: function(date) { return dateFilter(date, 'sss'); }
      },
      {
        key: 'ss',
        regex: '[0-5][0-9]',
        apply: function(value) { this.seconds = +value; },
        formatter: function(date) { return dateFilter(date, 'ss'); }
      },
      {
        key: 's',
        regex: '[0-9]|[1-5][0-9]',
        apply: function(value) { this.seconds = +value; },
        formatter: function(date) { return dateFilter(date, 's'); }
      },
      {
        key: 'a',
        regex: $locale.DATETIME_FORMATS.AMPMS.join('|'),
        apply: function(value) {
          if (this.hours === 12) {
            this.hours = 0;
          }

          if (value === 'PM') {
            this.hours += 12;
          }
        },
        formatter: function(date) { return dateFilter(date, 'a'); }
      },
      {
        key: 'Z',
        regex: '[+-]\\d{4}',
        apply: function(value) {
          var matches = value.match(/([+-])(\d{2})(\d{2})/),
            sign = matches[1],
            hours = matches[2],
            minutes = matches[3];
          this.hours += toInt(sign + hours);
          this.minutes += toInt(sign + minutes);
        },
        formatter: function(date) {
          return dateFilter(date, 'Z');
        }
      },
      {
        key: 'ww',
        regex: '[0-4][0-9]|5[0-3]',
        formatter: function(date) { return dateFilter(date, 'ww'); }
      },
      {
        key: 'w',
        regex: '[0-9]|[1-4][0-9]|5[0-3]',
        formatter: function(date) { return dateFilter(date, 'w'); }
      },
      {
        key: 'GGGG',
        regex: $locale.DATETIME_FORMATS.ERANAMES.join('|').replace(/\s/g, '\\s'),
        formatter: function(date) { return dateFilter(date, 'GGGG'); }
      },
      {
        key: 'GGG',
        regex: $locale.DATETIME_FORMATS.ERAS.join('|'),
        formatter: function(date) { return dateFilter(date, 'GGG'); }
      },
      {
        key: 'GG',
        regex: $locale.DATETIME_FORMATS.ERAS.join('|'),
        formatter: function(date) { return dateFilter(date, 'GG'); }
      },
      {
        key: 'G',
        regex: $locale.DATETIME_FORMATS.ERAS.join('|'),
        formatter: function(date) { return dateFilter(date, 'G'); }
      }
    ];

    if (angular.version.major >= 1 && angular.version.minor > 4) {
      formatCodeToRegex.push({
        key: 'LLLL',
        regex: $locale.DATETIME_FORMATS.STANDALONEMONTH.join('|'),
        apply: function(value) { this.month = $locale.DATETIME_FORMATS.STANDALONEMONTH.indexOf(value); },
        formatter: function(date) { return dateFilter(date, 'LLLL'); }
      });
    }
  };

  this.init();

  function getFormatCodeToRegex(key) {
    return filterFilter(formatCodeToRegex, {key: key}, true)[0];
  }

  this.getParser = function (key) {
    var f = getFormatCodeToRegex(key);
    return f && f.apply || null;
  };

  this.overrideParser = function (key, parser) {
    var f = getFormatCodeToRegex(key);
    if (f && angular.isFunction(parser)) {
      this.parsers = {};
      f.apply = parser;
    }
  }.bind(this);

  function createParser(format) {
    var map = [], regex = format.split('');

    // check for literal values
    var quoteIndex = format.indexOf('\'');
    if (quoteIndex > -1) {
      var inLiteral = false;
      format = format.split('');
      for (var i = quoteIndex; i < format.length; i++) {
        if (inLiteral) {
          if (format[i] === '\'') {
            if (i + 1 < format.length && format[i+1] === '\'') { // escaped single quote
              format[i+1] = '$';
              regex[i+1] = '';
            } else { // end of literal
              regex[i] = '';
              inLiteral = false;
            }
          }
          format[i] = '$';
        } else {
          if (format[i] === '\'') { // start of literal
            format[i] = '$';
            regex[i] = '';
            inLiteral = true;
          }
        }
      }

      format = format.join('');
    }

    angular.forEach(formatCodeToRegex, function(data) {
      var index = format.indexOf(data.key);

      if (index > -1) {
        format = format.split('');

        regex[index] = '(' + data.regex + ')';
        format[index] = '$'; // Custom symbol to define consumed part of format
        for (var i = index + 1, n = index + data.key.length; i < n; i++) {
          regex[i] = '';
          format[i] = '$';
        }
        format = format.join('');

        map.push({
          index: index,
          key: data.key,
          apply: data.apply,
          matcher: data.regex
        });
      }
    });

    return {
      regex: new RegExp('^' + regex.join('') + '$'),
      map: orderByFilter(map, 'index')
    };
  }

  function createFormatter(format) {
    var formatters = [];
    var i = 0;
    var formatter, literalIdx;
    while (i < format.length) {
      if (angular.isNumber(literalIdx)) {
        if (format.charAt(i) === '\'') {
          if (i + 1 >= format.length || format.charAt(i + 1) !== '\'') {
            formatters.push(constructLiteralFormatter(format, literalIdx, i));
            literalIdx = null;
          }
        } else if (i === format.length) {
          while (literalIdx < format.length) {
            formatter = constructFormatterFromIdx(format, literalIdx);
            formatters.push(formatter);
            literalIdx = formatter.endIdx;
          }
        }

        i++;
        continue;
      }

      if (format.charAt(i) === '\'') {
        literalIdx = i;
        i++;
        continue;
      }

      formatter = constructFormatterFromIdx(format, i);

      formatters.push(formatter.parser);
      i = formatter.endIdx;
    }

    return formatters;
  }

  function constructLiteralFormatter(format, literalIdx, endIdx) {
    return function() {
      return format.substr(literalIdx + 1, endIdx - literalIdx - 1);
    };
  }

  function constructFormatterFromIdx(format, i) {
    var currentPosStr = format.substr(i);
    for (var j = 0; j < formatCodeToRegex.length; j++) {
      if (new RegExp('^' + formatCodeToRegex[j].key).test(currentPosStr)) {
        var data = formatCodeToRegex[j];
        return {
          endIdx: i + data.key.length,
          parser: data.formatter
        };
      }
    }

    return {
      endIdx: i + 1,
      parser: function() {
        return currentPosStr.charAt(0);
      }
    };
  }

  this.filter = function(date, format) {
    if (!angular.isDate(date) || isNaN(date) || !format) {
      return '';
    }

    format = $locale.DATETIME_FORMATS[format] || format;

    if ($locale.id !== localeId) {
      this.init();
    }

    if (!this.formatters[format]) {
      this.formatters[format] = createFormatter(format);
    }

    var formatters = this.formatters[format];

    return formatters.reduce(function(str, formatter) {
      return str + formatter(date);
    }, '');
  };

  this.parse = function(input, format, baseDate) {
    if (!angular.isString(input) || !format) {
      return input;
    }

    format = $locale.DATETIME_FORMATS[format] || format;
    format = format.replace(SPECIAL_CHARACTERS_REGEXP, '\\$&');

    if ($locale.id !== localeId) {
      this.init();
    }

    if (!this.parsers[format]) {
      this.parsers[format] = createParser(format, 'apply');
    }

    var parser = this.parsers[format],
        regex = parser.regex,
        map = parser.map,
        results = input.match(regex),
        tzOffset = false;
    if (results && results.length) {
      var fields, dt;
      if (angular.isDate(baseDate) && !isNaN(baseDate.getTime())) {
        fields = {
          year: baseDate.getFullYear(),
          month: baseDate.getMonth(),
          date: baseDate.getDate(),
          hours: baseDate.getHours(),
          minutes: baseDate.getMinutes(),
          seconds: baseDate.getSeconds(),
          milliseconds: baseDate.getMilliseconds()
        };
      } else {
        if (baseDate) {
          $log.warn('dateparser:', 'baseDate is not a valid date');
        }
        fields = { year: 1900, month: 0, date: 1, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 };
      }

      for (var i = 1, n = results.length; i < n; i++) {
        var mapper = map[i - 1];
        if (mapper.matcher === 'Z') {
          tzOffset = true;
        }

        if (mapper.apply) {
          mapper.apply.call(fields, results[i]);
        }
      }

      var datesetter = tzOffset ? Date.prototype.setUTCFullYear :
        Date.prototype.setFullYear;
      var timesetter = tzOffset ? Date.prototype.setUTCHours :
        Date.prototype.setHours;

      if (isValid(fields.year, fields.month, fields.date)) {
        if (angular.isDate(baseDate) && !isNaN(baseDate.getTime()) && !tzOffset) {
          dt = new Date(baseDate);
          datesetter.call(dt, fields.year, fields.month, fields.date);
          timesetter.call(dt, fields.hours, fields.minutes,
            fields.seconds, fields.milliseconds);
        } else {
          dt = new Date(0);
          datesetter.call(dt, fields.year, fields.month, fields.date);
          timesetter.call(dt, fields.hours || 0, fields.minutes || 0,
            fields.seconds || 0, fields.milliseconds || 0);
        }
      }

      return dt;
    }
  };

  // Check if date is valid for specific month (and year for February).
  // Month: 0 = Jan, 1 = Feb, etc
  function isValid(year, month, date) {
    if (date < 1) {
      return false;
    }

    if (month === 1 && date > 28) {
      return date === 29 && (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0);
    }

    if (month === 3 || month === 5 || month === 8 || month === 10) {
      return date < 31;
    }

    return true;
  }

  function toInt(str) {
    return parseInt(str, 10);
  }

  this.toTimezone = toTimezone;
  this.fromTimezone = fromTimezone;
  this.timezoneToOffset = timezoneToOffset;
  this.addDateMinutes = addDateMinutes;
  this.convertTimezoneToLocal = convertTimezoneToLocal;

  function toTimezone(date, timezone) {
    return date && timezone ? convertTimezoneToLocal(date, timezone) : date;
  }

  function fromTimezone(date, timezone) {
    return date && timezone ? convertTimezoneToLocal(date, timezone, true) : date;
  }

  //https://github.com/angular/angular.js/blob/622c42169699ec07fc6daaa19fe6d224e5d2f70e/src/Angular.js#L1207
  function timezoneToOffset(timezone, fallback) {
    timezone = timezone.replace(/:/g, '');
    var requestedTimezoneOffset = Date.parse('Jan 01, 1970 00:00:00 ' + timezone) / 60000;
    return isNaN(requestedTimezoneOffset) ? fallback : requestedTimezoneOffset;
  }

  function addDateMinutes(date, minutes) {
    date = new Date(date.getTime());
    date.setMinutes(date.getMinutes() + minutes);
    return date;
  }

  function convertTimezoneToLocal(date, timezone, reverse) {
    reverse = reverse ? -1 : 1;
    var dateTimezoneOffset = date.getTimezoneOffset();
    var timezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
    return addDateMinutes(date, reverse * (timezoneOffset - dateTimezoneOffset));
  }
}]);

// Avoiding use of ng-class as it creates a lot of watchers when a class is to be applied to
// at most one element.
angular.module('ui.bootstrap.isClass', [])
.directive('uibIsClass', [
         '$animate',
function ($animate) {
  //                    11111111          22222222
  var ON_REGEXP = /^\s*([\s\S]+?)\s+on\s+([\s\S]+?)\s*$/;
  //                    11111111           22222222
  var IS_REGEXP = /^\s*([\s\S]+?)\s+for\s+([\s\S]+?)\s*$/;

  var dataPerTracked = {};

  return {
    restrict: 'A',
    compile: function(tElement, tAttrs) {
      var linkedScopes = [];
      var instances = [];
      var expToData = {};
      var lastActivated = null;
      var onExpMatches = tAttrs.uibIsClass.match(ON_REGEXP);
      var onExp = onExpMatches[2];
      var expsStr = onExpMatches[1];
      var exps = expsStr.split(',');

      return linkFn;

      function linkFn(scope, element, attrs) {
        linkedScopes.push(scope);
        instances.push({
          scope: scope,
          element: element
        });

        exps.forEach(function(exp, k) {
          addForExp(exp, scope);
        });

        scope.$on('$destroy', removeScope);
      }

      function addForExp(exp, scope) {
        var matches = exp.match(IS_REGEXP);
        var clazz = scope.$eval(matches[1]);
        var compareWithExp = matches[2];
        var data = expToData[exp];
        if (!data) {
          var watchFn = function(compareWithVal) {
            var newActivated = null;
            instances.some(function(instance) {
              var thisVal = instance.scope.$eval(onExp);
              if (thisVal === compareWithVal) {
                newActivated = instance;
                return true;
              }
            });
            if (data.lastActivated !== newActivated) {
              if (data.lastActivated) {
                $animate.removeClass(data.lastActivated.element, clazz);
              }
              if (newActivated) {
                $animate.addClass(newActivated.element, clazz);
              }
              data.lastActivated = newActivated;
            }
          };
          expToData[exp] = data = {
            lastActivated: null,
            scope: scope,
            watchFn: watchFn,
            compareWithExp: compareWithExp,
            watcher: scope.$watch(compareWithExp, watchFn)
          };
        }
        data.watchFn(scope.$eval(compareWithExp));
      }

      function removeScope(e) {
        var removedScope = e.targetScope;
        var index = linkedScopes.indexOf(removedScope);
        linkedScopes.splice(index, 1);
        instances.splice(index, 1);
        if (linkedScopes.length) {
          var newWatchScope = linkedScopes[0];
          angular.forEach(expToData, function(data) {
            if (data.scope === removedScope) {
              data.watcher = newWatchScope.$watch(data.compareWithExp, data.watchFn);
              data.scope = newWatchScope;
            }
          });
        } else {
          expToData = {};
        }
      }
    }
  };
}]);
angular.module('ui.bootstrap.datepicker', ['ui.bootstrap.dateparser', 'ui.bootstrap.isClass'])

.value('$datepickerSuppressError', false)

.value('$datepickerLiteralWarning', true)

.constant('uibDatepickerConfig', {
  datepickerMode: 'day',
  formatDay: 'dd',
  formatMonth: 'MMMM',
  formatYear: 'yyyy',
  formatDayHeader: 'EEE',
  formatDayTitle: 'MMMM yyyy',
  formatMonthTitle: 'yyyy',
  maxDate: null,
  maxMode: 'year',
  minDate: null,
  minMode: 'day',
  monthColumns: 3,
  ngModelOptions: {},
  shortcutPropagation: false,
  showWeeks: true,
  yearColumns: 5,
  yearRows: 4
})

.controller('UibDatepickerController', ['$scope', '$element', '$attrs', '$parse', '$interpolate', '$locale', '$log', 'dateFilter', 'uibDatepickerConfig', '$datepickerLiteralWarning', '$datepickerSuppressError', 'uibDateParser',
  function($scope, $element, $attrs, $parse, $interpolate, $locale, $log, dateFilter, datepickerConfig, $datepickerLiteralWarning, $datepickerSuppressError, dateParser) {
  var self = this,
      ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl;
      ngModelOptions = {},
      watchListeners = [];

  $element.addClass('uib-datepicker');
  $attrs.$set('role', 'application');

  if (!$scope.datepickerOptions) {
    $scope.datepickerOptions = {};
  }

  // Modes chain
  this.modes = ['day', 'month', 'year'];

  [
    'customClass',
    'dateDisabled',
    'datepickerMode',
    'formatDay',
    'formatDayHeader',
    'formatDayTitle',
    'formatMonth',
    'formatMonthTitle',
    'formatYear',
    'maxDate',
    'maxMode',
    'minDate',
    'minMode',
    'monthColumns',
    'showWeeks',
    'shortcutPropagation',
    'startingDay',
    'yearColumns',
    'yearRows'
  ].forEach(function(key) {
    switch (key) {
      case 'customClass':
      case 'dateDisabled':
        $scope[key] = $scope.datepickerOptions[key] || angular.noop;
        break;
      case 'datepickerMode':
        $scope.datepickerMode = angular.isDefined($scope.datepickerOptions.datepickerMode) ?
          $scope.datepickerOptions.datepickerMode : datepickerConfig.datepickerMode;
        break;
      case 'formatDay':
      case 'formatDayHeader':
      case 'formatDayTitle':
      case 'formatMonth':
      case 'formatMonthTitle':
      case 'formatYear':
        self[key] = angular.isDefined($scope.datepickerOptions[key]) ?
          $interpolate($scope.datepickerOptions[key])($scope.$parent) :
          datepickerConfig[key];
        break;
      case 'monthColumns':
      case 'showWeeks':
      case 'shortcutPropagation':
      case 'yearColumns':
      case 'yearRows':
        self[key] = angular.isDefined($scope.datepickerOptions[key]) ?
          $scope.datepickerOptions[key] : datepickerConfig[key];
        break;
      case 'startingDay':
        if (angular.isDefined($scope.datepickerOptions.startingDay)) {
          self.startingDay = $scope.datepickerOptions.startingDay;
        } else if (angular.isNumber(datepickerConfig.startingDay)) {
          self.startingDay = datepickerConfig.startingDay;
        } else {
          self.startingDay = ($locale.DATETIME_FORMATS.FIRSTDAYOFWEEK + 8) % 7;
        }

        break;
      case 'maxDate':
      case 'minDate':
        $scope.$watch('datepickerOptions.' + key, function(value) {
          if (value) {
            if (angular.isDate(value)) {
              self[key] = dateParser.fromTimezone(new Date(value), ngModelOptions.getOption('timezone'));
            } else {
              if ($datepickerLiteralWarning) {
                $log.warn('Literal date support has been deprecated, please switch to date object usage');
              }

              self[key] = new Date(dateFilter(value, 'medium'));
            }
          } else {
            self[key] = datepickerConfig[key] ?
              dateParser.fromTimezone(new Date(datepickerConfig[key]), ngModelOptions.getOption('timezone')) :
              null;
          }

          self.refreshView();
        });

        break;
      case 'maxMode':
      case 'minMode':
        if ($scope.datepickerOptions[key]) {
          $scope.$watch(function() { return $scope.datepickerOptions[key]; }, function(value) {
            self[key] = $scope[key] = angular.isDefined(value) ? value : $scope.datepickerOptions[key];
            if (key === 'minMode' && self.modes.indexOf($scope.datepickerOptions.datepickerMode) < self.modes.indexOf(self[key]) ||
              key === 'maxMode' && self.modes.indexOf($scope.datepickerOptions.datepickerMode) > self.modes.indexOf(self[key])) {
              $scope.datepickerMode = self[key];
              $scope.datepickerOptions.datepickerMode = self[key];
            }
          });
        } else {
          self[key] = $scope[key] = datepickerConfig[key] || null;
        }

        break;
    }
  });

  $scope.uniqueId = 'datepicker-' + $scope.$id + '-' + Math.floor(Math.random() * 10000);

  $scope.disabled = angular.isDefined($attrs.disabled) || false;
  if (angular.isDefined($attrs.ngDisabled)) {
    watchListeners.push($scope.$parent.$watch($attrs.ngDisabled, function(disabled) {
      $scope.disabled = disabled;
      self.refreshView();
    }));
  }

  $scope.isActive = function(dateObject) {
    if (self.compare(dateObject.date, self.activeDate) === 0) {
      $scope.activeDateId = dateObject.uid;
      return true;
    }
    return false;
  };

  this.init = function(ngModelCtrl_) {
    ngModelCtrl = ngModelCtrl_;
    ngModelOptions = extractOptions(ngModelCtrl);

    if ($scope.datepickerOptions.initDate) {
      self.activeDate = dateParser.fromTimezone($scope.datepickerOptions.initDate, ngModelOptions.getOption('timezone')) || new Date();
      $scope.$watch('datepickerOptions.initDate', function(initDate) {
        if (initDate && (ngModelCtrl.$isEmpty(ngModelCtrl.$modelValue) || ngModelCtrl.$invalid)) {
          self.activeDate = dateParser.fromTimezone(initDate, ngModelOptions.getOption('timezone'));
          self.refreshView();
        }
      });
    } else {
      self.activeDate = new Date();
    }

    var date = ngModelCtrl.$modelValue ? new Date(ngModelCtrl.$modelValue) : new Date();
    this.activeDate = !isNaN(date) ?
      dateParser.fromTimezone(date, ngModelOptions.getOption('timezone')) :
      dateParser.fromTimezone(new Date(), ngModelOptions.getOption('timezone'));

    ngModelCtrl.$render = function() {
      self.render();
    };
  };

  this.render = function() {
    if (ngModelCtrl.$viewValue) {
      var date = new Date(ngModelCtrl.$viewValue),
          isValid = !isNaN(date);

      if (isValid) {
        this.activeDate = dateParser.fromTimezone(date, ngModelOptions.getOption('timezone'));
      } else if (!$datepickerSuppressError) {
        $log.error('Datepicker directive: "ng-model" value must be a Date object');
      }
    }
    this.refreshView();
  };

  this.refreshView = function() {
    if (this.element) {
      $scope.selectedDt = null;
      this._refreshView();
      if ($scope.activeDt) {
        $scope.activeDateId = $scope.activeDt.uid;
      }

      var date = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
      date = dateParser.fromTimezone(date, ngModelOptions.getOption('timezone'));
      ngModelCtrl.$setValidity('dateDisabled', !date ||
        this.element && !this.isDisabled(date));
    }
  };

  this.createDateObject = function(date, format) {
    var model = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
    model = dateParser.fromTimezone(model, ngModelOptions.getOption('timezone'));
    var today = new Date();
    today = dateParser.fromTimezone(today, ngModelOptions.getOption('timezone'));
    var time = this.compare(date, today);
    var dt = {
      date: date,
      label: dateParser.filter(date, format),
      selected: model && this.compare(date, model) === 0,
      disabled: this.isDisabled(date),
      past: time < 0,
      current: time === 0,
      future: time > 0,
      customClass: this.customClass(date) || null
    };

    if (model && this.compare(date, model) === 0) {
      $scope.selectedDt = dt;
    }

    if (self.activeDate && this.compare(dt.date, self.activeDate) === 0) {
      $scope.activeDt = dt;
    }

    return dt;
  };

  this.isDisabled = function(date) {
    return $scope.disabled ||
      this.minDate && this.compare(date, this.minDate) < 0 ||
      this.maxDate && this.compare(date, this.maxDate) > 0 ||
      $scope.dateDisabled && $scope.dateDisabled({date: date, mode: $scope.datepickerMode});
  };

  this.customClass = function(date) {
    return $scope.customClass({date: date, mode: $scope.datepickerMode});
  };

  // Split array into smaller arrays
  this.split = function(arr, size) {
    var arrays = [];
    while (arr.length > 0) {
      arrays.push(arr.splice(0, size));
    }
    return arrays;
  };

  $scope.select = function(date) {
    if ($scope.datepickerMode === self.minMode) {
      var dt = ngModelCtrl.$viewValue ? dateParser.fromTimezone(new Date(ngModelCtrl.$viewValue), ngModelOptions.getOption('timezone')) : new Date(0, 0, 0, 0, 0, 0, 0);
      dt.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
      dt = dateParser.toTimezone(dt, ngModelOptions.getOption('timezone'));
      ngModelCtrl.$setViewValue(dt);
      ngModelCtrl.$render();
    } else {
      self.activeDate = date;
      setMode(self.modes[self.modes.indexOf($scope.datepickerMode) - 1]);

      $scope.$emit('uib:datepicker.mode');
    }

    $scope.$broadcast('uib:datepicker.focus');
  };

  $scope.move = function(direction) {
    var year = self.activeDate.getFullYear() + direction * (self.step.years || 0),
        month = self.activeDate.getMonth() + direction * (self.step.months || 0);
    self.activeDate.setFullYear(year, month, 1);
    self.refreshView();
  };

  $scope.toggleMode = function(direction) {
    direction = direction || 1;

    if ($scope.datepickerMode === self.maxMode && direction === 1 ||
      $scope.datepickerMode === self.minMode && direction === -1) {
      return;
    }

    setMode(self.modes[self.modes.indexOf($scope.datepickerMode) + direction]);

    $scope.$emit('uib:datepicker.mode');
  };

  // Key event mapper
  $scope.keys = { 13: 'enter', 32: 'space', 33: 'pageup', 34: 'pagedown', 35: 'end', 36: 'home', 37: 'left', 38: 'up', 39: 'right', 40: 'down' };

  var focusElement = function() {
    self.element[0].focus();
  };

  // Listen for focus requests from popup directive
  $scope.$on('uib:datepicker.focus', focusElement);

  $scope.keydown = function(evt) {
    var key = $scope.keys[evt.which];

    if (!key || evt.shiftKey || evt.altKey || $scope.disabled) {
      return;
    }

    evt.preventDefault();
    if (!self.shortcutPropagation) {
      evt.stopPropagation();
    }

    if (key === 'enter' || key === 'space') {
      if (self.isDisabled(self.activeDate)) {
        return; // do nothing
      }
      $scope.select(self.activeDate);
    } else if (evt.ctrlKey && (key === 'up' || key === 'down')) {
      $scope.toggleMode(key === 'up' ? 1 : -1);
    } else {
      self.handleKeyDown(key, evt);
      self.refreshView();
    }
  };

  $element.on('keydown', function(evt) {
    $scope.$apply(function() {
      $scope.keydown(evt);
    });
  });

  $scope.$on('$destroy', function() {
    //Clear all watch listeners on destroy
    while (watchListeners.length) {
      watchListeners.shift()();
    }
  });

  function setMode(mode) {
    $scope.datepickerMode = mode;
    $scope.datepickerOptions.datepickerMode = mode;
  }

  function extractOptions(ngModelCtrl) {
    var ngModelOptions;

    if (angular.version.minor < 6) { // in angular < 1.6 $options could be missing
      // guarantee a value
      ngModelOptions = ngModelCtrl.$options ||
        $scope.datepickerOptions.ngModelOptions ||
        datepickerConfig.ngModelOptions ||
        {};

      // mimic 1.6+ api
      ngModelOptions.getOption = function (key) {
        return ngModelOptions[key];
      };
    } else { // in angular >=1.6 $options is always present
      // ng-model-options defaults timezone to null; don't let its precedence squash a non-null value
      var timezone = ngModelCtrl.$options.getOption('timezone') ||
        ($scope.datepickerOptions.ngModelOptions ? $scope.datepickerOptions.ngModelOptions.timezone : null) ||
        (datepickerConfig.ngModelOptions ? datepickerConfig.ngModelOptions.timezone : null);

      // values passed to createChild override existing values
      ngModelOptions = ngModelCtrl.$options // start with a ModelOptions instance
        .createChild(datepickerConfig.ngModelOptions) // lowest precedence
        .createChild($scope.datepickerOptions.ngModelOptions)
        .createChild(ngModelCtrl.$options) // highest precedence
        .createChild({timezone: timezone}); // to keep from squashing a non-null value
    }

    return ngModelOptions;
  }
}])

.controller('UibDaypickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
  var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  this.step = { months: 1 };
  this.element = $element;
  function getDaysInMonth(year, month) {
    return month === 1 && year % 4 === 0 &&
      (year % 100 !== 0 || year % 400 === 0) ? 29 : DAYS_IN_MONTH[month];
  }

  this.init = function(ctrl) {
    angular.extend(ctrl, this);
    scope.showWeeks = ctrl.showWeeks;
    ctrl.refreshView();
  };

  this.getDates = function(startDate, n) {
    var dates = new Array(n), current = new Date(startDate), i = 0, date;
    while (i < n) {
      date = new Date(current);
      dates[i++] = date;
      current.setDate(current.getDate() + 1);
    }
    return dates;
  };

  this._refreshView = function() {
    var year = this.activeDate.getFullYear(),
      month = this.activeDate.getMonth(),
      firstDayOfMonth = new Date(this.activeDate);

    firstDayOfMonth.setFullYear(year, month, 1);

    var difference = this.startingDay - firstDayOfMonth.getDay(),
      numDisplayedFromPreviousMonth = difference > 0 ?
        7 - difference : - difference,
      firstDate = new Date(firstDayOfMonth);

    if (numDisplayedFromPreviousMonth > 0) {
      firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
    }

    // 42 is the number of days on a six-week calendar
    var days = this.getDates(firstDate, 42);
    for (var i = 0; i < 42; i ++) {
      days[i] = angular.extend(this.createDateObject(days[i], this.formatDay), {
        secondary: days[i].getMonth() !== month,
        uid: scope.uniqueId + '-' + i
      });
    }

    scope.labels = new Array(7);
    for (var j = 0; j < 7; j++) {
      scope.labels[j] = {
        abbr: dateFilter(days[j].date, this.formatDayHeader),
        full: dateFilter(days[j].date, 'EEEE')
      };
    }

    scope.title = dateFilter(this.activeDate, this.formatDayTitle);
    scope.rows = this.split(days, 7);

    if (scope.showWeeks) {
      scope.weekNumbers = [];
      var thursdayIndex = (4 + 7 - this.startingDay) % 7,
          numWeeks = scope.rows.length;
      for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
        scope.weekNumbers.push(
          getISO8601WeekNumber(scope.rows[curWeek][thursdayIndex].date));
      }
    }
  };

  this.compare = function(date1, date2) {
    var _date1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
    var _date2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
    _date1.setFullYear(date1.getFullYear());
    _date2.setFullYear(date2.getFullYear());
    return _date1 - _date2;
  };

  function getISO8601WeekNumber(date) {
    var checkDate = new Date(date);
    checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7)); // Thursday
    var time = checkDate.getTime();
    checkDate.setMonth(0); // Compare with Jan 1
    checkDate.setDate(1);
    return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
  }

  this.handleKeyDown = function(key, evt) {
    var date = this.activeDate.getDate();

    if (key === 'left') {
      date = date - 1;
    } else if (key === 'up') {
      date = date - 7;
    } else if (key === 'right') {
      date = date + 1;
    } else if (key === 'down') {
      date = date + 7;
    } else if (key === 'pageup' || key === 'pagedown') {
      var month = this.activeDate.getMonth() + (key === 'pageup' ? - 1 : 1);
      this.activeDate.setMonth(month, 1);
      date = Math.min(getDaysInMonth(this.activeDate.getFullYear(), this.activeDate.getMonth()), date);
    } else if (key === 'home') {
      date = 1;
    } else if (key === 'end') {
      date = getDaysInMonth(this.activeDate.getFullYear(), this.activeDate.getMonth());
    }
    this.activeDate.setDate(date);
  };
}])

.controller('UibMonthpickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
  this.step = { years: 1 };
  this.element = $element;

  this.init = function(ctrl) {
    angular.extend(ctrl, this);
    ctrl.refreshView();
  };

  this._refreshView = function() {
    var months = new Array(12),
        year = this.activeDate.getFullYear(),
        date;

    for (var i = 0; i < 12; i++) {
      date = new Date(this.activeDate);
      date.setFullYear(year, i, 1);
      months[i] = angular.extend(this.createDateObject(date, this.formatMonth), {
        uid: scope.uniqueId + '-' + i
      });
    }

    scope.title = dateFilter(this.activeDate, this.formatMonthTitle);
    scope.rows = this.split(months, this.monthColumns);
    scope.yearHeaderColspan = this.monthColumns > 3 ? this.monthColumns - 2 : 1;
  };

  this.compare = function(date1, date2) {
    var _date1 = new Date(date1.getFullYear(), date1.getMonth());
    var _date2 = new Date(date2.getFullYear(), date2.getMonth());
    _date1.setFullYear(date1.getFullYear());
    _date2.setFullYear(date2.getFullYear());
    return _date1 - _date2;
  };

  this.handleKeyDown = function(key, evt) {
    var date = this.activeDate.getMonth();

    if (key === 'left') {
      date = date - 1;
    } else if (key === 'up') {
      date = date - this.monthColumns;
    } else if (key === 'right') {
      date = date + 1;
    } else if (key === 'down') {
      date = date + this.monthColumns;
    } else if (key === 'pageup' || key === 'pagedown') {
      var year = this.activeDate.getFullYear() + (key === 'pageup' ? - 1 : 1);
      this.activeDate.setFullYear(year);
    } else if (key === 'home') {
      date = 0;
    } else if (key === 'end') {
      date = 11;
    }
    this.activeDate.setMonth(date);
  };
}])

.controller('UibYearpickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
  var columns, range;
  this.element = $element;

  function getStartingYear(year) {
    return parseInt((year - 1) / range, 10) * range + 1;
  }

  this.yearpickerInit = function() {
    columns = this.yearColumns;
    range = this.yearRows * columns;
    this.step = { years: range };
  };

  this._refreshView = function() {
    var years = new Array(range), date;

    for (var i = 0, start = getStartingYear(this.activeDate.getFullYear()); i < range; i++) {
      date = new Date(this.activeDate);
      date.setFullYear(start + i, 0, 1);
      years[i] = angular.extend(this.createDateObject(date, this.formatYear), {
        uid: scope.uniqueId + '-' + i
      });
    }

    scope.title = [years[0].label, years[range - 1].label].join(' - ');
    scope.rows = this.split(years, columns);
    scope.columns = columns;
  };

  this.compare = function(date1, date2) {
    return date1.getFullYear() - date2.getFullYear();
  };

  this.handleKeyDown = function(key, evt) {
    var date = this.activeDate.getFullYear();

    if (key === 'left') {
      date = date - 1;
    } else if (key === 'up') {
      date = date - columns;
    } else if (key === 'right') {
      date = date + 1;
    } else if (key === 'down') {
      date = date + columns;
    } else if (key === 'pageup' || key === 'pagedown') {
      date += (key === 'pageup' ? - 1 : 1) * range;
    } else if (key === 'home') {
      date = getStartingYear(this.activeDate.getFullYear());
    } else if (key === 'end') {
      date = getStartingYear(this.activeDate.getFullYear()) + range - 1;
    }
    this.activeDate.setFullYear(date);
  };
}])

.directive('uibDatepicker', function() {
  return {
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/datepicker/datepicker.html';
    },
    scope: {
      datepickerOptions: '=?'
    },
    require: ['uibDatepicker', '^ngModel'],
    restrict: 'A',
    controller: 'UibDatepickerController',
    controllerAs: 'datepicker',
    link: function(scope, element, attrs, ctrls) {
      var datepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      datepickerCtrl.init(ngModelCtrl);
    }
  };
})

.directive('uibDaypicker', function() {
  return {
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/datepicker/day.html';
    },
    require: ['^uibDatepicker', 'uibDaypicker'],
    restrict: 'A',
    controller: 'UibDaypickerController',
    link: function(scope, element, attrs, ctrls) {
      var datepickerCtrl = ctrls[0],
        daypickerCtrl = ctrls[1];

      daypickerCtrl.init(datepickerCtrl);
    }
  };
})

.directive('uibMonthpicker', function() {
  return {
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/datepicker/month.html';
    },
    require: ['^uibDatepicker', 'uibMonthpicker'],
    restrict: 'A',
    controller: 'UibMonthpickerController',
    link: function(scope, element, attrs, ctrls) {
      var datepickerCtrl = ctrls[0],
        monthpickerCtrl = ctrls[1];

      monthpickerCtrl.init(datepickerCtrl);
    }
  };
})

.directive('uibYearpicker', function() {
  return {
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/datepicker/year.html';
    },
    require: ['^uibDatepicker', 'uibYearpicker'],
    restrict: 'A',
    controller: 'UibYearpickerController',
    link: function(scope, element, attrs, ctrls) {
      var ctrl = ctrls[0];
      angular.extend(ctrl, ctrls[1]);
      ctrl.yearpickerInit();

      ctrl.refreshView();
    }
  };
});

angular.module('ui.bootstrap.position', [])

/**
 * A set of utility methods for working with the DOM.
 * It is meant to be used where we need to absolute-position elements in
 * relation to another element (this is the case for tooltips, popovers,
 * typeahead suggestions etc.).
 */
  .factory('$uibPosition', ['$document', '$window', function($document, $window) {
    /**
     * Used by scrollbarWidth() function to cache scrollbar's width.
     * Do not access this variable directly, use scrollbarWidth() instead.
     */
    var SCROLLBAR_WIDTH;
    /**
     * scrollbar on body and html element in IE and Edge overlay
     * content and should be considered 0 width.
     */
    var BODY_SCROLLBAR_WIDTH;
    var OVERFLOW_REGEX = {
      normal: /(auto|scroll)/,
      hidden: /(auto|scroll|hidden)/
    };
    var PLACEMENT_REGEX = {
      auto: /\s?auto?\s?/i,
      primary: /^(top|bottom|left|right)$/,
      secondary: /^(top|bottom|left|right|center)$/,
      vertical: /^(top|bottom)$/
    };
    var BODY_REGEX = /(HTML|BODY)/;

    return {

      /**
       * Provides a raw DOM element from a jQuery/jQLite element.
       *
       * @param {element} elem - The element to convert.
       *
       * @returns {element} A HTML element.
       */
      getRawNode: function(elem) {
        return elem.nodeName ? elem : elem[0] || elem;
      },

      /**
       * Provides a parsed number for a style property.  Strips
       * units and casts invalid numbers to 0.
       *
       * @param {string} value - The style value to parse.
       *
       * @returns {number} A valid number.
       */
      parseStyle: function(value) {
        value = parseFloat(value);
        return isFinite(value) ? value : 0;
      },

      /**
       * Provides the closest positioned ancestor.
       *
       * @param {element} element - The element to get the offest parent for.
       *
       * @returns {element} The closest positioned ancestor.
       */
      offsetParent: function(elem) {
        elem = this.getRawNode(elem);

        var offsetParent = elem.offsetParent || $document[0].documentElement;

        function isStaticPositioned(el) {
          return ($window.getComputedStyle(el).position || 'static') === 'static';
        }

        while (offsetParent && offsetParent !== $document[0].documentElement && isStaticPositioned(offsetParent)) {
          offsetParent = offsetParent.offsetParent;
        }

        return offsetParent || $document[0].documentElement;
      },

      /**
       * Provides the scrollbar width, concept from TWBS measureScrollbar()
       * function in https://github.com/twbs/bootstrap/blob/master/js/modal.js
       * In IE and Edge, scollbar on body and html element overlay and should
       * return a width of 0.
       *
       * @returns {number} The width of the browser scollbar.
       */
      scrollbarWidth: function(isBody) {
        if (isBody) {
          if (angular.isUndefined(BODY_SCROLLBAR_WIDTH)) {
            var bodyElem = $document.find('body');
            bodyElem.addClass('uib-position-body-scrollbar-measure');
            BODY_SCROLLBAR_WIDTH = $window.innerWidth - bodyElem[0].clientWidth;
            BODY_SCROLLBAR_WIDTH = isFinite(BODY_SCROLLBAR_WIDTH) ? BODY_SCROLLBAR_WIDTH : 0;
            bodyElem.removeClass('uib-position-body-scrollbar-measure');
          }
          return BODY_SCROLLBAR_WIDTH;
        }

        if (angular.isUndefined(SCROLLBAR_WIDTH)) {
          var scrollElem = angular.element('<div class="uib-position-scrollbar-measure"></div>');
          $document.find('body').append(scrollElem);
          SCROLLBAR_WIDTH = scrollElem[0].offsetWidth - scrollElem[0].clientWidth;
          SCROLLBAR_WIDTH = isFinite(SCROLLBAR_WIDTH) ? SCROLLBAR_WIDTH : 0;
          scrollElem.remove();
        }

        return SCROLLBAR_WIDTH;
      },

      /**
       * Provides the padding required on an element to replace the scrollbar.
       *
       * @returns {object} An object with the following properties:
       *   <ul>
       *     <li>**scrollbarWidth**: the width of the scrollbar</li>
       *     <li>**widthOverflow**: whether the the width is overflowing</li>
       *     <li>**right**: the amount of right padding on the element needed to replace the scrollbar</li>
       *     <li>**rightOriginal**: the amount of right padding currently on the element</li>
       *     <li>**heightOverflow**: whether the the height is overflowing</li>
       *     <li>**bottom**: the amount of bottom padding on the element needed to replace the scrollbar</li>
       *     <li>**bottomOriginal**: the amount of bottom padding currently on the element</li>
       *   </ul>
       */
      scrollbarPadding: function(elem) {
        elem = this.getRawNode(elem);

        var elemStyle = $window.getComputedStyle(elem);
        var paddingRight = this.parseStyle(elemStyle.paddingRight);
        var paddingBottom = this.parseStyle(elemStyle.paddingBottom);
        var scrollParent = this.scrollParent(elem, false, true);
        var scrollbarWidth = this.scrollbarWidth(BODY_REGEX.test(scrollParent.tagName));

        return {
          scrollbarWidth: scrollbarWidth,
          widthOverflow: scrollParent.scrollWidth > scrollParent.clientWidth,
          right: paddingRight + scrollbarWidth,
          originalRight: paddingRight,
          heightOverflow: scrollParent.scrollHeight > scrollParent.clientHeight,
          bottom: paddingBottom + scrollbarWidth,
          originalBottom: paddingBottom
         };
      },

      /**
       * Checks to see if the element is scrollable.
       *
       * @param {element} elem - The element to check.
       * @param {boolean=} [includeHidden=false] - Should scroll style of 'hidden' be considered,
       *   default is false.
       *
       * @returns {boolean} Whether the element is scrollable.
       */
      isScrollable: function(elem, includeHidden) {
        elem = this.getRawNode(elem);

        var overflowRegex = includeHidden ? OVERFLOW_REGEX.hidden : OVERFLOW_REGEX.normal;
        var elemStyle = $window.getComputedStyle(elem);
        return overflowRegex.test(elemStyle.overflow + elemStyle.overflowY + elemStyle.overflowX);
      },

      /**
       * Provides the closest scrollable ancestor.
       * A port of the jQuery UI scrollParent method:
       * https://github.com/jquery/jquery-ui/blob/master/ui/scroll-parent.js
       *
       * @param {element} elem - The element to find the scroll parent of.
       * @param {boolean=} [includeHidden=false] - Should scroll style of 'hidden' be considered,
       *   default is false.
       * @param {boolean=} [includeSelf=false] - Should the element being passed be
       * included in the scrollable llokup.
       *
       * @returns {element} A HTML element.
       */
      scrollParent: function(elem, includeHidden, includeSelf) {
        elem = this.getRawNode(elem);

        var overflowRegex = includeHidden ? OVERFLOW_REGEX.hidden : OVERFLOW_REGEX.normal;
        var documentEl = $document[0].documentElement;
        var elemStyle = $window.getComputedStyle(elem);
        if (includeSelf && overflowRegex.test(elemStyle.overflow + elemStyle.overflowY + elemStyle.overflowX)) {
          return elem;
        }
        var excludeStatic = elemStyle.position === 'absolute';
        var scrollParent = elem.parentElement || documentEl;

        if (scrollParent === documentEl || elemStyle.position === 'fixed') {
          return documentEl;
        }

        while (scrollParent.parentElement && scrollParent !== documentEl) {
          var spStyle = $window.getComputedStyle(scrollParent);
          if (excludeStatic && spStyle.position !== 'static') {
            excludeStatic = false;
          }

          if (!excludeStatic && overflowRegex.test(spStyle.overflow + spStyle.overflowY + spStyle.overflowX)) {
            break;
          }
          scrollParent = scrollParent.parentElement;
        }

        return scrollParent;
      },

      /**
       * Provides read-only equivalent of jQuery's position function:
       * http://api.jquery.com/position/ - distance to closest positioned
       * ancestor.  Does not account for margins by default like jQuery position.
       *
       * @param {element} elem - The element to caclulate the position on.
       * @param {boolean=} [includeMargins=false] - Should margins be accounted
       * for, default is false.
       *
       * @returns {object} An object with the following properties:
       *   <ul>
       *     <li>**width**: the width of the element</li>
       *     <li>**height**: the height of the element</li>
       *     <li>**top**: distance to top edge of offset parent</li>
       *     <li>**left**: distance to left edge of offset parent</li>
       *   </ul>
       */
      position: function(elem, includeMagins) {
        elem = this.getRawNode(elem);

        var elemOffset = this.offset(elem);
        if (includeMagins) {
          var elemStyle = $window.getComputedStyle(elem);
          elemOffset.top -= this.parseStyle(elemStyle.marginTop);
          elemOffset.left -= this.parseStyle(elemStyle.marginLeft);
        }
        var parent = this.offsetParent(elem);
        var parentOffset = {top: 0, left: 0};

        if (parent !== $document[0].documentElement) {
          parentOffset = this.offset(parent);
          parentOffset.top += parent.clientTop - parent.scrollTop;
          parentOffset.left += parent.clientLeft - parent.scrollLeft;
        }

        return {
          width: Math.round(angular.isNumber(elemOffset.width) ? elemOffset.width : elem.offsetWidth),
          height: Math.round(angular.isNumber(elemOffset.height) ? elemOffset.height : elem.offsetHeight),
          top: Math.round(elemOffset.top - parentOffset.top),
          left: Math.round(elemOffset.left - parentOffset.left)
        };
      },

      /**
       * Provides read-only equivalent of jQuery's offset function:
       * http://api.jquery.com/offset/ - distance to viewport.  Does
       * not account for borders, margins, or padding on the body
       * element.
       *
       * @param {element} elem - The element to calculate the offset on.
       *
       * @returns {object} An object with the following properties:
       *   <ul>
       *     <li>**width**: the width of the element</li>
       *     <li>**height**: the height of the element</li>
       *     <li>**top**: distance to top edge of viewport</li>
       *     <li>**right**: distance to bottom edge of viewport</li>
       *   </ul>
       */
      offset: function(elem) {
        elem = this.getRawNode(elem);

        var elemBCR = elem.getBoundingClientRect();
        return {
          width: Math.round(angular.isNumber(elemBCR.width) ? elemBCR.width : elem.offsetWidth),
          height: Math.round(angular.isNumber(elemBCR.height) ? elemBCR.height : elem.offsetHeight),
          top: Math.round(elemBCR.top + ($window.pageYOffset || $document[0].documentElement.scrollTop)),
          left: Math.round(elemBCR.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft))
        };
      },

      /**
       * Provides offset distance to the closest scrollable ancestor
       * or viewport.  Accounts for border and scrollbar width.
       *
       * Right and bottom dimensions represent the distance to the
       * respective edge of the viewport element.  If the element
       * edge extends beyond the viewport, a negative value will be
       * reported.
       *
       * @param {element} elem - The element to get the viewport offset for.
       * @param {boolean=} [useDocument=false] - Should the viewport be the document element instead
       * of the first scrollable element, default is false.
       * @param {boolean=} [includePadding=true] - Should the padding on the offset parent element
       * be accounted for, default is true.
       *
       * @returns {object} An object with the following properties:
       *   <ul>
       *     <li>**top**: distance to the top content edge of viewport element</li>
       *     <li>**bottom**: distance to the bottom content edge of viewport element</li>
       *     <li>**left**: distance to the left content edge of viewport element</li>
       *     <li>**right**: distance to the right content edge of viewport element</li>
       *   </ul>
       */
      viewportOffset: function(elem, useDocument, includePadding) {
        elem = this.getRawNode(elem);
        includePadding = includePadding !== false ? true : false;

        var elemBCR = elem.getBoundingClientRect();
        var offsetBCR = {top: 0, left: 0, bottom: 0, right: 0};

        var offsetParent = useDocument ? $document[0].documentElement : this.scrollParent(elem);
        var offsetParentBCR = offsetParent.getBoundingClientRect();

        offsetBCR.top = offsetParentBCR.top + offsetParent.clientTop;
        offsetBCR.left = offsetParentBCR.left + offsetParent.clientLeft;
        if (offsetParent === $document[0].documentElement) {
          offsetBCR.top += $window.pageYOffset;
          offsetBCR.left += $window.pageXOffset;
        }
        offsetBCR.bottom = offsetBCR.top + offsetParent.clientHeight;
        offsetBCR.right = offsetBCR.left + offsetParent.clientWidth;

        if (includePadding) {
          var offsetParentStyle = $window.getComputedStyle(offsetParent);
          offsetBCR.top += this.parseStyle(offsetParentStyle.paddingTop);
          offsetBCR.bottom -= this.parseStyle(offsetParentStyle.paddingBottom);
          offsetBCR.left += this.parseStyle(offsetParentStyle.paddingLeft);
          offsetBCR.right -= this.parseStyle(offsetParentStyle.paddingRight);
        }

        return {
          top: Math.round(elemBCR.top - offsetBCR.top),
          bottom: Math.round(offsetBCR.bottom - elemBCR.bottom),
          left: Math.round(elemBCR.left - offsetBCR.left),
          right: Math.round(offsetBCR.right - elemBCR.right)
        };
      },

      /**
       * Provides an array of placement values parsed from a placement string.
       * Along with the 'auto' indicator, supported placement strings are:
       *   <ul>
       *     <li>top: element on top, horizontally centered on host element.</li>
       *     <li>top-left: element on top, left edge aligned with host element left edge.</li>
       *     <li>top-right: element on top, lerightft edge aligned with host element right edge.</li>
       *     <li>bottom: element on bottom, horizontally centered on host element.</li>
       *     <li>bottom-left: element on bottom, left edge aligned with host element left edge.</li>
       *     <li>bottom-right: element on bottom, right edge aligned with host element right edge.</li>
       *     <li>left: element on left, vertically centered on host element.</li>
       *     <li>left-top: element on left, top edge aligned with host element top edge.</li>
       *     <li>left-bottom: element on left, bottom edge aligned with host element bottom edge.</li>
       *     <li>right: element on right, vertically centered on host element.</li>
       *     <li>right-top: element on right, top edge aligned with host element top edge.</li>
       *     <li>right-bottom: element on right, bottom edge aligned with host element bottom edge.</li>
       *   </ul>
       * A placement string with an 'auto' indicator is expected to be
       * space separated from the placement, i.e: 'auto bottom-left'  If
       * the primary and secondary placement values do not match 'top,
       * bottom, left, right' then 'top' will be the primary placement and
       * 'center' will be the secondary placement.  If 'auto' is passed, true
       * will be returned as the 3rd value of the array.
       *
       * @param {string} placement - The placement string to parse.
       *
       * @returns {array} An array with the following values
       * <ul>
       *   <li>**[0]**: The primary placement.</li>
       *   <li>**[1]**: The secondary placement.</li>
       *   <li>**[2]**: If auto is passed: true, else undefined.</li>
       * </ul>
       */
      parsePlacement: function(placement) {
        var autoPlace = PLACEMENT_REGEX.auto.test(placement);
        if (autoPlace) {
          placement = placement.replace(PLACEMENT_REGEX.auto, '');
        }

        placement = placement.split('-');

        placement[0] = placement[0] || 'top';
        if (!PLACEMENT_REGEX.primary.test(placement[0])) {
          placement[0] = 'top';
        }

        placement[1] = placement[1] || 'center';
        if (!PLACEMENT_REGEX.secondary.test(placement[1])) {
          placement[1] = 'center';
        }

        if (autoPlace) {
          placement[2] = true;
        } else {
          placement[2] = false;
        }

        return placement;
      },

      /**
       * Provides coordinates for an element to be positioned relative to
       * another element.  Passing 'auto' as part of the placement parameter
       * will enable smart placement - where the element fits. i.e:
       * 'auto left-top' will check to see if there is enough space to the left
       * of the hostElem to fit the targetElem, if not place right (same for secondary
       * top placement).  Available space is calculated using the viewportOffset
       * function.
       *
       * @param {element} hostElem - The element to position against.
       * @param {element} targetElem - The element to position.
       * @param {string=} [placement=top] - The placement for the targetElem,
       *   default is 'top'. 'center' is assumed as secondary placement for
       *   'top', 'left', 'right', and 'bottom' placements.  Available placements are:
       *   <ul>
       *     <li>top</li>
       *     <li>top-right</li>
       *     <li>top-left</li>
       *     <li>bottom</li>
       *     <li>bottom-left</li>
       *     <li>bottom-right</li>
       *     <li>left</li>
       *     <li>left-top</li>
       *     <li>left-bottom</li>
       *     <li>right</li>
       *     <li>right-top</li>
       *     <li>right-bottom</li>
       *   </ul>
       * @param {boolean=} [appendToBody=false] - Should the top and left values returned
       *   be calculated from the body element, default is false.
       *
       * @returns {object} An object with the following properties:
       *   <ul>
       *     <li>**top**: Value for targetElem top.</li>
       *     <li>**left**: Value for targetElem left.</li>
       *     <li>**placement**: The resolved placement.</li>
       *   </ul>
       */
      positionElements: function(hostElem, targetElem, placement, appendToBody) {
        hostElem = this.getRawNode(hostElem);
        targetElem = this.getRawNode(targetElem);

        // need to read from prop to support tests.
        var targetWidth = angular.isDefined(targetElem.offsetWidth) ? targetElem.offsetWidth : targetElem.prop('offsetWidth');
        var targetHeight = angular.isDefined(targetElem.offsetHeight) ? targetElem.offsetHeight : targetElem.prop('offsetHeight');

        placement = this.parsePlacement(placement);

        var hostElemPos = appendToBody ? this.offset(hostElem) : this.position(hostElem);
        var targetElemPos = {top: 0, left: 0, placement: ''};

        if (placement[2]) {
          var viewportOffset = this.viewportOffset(hostElem, appendToBody);

          var targetElemStyle = $window.getComputedStyle(targetElem);
          var adjustedSize = {
            width: targetWidth + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginLeft) + this.parseStyle(targetElemStyle.marginRight))),
            height: targetHeight + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginTop) + this.parseStyle(targetElemStyle.marginBottom)))
          };

          placement[0] = placement[0] === 'top' && adjustedSize.height > viewportOffset.top && adjustedSize.height <= viewportOffset.bottom ? 'bottom' :
                         placement[0] === 'bottom' && adjustedSize.height > viewportOffset.bottom && adjustedSize.height <= viewportOffset.top ? 'top' :
                         placement[0] === 'left' && adjustedSize.width > viewportOffset.left && adjustedSize.width <= viewportOffset.right ? 'right' :
                         placement[0] === 'right' && adjustedSize.width > viewportOffset.right && adjustedSize.width <= viewportOffset.left ? 'left' :
                         placement[0];

          placement[1] = placement[1] === 'top' && adjustedSize.height - hostElemPos.height > viewportOffset.bottom && adjustedSize.height - hostElemPos.height <= viewportOffset.top ? 'bottom' :
                         placement[1] === 'bottom' && adjustedSize.height - hostElemPos.height > viewportOffset.top && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom ? 'top' :
                         placement[1] === 'left' && adjustedSize.width - hostElemPos.width > viewportOffset.right && adjustedSize.width - hostElemPos.width <= viewportOffset.left ? 'right' :
                         placement[1] === 'right' && adjustedSize.width - hostElemPos.width > viewportOffset.left && adjustedSize.width - hostElemPos.width <= viewportOffset.right ? 'left' :
                         placement[1];

          if (placement[1] === 'center') {
            if (PLACEMENT_REGEX.vertical.test(placement[0])) {
              var xOverflow = hostElemPos.width / 2 - targetWidth / 2;
              if (viewportOffset.left + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.right) {
                placement[1] = 'left';
              } else if (viewportOffset.right + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.left) {
                placement[1] = 'right';
              }
            } else {
              var yOverflow = hostElemPos.height / 2 - adjustedSize.height / 2;
              if (viewportOffset.top + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom) {
                placement[1] = 'top';
              } else if (viewportOffset.bottom + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.top) {
                placement[1] = 'bottom';
              }
            }
          }
        }

        switch (placement[0]) {
          case 'top':
            targetElemPos.top = hostElemPos.top - targetHeight;
            break;
          case 'bottom':
            targetElemPos.top = hostElemPos.top + hostElemPos.height;
            break;
          case 'left':
            targetElemPos.left = hostElemPos.left - targetWidth;
            break;
          case 'right':
            targetElemPos.left = hostElemPos.left + hostElemPos.width;
            break;
        }

        switch (placement[1]) {
          case 'top':
            targetElemPos.top = hostElemPos.top;
            break;
          case 'bottom':
            targetElemPos.top = hostElemPos.top + hostElemPos.height - targetHeight;
            break;
          case 'left':
            targetElemPos.left = hostElemPos.left;
            break;
          case 'right':
            targetElemPos.left = hostElemPos.left + hostElemPos.width - targetWidth;
            break;
          case 'center':
            if (PLACEMENT_REGEX.vertical.test(placement[0])) {
              targetElemPos.left = hostElemPos.left + hostElemPos.width / 2 - targetWidth / 2;
            } else {
              targetElemPos.top = hostElemPos.top + hostElemPos.height / 2 - targetHeight / 2;
            }
            break;
        }

        targetElemPos.top = Math.round(targetElemPos.top);
        targetElemPos.left = Math.round(targetElemPos.left);
        targetElemPos.placement = placement[1] === 'center' ? placement[0] : placement[0] + '-' + placement[1];

        return targetElemPos;
      },

      /**
       * Provides a way to adjust the top positioning after first
       * render to correctly align element to top after content
       * rendering causes resized element height
       *
       * @param {array} placementClasses - The array of strings of classes
       * element should have.
       * @param {object} containerPosition - The object with container
       * position information
       * @param {number} initialHeight - The initial height for the elem.
       * @param {number} currentHeight - The current height for the elem.
       */
      adjustTop: function(placementClasses, containerPosition, initialHeight, currentHeight) {
        if (placementClasses.indexOf('top') !== -1 && initialHeight !== currentHeight) {
          return {
            top: containerPosition.top - currentHeight + 'px'
          };
        }
      },

      /**
       * Provides a way for positioning tooltip & dropdown
       * arrows when using placement options beyond the standard
       * left, right, top, or bottom.
       *
       * @param {element} elem - The tooltip/dropdown element.
       * @param {string} placement - The placement for the elem.
       */
      positionArrow: function(elem, placement) {
        elem = this.getRawNode(elem);

        var innerElem = elem.querySelector('.tooltip-inner, .popover-inner');
        if (!innerElem) {
          return;
        }

        var isTooltip = angular.element(innerElem).hasClass('tooltip-inner');

        var arrowElem = isTooltip ? elem.querySelector('.tooltip-arrow') : elem.querySelector('.arrow');
        if (!arrowElem) {
          return;
        }

        var arrowCss = {
          top: '',
          bottom: '',
          left: '',
          right: ''
        };

        placement = this.parsePlacement(placement);
        if (placement[1] === 'center') {
          // no adjustment necessary - just reset styles
          angular.element(arrowElem).css(arrowCss);
          return;
        }

        var borderProp = 'border-' + placement[0] + '-width';
        var borderWidth = $window.getComputedStyle(arrowElem)[borderProp];

        var borderRadiusProp = 'border-';
        if (PLACEMENT_REGEX.vertical.test(placement[0])) {
          borderRadiusProp += placement[0] + '-' + placement[1];
        } else {
          borderRadiusProp += placement[1] + '-' + placement[0];
        }
        borderRadiusProp += '-radius';
        var borderRadius = $window.getComputedStyle(isTooltip ? innerElem : elem)[borderRadiusProp];

        switch (placement[0]) {
          case 'top':
            arrowCss.bottom = isTooltip ? '0' : '-' + borderWidth;
            break;
          case 'bottom':
            arrowCss.top = isTooltip ? '0' : '-' + borderWidth;
            break;
          case 'left':
            arrowCss.right = isTooltip ? '0' : '-' + borderWidth;
            break;
          case 'right':
            arrowCss.left = isTooltip ? '0' : '-' + borderWidth;
            break;
        }

        arrowCss[placement[1]] = borderRadius;

        angular.element(arrowElem).css(arrowCss);
      }
    };
  }]);

angular.module('ui.bootstrap.datepickerPopup', ['ui.bootstrap.datepicker', 'ui.bootstrap.position'])

.value('$datepickerPopupLiteralWarning', true)

.constant('uibDatepickerPopupConfig', {
  altInputFormats: [],
  appendToBody: false,
  clearText: 'Clear',
  closeOnDateSelection: true,
  closeText: 'Done',
  currentText: 'Today',
  datepickerPopup: 'yyyy-MM-dd',
  datepickerPopupTemplateUrl: 'uib/template/datepickerPopup/popup.html',
  datepickerTemplateUrl: 'uib/template/datepicker/datepicker.html',
  html5Types: {
    date: 'yyyy-MM-dd',
    'datetime-local': 'yyyy-MM-ddTHH:mm:ss.sss',
    'month': 'yyyy-MM'
  },
  onOpenFocus: true,
  showButtonBar: true,
  placement: 'auto bottom-left'
})

.controller('UibDatepickerPopupController', ['$scope', '$element', '$attrs', '$compile', '$log', '$parse', '$window', '$document', '$rootScope', '$uibPosition', 'dateFilter', 'uibDateParser', 'uibDatepickerPopupConfig', '$timeout', 'uibDatepickerConfig', '$datepickerPopupLiteralWarning',
function($scope, $element, $attrs, $compile, $log, $parse, $window, $document, $rootScope, $position, dateFilter, dateParser, datepickerPopupConfig, $timeout, datepickerConfig, $datepickerPopupLiteralWarning) {
  var cache = {},
    isHtml5DateInput = false;
  var dateFormat, closeOnDateSelection, appendToBody, onOpenFocus,
    datepickerPopupTemplateUrl, datepickerTemplateUrl, popupEl, datepickerEl, scrollParentEl,
    ngModel, ngModelOptions, $popup, altInputFormats, watchListeners = [];

  this.init = function(_ngModel_) {
    ngModel = _ngModel_;
    ngModelOptions = extractOptions(ngModel);
    closeOnDateSelection = angular.isDefined($attrs.closeOnDateSelection) ?
      $scope.$parent.$eval($attrs.closeOnDateSelection) :
      datepickerPopupConfig.closeOnDateSelection;
    appendToBody = angular.isDefined($attrs.datepickerAppendToBody) ?
      $scope.$parent.$eval($attrs.datepickerAppendToBody) :
      datepickerPopupConfig.appendToBody;
    onOpenFocus = angular.isDefined($attrs.onOpenFocus) ?
      $scope.$parent.$eval($attrs.onOpenFocus) : datepickerPopupConfig.onOpenFocus;
    datepickerPopupTemplateUrl = angular.isDefined($attrs.datepickerPopupTemplateUrl) ?
      $attrs.datepickerPopupTemplateUrl :
      datepickerPopupConfig.datepickerPopupTemplateUrl;
    datepickerTemplateUrl = angular.isDefined($attrs.datepickerTemplateUrl) ?
      $attrs.datepickerTemplateUrl : datepickerPopupConfig.datepickerTemplateUrl;
    altInputFormats = angular.isDefined($attrs.altInputFormats) ?
      $scope.$parent.$eval($attrs.altInputFormats) :
      datepickerPopupConfig.altInputFormats;

    $scope.showButtonBar = angular.isDefined($attrs.showButtonBar) ?
      $scope.$parent.$eval($attrs.showButtonBar) :
      datepickerPopupConfig.showButtonBar;

    if (datepickerPopupConfig.html5Types[$attrs.type]) {
      dateFormat = datepickerPopupConfig.html5Types[$attrs.type];
      isHtml5DateInput = true;
    } else {
      dateFormat = $attrs.uibDatepickerPopup || datepickerPopupConfig.datepickerPopup;
      $attrs.$observe('uibDatepickerPopup', function(value, oldValue) {
        var newDateFormat = value || datepickerPopupConfig.datepickerPopup;
        // Invalidate the $modelValue to ensure that formatters re-run
        // FIXME: Refactor when PR is merged: https://github.com/angular/angular.js/pull/10764
        if (newDateFormat !== dateFormat) {
          dateFormat = newDateFormat;
          ngModel.$modelValue = null;

          if (!dateFormat) {
            throw new Error('uibDatepickerPopup must have a date format specified.');
          }
        }
      });
    }

    if (!dateFormat) {
      throw new Error('uibDatepickerPopup must have a date format specified.');
    }

    if (isHtml5DateInput && $attrs.uibDatepickerPopup) {
      throw new Error('HTML5 date input types do not support custom formats.');
    }

    // popup element used to display calendar
    popupEl = angular.element('<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>');

    popupEl.attr({
      'ng-model': 'date',
      'ng-change': 'dateSelection(date)',
      'template-url': datepickerPopupTemplateUrl
    });

    // datepicker element
    datepickerEl = angular.element(popupEl.children()[0]);
    datepickerEl.attr('template-url', datepickerTemplateUrl);

    if (!$scope.datepickerOptions) {
      $scope.datepickerOptions = {};
    }

    if (isHtml5DateInput) {
      if ($attrs.type === 'month') {
        $scope.datepickerOptions.datepickerMode = 'month';
        $scope.datepickerOptions.minMode = 'month';
      }
    }

    datepickerEl.attr('datepicker-options', 'datepickerOptions');

    if (!isHtml5DateInput) {
      // Internal API to maintain the correct ng-invalid-[key] class
      ngModel.$$parserName = 'date';
      ngModel.$validators.date = validator;
      ngModel.$parsers.unshift(parseDate);
      ngModel.$formatters.push(function(value) {
        if (ngModel.$isEmpty(value)) {
          $scope.date = value;
          return value;
        }

        if (angular.isNumber(value)) {
          value = new Date(value);
        }

        $scope.date = dateParser.fromTimezone(value, ngModelOptions.getOption('timezone'));

        return dateParser.filter($scope.date, dateFormat);
      });
    } else {
      ngModel.$formatters.push(function(value) {
        $scope.date = dateParser.fromTimezone(value, ngModelOptions.getOption('timezone'));
        return value;
      });
    }

    // Detect changes in the view from the text box
    ngModel.$viewChangeListeners.push(function() {
      $scope.date = parseDateString(ngModel.$viewValue);
    });

    $element.on('keydown', inputKeydownBind);

    $popup = $compile(popupEl)($scope);
    // Prevent jQuery cache memory leak (template is now redundant after linking)
    popupEl.remove();

    if (appendToBody) {
      $document.find('body').append($popup);
    } else {
      $element.after($popup);
    }

    $scope.$on('$destroy', function() {
      if ($scope.isOpen === true) {
        if (!$rootScope.$$phase) {
          $scope.$apply(function() {
            $scope.isOpen = false;
          });
        }
      }

      $popup.remove();
      $element.off('keydown', inputKeydownBind);
      $document.off('click', documentClickBind);
      if (scrollParentEl) {
        scrollParentEl.off('scroll', positionPopup);
      }
      angular.element($window).off('resize', positionPopup);

      //Clear all watch listeners on destroy
      while (watchListeners.length) {
        watchListeners.shift()();
      }
    });
  };

  $scope.getText = function(key) {
    return $scope[key + 'Text'] || datepickerPopupConfig[key + 'Text'];
  };

  $scope.isDisabled = function(date) {
    if (date === 'today') {
      date = dateParser.fromTimezone(new Date(), ngModelOptions.getOption('timezone'));
    }

    var dates = {};
    angular.forEach(['minDate', 'maxDate'], function(key) {
      if (!$scope.datepickerOptions[key]) {
        dates[key] = null;
      } else if (angular.isDate($scope.datepickerOptions[key])) {
        dates[key] = new Date($scope.datepickerOptions[key]);
      } else {
        if ($datepickerPopupLiteralWarning) {
          $log.warn('Literal date support has been deprecated, please switch to date object usage');
        }

        dates[key] = new Date(dateFilter($scope.datepickerOptions[key], 'medium'));
      }
    });

    return $scope.datepickerOptions &&
      dates.minDate && $scope.compare(date, dates.minDate) < 0 ||
      dates.maxDate && $scope.compare(date, dates.maxDate) > 0;
  };

  $scope.compare = function(date1, date2) {
    return new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()) - new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
  };

  // Inner change
  $scope.dateSelection = function(dt) {
    $scope.date = dt;
    var date = $scope.date ? dateParser.filter($scope.date, dateFormat) : null; // Setting to NULL is necessary for form validators to function
    $element.val(date);
    ngModel.$setViewValue(date);

    if (closeOnDateSelection) {
      $scope.isOpen = false;
      $element[0].focus();
    }
  };

  $scope.keydown = function(evt) {
    if (evt.which === 27) {
      evt.stopPropagation();
      $scope.isOpen = false;
      $element[0].focus();
    }
  };

  $scope.select = function(date, evt) {
    evt.stopPropagation();

    if (date === 'today') {
      var today = new Date();
      if (angular.isDate($scope.date)) {
        date = new Date($scope.date);
        date.setFullYear(today.getFullYear(), today.getMonth(), today.getDate());
      } else {
        date = dateParser.fromTimezone(today, ngModelOptions.getOption('timezone'));
        date.setHours(0, 0, 0, 0);
      }
    }
    $scope.dateSelection(date);
  };

  $scope.close = function(evt) {
    evt.stopPropagation();

    $scope.isOpen = false;
    $element[0].focus();
  };

  $scope.disabled = angular.isDefined($attrs.disabled) || false;
  if ($attrs.ngDisabled) {
    watchListeners.push($scope.$parent.$watch($parse($attrs.ngDisabled), function(disabled) {
      $scope.disabled = disabled;
    }));
  }

  $scope.$watch('isOpen', function(value) {
    if (value) {
      if (!$scope.disabled) {
        $timeout(function() {
          positionPopup();

          if (onOpenFocus) {
            $scope.$broadcast('uib:datepicker.focus');
          }

          $document.on('click', documentClickBind);

          var placement = $attrs.popupPlacement ? $attrs.popupPlacement : datepickerPopupConfig.placement;
          if (appendToBody || $position.parsePlacement(placement)[2]) {
            scrollParentEl = scrollParentEl || angular.element($position.scrollParent($element));
            if (scrollParentEl) {
              scrollParentEl.on('scroll', positionPopup);
            }
          } else {
            scrollParentEl = null;
          }

          angular.element($window).on('resize', positionPopup);
        }, 0, false);
      } else {
        $scope.isOpen = false;
      }
    } else {
      $document.off('click', documentClickBind);
      if (scrollParentEl) {
        scrollParentEl.off('scroll', positionPopup);
      }
      angular.element($window).off('resize', positionPopup);
    }
  });

  function cameltoDash(string) {
    return string.replace(/([A-Z])/g, function($1) { return '-' + $1.toLowerCase(); });
  }

  function parseDateString(viewValue) {
    var date = dateParser.parse(viewValue, dateFormat, $scope.date);
    if (isNaN(date)) {
      for (var i = 0; i < altInputFormats.length; i++) {
        date = dateParser.parse(viewValue, altInputFormats[i], $scope.date);
        if (!isNaN(date)) {
          return date;
        }
      }
    }
    return date;
  }

  function parseDate(viewValue) {
    if (angular.isNumber(viewValue)) {
      // presumably timestamp to date object
      viewValue = new Date(viewValue);
    }

    if (!viewValue) {
      return null;
    }

    if (angular.isDate(viewValue) && !isNaN(viewValue)) {
      return viewValue;
    }

    if (angular.isString(viewValue)) {
      var date = parseDateString(viewValue);
      if (!isNaN(date)) {
        return dateParser.toTimezone(date, ngModelOptions.getOption('timezone'));
      }
    }

    return ngModelOptions.getOption('allowInvalid') ? viewValue : undefined;
  }

  function validator(modelValue, viewValue) {
    var value = modelValue || viewValue;

    if (!$attrs.ngRequired && !value) {
      return true;
    }

    if (angular.isNumber(value)) {
      value = new Date(value);
    }

    if (!value) {
      return true;
    }

    if (angular.isDate(value) && !isNaN(value)) {
      return true;
    }

    if (angular.isString(value)) {
      return !isNaN(parseDateString(value));
    }

    return false;
  }

  function documentClickBind(event) {
    if (!$scope.isOpen && $scope.disabled) {
      return;
    }

    var popup = $popup[0];
    var dpContainsTarget = $element[0].contains(event.target);
    // The popup node may not be an element node
    // In some browsers (IE) only element nodes have the 'contains' function
    var popupContainsTarget = popup.contains !== undefined && popup.contains(event.target);
    if ($scope.isOpen && !(dpContainsTarget || popupContainsTarget)) {
      $scope.$apply(function() {
        $scope.isOpen = false;
      });
    }
  }

  function inputKeydownBind(evt) {
    if (evt.which === 27 && $scope.isOpen) {
      evt.preventDefault();
      evt.stopPropagation();
      $scope.$apply(function() {
        $scope.isOpen = false;
      });
      $element[0].focus();
    } else if (evt.which === 40 && !$scope.isOpen) {
      evt.preventDefault();
      evt.stopPropagation();
      $scope.$apply(function() {
        $scope.isOpen = true;
      });
    }
  }

  function positionPopup() {
    if ($scope.isOpen) {
      var dpElement = angular.element($popup[0].querySelector('.uib-datepicker-popup'));
      var placement = $attrs.popupPlacement ? $attrs.popupPlacement : datepickerPopupConfig.placement;
      var position = $position.positionElements($element, dpElement, placement, appendToBody);
      dpElement.css({top: position.top + 'px', left: position.left + 'px'});
      if (dpElement.hasClass('uib-position-measure')) {
        dpElement.removeClass('uib-position-measure');
      }
    }
  }

  function extractOptions(ngModelCtrl) {
    var ngModelOptions;

    if (angular.version.minor < 6) { // in angular < 1.6 $options could be missing
      // guarantee a value
      ngModelOptions = angular.isObject(ngModelCtrl.$options) ?
        ngModelCtrl.$options :
        {
          timezone: null
        };

      // mimic 1.6+ api
      ngModelOptions.getOption = function (key) {
        return ngModelOptions[key];
      };
    } else { // in angular >=1.6 $options is always present
      ngModelOptions = ngModelCtrl.$options;
    }

    return ngModelOptions;
  }

  $scope.$on('uib:datepicker.mode', function() {
    $timeout(positionPopup, 0, false);
  });
}])

.directive('uibDatepickerPopup', function() {
  return {
    require: ['ngModel', 'uibDatepickerPopup'],
    controller: 'UibDatepickerPopupController',
    scope: {
      datepickerOptions: '=?',
      isOpen: '=?',
      currentText: '@',
      clearText: '@',
      closeText: '@'
    },
    link: function(scope, element, attrs, ctrls) {
      var ngModel = ctrls[0],
        ctrl = ctrls[1];

      ctrl.init(ngModel);
    }
  };
})

.directive('uibDatepickerPopupWrap', function() {
  return {
    restrict: 'A',
    transclude: true,
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/datepickerPopup/popup.html';
    }
  };
});

angular.module('ui.bootstrap.debounce', [])
/**
 * A helper, internal service that debounces a function
 */
  .factory('$$debounce', ['$timeout', function($timeout) {
    return function(callback, debounceTime) {
      var timeoutPromise;

      return function() {
        var self = this;
        var args = Array.prototype.slice.call(arguments);
        if (timeoutPromise) {
          $timeout.cancel(timeoutPromise);
        }

        timeoutPromise = $timeout(function() {
          callback.apply(self, args);
        }, debounceTime);
      };
    };
  }]);

angular.module('ui.bootstrap.multiMap', [])
/**
 * A helper, internal data structure that stores all references attached to key
 */
  .factory('$$multiMap', function() {
    return {
      createNew: function() {
        var map = {};

        return {
          entries: function() {
            return Object.keys(map).map(function(key) {
              return {
                key: key,
                value: map[key]
              };
            });
          },
          get: function(key) {
            return map[key];
          },
          hasKey: function(key) {
            return !!map[key];
          },
          keys: function() {
            return Object.keys(map);
          },
          put: function(key, value) {
            if (!map[key]) {
              map[key] = [];
            }

            map[key].push(value);
          },
          remove: function(key, value) {
            var values = map[key];

            if (!values) {
              return;
            }

            var idx = values.indexOf(value);

            if (idx !== -1) {
              values.splice(idx, 1);
            }

            if (!values.length) {
              delete map[key];
            }
          }
        };
      }
    };
  });

angular.module('ui.bootstrap.dropdown', ['ui.bootstrap.multiMap', 'ui.bootstrap.position'])

.constant('uibDropdownConfig', {
  appendToOpenClass: 'uib-dropdown-open',
  openClass: 'open'
})

.service('uibDropdownService', ['$document', '$rootScope', '$$multiMap', function($document, $rootScope, $$multiMap) {
  var openScope = null;
  var openedContainers = $$multiMap.createNew();

  this.isOnlyOpen = function(dropdownScope, appendTo) {
    var openedDropdowns = openedContainers.get(appendTo);
    if (openedDropdowns) {
      var openDropdown = openedDropdowns.reduce(function(toClose, dropdown) {
        if (dropdown.scope === dropdownScope) {
          return dropdown;
        }

        return toClose;
      }, {});
      if (openDropdown) {
        return openedDropdowns.length === 1;
      }
    }

    return false;
  };

  this.open = function(dropdownScope, element, appendTo) {
    if (!openScope) {
      $document.on('click', closeDropdown);
    }

    if (openScope && openScope !== dropdownScope) {
      openScope.isOpen = false;
    }

    openScope = dropdownScope;

    if (!appendTo) {
      return;
    }

    var openedDropdowns = openedContainers.get(appendTo);
    if (openedDropdowns) {
      var openedScopes = openedDropdowns.map(function(dropdown) {
        return dropdown.scope;
      });
      if (openedScopes.indexOf(dropdownScope) === -1) {
        openedContainers.put(appendTo, {
          scope: dropdownScope
        });
      }
    } else {
      openedContainers.put(appendTo, {
        scope: dropdownScope
      });
    }
  };

  this.close = function(dropdownScope, element, appendTo) {
    if (openScope === dropdownScope) {
      $document.off('click', closeDropdown);
      $document.off('keydown', this.keybindFilter);
      openScope = null;
    }

    if (!appendTo) {
      return;
    }

    var openedDropdowns = openedContainers.get(appendTo);
    if (openedDropdowns) {
      var dropdownToClose = openedDropdowns.reduce(function(toClose, dropdown) {
        if (dropdown.scope === dropdownScope) {
          return dropdown;
        }

        return toClose;
      }, {});
      if (dropdownToClose) {
        openedContainers.remove(appendTo, dropdownToClose);
      }
    }
  };

  var closeDropdown = function(evt) {
    // This method may still be called during the same mouse event that
    // unbound this event handler. So check openScope before proceeding.
    if (!openScope || !openScope.isOpen) { return; }

    if (evt && openScope.getAutoClose() === 'disabled') { return; }

    if (evt && evt.which === 3) { return; }

    var toggleElement = openScope.getToggleElement();
    if (evt && toggleElement && toggleElement[0].contains(evt.target)) {
      return;
    }

    var dropdownElement = openScope.getDropdownElement();
    if (evt && openScope.getAutoClose() === 'outsideClick' &&
      dropdownElement && dropdownElement[0].contains(evt.target)) {
      return;
    }

    openScope.focusToggleElement();
    openScope.isOpen = false;

    if (!$rootScope.$$phase) {
      openScope.$apply();
    }
  };

  this.keybindFilter = function(evt) {
    if (!openScope) {
      // see this.close as ESC could have been pressed which kills the scope so we can not proceed
      return;
    }

    var dropdownElement = openScope.getDropdownElement();
    var toggleElement = openScope.getToggleElement();
    var dropdownElementTargeted = dropdownElement && dropdownElement[0].contains(evt.target);
    var toggleElementTargeted = toggleElement && toggleElement[0].contains(evt.target);
    if (evt.which === 27) {
      evt.stopPropagation();
      openScope.focusToggleElement();
      closeDropdown();
    } else if (openScope.isKeynavEnabled() && [38, 40].indexOf(evt.which) !== -1 && openScope.isOpen && (dropdownElementTargeted || toggleElementTargeted)) {
      evt.preventDefault();
      evt.stopPropagation();
      openScope.focusDropdownEntry(evt.which);
    }
  };
}])

.controller('UibDropdownController', ['$scope', '$element', '$attrs', '$parse', 'uibDropdownConfig', 'uibDropdownService', '$animate', '$uibPosition', '$document', '$compile', '$templateRequest', function($scope, $element, $attrs, $parse, dropdownConfig, uibDropdownService, $animate, $position, $document, $compile, $templateRequest) {
  var self = this,
    scope = $scope.$new(), // create a child scope so we are not polluting original one
    templateScope,
    appendToOpenClass = dropdownConfig.appendToOpenClass,
    openClass = dropdownConfig.openClass,
    getIsOpen,
    setIsOpen = angular.noop,
    toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop,
    keynavEnabled = false,
    selectedOption = null,
    body = $document.find('body');

  $element.addClass('dropdown');

  this.init = function() {
    if ($attrs.isOpen) {
      getIsOpen = $parse($attrs.isOpen);
      setIsOpen = getIsOpen.assign;

      $scope.$watch(getIsOpen, function(value) {
        scope.isOpen = !!value;
      });
    }

    keynavEnabled = angular.isDefined($attrs.keyboardNav);
  };

  this.toggle = function(open) {
    scope.isOpen = arguments.length ? !!open : !scope.isOpen;
    if (angular.isFunction(setIsOpen)) {
      setIsOpen(scope, scope.isOpen);
    }

    return scope.isOpen;
  };

  // Allow other directives to watch status
  this.isOpen = function() {
    return scope.isOpen;
  };

  scope.getToggleElement = function() {
    return self.toggleElement;
  };

  scope.getAutoClose = function() {
    return $attrs.autoClose || 'always'; //or 'outsideClick' or 'disabled'
  };

  scope.getElement = function() {
    return $element;
  };

  scope.isKeynavEnabled = function() {
    return keynavEnabled;
  };

  scope.focusDropdownEntry = function(keyCode) {
    var elems = self.dropdownMenu ? //If append to body is used.
      angular.element(self.dropdownMenu).find('a') :
      $element.find('ul').eq(0).find('a');

    switch (keyCode) {
      case 40: {
        if (!angular.isNumber(self.selectedOption)) {
          self.selectedOption = 0;
        } else {
          self.selectedOption = self.selectedOption === elems.length - 1 ?
            self.selectedOption :
            self.selectedOption + 1;
        }
        break;
      }
      case 38: {
        if (!angular.isNumber(self.selectedOption)) {
          self.selectedOption = elems.length - 1;
        } else {
          self.selectedOption = self.selectedOption === 0 ?
            0 : self.selectedOption - 1;
        }
        break;
      }
    }
    elems[self.selectedOption].focus();
  };

  scope.getDropdownElement = function() {
    return self.dropdownMenu;
  };

  scope.focusToggleElement = function() {
    if (self.toggleElement) {
      self.toggleElement[0].focus();
    }
  };

  function removeDropdownMenu() {
    $element.append(self.dropdownMenu);
  }

  scope.$watch('isOpen', function(isOpen, wasOpen) {
    var appendTo = null,
      appendToBody = false;

    if (angular.isDefined($attrs.dropdownAppendTo)) {
      var appendToEl = $parse($attrs.dropdownAppendTo)(scope);
      if (appendToEl) {
        appendTo = angular.element(appendToEl);
      }
    }

    if (angular.isDefined($attrs.dropdownAppendToBody)) {
      var appendToBodyValue = $parse($attrs.dropdownAppendToBody)(scope);
      if (appendToBodyValue !== false) {
        appendToBody = true;
      }
    }

    if (appendToBody && !appendTo) {
      appendTo = body;
    }

    if (appendTo && self.dropdownMenu) {
      if (isOpen) {
        appendTo.append(self.dropdownMenu);
        $element.on('$destroy', removeDropdownMenu);
      } else {
        $element.off('$destroy', removeDropdownMenu);
        removeDropdownMenu();
      }
    }

    if (appendTo && self.dropdownMenu) {
      var pos = $position.positionElements($element, self.dropdownMenu, 'bottom-left', true),
        css,
        rightalign,
        scrollbarPadding,
        scrollbarWidth = 0;

      css = {
        top: pos.top + 'px',
        display: isOpen ? 'block' : 'none'
      };

      rightalign = self.dropdownMenu.hasClass('dropdown-menu-right');
      if (!rightalign) {
        css.left = pos.left + 'px';
        css.right = 'auto';
      } else {
        css.left = 'auto';
        scrollbarPadding = $position.scrollbarPadding(appendTo);

        if (scrollbarPadding.heightOverflow && scrollbarPadding.scrollbarWidth) {
          scrollbarWidth = scrollbarPadding.scrollbarWidth;
        }

        css.right = window.innerWidth - scrollbarWidth -
          (pos.left + $element.prop('offsetWidth')) + 'px';
      }

      // Need to adjust our positioning to be relative to the appendTo container
      // if it's not the body element
      if (!appendToBody) {
        var appendOffset = $position.offset(appendTo);

        css.top = pos.top - appendOffset.top + 'px';

        if (!rightalign) {
          css.left = pos.left - appendOffset.left + 'px';
        } else {
          css.right = window.innerWidth -
            (pos.left - appendOffset.left + $element.prop('offsetWidth')) + 'px';
        }
      }

      self.dropdownMenu.css(css);
    }

    var openContainer = appendTo ? appendTo : $element;
    var dropdownOpenClass = appendTo ? appendToOpenClass : openClass;
    var hasOpenClass = openContainer.hasClass(dropdownOpenClass);
    var isOnlyOpen = uibDropdownService.isOnlyOpen($scope, appendTo);

    if (hasOpenClass === !isOpen) {
      var toggleClass;
      if (appendTo) {
        toggleClass = !isOnlyOpen ? 'addClass' : 'removeClass';
      } else {
        toggleClass = isOpen ? 'addClass' : 'removeClass';
      }
      $animate[toggleClass](openContainer, dropdownOpenClass).then(function() {
        if (angular.isDefined(isOpen) && isOpen !== wasOpen) {
          toggleInvoker($scope, { open: !!isOpen });
        }
      });
    }

    if (isOpen) {
      if (self.dropdownMenuTemplateUrl) {
        $templateRequest(self.dropdownMenuTemplateUrl).then(function(tplContent) {
          templateScope = scope.$new();
          $compile(tplContent.trim())(templateScope, function(dropdownElement) {
            var newEl = dropdownElement;
            self.dropdownMenu.replaceWith(newEl);
            self.dropdownMenu = newEl;
            $document.on('keydown', uibDropdownService.keybindFilter);
          });
        });
      } else {
        $document.on('keydown', uibDropdownService.keybindFilter);
      }

      scope.focusToggleElement();
      uibDropdownService.open(scope, $element, appendTo);
    } else {
      uibDropdownService.close(scope, $element, appendTo);
      if (self.dropdownMenuTemplateUrl) {
        if (templateScope) {
          templateScope.$destroy();
        }
        var newEl = angular.element('<ul class="dropdown-menu"></ul>');
        self.dropdownMenu.replaceWith(newEl);
        self.dropdownMenu = newEl;
      }

      self.selectedOption = null;
    }

    if (angular.isFunction(setIsOpen)) {
      setIsOpen($scope, isOpen);
    }
  });
}])

.directive('uibDropdown', function() {
  return {
    controller: 'UibDropdownController',
    link: function(scope, element, attrs, dropdownCtrl) {
      dropdownCtrl.init();
    }
  };
})

.directive('uibDropdownMenu', function() {
  return {
    restrict: 'A',
    require: '?^uibDropdown',
    link: function(scope, element, attrs, dropdownCtrl) {
      if (!dropdownCtrl || angular.isDefined(attrs.dropdownNested)) {
        return;
      }

      element.addClass('dropdown-menu');

      var tplUrl = attrs.templateUrl;
      if (tplUrl) {
        dropdownCtrl.dropdownMenuTemplateUrl = tplUrl;
      }

      if (!dropdownCtrl.dropdownMenu) {
        dropdownCtrl.dropdownMenu = element;
      }
    }
  };
})

.directive('uibDropdownToggle', function() {
  return {
    require: '?^uibDropdown',
    link: function(scope, element, attrs, dropdownCtrl) {
      if (!dropdownCtrl) {
        return;
      }

      element.addClass('dropdown-toggle');

      dropdownCtrl.toggleElement = element;

      var toggleDropdown = function(event) {
        event.preventDefault();

        if (!element.hasClass('disabled') && !attrs.disabled) {
          scope.$apply(function() {
            dropdownCtrl.toggle();
          });
        }
      };

      element.on('click', toggleDropdown);

      // WAI-ARIA
      element.attr({ 'aria-haspopup': true, 'aria-expanded': false });
      scope.$watch(dropdownCtrl.isOpen, function(isOpen) {
        element.attr('aria-expanded', !!isOpen);
      });

      scope.$on('$destroy', function() {
        element.off('click', toggleDropdown);
      });
    }
  };
});

angular.module('ui.bootstrap.stackedMap', [])
/**
 * A helper, internal data structure that acts as a map but also allows getting / removing
 * elements in the LIFO order
 */
  .factory('$$stackedMap', function() {
    return {
      createNew: function() {
        var stack = [];

        return {
          add: function(key, value) {
            stack.push({
              key: key,
              value: value
            });
          },
          get: function(key) {
            for (var i = 0; i < stack.length; i++) {
              if (key === stack[i].key) {
                return stack[i];
              }
            }
          },
          keys: function() {
            var keys = [];
            for (var i = 0; i < stack.length; i++) {
              keys.push(stack[i].key);
            }
            return keys;
          },
          top: function() {
            return stack[stack.length - 1];
          },
          remove: function(key) {
            var idx = -1;
            for (var i = 0; i < stack.length; i++) {
              if (key === stack[i].key) {
                idx = i;
                break;
              }
            }
            return stack.splice(idx, 1)[0];
          },
          removeTop: function() {
            return stack.pop();
          },
          length: function() {
            return stack.length;
          }
        };
      }
    };
  });
angular.module('ui.bootstrap.modal', ['ui.bootstrap.multiMap', 'ui.bootstrap.stackedMap', 'ui.bootstrap.position'])
/**
 * Pluggable resolve mechanism for the modal resolve resolution
 * Supports UI Router's $resolve service
 */
  .provider('$uibResolve', function() {
    var resolve = this;
    this.resolver = null;

    this.setResolver = function(resolver) {
      this.resolver = resolver;
    };

    this.$get = ['$injector', '$q', function($injector, $q) {
      var resolver = resolve.resolver ? $injector.get(resolve.resolver) : null;
      return {
        resolve: function(invocables, locals, parent, self) {
          if (resolver) {
            return resolver.resolve(invocables, locals, parent, self);
          }

          var promises = [];

          angular.forEach(invocables, function(value) {
            if (angular.isFunction(value) || angular.isArray(value)) {
              promises.push($q.resolve($injector.invoke(value)));
            } else if (angular.isString(value)) {
              promises.push($q.resolve($injector.get(value)));
            } else {
              promises.push($q.resolve(value));
            }
          });

          return $q.all(promises).then(function(resolves) {
            var resolveObj = {};
            var resolveIter = 0;
            angular.forEach(invocables, function(value, key) {
              resolveObj[key] = resolves[resolveIter++];
            });

            return resolveObj;
          });
        }
      };
    }];
  })

/**
 * A helper directive for the $modal service. It creates a backdrop element.
 */
  .directive('uibModalBackdrop', ['$animate', '$injector', '$uibModalStack',
  function($animate, $injector, $modalStack) {
    return {
      restrict: 'A',
      compile: function(tElement, tAttrs) {
        tElement.addClass(tAttrs.backdropClass);
        return linkFn;
      }
    };

    function linkFn(scope, element, attrs) {
      if (attrs.modalInClass) {
        $animate.addClass(element, attrs.modalInClass);

        scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
          var done = setIsAsync();
          if (scope.modalOptions.animation) {
            $animate.removeClass(element, attrs.modalInClass).then(done);
          } else {
            done();
          }
        });
      }
    }
  }])

  .directive('uibModalWindow', ['$uibModalStack', '$q', '$animateCss', '$document',
  function($modalStack, $q, $animateCss, $document) {
    return {
      scope: {
        index: '@'
      },
      restrict: 'A',
      transclude: true,
      templateUrl: function(tElement, tAttrs) {
        return tAttrs.templateUrl || 'uib/template/modal/window.html';
      },
      link: function(scope, element, attrs) {
        element.addClass(attrs.windowTopClass || '');
        scope.size = attrs.size;

        scope.close = function(evt) {
          var modal = $modalStack.getTop();
          if (modal && modal.value.backdrop &&
            modal.value.backdrop !== 'static' &&
            evt.target === evt.currentTarget) {
            evt.preventDefault();
            evt.stopPropagation();
            $modalStack.dismiss(modal.key, 'backdrop click');
          }
        };

        // moved from template to fix issue #2280
        element.on('click', scope.close);

        // This property is only added to the scope for the purpose of detecting when this directive is rendered.
        // We can detect that by using this property in the template associated with this directive and then use
        // {@link Attribute#$observe} on it. For more details please see {@link TableColumnResize}.
        scope.$isRendered = true;

        // Deferred object that will be resolved when this modal is rendered.
        var modalRenderDeferObj = $q.defer();
        // Resolve render promise post-digest
        scope.$$postDigest(function() {
          modalRenderDeferObj.resolve();
        });

        modalRenderDeferObj.promise.then(function() {
          var animationPromise = null;

          if (attrs.modalInClass) {
            animationPromise = $animateCss(element, {
              addClass: attrs.modalInClass
            }).start();

            scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
              var done = setIsAsync();
              $animateCss(element, {
                removeClass: attrs.modalInClass
              }).start().then(done);
            });
          }


          $q.when(animationPromise).then(function() {
            // Notify {@link $modalStack} that modal is rendered.
            var modal = $modalStack.getTop();
            if (modal) {
              $modalStack.modalRendered(modal.key);
            }

            /**
             * If something within the freshly-opened modal already has focus (perhaps via a
             * directive that causes focus) then there's no need to try to focus anything.
             */
            if (!($document[0].activeElement && element[0].contains($document[0].activeElement))) {
              var inputWithAutofocus = element[0].querySelector('[autofocus]');
              /**
               * Auto-focusing of a freshly-opened modal element causes any child elements
               * with the autofocus attribute to lose focus. This is an issue on touch
               * based devices which will show and then hide the onscreen keyboard.
               * Attempts to refocus the autofocus element via JavaScript will not reopen
               * the onscreen keyboard. Fixed by updated the focusing logic to only autofocus
               * the modal element if the modal does not contain an autofocus element.
               */
              if (inputWithAutofocus) {
                inputWithAutofocus.focus();
              } else {
                element[0].focus();
              }
            }
          });
        });
      }
    };
  }])

  .directive('uibModalAnimationClass', function() {
    return {
      compile: function(tElement, tAttrs) {
        if (tAttrs.modalAnimation) {
          tElement.addClass(tAttrs.uibModalAnimationClass);
        }
      }
    };
  })

  .directive('uibModalTransclude', ['$animate', function($animate) {
    return {
      link: function(scope, element, attrs, controller, transclude) {
        transclude(scope.$parent, function(clone) {
          element.empty();
          $animate.enter(clone, element);
        });
      }
    };
  }])

  .factory('$uibModalStack', ['$animate', '$animateCss', '$document',
    '$compile', '$rootScope', '$q', '$$multiMap', '$$stackedMap', '$uibPosition',
    function($animate, $animateCss, $document, $compile, $rootScope, $q, $$multiMap, $$stackedMap, $uibPosition) {
      var OPENED_MODAL_CLASS = 'modal-open';

      var backdropDomEl, backdropScope;
      var openedWindows = $$stackedMap.createNew();
      var openedClasses = $$multiMap.createNew();
      var $modalStack = {
        NOW_CLOSING_EVENT: 'modal.stack.now-closing'
      };
      var topModalIndex = 0;
      var previousTopOpenedModal = null;
      var ARIA_HIDDEN_ATTRIBUTE_NAME = 'data-bootstrap-modal-aria-hidden-count';

      //Modal focus behavior
      var tabbableSelector = 'a[href], area[href], input:not([disabled]):not([tabindex=\'-1\']), ' +
        'button:not([disabled]):not([tabindex=\'-1\']),select:not([disabled]):not([tabindex=\'-1\']), textarea:not([disabled]):not([tabindex=\'-1\']), ' +
        'iframe, object, embed, *[tabindex]:not([tabindex=\'-1\']), *[contenteditable=true]';
      var scrollbarPadding;
      var SNAKE_CASE_REGEXP = /[A-Z]/g;

      // TODO: extract into common dependency with tooltip
      function snake_case(name) {
        var separator = '-';
        return name.replace(SNAKE_CASE_REGEXP, function(letter, pos) {
          return (pos ? separator : '') + letter.toLowerCase();
        });
      }

      function isVisible(element) {
        return !!(element.offsetWidth ||
          element.offsetHeight ||
          element.getClientRects().length);
      }

      function backdropIndex() {
        var topBackdropIndex = -1;
        var opened = openedWindows.keys();
        for (var i = 0; i < opened.length; i++) {
          if (openedWindows.get(opened[i]).value.backdrop) {
            topBackdropIndex = i;
          }
        }

        // If any backdrop exist, ensure that it's index is always
        // right below the top modal
        if (topBackdropIndex > -1 && topBackdropIndex < topModalIndex) {
          topBackdropIndex = topModalIndex;
        }
        return topBackdropIndex;
      }

      $rootScope.$watch(backdropIndex, function(newBackdropIndex) {
        if (backdropScope) {
          backdropScope.index = newBackdropIndex;
        }
      });

      function removeModalWindow(modalInstance, elementToReceiveFocus) {
        var modalWindow = openedWindows.get(modalInstance).value;
        var appendToElement = modalWindow.appendTo;

        //clean up the stack
        openedWindows.remove(modalInstance);
        previousTopOpenedModal = openedWindows.top();
        if (previousTopOpenedModal) {
          topModalIndex = parseInt(previousTopOpenedModal.value.modalDomEl.attr('index'), 10);
        }

        removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, function() {
          var modalBodyClass = modalWindow.openedClass || OPENED_MODAL_CLASS;
          openedClasses.remove(modalBodyClass, modalInstance);
          var areAnyOpen = openedClasses.hasKey(modalBodyClass);
          appendToElement.toggleClass(modalBodyClass, areAnyOpen);
          if (!areAnyOpen && scrollbarPadding && scrollbarPadding.heightOverflow && scrollbarPadding.scrollbarWidth) {
            if (scrollbarPadding.originalRight) {
              appendToElement.css({paddingRight: scrollbarPadding.originalRight + 'px'});
            } else {
              appendToElement.css({paddingRight: ''});
            }
            scrollbarPadding = null;
          }
          toggleTopWindowClass(true);
        }, modalWindow.closedDeferred);
        checkRemoveBackdrop();

        //move focus to specified element if available, or else to body
        if (elementToReceiveFocus && elementToReceiveFocus.focus) {
          elementToReceiveFocus.focus();
        } else if (appendToElement.focus) {
          appendToElement.focus();
        }
      }

      // Add or remove "windowTopClass" from the top window in the stack
      function toggleTopWindowClass(toggleSwitch) {
        var modalWindow;

        if (openedWindows.length() > 0) {
          modalWindow = openedWindows.top().value;
          modalWindow.modalDomEl.toggleClass(modalWindow.windowTopClass || '', toggleSwitch);
        }
      }

      function checkRemoveBackdrop() {
        //remove backdrop if no longer needed
        if (backdropDomEl && backdropIndex() === -1) {
          var backdropScopeRef = backdropScope;
          removeAfterAnimate(backdropDomEl, backdropScope, function() {
            backdropScopeRef = null;
          });
          backdropDomEl = undefined;
          backdropScope = undefined;
        }
      }

      function removeAfterAnimate(domEl, scope, done, closedDeferred) {
        var asyncDeferred;
        var asyncPromise = null;
        var setIsAsync = function() {
          if (!asyncDeferred) {
            asyncDeferred = $q.defer();
            asyncPromise = asyncDeferred.promise;
          }

          return function asyncDone() {
            asyncDeferred.resolve();
          };
        };
        scope.$broadcast($modalStack.NOW_CLOSING_EVENT, setIsAsync);

        // Note that it's intentional that asyncPromise might be null.
        // That's when setIsAsync has not been called during the
        // NOW_CLOSING_EVENT broadcast.
        return $q.when(asyncPromise).then(afterAnimating);

        function afterAnimating() {
          if (afterAnimating.done) {
            return;
          }
          afterAnimating.done = true;

          $animate.leave(domEl).then(function() {
            if (done) {
              done();
            }

            domEl.remove();
            if (closedDeferred) {
              closedDeferred.resolve();
            }
          });

          scope.$destroy();
        }
      }

      $document.on('keydown', keydownListener);

      $rootScope.$on('$destroy', function() {
        $document.off('keydown', keydownListener);
      });

      function keydownListener(evt) {
        if (evt.isDefaultPrevented()) {
          return evt;
        }

        var modal = openedWindows.top();
        if (modal) {
          switch (evt.which) {
            case 27: {
              if (modal.value.keyboard) {
                evt.preventDefault();
                $rootScope.$apply(function() {
                  $modalStack.dismiss(modal.key, 'escape key press');
                });
              }
              break;
            }
            case 9: {
              var list = $modalStack.loadFocusElementList(modal);
              var focusChanged = false;
              if (evt.shiftKey) {
                if ($modalStack.isFocusInFirstItem(evt, list) || $modalStack.isModalFocused(evt, modal)) {
                  focusChanged = $modalStack.focusLastFocusableElement(list);
                }
              } else {
                if ($modalStack.isFocusInLastItem(evt, list)) {
                  focusChanged = $modalStack.focusFirstFocusableElement(list);
                }
              }

              if (focusChanged) {
                evt.preventDefault();
                evt.stopPropagation();
              }

              break;
            }
          }
        }
      }

      $modalStack.open = function(modalInstance, modal) {
        var modalOpener = $document[0].activeElement,
          modalBodyClass = modal.openedClass || OPENED_MODAL_CLASS;

        toggleTopWindowClass(false);

        // Store the current top first, to determine what index we ought to use
        // for the current top modal
        previousTopOpenedModal = openedWindows.top();

        openedWindows.add(modalInstance, {
          deferred: modal.deferred,
          renderDeferred: modal.renderDeferred,
          closedDeferred: modal.closedDeferred,
          modalScope: modal.scope,
          backdrop: modal.backdrop,
          keyboard: modal.keyboard,
          openedClass: modal.openedClass,
          windowTopClass: modal.windowTopClass,
          animation: modal.animation,
          appendTo: modal.appendTo
        });

        openedClasses.put(modalBodyClass, modalInstance);

        var appendToElement = modal.appendTo,
            currBackdropIndex = backdropIndex();

        if (currBackdropIndex >= 0 && !backdropDomEl) {
          backdropScope = $rootScope.$new(true);
          backdropScope.modalOptions = modal;
          backdropScope.index = currBackdropIndex;
          backdropDomEl = angular.element('<div uib-modal-backdrop="modal-backdrop"></div>');
          backdropDomEl.attr({
            'class': 'modal-backdrop',
            'ng-style': '{\'z-index\': 1040 + (index && 1 || 0) + index*10}',
            'uib-modal-animation-class': 'fade',
            'modal-in-class': 'in'
          });
          if (modal.backdropClass) {
            backdropDomEl.addClass(modal.backdropClass);
          }

          if (modal.animation) {
            backdropDomEl.attr('modal-animation', 'true');
          }
          $compile(backdropDomEl)(backdropScope);
          $animate.enter(backdropDomEl, appendToElement);
          if ($uibPosition.isScrollable(appendToElement)) {
            scrollbarPadding = $uibPosition.scrollbarPadding(appendToElement);
            if (scrollbarPadding.heightOverflow && scrollbarPadding.scrollbarWidth) {
              appendToElement.css({paddingRight: scrollbarPadding.right + 'px'});
            }
          }
        }

        var content;
        if (modal.component) {
          content = document.createElement(snake_case(modal.component.name));
          content = angular.element(content);
          content.attr({
            resolve: '$resolve',
            'modal-instance': '$uibModalInstance',
            close: '$close($value)',
            dismiss: '$dismiss($value)'
          });
        } else {
          content = modal.content;
        }

        // Set the top modal index based on the index of the previous top modal
        topModalIndex = previousTopOpenedModal ? parseInt(previousTopOpenedModal.value.modalDomEl.attr('index'), 10) + 1 : 0;
        var angularDomEl = angular.element('<div uib-modal-window="modal-window"></div>');
        angularDomEl.attr({
          'class': 'modal',
          'template-url': modal.windowTemplateUrl,
          'window-top-class': modal.windowTopClass,
          'role': 'dialog',
          'aria-labelledby': modal.ariaLabelledBy,
          'aria-describedby': modal.ariaDescribedBy,
          'size': modal.size,
          'index': topModalIndex,
          'animate': 'animate',
          'ng-style': '{\'z-index\': 1050 + $$topModalIndex*10, display: \'block\'}',
          'tabindex': -1,
          'uib-modal-animation-class': 'fade',
          'modal-in-class': 'in'
        }).append(content);
        if (modal.windowClass) {
          angularDomEl.addClass(modal.windowClass);
        }

        if (modal.animation) {
          angularDomEl.attr('modal-animation', 'true');
        }

        appendToElement.addClass(modalBodyClass);
        if (modal.scope) {
          // we need to explicitly add the modal index to the modal scope
          // because it is needed by ngStyle to compute the zIndex property.
          modal.scope.$$topModalIndex = topModalIndex;
        }
        $animate.enter($compile(angularDomEl)(modal.scope), appendToElement);

        openedWindows.top().value.modalDomEl = angularDomEl;
        openedWindows.top().value.modalOpener = modalOpener;

        applyAriaHidden(angularDomEl);

        function applyAriaHidden(el) {
          if (!el || el[0].tagName === 'BODY') {
            return;
          }

          getSiblings(el).forEach(function(sibling) {
            var elemIsAlreadyHidden = sibling.getAttribute('aria-hidden') === 'true',
              ariaHiddenCount = parseInt(sibling.getAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME), 10);

            if (!ariaHiddenCount) {
              ariaHiddenCount = elemIsAlreadyHidden ? 1 : 0;
            }

            sibling.setAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME, ariaHiddenCount + 1);
            sibling.setAttribute('aria-hidden', 'true');
          });

          return applyAriaHidden(el.parent());

          function getSiblings(el) {
            var children = el.parent() ? el.parent().children() : [];

            return Array.prototype.filter.call(children, function(child) {
              return child !== el[0];
            });
          }
        }
      };

      function broadcastClosing(modalWindow, resultOrReason, closing) {
        return !modalWindow.value.modalScope.$broadcast('modal.closing', resultOrReason, closing).defaultPrevented;
      }

      function unhideBackgroundElements() {
        Array.prototype.forEach.call(
          document.querySelectorAll('[' + ARIA_HIDDEN_ATTRIBUTE_NAME + ']'),
          function(hiddenEl) {
            var ariaHiddenCount = parseInt(hiddenEl.getAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME), 10),
              newHiddenCount = ariaHiddenCount - 1;
            hiddenEl.setAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME, newHiddenCount);

            if (!newHiddenCount) {
              hiddenEl.removeAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME);
              hiddenEl.removeAttribute('aria-hidden');
            }
          }
        );
      }

      $modalStack.close = function(modalInstance, result) {
        var modalWindow = openedWindows.get(modalInstance);
        unhideBackgroundElements();
        if (modalWindow && broadcastClosing(modalWindow, result, true)) {
          modalWindow.value.modalScope.$$uibDestructionScheduled = true;
          modalWindow.value.deferred.resolve(result);
          removeModalWindow(modalInstance, modalWindow.value.modalOpener);
          return true;
        }

        return !modalWindow;
      };

      $modalStack.dismiss = function(modalInstance, reason) {
        var modalWindow = openedWindows.get(modalInstance);
        unhideBackgroundElements();
        if (modalWindow && broadcastClosing(modalWindow, reason, false)) {
          modalWindow.value.modalScope.$$uibDestructionScheduled = true;
          modalWindow.value.deferred.reject(reason);
          removeModalWindow(modalInstance, modalWindow.value.modalOpener);
          return true;
        }
        return !modalWindow;
      };

      $modalStack.dismissAll = function(reason) {
        var topModal = this.getTop();
        while (topModal && this.dismiss(topModal.key, reason)) {
          topModal = this.getTop();
        }
      };

      $modalStack.getTop = function() {
        return openedWindows.top();
      };

      $modalStack.modalRendered = function(modalInstance) {
        var modalWindow = openedWindows.get(modalInstance);
        if (modalWindow) {
          modalWindow.value.renderDeferred.resolve();
        }
      };

      $modalStack.focusFirstFocusableElement = function(list) {
        if (list.length > 0) {
          list[0].focus();
          return true;
        }
        return false;
      };

      $modalStack.focusLastFocusableElement = function(list) {
        if (list.length > 0) {
          list[list.length - 1].focus();
          return true;
        }
        return false;
      };

      $modalStack.isModalFocused = function(evt, modalWindow) {
        if (evt && modalWindow) {
          var modalDomEl = modalWindow.value.modalDomEl;
          if (modalDomEl && modalDomEl.length) {
            return (evt.target || evt.srcElement) === modalDomEl[0];
          }
        }
        return false;
      };

      $modalStack.isFocusInFirstItem = function(evt, list) {
        if (list.length > 0) {
          return (evt.target || evt.srcElement) === list[0];
        }
        return false;
      };

      $modalStack.isFocusInLastItem = function(evt, list) {
        if (list.length > 0) {
          return (evt.target || evt.srcElement) === list[list.length - 1];
        }
        return false;
      };

      $modalStack.loadFocusElementList = function(modalWindow) {
        if (modalWindow) {
          var modalDomE1 = modalWindow.value.modalDomEl;
          if (modalDomE1 && modalDomE1.length) {
            var elements = modalDomE1[0].querySelectorAll(tabbableSelector);
            return elements ?
              Array.prototype.filter.call(elements, function(element) {
                return isVisible(element);
              }) : elements;
          }
        }
      };

      return $modalStack;
    }])

  .provider('$uibModal', function() {
    var $modalProvider = {
      options: {
        animation: true,
        backdrop: true, //can also be false or 'static'
        keyboard: true
      },
      $get: ['$rootScope', '$q', '$document', '$templateRequest', '$controller', '$uibResolve', '$uibModalStack',
        function ($rootScope, $q, $document, $templateRequest, $controller, $uibResolve, $modalStack) {
          var $modal = {};

          function getTemplatePromise(options) {
            return options.template ? $q.when(options.template) :
              $templateRequest(angular.isFunction(options.templateUrl) ?
                options.templateUrl() : options.templateUrl);
          }

          var promiseChain = null;
          $modal.getPromiseChain = function() {
            return promiseChain;
          };

          $modal.open = function(modalOptions) {
            var modalResultDeferred = $q.defer();
            var modalOpenedDeferred = $q.defer();
            var modalClosedDeferred = $q.defer();
            var modalRenderDeferred = $q.defer();

            //prepare an instance of a modal to be injected into controllers and returned to a caller
            var modalInstance = {
              result: modalResultDeferred.promise,
              opened: modalOpenedDeferred.promise,
              closed: modalClosedDeferred.promise,
              rendered: modalRenderDeferred.promise,
              close: function (result) {
                return $modalStack.close(modalInstance, result);
              },
              dismiss: function (reason) {
                return $modalStack.dismiss(modalInstance, reason);
              }
            };

            //merge and clean up options
            modalOptions = angular.extend({}, $modalProvider.options, modalOptions);
            modalOptions.resolve = modalOptions.resolve || {};
            modalOptions.appendTo = modalOptions.appendTo || $document.find('body').eq(0);

            if (!modalOptions.appendTo.length) {
              throw new Error('appendTo element not found. Make sure that the element passed is in DOM.');
            }

            //verify options
            if (!modalOptions.component && !modalOptions.template && !modalOptions.templateUrl) {
              throw new Error('One of component or template or templateUrl options is required.');
            }

            var templateAndResolvePromise;
            if (modalOptions.component) {
              templateAndResolvePromise = $q.when($uibResolve.resolve(modalOptions.resolve, {}, null, null));
            } else {
              templateAndResolvePromise =
                $q.all([getTemplatePromise(modalOptions), $uibResolve.resolve(modalOptions.resolve, {}, null, null)]);
            }

            function resolveWithTemplate() {
              return templateAndResolvePromise;
            }

            // Wait for the resolution of the existing promise chain.
            // Then switch to our own combined promise dependency (regardless of how the previous modal fared).
            // Then add to $modalStack and resolve opened.
            // Finally clean up the chain variable if no subsequent modal has overwritten it.
            var samePromise;
            samePromise = promiseChain = $q.all([promiseChain])
              .then(resolveWithTemplate, resolveWithTemplate)
              .then(function resolveSuccess(tplAndVars) {
                var providedScope = modalOptions.scope || $rootScope;

                var modalScope = providedScope.$new();
                modalScope.$close = modalInstance.close;
                modalScope.$dismiss = modalInstance.dismiss;

                modalScope.$on('$destroy', function() {
                  if (!modalScope.$$uibDestructionScheduled) {
                    modalScope.$dismiss('$uibUnscheduledDestruction');
                  }
                });

                var modal = {
                  scope: modalScope,
                  deferred: modalResultDeferred,
                  renderDeferred: modalRenderDeferred,
                  closedDeferred: modalClosedDeferred,
                  animation: modalOptions.animation,
                  backdrop: modalOptions.backdrop,
                  keyboard: modalOptions.keyboard,
                  backdropClass: modalOptions.backdropClass,
                  windowTopClass: modalOptions.windowTopClass,
                  windowClass: modalOptions.windowClass,
                  windowTemplateUrl: modalOptions.windowTemplateUrl,
                  ariaLabelledBy: modalOptions.ariaLabelledBy,
                  ariaDescribedBy: modalOptions.ariaDescribedBy,
                  size: modalOptions.size,
                  openedClass: modalOptions.openedClass,
                  appendTo: modalOptions.appendTo
                };

                var component = {};
                var ctrlInstance, ctrlInstantiate, ctrlLocals = {};

                if (modalOptions.component) {
                  constructLocals(component, false, true, false);
                  component.name = modalOptions.component;
                  modal.component = component;
                } else if (modalOptions.controller) {
                  constructLocals(ctrlLocals, true, false, true);

                  // the third param will make the controller instantiate later,private api
                  // @see https://github.com/angular/angular.js/blob/master/src/ng/controller.js#L126
                  ctrlInstantiate = $controller(modalOptions.controller, ctrlLocals, true, modalOptions.controllerAs);
                  if (modalOptions.controllerAs && modalOptions.bindToController) {
                    ctrlInstance = ctrlInstantiate.instance;
                    ctrlInstance.$close = modalScope.$close;
                    ctrlInstance.$dismiss = modalScope.$dismiss;
                    angular.extend(ctrlInstance, {
                      $resolve: ctrlLocals.$scope.$resolve
                    }, providedScope);
                  }

                  ctrlInstance = ctrlInstantiate();

                  if (angular.isFunction(ctrlInstance.$onInit)) {
                    ctrlInstance.$onInit();
                  }
                }

                if (!modalOptions.component) {
                  modal.content = tplAndVars[0];
                }

                $modalStack.open(modalInstance, modal);
                modalOpenedDeferred.resolve(true);

                function constructLocals(obj, template, instanceOnScope, injectable) {
                  obj.$scope = modalScope;
                  obj.$scope.$resolve = {};
                  if (instanceOnScope) {
                    obj.$scope.$uibModalInstance = modalInstance;
                  } else {
                    obj.$uibModalInstance = modalInstance;
                  }

                  var resolves = template ? tplAndVars[1] : tplAndVars;
                  angular.forEach(resolves, function(value, key) {
                    if (injectable) {
                      obj[key] = value;
                    }

                    obj.$scope.$resolve[key] = value;
                  });
                }
            }, function resolveError(reason) {
              modalOpenedDeferred.reject(reason);
              modalResultDeferred.reject(reason);
            })['finally'](function() {
              if (promiseChain === samePromise) {
                promiseChain = null;
              }
            });

            return modalInstance;
          };

          return $modal;
        }
      ]
    };

    return $modalProvider;
  });

angular.module('ui.bootstrap.paging', [])
/**
 * Helper internal service for generating common controller code between the
 * pager and pagination components
 */
.factory('uibPaging', ['$parse', function($parse) {
  return {
    create: function(ctrl, $scope, $attrs) {
      ctrl.setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;
      ctrl.ngModelCtrl = { $setViewValue: angular.noop }; // nullModelCtrl
      ctrl._watchers = [];

      ctrl.init = function(ngModelCtrl, config) {
        ctrl.ngModelCtrl = ngModelCtrl;
        ctrl.config = config;

        ngModelCtrl.$render = function() {
          ctrl.render();
        };

        if ($attrs.itemsPerPage) {
          ctrl._watchers.push($scope.$parent.$watch($attrs.itemsPerPage, function(value) {
            ctrl.itemsPerPage = parseInt(value, 10);
            $scope.totalPages = ctrl.calculateTotalPages();
            ctrl.updatePage();
          }));
        } else {
          ctrl.itemsPerPage = config.itemsPerPage;
        }

        $scope.$watch('totalItems', function(newTotal, oldTotal) {
          if (angular.isDefined(newTotal) || newTotal !== oldTotal) {
            $scope.totalPages = ctrl.calculateTotalPages();
            ctrl.updatePage();
          }
        });
      };

      ctrl.calculateTotalPages = function() {
        var totalPages = ctrl.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / ctrl.itemsPerPage);
        return Math.max(totalPages || 0, 1);
      };

      ctrl.render = function() {
        $scope.page = parseInt(ctrl.ngModelCtrl.$viewValue, 10) || 1;
      };

      $scope.selectPage = function(page, evt) {
        if (evt) {
          evt.preventDefault();
        }

        var clickAllowed = !$scope.ngDisabled || !evt;
        if (clickAllowed && $scope.page !== page && page > 0 && page <= $scope.totalPages) {
          if (evt && evt.target) {
            evt.target.blur();
          }
          ctrl.ngModelCtrl.$setViewValue(page);
          ctrl.ngModelCtrl.$render();
        }
      };

      $scope.getText = function(key) {
        return $scope[key + 'Text'] || ctrl.config[key + 'Text'];
      };

      $scope.noPrevious = function() {
        return $scope.page === 1;
      };

      $scope.noNext = function() {
        return $scope.page === $scope.totalPages;
      };

      ctrl.updatePage = function() {
        ctrl.setNumPages($scope.$parent, $scope.totalPages); // Readonly variable

        if ($scope.page > $scope.totalPages) {
          $scope.selectPage($scope.totalPages);
        } else {
          ctrl.ngModelCtrl.$render();
        }
      };

      $scope.$on('$destroy', function() {
        while (ctrl._watchers.length) {
          ctrl._watchers.shift()();
        }
      });
    }
  };
}]);

angular.module('ui.bootstrap.pager', ['ui.bootstrap.paging', 'ui.bootstrap.tabindex'])

.controller('UibPagerController', ['$scope', '$attrs', 'uibPaging', 'uibPagerConfig', function($scope, $attrs, uibPaging, uibPagerConfig) {
  $scope.align = angular.isDefined($attrs.align) ? $scope.$parent.$eval($attrs.align) : uibPagerConfig.align;

  uibPaging.create(this, $scope, $attrs);
}])

.constant('uibPagerConfig', {
  itemsPerPage: 10,
  previousText: '« Previous',
  nextText: 'Next »',
  align: true
})

.directive('uibPager', ['uibPagerConfig', function(uibPagerConfig) {
  return {
    scope: {
      totalItems: '=',
      previousText: '@',
      nextText: '@',
      ngDisabled: '='
    },
    require: ['uibPager', '?ngModel'],
    restrict: 'A',
    controller: 'UibPagerController',
    controllerAs: 'pager',
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/pager/pager.html';
    },
    link: function(scope, element, attrs, ctrls) {
      element.addClass('pager');
      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      if (!ngModelCtrl) {
        return; // do nothing if no ng-model
      }

      paginationCtrl.init(ngModelCtrl, uibPagerConfig);
    }
  };
}]);

angular.module('ui.bootstrap.pagination', ['ui.bootstrap.paging', 'ui.bootstrap.tabindex'])
.controller('UibPaginationController', ['$scope', '$attrs', '$parse', 'uibPaging', 'uibPaginationConfig', function($scope, $attrs, $parse, uibPaging, uibPaginationConfig) {
  var ctrl = this;
  // Setup configuration parameters
  var maxSize = angular.isDefined($attrs.maxSize) ? $scope.$parent.$eval($attrs.maxSize) : uibPaginationConfig.maxSize,
    rotate = angular.isDefined($attrs.rotate) ? $scope.$parent.$eval($attrs.rotate) : uibPaginationConfig.rotate,
    forceEllipses = angular.isDefined($attrs.forceEllipses) ? $scope.$parent.$eval($attrs.forceEllipses) : uibPaginationConfig.forceEllipses,
    boundaryLinkNumbers = angular.isDefined($attrs.boundaryLinkNumbers) ? $scope.$parent.$eval($attrs.boundaryLinkNumbers) : uibPaginationConfig.boundaryLinkNumbers,
    pageLabel = angular.isDefined($attrs.pageLabel) ? function(idx) { return $scope.$parent.$eval($attrs.pageLabel, {$page: idx}); } : angular.identity;
  $scope.boundaryLinks = angular.isDefined($attrs.boundaryLinks) ? $scope.$parent.$eval($attrs.boundaryLinks) : uibPaginationConfig.boundaryLinks;
  $scope.directionLinks = angular.isDefined($attrs.directionLinks) ? $scope.$parent.$eval($attrs.directionLinks) : uibPaginationConfig.directionLinks;
  $attrs.$set('role', 'menu');

  uibPaging.create(this, $scope, $attrs);

  if ($attrs.maxSize) {
    ctrl._watchers.push($scope.$parent.$watch($parse($attrs.maxSize), function(value) {
      maxSize = parseInt(value, 10);
      ctrl.render();
    }));
  }

  // Create page object used in template
  function makePage(number, text, isActive) {
    return {
      number: number,
      text: text,
      active: isActive
    };
  }

  function getPages(currentPage, totalPages) {
    var pages = [];

    // Default page limits
    var startPage = 1, endPage = totalPages;
    var isMaxSized = angular.isDefined(maxSize) && maxSize < totalPages;

    // recompute if maxSize
    if (isMaxSized) {
      if (rotate) {
        // Current page is displayed in the middle of the visible ones
        startPage = Math.max(currentPage - Math.floor(maxSize / 2), 1);
        endPage = startPage + maxSize - 1;

        // Adjust if limit is exceeded
        if (endPage > totalPages) {
          endPage = totalPages;
          startPage = endPage - maxSize + 1;
        }
      } else {
        // Visible pages are paginated with maxSize
        startPage = (Math.ceil(currentPage / maxSize) - 1) * maxSize + 1;

        // Adjust last page if limit is exceeded
        endPage = Math.min(startPage + maxSize - 1, totalPages);
      }
    }

    // Add page number links
    for (var number = startPage; number <= endPage; number++) {
      var page = makePage(number, pageLabel(number), number === currentPage);
      pages.push(page);
    }

    // Add links to move between page sets
    if (isMaxSized && maxSize > 0 && (!rotate || forceEllipses || boundaryLinkNumbers)) {
      if (startPage > 1) {
        if (!boundaryLinkNumbers || startPage > 3) { //need ellipsis for all options unless range is too close to beginning
        var previousPageSet = makePage(startPage - 1, '...', false);
        pages.unshift(previousPageSet);
      }
        if (boundaryLinkNumbers) {
          if (startPage === 3) { //need to replace ellipsis when the buttons would be sequential
            var secondPageLink = makePage(2, '2', false);
            pages.unshift(secondPageLink);
          }
          //add the first page
          var firstPageLink = makePage(1, '1', false);
          pages.unshift(firstPageLink);
        }
      }

      if (endPage < totalPages) {
        if (!boundaryLinkNumbers || endPage < totalPages - 2) { //need ellipsis for all options unless range is too close to end
        var nextPageSet = makePage(endPage + 1, '...', false);
        pages.push(nextPageSet);
      }
        if (boundaryLinkNumbers) {
          if (endPage === totalPages - 2) { //need to replace ellipsis when the buttons would be sequential
            var secondToLastPageLink = makePage(totalPages - 1, totalPages - 1, false);
            pages.push(secondToLastPageLink);
          }
          //add the last page
          var lastPageLink = makePage(totalPages, totalPages, false);
          pages.push(lastPageLink);
        }
      }
    }
    return pages;
  }

  var originalRender = this.render;
  this.render = function() {
    originalRender();
    if ($scope.page > 0 && $scope.page <= $scope.totalPages) {
      $scope.pages = getPages($scope.page, $scope.totalPages);
    }
  };
}])

.constant('uibPaginationConfig', {
  itemsPerPage: 10,
  boundaryLinks: false,
  boundaryLinkNumbers: false,
  directionLinks: true,
  firstText: 'First',
  previousText: 'Previous',
  nextText: 'Next',
  lastText: 'Last',
  rotate: true,
  forceEllipses: false
})

.directive('uibPagination', ['$parse', 'uibPaginationConfig', function($parse, uibPaginationConfig) {
  return {
    scope: {
      totalItems: '=',
      firstText: '@',
      previousText: '@',
      nextText: '@',
      lastText: '@',
      ngDisabled:'='
    },
    require: ['uibPagination', '?ngModel'],
    restrict: 'A',
    controller: 'UibPaginationController',
    controllerAs: 'pagination',
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/pagination/pagination.html';
    },
    link: function(scope, element, attrs, ctrls) {
      element.addClass('pagination');
      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      if (!ngModelCtrl) {
         return; // do nothing if no ng-model
      }

      paginationCtrl.init(ngModelCtrl, uibPaginationConfig);
    }
  };
}]);

/**
 * The following features are still outstanding: animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, html tooltips, and selector delegation.
 */
angular.module('ui.bootstrap.tooltip', ['ui.bootstrap.position', 'ui.bootstrap.stackedMap'])

/**
 * The $tooltip service creates tooltip- and popover-like directives as well as
 * houses global options for them.
 */
.provider('$uibTooltip', function() {
  // The default options tooltip and popover.
  var defaultOptions = {
    placement: 'top',
    placementClassPrefix: '',
    animation: true,
    popupDelay: 0,
    popupCloseDelay: 0,
    useContentExp: false
  };

  // Default hide triggers for each show trigger
  var triggerMap = {
    'mouseenter': 'mouseleave',
    'click': 'click',
    'outsideClick': 'outsideClick',
    'focus': 'blur',
    'none': ''
  };

  // The options specified to the provider globally.
  var globalOptions = {};

  /**
   * `options({})` allows global configuration of all tooltips in the
   * application.
   *
   *   var app = angular.module( 'App', ['ui.bootstrap.tooltip'], function( $tooltipProvider ) {
   *     // place tooltips left instead of top by default
   *     $tooltipProvider.options( { placement: 'left' } );
   *   });
   */
	this.options = function(value) {
		angular.extend(globalOptions, value);
	};

  /**
   * This allows you to extend the set of trigger mappings available. E.g.:
   *
   *   $tooltipProvider.setTriggers( { 'openTrigger': 'closeTrigger' } );
   */
  this.setTriggers = function setTriggers(triggers) {
    angular.extend(triggerMap, triggers);
  };

  /**
   * This is a helper function for translating camel-case to snake_case.
   */
  function snake_case(name) {
    var regexp = /[A-Z]/g;
    var separator = '-';
    return name.replace(regexp, function(letter, pos) {
      return (pos ? separator : '') + letter.toLowerCase();
    });
  }

  /**
   * Returns the actual instance of the $tooltip service.
   * TODO support multiple triggers
   */
  this.$get = ['$window', '$compile', '$timeout', '$document', '$uibPosition', '$interpolate', '$rootScope', '$parse', '$$stackedMap', function($window, $compile, $timeout, $document, $position, $interpolate, $rootScope, $parse, $$stackedMap) {
    var openedTooltips = $$stackedMap.createNew();
    $document.on('keyup', keypressListener);

    $rootScope.$on('$destroy', function() {
      $document.off('keyup', keypressListener);
    });

    function keypressListener(e) {
      if (e.which === 27) {
        var last = openedTooltips.top();
        if (last) {
          last.value.close();
          last = null;
        }
      }
    }

    return function $tooltip(ttType, prefix, defaultTriggerShow, options) {
      options = angular.extend({}, defaultOptions, globalOptions, options);

      /**
       * Returns an object of show and hide triggers.
       *
       * If a trigger is supplied,
       * it is used to show the tooltip; otherwise, it will use the `trigger`
       * option passed to the `$tooltipProvider.options` method; else it will
       * default to the trigger supplied to this directive factory.
       *
       * The hide trigger is based on the show trigger. If the `trigger` option
       * was passed to the `$tooltipProvider.options` method, it will use the
       * mapped trigger from `triggerMap` or the passed trigger if the map is
       * undefined; otherwise, it uses the `triggerMap` value of the show
       * trigger; else it will just use the show trigger.
       */
      function getTriggers(trigger) {
        var show = (trigger || options.trigger || defaultTriggerShow).split(' ');
        var hide = show.map(function(trigger) {
          return triggerMap[trigger] || trigger;
        });
        return {
          show: show,
          hide: hide
        };
      }

      var directiveName = snake_case(ttType);

      var startSym = $interpolate.startSymbol();
      var endSym = $interpolate.endSymbol();
      var template =
        '<div '+ directiveName + '-popup ' +
          'uib-title="' + startSym + 'title' + endSym + '" ' +
          (options.useContentExp ?
            'content-exp="contentExp()" ' :
            'content="' + startSym + 'content' + endSym + '" ') +
          'origin-scope="origScope" ' +
          'class="uib-position-measure ' + prefix + '" ' +
          'tooltip-animation-class="fade"' +
          'uib-tooltip-classes ' +
          'ng-class="{ in: isOpen }" ' +
          '>' +
        '</div>';

      return {
        compile: function(tElem, tAttrs) {
          var tooltipLinker = $compile(template);

          return function link(scope, element, attrs, tooltipCtrl) {
            var tooltip;
            var tooltipLinkedScope;
            var transitionTimeout;
            var showTimeout;
            var hideTimeout;
            var positionTimeout;
            var adjustmentTimeout;
            var appendToBody = angular.isDefined(options.appendToBody) ? options.appendToBody : false;
            var triggers = getTriggers(undefined);
            var hasEnableExp = angular.isDefined(attrs[prefix + 'Enable']);
            var ttScope = scope.$new(true);
            var repositionScheduled = false;
            var isOpenParse = angular.isDefined(attrs[prefix + 'IsOpen']) ? $parse(attrs[prefix + 'IsOpen']) : false;
            var contentParse = options.useContentExp ? $parse(attrs[ttType]) : false;
            var observers = [];
            var lastPlacement;

            var positionTooltip = function() {
              // check if tooltip exists and is not empty
              if (!tooltip || !tooltip.html()) { return; }

              if (!positionTimeout) {
                positionTimeout = $timeout(function() {
                  var ttPosition = $position.positionElements(element, tooltip, ttScope.placement, appendToBody);
                  var initialHeight = angular.isDefined(tooltip.offsetHeight) ? tooltip.offsetHeight : tooltip.prop('offsetHeight');
                  var elementPos = appendToBody ? $position.offset(element) : $position.position(element);
                  tooltip.css({ top: ttPosition.top + 'px', left: ttPosition.left + 'px' });
                  var placementClasses = ttPosition.placement.split('-');

                  if (!tooltip.hasClass(placementClasses[0])) {
                    tooltip.removeClass(lastPlacement.split('-')[0]);
                    tooltip.addClass(placementClasses[0]);
                  }

                  if (!tooltip.hasClass(options.placementClassPrefix + ttPosition.placement)) {
                    tooltip.removeClass(options.placementClassPrefix + lastPlacement);
                    tooltip.addClass(options.placementClassPrefix + ttPosition.placement);
                  }

                  adjustmentTimeout = $timeout(function() {
                    var currentHeight = angular.isDefined(tooltip.offsetHeight) ? tooltip.offsetHeight : tooltip.prop('offsetHeight');
                    var adjustment = $position.adjustTop(placementClasses, elementPos, initialHeight, currentHeight);
                    if (adjustment) {
                      tooltip.css(adjustment);
                    }
                    adjustmentTimeout = null;
                  }, 0, false);

                  // first time through tt element will have the
                  // uib-position-measure class or if the placement
                  // has changed we need to position the arrow.
                  if (tooltip.hasClass('uib-position-measure')) {
                    $position.positionArrow(tooltip, ttPosition.placement);
                    tooltip.removeClass('uib-position-measure');
                  } else if (lastPlacement !== ttPosition.placement) {
                    $position.positionArrow(tooltip, ttPosition.placement);
                  }
                  lastPlacement = ttPosition.placement;

                  positionTimeout = null;
                }, 0, false);
              }
            };

            // Set up the correct scope to allow transclusion later
            ttScope.origScope = scope;

            // By default, the tooltip is not open.
            // TODO add ability to start tooltip opened
            ttScope.isOpen = false;

            function toggleTooltipBind() {
              if (!ttScope.isOpen) {
                showTooltipBind();
              } else {
                hideTooltipBind();
              }
            }

            // Show the tooltip with delay if specified, otherwise show it immediately
            function showTooltipBind() {
              if (hasEnableExp && !scope.$eval(attrs[prefix + 'Enable'])) {
                return;
              }

              cancelHide();
              prepareTooltip();

              if (ttScope.popupDelay) {
                // Do nothing if the tooltip was already scheduled to pop-up.
                // This happens if show is triggered multiple times before any hide is triggered.
                if (!showTimeout) {
                  showTimeout = $timeout(show, ttScope.popupDelay, false);
                }
              } else {
                show();
              }
            }

            function hideTooltipBind() {
              cancelShow();

              if (ttScope.popupCloseDelay) {
                if (!hideTimeout) {
                  hideTimeout = $timeout(hide, ttScope.popupCloseDelay, false);
                }
              } else {
                hide();
              }
            }

            // Show the tooltip popup element.
            function show() {
              cancelShow();
              cancelHide();

              // Don't show empty tooltips.
              if (!ttScope.content) {
                return angular.noop;
              }

              createTooltip();

              // And show the tooltip.
              ttScope.$evalAsync(function() {
                ttScope.isOpen = true;
                assignIsOpen(true);
                positionTooltip();
              });
            }

            function cancelShow() {
              if (showTimeout) {
                $timeout.cancel(showTimeout);
                showTimeout = null;
              }

              if (positionTimeout) {
                $timeout.cancel(positionTimeout);
                positionTimeout = null;
              }
            }

            // Hide the tooltip popup element.
            function hide() {
              if (!ttScope) {
                return;
              }

              // First things first: we don't show it anymore.
              ttScope.$evalAsync(function() {
                if (ttScope) {
                  ttScope.isOpen = false;
                  assignIsOpen(false);
                  // And now we remove it from the DOM. However, if we have animation, we
                  // need to wait for it to expire beforehand.
                  // FIXME: this is a placeholder for a port of the transitions library.
                  // The fade transition in TWBS is 150ms.
                  if (ttScope.animation) {
                    if (!transitionTimeout) {
                      transitionTimeout = $timeout(removeTooltip, 150, false);
                    }
                  } else {
                    removeTooltip();
                  }
                }
              });
            }

            function cancelHide() {
              if (hideTimeout) {
                $timeout.cancel(hideTimeout);
                hideTimeout = null;
              }

              if (transitionTimeout) {
                $timeout.cancel(transitionTimeout);
                transitionTimeout = null;
              }
            }

            function createTooltip() {
              // There can only be one tooltip element per directive shown at once.
              if (tooltip) {
                return;
              }

              tooltipLinkedScope = ttScope.$new();
              tooltip = tooltipLinker(tooltipLinkedScope, function(tooltip) {
                if (appendToBody) {
                  $document.find('body').append(tooltip);
                } else {
                  element.after(tooltip);
                }
              });

              openedTooltips.add(ttScope, {
                close: hide
              });

              prepObservers();
            }

            function removeTooltip() {
              cancelShow();
              cancelHide();
              unregisterObservers();

              if (tooltip) {
                tooltip.remove();
                
                tooltip = null;
                if (adjustmentTimeout) {
                  $timeout.cancel(adjustmentTimeout);
                }
              }

              openedTooltips.remove(ttScope);
              
              if (tooltipLinkedScope) {
                tooltipLinkedScope.$destroy();
                tooltipLinkedScope = null;
              }
            }

            /**
             * Set the initial scope values. Once
             * the tooltip is created, the observers
             * will be added to keep things in sync.
             */
            function prepareTooltip() {
              ttScope.title = attrs[prefix + 'Title'];
              if (contentParse) {
                ttScope.content = contentParse(scope);
              } else {
                ttScope.content = attrs[ttType];
              }

              ttScope.popupClass = attrs[prefix + 'Class'];
              ttScope.placement = angular.isDefined(attrs[prefix + 'Placement']) ? attrs[prefix + 'Placement'] : options.placement;
              var placement = $position.parsePlacement(ttScope.placement);
              lastPlacement = placement[1] ? placement[0] + '-' + placement[1] : placement[0];

              var delay = parseInt(attrs[prefix + 'PopupDelay'], 10);
              var closeDelay = parseInt(attrs[prefix + 'PopupCloseDelay'], 10);
              ttScope.popupDelay = !isNaN(delay) ? delay : options.popupDelay;
              ttScope.popupCloseDelay = !isNaN(closeDelay) ? closeDelay : options.popupCloseDelay;
            }

            function assignIsOpen(isOpen) {
              if (isOpenParse && angular.isFunction(isOpenParse.assign)) {
                isOpenParse.assign(scope, isOpen);
              }
            }

            ttScope.contentExp = function() {
              return ttScope.content;
            };

            /**
             * Observe the relevant attributes.
             */
            attrs.$observe('disabled', function(val) {
              if (val) {
                cancelShow();
              }

              if (val && ttScope.isOpen) {
                hide();
              }
            });

            if (isOpenParse) {
              scope.$watch(isOpenParse, function(val) {
                if (ttScope && !val === ttScope.isOpen) {
                  toggleTooltipBind();
                }
              });
            }

            function prepObservers() {
              observers.length = 0;

              if (contentParse) {
                observers.push(
                  scope.$watch(contentParse, function(val) {
                    ttScope.content = val;
                    if (!val && ttScope.isOpen) {
                      hide();
                    }
                  })
                );

                observers.push(
                  tooltipLinkedScope.$watch(function() {
                    if (!repositionScheduled) {
                      repositionScheduled = true;
                      tooltipLinkedScope.$$postDigest(function() {
                        repositionScheduled = false;
                        if (ttScope && ttScope.isOpen) {
                          positionTooltip();
                        }
                      });
                    }
                  })
                );
              } else {
                observers.push(
                  attrs.$observe(ttType, function(val) {
                    ttScope.content = val;
                    if (!val && ttScope.isOpen) {
                      hide();
                    } else {
                      positionTooltip();
                    }
                  })
                );
              }

              observers.push(
                attrs.$observe(prefix + 'Title', function(val) {
                  ttScope.title = val;
                  if (ttScope.isOpen) {
                    positionTooltip();
                  }
                })
              );

              observers.push(
                attrs.$observe(prefix + 'Placement', function(val) {
                  ttScope.placement = val ? val : options.placement;
                  if (ttScope.isOpen) {
                    positionTooltip();
                  }
                })
              );
            }

            function unregisterObservers() {
              if (observers.length) {
                angular.forEach(observers, function(observer) {
                  observer();
                });
                observers.length = 0;
              }
            }

            // hide tooltips/popovers for outsideClick trigger
            function bodyHideTooltipBind(e) {
              if (!ttScope || !ttScope.isOpen || !tooltip) {
                return;
              }
              // make sure the tooltip/popover link or tool tooltip/popover itself were not clicked
              if (!element[0].contains(e.target) && !tooltip[0].contains(e.target)) {
                hideTooltipBind();
              }
            }

            // KeyboardEvent handler to hide the tooltip on Escape key press
            function hideOnEscapeKey(e) {
              if (e.which === 27) {
                hideTooltipBind();
              }
            }

            var unregisterTriggers = function() {
              triggers.show.forEach(function(trigger) {
                if (trigger === 'outsideClick') {
                  element.off('click', toggleTooltipBind);
                } else {
                  element.off(trigger, showTooltipBind);
                  element.off(trigger, toggleTooltipBind);
                }
                element.off('keypress', hideOnEscapeKey);
              });
              triggers.hide.forEach(function(trigger) {
                if (trigger === 'outsideClick') {
                  $document.off('click', bodyHideTooltipBind);
                } else {
                  element.off(trigger, hideTooltipBind);
                }
              });
            };

            function prepTriggers() {
              var showTriggers = [], hideTriggers = [];
              var val = scope.$eval(attrs[prefix + 'Trigger']);
              unregisterTriggers();

              if (angular.isObject(val)) {
                Object.keys(val).forEach(function(key) {
                  showTriggers.push(key);
                  hideTriggers.push(val[key]);
                });
                triggers = {
                  show: showTriggers,
                  hide: hideTriggers
                };
              } else {
                triggers = getTriggers(val);
              }

              if (triggers.show !== 'none') {
                triggers.show.forEach(function(trigger, idx) {
                  if (trigger === 'outsideClick') {
                    element.on('click', toggleTooltipBind);
                    $document.on('click', bodyHideTooltipBind);
                  } else if (trigger === triggers.hide[idx]) {
                    element.on(trigger, toggleTooltipBind);
                  } else if (trigger) {
                    element.on(trigger, showTooltipBind);
                    element.on(triggers.hide[idx], hideTooltipBind);
                  }
                  element.on('keypress', hideOnEscapeKey);
                });
              }
            }

            prepTriggers();

            var animation = scope.$eval(attrs[prefix + 'Animation']);
            ttScope.animation = angular.isDefined(animation) ? !!animation : options.animation;

            var appendToBodyVal;
            var appendKey = prefix + 'AppendToBody';
            if (appendKey in attrs && attrs[appendKey] === undefined) {
              appendToBodyVal = true;
            } else {
              appendToBodyVal = scope.$eval(attrs[appendKey]);
            }

            appendToBody = angular.isDefined(appendToBodyVal) ? appendToBodyVal : appendToBody;

            // Make sure tooltip is destroyed and removed.
            scope.$on('$destroy', function onDestroyTooltip() {
              unregisterTriggers();
              removeTooltip();
              ttScope = null;
            });
          };
        }
      };
    };
  }];
})

// This is mostly ngInclude code but with a custom scope
.directive('uibTooltipTemplateTransclude', [
         '$animate', '$sce', '$compile', '$templateRequest',
function ($animate, $sce, $compile, $templateRequest) {
  return {
    link: function(scope, elem, attrs) {
      var origScope = scope.$eval(attrs.tooltipTemplateTranscludeScope);

      var changeCounter = 0,
        currentScope,
        previousElement,
        currentElement;

      var cleanupLastIncludeContent = function() {
        if (previousElement) {
          previousElement.remove();
          previousElement = null;
        }

        if (currentScope) {
          currentScope.$destroy();
          currentScope = null;
        }

        if (currentElement) {
          $animate.leave(currentElement).then(function() {
            previousElement = null;
          });
          previousElement = currentElement;
          currentElement = null;
        }
      };

      scope.$watch($sce.parseAsResourceUrl(attrs.uibTooltipTemplateTransclude), function(src) {
        var thisChangeId = ++changeCounter;

        if (src) {
          //set the 2nd param to true to ignore the template request error so that the inner
          //contents and scope can be cleaned up.
          $templateRequest(src, true).then(function(response) {
            if (thisChangeId !== changeCounter) { return; }
            var newScope = origScope.$new();
            var template = response;

            var clone = $compile(template)(newScope, function(clone) {
              cleanupLastIncludeContent();
              $animate.enter(clone, elem);
            });

            currentScope = newScope;
            currentElement = clone;

            currentScope.$emit('$includeContentLoaded', src);
          }, function() {
            if (thisChangeId === changeCounter) {
              cleanupLastIncludeContent();
              scope.$emit('$includeContentError', src);
            }
          });
          scope.$emit('$includeContentRequested', src);
        } else {
          cleanupLastIncludeContent();
        }
      });

      scope.$on('$destroy', cleanupLastIncludeContent);
    }
  };
}])

/**
 * Note that it's intentional that these classes are *not* applied through $animate.
 * They must not be animated as they're expected to be present on the tooltip on
 * initialization.
 */
.directive('uibTooltipClasses', ['$uibPosition', function($uibPosition) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      // need to set the primary position so the
      // arrow has space during position measure.
      // tooltip.positionTooltip()
      if (scope.placement) {
        // // There are no top-left etc... classes
        // // in TWBS, so we need the primary position.
        var position = $uibPosition.parsePlacement(scope.placement);
        element.addClass(position[0]);
      }

      if (scope.popupClass) {
        element.addClass(scope.popupClass);
      }

      if (scope.animation) {
        element.addClass(attrs.tooltipAnimationClass);
      }
    }
  };
}])

.directive('uibTooltipPopup', function() {
  return {
    restrict: 'A',
    scope: { content: '@' },
    templateUrl: 'uib/template/tooltip/tooltip-popup.html'
  };
})

.directive('uibTooltip', [ '$uibTooltip', function($uibTooltip) {
  return $uibTooltip('uibTooltip', 'tooltip', 'mouseenter');
}])

.directive('uibTooltipTemplatePopup', function() {
  return {
    restrict: 'A',
    scope: { contentExp: '&', originScope: '&' },
    templateUrl: 'uib/template/tooltip/tooltip-template-popup.html'
  };
})

.directive('uibTooltipTemplate', ['$uibTooltip', function($uibTooltip) {
  return $uibTooltip('uibTooltipTemplate', 'tooltip', 'mouseenter', {
    useContentExp: true
  });
}])

.directive('uibTooltipHtmlPopup', function() {
  return {
    restrict: 'A',
    scope: { contentExp: '&' },
    templateUrl: 'uib/template/tooltip/tooltip-html-popup.html'
  };
})

.directive('uibTooltipHtml', ['$uibTooltip', function($uibTooltip) {
  return $uibTooltip('uibTooltipHtml', 'tooltip', 'mouseenter', {
    useContentExp: true
  });
}]);

/**
 * The following features are still outstanding: popup delay, animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, and selector delegatation.
 */
angular.module('ui.bootstrap.popover', ['ui.bootstrap.tooltip'])

.directive('uibPopoverTemplatePopup', function() {
  return {
    restrict: 'A',
    scope: { uibTitle: '@', contentExp: '&', originScope: '&' },
    templateUrl: 'uib/template/popover/popover-template.html'
  };
})

.directive('uibPopoverTemplate', ['$uibTooltip', function($uibTooltip) {
  return $uibTooltip('uibPopoverTemplate', 'popover', 'click', {
    useContentExp: true
  });
}])

.directive('uibPopoverHtmlPopup', function() {
  return {
    restrict: 'A',
    scope: { contentExp: '&', uibTitle: '@' },
    templateUrl: 'uib/template/popover/popover-html.html'
  };
})

.directive('uibPopoverHtml', ['$uibTooltip', function($uibTooltip) {
  return $uibTooltip('uibPopoverHtml', 'popover', 'click', {
    useContentExp: true
  });
}])

.directive('uibPopoverPopup', function() {
  return {
    restrict: 'A',
    scope: { uibTitle: '@', content: '@' },
    templateUrl: 'uib/template/popover/popover.html'
  };
})

.directive('uibPopover', ['$uibTooltip', function($uibTooltip) {
  return $uibTooltip('uibPopover', 'popover', 'click');
}]);

angular.module('ui.bootstrap.progressbar', [])

.constant('uibProgressConfig', {
  animate: true,
  max: 100
})

.controller('UibProgressController', ['$scope', '$attrs', 'uibProgressConfig', function($scope, $attrs, progressConfig) {
  var self = this,
      animate = angular.isDefined($attrs.animate) ? $scope.$parent.$eval($attrs.animate) : progressConfig.animate;

  this.bars = [];
  $scope.max = getMaxOrDefault();

  this.addBar = function(bar, element, attrs) {
    if (!animate) {
      element.css({'transition': 'none'});
    }

    this.bars.push(bar);

    bar.max = getMaxOrDefault();
    bar.title = attrs && angular.isDefined(attrs.title) ? attrs.title : 'progressbar';

    bar.$watch('value', function(value) {
      bar.recalculatePercentage();
    });

    bar.recalculatePercentage = function() {
      var totalPercentage = self.bars.reduce(function(total, bar) {
        bar.percent = +(100 * bar.value / bar.max).toFixed(2);
        return total + bar.percent;
      }, 0);

      if (totalPercentage > 100) {
        bar.percent -= totalPercentage - 100;
      }
    };

    bar.$on('$destroy', function() {
      element = null;
      self.removeBar(bar);
    });
  };

  this.removeBar = function(bar) {
    this.bars.splice(this.bars.indexOf(bar), 1);
    this.bars.forEach(function (bar) {
      bar.recalculatePercentage();
    });
  };

  //$attrs.$observe('maxParam', function(maxParam) {
  $scope.$watch('maxParam', function(maxParam) {
    self.bars.forEach(function(bar) {
      bar.max = getMaxOrDefault();
      bar.recalculatePercentage();
    });
  });

  function getMaxOrDefault () {
    return angular.isDefined($scope.maxParam) ? $scope.maxParam : progressConfig.max;
  }
}])

.directive('uibProgress', function() {
  return {
    replace: true,
    transclude: true,
    controller: 'UibProgressController',
    require: 'uibProgress',
    scope: {
      maxParam: '=?max'
    },
    templateUrl: 'uib/template/progressbar/progress.html'
  };
})

.directive('uibBar', function() {
  return {
    replace: true,
    transclude: true,
    require: '^uibProgress',
    scope: {
      value: '=',
      type: '@'
    },
    templateUrl: 'uib/template/progressbar/bar.html',
    link: function(scope, element, attrs, progressCtrl) {
      progressCtrl.addBar(scope, element, attrs);
    }
  };
})

.directive('uibProgressbar', function() {
  return {
    replace: true,
    transclude: true,
    controller: 'UibProgressController',
    scope: {
      value: '=',
      maxParam: '=?max',
      type: '@'
    },
    templateUrl: 'uib/template/progressbar/progressbar.html',
    link: function(scope, element, attrs, progressCtrl) {
      progressCtrl.addBar(scope, angular.element(element.children()[0]), {title: attrs.title});
    }
  };
});

angular.module('ui.bootstrap.rating', [])

.constant('uibRatingConfig', {
  max: 5,
  stateOn: null,
  stateOff: null,
  enableReset: true,
  titles: ['one', 'two', 'three', 'four', 'five']
})

.controller('UibRatingController', ['$scope', '$attrs', 'uibRatingConfig', function($scope, $attrs, ratingConfig) {
  var ngModelCtrl = { $setViewValue: angular.noop },
    self = this;

  this.init = function(ngModelCtrl_) {
    ngModelCtrl = ngModelCtrl_;
    ngModelCtrl.$render = this.render;

    ngModelCtrl.$formatters.push(function(value) {
      if (angular.isNumber(value) && value << 0 !== value) {
        value = Math.round(value);
      }

      return value;
    });

    this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$parent.$eval($attrs.stateOn) : ratingConfig.stateOn;
    this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$parent.$eval($attrs.stateOff) : ratingConfig.stateOff;
    this.enableReset = angular.isDefined($attrs.enableReset) ?
      $scope.$parent.$eval($attrs.enableReset) : ratingConfig.enableReset;
    var tmpTitles = angular.isDefined($attrs.titles) ? $scope.$parent.$eval($attrs.titles) : ratingConfig.titles;
    this.titles = angular.isArray(tmpTitles) && tmpTitles.length > 0 ?
      tmpTitles : ratingConfig.titles;

    var ratingStates = angular.isDefined($attrs.ratingStates) ?
      $scope.$parent.$eval($attrs.ratingStates) :
      new Array(angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : ratingConfig.max);
    $scope.range = this.buildTemplateObjects(ratingStates);
  };

  this.buildTemplateObjects = function(states) {
    for (var i = 0, n = states.length; i < n; i++) {
      states[i] = angular.extend({ index: i }, { stateOn: this.stateOn, stateOff: this.stateOff, title: this.getTitle(i) }, states[i]);
    }
    return states;
  };

  this.getTitle = function(index) {
    if (index >= this.titles.length) {
      return index + 1;
    }

    return this.titles[index];
  };

  $scope.rate = function(value) {
    if (!$scope.readonly && value >= 0 && value <= $scope.range.length) {
      var newViewValue = self.enableReset && ngModelCtrl.$viewValue === value ? 0 : value;
      ngModelCtrl.$setViewValue(newViewValue);
      ngModelCtrl.$render();
    }
  };

  $scope.enter = function(value) {
    if (!$scope.readonly) {
      $scope.value = value;
    }
    $scope.onHover({value: value});
  };

  $scope.reset = function() {
    $scope.value = ngModelCtrl.$viewValue;
    $scope.onLeave();
  };

  $scope.onKeydown = function(evt) {
    if (/(37|38|39|40)/.test(evt.which)) {
      evt.preventDefault();
      evt.stopPropagation();
      $scope.rate($scope.value + (evt.which === 38 || evt.which === 39 ? 1 : -1));
    }
  };

  this.render = function() {
    $scope.value = ngModelCtrl.$viewValue;
    $scope.title = self.getTitle($scope.value - 1);
  };
}])

.directive('uibRating', function() {
  return {
    require: ['uibRating', 'ngModel'],
    restrict: 'A',
    scope: {
      readonly: '=?readOnly',
      onHover: '&',
      onLeave: '&'
    },
    controller: 'UibRatingController',
    templateUrl: 'uib/template/rating/rating.html',
    link: function(scope, element, attrs, ctrls) {
      var ratingCtrl = ctrls[0], ngModelCtrl = ctrls[1];
      ratingCtrl.init(ngModelCtrl);
    }
  };
});

angular.module('ui.bootstrap.tabs', [])

.controller('UibTabsetController', ['$scope', function ($scope) {
  var ctrl = this,
    oldIndex;
  ctrl.tabs = [];

  ctrl.select = function(index, evt) {
    if (!destroyed) {
      var previousIndex = findTabIndex(oldIndex);
      var previousSelected = ctrl.tabs[previousIndex];
      if (previousSelected) {
        previousSelected.tab.onDeselect({
          $event: evt,
          $selectedIndex: index
        });
        if (evt && evt.isDefaultPrevented()) {
          return;
        }
        previousSelected.tab.active = false;
      }

      var selected = ctrl.tabs[index];
      if (selected) {
        selected.tab.onSelect({
          $event: evt
        });
        selected.tab.active = true;
        ctrl.active = selected.index;
        oldIndex = selected.index;
      } else if (!selected && angular.isDefined(oldIndex)) {
        ctrl.active = null;
        oldIndex = null;
      }
    }
  };

  ctrl.addTab = function addTab(tab) {
    ctrl.tabs.push({
      tab: tab,
      index: tab.index
    });
    ctrl.tabs.sort(function(t1, t2) {
      if (t1.index > t2.index) {
        return 1;
      }

      if (t1.index < t2.index) {
        return -1;
      }

      return 0;
    });

    if (tab.index === ctrl.active || !angular.isDefined(ctrl.active) && ctrl.tabs.length === 1) {
      var newActiveIndex = findTabIndex(tab.index);
      ctrl.select(newActiveIndex);
    }
  };

  ctrl.removeTab = function removeTab(tab) {
    var index;
    for (var i = 0; i < ctrl.tabs.length; i++) {
      if (ctrl.tabs[i].tab === tab) {
        index = i;
        break;
      }
    }

    if (ctrl.tabs[index].index === ctrl.active) {
      var newActiveTabIndex = index === ctrl.tabs.length - 1 ?
        index - 1 : index + 1 % ctrl.tabs.length;
      ctrl.select(newActiveTabIndex);
    }

    ctrl.tabs.splice(index, 1);
  };

  $scope.$watch('tabset.active', function(val) {
    if (angular.isDefined(val) && val !== oldIndex) {
      ctrl.select(findTabIndex(val));
    }
  });

  var destroyed;
  $scope.$on('$destroy', function() {
    destroyed = true;
  });

  function findTabIndex(index) {
    for (var i = 0; i < ctrl.tabs.length; i++) {
      if (ctrl.tabs[i].index === index) {
        return i;
      }
    }
  }
}])

.directive('uibTabset', function() {
  return {
    transclude: true,
    replace: true,
    scope: {},
    bindToController: {
      active: '=?',
      type: '@'
    },
    controller: 'UibTabsetController',
    controllerAs: 'tabset',
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/tabs/tabset.html';
    },
    link: function(scope, element, attrs) {
      scope.vertical = angular.isDefined(attrs.vertical) ?
        scope.$parent.$eval(attrs.vertical) : false;
      scope.justified = angular.isDefined(attrs.justified) ?
        scope.$parent.$eval(attrs.justified) : false;
    }
  };
})

.directive('uibTab', ['$parse', function($parse) {
  return {
    require: '^uibTabset',
    replace: true,
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/tabs/tab.html';
    },
    transclude: true,
    scope: {
      heading: '@',
      index: '=?',
      classes: '@?',
      onSelect: '&select', //This callback is called in contentHeadingTransclude
                          //once it inserts the tab's content into the dom
      onDeselect: '&deselect'
    },
    controller: function() {
      //Empty controller so other directives can require being 'under' a tab
    },
    controllerAs: 'tab',
    link: function(scope, elm, attrs, tabsetCtrl, transclude) {
      scope.disabled = false;
      if (attrs.disable) {
        scope.$parent.$watch($parse(attrs.disable), function(value) {
          scope.disabled = !! value;
        });
      }

      if (angular.isUndefined(attrs.index)) {
        if (tabsetCtrl.tabs && tabsetCtrl.tabs.length) {
          scope.index = Math.max.apply(null, tabsetCtrl.tabs.map(function(t) { return t.index; })) + 1;
        } else {
          scope.index = 0;
        }
      }

      if (angular.isUndefined(attrs.classes)) {
        scope.classes = '';
      }

      scope.select = function(evt) {
        if (!scope.disabled) {
          var index;
          for (var i = 0; i < tabsetCtrl.tabs.length; i++) {
            if (tabsetCtrl.tabs[i].tab === scope) {
              index = i;
              break;
            }
          }

          tabsetCtrl.select(index, evt);
        }
      };

      tabsetCtrl.addTab(scope);
      scope.$on('$destroy', function() {
        tabsetCtrl.removeTab(scope);
      });

      //We need to transclude later, once the content container is ready.
      //when this link happens, we're inside a tab heading.
      scope.$transcludeFn = transclude;
    }
  };
}])

.directive('uibTabHeadingTransclude', function() {
  return {
    restrict: 'A',
    require: '^uibTab',
    link: function(scope, elm) {
      scope.$watch('headingElement', function updateHeadingElement(heading) {
        if (heading) {
          elm.html('');
          elm.append(heading);
        }
      });
    }
  };
})

.directive('uibTabContentTransclude', function() {
  return {
    restrict: 'A',
    require: '^uibTabset',
    link: function(scope, elm, attrs) {
      var tab = scope.$eval(attrs.uibTabContentTransclude).tab;

      //Now our tab is ready to be transcluded: both the tab heading area
      //and the tab content area are loaded.  Transclude 'em both.
      tab.$transcludeFn(tab.$parent, function(contents) {
        angular.forEach(contents, function(node) {
          if (isTabHeading(node)) {
            //Let tabHeadingTransclude know.
            tab.headingElement = node;
          } else {
            elm.append(node);
          }
        });
      });
    }
  };

  function isTabHeading(node) {
    return node.tagName && (
      node.hasAttribute('uib-tab-heading') ||
      node.hasAttribute('data-uib-tab-heading') ||
      node.hasAttribute('x-uib-tab-heading') ||
      node.tagName.toLowerCase() === 'uib-tab-heading' ||
      node.tagName.toLowerCase() === 'data-uib-tab-heading' ||
      node.tagName.toLowerCase() === 'x-uib-tab-heading' ||
      node.tagName.toLowerCase() === 'uib:tab-heading'
    );
  }
});

angular.module('ui.bootstrap.timepicker', [])

.constant('uibTimepickerConfig', {
  hourStep: 1,
  minuteStep: 1,
  secondStep: 1,
  showMeridian: true,
  showSeconds: false,
  meridians: null,
  readonlyInput: false,
  mousewheel: true,
  arrowkeys: true,
  showSpinners: true,
  templateUrl: 'uib/template/timepicker/timepicker.html'
})

.controller('UibTimepickerController', ['$scope', '$element', '$attrs', '$parse', '$log', '$locale', 'uibTimepickerConfig', function($scope, $element, $attrs, $parse, $log, $locale, timepickerConfig) {
  var hoursModelCtrl, minutesModelCtrl, secondsModelCtrl;
  var selected = new Date(),
    watchers = [],
    ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl
    meridians = angular.isDefined($attrs.meridians) ? $scope.$parent.$eval($attrs.meridians) : timepickerConfig.meridians || $locale.DATETIME_FORMATS.AMPMS,
    padHours = angular.isDefined($attrs.padHours) ? $scope.$parent.$eval($attrs.padHours) : true;

  $scope.tabindex = angular.isDefined($attrs.tabindex) ? $attrs.tabindex : 0;
  $element.removeAttr('tabindex');

  this.init = function(ngModelCtrl_, inputs) {
    ngModelCtrl = ngModelCtrl_;
    ngModelCtrl.$render = this.render;

    ngModelCtrl.$formatters.unshift(function(modelValue) {
      return modelValue ? new Date(modelValue) : null;
    });

    var hoursInputEl = inputs.eq(0),
        minutesInputEl = inputs.eq(1),
        secondsInputEl = inputs.eq(2);

    hoursModelCtrl = hoursInputEl.controller('ngModel');
    minutesModelCtrl = minutesInputEl.controller('ngModel');
    secondsModelCtrl = secondsInputEl.controller('ngModel');

    var mousewheel = angular.isDefined($attrs.mousewheel) ? $scope.$parent.$eval($attrs.mousewheel) : timepickerConfig.mousewheel;

    if (mousewheel) {
      this.setupMousewheelEvents(hoursInputEl, minutesInputEl, secondsInputEl);
    }

    var arrowkeys = angular.isDefined($attrs.arrowkeys) ? $scope.$parent.$eval($attrs.arrowkeys) : timepickerConfig.arrowkeys;
    if (arrowkeys) {
      this.setupArrowkeyEvents(hoursInputEl, minutesInputEl, secondsInputEl);
    }

    $scope.readonlyInput = angular.isDefined($attrs.readonlyInput) ? $scope.$parent.$eval($attrs.readonlyInput) : timepickerConfig.readonlyInput;
    this.setupInputEvents(hoursInputEl, minutesInputEl, secondsInputEl);
  };

  var hourStep = timepickerConfig.hourStep;
  if ($attrs.hourStep) {
    watchers.push($scope.$parent.$watch($parse($attrs.hourStep), function(value) {
      hourStep = +value;
    }));
  }

  var minuteStep = timepickerConfig.minuteStep;
  if ($attrs.minuteStep) {
    watchers.push($scope.$parent.$watch($parse($attrs.minuteStep), function(value) {
      minuteStep = +value;
    }));
  }

  var min;
  watchers.push($scope.$parent.$watch($parse($attrs.min), function(value) {
    var dt = new Date(value);
    min = isNaN(dt) ? undefined : dt;
  }));

  var max;
  watchers.push($scope.$parent.$watch($parse($attrs.max), function(value) {
    var dt = new Date(value);
    max = isNaN(dt) ? undefined : dt;
  }));

  var disabled = false;
  if ($attrs.ngDisabled) {
    watchers.push($scope.$parent.$watch($parse($attrs.ngDisabled), function(value) {
      disabled = value;
    }));
  }

  $scope.noIncrementHours = function() {
    var incrementedSelected = addMinutes(selected, hourStep * 60);
    return disabled || incrementedSelected > max ||
      incrementedSelected < selected && incrementedSelected < min;
  };

  $scope.noDecrementHours = function() {
    var decrementedSelected = addMinutes(selected, -hourStep * 60);
    return disabled || decrementedSelected < min ||
      decrementedSelected > selected && decrementedSelected > max;
  };

  $scope.noIncrementMinutes = function() {
    var incrementedSelected = addMinutes(selected, minuteStep);
    return disabled || incrementedSelected > max ||
      incrementedSelected < selected && incrementedSelected < min;
  };

  $scope.noDecrementMinutes = function() {
    var decrementedSelected = addMinutes(selected, -minuteStep);
    return disabled || decrementedSelected < min ||
      decrementedSelected > selected && decrementedSelected > max;
  };

  $scope.noIncrementSeconds = function() {
    var incrementedSelected = addSeconds(selected, secondStep);
    return disabled || incrementedSelected > max ||
      incrementedSelected < selected && incrementedSelected < min;
  };

  $scope.noDecrementSeconds = function() {
    var decrementedSelected = addSeconds(selected, -secondStep);
    return disabled || decrementedSelected < min ||
      decrementedSelected > selected && decrementedSelected > max;
  };

  $scope.noToggleMeridian = function() {
    if (selected.getHours() < 12) {
      return disabled || addMinutes(selected, 12 * 60) > max;
    }

    return disabled || addMinutes(selected, -12 * 60) < min;
  };

  var secondStep = timepickerConfig.secondStep;
  if ($attrs.secondStep) {
    watchers.push($scope.$parent.$watch($parse($attrs.secondStep), function(value) {
      secondStep = +value;
    }));
  }

  $scope.showSeconds = timepickerConfig.showSeconds;
  if ($attrs.showSeconds) {
    watchers.push($scope.$parent.$watch($parse($attrs.showSeconds), function(value) {
      $scope.showSeconds = !!value;
    }));
  }

  // 12H / 24H mode
  $scope.showMeridian = timepickerConfig.showMeridian;
  if ($attrs.showMeridian) {
    watchers.push($scope.$parent.$watch($parse($attrs.showMeridian), function(value) {
      $scope.showMeridian = !!value;

      if (ngModelCtrl.$error.time) {
        // Evaluate from template
        var hours = getHoursFromTemplate(), minutes = getMinutesFromTemplate();
        if (angular.isDefined(hours) && angular.isDefined(minutes)) {
          selected.setHours(hours);
          refresh();
        }
      } else {
        updateTemplate();
      }
    }));
  }

  // Get $scope.hours in 24H mode if valid
  function getHoursFromTemplate() {
    var hours = +$scope.hours;
    var valid = $scope.showMeridian ? hours > 0 && hours < 13 :
      hours >= 0 && hours < 24;
    if (!valid || $scope.hours === '') {
      return undefined;
    }

    if ($scope.showMeridian) {
      if (hours === 12) {
        hours = 0;
      }
      if ($scope.meridian === meridians[1]) {
        hours = hours + 12;
      }
    }
    return hours;
  }

  function getMinutesFromTemplate() {
    var minutes = +$scope.minutes;
    var valid = minutes >= 0 && minutes < 60;
    if (!valid || $scope.minutes === '') {
      return undefined;
    }
    return minutes;
  }

  function getSecondsFromTemplate() {
    var seconds = +$scope.seconds;
    return seconds >= 0 && seconds < 60 ? seconds : undefined;
  }

  function pad(value, noPad) {
    if (value === null) {
      return '';
    }

    return angular.isDefined(value) && value.toString().length < 2 && !noPad ?
      '0' + value : value.toString();
  }

  // Respond on mousewheel spin
  this.setupMousewheelEvents = function(hoursInputEl, minutesInputEl, secondsInputEl) {
    var isScrollingUp = function(e) {
      if (e.originalEvent) {
        e = e.originalEvent;
      }
      //pick correct delta variable depending on event
      var delta = e.wheelDelta ? e.wheelDelta : -e.deltaY;
      return e.detail || delta > 0;
    };

    hoursInputEl.on('mousewheel wheel', function(e) {
      if (!disabled) {
        $scope.$apply(isScrollingUp(e) ? $scope.incrementHours() : $scope.decrementHours());
      }
      e.preventDefault();
    });

    minutesInputEl.on('mousewheel wheel', function(e) {
      if (!disabled) {
        $scope.$apply(isScrollingUp(e) ? $scope.incrementMinutes() : $scope.decrementMinutes());
      }
      e.preventDefault();
    });

     secondsInputEl.on('mousewheel wheel', function(e) {
      if (!disabled) {
        $scope.$apply(isScrollingUp(e) ? $scope.incrementSeconds() : $scope.decrementSeconds());
      }
      e.preventDefault();
    });
  };

  // Respond on up/down arrowkeys
  this.setupArrowkeyEvents = function(hoursInputEl, minutesInputEl, secondsInputEl) {
    hoursInputEl.on('keydown', function(e) {
      if (!disabled) {
        if (e.which === 38) { // up
          e.preventDefault();
          $scope.incrementHours();
          $scope.$apply();
        } else if (e.which === 40) { // down
          e.preventDefault();
          $scope.decrementHours();
          $scope.$apply();
        }
      }
    });

    minutesInputEl.on('keydown', function(e) {
      if (!disabled) {
        if (e.which === 38) { // up
          e.preventDefault();
          $scope.incrementMinutes();
          $scope.$apply();
        } else if (e.which === 40) { // down
          e.preventDefault();
          $scope.decrementMinutes();
          $scope.$apply();
        }
      }
    });

    secondsInputEl.on('keydown', function(e) {
      if (!disabled) {
        if (e.which === 38) { // up
          e.preventDefault();
          $scope.incrementSeconds();
          $scope.$apply();
        } else if (e.which === 40) { // down
          e.preventDefault();
          $scope.decrementSeconds();
          $scope.$apply();
        }
      }
    });
  };

  this.setupInputEvents = function(hoursInputEl, minutesInputEl, secondsInputEl) {
    if ($scope.readonlyInput) {
      $scope.updateHours = angular.noop;
      $scope.updateMinutes = angular.noop;
      $scope.updateSeconds = angular.noop;
      return;
    }

    var invalidate = function(invalidHours, invalidMinutes, invalidSeconds) {
      ngModelCtrl.$setViewValue(null);
      ngModelCtrl.$setValidity('time', false);
      if (angular.isDefined(invalidHours)) {
        $scope.invalidHours = invalidHours;
        if (hoursModelCtrl) {
          hoursModelCtrl.$setValidity('hours', false);
        }
      }

      if (angular.isDefined(invalidMinutes)) {
        $scope.invalidMinutes = invalidMinutes;
        if (minutesModelCtrl) {
          minutesModelCtrl.$setValidity('minutes', false);
        }
      }

      if (angular.isDefined(invalidSeconds)) {
        $scope.invalidSeconds = invalidSeconds;
        if (secondsModelCtrl) {
          secondsModelCtrl.$setValidity('seconds', false);
        }
      }
    };

    $scope.updateHours = function() {
      var hours = getHoursFromTemplate(),
        minutes = getMinutesFromTemplate();

      ngModelCtrl.$setDirty();

      if (angular.isDefined(hours) && angular.isDefined(minutes)) {
        selected.setHours(hours);
        selected.setMinutes(minutes);
        if (selected < min || selected > max) {
          invalidate(true);
        } else {
          refresh('h');
        }
      } else {
        invalidate(true);
      }
    };

    hoursInputEl.on('blur', function(e) {
      ngModelCtrl.$setTouched();
      if (modelIsEmpty()) {
        makeValid();
      } else if ($scope.hours === null || $scope.hours === '') {
        invalidate(true);
      } else if (!$scope.invalidHours && $scope.hours < 10) {
        $scope.$apply(function() {
          $scope.hours = pad($scope.hours, !padHours);
        });
      }
    });

    $scope.updateMinutes = function() {
      var minutes = getMinutesFromTemplate(),
        hours = getHoursFromTemplate();

      ngModelCtrl.$setDirty();

      if (angular.isDefined(minutes) && angular.isDefined(hours)) {
        selected.setHours(hours);
        selected.setMinutes(minutes);
        if (selected < min || selected > max) {
          invalidate(undefined, true);
        } else {
          refresh('m');
        }
      } else {
        invalidate(undefined, true);
      }
    };

    minutesInputEl.on('blur', function(e) {
      ngModelCtrl.$setTouched();
      if (modelIsEmpty()) {
        makeValid();
      } else if ($scope.minutes === null) {
        invalidate(undefined, true);
      } else if (!$scope.invalidMinutes && $scope.minutes < 10) {
        $scope.$apply(function() {
          $scope.minutes = pad($scope.minutes);
        });
      }
    });

    $scope.updateSeconds = function() {
      var seconds = getSecondsFromTemplate();

      ngModelCtrl.$setDirty();

      if (angular.isDefined(seconds)) {
        selected.setSeconds(seconds);
        refresh('s');
      } else {
        invalidate(undefined, undefined, true);
      }
    };

    secondsInputEl.on('blur', function(e) {
      if (modelIsEmpty()) {
        makeValid();
      } else if (!$scope.invalidSeconds && $scope.seconds < 10) {
        $scope.$apply( function() {
          $scope.seconds = pad($scope.seconds);
        });
      }
    });

  };

  this.render = function() {
    var date = ngModelCtrl.$viewValue;

    if (isNaN(date)) {
      ngModelCtrl.$setValidity('time', false);
      $log.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
    } else {
      if (date) {
        selected = date;
      }

      if (selected < min || selected > max) {
        ngModelCtrl.$setValidity('time', false);
        $scope.invalidHours = true;
        $scope.invalidMinutes = true;
      } else {
        makeValid();
      }
      updateTemplate();
    }
  };

  // Call internally when we know that model is valid.
  function refresh(keyboardChange) {
    makeValid();
    ngModelCtrl.$setViewValue(new Date(selected));
    updateTemplate(keyboardChange);
  }

  function makeValid() {
    if (hoursModelCtrl) {
      hoursModelCtrl.$setValidity('hours', true);
    }

    if (minutesModelCtrl) {
      minutesModelCtrl.$setValidity('minutes', true);
    }

    if (secondsModelCtrl) {
      secondsModelCtrl.$setValidity('seconds', true);
    }

    ngModelCtrl.$setValidity('time', true);
    $scope.invalidHours = false;
    $scope.invalidMinutes = false;
    $scope.invalidSeconds = false;
  }

  function updateTemplate(keyboardChange) {
    if (!ngModelCtrl.$modelValue) {
      $scope.hours = null;
      $scope.minutes = null;
      $scope.seconds = null;
      $scope.meridian = meridians[0];
    } else {
      var hours = selected.getHours(),
        minutes = selected.getMinutes(),
        seconds = selected.getSeconds();

      if ($scope.showMeridian) {
        hours = hours === 0 || hours === 12 ? 12 : hours % 12; // Convert 24 to 12 hour system
      }

      $scope.hours = keyboardChange === 'h' ? hours : pad(hours, !padHours);
      if (keyboardChange !== 'm') {
        $scope.minutes = pad(minutes);
      }
      $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];

      if (keyboardChange !== 's') {
        $scope.seconds = pad(seconds);
      }
      $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];
    }
  }

  function addSecondsToSelected(seconds) {
    selected = addSeconds(selected, seconds);
    refresh();
  }

  function addMinutes(selected, minutes) {
    return addSeconds(selected, minutes*60);
  }

  function addSeconds(date, seconds) {
    var dt = new Date(date.getTime() + seconds * 1000);
    var newDate = new Date(date);
    newDate.setHours(dt.getHours(), dt.getMinutes(), dt.getSeconds());
    return newDate;
  }

  function modelIsEmpty() {
    return ($scope.hours === null || $scope.hours === '') &&
      ($scope.minutes === null || $scope.minutes === '') &&
      (!$scope.showSeconds || $scope.showSeconds && ($scope.seconds === null || $scope.seconds === ''));
  }

  $scope.showSpinners = angular.isDefined($attrs.showSpinners) ?
    $scope.$parent.$eval($attrs.showSpinners) : timepickerConfig.showSpinners;

  $scope.incrementHours = function() {
    if (!$scope.noIncrementHours()) {
      addSecondsToSelected(hourStep * 60 * 60);
    }
  };

  $scope.decrementHours = function() {
    if (!$scope.noDecrementHours()) {
      addSecondsToSelected(-hourStep * 60 * 60);
    }
  };

  $scope.incrementMinutes = function() {
    if (!$scope.noIncrementMinutes()) {
      addSecondsToSelected(minuteStep * 60);
    }
  };

  $scope.decrementMinutes = function() {
    if (!$scope.noDecrementMinutes()) {
      addSecondsToSelected(-minuteStep * 60);
    }
  };

  $scope.incrementSeconds = function() {
    if (!$scope.noIncrementSeconds()) {
      addSecondsToSelected(secondStep);
    }
  };

  $scope.decrementSeconds = function() {
    if (!$scope.noDecrementSeconds()) {
      addSecondsToSelected(-secondStep);
    }
  };

  $scope.toggleMeridian = function() {
    var minutes = getMinutesFromTemplate(),
        hours = getHoursFromTemplate();

    if (!$scope.noToggleMeridian()) {
      if (angular.isDefined(minutes) && angular.isDefined(hours)) {
        addSecondsToSelected(12 * 60 * (selected.getHours() < 12 ? 60 : -60));
      } else {
        $scope.meridian = $scope.meridian === meridians[0] ? meridians[1] : meridians[0];
      }
    }
  };

  $scope.blur = function() {
    ngModelCtrl.$setTouched();
  };

  $scope.$on('$destroy', function() {
    while (watchers.length) {
      watchers.shift()();
    }
  });
}])

.directive('uibTimepicker', ['uibTimepickerConfig', function(uibTimepickerConfig) {
  return {
    require: ['uibTimepicker', '?^ngModel'],
    restrict: 'A',
    controller: 'UibTimepickerController',
    controllerAs: 'timepicker',
    scope: {},
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || uibTimepickerConfig.templateUrl;
    },
    link: function(scope, element, attrs, ctrls) {
      var timepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      if (ngModelCtrl) {
        timepickerCtrl.init(ngModelCtrl, element.find('input'));
      }
    }
  };
}]);

angular.module('ui.bootstrap.typeahead', ['ui.bootstrap.debounce', 'ui.bootstrap.position'])

/**
 * A helper service that can parse typeahead's syntax (string provided by users)
 * Extracted to a separate service for ease of unit testing
 */
  .factory('uibTypeaheadParser', ['$parse', function($parse) {
    //                      000001111111100000000000002222222200000000000000003333333333333330000000000044444444000
    var TYPEAHEAD_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
    return {
      parse: function(input) {
        var match = input.match(TYPEAHEAD_REGEXP);
        if (!match) {
          throw new Error(
            'Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_"' +
              ' but got "' + input + '".');
        }

        return {
          itemName: match[3],
          source: $parse(match[4]),
          viewMapper: $parse(match[2] || match[1]),
          modelMapper: $parse(match[1])
        };
      }
    };
  }])

  .controller('UibTypeaheadController', ['$scope', '$element', '$attrs', '$compile', '$parse', '$q', '$timeout', '$document', '$window', '$rootScope', '$$debounce', '$uibPosition', 'uibTypeaheadParser',
    function(originalScope, element, attrs, $compile, $parse, $q, $timeout, $document, $window, $rootScope, $$debounce, $position, typeaheadParser) {
    var HOT_KEYS = [9, 13, 27, 38, 40];
    var eventDebounceTime = 200;
    var modelCtrl, ngModelOptions;
    //SUPPORTED ATTRIBUTES (OPTIONS)

    //minimal no of characters that needs to be entered before typeahead kicks-in
    var minLength = originalScope.$eval(attrs.typeaheadMinLength);
    if (!minLength && minLength !== 0) {
      minLength = 1;
    }

    originalScope.$watch(attrs.typeaheadMinLength, function (newVal) {
        minLength = !newVal && newVal !== 0 ? 1 : newVal;
    });

    //minimal wait time after last character typed before typeahead kicks-in
    var waitTime = originalScope.$eval(attrs.typeaheadWaitMs) || 0;

    //should it restrict model values to the ones selected from the popup only?
    var isEditable = originalScope.$eval(attrs.typeaheadEditable) !== false;
    originalScope.$watch(attrs.typeaheadEditable, function (newVal) {
      isEditable = newVal !== false;
    });

    //binding to a variable that indicates if matches are being retrieved asynchronously
    var isLoadingSetter = $parse(attrs.typeaheadLoading).assign || angular.noop;

    //a function to determine if an event should cause selection
    var isSelectEvent = attrs.typeaheadShouldSelect ? $parse(attrs.typeaheadShouldSelect) : function(scope, vals) {
      var evt = vals.$event;
      return evt.which === 13 || evt.which === 9;
    };

    //a callback executed when a match is selected
    var onSelectCallback = $parse(attrs.typeaheadOnSelect);

    //should it select highlighted popup value when losing focus?
    var isSelectOnBlur = angular.isDefined(attrs.typeaheadSelectOnBlur) ? originalScope.$eval(attrs.typeaheadSelectOnBlur) : false;

    //binding to a variable that indicates if there were no results after the query is completed
    var isNoResultsSetter = $parse(attrs.typeaheadNoResults).assign || angular.noop;

    var inputFormatter = attrs.typeaheadInputFormatter ? $parse(attrs.typeaheadInputFormatter) : undefined;

    var appendToBody = attrs.typeaheadAppendToBody ? originalScope.$eval(attrs.typeaheadAppendToBody) : false;

    var appendTo = attrs.typeaheadAppendTo ?
      originalScope.$eval(attrs.typeaheadAppendTo) : null;

    var focusFirst = originalScope.$eval(attrs.typeaheadFocusFirst) !== false;

    //If input matches an item of the list exactly, select it automatically
    var selectOnExact = attrs.typeaheadSelectOnExact ? originalScope.$eval(attrs.typeaheadSelectOnExact) : false;

    //binding to a variable that indicates if dropdown is open
    var isOpenSetter = $parse(attrs.typeaheadIsOpen).assign || angular.noop;

    var showHint = originalScope.$eval(attrs.typeaheadShowHint) || false;

    //INTERNAL VARIABLES

    //model setter executed upon match selection
    var parsedModel = $parse(attrs.ngModel);
    var invokeModelSetter = $parse(attrs.ngModel + '($$$p)');
    var $setModelValue = function(scope, newValue) {
      if (angular.isFunction(parsedModel(originalScope)) &&
        ngModelOptions.getOption('getterSetter')) {
        return invokeModelSetter(scope, {$$$p: newValue});
      }

      return parsedModel.assign(scope, newValue);
    };

    //expressions used by typeahead
    var parserResult = typeaheadParser.parse(attrs.uibTypeahead);

    var hasFocus;

    //Used to avoid bug in iOS webview where iOS keyboard does not fire
    //mousedown & mouseup events
    //Issue #3699
    var selected;

    //create a child scope for the typeahead directive so we are not polluting original scope
    //with typeahead-specific data (matches, query etc.)
    var scope = originalScope.$new();
    var offDestroy = originalScope.$on('$destroy', function() {
      scope.$destroy();
    });
    scope.$on('$destroy', offDestroy);

    // WAI-ARIA
    var popupId = 'typeahead-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
    element.attr({
      'aria-autocomplete': 'list',
      'aria-expanded': false,
      'aria-owns': popupId
    });

    var inputsContainer, hintInputElem;
    //add read-only input to show hint
    if (showHint) {
      inputsContainer = angular.element('<div></div>');
      inputsContainer.css('position', 'relative');
      element.after(inputsContainer);
      hintInputElem = element.clone();
      hintInputElem.attr('placeholder', '');
      hintInputElem.attr('tabindex', '-1');
      hintInputElem.val('');
      hintInputElem.css({
        'position': 'absolute',
        'top': '0px',
        'left': '0px',
        'border-color': 'transparent',
        'box-shadow': 'none',
        'opacity': 1,
        'background': 'none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)',
        'color': '#999'
      });
      element.css({
        'position': 'relative',
        'vertical-align': 'top',
        'background-color': 'transparent'
      });

      if (hintInputElem.attr('id')) {
        hintInputElem.removeAttr('id'); // remove duplicate id if present.
      }
      inputsContainer.append(hintInputElem);
      hintInputElem.after(element);
    }

    //pop-up element used to display matches
    var popUpEl = angular.element('<div uib-typeahead-popup></div>');
    popUpEl.attr({
      id: popupId,
      matches: 'matches',
      active: 'activeIdx',
      select: 'select(activeIdx, evt)',
      'move-in-progress': 'moveInProgress',
      query: 'query',
      position: 'position',
      'assign-is-open': 'assignIsOpen(isOpen)',
      debounce: 'debounceUpdate'
    });
    //custom item template
    if (angular.isDefined(attrs.typeaheadTemplateUrl)) {
      popUpEl.attr('template-url', attrs.typeaheadTemplateUrl);
    }

    if (angular.isDefined(attrs.typeaheadPopupTemplateUrl)) {
      popUpEl.attr('popup-template-url', attrs.typeaheadPopupTemplateUrl);
    }

    var resetHint = function() {
      if (showHint) {
        hintInputElem.val('');
      }
    };

    var resetMatches = function() {
      scope.matches = [];
      scope.activeIdx = -1;
      element.attr('aria-expanded', false);
      resetHint();
    };

    var getMatchId = function(index) {
      return popupId + '-option-' + index;
    };

    // Indicate that the specified match is the active (pre-selected) item in the list owned by this typeahead.
    // This attribute is added or removed automatically when the `activeIdx` changes.
    scope.$watch('activeIdx', function(index) {
      if (index < 0) {
        element.removeAttr('aria-activedescendant');
      } else {
        element.attr('aria-activedescendant', getMatchId(index));
      }
    });

    var inputIsExactMatch = function(inputValue, index) {
      if (scope.matches.length > index && inputValue) {
        return inputValue.toUpperCase() === scope.matches[index].label.toUpperCase();
      }

      return false;
    };

    var getMatchesAsync = function(inputValue, evt) {
      var locals = {$viewValue: inputValue};
      isLoadingSetter(originalScope, true);
      isNoResultsSetter(originalScope, false);
      $q.when(parserResult.source(originalScope, locals)).then(function(matches) {
        //it might happen that several async queries were in progress if a user were typing fast
        //but we are interested only in responses that correspond to the current view value
        var onCurrentRequest = inputValue === modelCtrl.$viewValue;
        if (onCurrentRequest && hasFocus) {
          if (matches && matches.length > 0) {
            scope.activeIdx = focusFirst ? 0 : -1;
            isNoResultsSetter(originalScope, false);
            scope.matches.length = 0;

            //transform labels
            for (var i = 0; i < matches.length; i++) {
              locals[parserResult.itemName] = matches[i];
              scope.matches.push({
                id: getMatchId(i),
                label: parserResult.viewMapper(scope, locals),
                model: matches[i]
              });
            }

            scope.query = inputValue;
            //position pop-up with matches - we need to re-calculate its position each time we are opening a window
            //with matches as a pop-up might be absolute-positioned and position of an input might have changed on a page
            //due to other elements being rendered
            recalculatePosition();

            element.attr('aria-expanded', true);

            //Select the single remaining option if user input matches
            if (selectOnExact && scope.matches.length === 1 && inputIsExactMatch(inputValue, 0)) {
              if (angular.isNumber(scope.debounceUpdate) || angular.isObject(scope.debounceUpdate)) {
                $$debounce(function() {
                  scope.select(0, evt);
                }, angular.isNumber(scope.debounceUpdate) ? scope.debounceUpdate : scope.debounceUpdate['default']);
              } else {
                scope.select(0, evt);
              }
            }

            if (showHint) {
              var firstLabel = scope.matches[0].label;
              if (angular.isString(inputValue) &&
                inputValue.length > 0 &&
                firstLabel.slice(0, inputValue.length).toUpperCase() === inputValue.toUpperCase()) {
                hintInputElem.val(inputValue + firstLabel.slice(inputValue.length));
              } else {
                hintInputElem.val('');
              }
            }
          } else {
            resetMatches();
            isNoResultsSetter(originalScope, true);
          }
        }
        if (onCurrentRequest) {
          isLoadingSetter(originalScope, false);
        }
      }, function() {
        resetMatches();
        isLoadingSetter(originalScope, false);
        isNoResultsSetter(originalScope, true);
      });
    };

    // bind events only if appendToBody params exist - performance feature
    if (appendToBody) {
      angular.element($window).on('resize', fireRecalculating);
      $document.find('body').on('scroll', fireRecalculating);
    }

    // Declare the debounced function outside recalculating for
    // proper debouncing
    var debouncedRecalculate = $$debounce(function() {
      // if popup is visible
      if (scope.matches.length) {
        recalculatePosition();
      }

      scope.moveInProgress = false;
    }, eventDebounceTime);

    // Default progress type
    scope.moveInProgress = false;

    function fireRecalculating() {
      if (!scope.moveInProgress) {
        scope.moveInProgress = true;
        scope.$digest();
      }

      debouncedRecalculate();
    }

    // recalculate actual position and set new values to scope
    // after digest loop is popup in right position
    function recalculatePosition() {
      scope.position = appendToBody ? $position.offset(element) : $position.position(element);
      scope.position.top += element.prop('offsetHeight');
    }

    //we need to propagate user's query so we can higlight matches
    scope.query = undefined;

    //Declare the timeout promise var outside the function scope so that stacked calls can be cancelled later
    var timeoutPromise;

    var scheduleSearchWithTimeout = function(inputValue) {
      timeoutPromise = $timeout(function() {
        getMatchesAsync(inputValue);
      }, waitTime);
    };

    var cancelPreviousTimeout = function() {
      if (timeoutPromise) {
        $timeout.cancel(timeoutPromise);
      }
    };

    resetMatches();

    scope.assignIsOpen = function (isOpen) {
      isOpenSetter(originalScope, isOpen);
    };

    scope.select = function(activeIdx, evt) {
      //called from within the $digest() cycle
      var locals = {};
      var model, item;

      selected = true;
      locals[parserResult.itemName] = item = scope.matches[activeIdx].model;
      model = parserResult.modelMapper(originalScope, locals);
      $setModelValue(originalScope, model);
      modelCtrl.$setValidity('editable', true);
      modelCtrl.$setValidity('parse', true);

      onSelectCallback(originalScope, {
        $item: item,
        $model: model,
        $label: parserResult.viewMapper(originalScope, locals),
        $event: evt
      });

      resetMatches();

      //return focus to the input element if a match was selected via a mouse click event
      // use timeout to avoid $rootScope:inprog error
      if (scope.$eval(attrs.typeaheadFocusOnSelect) !== false) {
        $timeout(function() { element[0].focus(); }, 0, false);
      }
    };

    //bind keyboard events: arrows up(38) / down(40), enter(13) and tab(9), esc(27)
    element.on('keydown', function(evt) {
      //typeahead is open and an "interesting" key was pressed
      if (scope.matches.length === 0 || HOT_KEYS.indexOf(evt.which) === -1) {
        return;
      }

      var shouldSelect = isSelectEvent(originalScope, {$event: evt});

      /**
       * if there's nothing selected (i.e. focusFirst) and enter or tab is hit
       * or
       * shift + tab is pressed to bring focus to the previous element
       * then clear the results
       */
      if (scope.activeIdx === -1 && shouldSelect || evt.which === 9 && !!evt.shiftKey) {
        resetMatches();
        scope.$digest();
        return;
      }

      evt.preventDefault();
      var target;
      switch (evt.which) {
        case 27: // escape
          evt.stopPropagation();

          resetMatches();
          originalScope.$digest();
          break;
        case 38: // up arrow
          scope.activeIdx = (scope.activeIdx > 0 ? scope.activeIdx : scope.matches.length) - 1;
          scope.$digest();
          target = popUpEl[0].querySelectorAll('.uib-typeahead-match')[scope.activeIdx];
          target.parentNode.scrollTop = target.offsetTop;
          break;
        case 40: // down arrow
          scope.activeIdx = (scope.activeIdx + 1) % scope.matches.length;
          scope.$digest();
          target = popUpEl[0].querySelectorAll('.uib-typeahead-match')[scope.activeIdx];
          target.parentNode.scrollTop = target.offsetTop;
          break;
        default:
          if (shouldSelect) {
            scope.$apply(function() {
              if (angular.isNumber(scope.debounceUpdate) || angular.isObject(scope.debounceUpdate)) {
                $$debounce(function() {
                  scope.select(scope.activeIdx, evt);
                }, angular.isNumber(scope.debounceUpdate) ? scope.debounceUpdate : scope.debounceUpdate['default']);
              } else {
                scope.select(scope.activeIdx, evt);
              }
            });
          }
      }
    });

    element.on('focus', function (evt) {
      hasFocus = true;
      if (minLength === 0 && !modelCtrl.$viewValue) {
        $timeout(function() {
          getMatchesAsync(modelCtrl.$viewValue, evt);
        }, 0);
      }
    });

    element.on('blur', function(evt) {
      if (isSelectOnBlur && scope.matches.length && scope.activeIdx !== -1 && !selected) {
        selected = true;
        scope.$apply(function() {
          if (angular.isObject(scope.debounceUpdate) && angular.isNumber(scope.debounceUpdate.blur)) {
            $$debounce(function() {
              scope.select(scope.activeIdx, evt);
            }, scope.debounceUpdate.blur);
          } else {
            scope.select(scope.activeIdx, evt);
          }
        });
      }
      if (!isEditable && modelCtrl.$error.editable) {
        modelCtrl.$setViewValue();
        scope.$apply(function() {
          // Reset validity as we are clearing
          modelCtrl.$setValidity('editable', true);
          modelCtrl.$setValidity('parse', true);
        });
        element.val('');
      }
      hasFocus = false;
      selected = false;
    });

    // Keep reference to click handler to unbind it.
    var dismissClickHandler = function(evt) {
      // Issue #3973
      // Firefox treats right click as a click on document
      if (element[0] !== evt.target && evt.which !== 3 && scope.matches.length !== 0) {
        resetMatches();
        if (!$rootScope.$$phase) {
          originalScope.$digest();
        }
      }
    };

    $document.on('click', dismissClickHandler);

    originalScope.$on('$destroy', function() {
      $document.off('click', dismissClickHandler);
      if (appendToBody || appendTo) {
        $popup.remove();
      }

      if (appendToBody) {
        angular.element($window).off('resize', fireRecalculating);
        $document.find('body').off('scroll', fireRecalculating);
      }
      // Prevent jQuery cache memory leak
      popUpEl.remove();

      if (showHint) {
          inputsContainer.remove();
      }
    });

    var $popup = $compile(popUpEl)(scope);

    if (appendToBody) {
      $document.find('body').append($popup);
    } else if (appendTo) {
      angular.element(appendTo).eq(0).append($popup);
    } else {
      element.after($popup);
    }

    this.init = function(_modelCtrl) {
      modelCtrl = _modelCtrl;
      ngModelOptions = extractOptions(modelCtrl);

      scope.debounceUpdate = $parse(ngModelOptions.getOption('debounce'))(originalScope);

      //plug into $parsers pipeline to open a typeahead on view changes initiated from DOM
      //$parsers kick-in on all the changes coming from the view as well as manually triggered by $setViewValue
      modelCtrl.$parsers.unshift(function(inputValue) {
        hasFocus = true;

        if (minLength === 0 || inputValue && inputValue.length >= minLength) {
          if (waitTime > 0) {
            cancelPreviousTimeout();
            scheduleSearchWithTimeout(inputValue);
          } else {
            getMatchesAsync(inputValue);
          }
        } else {
          isLoadingSetter(originalScope, false);
          cancelPreviousTimeout();
          resetMatches();
        }

        if (isEditable) {
          return inputValue;
        }

        if (!inputValue) {
          // Reset in case user had typed something previously.
          modelCtrl.$setValidity('editable', true);
          return null;
        }

        modelCtrl.$setValidity('editable', false);
        return undefined;
      });

      modelCtrl.$formatters.push(function(modelValue) {
        var candidateViewValue, emptyViewValue;
        var locals = {};

        // The validity may be set to false via $parsers (see above) if
        // the model is restricted to selected values. If the model
        // is set manually it is considered to be valid.
        if (!isEditable) {
          modelCtrl.$setValidity('editable', true);
        }

        if (inputFormatter) {
          locals.$model = modelValue;
          return inputFormatter(originalScope, locals);
        }

        //it might happen that we don't have enough info to properly render input value
        //we need to check for this situation and simply return model value if we can't apply custom formatting
        locals[parserResult.itemName] = modelValue;
        candidateViewValue = parserResult.viewMapper(originalScope, locals);
        locals[parserResult.itemName] = undefined;
        emptyViewValue = parserResult.viewMapper(originalScope, locals);

        return candidateViewValue !== emptyViewValue ? candidateViewValue : modelValue;
      });
    };

    function extractOptions(ngModelCtrl) {
      var ngModelOptions;

      if (angular.version.minor < 6) { // in angular < 1.6 $options could be missing
        // guarantee a value
        ngModelOptions = ngModelCtrl.$options || {};

        // mimic 1.6+ api
        ngModelOptions.getOption = function (key) {
          return ngModelOptions[key];
        };
      } else { // in angular >=1.6 $options is always present
        ngModelOptions = ngModelCtrl.$options;
      }

      return ngModelOptions;
    }
  }])

  .directive('uibTypeahead', function() {
    return {
      controller: 'UibTypeaheadController',
      require: ['ngModel', 'uibTypeahead'],
      link: function(originalScope, element, attrs, ctrls) {
        ctrls[1].init(ctrls[0]);
      }
    };
  })

  .directive('uibTypeaheadPopup', ['$$debounce', function($$debounce) {
    return {
      scope: {
        matches: '=',
        query: '=',
        active: '=',
        position: '&',
        moveInProgress: '=',
        select: '&',
        assignIsOpen: '&',
        debounce: '&'
      },
      replace: true,
      templateUrl: function(element, attrs) {
        return attrs.popupTemplateUrl || 'uib/template/typeahead/typeahead-popup.html';
      },
      link: function(scope, element, attrs) {
        scope.templateUrl = attrs.templateUrl;

        scope.isOpen = function() {
          var isDropdownOpen = scope.matches.length > 0;
          scope.assignIsOpen({ isOpen: isDropdownOpen });
          return isDropdownOpen;
        };

        scope.isActive = function(matchIdx) {
          return scope.active === matchIdx;
        };

        scope.selectActive = function(matchIdx) {
          scope.active = matchIdx;
        };

        scope.selectMatch = function(activeIdx, evt) {
          var debounce = scope.debounce();
          if (angular.isNumber(debounce) || angular.isObject(debounce)) {
            $$debounce(function() {
              scope.select({activeIdx: activeIdx, evt: evt});
            }, angular.isNumber(debounce) ? debounce : debounce['default']);
          } else {
            scope.select({activeIdx: activeIdx, evt: evt});
          }
        };
      }
    };
  }])

  .directive('uibTypeaheadMatch', ['$templateRequest', '$compile', '$parse', function($templateRequest, $compile, $parse) {
    return {
      scope: {
        index: '=',
        match: '=',
        query: '='
      },
      link: function(scope, element, attrs) {
        var tplUrl = $parse(attrs.templateUrl)(scope.$parent) || 'uib/template/typeahead/typeahead-match.html';
        $templateRequest(tplUrl).then(function(tplContent) {
          var tplEl = angular.element(tplContent.trim());
          element.replaceWith(tplEl);
          $compile(tplEl)(scope);
        });
      }
    };
  }])

  .filter('uibTypeaheadHighlight', ['$sce', '$injector', '$log', function($sce, $injector, $log) {
    var isSanitizePresent;
    isSanitizePresent = $injector.has('$sanitize');

    function escapeRegexp(queryToEscape) {
      // Regex: capture the whole query string and replace it with the string that will be used to match
      // the results, for example if the capture is "a" the result will be \a
      return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    }

    function containsHtml(matchItem) {
      return /<.*>/g.test(matchItem);
    }

    return function(matchItem, query) {
      if (!isSanitizePresent && containsHtml(matchItem)) {
        $log.warn('Unsafe use of typeahead please use ngSanitize'); // Warn the user about the danger
      }
      matchItem = query ? ('' + matchItem).replace(new RegExp(escapeRegexp(query), 'gi'), '<strong>$&</strong>') : matchItem; // Replaces the capture string with a the same string inside of a "strong" tag
      if (!isSanitizePresent) {
        matchItem = $sce.trustAsHtml(matchItem); // If $sanitize is not present we pack the string in a $sce object for the ng-bind-html directive
      }
      return matchItem;
    };
  }]);

angular.module("uib/template/accordion/accordion-group.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/accordion/accordion-group.html",
    "<div role=\"tab\" id=\"{{::headingId}}\" aria-selected=\"{{isOpen}}\" class=\"panel-heading\" ng-keypress=\"toggleOpen($event)\">\n" +
    "  <h4 class=\"panel-title\">\n" +
    "    <a role=\"button\" data-toggle=\"collapse\" href aria-expanded=\"{{isOpen}}\" aria-controls=\"{{::panelId}}\" tabindex=\"0\" class=\"accordion-toggle\" ng-click=\"toggleOpen()\" uib-accordion-transclude=\"heading\" ng-disabled=\"isDisabled\" uib-tabindex-toggle><span uib-accordion-header ng-class=\"{'text-muted': isDisabled}\">{{heading}}</span></a>\n" +
    "  </h4>\n" +
    "</div>\n" +
    "<div id=\"{{::panelId}}\" aria-labelledby=\"{{::headingId}}\" aria-hidden=\"{{!isOpen}}\" role=\"tabpanel\" class=\"panel-collapse collapse\" uib-collapse=\"!isOpen\">\n" +
    "  <div class=\"panel-body\" ng-transclude></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("uib/template/accordion/accordion.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/accordion/accordion.html",
    "<div role=\"tablist\" class=\"panel-group\" ng-transclude></div>");
}]);

angular.module("uib/template/alert/alert.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/alert/alert.html",
    "<button ng-show=\"closeable\" type=\"button\" class=\"close\" ng-click=\"close({$event: $event})\">\n" +
    "  <span aria-hidden=\"true\">&times;</span>\n" +
    "  <span class=\"sr-only\">Close</span>\n" +
    "</button>\n" +
    "<div ng-transclude></div>\n" +
    "");
}]);

angular.module("uib/template/carousel/carousel.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/carousel/carousel.html",
    "<div class=\"carousel-inner\" ng-transclude></div>\n" +
    "<a role=\"button\" href class=\"left carousel-control\" ng-click=\"prev()\" ng-class=\"{ disabled: isPrevDisabled() }\" ng-show=\"slides.length > 1\">\n" +
    "  <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-left\"></span>\n" +
    "  <span class=\"sr-only\">previous</span>\n" +
    "</a>\n" +
    "<a role=\"button\" href class=\"right carousel-control\" ng-click=\"next()\" ng-class=\"{ disabled: isNextDisabled() }\" ng-show=\"slides.length > 1\">\n" +
    "  <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-right\"></span>\n" +
    "  <span class=\"sr-only\">next</span>\n" +
    "</a>\n" +
    "<ol class=\"carousel-indicators\" ng-show=\"slides.length > 1\">\n" +
    "  <li ng-repeat=\"slide in slides | orderBy:indexOfSlide track by $index\" ng-class=\"{ active: isActive(slide) }\" ng-click=\"select(slide)\">\n" +
    "    <span class=\"sr-only\">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if=\"isActive(slide)\">, currently active</span></span>\n" +
    "  </li>\n" +
    "</ol>\n" +
    "");
}]);

angular.module("uib/template/carousel/slide.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/carousel/slide.html",
    "<div class=\"text-center\" ng-transclude></div>\n" +
    "");
}]);

angular.module("uib/template/datepicker/datepicker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/datepicker/datepicker.html",
    "<div ng-switch=\"datepickerMode\">\n" +
    "  <div uib-daypicker ng-switch-when=\"day\" tabindex=\"0\" class=\"uib-daypicker\"></div>\n" +
    "  <div uib-monthpicker ng-switch-when=\"month\" tabindex=\"0\" class=\"uib-monthpicker\"></div>\n" +
    "  <div uib-yearpicker ng-switch-when=\"year\" tabindex=\"0\" class=\"uib-yearpicker\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("uib/template/datepicker/day.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/datepicker/day.html",
    "<table role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
    "  <thead>\n" +
    "    <tr>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-left\"></i><span class=\"sr-only\">previous</span></button></th>\n" +
    "      <th colspan=\"{{::5 + showWeeks}}\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm uib-title\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\"><strong>{{title}}</strong></button></th>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-right\"></i><span class=\"sr-only\">next</span></button></th>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <th ng-if=\"showWeeks\" class=\"text-center\"></th>\n" +
    "      <th ng-repeat=\"label in ::labels track by $index\" class=\"text-center\"><small aria-label=\"{{::label.full}}\">{{::label.abbr}}</small></th>\n" +
    "    </tr>\n" +
    "  </thead>\n" +
    "  <tbody>\n" +
    "    <tr class=\"uib-weeks\" ng-repeat=\"row in rows track by $index\" role=\"row\">\n" +
    "      <td ng-if=\"showWeeks\" class=\"text-center h6\"><em>{{ weekNumbers[$index] }}</em></td>\n" +
    "      <td ng-repeat=\"dt in row\" class=\"uib-day text-center\" role=\"gridcell\"\n" +
    "        id=\"{{::dt.uid}}\"\n" +
    "        ng-class=\"::dt.customClass\">\n" +
    "        <button type=\"button\" class=\"btn btn-default btn-sm\"\n" +
    "          uib-is-class=\"\n" +
    "            'btn-info' for selectedDt,\n" +
    "            'active' for activeDt\n" +
    "            on dt\"\n" +
    "          ng-click=\"select(dt.date)\"\n" +
    "          ng-disabled=\"::dt.disabled\"\n" +
    "          tabindex=\"-1\"><span ng-class=\"::{'text-muted': dt.secondary, 'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "");
}]);

angular.module("uib/template/datepicker/month.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/datepicker/month.html",
    "<table role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
    "  <thead>\n" +
    "    <tr>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-left\"></i><span class=\"sr-only\">previous</span></button></th>\n" +
    "      <th colspan=\"{{::yearHeaderColspan}}\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm uib-title\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\"><strong>{{title}}</strong></button></th>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-right\"></i><span class=\"sr-only\">next</span></i></button></th>\n" +
    "    </tr>\n" +
    "  </thead>\n" +
    "  <tbody>\n" +
    "    <tr class=\"uib-months\" ng-repeat=\"row in rows track by $index\" role=\"row\">\n" +
    "      <td ng-repeat=\"dt in row\" class=\"uib-month text-center\" role=\"gridcell\"\n" +
    "        id=\"{{::dt.uid}}\"\n" +
    "        ng-class=\"::dt.customClass\">\n" +
    "        <button type=\"button\" class=\"btn btn-default\"\n" +
    "          uib-is-class=\"\n" +
    "            'btn-info' for selectedDt,\n" +
    "            'active' for activeDt\n" +
    "            on dt\"\n" +
    "          ng-click=\"select(dt.date)\"\n" +
    "          ng-disabled=\"::dt.disabled\"\n" +
    "          tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "");
}]);

angular.module("uib/template/datepicker/year.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/datepicker/year.html",
    "<table role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
    "  <thead>\n" +
    "    <tr>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-left\"></i><span class=\"sr-only\">previous</span></button></th>\n" +
    "      <th colspan=\"{{::columns - 2}}\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm uib-title\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\"><strong>{{title}}</strong></button></th>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-right\"></i><span class=\"sr-only\">next</span></button></th>\n" +
    "    </tr>\n" +
    "  </thead>\n" +
    "  <tbody>\n" +
    "    <tr class=\"uib-years\" ng-repeat=\"row in rows track by $index\" role=\"row\">\n" +
    "      <td ng-repeat=\"dt in row\" class=\"uib-year text-center\" role=\"gridcell\"\n" +
    "        id=\"{{::dt.uid}}\"\n" +
    "        ng-class=\"::dt.customClass\">\n" +
    "        <button type=\"button\" class=\"btn btn-default\"\n" +
    "          uib-is-class=\"\n" +
    "            'btn-info' for selectedDt,\n" +
    "            'active' for activeDt\n" +
    "            on dt\"\n" +
    "          ng-click=\"select(dt.date)\"\n" +
    "          ng-disabled=\"::dt.disabled\"\n" +
    "          tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "");
}]);

angular.module("uib/template/datepickerPopup/popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/datepickerPopup/popup.html",
    "<ul role=\"presentation\" class=\"uib-datepicker-popup dropdown-menu uib-position-measure\" dropdown-nested ng-if=\"isOpen\" ng-keydown=\"keydown($event)\" ng-click=\"$event.stopPropagation()\">\n" +
    "  <li ng-transclude></li>\n" +
    "  <li ng-if=\"showButtonBar\" class=\"uib-button-bar\">\n" +
    "    <span class=\"btn-group pull-left\">\n" +
    "      <button type=\"button\" class=\"btn btn-sm btn-info uib-datepicker-current\" ng-click=\"select('today', $event)\" ng-disabled=\"isDisabled('today')\">{{ getText('current') }}</button>\n" +
    "      <button type=\"button\" class=\"btn btn-sm btn-danger uib-clear\" ng-click=\"select(null, $event)\">{{ getText('clear') }}</button>\n" +
    "    </span>\n" +
    "    <button type=\"button\" class=\"btn btn-sm btn-success pull-right uib-close\" ng-click=\"close($event)\">{{ getText('close') }}</button>\n" +
    "  </li>\n" +
    "</ul>\n" +
    "");
}]);

angular.module("uib/template/modal/window.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/modal/window.html",
    "<div class=\"modal-dialog {{size ? 'modal-' + size : ''}}\"><div class=\"modal-content\" uib-modal-transclude></div></div>\n" +
    "");
}]);

angular.module("uib/template/pager/pager.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/pager/pager.html",
    "<li ng-class=\"{disabled: noPrevious()||ngDisabled, previous: align}\"><a href ng-click=\"selectPage(page - 1, $event)\" ng-disabled=\"noPrevious()||ngDisabled\" uib-tabindex-toggle>{{::getText('previous')}}</a></li>\n" +
    "<li ng-class=\"{disabled: noNext()||ngDisabled, next: align}\"><a href ng-click=\"selectPage(page + 1, $event)\" ng-disabled=\"noNext()||ngDisabled\" uib-tabindex-toggle>{{::getText('next')}}</a></li>\n" +
    "");
}]);

angular.module("uib/template/pagination/pagination.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/pagination/pagination.html",
    "<li role=\"menuitem\" ng-if=\"::boundaryLinks\" ng-class=\"{disabled: noPrevious()||ngDisabled}\" class=\"pagination-first\"><a href ng-click=\"selectPage(1, $event)\" ng-disabled=\"noPrevious()||ngDisabled\" uib-tabindex-toggle>{{::getText('first')}}</a></li>\n" +
    "<li role=\"menuitem\" ng-if=\"::directionLinks\" ng-class=\"{disabled: noPrevious()||ngDisabled}\" class=\"pagination-prev\"><a href ng-click=\"selectPage(page - 1, $event)\" ng-disabled=\"noPrevious()||ngDisabled\" uib-tabindex-toggle>{{::getText('previous')}}</a></li>\n" +
    "<li role=\"menuitem\" ng-repeat=\"page in pages track by $index\" ng-class=\"{active: page.active,disabled: ngDisabled&&!page.active}\" class=\"pagination-page\"><a href ng-click=\"selectPage(page.number, $event)\" ng-disabled=\"ngDisabled&&!page.active\" uib-tabindex-toggle>{{page.text}}</a></li>\n" +
    "<li role=\"menuitem\" ng-if=\"::directionLinks\" ng-class=\"{disabled: noNext()||ngDisabled}\" class=\"pagination-next\"><a href ng-click=\"selectPage(page + 1, $event)\" ng-disabled=\"noNext()||ngDisabled\" uib-tabindex-toggle>{{::getText('next')}}</a></li>\n" +
    "<li role=\"menuitem\" ng-if=\"::boundaryLinks\" ng-class=\"{disabled: noNext()||ngDisabled}\" class=\"pagination-last\"><a href ng-click=\"selectPage(totalPages, $event)\" ng-disabled=\"noNext()||ngDisabled\" uib-tabindex-toggle>{{::getText('last')}}</a></li>\n" +
    "");
}]);

angular.module("uib/template/tooltip/tooltip-html-popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/tooltip/tooltip-html-popup.html",
    "<div class=\"tooltip-arrow\"></div>\n" +
    "<div class=\"tooltip-inner\" ng-bind-html=\"contentExp()\"></div>\n" +
    "");
}]);

angular.module("uib/template/tooltip/tooltip-popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/tooltip/tooltip-popup.html",
    "<div class=\"tooltip-arrow\"></div>\n" +
    "<div class=\"tooltip-inner\" ng-bind=\"content\"></div>\n" +
    "");
}]);

angular.module("uib/template/tooltip/tooltip-template-popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/tooltip/tooltip-template-popup.html",
    "<div class=\"tooltip-arrow\"></div>\n" +
    "<div class=\"tooltip-inner\"\n" +
    "  uib-tooltip-template-transclude=\"contentExp()\"\n" +
    "  tooltip-template-transclude-scope=\"originScope()\"></div>\n" +
    "");
}]);

angular.module("uib/template/popover/popover-html.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/popover/popover-html.html",
    "<div class=\"arrow\"></div>\n" +
    "\n" +
    "<div class=\"popover-inner\">\n" +
    "    <h3 class=\"popover-title\" ng-bind=\"uibTitle\" ng-if=\"uibTitle\"></h3>\n" +
    "    <div class=\"popover-content\" ng-bind-html=\"contentExp()\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("uib/template/popover/popover-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/popover/popover-template.html",
    "<div class=\"arrow\"></div>\n" +
    "\n" +
    "<div class=\"popover-inner\">\n" +
    "    <h3 class=\"popover-title\" ng-bind=\"uibTitle\" ng-if=\"uibTitle\"></h3>\n" +
    "    <div class=\"popover-content\"\n" +
    "      uib-tooltip-template-transclude=\"contentExp()\"\n" +
    "      tooltip-template-transclude-scope=\"originScope()\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("uib/template/popover/popover.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/popover/popover.html",
    "<div class=\"arrow\"></div>\n" +
    "\n" +
    "<div class=\"popover-inner\">\n" +
    "    <h3 class=\"popover-title\" ng-bind=\"uibTitle\" ng-if=\"uibTitle\"></h3>\n" +
    "    <div class=\"popover-content\" ng-bind=\"content\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("uib/template/progressbar/bar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/progressbar/bar.html",
    "<div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" aria-labelledby=\"{{::title}}\" ng-transclude></div>\n" +
    "");
}]);

angular.module("uib/template/progressbar/progress.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/progressbar/progress.html",
    "<div class=\"progress\" ng-transclude aria-labelledby=\"{{::title}}\"></div>");
}]);

angular.module("uib/template/progressbar/progressbar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/progressbar/progressbar.html",
    "<div class=\"progress\">\n" +
    "  <div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" aria-labelledby=\"{{::title}}\" ng-transclude></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("uib/template/rating/rating.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/rating/rating.html",
    "<span ng-mouseleave=\"reset()\" ng-keydown=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" aria-valuemax=\"{{range.length}}\" aria-valuenow=\"{{value}}\" aria-valuetext=\"{{title}}\">\n" +
    "    <span ng-repeat-start=\"r in range track by $index\" class=\"sr-only\">({{ $index < value ? '*' : ' ' }})</span>\n" +
    "    <i ng-repeat-end ng-mouseenter=\"enter($index + 1)\" ng-click=\"rate($index + 1)\" class=\"glyphicon\" ng-class=\"$index < value && (r.stateOn || 'glyphicon-star') || (r.stateOff || 'glyphicon-star-empty')\" ng-attr-title=\"{{r.title}}\"></i>\n" +
    "</span>\n" +
    "");
}]);

angular.module("uib/template/tabs/tab.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/tabs/tab.html",
    "<li ng-class=\"[{active: active, disabled: disabled}, classes]\" class=\"uib-tab nav-item\">\n" +
    "  <a href ng-click=\"select($event)\" class=\"nav-link\" uib-tab-heading-transclude>{{heading}}</a>\n" +
    "</li>\n" +
    "");
}]);

angular.module("uib/template/tabs/tabset.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/tabs/tabset.html",
    "<div>\n" +
    "  <ul class=\"nav nav-{{tabset.type || 'tabs'}}\" ng-class=\"{'nav-stacked': vertical, 'nav-justified': justified}\" ng-transclude></ul>\n" +
    "  <div class=\"tab-content\">\n" +
    "    <div class=\"tab-pane\"\n" +
    "         ng-repeat=\"tab in tabset.tabs\"\n" +
    "         ng-class=\"{active: tabset.active === tab.index}\"\n" +
    "         uib-tab-content-transclude=\"tab\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("uib/template/timepicker/timepicker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/timepicker/timepicker.html",
    "<table class=\"uib-timepicker\">\n" +
    "  <tbody>\n" +
    "    <tr class=\"text-center\" ng-show=\"::showSpinners\">\n" +
    "      <td class=\"uib-increment hours\"><a ng-click=\"incrementHours()\" ng-class=\"{disabled: noIncrementHours()}\" class=\"btn btn-link\" ng-disabled=\"noIncrementHours()\" tabindex=\"-1\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
    "      <td>&nbsp;</td>\n" +
    "      <td class=\"uib-increment minutes\"><a ng-click=\"incrementMinutes()\" ng-class=\"{disabled: noIncrementMinutes()}\" class=\"btn btn-link\" ng-disabled=\"noIncrementMinutes()\" tabindex=\"-1\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
    "      <td ng-show=\"showSeconds\">&nbsp;</td>\n" +
    "      <td ng-show=\"showSeconds\" class=\"uib-increment seconds\"><a ng-click=\"incrementSeconds()\" ng-class=\"{disabled: noIncrementSeconds()}\" class=\"btn btn-link\" ng-disabled=\"noIncrementSeconds()\" tabindex=\"-1\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
    "      <td ng-show=\"showMeridian\"></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td class=\"form-group uib-time hours\" ng-class=\"{'has-error': invalidHours}\">\n" +
    "        <input type=\"text\" placeholder=\"HH\" ng-model=\"hours\" ng-change=\"updateHours()\" class=\"form-control text-center\" ng-readonly=\"::readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"noIncrementHours()\" ng-blur=\"blur()\">\n" +
    "      </td>\n" +
    "      <td class=\"uib-separator\">:</td>\n" +
    "      <td class=\"form-group uib-time minutes\" ng-class=\"{'has-error': invalidMinutes}\">\n" +
    "        <input type=\"text\" placeholder=\"MM\" ng-model=\"minutes\" ng-change=\"updateMinutes()\" class=\"form-control text-center\" ng-readonly=\"::readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"noIncrementMinutes()\" ng-blur=\"blur()\">\n" +
    "      </td>\n" +
    "      <td ng-show=\"showSeconds\" class=\"uib-separator\">:</td>\n" +
    "      <td class=\"form-group uib-time seconds\" ng-class=\"{'has-error': invalidSeconds}\" ng-show=\"showSeconds\">\n" +
    "        <input type=\"text\" placeholder=\"SS\" ng-model=\"seconds\" ng-change=\"updateSeconds()\" class=\"form-control text-center\" ng-readonly=\"readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"noIncrementSeconds()\" ng-blur=\"blur()\">\n" +
    "      </td>\n" +
    "      <td ng-show=\"showMeridian\" class=\"uib-time am-pm\"><button type=\"button\" ng-class=\"{disabled: noToggleMeridian()}\" class=\"btn btn-default text-center\" ng-click=\"toggleMeridian()\" ng-disabled=\"noToggleMeridian()\" tabindex=\"{{::tabindex}}\">{{meridian}}</button></td>\n" +
    "    </tr>\n" +
    "    <tr class=\"text-center\" ng-show=\"::showSpinners\">\n" +
    "      <td class=\"uib-decrement hours\"><a ng-click=\"decrementHours()\" ng-class=\"{disabled: noDecrementHours()}\" class=\"btn btn-link\" ng-disabled=\"noDecrementHours()\" tabindex=\"-1\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
    "      <td>&nbsp;</td>\n" +
    "      <td class=\"uib-decrement minutes\"><a ng-click=\"decrementMinutes()\" ng-class=\"{disabled: noDecrementMinutes()}\" class=\"btn btn-link\" ng-disabled=\"noDecrementMinutes()\" tabindex=\"-1\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
    "      <td ng-show=\"showSeconds\">&nbsp;</td>\n" +
    "      <td ng-show=\"showSeconds\" class=\"uib-decrement seconds\"><a ng-click=\"decrementSeconds()\" ng-class=\"{disabled: noDecrementSeconds()}\" class=\"btn btn-link\" ng-disabled=\"noDecrementSeconds()\" tabindex=\"-1\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
    "      <td ng-show=\"showMeridian\"></td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "");
}]);

angular.module("uib/template/typeahead/typeahead-match.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/typeahead/typeahead-match.html",
    "<a href\n" +
    "   tabindex=\"-1\"\n" +
    "   ng-bind-html=\"match.label | uibTypeaheadHighlight:query\"\n" +
    "   ng-attr-title=\"{{match.label}}\"></a>\n" +
    "");
}]);

angular.module("uib/template/typeahead/typeahead-popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/typeahead/typeahead-popup.html",
    "<ul class=\"dropdown-menu\" ng-show=\"isOpen() && !moveInProgress\" ng-style=\"{top: position().top+'px', left: position().left+'px'}\" role=\"listbox\" aria-hidden=\"{{!isOpen()}}\">\n" +
    "    <li class=\"uib-typeahead-match\" ng-repeat=\"match in matches track by $index\" ng-class=\"{active: isActive($index) }\" ng-mouseenter=\"selectActive($index)\" ng-click=\"selectMatch($index, $event)\" role=\"option\" id=\"{{::match.id}}\">\n" +
    "        <div uib-typeahead-match index=\"$index\" match=\"match\" query=\"query\" template-url=\"templateUrl\"></div>\n" +
    "    </li>\n" +
    "</ul>\n" +
    "");
}]);
angular.module('ui.bootstrap.carousel').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibCarouselCss && angular.element(document).find('head').prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>'); angular.$$uibCarouselCss = true; });
angular.module('ui.bootstrap.datepicker').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibDatepickerCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-datepicker .uib-title{width:100%;}.uib-day button,.uib-month button,.uib-year button{min-width:100%;}.uib-left,.uib-right{width:100%}</style>'); angular.$$uibDatepickerCss = true; });
angular.module('ui.bootstrap.position').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibPositionCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-position-measure{display:block !important;visibility:hidden !important;position:absolute !important;top:-9999px !important;left:-9999px !important;}.uib-position-scrollbar-measure{position:absolute !important;top:-9999px !important;width:50px !important;height:50px !important;overflow:scroll !important;}.uib-position-body-scrollbar-measure{overflow:scroll !important;}</style>'); angular.$$uibPositionCss = true; });
angular.module('ui.bootstrap.datepickerPopup').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibDatepickerpopupCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-datepicker-popup.dropdown-menu{display:block;float:none;margin:0;}.uib-button-bar{padding:10px 9px 2px;}</style>'); angular.$$uibDatepickerpopupCss = true; });
angular.module('ui.bootstrap.tooltip').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibTooltipCss && angular.element(document).find('head').prepend('<style type="text/css">[uib-tooltip-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-bottom > .tooltip-arrow,[uib-popover-popup].popover.top-left > .arrow,[uib-popover-popup].popover.top-right > .arrow,[uib-popover-popup].popover.bottom-left > .arrow,[uib-popover-popup].popover.bottom-right > .arrow,[uib-popover-popup].popover.left-top > .arrow,[uib-popover-popup].popover.left-bottom > .arrow,[uib-popover-popup].popover.right-top > .arrow,[uib-popover-popup].popover.right-bottom > .arrow,[uib-popover-html-popup].popover.top-left > .arrow,[uib-popover-html-popup].popover.top-right > .arrow,[uib-popover-html-popup].popover.bottom-left > .arrow,[uib-popover-html-popup].popover.bottom-right > .arrow,[uib-popover-html-popup].popover.left-top > .arrow,[uib-popover-html-popup].popover.left-bottom > .arrow,[uib-popover-html-popup].popover.right-top > .arrow,[uib-popover-html-popup].popover.right-bottom > .arrow,[uib-popover-template-popup].popover.top-left > .arrow,[uib-popover-template-popup].popover.top-right > .arrow,[uib-popover-template-popup].popover.bottom-left > .arrow,[uib-popover-template-popup].popover.bottom-right > .arrow,[uib-popover-template-popup].popover.left-top > .arrow,[uib-popover-template-popup].popover.left-bottom > .arrow,[uib-popover-template-popup].popover.right-top > .arrow,[uib-popover-template-popup].popover.right-bottom > .arrow{top:auto;bottom:auto;left:auto;right:auto;margin:0;}[uib-popover-popup].popover,[uib-popover-html-popup].popover,[uib-popover-template-popup].popover{display:block !important;}</style>'); angular.$$uibTooltipCss = true; });
angular.module('ui.bootstrap.timepicker').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibTimepickerCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-time input{width:50px;}</style>'); angular.$$uibTimepickerCss = true; });
angular.module('ui.bootstrap.typeahead').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibTypeaheadCss && angular.element(document).find('head').prepend('<style type="text/css">[uib-typeahead-popup].dropdown-menu{display:block;}</style>'); angular.$$uibTypeaheadCss = true; });
/* global angular */
(function(window, document) {
    'use strict';

    /*
     * AngularJS Toaster
     * Version: 2.2.0
     *
     * Copyright 2013-2016 Jiri Kavulak.
     * All Rights Reserved.
     * Use, reproduction, distribution, and modification of this code is subject to the terms and
     * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
     *
     * Author: Jiri Kavulak
     * Related to project of John Papa, Hans Fjällemark and Nguyễn Thiện Hùng (thienhung1989)
     */

    angular.module('toaster', []).constant(
        'toasterConfig', {
            'limit': 0,                   // limits max number of toasts
            'tap-to-dismiss': true,
            'close-button': false,
            'close-html': '<button class="toast-close-button" type="button">&times;</button>',
            'newest-on-top': true,
            'time-out': 5000,
            'icon-classes': {
                error: 'toast-error',
                info: 'toast-info',
                wait: 'toast-wait',
                success: 'toast-success',
                warning: 'toast-warning'
            },
            'body-output-type': '', // Options: '', 'trustedHtml', 'template', 'templateWithData', 'directive'
            'body-template': 'toasterBodyTmpl.html',
            'icon-class': 'toast-info',
            'position-class': 'toast-top-right', // Options (see CSS):
            // 'toast-top-full-width', 'toast-bottom-full-width', 'toast-center',
            // 'toast-top-left', 'toast-top-center', 'toast-top-right',
            // 'toast-bottom-left', 'toast-bottom-center', 'toast-bottom-right',
            'title-class': 'toast-title',
            'message-class': 'toast-message',
            'prevent-duplicates': false,
            'mouseover-timer-stop': true // stop timeout on mouseover and restart timer on mouseout
        }
    ).run(['$templateCache', function($templateCache) {
            $templateCache.put('angularjs-toaster/toast.html',
                '<div id="toast-container" ng-class="[config.position, config.animation]">' +
                    '<div ng-repeat="toaster in toasters" class="toast" ng-class="toaster.type" ng-click="click($event, toaster)" ng-mouseover="stopTimer(toaster)" ng-mouseout="restartTimer(toaster)">' +
                        '<div ng-if="toaster.showCloseButton" ng-click="click($event, toaster, true)" ng-bind-html="toaster.closeHtml"></div>' +
                        '<div ng-class="config.title">{{toaster.title}}</div>' +
                        '<div ng-class="config.message" ng-switch on="toaster.bodyOutputType">' +
                        '<div ng-switch-when="trustedHtml" ng-bind-html="toaster.html"></div>' +
                        '<div ng-switch-when="template"><div ng-include="toaster.bodyTemplate"></div></div>' +
                        '<div ng-switch-when="templateWithData"><div ng-include="toaster.bodyTemplate"></div></div>' +
                        '<div ng-switch-when="directive"><div directive-template directive-name="{{toaster.html}}" directive-data="{{toaster.directiveData}}"></div></div>' +
                        '<div ng-switch-default >{{toaster.body}}</div>' +
                        '</div>' +
                    '</div>' +
                '</div>');
        }
    ]).service(
        'toaster', [
            '$rootScope', 'toasterConfig', function($rootScope, toasterConfig) {
                // http://stackoverflow.com/questions/26501688/a-typescript-guid-class
                var Guid = (function() {
                    var Guid = {};
                    Guid.newGuid = function() {
                        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                            return v.toString(16);
                        });
                    };
                    return Guid;
                }());

                this.pop = function(type, title, body, timeout, bodyOutputType, clickHandler, toasterId, showCloseButton, toastId, onHideCallback) {
                    if (angular.isObject(type)) {
                        var params = type; // Enable named parameters as pop argument
                        this.toast = {
                            type: params.type,
                            title: params.title,
                            body: params.body,
                            timeout: params.timeout,
                            bodyOutputType: params.bodyOutputType,
                            clickHandler: params.clickHandler,
                            showCloseButton: params.showCloseButton,
                            closeHtml: params.closeHtml,
                            toastId: params.toastId,
                            onShowCallback: params.onShowCallback,
                            onHideCallback: params.onHideCallback,
                            directiveData: params.directiveData,
                            tapToDismiss: params.tapToDismiss
                        };
                        toasterId = params.toasterId;
                    } else {
                        this.toast = {
                            type: type,
                            title: title,
                            body: body,
                            timeout: timeout,
                            bodyOutputType: bodyOutputType,
                            clickHandler: clickHandler,
                            showCloseButton: showCloseButton,
                            toastId: toastId,
                            onHideCallback: onHideCallback
                        };
                    }

                    if (!this.toast.toastId || !this.toast.toastId.length) {
                        this.toast.toastId = Guid.newGuid();
                    }

                    $rootScope.$emit('toaster-newToast', toasterId, this.toast.toastId);
                    
                    return {
                        toasterId: toasterId,
                        toastId: this.toast.toastId
                    };
                };

                this.clear = function(toasterId, toastId) {
                    if (angular.isObject(toasterId)) {
                        $rootScope.$emit('toaster-clearToasts', toasterId.toasterId, toasterId.toastId);
                    } else {
                        $rootScope.$emit('toaster-clearToasts', toasterId, toastId);
                    }
                };

                // Create one method per icon class, to allow to call toaster.info() and similar
                for (var type in toasterConfig['icon-classes']) {
                    this[type] = createTypeMethod(type);
                }

                function createTypeMethod(toasterType) {
                    return function(title, body, timeout, bodyOutputType, clickHandler, toasterId, showCloseButton, toastId, onHideCallback) {
                        if (angular.isString(title)) {
                            return this.pop(
                                toasterType,
                                title,
                                body,
                                timeout,
                                bodyOutputType,
                                clickHandler,
                                toasterId,
                                showCloseButton,
                                toastId,
                                onHideCallback);
                        } else { // 'title' is actually an object with options
                            return this.pop(angular.extend(title, { type: toasterType }));
                        }
                    };
                }
            }]
        ).factory(
        'toasterEventRegistry', [
            '$rootScope', function($rootScope) {
                var deregisterNewToast = null, deregisterClearToasts = null, newToastEventSubscribers = [], clearToastsEventSubscribers = [], toasterFactory;

                toasterFactory = {
                    setup: function() {
                        if (!deregisterNewToast) {
                            deregisterNewToast = $rootScope.$on(
                                'toaster-newToast', function(event, toasterId, toastId) {
                                    for (var i = 0, len = newToastEventSubscribers.length; i < len; i++) {
                                        newToastEventSubscribers[i](event, toasterId, toastId);
                                    }
                                });
                        }

                        if (!deregisterClearToasts) {
                            deregisterClearToasts = $rootScope.$on(
                                'toaster-clearToasts', function(event, toasterId, toastId) {
                                    for (var i = 0, len = clearToastsEventSubscribers.length; i < len; i++) {
                                        clearToastsEventSubscribers[i](event, toasterId, toastId);
                                    }
                                });
                        }
                    },

                    subscribeToNewToastEvent: function(onNewToast) {
                        newToastEventSubscribers.push(onNewToast);
                    },
                    subscribeToClearToastsEvent: function(onClearToasts) {
                        clearToastsEventSubscribers.push(onClearToasts);
                    },
                    unsubscribeToNewToastEvent: function(onNewToast) {
                        var index = newToastEventSubscribers.indexOf(onNewToast);
                        if (index >= 0) {
                            newToastEventSubscribers.splice(index, 1);
                        }

                        if (newToastEventSubscribers.length === 0) {
                            deregisterNewToast();
                            deregisterNewToast = null;
                        }
                    },
                    unsubscribeToClearToastsEvent: function(onClearToasts) {
                        var index = clearToastsEventSubscribers.indexOf(onClearToasts);
                        if (index >= 0) {
                            clearToastsEventSubscribers.splice(index, 1);
                        }

                        if (clearToastsEventSubscribers.length === 0) {
                            deregisterClearToasts();
                            deregisterClearToasts = null;
                        }
                    }
                };
                return {
                    setup: toasterFactory.setup,
                    subscribeToNewToastEvent: toasterFactory.subscribeToNewToastEvent,
                    subscribeToClearToastsEvent: toasterFactory.subscribeToClearToastsEvent,
                    unsubscribeToNewToastEvent: toasterFactory.unsubscribeToNewToastEvent,
                    unsubscribeToClearToastsEvent: toasterFactory.unsubscribeToClearToastsEvent
                };
            }]
        )
        .directive('directiveTemplate', ['$compile', '$injector', function($compile, $injector) {
            return {
                restrict: 'A',
                scope: {
                    directiveName: '@directiveName',
                    directiveData: '@directiveData'
                },
                replace: true,
                link: function(scope, elm, attrs) {
                    scope.$watch('directiveName', function(directiveName) {
                        if (angular.isUndefined(directiveName) || directiveName.length <= 0)
                            throw new Error('A valid directive name must be provided via the toast body argument when using bodyOutputType: directive');

                        var directive;

                        try {
                            directive = $injector.get(attrs.$normalize(directiveName) + 'Directive');
                        } catch (e) {
                            throw new Error(directiveName + ' could not be found. ' +
                                'The name should appear as it exists in the markup, not camelCased as it would appear in the directive declaration,' +
                                ' e.g. directive-name not directiveName.');
                        }


                        var directiveDetails = directive[0];

                        if (directiveDetails.scope !== true && directiveDetails.scope) {
                            throw new Error('Cannot use a directive with an isolated scope. ' +
                                'The scope must be either true or falsy (e.g. false/null/undefined). ' +
                                'Occurred for directive ' + directiveName + '.');
                        }

                        if (directiveDetails.restrict.indexOf('A') < 0) {
                            throw new Error('Directives must be usable as attributes. ' +
                                'Add "A" to the restrict option (or remove the option entirely). Occurred for directive ' +
                                directiveName + '.');
                        }

                        if (scope.directiveData)
                            scope.directiveData = angular.fromJson(scope.directiveData);

                        var template = $compile('<div ' + directiveName + '></div>')(scope);

                        elm.append(template);
                    });
                }
            };
        }])
        .directive(
        'toasterContainer', [
            '$parse', '$rootScope', '$interval', '$sce', 'toasterConfig', 'toaster', 'toasterEventRegistry',
            function($parse, $rootScope, $interval, $sce, toasterConfig, toaster, toasterEventRegistry) {
                return {
                    replace: true,
                    restrict: 'EA',
                    scope: true, // creates an internal scope for this directive (one per directive instance)
                    link: function(scope, elm, attrs) {
                        var mergedConfig;

                        // Merges configuration set in directive with default one
                        mergedConfig = angular.extend({}, toasterConfig, scope.$eval(attrs.toasterOptions));

                        scope.config = {
                            toasterId: mergedConfig['toaster-id'],
                            position: mergedConfig['position-class'],
                            title: mergedConfig['title-class'],
                            message: mergedConfig['message-class'],
                            tap: mergedConfig['tap-to-dismiss'],
                            closeButton: mergedConfig['close-button'],
                            closeHtml: mergedConfig['close-html'],
                            animation: mergedConfig['animation-class'],
                            mouseoverTimer: mergedConfig['mouseover-timer-stop']
                        };

                        scope.$on(
                            "$destroy", function() {
                                toasterEventRegistry.unsubscribeToNewToastEvent(scope._onNewToast);
                                toasterEventRegistry.unsubscribeToClearToastsEvent(scope._onClearToasts);
                            }
                        );

                        function setTimeout(toast, time) {
                            toast.timeoutPromise = $interval(
                                function() {
                                    scope.removeToast(toast.toastId);
                                }, time, 1
                            );
                        }

                        scope.configureTimer = function(toast) {
                            var timeout = angular.isNumber(toast.timeout) ? toast.timeout : mergedConfig['time-out'];
                            if (typeof timeout === "object") timeout = timeout[toast.type];
                            if (timeout > 0) {
                                setTimeout(toast, timeout);
                            }
                        };

                        function addToast(toast, toastId) {
                            toast.type = mergedConfig['icon-classes'][toast.type];
                            if (!toast.type) {
                                toast.type = mergedConfig['icon-class'];
                            }

                            if (mergedConfig['prevent-duplicates'] === true && scope.toasters.length) {
                                if (scope.toasters[scope.toasters.length - 1].body === toast.body) {
                                    return;
                                } else {
                                    var i, len, dupFound = false;
                                    for (i = 0, len = scope.toasters.length; i < len; i++) {
                                        if (scope.toasters[i].toastId === toastId) {
                                            dupFound = true;
                                            break;
                                        }
                                    }
                                    
                                    if (dupFound) return;
                                }
                            }


                            // set the showCloseButton property on the toast so that
                            // each template can bind directly to the property to show/hide
                            // the close button
                            var closeButton = mergedConfig['close-button'];

                            // if toast.showCloseButton is a boolean value,
                            // it was specifically overriden in the pop arguments
                            if (typeof toast.showCloseButton === "boolean") {

                            } else if (typeof closeButton === "boolean") {
                                toast.showCloseButton = closeButton;
                            } else if (typeof closeButton === "object") {
                                var closeButtonForType = closeButton[toast.type];

                                if (typeof closeButtonForType !== "undefined" && closeButtonForType !== null) {
                                    toast.showCloseButton = closeButtonForType;
                                }
                            } else {
                                // if an option was not set, default to false.
                                toast.showCloseButton = false;
                            }

                            if (toast.showCloseButton) {
                                toast.closeHtml = $sce.trustAsHtml(toast.closeHtml || scope.config.closeHtml);
                            }

                            // Set the toast.bodyOutputType to the default if it isn't set
                            toast.bodyOutputType = toast.bodyOutputType || mergedConfig['body-output-type'];
                            switch (toast.bodyOutputType) {
                                case 'trustedHtml':
                                    toast.html = $sce.trustAsHtml(toast.body);
                                    break;
                                case 'template':
                                    toast.bodyTemplate = toast.body || mergedConfig['body-template'];
                                    break;
                                case 'templateWithData':
                                    var fcGet = $parse(toast.body || mergedConfig['body-template']);
                                    var templateWithData = fcGet(scope);
                                    toast.bodyTemplate = templateWithData.template;
                                    toast.data = templateWithData.data;
                                    break;
                                case 'directive':
                                    toast.html = toast.body;
                                    break;
                            }

                            scope.configureTimer(toast);

                            if (mergedConfig['newest-on-top'] === true) {
                                scope.toasters.unshift(toast);
                                if (mergedConfig['limit'] > 0 && scope.toasters.length > mergedConfig['limit']) {
                                    scope.toasters.pop();
                                }
                            } else {
                                scope.toasters.push(toast);
                                if (mergedConfig['limit'] > 0 && scope.toasters.length > mergedConfig['limit']) {
                                    scope.toasters.shift();
                                }
                            }

                            if (angular.isFunction(toast.onShowCallback)) {
                                toast.onShowCallback(toast);
                            }
                        }

                        scope.removeToast = function(toastId) {
                            var i, len;
                            for (i = 0, len = scope.toasters.length; i < len; i++) {
                                if (scope.toasters[i].toastId === toastId) {
                                    removeToast(i);
                                    break;
                                }
                            }
                        };

                        function removeToast(toastIndex) {
                            var toast = scope.toasters[toastIndex];

                            // toast is always defined since the index always has a match
                            if (toast.timeoutPromise) {
                                $interval.cancel(toast.timeoutPromise);
                            }
                            scope.toasters.splice(toastIndex, 1);

                            if (angular.isFunction(toast.onHideCallback)) {
                                toast.onHideCallback(toast);
                            }
                        }

                        function removeAllToasts(toastId) {
                            for (var i = scope.toasters.length - 1; i >= 0; i--) {
                                if (isUndefinedOrNull(toastId)) {
                                    removeToast(i);
                                } else {
                                    if (scope.toasters[i].toastId == toastId) {
                                        removeToast(i);
                                    }
                                }
                            }
                        }

                        scope.toasters = [];

                        function isUndefinedOrNull(val) {
                            return angular.isUndefined(val) || val === null;
                        }

                        scope._onNewToast = function(event, toasterId, toastId) {
                            // Compatibility: if toaster has no toasterId defined, and if call to display
                            // hasn't either, then the request is for us

                            if ((isUndefinedOrNull(scope.config.toasterId) && isUndefinedOrNull(toasterId)) || (!isUndefinedOrNull(scope.config.toasterId) && !isUndefinedOrNull(toasterId) && scope.config.toasterId == toasterId)) {
                                addToast(toaster.toast, toastId);
                            }
                        };
                        scope._onClearToasts = function(event, toasterId, toastId) {
                            // Compatibility: if toaster has no toasterId defined, and if call to display
                            // hasn't either, then the request is for us
                            if (toasterId == '*' || (isUndefinedOrNull(scope.config.toasterId) && isUndefinedOrNull(toasterId)) || (!isUndefinedOrNull(scope.config.toasterId) && !isUndefinedOrNull(toasterId) && scope.config.toasterId == toasterId)) {
                                removeAllToasts(toastId);
                            }
                        };

                        toasterEventRegistry.setup();

                        toasterEventRegistry.subscribeToNewToastEvent(scope._onNewToast);
                        toasterEventRegistry.subscribeToClearToastsEvent(scope._onClearToasts);
                    },
                    controller: [
                        '$scope', '$element', '$attrs', function($scope, $element, $attrs) {
                            // Called on mouseover
                            $scope.stopTimer = function(toast) {
                                if ($scope.config.mouseoverTimer === true) {
                                    if (toast.timeoutPromise) {
                                        $interval.cancel(toast.timeoutPromise);
                                        toast.timeoutPromise = null;
                                    }
                                }
                            };

                            // Called on mouseout
                            $scope.restartTimer = function(toast) {
                                if ($scope.config.mouseoverTimer === true) {
                                    if (!toast.timeoutPromise) {
                                        $scope.configureTimer(toast);
                                    }
                                } else if (toast.timeoutPromise === null) {
                                    $scope.removeToast(toast.toastId);
                                }
                            };

                            $scope.click = function(event, toast, isCloseButton) {
                                event.stopPropagation();

                                var tapToDismiss = typeof toast.tapToDismiss === "boolean" 
                                                        ? toast.tapToDismiss 
                                                        : $scope.config.tap;
                                if (tapToDismiss === true || (toast.showCloseButton === true && isCloseButton === true)) {
                                    var removeToast = true;
                                    if (toast.clickHandler) {
                                        if (angular.isFunction(toast.clickHandler)) {
                                            removeToast = toast.clickHandler(toast, isCloseButton);
                                        } else if (angular.isFunction($scope.$parent.$eval(toast.clickHandler))) {
                                            removeToast = $scope.$parent.$eval(toast.clickHandler)(toast, isCloseButton);
                                        } else {
                                            console.log("TOAST-NOTE: Your click handler is not inside a parent scope of toaster-container.");
                                        }
                                    }
                                    if (removeToast) {
                                        $scope.removeToast(toast.toastId);
                                    }
                                }
                            };
                        }],
                    templateUrl: 'angularjs-toaster/toast.html'
                };
            }]
        );
})(window, document);

/**
 * Angular Image Fallback
 * (c) 2014-2016 Daniel Cohen. http://dcb.co.il
 * License: MIT
 * https://github.com/dcohenb/angular-img-fallback
 */
(function () {
    angular.module('dcbImgFallback', [])

        .directive('fallbackSrc', ['imageService', imageService => {

            return {
                restrict: 'A',
                link: (scope, element, attr) => {

                    // Update the service with the correct missing src if present, otherwise use the default image
                    let newSrc = attr.fallbackSrc ? imageService.setMissing(attr.fallbackSrc) : imageService.getMissing();

                    // Listen for errors on the element and if there are any replace the source with the fallback source
                    let errorHandler = () => {

                        // fallbackSrc may have changed since the link function ran, so try to grab it again.
                        let newSrc = attr.fallbackSrc ? imageService.setMissing(attr.fallbackSrc) : imageService.getMissing();

                        if (element[0].src !== newSrc) {
                            element[0].src = newSrc;
                        }
                    };

                    // Replace the loading image with missing image if `ng-src` link was broken
                    if (element[0].src === imageService.getLoading()) {
                        element[0].src = newSrc;
                    }

                    element.on('error', errorHandler);

                    scope.$on('$destroy', () => {
                        element.off('error', errorHandler);
                    });

                }
            };
        }])


        .directive('loadingSrc', ['$interpolate', 'imageService', ($interpolate, imageService) => {

            // Load the image source in the background and replace the element source once it's ready
            let linkFunction = (scope, element, attr) => {
                // Update the service with the correct loading src if present, otherwise use the default image
                element[0].src = attr.loadingSrc ? imageService.setLoading(attr.loadingSrc) : imageService.getLoading();

                let img = new Image();
                img.src = $interpolate(attr.imgSrc)(scope);

                img.onload = () => {
                    img.onload = null;
                    if (element[0].src !== img.src) {
                        element[0].src = img.src;
                    }
                };
            };

            return {
                restrict: 'A',
                compile: (el, attr) => {
                    // Take over the ng-src attribute to stop it from loading the image
                    attr.imgSrc = attr.ngSrc;
                    delete attr.ngSrc;

                    return linkFunction;
                }
            };
        }])

        .factory('imageService', () => {
            // Both images have the same prefix we can save some space on that
            let base64prefix = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0icmFkaWFsLWdyYWRpZW50IiBjeD0iNTAwIiBjeT0iNTAwIiByPSI1MDAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNkZmRmZGYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5OTkiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI3JhZGlhbC1ncmFkaWVudCkiIHdpZHRoPSIxMDAwIiBoZWlnaHQ9IjEwMDAiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNjAxIDQxNGwwIDBWNTg2bDAgMEgzOTlsMCAwVjQxNGwwIDBINjAxWm0wLTE0SDM5OUExNCAxNCAwIDAgMCAzODUgNDE0djE3M2ExNCAxNCAwIDAgMCAxNCAxNEg2MDFBMTQgMTQgMCAwIDAgNjE1IDU4NlY0MTRhMTQgMTQgMCAwIDAtMTQtMTRoMFpNNTc';

            let loadingDefault = `${base64prefix}1IDUwMmE3NyA3NyAwIDAgMC0yNC01NCA3NiA3NiAwIDAgMC0yNS0xNiA3NSA3NSAwIDAgMC01NyAxQTc0IDc0IDAgMCAwIDQzMCA0NzQgNzMgNzMgMCAwIDAgNDMxIDUzMGE3MiA3MiAwIDAgMCAzOSAzOCA3MCA3MCAwIDAgMCA1NC0xIDY5IDY5IDAgMCAwIDM3LTM4IDY4IDY4IDAgMCAwIDQtMTZsMSAwYTEwIDEwIDAgMCAwIDEwLTEwYzAgMCAwLTEgMC0xaDBabS0xNSAyNmE2NyA2NyAwIDAgMS0zNyAzNSA2NiA2NiAwIDAgMS01MC0xIDY0IDY0IDAgMCAxLTM0LTM1QTYzIDYzIDAgMCAxIDQ0MCA0NzkgNjIgNjIgMCAwIDEgNDU0IDQ1OSA2MiA2MiAwIDAgMSA0NzQgNDQ2YTYxIDYxIDAgMCAxIDIzLTQgNjAgNjAgMCAwIDEgNDIgMTlBNTkgNTkgMCAwIDEgNTUyIDQ4MGE1OCA1OCAwIDAgMSA0IDIyaDBjMCAwIDAgMSAwIDFhMTAgMTAgMCAwIDAgOSAxMCA2NyA2NyAwIDAgMS01IDE1aDBaIi8+PC9zdmc+`;
            let missingDefault = `${base64prefix}yIDQ1MGEyMiAyMiAwIDEgMS0yMi0yMkEyMiAyMiAwIDAgMSA1NzIgNDUwWk01ODYgNTcySDQxNFY1NDNsNTAtODYgNTggNzJoMTRsNTAtNDN2ODZaIi8+PC9zdmc+`;

            return {
                getLoading: () => {
                    return loadingDefault;
                },
                getMissing: () => {
                    return missingDefault;
                },
                setLoading: (newSrc) => {
                    return loadingDefault = newSrc;
                },
                setMissing: (newSrc) => {
                    return missingDefault = newSrc;
                }
            };
        });
}());
/*! 5.2.0 */
!window.XMLHttpRequest||window.FileAPI&&FileAPI.shouldLoad||(window.XMLHttpRequest.prototype.setRequestHeader=function(a){return function(b,c){if("__setXHR_"===b){var d=c(this);d instanceof Function&&d(this)}else a.apply(this,arguments)}}(window.XMLHttpRequest.prototype.setRequestHeader));var ngFileUpload=angular.module("ngFileUpload",[]);ngFileUpload.version="5.2.0",ngFileUpload.defaults={},ngFileUpload.service("Upload",["$http","$q","$timeout",function(a,b,c){function d(d){d.method=d.method||"POST",d.headers=d.headers||{};var e=b.defer(),f=e.promise;return d.headers.__setXHR_=function(){return function(a){a&&(d.__XHR=a,d.xhrFn&&d.xhrFn(a),a.upload.addEventListener("progress",function(a){a.config=d,e.notify?e.notify(a):f.progressFunc&&c(function(){f.progressFunc(a)})},!1),a.upload.addEventListener("load",function(a){a.lengthComputable&&(a.config=d,e.notify?e.notify(a):f.progressFunc&&c(function(){f.progressFunc(a)}))},!1))}},a(d).then(function(a){e.resolve(a)},function(a){e.reject(a)},function(a){e.notify(a)}),f.success=function(a){return f.then(function(b){a(b.data,b.status,b.headers,d)}),f},f.error=function(a){return f.then(null,function(b){a(b.data,b.status,b.headers,d)}),f},f.progress=function(a){return f.progressFunc=a,f.then(null,null,function(b){a(b)}),f},f.abort=function(){return d.__XHR&&c(function(){d.__XHR.abort()}),f},f.xhr=function(a){return d.xhrFn=function(b){return function(){b&&b.apply(f,arguments),a.apply(f,arguments)}}(d.xhrFn),f},f}this.upload=function(a){function b(c,d,e){if(void 0!==d)if(angular.isDate(d)&&(d=d.toISOString()),angular.isString(d))c.append(e,d);else if("form"===a.sendFieldsAs)if(angular.isObject(d))for(var f in d)d.hasOwnProperty(f)&&b(c,d[f],e+"["+f+"]");else c.append(e,d);else d=angular.isString(d)?d:JSON.stringify(d),"json-blob"===a.sendFieldsAs?c.append(e,new Blob([d],{type:"application/json"})):c.append(e,d)}return a.headers=a.headers||{},a.headers["Content-Type"]=void 0,a.transformRequest=a.transformRequest?angular.isArray(a.transformRequest)?a.transformRequest:[a.transformRequest]:[],a.transformRequest.push(function(c){var d,e=new FormData,f={};for(d in a.fields)a.fields.hasOwnProperty(d)&&(f[d]=a.fields[d]);c&&(f.data=c);for(d in f)if(f.hasOwnProperty(d)){var g=f[d];a.formDataAppender?a.formDataAppender(e,d,g):b(e,g,d)}if(null!=a.file){var h=a.fileFormDataName||"file";if(angular.isArray(a.file))for(var i=angular.isString(h),j=0;j<a.file.length;j++)e.append(i?h:h[j],a.file[j],a.fileName&&a.fileName[j]||a.file[j].name);else e.append(h,a.file,a.fileName||a.file.name)}return e}),d(a)},this.http=function(b){return b.transformRequest=b.transformRequest||function(b){return window.ArrayBuffer&&b instanceof window.ArrayBuffer||b instanceof Blob?b:a.defaults.transformRequest[0](arguments)},d(b)},this.dataUrl=function(a,b,d){window.FileReader&&a&&(!window.FileAPI||-1===navigator.userAgent.indexOf("MSIE 8")||a.size<2e4)&&(!window.FileAPI||-1===navigator.userAgent.indexOf("MSIE 9")||a.size<4e6)?c(function(){var e=window.URL||window.webkitURL;if(e&&e.createObjectURL&&!d)b(e.createObjectURL(a));else{var f=new FileReader;f.readAsDataURL(a),f.onload=function(a){c(function(){b(a.target.result)})}}}):b(null)},this.setDefaults=function(a){ngFileUpload.defaults=a||{}}}]),function(){function a(a,f,g,h,i,j,k){function l(){return"input"===f[0].tagName.toLowerCase()&&g.type&&"file"===g.type.toLowerCase()}function m(b){if(!s){s=!0;try{for(var f=b.__files_||b.target&&b.target.files,k=[],l=[],m=0;m<f.length;m++){var n=f.item(m);d(a,i,g,n,b)?k.push(n):l.push(n)}e(i,j,a,h,g,c(g,"ngfChange")||c(g,"ngfSelect"),k,l,b),0===k.length&&(b.target.value=k)}finally{s=!1}}}function n(b){c(g,"ngfMultiple")&&b.attr("multiple",i(c(g,"ngfMultiple"))(a)),c(g,"ngfCapture")&&b.attr("capture",i(c(g,"ngfCapture"))(a)),c(g,"accept")&&b.attr("accept",c(g,"accept"));for(var d=0;d<f[0].attributes.length;d++){var e=f[0].attributes[d];(l()&&"type"!==e.name||"type"!==e.name&&"class"!==e.name&&"id"!==e.name&&"style"!==e.name)&&b.attr(e.name,e.value)}}function o(b,c){if(!c&&(b||l()))return f.$$ngfRefElem||f;var d=angular.element('<input type="file">');return n(d),l()?(f.replaceWith(d),f=d,d.attr("__ngf_gen__",!0),k(f)(a)):(d.css("visibility","hidden").css("position","absolute").css("overflow","hidden").css("width","0px").css("height","0px").css("z-index","-100000").css("border","none").css("margin","0px").css("padding","0px").attr("tabindex","-1"),f.$$ngfRefElem&&f.$$ngfRefElem.remove(),f.$$ngfRefElem=d,document.body.appendChild(d[0])),d}function p(b){e(i,j,a,h,g,c(g,"ngfChange")||c(g,"ngfSelect"),[],[],b,!0)}function q(d){function e(a){a&&a.clientY>0&&k[0].click(),!l()&&a||!j||f.bind("click touchend touchstart",q)}if(f.attr("disabled")||r)return!1;if(null!=d){if("touchstart"===d.type)return t=d.originalEvent.touches[0].clientY,!0;if(d.stopPropagation(),d.preventDefault(),"touchend"===d.type){var h=d.originalEvent.changedTouches[0].clientY;if(Math.abs(h-t)>20)return!1}}var j=i(c(g,"ngfResetOnClick"))(a)!==!1,k=o(d,j);return k&&((!d||j)&&k.bind("change",m),d&&j&&i(c(g,"ngfResetModelOnClick"))(a)!==!1&&p(d),b(navigator.userAgent)?setTimeout(function(){e(d)},0):e(d)),!1}if(!f.attr("__ngf_gen__")){a.$on("$destroy",function(){f.$$ngfRefElem&&f.$$ngfRefElem.remove()});var r=!1;-1===c(g,"ngfSelect").search(/\W+$files\W+/)&&a.$watch(c(g,"ngfSelect"),function(a){r=a===!1});var s=!1,t=0;window.FileAPI&&window.FileAPI.ngfFixIE?window.FileAPI.ngfFixIE(f,o,n,m):q()}}function b(a){var b=a.match(/Android[^\d]*(\d+)\.(\d+)/);if(b&&b.length>2){var c=ngFileUpload.defaults.androidFixMinorVersion||4;return parseInt(b[1])<4||parseInt(b[1])===c&&parseInt(b[2])<c}return-1===a.indexOf("Chrome")&&/.*Windows.*Safari.*/.test(a)}ngFileUpload.getAttrWithDefaults=function(a,b){return null!=a[b]?a[b]:null==ngFileUpload.defaults[b]?ngFileUpload.defaults[b]:ngFileUpload.defaults[b].toString()};var c=ngFileUpload.getAttrWithDefaults;ngFileUpload.directive("ngfSelect",["$parse","$timeout","$compile",function(b,c,d){return{restrict:"AEC",require:"?ngModel",link:function(e,f,g,h){a(e,f,g,h,b,c,d)}}}]),ngFileUpload.validate=function(a,b,d,e,f){function g(a){if(a.length>2&&"/"===a[0]&&"/"===a[a.length-1])return a.substring(1,a.length-1);var b=a.split(","),c="";if(b.length>1)for(var d=0;d<b.length;d++)c+="("+g(b[d])+")",d<b.length-1&&(c+="|");else 0===a.indexOf(".")&&(a="*"+a),c="^"+a.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]","g"),"\\$&")+"$",c=c.replace(/\\\*/g,".*").replace(/\\\?/g,".");return c}if(null==e)return!1;var h=b(c(d,"ngfAccept"))(a,{$file:e,$event:f}),i=b(c(d,"ngfMaxSize"))(a,{$file:e,$event:f})||9007199254740991,j=b(c(d,"ngfMinSize"))(a,{$file:e,$event:f})||-1;if(null!=h&&angular.isString(h)){var k=new RegExp(g(h),"gi");if(h=null!=e.type&&k.test(e.type.toLowerCase())||null!=e.name&&k.test(e.name.toLowerCase()),!h)return e.$error="accept",!1}else if(h===!1)return e.$error="accept",!1;return null==e.size?!0:e.size>i?(e.$error="maxSize",!1):e.size<j?(e.$error="minSize",!1):!0},ngFileUpload.updateModel=function(a,b,d,e,f,g,h,i,j,k){function l(){var k=a(c(f,"ngfKeep"))(d);if(k===!0){var l=(e.$modelValue||[]).slice(0);if(h&&h.length)if(a(c(f,"ngfKeepDistinct"))(d)===!0){for(var m=l.length,n=0;n<h.length;n++){for(var o=0;m>o&&h[n].name!==l[o].name;o++);o===m&&l.push(h[n])}h=l}else h=l.concat(h);else h=l}var p=h&&h[0];if(e){a(c(f,"ngModel")).assign(d,h);var q=!a(c(f,"multiple"))(d)&&!k,r=c(f,"ngfModel");r&&a(r).assign(d,q?p:h),b(function(){e&&e.$setViewValue(null!=h&&0===h.length?null:h)})}c(f,"ngModelRejected")&&a(c(f,"ngModelRejected")).assign(d,i),g&&a(g)(d,{$files:h,$file:p,$rejectedFiles:i,$event:j})}k?l():b(function(){l()})};var d=ngFileUpload.validate,e=ngFileUpload.updateModel}(),function(){function a(a,f,g,h,i,j,k){function l(a,b,d){var f=!0,g=d.dataTransfer.items;if(null!=g)for(var h=0;h<g.length&&f;h++)f=f&&("file"===g[h].kind||""===g[h].kind)&&c(a,i,b,g[h],d);var j=i(e(b,"ngfDragOverClass"))(a,{$event:d});return j&&(j.delay&&(s=j.delay),j.accept&&(j=f?j.accept:j.reject)),j||e(b,"ngfDragOverClass")||"dragover"}function m(b,d,e,f){function h(d){c(a,i,g,d,b)?m.push(d):n.push(d)}function l(a,b,c){if(null!=b)if(b.isDirectory){var d=(c||"")+b.name;h({name:b.name,type:"directory",path:d});var e=b.createReader(),f=[];p++;var g=function(){e.readEntries(function(d){try{if(d.length)f=f.concat(Array.prototype.slice.call(d||[],0)),g();else{for(var e=0;e<f.length;e++)l(a,f[e],(c?c:"")+b.name+"/");p--}}catch(h){p--,console.error(h)}},function(){p--})};g()}else p++,b.file(function(a){try{p--,a.path=(c?c:"")+a.name,h(a)}catch(b){p--,console.error(b)}},function(){p--})}var m=[],n=[],o=b.dataTransfer.items,p=0;if(o&&o.length>0&&"file"!==k.protocol())for(var q=0;q<o.length;q++){if(o[q].webkitGetAsEntry&&o[q].webkitGetAsEntry()&&o[q].webkitGetAsEntry().isDirectory){var r=o[q].webkitGetAsEntry();if(r.isDirectory&&!e)continue;null!=r&&l(m,r)}else{var s=o[q].getAsFile();null!=s&&h(s)}if(!f&&m.length>0)break}else{var t=b.dataTransfer.files;if(null!=t)for(var u=0;u<t.length&&(h(t.item(u)),f||!(m.length>0));u++);}var v=0;!function w(a){j(function(){if(p)10*v++<2e4&&w(10);else{if(!f&&m.length>1){for(q=0;"directory"===m[q].type;)q++;m=[m[q]]}d(m,n)}},a||0)}()}var n=b();if(e(g,"dropAvailable")&&j(function(){a[e(g,"dropAvailable")]?a[e(g,"dropAvailable")].value=n:a[e(g,"dropAvailable")]=n}),!n)return void(i(e(g,"ngfHideOnDropNotAvailable"))(a)===!0&&f.css("display","none"));var o=!1;-1===e(g,"ngfDrop").search(/\W+$files\W+/)&&a.$watch(e(g,"ngfDrop"),function(a){o=a===!1});var p,q=null,r=i(e(g,"ngfStopPropagation")),s=1;f[0].addEventListener("dragover",function(b){if(!f.attr("disabled")&&!o){if(b.preventDefault(),r(a)&&b.stopPropagation(),navigator.userAgent.indexOf("Chrome")>-1){var c=b.dataTransfer.effectAllowed;b.dataTransfer.dropEffect="move"===c||"linkMove"===c?"move":"copy"}j.cancel(q),a.actualDragOverClass||(p=l(a,g,b)),f.addClass(p)}},!1),f[0].addEventListener("dragenter",function(b){f.attr("disabled")||o||(b.preventDefault(),r(a)&&b.stopPropagation())},!1),f[0].addEventListener("dragleave",function(){f.attr("disabled")||o||(q=j(function(){f.removeClass(p),p=null},s||1))},!1),f[0].addEventListener("drop",function(b){f.attr("disabled")||o||(b.preventDefault(),r(a)&&b.stopPropagation(),f.removeClass(p),p=null,m(b,function(c,f){d(i,j,a,h,g,e(g,"ngfChange")||e(g,"ngfDrop"),c,f,b)},i(e(g,"ngfAllowDir"))(a)!==!1,e(g,"multiple")||i(e(g,"ngfMultiple"))(a)))},!1)}function b(){var a=document.createElement("div");return"draggable"in a&&"ondrop"in a}var c=ngFileUpload.validate,d=ngFileUpload.updateModel,e=ngFileUpload.getAttrWithDefaults;ngFileUpload.directive("ngfDrop",["$parse","$timeout","$location",function(b,c,d){return{restrict:"AEC",require:"?ngModel",link:function(e,f,g,h){a(e,f,g,h,b,c,d)}}}]),ngFileUpload.directive("ngfNoFileDrop",function(){return function(a,c){b()&&c.css("display","none")}}),ngFileUpload.directive("ngfDropAvailable",["$parse","$timeout",function(a,c){return function(d,f,g){if(b()){var h=a(e(g,"ngfDropAvailable"));c(function(){h(d),h.assign&&h.assign(d,!0)})}}}])}(),function(){function a(a,b,c,d,e,f,g){b.$watch(e,function(e){window.FileReader&&ngFileUpload.validate(b,c,d,e,null)&&a.dataUrl(e,function(a){g?g(a):e.dataUrl=a||c(f)(b)},c(d.ngfNoObjectUrl)(b))})}ngFileUpload.directive("ngfSrc",["$parse","Upload",function(b,c){return{restrict:"AE",link:function(d,e,f){a(c,d,b,f,f.ngfSrc,f.ngfDefaultSrc,function(a){e.attr("src",a)})}}}]),ngFileUpload.directive("ngfBackground",["$parse","Upload",function(b,c){return{restrict:"AE",link:function(d,e,f){a(c,d,b,f,f.ngfBackground,f.ngfDefaultBackground,function(a){e.css("background-image","url("+a+")")})}}}]),ngFileUpload.directive("ngfDataUrl",["$parse","Upload",function(b,c){return{restrict:"AE",link:function(d,e,f){a(c,d,b,f,f.ngfDataUrl,f.ngfDefaultDataUrl)}}}])}();