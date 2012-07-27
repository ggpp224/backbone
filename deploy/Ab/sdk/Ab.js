/*!
 * Ab
 */
/*
 * Ab
 */
Ab.DomHelper=function(){var w=null,j=/^(?:br|frame|hr|img|input|link|meta|range|spacer|wbr|area|param|col)$/i,l=/^table|tbody|tr|td$/i,d=/tag|children|cn|html$/i,s=/td|tr|tbody/i,n=/([a-z0-9-]+)\s*:\s*([^;\s]+(?:\s*[^;\s]+)*);?/gi,u=/end/i,q,m="afterbegin",o="afterend",c="beforebegin",p="beforeend",a="<table>",h="</table>",b=a+"<tbody>",i="</tbody>"+h,k=b+"<tr>",v="</tr>"+i;function g(A,C,B,D,z,x){var y=q.insertHtml(D,A,t(C));return y}function t(C){var y="",x,B,A,D;if(typeof C=="string"){y=C}else{if(Ab.isArray(C)){for(var z=0;z<C.length;z++){if(C[z]){y+=t(C[z])}}}else{y+="<"+(C.tag=C.tag||"div");for(x in C){B=C[x];if(!d.test(x)){if(typeof B=="object"){y+=" "+x+'="';for(A in B){y+=A+":"+B[A]+";"}y+='"'}else{y+=" "+({cls:"class",htmlFor:"for"}[x]||x)+'="'+B+'"'}}}if(j.test(C.tag)){y+="/>"}else{y+=">";if((D=C.children||C.cn)){y+=t(D)}else{if(C.html){y+=C.html}}y+="</"+C.tag+">"}}}return y}function f(E,B,A,C){w.innerHTML=[B,A,C].join("");var x=-1,z=w,y;while(++x<E){z=z.firstChild}if(y=z.nextSibling){var D=document.createDocumentFragment();while(z){y=z.nextSibling;D.appendChild(z);z=y}z=D}return z}function e(x,y,A,z){var B,C;w=w||document.createElement("div");if(x=="td"&&(y==m||y==p)||!s.test(x)&&(y==c||y==o)){return}C=y==c?A:y==o?A.nextSibling:y==m?A.firstChild:null;if(y==c||y==o){A=A.parentNode}if(x=="td"||(x=="tr"&&(y==p||y==m))){B=f(4,k,z,v)}else{if((x=="tbody"&&(y==p||y==m))||(x=="tr"&&(y==c||y==o))){B=f(3,b,z,i)}else{B=f(2,a,z,h)}}A.insertBefore(B,C);return B}function r(z){var C=document.createElement("div"),x=document.createDocumentFragment(),y=0,A,B;C.innerHTML=z;B=C.childNodes;A=B.length;for(;y<A;y++){x.appendChild(B[y].cloneNode(true))}return x}q={markup:function(x){return t(x)},insertHtml:function(C,x,D){var A={},z,E,B,F,G,y;C=C.toLowerCase();A[c]=["BeforeBegin","previousSibling"];A[o]=["AfterEnd","nextSibling"];if(x.insertAdjacentHTML){if(l.test(x.tagName)&&(y=e(x.tagName.toLowerCase(),C,x,D))){return y}A[m]=["AfterBegin","firstChild"];A[p]=["BeforeEnd","lastChild"];if((z=A[C])){x.insertAdjacentHTML(z[0],D);return x[z[1]]}}else{E=x.ownerDocument.createRange();F="setStart"+(u.test(C)?"After":"Before");if(A[C]){E[F](x);if(!E.createContextualFragment){G=r(D)}else{G=E.createContextualFragment(D)}x.parentNode.insertBefore(G,C==c?x:x.nextSibling);return x[(C==c?"previous":"next")+"Sibling"]}else{B=(C==m?"first":"last")+"Child";if(x.firstChild){E[F](x[B]);if(!E.createContextualFragment){G=r(D)}else{G=E.createContextualFragment(D)}if(C==m){x.insertBefore(G,x.firstChild)}else{x.appendChild(G)}}else{x.innerHTML=D}return x[B]}}throw'Illegal insertion point -> "'+C+'"'},insertBefore:function(x,z,y){return g(x,z,y,c)},insertAfter:function(x,z,y){return g(x,z,y,o,"nextSibling")},insertFirst:function(x,z,y){return g(x,z,y,m,"firstChild")},append:function(x,z,y){return g(x,z,y,p,"",true)},overwrite:function(x,z,y){x.innerHTML=t(z);return x.firstChild},createHtml:t};return q}();Ab.util.Format=function(){var trimRe=/^\s+|\s+$/g,stripTagsRE=/<\/?[^>]+>/gi,stripScriptsRe=/(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)/ig,nl2brRe=/\r?\n/g;return{ellipsis:function(value,len,word){if(value&&value.length>len){if(word){var vs=value.substr(0,len-2),index=Math.max(vs.lastIndexOf(" "),vs.lastIndexOf("."),vs.lastIndexOf("!"),vs.lastIndexOf("?"));if(index==-1||index<(len-15)){return value.substr(0,len-3)+"..."}else{return vs.substr(0,index)+"..."}}else{return value.substr(0,len-3)+"..."}}return value},undef:function(value){return value!==undefined?value:""},defaultValue:function(value,defaultValue){return value!==undefined&&value!==""?value:defaultValue},htmlEncode:function(value){return !value?value:String(value).replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")},htmlDecode:function(value){return !value?value:String(value).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&quot;/g,'"').replace(/&amp;/g,"&")},trim:function(value){return String(value).replace(trimRe,"")},substr:function(value,start,length){return String(value).substr(start,length)},lowercase:function(value){return String(value).toLowerCase()},uppercase:function(value){return String(value).toUpperCase()},capitalize:function(value){return !value?value:value.charAt(0).toUpperCase()+value.substr(1).toLowerCase()},call:function(value,fn){if(arguments.length>2){var args=Array.prototype.slice.call(arguments,2);args.unshift(value);return eval(fn).apply(window,args)}else{return eval(fn).call(window,value)}},usMoney:function(v){v=(Math.round((v-0)*100))/100;v=(v==Math.floor(v))?v+".00":((v*10==Math.floor(v*10))?v+"0":v);v=String(v);var ps=v.split("."),whole=ps[0],sub=ps[1]?"."+ps[1]:".00",r=/(\d+)(\d{3})/;while(r.test(whole)){whole=whole.replace(r,"$1,$2")}v=whole+sub;if(v.charAt(0)=="-"){return"-$"+v.substr(1)}return"$"+v},date:function(v,format){if(!v){return""}if(!Ab.isDate(v)){v=new Date(Date.parse(v))}return v.dateFormat(format||"m/d/Y")},dateRenderer:function(format){return function(v){return Ab.util.Format.date(v,format)}},stripTags:function(v){return !v?v:String(v).replace(stripTagsRE,"")},stripScripts:function(v){return !v?v:String(v).replace(stripScriptsRe,"")},fileSize:function(size){if(size<1024){return size+" bytes"}else{if(size<1048576){return(Math.round(((size*10)/1024))/10)+" KB"}else{return(Math.round(((size*10)/1048576))/10)+" MB"}}},math:function(){var fns={};return function(v,a){if(!fns[a]){fns[a]=new Function("v","return v "+a+";")}return fns[a](v)}}(),round:function(value,precision){var result=Number(value);if(typeof precision=="number"){precision=Math.pow(10,precision);result=Math.round(value*precision)/precision}return result},number:function(v,format){if(!format){return v}v=Ab.num(v,NaN);if(isNaN(v)){return""}var comma=",",dec=".",i18n=false,neg=v<0;v=Math.abs(v);if(format.substr(format.length-2)=="/i"){format=format.substr(0,format.length-2);i18n=true;comma=".";dec=","}var hasComma=format.indexOf(comma)!=-1,psplit=(i18n?format.replace(/[^\d\,]/g,""):format.replace(/[^\d\.]/g,"")).split(dec);if(1<psplit.length){v=v.toFixed(psplit[1].length)}else{if(2<psplit.length){throw ("NumberFormatException: invalid format, formats should have no more than 1 period: "+format)}else{v=v.toFixed(0)}}var fnum=v.toString();psplit=fnum.split(".");if(hasComma){var cnum=psplit[0],parr=[],j=cnum.length,m=Math.floor(j/3),n=cnum.length%3||3,i;for(i=0;i<j;i+=n){if(i!=0){n=3}parr[parr.length]=cnum.substr(i,n);m-=1}fnum=parr.join(comma);if(psplit[1]){fnum+=dec+psplit[1]}}else{if(psplit[1]){fnum=psplit[0]+dec+psplit[1]}}return(neg?"-":"")+format.replace(/[\d,?\.?]+/,fnum)},numberRenderer:function(format){return function(v){return Ab.util.Format.number(v,format)}},plural:function(v,s,p){return v+" "+(v==1?s:(p?p:s+"s"))},nl2br:function(v){return Ab.isEmpty(v)?"":v.replace(nl2brRe,"<br/>")}}}();Ab.Template=function(g){var h=this,c=arguments,e=[],d;if(Ab.isArray(g)){g=g.join("")}else{if(c.length>1){for(var f=0,b=c.length;f<b;f++){d=c[f];if(typeof d=="object"){Ab.apply(h,d)}else{e.push(d)}}g=e.join("")}}h.html=g;if(h.compiled){h.compile()}};Ab.Template.prototype={re:/\{([\w\-]+)\}/g,applyTemplate:function(a){var b=this;return b.compiled?b.compiled(a):b.html.replace(b.re,function(c,d){return a[d]!==undefined?a[d]:""})},set:function(a,c){var b=this;b.html=a;b.compiled=null;return c?b.compile():b},compile:function(){var me=this,sep=Ab.isGecko?"+":",";function fn(m,name){name="values['"+name+"']";return"'"+sep+"("+name+" == undefined ? '' : "+name+")"+sep+"'"}eval("this.compiled = function(values){ return "+(Ab.isGecko?"'":"['")+me.html.replace(/\\/g,"\\\\").replace(/(\r\n|\n)/g,"\\n").replace(/'/g,"\\'").replace(this.re,fn)+(Ab.isGecko?"';};":"'].join('');};"));return me},insertFirst:function(b,a){return this.doInsert("afterBegin",b,a)},insertBefore:function(b,a){return this.doInsert("beforeBegin",b,a)},insertAfter:function(b,a){return this.doInsert("afterEnd",b,a)},append:function(b,a){return this.doInsert("beforeEnd",b,a)},doInsert:function(b,d,a){var c=Ab.DomHelper.insertHtml(b,d,this.applyTemplate(a));return c},overwrite:function(b,a){b.innerHTML=this.applyTemplate(a);return b.firstChild}};Ab.Template.prototype.apply=Ab.Template.prototype.applyTemplate;Ab.Template.from=function(b,a){return new Ab.Template(b.value||b.innerHTML,a||"")};Ab.apply(Ab.Template.prototype,{disableFormats:false,re:/\{([\w\-]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?\}/g,argsRe:/^\s*['"](.*)["']\s*$/,compileARe:/\\/g,compileBRe:/(\r\n|\n)/g,compileCRe:/'/g,applyTemplate:function(b){var f=this,a=f.disableFormats!==true,e=Ab.util.Format,c=f;if(f.compiled){return f.compiled(b)}function d(h,k,o,j){if(o&&a){if(o.substr(0,5)=="this."){return c.call(o.substr(5),b[k],b)}else{if(j){var n=f.argsRe;j=j.split(",");for(var l=0,g=j.length;l<g;l++){j[l]=j[l].replace(n,"$1")}j=[b[k]].concat(j)}else{j=[b[k]]}return e[o].apply(e,j)}}else{return b[k]!==undefined?b[k]:""}}return f.html.replace(f.re,d)},compile:function(){var me=this,fm=Ab.util.Format,useF=me.disableFormats!==true,sep=Ab.isGecko?"+":",",body;function fn(m,name,format,args){if(format&&useF){args=args?","+args:"";if(format.substr(0,5)!="this."){format="fm."+format+"("}else{format='this.call("'+format.substr(5)+'", ';args=", values"}}else{args="";format="(values['"+name+"'] == undefined ? '' : "}return"'"+sep+format+"values['"+name+"']"+args+")"+sep+"'"}if(Ab.isGecko){body="this.compiled = function(values){ return '"+me.html.replace(me.compileARe,"\\\\").replace(me.compileBRe,"\\n").replace(me.compileCRe,"\\'").replace(me.re,fn)+"';};"}else{body=["this.compiled = function(values){ return ['"];body.push(me.html.replace(me.compileARe,"\\\\").replace(me.compileBRe,"\\n").replace(me.compileCRe,"\\'").replace(me.re,fn));body.push("'].join('');};");body=body.join("")}eval(body);return me},call:function(c,b,a){return this[c](b,a)}});Ab.Template.prototype.apply=Ab.Template.prototype.applyTemplate;Ab.XTemplate=function(){Ab.XTemplate.superclass.constructor.apply(this,arguments);var x=this,h=x.html,p=/<tpl\b[^>]*>((?:(?=([^<]+))\2|<(?!tpl\b[^>]*>))*?)<\/tpl>/,d=/^<tpl\b[^>]*?for="(.*?)"/,u=/^<tpl\b[^>]*?if="(.*?)"/,w=/^<tpl\b[^>]*?exec="(.*?)"/,q,o=0,j=[],n="values",v="parent",k="xindex",l="xcount",e="return ",c="with(values){ ";h=["<tpl>",h,"</tpl>"].join("");while((q=h.match(p))){var b=q[0].match(d),a=q[0].match(u),z=q[0].match(w),f=null,g=null,r=null,y=b&&b[1]?b[1]:"";if(a){f=a&&a[1]?a[1]:null;if(f){g=new Function(n,v,k,l,c+e+(Ab.util.Format.htmlDecode(f))+"; }")}}if(z){f=z&&z[1]?z[1]:null;if(f){r=new Function(n,v,k,l,c+(Ab.util.Format.htmlDecode(f))+"; }")}}if(y){switch(y){case".":y=new Function(n,v,c+e+n+"; }");break;case"..":y=new Function(n,v,c+e+v+"; }");break;default:y=new Function(n,v,c+e+y+"; }")}}j.push({id:o,target:y,exec:r,test:g,body:q[1]||""});h=h.replace(q[0],"{xtpl"+o+"}");++o}for(var t=j.length-1;t>=0;--t){x.compileTpl(j[t])}x.master=j[j.length-1];x.tpls=j};Ab.extend(Ab.XTemplate,Ab.Template,{re:/\{([\w\-\.\#]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?(\s?[\+\-\*\\]\s?[\d\.\+\-\*\\\(\)]+)?\}/g,codeRe:/\{\[((?:\\\]|.|\n)*?)\]\}/g,applySubTemplate:function(a,j,h,d,c){var g=this,f,l=g.tpls[a],k,b=[];if((l.test&&!l.test.call(g,j,h,d,c))||(l.exec&&l.exec.call(g,j,h,d,c))){return""}k=l.target?l.target.call(g,j,h):j;f=k.length;h=l.target?j:h;if(l.target&&Ab.isArray(k)){for(var e=0,f=k.length;e<f;e++){b[b.length]=l.compiled.call(g,k[e],h,e+1,f)}return b.join("")}return l.compiled.call(g,k,h,d,c)},compileTpl:function(tpl){var fm=Ab.util.Format,useF=this.disableFormats!==true,sep=Ab.isGecko?"+":",",body;function fn(m,name,format,args,math){if(name.substr(0,4)=="xtpl"){return"'"+sep+"this.applySubTemplate("+name.substr(4)+", values, parent, xindex, xcount)"+sep+"'"}var v;if(name==="."){v="values"}else{if(name==="#"){v="xindex"}else{if(name.indexOf(".")!=-1){v=name}else{v="values['"+name+"']"}}}if(math){v="("+v+math+")"}if(format&&useF){args=args?","+args:"";if(format.substr(0,5)!="this."){format="fm."+format+"("}else{format='this.call("'+format.substr(5)+'", ';args=", values"}}else{args="";format="("+v+" === undefined ? '' : "}return"'"+sep+format+v+args+")"+sep+"'"}function codeFn(m,code){return"'"+sep+"("+code.replace(/\\'/g,"'")+")"+sep+"'"}if(Ab.isGecko){body="tpl.compiled = function(values, parent, xindex, xcount){ return '"+tpl.body.replace(/(\r\n|\n)/g,"\\n").replace(/'/g,"\\'").replace(this.re,fn).replace(this.codeRe,codeFn)+"';};"}else{body=["tpl.compiled = function(values, parent, xindex, xcount){ return ['"];body.push(tpl.body.replace(/(\r\n|\n)/g,"\\n").replace(/'/g,"\\'").replace(this.re,fn).replace(this.codeRe,codeFn));body.push("'].join('');};");body=body.join("")}eval(body);return this},applyTemplate:function(a){return this.master.compiled.call(this,a,{},1,1)},compile:function(){return this}});Ab.XTemplate.prototype.apply=Ab.XTemplate.prototype.applyTemplate;Ab.XTemplate.from=function(a){a=Ab.getDom(a);return new Ab.XTemplate(a.value||a.innerHTML)};Ab.ns("Ab.view");Ab.ns("Ab.model");Ab.ns("Ab.controller");Ab.ns("Ab.store");Ab.app={views:{},models:{},stores:{},controllers:{},getView:function(a){return this.views[a]},getStore:function(a){return this.stores[a]},getController:function(a){return this.controllers[a]},getModel:function(a){return this.models[a]}};Ab.ClassManager={v_reg:/Ab.view./,c_reg:/Ab.controller./,m_reg:/Ab.model./,s_reg:/Ab.store./,define:function(b){var a=b.className;if(this.v_reg.test(a)){Ab.view[a.substr(8)]=Backbone.View.extend(b.cfg||{})}else{if(this.c_reg.test(a)){Ab.controller[a.substr(14)]=Ab.extend(Ab.Controller,b.cfg)}else{if(this.s_reg.test(a)){Ab.store[a.substr(9)]=Backbone.Collection.extend(b.cfg||{})}else{if(this.m_reg.test(a)){Ab.model[a.substr(9)]=Backbone.Model.extend(b.cfg||{})}}}}},create:function(d){var b=d.className||"",a=d.cfg||{};var f=new Function("cls","cfg","return new "+b+"(cls,cfg)");var e=new f(a);if(this.v_reg.test(b)){Ab.app.views[e.id]=e}else{if(this.c_reg.test(b)){Ab.app.controllers[e.id]=e}else{if(this.s_reg.test(b)){Ab.app.stores[e.id]=e}else{if(this.m_reg.test(b)){Ab.app.models[e.id]=e}}}}return e},createLocalStore:function(a,c){var b=new Backbone.Collection(a);b.id=c;return b}};Ab.define=function(b,a){Ab.apply(a,{initialize:function(c){var c=c||{};Ab.apply(this,c)}});Ab.ClassManager.define({className:b,cfg:a})};Ab.create=function(b,a){return Ab.ClassManager.create({className:b,cfg:a})};Ab.store.create=function(a,b){return Ab.ClassManager.createLocalStore(a,b)};Ab.Observable={};Ab.apply(Ab.Observable,Backbone.Events);Ab.Controller=function(a){this.init()};Ab.Controller.prototype={init:function(){},control:function(e){for(var c in e){var a=Ab.app.getView(c);var b=a.events||{};Ab.apply(b,e[c]);var d={};for(ekey in b){if(!/\s/.test(ekey)){a.on(ekey,b[ekey])}else{d[ekey]=b[ekey]}}a.delegateEvents(d)}}};