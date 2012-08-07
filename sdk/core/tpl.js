Ambow.DomHelper=function(){var x=null,K=/^(?:br|frame|hr|img|input|link|meta|range|spacer|wbr|area|param|col)$/i,I=/^table|tbody|tr|td$/i,Q=/tag|children|cn|html$/i,B=/td|tr|tbody/i,G=/([a-z0-9-]+)\s*:\s*([^;\s]+(?:\s*[^;\s]+)*);?/gi,z=/end/i,D,H="afterbegin",F="afterend",R="beforebegin",E="beforeend",T="<table>",M="</table>",S=T+"<tbody>",L="</tbody>"+M,J=S+"<tr>",y="</tr>"+L;function N(b,e,g,c,d,a){var f=D.insertHtml(c,b,A(e));return f}function A(e){var g="",b,f,a,c;if(typeof e=="string"){g=e}else{if(Ambow.isArray(e)){for(var d=0;d<e.length;d++){if(e[d]){g+=A(e[d])}}}else{g+="<"+(e.tag=e.tag||"div");for(b in e){f=e[b];if(!Q.test(b)){if(typeof f=="object"){g+=" "+b+'="';for(a in f){g+=a+":"+f[a]+";"}g+='"'}else{g+=" "+({cls:"class",htmlFor:"for"}[b]||b)+'="'+f+'"'}}}if(K.test(e.tag)){g+="/>"}else{g+=">";if((c=e.children||e.cn)){g+=A(c)}else{if(e.html){g+=e.html}}g+="</"+e.tag+">"}}}return g}function O(c,h,b,f){x.innerHTML=[h,b,f].join("");var a=-1,e=x,g;while(++a<c){e=e.firstChild}if(g=e.nextSibling){var d=document.createDocumentFragment();while(e){g=e.nextSibling;d.appendChild(e);e=g}e=d}return e}function P(b,f,a,d){var e,c;x=x||document.createElement("div");if(b=="td"&&(f==H||f==E)||!B.test(b)&&(f==R||f==F)){return}c=f==R?a:f==F?a.nextSibling:f==H?a.firstChild:null;if(f==R||f==F){a=a.parentNode}if(b=="td"||(b=="tr"&&(f==E||f==H))){e=O(4,J,d,y)}else{if((b=="tbody"&&(f==E||f==H))||(b=="tr"&&(f==R||f==F))){e=O(3,S,d,L)}else{e=O(2,T,d,M)}}a.insertBefore(e,c);return e}function C(d){var c=document.createElement("div"),b=document.createDocumentFragment(),f=0,a,e;c.innerHTML=d;e=c.childNodes;a=e.length;for(;f<a;f++){b.appendChild(e[f].cloneNode(true))}return b}D={markup:function(a){return A(a)},insertHtml:function(b,g,a){var d={},e,j,c,i,h,f;b=b.toLowerCase();d[R]=["BeforeBegin","previousSibling"];d[F]=["AfterEnd","nextSibling"];if(g.insertAdjacentHTML){if(I.test(g.tagName)&&(f=P(g.tagName.toLowerCase(),b,g,a))){return f}d[H]=["AfterBegin","firstChild"];d[E]=["BeforeEnd","lastChild"];if((e=d[b])){g.insertAdjacentHTML(e[0],a);return g[e[1]]}}else{j=g.ownerDocument.createRange();i="setStart"+(z.test(b)?"After":"Before");if(d[b]){j[i](g);if(!j.createContextualFragment){h=C(a)}else{h=j.createContextualFragment(a)}g.parentNode.insertBefore(h,b==R?g:g.nextSibling);return g[(b==R?"previous":"next")+"Sibling"]}else{c=(b==H?"first":"last")+"Child";if(g.firstChild){j[i](g[c]);if(!j.createContextualFragment){h=C(a)}else{h=j.createContextualFragment(a)}if(b==H){g.insertBefore(h,g.firstChild)}else{g.appendChild(h)}}else{g.innerHTML=a}return g[c]}}throw'Illegal insertion point -> "'+b+'"'},insertBefore:function(a,b,c){return N(a,b,c,R)},insertAfter:function(a,b,c){return N(a,b,c,F,"nextSibling")},insertFirst:function(a,b,c){return N(a,b,c,H,"firstChild")},append:function(a,b,c){return N(a,b,c,E,"",true)},overwrite:function(a,b,c){a.innerHTML=A(b);return a.firstChild},createHtml:A};return D}();Ambow.util.Format=function(){var trimRe=/^\s+|\s+$/g,stripTagsRE=/<\/?[^>]+>/gi,stripScriptsRe=/(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)/ig,nl2brRe=/\r?\n/g;return{ellipsis:function(value,len,word){if(value&&value.length>len){if(word){var vs=value.substr(0,len-2),index=Math.max(vs.lastIndexOf(" "),vs.lastIndexOf("."),vs.lastIndexOf("!"),vs.lastIndexOf("?"));if(index==-1||index<(len-15)){return value.substr(0,len-3)+"..."}else{return vs.substr(0,index)+"..."}}else{return value.substr(0,len-3)+"..."}}return value},undef:function(value){return value!==undefined?value:""},defaultValue:function(value,defaultValue){return value!==undefined&&value!==""?value:defaultValue},htmlEncode:function(value){return !value?value:String(value).replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")},htmlDecode:function(value){return !value?value:String(value).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&quot;/g,'"').replace(/&amp;/g,"&")},trim:function(value){return String(value).replace(trimRe,"")},substr:function(value,start,length){return String(value).substr(start,length)},lowercase:function(value){return String(value).toLowerCase()},uppercase:function(value){return String(value).toUpperCase()},capitalize:function(value){return !value?value:value.charAt(0).toUpperCase()+value.substr(1).toLowerCase()},call:function(value,fn){if(arguments.length>2){var args=Array.prototype.slice.call(arguments,2);args.unshift(value);return eval(fn).apply(window,args)}else{return eval(fn).call(window,value)}},usMoney:function(v){v=(Math.round((v-0)*100))/100;v=(v==Math.floor(v))?v+".00":((v*10==Math.floor(v*10))?v+"0":v);v=String(v);var ps=v.split("."),whole=ps[0],sub=ps[1]?"."+ps[1]:".00",r=/(\d+)(\d{3})/;while(r.test(whole)){whole=whole.replace(r,"$1,$2")}v=whole+sub;if(v.charAt(0)=="-"){return"-$"+v.substr(1)}return"$"+v},date:function(v,format){if(!v){return""}if(!Ambow.isDate(v)){v=new Date(Date.parse(v))}return v.dateFormat(format||"m/d/Y")},dateRenderer:function(format){return function(v){return Ambow.util.Format.date(v,format)}},stripTags:function(v){return !v?v:String(v).replace(stripTagsRE,"")},stripScripts:function(v){return !v?v:String(v).replace(stripScriptsRe,"")},fileSize:function(size){if(size<1024){return size+" bytes"}else{if(size<1048576){return(Math.round(((size*10)/1024))/10)+" KB"}else{return(Math.round(((size*10)/1048576))/10)+" MB"}}},math:function(){var fns={};return function(v,a){if(!fns[a]){fns[a]=new Function("v","return v "+a+";")}return fns[a](v)}}(),round:function(value,precision){var result=Number(value);if(typeof precision=="number"){precision=Math.pow(10,precision);result=Math.round(value*precision)/precision}return result},number:function(v,format){if(!format){return v}v=Ambow.num(v,NaN);if(isNaN(v)){return""}var comma=",",dec=".",i18n=false,neg=v<0;v=Math.abs(v);if(format.substr(format.length-2)=="/i"){format=format.substr(0,format.length-2);i18n=true;comma=".";dec=","}var hasComma=format.indexOf(comma)!=-1,psplit=(i18n?format.replace(/[^\d\,]/g,""):format.replace(/[^\d\.]/g,"")).split(dec);if(1<psplit.length){v=v.toFixed(psplit[1].length)}else{if(2<psplit.length){throw ("NumberFormatException: invalid format, formats should have no more than 1 period: "+format)}else{v=v.toFixed(0)}}var fnum=v.toString();psplit=fnum.split(".");if(hasComma){var cnum=psplit[0],parr=[],j=cnum.length,m=Math.floor(j/3),n=cnum.length%3||3,i;for(i=0;i<j;i+=n){if(i!=0){n=3}parr[parr.length]=cnum.substr(i,n);m-=1}fnum=parr.join(comma);if(psplit[1]){fnum+=dec+psplit[1]}}else{if(psplit[1]){fnum=psplit[0]+dec+psplit[1]}}return(neg?"-":"")+format.replace(/[\d,?\.?]+/,fnum)},numberRenderer:function(format){return function(v){return Ambow.util.Format.number(v,format)}},plural:function(v,s,p){return v+" "+(v==1?s:(p?p:s+"s"))},nl2br:function(v){return Ambow.isEmpty(v)?"":v.replace(nl2brRe,"<br/>")}}}();Ambow.Template=function(j){var i=this,n=arguments,l=[],m;if(Ambow.isArray(j)){j=j.join("")}else{if(n.length>1){for(var k=0,a=n.length;k<a;k++){m=n[k];if(typeof m=="object"){Ambow.apply(i,m)}else{l.push(m)}}j=l.join("")}}i.html=j;if(i.compiled){i.compile()}};Ambow.Template.prototype={re:/\{([\w\-]+)\}/g,applyTemplate:function(d){var c=this;return c.compiled?c.compiled(d):c.html.replace(c.re,function(b,a){return d[a]!==undefined?d[a]:""})},set:function(e,f){var d=this;d.html=e;d.compiled=null;return f?d.compile():d},compile:function(){var me=this,sep=Ambow.isGecko?"+":",";function fn(m,name){name="values['"+name+"']";return"'"+sep+"("+name+" == undefined ? '' : "+name+")"+sep+"'"}eval("this.compiled = function(values){ return "+(Ambow.isGecko?"'":"['")+me.html.replace(/\\/g,"\\\\").replace(/(\r\n|\n)/g,"\\n").replace(/'/g,"\\'").replace(this.re,fn)+(Ambow.isGecko?"';};":"'].join('');};"));return me},insertFirst:function(c,d){return this.doInsert("afterBegin",c,d)},insertBefore:function(c,d){return this.doInsert("beforeBegin",c,d)},insertAfter:function(c,d){return this.doInsert("afterEnd",c,d)},append:function(c,d){return this.doInsert("beforeEnd",c,d)},doInsert:function(e,g,f){var h=Ambow.DomHelper.insertHtml(e,g,this.applyTemplate(f));return h},overwrite:function(c,d){c.innerHTML=this.applyTemplate(d);return c.firstChild}};Ambow.Template.prototype.apply=Ambow.Template.prototype.applyTemplate;Ambow.Template.from=function(c,d){return new Ambow.Template(c.value||c.innerHTML,d||"")};Ambow.apply(Ambow.Template.prototype,{disableFormats:false,re:/\{([\w\-]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?\}/g,argsRe:/^\s*['"](.*)["']\s*$/,compileARe:/\\/g,compileBRe:/(\r\n|\n)/g,compileCRe:/'/g,applyTemplate:function(g){var i=this,h=i.disableFormats!==true,j=Ambow.util.Format,l=i;if(i.compiled){return i.compiled(g)}function k(d,b,f,c){if(f&&h){if(f.substr(0,5)=="this."){return l.call(f.substr(5),g[b],g)}else{if(c){var m=i.argsRe;c=c.split(",");for(var a=0,e=c.length;a<e;a++){c[a]=c[a].replace(m,"$1")}c=[g[b]].concat(c)}else{c=[g[b]]}return j[f].apply(j,c)}}else{return g[b]!==undefined?g[b]:""}}return i.html.replace(i.re,k)},compile:function(){var me=this,fm=Ambow.util.Format,useF=me.disableFormats!==true,sep=Ambow.isGecko?"+":",",body;function fn(m,name,format,args){if(format&&useF){args=args?","+args:"";if(format.substr(0,5)!="this."){format="fm."+format+"("}else{format='this.call("'+format.substr(5)+'", ';args=", values"}}else{args="";format="(values['"+name+"'] == undefined ? '' : "}return"'"+sep+format+"values['"+name+"']"+args+")"+sep+"'"}if(Ambow.isGecko){body="this.compiled = function(values){ return '"+me.html.replace(me.compileARe,"\\\\").replace(me.compileBRe,"\\n").replace(me.compileCRe,"\\'").replace(me.re,fn)+"';};"}else{body=["this.compiled = function(values){ return ['"];body.push(me.html.replace(me.compileARe,"\\\\").replace(me.compileBRe,"\\n").replace(me.compileCRe,"\\'").replace(me.re,fn));body.push("'].join('');};");body=body.join("")}eval(body);return me},call:function(f,d,e){return this[f](d,e)}});Ambow.Template.prototype.apply=Ambow.Template.prototype.applyTemplate;Ambow.XTemplate=function(){Ambow.XTemplate.superclass.constructor.apply(this,arguments);var s=this,M=s.html,G=/<tpl\b[^>]*>((?:(?=([^<]+))\2|<(?!tpl\b[^>]*>))*?)<\/tpl>/,Q=/^<tpl\b[^>]*?for="(.*?)"/,C=/^<tpl\b[^>]*?if="(.*?)"/,A=/^<tpl\b[^>]*?exec="(.*?)"/,F,H=0,L=[],I="values",B="parent",K="xindex",J="xcount",P="return ",R="with(values){ ";M=["<tpl>",M,"</tpl>"].join("");while((F=M.match(G))){var S=F[0].match(Q),T=F[0].match(C),i=F[0].match(A),O=null,N=null,E=null,m=S&&S[1]?S[1]:"";if(T){O=T&&T[1]?T[1]:null;if(O){N=new Function(I,B,K,J,R+P+(Ambow.util.Format.htmlDecode(O))+"; }")}}if(i){O=i&&i[1]?i[1]:null;if(O){E=new Function(I,B,K,J,R+(Ambow.util.Format.htmlDecode(O))+"; }")}}if(m){switch(m){case".":m=new Function(I,B,R+P+I+"; }");break;case"..":m=new Function(I,B,R+P+B+"; }");break;default:m=new Function(I,B,R+P+m+"; }")}}L.push({id:H,target:m,exec:E,test:N,body:F[1]||""});M=M.replace(F[0],"{xtpl"+H+"}");++H}for(var D=L.length-1;D>=0;--D){s.compileTpl(L[D])}s.master=L[L.length-1];s.tpls=L};Ambow.extend(Ambow.XTemplate,Ambow.Template,{re:/\{([\w\-\.\#]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?(\s?[\+\-\*\\]\s?[\d\.\+\-\*\\\(\)]+)?\}/g,codeRe:/\{\[((?:\\\]|.|\n)*?)\]\}/g,applySubTemplate:function(v,n,o,s,t){var p=this,q,i=p.tpls[v],m,u=[];if((i.test&&!i.test.call(p,n,o,s,t))||(i.exec&&i.exec.call(p,n,o,s,t))){return""}m=i.target?i.target.call(p,n,o):n;q=m.length;o=i.target?n:o;if(i.target&&Ambow.isArray(m)){for(var r=0,q=m.length;r<q;r++){u[u.length]=i.compiled.call(p,m[r],o,r+1,q)}return u.join("")}return i.compiled.call(p,m,o,s,t)},compileTpl:function(tpl){var fm=Ambow.util.Format,useF=this.disableFormats!==true,sep=Ambow.isGecko?"+":",",body;function fn(m,name,format,args,math){if(name.substr(0,4)=="xtpl"){return"'"+sep+"this.applySubTemplate("+name.substr(4)+", values, parent, xindex, xcount)"+sep+"'"}var v;if(name==="."){v="values"}else{if(name==="#"){v="xindex"}else{if(name.indexOf(".")!=-1){v=name}else{v="values['"+name+"']"}}}if(math){v="("+v+math+")"}if(format&&useF){args=args?","+args:"";if(format.substr(0,5)!="this."){format="fm."+format+"("}else{format='this.call("'+format.substr(5)+'", ';args=", values"}}else{args="";format="("+v+" === undefined ? '' : "}return"'"+sep+format+v+args+")"+sep+"'"}function codeFn(m,code){return"'"+sep+"("+code.replace(/\\'/g,"'")+")"+sep+"'"}if(Ambow.isGecko){body="tpl.compiled = function(values, parent, xindex, xcount){ return '"+tpl.body.replace(/(\r\n|\n)/g,"\\n").replace(/'/g,"\\'").replace(this.re,fn).replace(this.codeRe,codeFn)+"';};"}else{body=["tpl.compiled = function(values, parent, xindex, xcount){ return ['"];body.push(tpl.body.replace(/(\r\n|\n)/g,"\\n").replace(/'/g,"\\'").replace(this.re,fn).replace(this.codeRe,codeFn));body.push("'].join('');};");body=body.join("")}eval(body);return this},applyTemplate:function(b){return this.master.compiled.call(this,b,{},1,1)},compile:function(){return this}});Ambow.XTemplate.prototype.apply=Ambow.XTemplate.prototype.applyTemplate;Ambow.XTemplate.from=function(b){b=Ambow.getDom(b);return new Ambow.XTemplate(b.value||b.innerHTML)};