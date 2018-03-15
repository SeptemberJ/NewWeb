/*!
 * Bootstrap-select v1.10.0 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2016 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */
(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery"],function(c){return(b(c))
})
}else{if(typeof exports==="object"){module.exports=b(require("jquery"))
}else{b(jQuery)
}}}(this,function(a){(function(e){if(!String.prototype.includes){(function(){var l={}.toString;
var h=(function(){try{var p={};
var o=Object.defineProperty;
var m=o(p,p,p)&&o
}catch(n){}return m
}());
var k="".indexOf;
var j=function(s){if(this==null){throw new TypeError()
}var p=String(this);
if(s&&l.call(s)=="[object RegExp]"){throw new TypeError()
}var n=p.length;
var o=String(s);
var r=o.length;
var m=arguments.length>1?arguments[1]:undefined;
var u=m?Number(m):0;
if(u!=u){u=0
}var t=Math.min(Math.max(u,0),n);
if(r+t>n){return false
}return k.call(p,o,u)!=-1
};
if(h){h(String.prototype,"includes",{value:j,configurable:true,writable:true})
}else{String.prototype.includes=j
}}())
}if(!String.prototype.startsWith){(function(){var h=(function(){try{var o={};
var n=Object.defineProperty;
var l=n(o,o,o)&&n
}catch(m){}return l
}());
var k={}.toString;
var j=function(t){if(this==null){throw new TypeError()
}var p=String(this);
if(t&&k.call(t)=="[object RegExp]"){throw new TypeError()
}var l=p.length;
var u=String(t);
var n=u.length;
var o=arguments.length>1?arguments[1]:undefined;
var s=o?Number(o):0;
if(s!=s){s=0
}var m=Math.min(Math.max(s,0),l);
if(n+m>l){return false
}var r=-1;
while(++r<n){if(p.charCodeAt(m+r)!=u.charCodeAt(r)){return false
}}return true
};
if(h){h(String.prototype,"startsWith",{value:j,configurable:true,writable:true})
}else{String.prototype.startsWith=j
}}())
}if(!Object.keys){Object.keys=function(l,h,j){j=[];
for(h in l){j.hasOwnProperty.call(l,h)&&j.push(h)
}return j
}
}e.fn.triggerNative=function(h){var j=this[0],k;
if(j.dispatchEvent){if(typeof Event==="function"){k=new Event(h,{bubbles:true})
}else{k=document.createEvent("Event");
k.initEvent(h,true,false)
}j.dispatchEvent(k)
}else{if(j.fireEvent){k=document.createEventObject();
k.eventType=h;
j.fireEvent("on"+h,k)
}this.trigger(h)
}};
e.expr[":"].icontains=function(l,h,k){var m=e(l);
var j=(m.data("tokens")||m.text()).toUpperCase();
return j.includes(k[3].toUpperCase())
};
e.expr[":"].ibegins=function(l,h,k){var m=e(l);
var j=(m.data("tokens")||m.text()).toUpperCase();
return j.startsWith(k[3].toUpperCase())
};
e.expr[":"].aicontains=function(l,h,k){var m=e(l);
var j=(m.data("tokens")||m.data("normalizedText")||m.text()).toUpperCase();
return j.includes(k[3].toUpperCase())
};
e.expr[":"].aibegins=function(l,h,k){var m=e(l);
var j=(m.data("tokens")||m.data("normalizedText")||m.text()).toUpperCase();
return j.startsWith(k[3].toUpperCase())
};
function g(j){var h=[{re:/[\xC0-\xC6]/g,ch:"A"},{re:/[\xE0-\xE6]/g,ch:"a"},{re:/[\xC8-\xCB]/g,ch:"E"},{re:/[\xE8-\xEB]/g,ch:"e"},{re:/[\xCC-\xCF]/g,ch:"I"},{re:/[\xEC-\xEF]/g,ch:"i"},{re:/[\xD2-\xD6]/g,ch:"O"},{re:/[\xF2-\xF6]/g,ch:"o"},{re:/[\xD9-\xDC]/g,ch:"U"},{re:/[\xF9-\xFC]/g,ch:"u"},{re:/[\xC7-\xE7]/g,ch:"c"},{re:/[\xD1]/g,ch:"N"},{re:/[\xF1]/g,ch:"n"}];
e.each(h,function(){j=j.replace(this.re,this.ch)
});
return j
}function f(j){var l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};
var n="(?:"+Object.keys(l).join("|")+")",m=new RegExp(n),k=new RegExp(n,"g"),h=j==null?"":""+j;
return m.test(h)?h.replace(k,function(o){return l[o]
}):h
}var c=function(j,h,k){if(k){k.stopPropagation();
k.preventDefault()
}this.$element=e(j);
this.$newElement=null;
this.$button=null;
this.$menu=null;
this.$lis=null;
this.options=h;
if(this.options.title===null){this.options.title=this.$element.attr("title")
}this.val=c.prototype.val;
this.render=c.prototype.render;
this.refresh=c.prototype.refresh;
this.setStyle=c.prototype.setStyle;
this.selectAll=c.prototype.selectAll;
this.deselectAll=c.prototype.deselectAll;
this.destroy=c.prototype.destroy;
this.remove=c.prototype.remove;
this.show=c.prototype.show;
this.hide=c.prototype.hide;
this.init()
};
c.VERSION="1.10.0";
c.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results matched {0}",countSelectedText:function(j,h){return(j==1)?"{0} item selected":"{0} items selected"
},maxOptionsText:function(h,j){return[(h==1)?"Limit reached ({n} item max)":"Limit reached ({n} items max)",(j==1)?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)"]
},selectAllText:"Select All",deselectAllText:"Deselect All",doneButton:false,doneButtonText:"Close",multipleSeparator:", ",styleBase:"btn",style:"btn-default",size:"auto",title:null,selectedTextFormat:"values",width:false,container:false,hideDisabled:false,showSubtext:false,showIcon:true,showContent:true,dropupAuto:true,header:false,liveSearch:false,liveSearchPlaceholder:null,liveSearchNormalize:false,liveSearchStyle:"contains",actionsBox:false,iconBase:"glyphicon",tickIcon:"glyphicon-ok",showTick:false,template:{caret:'<span class="caret"></span>'},maxOptions:false,mobile:false,selectOnTab:false,dropdownAlignRight:false};
c.prototype={constructor:c,init:function(){var h=this,j=this.$element.attr("id");
this.$element.addClass("bs-select-hidden");
this.liObj={};
this.multiple=this.$element.prop("multiple");
this.autofocus=this.$element.prop("autofocus");
this.$newElement=this.createView();
this.$element.after(this.$newElement).appendTo(this.$newElement);
this.$button=this.$newElement.children("button");
this.$menu=this.$newElement.children(".dropdown-menu");
this.$menuInner=this.$menu.children(".inner");
this.$searchbox=this.$menu.find("input");
this.$element.removeClass("bs-select-hidden");
if(this.options.dropdownAlignRight){this.$menu.addClass("dropdown-menu-right")
}if(typeof j!=="undefined"){this.$button.attr("data-id",j);
e('label[for="'+j+'"]').click(function(k){k.preventDefault();
h.$button.focus()
})
}this.checkDisabled();
this.clickListener();
if(this.options.liveSearch){this.liveSearchListener()
}this.render();
this.setStyle();
this.setWidth();
if(this.options.container){this.selectPosition()
}this.$menu.data("this",this);
this.$newElement.data("this",this);
if(this.options.mobile){this.mobile()
}this.$newElement.on({"hide.bs.dropdown":function(k){h.$element.trigger("hide.bs.select",k)
},"hidden.bs.dropdown":function(k){h.$element.trigger("hidden.bs.select",k)
},"show.bs.dropdown":function(k){h.$element.trigger("show.bs.select",k)
},"shown.bs.dropdown":function(k){h.$element.trigger("shown.bs.select",k)
}});
if(h.$element[0].hasAttribute("required")){this.$element.on("invalid",function(){h.$button.addClass("bs-invalid").focus();
h.$element.on({"focus.bs.select":function(){h.$button.focus();
h.$element.off("focus.bs.select")
},"shown.bs.select":function(){h.$element.val(h.$element.val()).off("shown.bs.select")
},"rendered.bs.select":function(){if(this.validity.valid){h.$button.removeClass("bs-invalid")
}h.$element.off("rendered.bs.select")
}})
})
}setTimeout(function(){h.$element.trigger("loaded.bs.select")
})
},createDropdown:function(){var n=(this.multiple||this.options.showTick)?" show-tick":"",j=this.$element.parent().hasClass("input-group")?" input-group-btn":"",p=this.autofocus?" autofocus":"";
var o=this.options.header?'<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>":"";
var m=this.options.liveSearch?'<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"'+(null===this.options.liveSearchPlaceholder?"":' placeholder="'+f(this.options.liveSearchPlaceholder)+'"')+"></div>":"";
var l=this.multiple&&this.options.actionsBox?'<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">'+this.options.selectAllText+'</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">'+this.options.deselectAllText+"</button></div></div>":"";
var h=this.multiple&&this.options.doneButton?'<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">'+this.options.doneButtonText+"</button></div></div>":"";
var k='<div class="btn-group bootstrap-select'+n+j+'"><button type="button" class="'+this.options.styleBase+' dropdown-toggle" data-toggle="dropdown"'+p+'><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">'+this.options.template.caret+'</span></button><div class="dropdown-menu open">'+o+m+l+'<ul class="dropdown-menu inner" role="menu"></ul>'+h+"</div></div>";
return e(k)
},createView:function(){var j=this.createDropdown(),h=this.createLi();
j.find("ul")[0].innerHTML=h;
return j
},reloadLi:function(){this.destroyLi();
var h=this.createLi();
this.$menuInner[0].innerHTML=h
},destroyLi:function(){this.$menu.find("li").remove()
},createLi:function(){var o=this,n=[],p=0,k=document.createElement("option"),j=-1;
var h=function(u,s,t,r){return"<li"+((typeof t!=="undefined"&""!==t)?' class="'+t+'"':"")+((typeof s!=="undefined"&null!==s)?' data-original-index="'+s+'"':"")+((typeof r!=="undefined"&null!==r)?'data-optgroup="'+r+'"':"")+">"+u+"</li>"
};
var m=function(u,r,t,s){return'<a tabindex="0"'+(typeof r!=="undefined"?' class="'+r+'"':"")+(typeof t!=="undefined"?' style="'+t+'"':"")+(o.options.liveSearchNormalize?' data-normalized-text="'+g(f(u))+'"':"")+(typeof s!=="undefined"||s!==null?' data-tokens="'+s+'"':"")+">"+u+'<span class="'+o.options.iconBase+" "+o.options.tickIcon+' check-mark"></span></a>'
};
if(this.options.title&&!this.multiple){j--;
if(!this.$element.find(".bs-title-option").length){var l=this.$element[0];
k.className="bs-title-option";
k.appendChild(document.createTextNode(this.options.title));
k.value="";
l.insertBefore(k,l.firstChild);
if(e(l.options[l.selectedIndex]).attr("selected")===undefined){k.selected=true
}}}this.$element.find("option").each(function(u){var w=e(this);
j++;
if(w.hasClass("bs-title-option")){return
}var s=this.className||"",v=this.style.cssText,E=w.data("content")?w.data("content"):w.html(),y=w.data("tokens")?w.data("tokens"):null,B=typeof w.data("subtext")!=="undefined"?'<small class="text-muted">'+w.data("subtext")+"</small>":"",z=typeof w.data("icon")!=="undefined"?'<span class="'+o.options.iconBase+" "+w.data("icon")+'"></span> ':"",D=this.parentNode.tagName==="OPTGROUP",C=this.disabled||(D&&this.parentNode.disabled);
if(z!==""&&C){z="<span>"+z+"</span>"
}if(o.options.hideDisabled&&C&&!D){j--;
return
}if(!w.data("content")){E=z+'<span class="text">'+E+B+"</span>"
}if(D&&w.data("divider")!==true){var t=" "+this.parentNode.className||"";
if(w.index()===0){p+=1;
var A=this.parentNode.label,F=typeof w.parent().data("subtext")!=="undefined"?'<small class="text-muted">'+w.parent().data("subtext")+"</small>":"",r=w.parent().data("icon")?'<span class="'+o.options.iconBase+" "+w.parent().data("icon")+'"></span> ':"";
A=r+'<span class="text">'+A+F+"</span>";
if(u!==0&&n.length>0){j++;
n.push(h("",null,"divider",p+"div"))
}j++;
n.push(h(A,null,"dropdown-header"+t,p))
}if(o.options.hideDisabled&&C){j--;
return
}n.push(h(m(E,"opt "+s+t,v,y),u,"",p))
}else{if(w.data("divider")===true){n.push(h("",u,"divider"))
}else{if(w.data("hidden")===true){n.push(h(m(E,s,v,y),u,"hidden is-hidden"))
}else{if(this.previousElementSibling&&this.previousElementSibling.tagName==="OPTGROUP"){j++;
n.push(h("",null,"divider",p+"div"))
}n.push(h(m(E,s,v,y),u))
}}}o.liObj[u]=j
});
if(!this.multiple&&this.$element.find("option:selected").length===0&&!this.options.title){this.$element.find("option").eq(0).prop("selected",true).attr("selected","selected")
}return n.join("")
},findLis:function(){if(this.$lis==null){this.$lis=this.$menu.find("li")
}return this.$lis
},render:function(l){var k=this,n;
if(l!==false){this.$element.find("option").each(function(r){var s=k.findLis().eq(k.liObj[r]);
k.setDisabled(r,this.disabled||this.parentNode.tagName==="OPTGROUP"&&this.parentNode.disabled,s);
k.setSelected(r,this.selected,s)
})
}this.tabIndex();
var p=this.$element.find("option").map(function(){if(this.selected){if(k.options.hideDisabled&&(this.disabled||this.parentNode.tagName==="OPTGROUP"&&this.parentNode.disabled)){return
}var t=e(this),s=t.data("icon")&&k.options.showIcon?'<i class="'+k.options.iconBase+" "+t.data("icon")+'"></i> ':"",r;
if(k.options.showSubtext&&t.data("subtext")&&!k.multiple){r=' <small class="text-muted">'+t.data("subtext")+"</small>"
}else{r=""
}if(typeof t.attr("title")!=="undefined"){return t.attr("title")
}else{if(t.data("content")&&k.options.showContent){return t.data("content")
}else{return s+t.html()+r
}}}}).toArray();
var m=!this.multiple?p[0]:p.join(this.options.multipleSeparator);
if(this.multiple&&this.options.selectedTextFormat.indexOf("count")>-1){var h=this.options.selectedTextFormat.split(">");
if((h.length>1&&p.length>h[1])||(h.length==1&&p.length>=2)){n=this.options.hideDisabled?", [disabled]":"";
var j=this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]'+n).length,o=(typeof this.options.countSelectedText==="function")?this.options.countSelectedText(p.length,j):this.options.countSelectedText;
m=o.replace("{0}",p.length.toString()).replace("{1}",j.toString())
}}if(this.options.title==undefined){this.options.title=this.$element.attr("title")
}if(this.options.selectedTextFormat=="static"){m=this.options.title
}if(!m){m=typeof this.options.title!=="undefined"?this.options.title:this.options.noneSelectedText
}this.$button.attr("title",e.trim(m.replace(/<[^>]*>?/g,"")));
this.$button.children(".filter-option").html(m);
this.$element.trigger("rendered.bs.select")
},setStyle:function(k,j){if(this.$element.attr("class")){this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,""))
}var h=k?k:this.options.style;
if(j=="add"){this.$button.addClass(h)
}else{if(j=="remove"){this.$button.removeClass(h)
}else{this.$button.removeClass(this.options.style);
this.$button.addClass(h)
}}},liHeight:function(o){if(!o&&(this.options.size===false||this.sizeInfo)){return
}var m=document.createElement("div"),h=document.createElement("div"),t=document.createElement("ul"),C=document.createElement("li"),B=document.createElement("li"),G=document.createElement("a"),A=document.createElement("span"),F=this.options.header&&this.$menu.find(".popover-title").length>0?this.$menu.find(".popover-title")[0].cloneNode(true):null,u=this.options.liveSearch?document.createElement("div"):null,v=this.options.actionsBox&&this.multiple&&this.$menu.find(".bs-actionsbox").length>0?this.$menu.find(".bs-actionsbox")[0].cloneNode(true):null,l=this.options.doneButton&&this.multiple&&this.$menu.find(".bs-donebutton").length>0?this.$menu.find(".bs-donebutton")[0].cloneNode(true):null;
A.className="text";
m.className=this.$menu[0].parentNode.className+" open";
h.className="dropdown-menu open";
t.className="dropdown-menu inner";
C.className="divider";
A.appendChild(document.createTextNode("Inner text"));
G.appendChild(A);
B.appendChild(G);
t.appendChild(B);
t.appendChild(C);
if(F){h.appendChild(F)
}if(u){var y=document.createElement("span");
u.className="bs-searchbox";
y.className="form-control";
u.appendChild(y);
h.appendChild(u)
}if(v){h.appendChild(v)
}h.appendChild(t);
if(l){h.appendChild(l)
}m.appendChild(h);
document.body.appendChild(m);
var k=G.offsetHeight,E=F?F.offsetHeight:0,w=u?u.offsetHeight:0,s=v?v.offsetHeight:0,n=l?l.offsetHeight:0,z=e(C).outerHeight(true),j=typeof getComputedStyle==="function"?getComputedStyle(h):false,p=j?null:e(h),D=parseInt(j?j.paddingTop:p.css("paddingTop"))+parseInt(j?j.paddingBottom:p.css("paddingBottom"))+parseInt(j?j.borderTopWidth:p.css("borderTopWidth"))+parseInt(j?j.borderBottomWidth:p.css("borderBottomWidth")),r=D+parseInt(j?j.marginTop:p.css("marginTop"))+parseInt(j?j.marginBottom:p.css("marginBottom"))+2;
document.body.removeChild(m);
this.sizeInfo={liHeight:k,headerHeight:E,searchHeight:w,actionsHeight:s,doneButtonHeight:n,dividerHeight:z,menuPadding:D,menuExtras:r}
},setSize:function(){this.findLis();
this.liHeight();
if(this.options.header){this.$menu.css("padding-top",0)
}if(this.options.size===false){return
}var r=this,n=this.$menu,k=this.$menuInner,y=e(window),E=this.$newElement[0].offsetHeight,l=this.sizeInfo.liHeight,C=this.sizeInfo.headerHeight,u=this.sizeInfo.searchHeight,p=this.sizeInfo.actionsHeight,m=this.sizeInfo.doneButtonHeight,t=this.sizeInfo.dividerHeight,B=this.sizeInfo.menuPadding,o=this.sizeInfo.menuExtras,z=this.options.hideDisabled?".disabled":"",A,v,F,D,s=function(){F=r.$newElement.offset().top-y.scrollTop();
D=y.height()-F-E
};
s();
if(this.options.size==="auto"){var j=function(){var J,I=function(M,L){return function(N){if(L){return(N.classList?N.classList.contains(M):e(N).hasClass(M))
}else{return !(N.classList?N.classList.contains(M):e(N).hasClass(M))
}}
},H=r.$menuInner[0].getElementsByTagName("li"),G=Array.prototype.filter?Array.prototype.filter.call(H,I("hidden",false)):r.$lis.not(".hidden"),K=Array.prototype.filter?Array.prototype.filter.call(G,I("dropdown-header",true)):G.filter(".dropdown-header");
s();
A=D-o;
if(r.options.container){if(!n.data("height")){n.data("height",n.height())
}v=n.data("height")
}else{v=n.height()
}if(r.options.dropupAuto){r.$newElement.toggleClass("dropup",F>D&&(A-o)<v)
}if(r.$newElement.hasClass("dropup")){A=F-o
}if((G.length+K.length)>3){J=l*3+o-2
}else{J=0
}n.css({"max-height":A+"px",overflow:"hidden","min-height":J+C+u+p+m+"px"});
k.css({"max-height":A-C-u-p-m-B+"px","overflow-y":"auto","min-height":Math.max(J-B,0)+"px"})
};
j();
this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize",j);
y.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize",j)
}else{if(this.options.size&&this.options.size!="auto"&&this.$lis.not(z).length>this.options.size){var w=this.$lis.not(".divider").not(z).children().slice(0,this.options.size).last().parent().index(),h=this.$lis.slice(0,w+1).filter(".divider").length;
A=l*this.options.size+h*t+B;
if(r.options.container){if(!n.data("height")){n.data("height",n.height())
}v=n.data("height")
}else{v=n.height()
}if(r.options.dropupAuto){this.$newElement.toggleClass("dropup",F>D&&(A-o)<v)
}n.css({"max-height":A+C+u+p+m+"px",overflow:"hidden","min-height":""});
k.css({"max-height":A-B+"px","overflow-y":"auto","min-height":""})
}}},setWidth:function(){if(this.options.width==="auto"){this.$menu.css("min-width","0");
var j=this.$menu.parent().clone().appendTo("body"),h=this.options.container?this.$newElement.clone().appendTo("body"):j,k=j.children(".dropdown-menu").outerWidth(),l=h.css("width","auto").children("button").outerWidth();
j.remove();
h.remove();
this.$newElement.css("width",Math.max(k,l)+"px")
}else{if(this.options.width==="fit"){this.$menu.css("min-width","");
this.$newElement.css("width","").addClass("fit-width")
}else{if(this.options.width){this.$menu.css("min-width","");
this.$newElement.css("width",this.options.width)
}else{this.$menu.css("min-width","");
this.$newElement.css("width","")
}}}if(this.$newElement.hasClass("fit-width")&&this.options.width!=="fit"){this.$newElement.removeClass("fit-width")
}},selectPosition:function(){this.$bsContainer=e('<div class="bs-container" />');
var j=this,l,k,h=function(m){j.$bsContainer.addClass(m.attr("class").replace(/form-control|fit-width/gi,"")).toggleClass("dropup",m.hasClass("dropup"));
l=m.offset();
k=m.hasClass("dropup")?0:m[0].offsetHeight;
j.$bsContainer.css({top:l.top+k,left:l.left,width:m[0].offsetWidth})
};
this.$button.on("click",function(){var m=e(this);
if(j.isDisabled()){return
}h(j.$newElement);
j.$bsContainer.appendTo(j.options.container).toggleClass("open",!m.hasClass("open")).append(j.$menu)
});
e(window).on("resize scroll",function(){h(j.$newElement)
});
this.$element.on("hide.bs.select",function(){j.$menu.data("height",j.$menu.height());
j.$bsContainer.detach()
})
},setSelected:function(h,k,j){if(!j){j=this.findLis().eq(this.liObj[h])
}j.toggleClass("selected",k)
},setDisabled:function(h,k,j){if(!j){j=this.findLis().eq(this.liObj[h])
}if(k){j.addClass("disabled").children("a").attr("href","#").attr("tabindex",-1)
}else{j.removeClass("disabled").children("a").removeAttr("href").attr("tabindex",0)
}},isDisabled:function(){return this.$element[0].disabled
},checkDisabled:function(){var h=this;
if(this.isDisabled()){this.$newElement.addClass("disabled");
this.$button.addClass("disabled").attr("tabindex",-1)
}else{if(this.$button.hasClass("disabled")){this.$newElement.removeClass("disabled");
this.$button.removeClass("disabled")
}if(this.$button.attr("tabindex")==-1&&!this.$element.data("tabindex")){this.$button.removeAttr("tabindex")
}}this.$button.click(function(){return !h.isDisabled()
})
},tabIndex:function(){if(this.$element.data("tabindex")!==this.$element.attr("tabindex")&&(this.$element.attr("tabindex")!==-98&&this.$element.attr("tabindex")!=="-98")){this.$element.data("tabindex",this.$element.attr("tabindex"));
this.$button.attr("tabindex",this.$element.data("tabindex"))
}this.$element.attr("tabindex",-98)
},clickListener:function(){var h=this,j=e(document);
this.$newElement.on("touchstart.dropdown",".dropdown-menu",function(k){k.stopPropagation()
});
j.data("spaceSelect",false);
this.$button.on("keyup",function(k){if(/(32)/.test(k.keyCode.toString(10))&&j.data("spaceSelect")){k.preventDefault();
j.data("spaceSelect",false)
}});
this.$button.on("click",function(){h.setSize()
});
this.$element.on("shown.bs.select",function(){if(!h.options.liveSearch&&!h.multiple){h.$menuInner.find(".selected a").focus()
}else{if(!h.multiple){var k=h.liObj[h.$element[0].selectedIndex];
if(typeof k!=="number"||h.options.size===false){return
}var l=h.$lis.eq(k)[0].offsetTop-h.$menuInner[0].offsetTop;
l=l-h.$menuInner[0].offsetHeight/2+h.sizeInfo.liHeight/2;
h.$menuInner[0].scrollTop=l
}}});
this.$menuInner.on("click","li a",function(B){var p=e(this),k=p.parent().data("originalIndex"),z=h.$element.val(),s=h.$element.prop("selectedIndex");
if(h.multiple){B.stopPropagation()
}B.preventDefault();
if(!h.isDisabled()&&!p.parent().hasClass("disabled")){var w=h.$element.find("option"),y=w.eq(k),m=y.prop("selected"),v=y.parent("optgroup"),D=h.options.maxOptions,t=v.data("maxOptions")||false;
if(!h.multiple){w.prop("selected",false);
y.prop("selected",true);
h.$menuInner.find(".selected").removeClass("selected");
h.setSelected(k,true)
}else{y.prop("selected",!m);
h.setSelected(k,!m);
p.blur();
if(D!==false||t!==false){var l=D<w.filter(":selected").length,o=t<v.find("option:selected").length;
if((D&&l)||(t&&o)){if(D&&D==1){w.prop("selected",false);
y.prop("selected",true);
h.$menuInner.find(".selected").removeClass("selected");
h.setSelected(k,true)
}else{if(t&&t==1){v.find("option:selected").prop("selected",false);
y.prop("selected",true);
var A=p.parent().data("optgroup");
h.$menuInner.find('[data-optgroup="'+A+'"]').removeClass("selected");
h.setSelected(k,true)
}else{var n=(typeof h.options.maxOptionsText==="function")?h.options.maxOptionsText(D,t):h.options.maxOptionsText,C=n[0].replace("{n}",D),r=n[1].replace("{n}",t),u=e('<div class="notify"></div>');
if(n[2]){C=C.replace("{var}",n[2][D>1?0:1]);
r=r.replace("{var}",n[2][t>1?0:1])
}y.prop("selected",false);
h.$menu.append(u);
if(D&&l){u.append(e("<div>"+C+"</div>"));
h.$element.trigger("maxReached.bs.select")
}if(t&&o){u.append(e("<div>"+r+"</div>"));
h.$element.trigger("maxReachedGrp.bs.select")
}setTimeout(function(){h.setSelected(k,false)
},10);
u.delay(750).fadeOut(300,function(){e(this).remove()
})
}}}}}if(!h.multiple){h.$button.focus()
}else{if(h.options.liveSearch){h.$searchbox.focus()
}}if((z!=h.$element.val()&&h.multiple)||(s!=h.$element.prop("selectedIndex")&&!h.multiple)){h.$element.trigger("changed.bs.select",[k,y.prop("selected"),m]).triggerNative("change")
}}});
this.$menu.on("click","li.disabled a, .popover-title, .popover-title :not(.close)",function(k){if(k.currentTarget==this){k.preventDefault();
k.stopPropagation();
if(h.options.liveSearch&&!e(k.target).hasClass("close")){h.$searchbox.focus()
}else{h.$button.focus()
}}});
this.$menuInner.on("click",".divider, .dropdown-header",function(k){k.preventDefault();
k.stopPropagation();
if(h.options.liveSearch){h.$searchbox.focus()
}else{h.$button.focus()
}});
this.$menu.on("click",".popover-title .close",function(){h.$button.click()
});
this.$searchbox.on("click",function(k){k.stopPropagation()
});
this.$menu.on("click",".actions-btn",function(k){if(h.options.liveSearch){h.$searchbox.focus()
}else{h.$button.focus()
}k.preventDefault();
k.stopPropagation();
if(e(this).hasClass("bs-select-all")){h.selectAll()
}else{h.deselectAll()
}});
this.$element.change(function(){h.render(false)
})
},liveSearchListener:function(){var j=this,h=e('<li class="no-results"></li>');
this.$button.on("click.dropdown.data-api touchstart.dropdown.data-api",function(){j.$menuInner.find(".active").removeClass("active");
if(!!j.$searchbox.val()){j.$searchbox.val("");
j.$lis.not(".is-hidden").removeClass("hidden");
if(!!h.parent().length){h.remove()
}}if(!j.multiple){j.$menuInner.find(".selected").addClass("active")
}setTimeout(function(){j.$searchbox.focus()
},10)
});
this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api",function(k){k.stopPropagation()
});
this.$searchbox.on("input propertychange",function(){if(j.$searchbox.val()){var k=j.$lis.not(".is-hidden").removeClass("hidden").children("a");
if(j.options.liveSearchNormalize){k=k.not(":a"+j._searchStyle()+'("'+g(j.$searchbox.val())+'")')
}else{k=k.not(":"+j._searchStyle()+'("'+j.$searchbox.val()+'")')
}k.parent().addClass("hidden");
j.$lis.filter(".dropdown-header").each(function(){var n=e(this),m=n.data("optgroup");
if(j.$lis.filter("[data-optgroup="+m+"]").not(n).not(".hidden").length===0){n.addClass("hidden");
j.$lis.filter("[data-optgroup="+m+"div]").addClass("hidden")
}});
var l=j.$lis.not(".hidden");
l.each(function(m){var n=e(this);
if(n.hasClass("divider")&&(n.index()===l.first().index()||n.index()===l.last().index()||l.eq(m+1).hasClass("divider"))){n.addClass("hidden")
}});
if(!j.$lis.not(".hidden, .no-results").length){if(!!h.parent().length){h.remove()
}h.html(j.options.noneResultsText.replace("{0}",'"'+f(j.$searchbox.val())+'"')).show();
j.$menuInner.append(h)
}else{if(!!h.parent().length){h.remove()
}}}else{j.$lis.not(".is-hidden").removeClass("hidden");
if(!!h.parent().length){h.remove()
}}j.$lis.filter(".active").removeClass("active");
if(j.$searchbox.val()){j.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus()
}e(this).focus()
})
},_searchStyle:function(){var h={begins:"ibegins",startsWith:"ibegins"};
return h[this.options.liveSearchStyle]||"icontains"
},val:function(h){if(typeof h!=="undefined"){this.$element.val(h);
this.render();
return this.$element
}else{return this.$element.val()
}},changeAll:function(j){if(typeof j==="undefined"){j=true
}this.findLis();
var h=this.$element.find("option"),o=this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").toggleClass("selected",j),k=o.length,n=[];
for(var l=0;
l<k;
l++){var m=o[l].getAttribute("data-original-index");
n[n.length]=h.eq(m)[0]
}e(n).prop("selected",j);
this.render(false);
this.$element.trigger("changed.bs.select").triggerNative("change")
},selectAll:function(){return this.changeAll(true)
},deselectAll:function(){return this.changeAll(false)
},toggle:function(h){h=h||window.event;
if(h){h.stopPropagation()
}this.$button.trigger("click")
},keydown:function(B){var k=e(this),u=k.is("input")?k.parent().parent():k.parent(),j,o=u.data("this"),l,w,n,s,v,h,p,z,y=":not(.disabled, .hidden, .dropdown-header, .divider)",t={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"};
if(o.options.liveSearch){u=k.parent().parent()
}if(o.options.container){u=o.$menu
}j=e("[role=menu] li",u);
z=o.$newElement.hasClass("open");
if(!z&&(B.keyCode>=48&&B.keyCode<=57||B.keyCode>=96&&B.keyCode<=105||B.keyCode>=65&&B.keyCode<=90)){if(!o.options.container){o.setSize();
o.$menu.parent().addClass("open");
z=true
}else{o.$button.trigger("click")
}o.$searchbox.focus()
}if(o.options.liveSearch){if(/(^9$|27)/.test(B.keyCode.toString(10))&&z&&o.$menu.find(".active").length===0){B.preventDefault();
o.$menu.parent().removeClass("open");
if(o.options.container){o.$newElement.removeClass("open")
}o.$button.focus()
}j=e("[role=menu] li"+y,u);
if(!k.val()&&!/(38|40)/.test(B.keyCode.toString(10))){if(j.filter(".active").length===0){j=o.$menuInner.find("li");
if(o.options.liveSearchNormalize){j=j.filter(":a"+o._searchStyle()+"("+g(t[B.keyCode])+")")
}else{j=j.filter(":"+o._searchStyle()+"("+t[B.keyCode]+")")
}}}}if(!j.length){return
}if(/(38|40)/.test(B.keyCode.toString(10))){l=j.index(j.find("a").filter(":focus").parent());
n=j.filter(y).first().index();
s=j.filter(y).last().index();
w=j.eq(l).nextAll(y).eq(0).index();
v=j.eq(l).prevAll(y).eq(0).index();
h=j.eq(w).prevAll(y).eq(0).index();
if(o.options.liveSearch){j.each(function(D){if(!e(this).hasClass("disabled")){e(this).data("index",D)
}});
l=j.index(j.filter(".active"));
n=j.first().data("index");
s=j.last().data("index");
w=j.eq(l).nextAll().eq(0).data("index");
v=j.eq(l).prevAll().eq(0).data("index");
h=j.eq(w).prevAll().eq(0).data("index")
}p=k.data("prevIndex");
if(B.keyCode==38){if(o.options.liveSearch){l--
}if(l!=h&&l>v){l=v
}if(l<n){l=n
}if(l==p){l=s
}}else{if(B.keyCode==40){if(o.options.liveSearch){l++
}if(l==-1){l=0
}if(l!=h&&l<w){l=w
}if(l>s){l=s
}if(l==p){l=n
}}}k.data("prevIndex",l);
if(!o.options.liveSearch){j.eq(l).children("a").focus()
}else{B.preventDefault();
if(!k.hasClass("dropdown-toggle")){j.removeClass("active").eq(l).addClass("active").children("a").focus();
k.focus()
}}}else{if(!k.is("input")){var r=[],m,C;
j.each(function(){if(!e(this).hasClass("disabled")){if(e.trim(e(this).children("a").text().toLowerCase()).substring(0,1)==t[B.keyCode]){r.push(e(this).index())
}}});
m=e(document).data("keycount");
m++;
e(document).data("keycount",m);
C=e.trim(e(":focus").text().toLowerCase()).substring(0,1);
if(C!=t[B.keyCode]){m=1;
e(document).data("keycount",m)
}else{if(m>=r.length){e(document).data("keycount",0);
if(m>r.length){m=1
}}}j.eq(r[m-1]).children("a").focus()
}}if((/(13|32)/.test(B.keyCode.toString(10))||(/(^9$)/.test(B.keyCode.toString(10))&&o.options.selectOnTab))&&z){if(!/(32)/.test(B.keyCode.toString(10))){B.preventDefault()
}if(!o.options.liveSearch){var A=e(":focus");
A.click();
A.focus();
B.preventDefault();
e(document).data("spaceSelect",true)
}else{if(!/(32)/.test(B.keyCode.toString(10))){o.$menuInner.find(".active a").click();
k.focus()
}}e(document).data("keycount",0)
}if((/(^9$|27)/.test(B.keyCode.toString(10))&&z&&(o.multiple||o.options.liveSearch))||(/(27)/.test(B.keyCode.toString(10))&&!z)){o.$menu.parent().removeClass("open");
if(o.options.container){o.$newElement.removeClass("open")
}o.$button.focus()
}},mobile:function(){this.$element.addClass("mobile-device")
},refresh:function(){this.$lis=null;
this.liObj={};
this.reloadLi();
this.render();
this.checkDisabled();
this.liHeight(true);
this.setStyle();
this.setWidth();
if(this.$lis){this.$searchbox.trigger("propertychange")
}this.$element.trigger("refreshed.bs.select")
},hide:function(){this.$newElement.hide()
},show:function(){this.$newElement.show()
},remove:function(){this.$newElement.remove();
this.$element.remove()
},destroy:function(){this.$newElement.before(this.$element).remove();
if(this.$bsContainer){this.$bsContainer.remove()
}else{this.$menu.remove()
}this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")
}};
function d(l,m){var j=arguments;
var o=l,h=m;
[].shift.apply(j);
var n;
var k=this.each(function(){var u=e(this);
if(u.is("select")){var t=u.data("selectpicker"),r=typeof o=="object"&&o;
if(!t){var p=e.extend({},c.DEFAULTS,e.fn.selectpicker.defaults||{},u.data(),r);
p.template=e.extend({},c.DEFAULTS.template,(e.fn.selectpicker.defaults?e.fn.selectpicker.defaults.template:{}),u.data().template,r.template);
u.data("selectpicker",(t=new c(this,p,h)))
}else{if(r){for(var s in r){if(r.hasOwnProperty(s)){t.options[s]=r[s]
}}}}if(typeof o=="string"){if(t[o] instanceof Function){n=t[o].apply(t,j)
}else{n=t.options[o]
}}}});
if(typeof n!=="undefined"){return n
}else{return k
}}var b=e.fn.selectpicker;
e.fn.selectpicker=d;
e.fn.selectpicker.Constructor=c;
e.fn.selectpicker.noConflict=function(){e.fn.selectpicker=b;
return this
};
e(document).data("keycount",0).on("keydown.bs.select",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input',c.prototype.keydown).on("focusin.modal",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input',function(h){h.stopPropagation()
});
e(window).on("load.bs.select.data-api",function(){e(".selectpicker").each(function(){var h=e(this);
d.call(h,h.data())
})
})
})(a)
}));
$(document).ready(function(){if(window.innerWidth==800){$(".navbar-collapse").css("margin-left","-15px");
$(".navbar-collapse").css("margin-right","-15px");
$("ul.navbar-nav li").css("width","100%");
$(document).on("click","#toggleHead",function(){$(".navbar-collapse").css("margin-left","-15px");
$(".navbar-collapse").css("margin-right","-15px");
$("ul.navbar-nav li").css("width","100%")
});
$(document).on("click",".login-dd #mNavClose",function(){$(".navbar-collapse.collapse").removeAttr("style")
})
}if(window.innerWidth>800){$("#navbar").addClass("deskNavbar")
}else{if(window.innerWidth<=800){$("#navbar").addClass("mobiNavbar");
$(document).on("click","#toggleHead",function(){$(".overlay").addClass("loginOverlay");
$("html,body").css("overflow","hidden")
});
$(document).on("touchstart click",".overlay.loginOverlay",function(){$(".mobi-head").hide();
$("#navbar").removeClass("in");
$(".login > ul").hide();
$(".login-dd #mNavClose").remove();
$(".mobi-head a").empty();
$(this).removeClass("loginOverlay");
$(this).hide();
$(".mobi-head").removeClass("login-dd");
$(".mobiNavbar ul li, .mobiNavbar ul li.login a").removeAttr("style");
$("html,body").removeAttr("style")
});
$(document).on("touchstart click",".overlay",function(){$(".sidebar-container .sidebar ul").hide();
$(".mobiNav ul.submenu").hide();
$(".sidebar").removeAttr("style");
$(".mobi-head").hide();
$(".mobi-head").removeClass("level2");
$(".mobi-head").removeClass("level3");
$(".mobi-head").empty();
$(".l_content").empty();
$("#reverse").remove();
$(this).hide();
$("#search-panel").animate({top:"-74px"},100);
$("html,body").removeAttr("style")
})
}}if(window.innerWidth==800){$(".nav-vm .navbar-nav > li").css("width","100%")
}else{$(".nav-vm .navbar-nav > li").css("width","auto")
}$(window).resize(function(){if(window.innerWidth>800){$(".mobi-head").hide();
$("#navbar").removeClass("in");
$("#search-panel").animate({top:"-74px"},100);
$(".overlay").hide(200);
$("#navbar").addClass("deskNavbar");
$("#navbar").removeClass("mobiNavbar");
$(".deskNavbar .navbar-nav li.login ul").hide();
$(".navbar-collapse.collapse").removeAttr("style")
}else{if(window.innerWidth<=800){$("#navbar").removeClass("deskNavbar");
$("#navbar").addClass("mobiNavbar");
$(".navbar-collapse.collapse").removeAttr("style")
}}if(window.innerWidth==800){$(".nav-vm .navbar-nav > li").css("width","100%")
}else{$(".nav-vm .navbar-nav > li").css("width","auto")
}});
$(document).on("click","#toggleHead",function(){$(".mobi-head").show();
$(".mobi-head").addClass("login-dd");
$(".overlay").show();
$(".mobi-head").append('<span aria-hidden="true" class="glyphicon glyphicon-remove" id="mNavClose"></span>');
$(".mobiNavbar ul li, .mobiNavbar ul li.login a").show();
$(".mobiNavbar ul li.login ul li").hide()
});
$(document).on("click","#mNavSeacrch",function(){$(".mobi-head").append('<span aria-hidden="true" class="glyphicon glyphicon-remove" id="mNavClose"></span>');
$("#search-panel").animate({top:"48px"},200);
$(".mobi-head").show();
$(".overlay").show()
});
$(document).on("click","#mNavClose",function(){$("#search-panel").animate({top:"-74px"},100)
});
$(document).on("click",".login-dd #mNavClose",function(){$(".mobi-head").hide();
$("#navbar").removeClass("in");
$(".overlay").hide();
$(".login > ul").hide();
$("#reverse").remove();
$(".mobi-head a").empty();
$(this).remove();
$(".mobi-head").removeClass("login-dd");
$(".mobiNavbar ul li, .mobiNavbar ul li.login a").removeAttr("style")
})
});
$(document).on("click",".mobiNavbar .login a",function(){$(this).parent("li").children("ul").show();
$(this).parent("li").siblings("li").hide();
$(".login > a").hide();
$(".login ul, .login ul li").show();
$(".mobi-head a").empty();
$(".mobi-head").append('<a id="reverse" class="reverse" href="javascript:void(0);"><i class="fa fa-chevron-left"></i> <font>Login</font></a>')
});
$(document).on("click",".login-dd #reverse",function(){$(this).remove();
$(".login > ul").hide();
$(".login > a").show();
$(".mobi-head a").empty();
$(".nav-vm.navbar li").show()
});
$(".nav-vm form input").on("keydown",function(a){if(a.which==13){$(this).parent("form").submit()
}});
$(document).on("click",".searchQuery",function(){$(this).parent("form").submit()
});
var amb="&",ques="?",hash="#",eq="=",q="q";
var cc="cc",client="client",stype="stype",site="site";
var product="product";
var fallback_client="VMware_Site_1",fallback_site="VMware_Site_1",fallback_cc="en",fallback_stype="main",fallback_url="/search.html#/";
var parameter_URL="",url="",globalsearch_parameter_MAP={},siteRootPath="",productfield="",form_action="";
var srtype_global="global";
$(document).on("click",".searchQuery",function(){siteRootPath=$("#globalsearch").attr("action");
var a=$("#ub-search").val();
global_search(srtype_global,a)
});
$(document).on("keypress","#globalsearch .geo",function(b){if(b.which==13){siteRootPath=$("#globalsearch").attr("action");
var a=$("#ub-search").val();
global_search(srtype_global,a);
return false
}});
function global_search(b,a){if(typeof b!="undefined"||b.length>0){globalsearch_parameter_MAP=create_globalsearch_Map();
search(a,b)
}}$(document).on("click","#search-panel button",function(){siteRootPath=$("#globalsearch").attr("action");
var a=$(".search-panel #search").val();
$("#mNavClose").click();
global_search(srtype_global,a);
return false
});
$(document).on("keypress",".search-panel #search",function(b){if(b.which==13){siteRootPath=$("#globalsearch").attr("action");
var a=$(".search-panel #search").val();
$("#mNavClose").click();
global_search(srtype_global,a);
return false
}});
$(document).on("click","#basic-addon1",function(){$("#supportsearch").attr("action",$("#globalsearch").attr("action"));
var a=$("#supportsearch").attr("action");
siteRootPath=a;
var c=$(this).data("srtype");
if($(this).data("productfield")!=""){productfield=$(this).data("productfield")
}if("global"==c){var b=$("#generic-search").val();
global_search(c,b)
}else{supp_sec_search(c)
}});
$(document).on("keypress","#generic-search",function(e){$("#supportsearch").attr("action",$("#globalsearch").attr("action"));
var b=$("#supportsearch").attr("action");
siteRootPath=b;
var d=$(this).data("srtype");
var a=(e.keyCode?e.keyCode:e.which);
if(a=="13"){if($(this).data("productfield")!=""){productfield=$(this).data("productfield")
}if("global"==d){var c=$("#generic-search").val();
global_search(d,c)
}else{supp_sec_search(d)
}return false
}});
function supp_sec_search(b){var a=$("#generic-search").val();
if(typeof b!="undefined"||b.length>0){globalsearch_parameter_MAP=create_supp_sec_search_parameter_MAP();
search(a,b)
}}function create_globalsearch_Map(){var a={};
$.each($("#globalsearch input"),function(b,d){if($(this).attr("type")=="hidden"){var e=$(this).attr("name");
if(e.indexOf("cq_csrf_token")>-1){return true
}var c=$(this).val();
a[e]=c
}});
return a
}function create_supp_sec_search_parameter_MAP(){var a={};
$.each($("#supportsearch input"),function(b,d){if($(this).attr("type")=="hidden"){var e=$(this).attr("name");
if(e.indexOf("cq_csrf_token")>-1){return true
}var c=$(this).val();
a[e]=c
}});
return a
}function get_Search_URL(b){var a="";
if(b.length>0){a+=b
}return a
}function create_search_urlparam(b,d){var e="";
var a=1;
for(var c in globalsearch_parameter_MAP){if(globalsearch_parameter_MAP.hasOwnProperty(c)){if(a==1){e+=c+eq+globalsearch_parameter_MAP[c];
a=0
}else{e+=amb+c+eq+globalsearch_parameter_MAP[c]
}}}e+=amb+q+eq+b;
return e
}function create_security_search_urlparam(a,b){var c="";
c=create_search_urlparam(a,b);
return c
}function create_support_search_urlparam(a,b){var c="";
c=create_search_urlparam(a,b);
c+=amb+product+eq+productfield;
return c
}function search(a,b){url=get_Search_URL(siteRootPath);
if(url==""){url=fallback_url;
if(b=="global"){globalsearch_parameter_MAP[client]=fallback_client;
globalsearch_parameter_MAP[site]=fallback_site;
globalsearch_parameter_MAP[cc]=fallback_cc;
globalsearch_parameter_MAP[stype]=fallback_stype
}else{if(b=="security"){globalsearch_parameter_MAP[cc]=fallback_cc
}else{globalsearch_parameter_MAP[cc]=fallback_cc
}}}parameter_URL=ques;
if("support"==b){parameter_URL+=create_support_search_urlparam(a,b)
}else{if("security"==b){parameter_URL+=create_security_search_urlparam(a,b)
}else{if("global"==b){parameter_URL+=create_search_urlparam(a,b)
}}}window.location=url+parameter_URL
}var mainCatVal="";
var mainCatClass="";
var linkClickVal="";
var ulHeight=0;
var data_target="";
var level1Html="";
var sideBarlogoHeight=0;
var sideBarTotalHeight=0;
var wHeight=0;
$(document).ready(function(){ulHeight=$(".sidebar > ul").outerHeight(true);
$(".verticleToggleMenu").hide();
toggleSidebar();
defineWidth();
/*
$(document).on("click",".verticleToggleMenu",function(){$(".sidebar .verticlaToggle").css("height","100%");
$(".verticlaToggle").addClass("opened");
$(".sidebar ul.verticlaToggle.opened li").show();
$("#head-ico a").html($(this).html());
var a=$(this).attr("data-target");
$(".menu-cat").hide();
$(a).show();
$(this).addClass("cross");
$(".sidebar-overlay").show();
$(".sidebar-overlay").animate({left:"135px"},0);
defineWidth()
});
*/
$(document).on("click",".verticleToggleMenu.cross",function(){$(this).removeClass("cross");
$(".sidebar-overlay li.info").show();
$(".sidebar-overlay li.head-ico").show();
$(".verticlaToggle").removeClass("opened");
$(".subCat-container").removeClass("vMenu");
$(".subCat-container.vMenu").parent(".col-md-3").removeClass("stretch-full");
$(".sidebar .verticlaToggle li").removeClass("active-li");
$(".sidebar .verticlaToggle li").children("a").removeClass("cross");
$(".verticleNav .levelV1").remove();
$(".verticleNav .subCat-container li.subCat").removeClass("clicked");
$(".verticleNav .subCat-container li.subCat").siblings("li").removeClass("show_subcat");
$(".subCat-container").removeClass("vMenuLevel2")
});
$(document).on("click",".verticleToggle.opened li",function(){$(".verticleToggle.opened li").removeClass("active-li");
$(this).addClass("active-li")
});
if($(window).innerWidth()<800){$(".sidebar > ul").removeClass("verticlaToggle");
$(".verticleToggleMenu").hide();
setHeight()
}$(".sidebar-overlay").addClass("deskNav");
$(document).on("click",".sidebar ul li a",function(){$("#head-ico a").html($(this).html());
var c="#menu-overlay-"+$(this).attr("id");
$(".menu-cat").hide();
$(c).show();
$(".sidebar-overlay").show();
$(".sidebar-overlay .submenu li").hide();
$(".submenu li.subCat").show();
$(".sidebar-overlay").animate({left:"135px"},0);
$(".sidebar ul li a").removeClass("cross");
$(".sidebar ul li").removeClass("active-li");
$(this).parent("li").addClass("active-li");
$(this).addClass("cross");
var b=$(this).parent("li").height();
var a=$(".sidebar ul li.active-li");
a=b;
if(window.innerWidth<=800){$(".menu-cat").scrollTop(0);
$(".sidebar-overlay").addClass("mobiNav");
$(".menu-cat").each(function(){if($(this).css("display")=="block"){var e=$(this).innerHeight();
var d=window.innerHeight;
if(e>d){$(this).css("max-height",(d-99));
$(this).css("overflow-y","scroll")
}}})
}});
/*
$(document).on("click",".cross",function(){$(".menu-cat").scrollTop(0);
$(this).removeClass("cross");
$(this).parent("li").removeClass("active-li");
$(".sidebar-overlay").animate({left:"-100%"},0)
});
*/
$(document).on("click","#hamBurger",function(){$(".sidebar ul.opened li").show();
$("html,body").css("overflow","hidden");
$(".sidebar-container .sidebar ul").show();
$(".overlay").show();
$(".l_content").empty();
$("#reverse").remove();
$(".mobi-head").show();
if($("#mNavClose").length==0){$(".mobi-head").append('<span aria-hidden="true" class="glyphicon glyphicon-remove" id="mNavClose"></span>')
}});
$(document).on("click","#mNavClose",function(){$(".sidebar-container .sidebar ul").hide();
$(".mobi-head").hide();
$(".mobi-head").removeClass("level2");
$(".mobi-head").removeClass("level3");
$(".overlay").hide();
$(".l_content").empty();
$("#reverse").remove();
$(this).remove();
$("html,body").removeAttr("style")
});

$(window).resize(function(){if(window.innerWidth>800){$(".sidebar-container .submenu").show();
$(".sidebar-container .sidebar ul").show();
$(".sidebar-container .sidebar").removeAttr("style");
$(".sidebar-container .sidebar ul").removeAttr("style");
$(".sidebar-container .sidebar").show();
$(".sidebar ul li").removeClass("active-li");
$(".mobi-head").empty();
$(".sidebar-overlay").addClass("deskNav");
$(".sidebar-overlay").removeClass("mobiNav");
$("html,body").removeAttr("style")
}else{if(window.innerWidth<=800){$(".sidebar-overlay").removeClass("deskNav");
$(".sidebar-container .sidebar-overlay").hide();
$(".sidebar ul li a").removeClass("cross");
$(".sidebar ul li").removeAttr("style");
$(document).on("click","#hamBurger",function(){$(".sidebar-container .sidebar").css({margin:"0",width:"100%",height:"100%"})
});
$(document).on("click","#mNavClose",function(){$(".sidebar ul li a").removeClass("cross");
$(".sidebar-container .sidebar").removeAttr("style");
$(".menu-cat").removeAttr("style");
$(".menu-cat").hide();
$(".sidebar-container .submenu").hide()
});
setHeight()
}else{if(window.innerWidth==800){$(".verticlaToggle").removeClass("opened");
$("#mNavClose").click()
}}}if($(window).innerWidth()<800){$(".sidebar > ul").removeClass("verticlaToggle");
$(".verticleToggleMenu").hide()
}defineWidth();
toggleSidebar()
});
$(window).on("orientationchange",function(){setTimeout(function(){setHeight()
},300)
})
});
$(document).on("click",".sidebar-overlay .submenu li.subCat",function(){$(".mobi-head").addClass("level3");
$(".mobi-head").removeClass("level2");
mainCatVal=$(".mobi-head .l_content span").html();
mainCatClass=$(".mobi-head .l_content i").attr("class");
if($(this).children("strong").children("a").length<1){linkClickVal=$($(this).children("strong")).html()
}else{linkClickVal=$($(this).children("strong").children("a")).html()
}$(".mobi-head .l_content").html('<span data-category="'+mainCatVal+'" class="l3">'+linkClickVal+"</span>")
});
$(document).on("click","#hamBurger",function(){$(".sidebar-container .sidebar").css({margin:"0",width:"100%",height:"100%"})
});
$(document).on("click",".level3 #mNavClose",function(){$(".subCat-container li").hide();
$(".subCat").show()
});
$(document).on("click","#mNavClose",function(){$(".sidebar-container .sidebar").removeAttr("style");
$(".sidebar-container .submenu").hide()
});
$(document).on("click",".level2 .l_content, .level2 #reverse",function(){$(this).hide();
$("#reverse,.submenu").hide();
$(".sidebar ul").show();
$(".sidebar-overlay.mobiNav").removeAttr("style")
});
$(document).on("click",".level3 .l_content, .level3 #reverse",function(){$(this).hide();
$("#reverse,.submenu li").hide();
$(".subCat").show();
$(".subCat").closest(".menu-cat").find("span").show();
$(".mobi-head").addClass("level2");
$(".mobi-head").removeClass("level3");
$(".level2 #reverse").show();
if(mainCatVal=="Partners Programs"){$(".l_content").show().html('<i style="margin-right:2px; width:auto;" class="'+mainCatClass+'"></i><i class="'+mainCatClass+'"></i><span>'+mainCatVal+"</span>")
}else{$(".l_content").show().html('<i class="'+mainCatClass+'"></i><span>'+mainCatVal+"</span>")
}});
$(document).on("click",".submenu li.subCat",function(){$(this).parent().children().show();
if(window.innerWidth<=800){$(this).closest(".menu-cat").find("span").hide()
}$(".submenu li.subCat").hide()
});
$(document).on("click",".submenu li a",function(a){if($(this).attr("href")==document.location.pathname+document.location.hash){$(".cross").click();
a.preventDefault()
}else{if($(this).attr("href").split("#")[0]==document.location.pathname){$(".cross").click();
var b="#"+$(this).attr("href").split("#")[1];
$(".secondary-nav ul li a").each(function(){if($(this).attr("href")==b){$(this).click()
}})
}}});
$(document).on("click",".sidebar ul li a",function(){if($(".submenu").is(":hidden")){$(".submenu").show()
}if($(".verticleToggleMenu").is(":visible")){$(".head-ico").hide();
$(".sidebar-overlay ul li.info").addClass("infoHidden");
$(".subCat-container").parent(".col-md-3").removeClass("stretch-full")
}else{$(".head-ico").show();
$(".sidebar-overlay ul li.info").removeClass("infoHidden")
}$(".mobi-head").addClass("level2");
$(".mobi-head").html('<a class="l_content">'+$(this).html()+'</a><span id="mNavClose" class="glyphicon glyphicon-remove" aria-hidden="true"></span>');
$(".level2").append('<a id="reverse" class="reverse" href="javascript:void(0);"><i class="fa fa-chevron-left"></i></a>');
$(this).parent().parent("ul").hide();
$(".sidebar-overlay").show()
});
function defineWidth(){var a=$(".sidebar-overlay").width()-165;
var b=a+"px";
$("ul.verticlaToggle").css({width:b})
}function toggleSidebar(){var a=false;
sideBarlogoHeight=$(".sidebar .logo-vm").outerHeight()+20;
sideBarTotalHeight=ulHeight+sideBarlogoHeight;
wHeight=$(window).height();
if($(".verticleToggleMenu").is(":visible")){$(".head-ico").hide();
$(".sidebar-overlay ul li.info").addClass("infoHidden")
}else{$(".head-ico").show();
$(".sidebar-overlay ul li.info").removeClass("infoHidden")
}if(wHeight<sideBarTotalHeight&&!$(".sidebar > ul").hasClass("verticlaToggle")&&$(window).innerWidth()>800){$(".sidebar > ul").addClass("verticlaToggle");
$(".sidebar > ul").hide();
$(".verticleToggleMenu").show();
$(".sidebar-overlay").addClass("verticleNav");
if(a==false){$(".verticlaToggle").removeClass("opened");
$(".cross").click();
$(".sidebar > ul").hide();
$(".sidebar ul li").hide();
$(".sidebar-container .sidebar").removeAttr("style");
$(".sidebar-container .submenu").hide();
a=true
}$(".sidebar ul.verticlaToggle li a").removeClass("cross")
}else{if($(window).height()>sideBarTotalHeight&&$(".sidebar > ul").hasClass("verticlaToggle")){$(".sidebar > ul").removeClass("verticlaToggle");
$(".verticleToggleMenu").hide();
$(".sidebar-overlay").removeClass("verticleNav");
$(".subCat-container").removeClass("vMenu");
$(".sidebar ul li a").removeClass("cross");
$(".sidebar .verticlaToggle li").removeClass("active-li");
$(".subCat-container").parent(".col-md-3").removeClass("stretch-full");
if(a==false){$(".verticlaToggle").removeClass("opened");
$(".cross").click();
$(".sidebar > ul").show();
$(".sidebar ul li").show();
$(".levelV1").hide();
$(".sidebar-container .sidebar").removeAttr("style");
$(".sidebar-container .submenu").hide();
a=true
}$(".sidebar .verticlaToggle li").removeClass("active-li");
$(".verticleNav .levelV1").remove();
$(".verticleNav .subCat-container li.subCat").removeClass("clicked");
$(".verticleNav .subCat-container li.subCat").siblings("li").removeClass("show_subcat");
$(".subCat-container").removeClass("vMenuLevel2")
}else{if($(window).height()>sideBarTotalHeight){$(".sidebar-overlay").removeClass("verticleNav")
}else{a=false
}}}return false
}var wHeight=$(window).height();
var sideBarlogoHeight=$(".sidebar .logo-vm").outerHeight()+20;
var sideBarTotalHeight=ulHeight+sideBarlogoHeight;
$(document).on("click",".sidebar ul.verticlaToggle.opened li a",function(){$(".sidebar .verticlaToggle.opened").css("height","0");
$(".sidebar ul.verticlaToggle li a").removeClass("cross");
data_target="#menu-overlay-"+$(this).attr("id");
$(".sidebar ul.verticlaToggle.opened li").hide();
$(".subCat-container").addClass("vMenu");
$(".subCat-container.vMenu").parent(".col-md-3").addClass("stretch-full");
var a=$(this).html();
$(".levelV1").remove();
$(".menu-cat").append('<div class="levelV1"><a href="javascript:void(0)"><i class="fa fa-chevron-left"></i>'+a+"</a></div>")
});
$(document).on("click",".verticleNav .levelV1 a",function(){$(".sidebar ul.verticlaToggle li a").removeClass("cross");
$(".subCat-container").removeClass("vMenu");
$(".verticleNav .menu-cat").hide();
$(".sidebar ul.verticlaToggle.opened li").show();
$(".sidebar .verticlaToggle").css("height","100%")
});
$(document).on("click",".verticleNav .subCat-container.vMenu li.subCat",function(){level1Html=$(".levelV1").html();
$(".sidebar ul.verticlaToggle li a").removeClass("cross");
$(".verticleNav .levelV1").addClass("levelV2");
var a=$(this).html();
$(".verticleNav .levelV1").html('<a href="javascript:void(0)"><i class="fa fa-chevron-left"></i>'+a+"</a>");
$(".verticleNav .subCat-container.vMenu li.subCat").addClass("clicked");
$(this).siblings("li").addClass("show_subcat");
$(".subCat-container").addClass("vMenuLevel2").removeClass("vMenuLevel1")
});
$(document).on("click",".levelV1.levelV2",function(){$(".subCat-container").removeClass("vMenuLevel2").addClass("vMenuLevel1").addClass("vMenu");
$(".levelV1").html(level1Html);
$(".sidebar ul.verticlaToggle li a").removeClass("cross");
$(this).removeClass("levelV2");
$(".verticlaToggle").children("li").hide();
$(".submenu .menu-cat .subCat").show();
$(".submenu .menu-cat .show_subcat").removeClass("show_subcat").hide();
$(data_target).show();
$(".verticleNav .subCat-container li.subCat").removeClass("clicked");
$(".verticleNav .subCat-container.vMenu li.subCat").siblings("li").removeClass("show_subcat");
$(".sidebar .verticlaToggle").css("height","0")
});
$(document).on("click",".submenu li a",function(a){if($(this).attr("href")==document.location.pathname+document.location.hash){$(".cross").click();
a.preventDefault()
}else{if($(this).attr("href").split("#")[0]==document.location.pathname+document.location.hash){$(".cross").click();
var b="#"+$(this).attr("href").split("#")[1];
$(".secondary-nav ul li a").each(function(){if($(this).attr("href")==b){$(this).click()
}})
}}});
function setHeight(){$(".sidebar").css({"max-height":"0"});
$(".sidebar-overlay").removeAttr("style");
windowHeight=$(window).innerHeight();
$(".sidebar").css({"max-height":windowHeight+"px"});
$(".sidebar-overlay").css({"max-height":windowHeight+"px"})
}$(document).ready(function(){$(document).on("scroll",function(){if($(document).scrollTop()>40&&window.innerWidth>800){$(".breadCrumb").addClass("scrolling")
}else{$(".breadCrumb").removeClass("scrolling")
}});
if(window.scrollY>40&&window.innerWidth>800){$(".breadCrumb").addClass("scrolling")
}else{$(".breadCrumb").removeClass("scrolling")
}$(".overlay-con > a").mouseover(function(){$(".overlay-con a").addClass("hover-opacity");
$(this).removeClass("hover-opacity")
});
$(".social-overlay").mouseout(function(){$(".overlay-con a").removeClass("hover-opacity")
});
$(".dd-con").mouseover(function(){$(".toggle-dropdown > a").addClass("active")
});
$(".dd-con").mouseout(function(){$(".toggle-dropdown > a").removeClass("active")
});
(function(f){f(window).load(function(){if(f("#content-1").length>0||f("#content-2").length>0){f("#content-1, #content-2").mCustomScrollbar({theme:"minimal",autoHideScrollbar:"false",alwaysShowScrollbar:2,scrollInertia:"1",mouseWheelPixels:150,callbacks:{onScroll:function(){var g=this.mcs.topPct;
if(g>96){f("#content-1, #content-2").mCustomScrollbar("update")
}}}})
}})
})(jQuery);
$(document).on("mousewheel DOMMouseScroll",".bc-dropdown .mCustomScrollbar",function(f){var h=f.originalEvent,g=h.wheelDelta||-h.detail;
this.scrollTop+=(g<0?1:-1)*30;
f.preventDefault()
});
function b(){var g="";
var f=($(".nav-vm").height())+($(".breadCrumb").height());
if($(window).scrollTop()==0){g=window.innerHeight-(f+70)
}else{if($(window).scrollTop()>0){g=window.innerHeight-(($(".breadCrumb").height())+70)
}}$(".bc-dropdown ul #content-1, .bc-dropdown ul #content-2").css("max-height",g)
}b();
var a=$(".breadCrumb ul div.dd-con").children("li").last();
$(".breadCrumb ul div.dd-con").children("li").last().remove();
$(".breadCrumb").children("ul").append(a);
if(!($(a).children("a").next("ul").length>0)){$(a).removeClass("bc-dropdown")
}var e=20;
$(".bc-dropdown").each(function(f){e=$(this).outerWidth()+e
});
var d="";
function c(){$(".breadCrumb ul li:last span").removeAttr("style");
if($(".breadCrumb .social-links")[0]){if(window.innerWidth<1120){d=$(".breadCrumb ul").outerWidth()-200
}else{d=$(".breadCrumb ul").width()-$(".breadCrumb ul div.toggle-dropdown").width()
}}else{$(".breadCrumb ul").css("width","90%");
if(window.innerWidth<1120){d=$(".breadCrumb ul").outerWidth()-200
}else{d=$(".breadCrumb ul").width()-$(".breadCrumb ul div.toggle-dropdown").width()
}}if($(".breadCrumb ul").width()<($(".breadCrumb ul div.toggle-dropdown").outerWidth()+$(".breadCrumb ul li:last").width())){$(".breadCrumb > ul").addClass("spanellipse")
}else{$(".breadCrumb > ul").removeClass("spanellipse")
}if($(".social-links").width()<30){$(".breadCrumb ul").addClass("no-social-bc")
}if(($(".breadCrumb ul").width()-$(".lastLi").width()>300)){$(".breadCrumb ul .toggle-dropdown").removeClass("showDrpBox");
d=($(".breadCrumb ul").width()-$(".breadCrumb ul div").width()-$(".social-links").width())+200;
$(".breadCrumb ul li:last span").width(d)
}if($(window).width()-$(".sidebar").width()<$(".breadCrumb > ul").width()+$(".breadCrumb ul li:last span").width()+200){$(".breadCrumb ul .toggle-dropdown").addClass("showDrpBox")
}else{$(".breadCrumb ul .toggle-dropdown").removeClass("showDrpBox")
}}$(window).load(function(){$(".breadCrumb ul").css("visibility","visible");
c();
if(($(".breadCrumb ul").width()-$(".lastLi").width()>300)){$(".breadCrumb ul .toggle-dropdown").removeClass("showDrpBox");
d=($(".breadCrumb ul").width()-$(".breadCrumb ul div").width()-$(".social-links").width())+200;
$(".breadCrumb ul li:last span").width(d)
}if($(window).width()-$(".sidebar").width()<$(".breadCrumb > ul").width()+$(".breadCrumb ul li:last span").width()+200){$(".breadCrumb ul .toggle-dropdown").addClass("showDrpBox")
}else{$(".breadCrumb ul .toggle-dropdown").removeClass("showDrpBox")
}c();
if($(".toggle-dropdown > a").css("display")!="none"){$(".dd-con").addClass("toggleView")
}else{$(".dd-con").removeClass("toggleView")
}});
$(window).resize(function(){$(".breadCrumb ul").css("visibility","visible");
c()
});
$(".bc-dropdown").hover(function(){$(".mCSB_container").each(function(){if($(this).outerHeight()<parseInt($(this).parent().parent(".mCustomScrollbar").css("max-height"))){$(this).parent().parent().children(".mCSB_scrollTools").hide()
}})
});
$(window).resize(function(){b();
if($(".toggle-dropdown > a").css("display")!="none"){$(".dd-con").addClass("toggleView")
}else{$(".dd-con").removeClass("toggleView")
}});
$(document).on("scroll",function(){b()
});
if($(".dd-con li.bc-dropdown").length>2){$(".dd-con").addClass("multi-tier-brd")
}if($(".dd-con li.bc-dropdown").length==5){$(".dd-con").addClass("listFive")
}else{if($(".dd-con li.bc-dropdown").length==4){$(".dd-con").addClass("listFour")
}else{if($(".dd-con li.bc-dropdown").length==1){$(".dd-con").addClass("single-brd")
}else{if($(".dd-con li.bc-dropdown").length<1){$(".toggle-dropdown").hide()
}}}}});
var getAnchorName=[];
var getAnchortop=[];
var scrollPos=$(window).scrollTop();
var factor=0,_factor=0,__factor=0;
var navBarHeight=$(".navbar").outerHeight(true);
var breadCrumHeight=$(".breadCrumb").outerHeight(true);
var secondNavHeight=$(".secondary-nav").outerHeight(true);
var secondNavFixedHeight=$(".secondary-nav.fixed").outerHeight(true);
var getNavHeight=0;
function getNavDetail(){getAnchorName.length=0;
getAnchortop.length=0;
$(".navSelecter").each(function(){getAnchorName.push($(this).attr("id"));
getAnchortop.push(Math.ceil($(this).position().top))
})
}$(document).ready(function(){if($(".secondary-nav ul li").length<1){$(".secondary-nav").addClass("noLinks")
}SetHeaderHeight();
$(window).load(function(){b();
if(window.innerWidth<=800){calcHeight_snav()
}$(".secondary-nav ul li a").each(function(){if($(this).attr("href")==document.location.hash){$(this).click()
}})
});
$(window).on("scroll",function(){if(window.innerWidth<=800){collapseMenu()
}});
$(document).on("click",".secondary-nav ul li a[href*=#]:not([href=#])",function(g){b();
var d=0;
if(window.innerWidth<800){if($(this).hasClass("active")&&!$(this).parent("ul").hasClass("open")){return false
}}if(window.innerWidth<641){d=getAnchortop[0]+30
}else{if(window.innerWidth<801){d=getAnchortop[0]
}else{if(window.innerWidth<1001){d=getAnchortop[0]
}else{d=getAnchortop[0]+50
}}}calcHeight_snav();
g.preventDefault();
var f=this.hash;
var c=$(f);
$("html, body").animate({scrollTop:c.offset().top-d},900,function(){onScroll()
});
$(".secondary-nav ul").removeClass("open")
});
if(window.innerWidth<=800){collapseMenu()
}$(window).on("scroll",function(){b();
onScroll()
});
function a(c){}$(document).on("click",".secondary-nav ul li a",function(d){$(".content-container").css("padding-top",0);
if($(this).hasClass("active")){return false
}else{var c=$(this);
var f=c.attr("href");
if(c.position().top<=scrollPos){}else{c.removeClass("active")
}}});
$(document).on("click",".secondary-nav ul li a.active",function(c){$(".secondary-nav ul li").toggle();
$(".secondary-nav ul li a.active").parent("li").toggle();
$(".secondary-nav ul").addClass("open");
c.preventDefault()
});
function b(){if(window.innerWidth<1001&&window.innerWidth>800){if($(window).scrollTop()<40){$(".content-container").css("padding-top",0)
}if($(window).scrollTop()>40){$(".secondary-nav").addClass("fixed");
$(".content-container").css("padding-top",$(".secondary-nav").height()+20)
}else{$(".secondary-nav").removeClass("fixed");
$(".content-container").css("padding-top","0")
}}else{if($(window).scrollTop()>($(".secondary-nav").height()-$(".breadCrumb").height())&&$(window).scrollTop()>0){if($(".secondary-nav ul li").length>0){$(".secondary-nav").addClass("fixed")
}}else{$(".secondary-nav").removeClass("fixed")
}getNavDetail()
}}if($(window).scrollTop()>0){$(".breadCrumb").addClass("scrolling")
}$(window).resize(function(){headlinePos();
SetHeaderHeight();
b();
onScroll();
if($(window).scrollTop()>0){$(".breadCrumb").addClass("scrolling")
}if(window.innerWidth<=800){collapseMenu();
calcHeight_snav()
}else{getNavDetail();
if(navigator.userAgent.indexOf("MSIE")!==-1||navigator.appVersion.indexOf("Trident/")>0){$(".content-container").css("padding-top","0")
}else{if($(window).scrollTop()<40){$(".content-container").css("padding-top","initial")
}}}});
if(window.innerWidth<=640){headlinePos()
}$(window).scroll(function(){if(window.innerWidth<800){if($(".secondary-nav").hasClass("noLinks")){if($(window).scrollTop()==0){$(".content-container").css("padding-top","0")
}}if($(".secondary-nav ul li").length>0){$(".content-container").css("padding-top",$(".secondary-nav").height())
}}if(window.innerWidth<=640){if($(window).scrollTop()==0){if($(".secondary-nav").hasClass("noLinks")){$(".secondary-nav").removeClass("hideHeading")
}getNavDetail();
if($(".secondary-nav ul li").length>0){$(".secondary-nav").addClass("stayTop");
$(".secondary-nav").removeClass("hideHeading");
$(".content-container").css("padding-top",$(".secondary-nav").height())
}}else{if($(window).scrollTop()>0){getNavDetail();
if($(".secondary-nav ul").length>0){$(".secondary-nav").addClass("hideHeading");
$(".secondary-nav").removeClass("stayTop");
if($(".secondary-nav ul li").length>0){$(".content-container").css("padding-top",$(".secondary-nav").height())
}}}}}});
if(window.innerWidth<800){if($(".secondary-nav ul li").length>0){$(".content-container").css("padding-top",$(".secondary-nav").height())
}$(window).on("scroll",calcHeight_snav);
$(window).on("scroll",onScroll);
$(window).on("resize",onScroll)
}onScroll();
$(window).on("scroll",onScroll);
$(window).on("resize",onScroll);
$(window).on("load",onScroll)
});
function headlinePos(){if(window.innerWidth<=640){if($(window).scrollTop()==0){if($(".secondary-nav ul li").length>0){$(".secondary-nav").addClass("stayTop");
$(".secondary-nav").removeClass("hideHeading")
}}else{if($(window).scrollTop()>0){$(".secondary-nav").addClass("hideHeading");
$(".secondary-nav").removeClass("stayTop")
}}}else{if(window.innerWidth>640){$(".secondary-nav").removeClass("stayTop");
$(".secondary-nav").removeClass("hideHeading")
}}}function SetHeaderHeight(){if(window.innerWidth>800){if($(".secondary-nav .snav_left ul").length>0){$(".snav_right").height($(".secondary-nav .snav_left h2").outerHeight(true)+$(".secondary-nav .snav_left ul").outerHeight(true))
}else{if($(".secondary-nav .snav_right .cta a").length<2){$(".secondary-nav .snav_right").addClass("singleLinkRight")
}$(".snav_right").height($(".secondary-nav .snav_left h2").outerHeight(true)+$(".secondary-nav .snav_left ul").outerHeight(true))
}}else{if($(".secondary-nav .snav_right .cta a").length<1){$(".secondary-nav .snav_left").addClass("noCtaLink")
}else{if($(".secondary-nav .snav_right .cta a").length<2){$(".secondary-nav .snav_right").addClass("singleLinkCenter")
}}$(".snav_right").removeAttr("style");
if($(".secondary-nav .snav_left ul li").length<1){}}}function collapseMenu(){$(".secondary-nav ul li a").parent("li").hide();
$(".secondary-nav ul li a.active").parent("li").show()
}function calcHeight_snav(){var a=0;
if($(".secondary-nav").is(":visible")==true){a=$(".secondary-nav").height()
}}function onScroll(){getNavDetail();
var b=0;
if(window.innerWidth<801){b=$(window).scrollTop()+getAnchortop[0]+50
}else{if(window.innerWidth<1001){b=$(window).scrollTop()+getAnchortop[0]+$(".secondary-nav").outerHeight(true)+10
}else{b=$(window).scrollTop()+getAnchortop[0]+70
}}if(window.innerWidth>800){if($(window).scrollTop()<40){SetHeaderHeight();
$(".content-container").css("padding-top",0)
}}for(var a=0;
a<getAnchortop.length;
a++){if(b>getAnchortop[a]){$(".secondary-nav ul li a").removeClass("active");
$(".secondary-nav ul li a[href=#"+getAnchorName[a]+"]").addClass("active")
}}}$(document).ready(function(){$(".tooltip-holder [data-toggle='tooltip']").each(function(){if($(this).length>0){var a=$(this).attr("data-original-title");
$(this).attr("title",a);
$(this).tooltip()
}})
});
$(document).on("click","#tech_specs_collapse",function(){$(this).parent().parent().find(".col-md-12").find(".tech_collapse.collapse_view").toggleClass("visible");
resizeBlock_tech_specs()
});
$(document).on("click","#overview_collapse",function(){$("#overview .collapse_view").toggleClass("visible")
});
$(document).on("click","#collapse_features",function(){$(this).children("span").html("collapse features");
$(".hidden_features").show()
});
$(document).on("click","#collapse_features.expanded",function(){$(this).children("span").html("see all features");
$(".hidden_features").hide()
});
$(document).on("click",".price_display_dynamic",function(){var c=$(this).data("randomid");
var b=$(this).data("colltext");
var a=$(this).data("exptext");
$(this).addClass("expanded");
$(this).children("span").html(b);
$(this).children("i").removeClass("fa-arrow-circle-down");
$(this).children("i").addClass("fa-arrow-circle-up");
$(this).parent().parent().children(".hidden-pricing").show()
});
$(document).on("click",".price_display_dynamic.expanded",function(){var c=$(this).data("randomid");
var b=$(this).data("colltext");
var a=$(this).data("exptext");
$(this).removeClass("expanded");
$(this).children("span").html(a);
$(this).children("i").removeClass("fa-arrow-circle-up");
$(this).children("i").addClass("fa-arrow-circle-down");
$(this).parent().parent().children(".hidden-pricing").hide()
});
$(document).on("mouseenter",".module .share a",function(){$(this).next().show()
});
$(document).on("mouseleave",".module .share",function(){$(this).children(".share-tip").hide()
});
function resizeBlock_tech_specs(){$(".tech_center_box").removeAttr("style");
var a="";
$(".right-border").each(function(){var d=$(this).find(".tech_center_box").height();
var c=$(this).prev().find(".tech_center_box").height();
var b=$(this).next().find(".tech_center_box").height();
a=Math.max(d,c,b);
$(this).find(".tech_center_box").css("height",a+5);
$(this).prev().find(".tech_center_box").css("height",a+5);
$(this).next().find(".tech_center_box").css("height",a+5)
})
}resizeBlock_tech_specs();
$(document).ready(function(){resizeBlock_tech_specs()
});
$(window).resize(function(){moduleHeight();
resizeBlock_tech_specs();
setTimeout(moduleHeight,50);
if(window.innerWidth>992){combinationCard()
}if(window.innerWidth>801){if(!$(".secondary-nav").length>0){$(".content-container").removeAttr("style")
}}else{if(window.innerWidth<801){if(!$(".secondary-nav").length>0){$(".content-container").css("margin-top",$(".sidebar").outerHeight())
}}}});
function moduleHeight(){$(".module").removeAttr("style");
var b=new Array();
var a="";
$(".module").each(function(){b.push($(this).outerHeight())
});
a=Math.max.apply(Math,b);
$(".module").css("height",a+20);
$(".miniverticalcontentcontainer .section.target.parbase").css("height",a+35)
}moduleHeight();
$(document).ready(function(){moduleHeight();
if(window.innerWidth<801){if(!$(".secondary-nav").length>0){$(".content-container").css("margin-top",$(".sidebar").outerHeight())
}}$(".two_col_exp_col").addClass("collapsed");
$(document).on("click",".two_col_exp_col_aTag",function(){var d=$(this).parent().data("exp_txt");
var b=$(this).parent().data("col_txt");
if($(this).parent().hasClass("collapsed")){$(this).parent().find("i").removeClass("fa-arrow-circle-down");
$(this).parent().find("i").addClass("fa-arrow-circle-up");
$(this).parent().find("span").text(b)
}else{$(this).parent().find("i").removeClass("fa-arrow-circle-up");
$(this).parent().find("i").addClass("fa-arrow-circle-down");
$(this).parent().find("span").text(d)
}$(this).parent().toggleClass("collapsed");
var c=$(this).parent().hasClass("collapsed");
$(this).parent().prev().find(".row").find(".hidden_part").removeClass("collapse_view");
if(c){$(this).parent().prev().find(".row").find(".hidden_part").addClass("collapse_view")
}$(this).parent().prev().find(".row").find(".hidden_part").find(".section").each(function(e){$(this).parent().removeClass("hidden");
$(this).parent().addClass("visible");
if(c){$(this).parent().removeClass("visible");
$(this).parent().addClass("hidden")
}});
resizeFunc();
$(".thumb-details").each(function(){$(this).children(".col-md-1").removeAttr("style");
$(this).children(".col-md-10").removeAttr("style");
var e=$(this).height();
$(this).children(".col-md-1").css("height",e);
$(this).children(".col-md-10").css("height",e)
})
});
var a=$("div.verticalContainer").data("minivercontainer");
if(a=="zero"){$("div[data-emptytext='Mini Vertical Content Card']").addClass("reset_hgt_to_zero")
}if($("#expand_collapse_collapse.collapse_content").hasClass("collapse_tables")){$(document).on("click",".span-heading-table.exp-col-container a",function(){var e=$(this).data("parent");
var c=e.split("#accordion");
var b=c[1];
var d=$(this).data("exptext");
$("#"+b+" .collapse_content span").html(d);
$("#"+b+" .collapse_content").removeClass("table_expanded");
$("#"+b+" .collapse_content").removeClass("expanded");
$("#"+b+" .collapse_content").addClass("collapse_tables");
$("#"+b+" .collapse_content i").attr("class","fa fa-arrow-circle-down")
})
}$(document).ready(function(){if($('[data-toggle="tooltip"]').length>0){$('[data-toggle="tooltip"]').tooltip()
}});
$("div>button.green").click(function(){var c=$(this).data("href");
var f=$(this).data("tgt");
var b=$(this).data("srcvalue");
if(b=="pageheader"||b=="stickysection"){if(!(c.endsWith(".html")||c.endsWith(".htm"))&&(c.startsWith("/content"))){if(c.startsWith("/content/dam")){c=c
}else{c=c+".html"
}}else{if((c.startsWith("http"))||(c.startsWith("https"))){c=c
}}if(f){window.location=c
}else{window.open(c)
}}else{var e=window.location.origin;
var d="";
if(f=="self"){d=e+c;
window.location.replace(d)
}else{d=c;
window.open(d,"_blank")
}}});
$(document).on("click",".price_display_dynamic",function(){var b=$(this).data("randomid");
$(".hidden_part"+b).toggleClass("collapse_view")
})
});
$(document).ready(function(){$("#footertext_year ul li:first-child").each(function(){var b=$(this).text();
var a=b.split(" ");
cpyyr=new Date();
x=cpyyr.getFullYear();
for(i=0;
i<a.length;
i++){if((!(a[i].indexOf("1")))||(!(a[i].indexOf("2")))||(!(a[i].indexOf("3")))){$(this).text(b.replace(a[i],x))
}}})
});
$(document).ready(function(){$(".exp_col_hide_show").addClass("collapsed_data");
var d=$(window).height();
var b=$(".content-container").height();
var c=$(".footer-container").height();
var a=d-c;
if(d<=600||d>=600){if($(window).width()<800||$(window).width()>800){$(".footer-container").css("position","relative")
}}});
$(document).on("click",".collapse_content_wid",function(){var b=$(this).data("randomincval");
var a=b-1000;
var c=$(this).data("collpseval");
$(this).addClass("expanded");
$(this).children("#exptext"+a).html(c);
$(this).children("i").removeClass("fa-arrow-circle-down");
$(this).children("i").addClass("fa-arrow-circle-up")
});
$(document).on("click",".collapse_content_wid.expanded",function(){var b=$(this).data("randomincval");
var a=b-1000;
var c=$(this).data("expval");
$(this).removeClass("expanded");
$(this).children("i").removeClass("fa-arrow-circle-up");
$(this).children("i").addClass("fa-arrow-circle-down");
$(this).children("#exptext"+a).html(c)
});
$(document).on("click","#overview_collapse_wid",function(){var b=$(this).data("randomincval");
var a=b-1000;
$("#"+a+" .collapse_view").toggleClass("visible")
});
$(document).on("click",".exp_col_hide_show",function(){var c=$(this).data("colltext");
var b=$(this).data("exptext");
var a=$(this).data("randomid");
$(this).removeClass("collapse_tables");
$(this).addClass("table_expanded");
$("#accordion"+a+" .panel-collapse.collapse").addClass("in");
$("#accordion"+a+' .panel-collapse:not(".in")').collapse("show");
$("#accordion"+a+" .panel-title.span-heading-table > a i").removeClass("fa-plus");
$("#accordion"+a+" .panel-title.span-heading-table > a i").addClass("fa-close");
if($(this).hasClass("collapsed_data")){$(this).children("span").html(c);
$(this).find("i").removeClass("fa fa-arrow-circle-down");
$(this).find("i").addClass("fa fa-arrow-circle-up");
$(".exp_col_hide_show").removeClass("collapsed_data")
}else{$(this).children("span").html(b);
$(this).find("i").removeClass("fa fa-arrow-circle-up");
$(this).find("i").addClass("fa fa-arrow-circle-down");
$(".exp_col_hide_show").addClass("collapsed_data")
}});
$(document).on("click",".table_expanded",function(){$(this).removeClass("table_expanded");
var d=$(this).data("colltext");
var b=$(this).data("exptext");
var a=$(this).data("randomid");
$("#accordion"+a+" .panel-title.span-heading-table > a i").removeClass("fa-close");
$("#accordion"+a+" .panel-title.span-heading-table > a i").addClass("fa-plus");
$(this).children("span").html(b);
$("#accordion"+a+" .panel-collapse.in").collapse("hide");
$(this).addClass("collapse_tables");
var c=$("#accordion"+a).offset().top-122;
$("html, body").animate({scrollTop:c},900)
});
$(document).on("click",".panel-title.span-heading-table > a",function(){if($(this).children("i").hasClass("fa-close")){$(this).children("i").removeClass("fa-close");
$(this).children("i").addClass("fa-plus")
}else{if($(this).children("i").hasClass("fa-plus")){var a=$(this).data("parent");
$(a+" .panel-title.span-heading-table > a i").removeClass("fa-close");
$(a+" .panel-title.span-heading-table > a i").addClass("fa-plus");
$(this).children("i").removeClass("fa-plus");
$(this).children("i").addClass("fa-close")
}}});
$(document).ready(function(){$(".faqAnsBox p a").append(' <i class="fa fa-angle-double-right inline"></i>');
$(".faqAnsBox ul li a").append(' <i class="fa fa-angle-double-right inline"></i>');
$(".faqAnsBox ol li a").append(' <i class="fa fa-angle-double-right inline"></i>');
$(".tech_inner_block a").append(' <i class="fa fa-angle-double-right inline"></i>')
});
$(document).on("click","#tech_specs_collapse",function(){var a=$(this).data("incrandomnumber");
var b=$(this).data("collapsetextts");
var c=a-1000;
$(this).addClass("expanded");
$(this).children("span").html(b);
$(this).children("i").removeClass("fa-arrow-circle-down");
$(this).children("i").addClass("fa-arrow-circle-up");
$("#tech_specs-containerDiv"+c+".tech_specs-container .collapse_view").toggleClass("visible")
});
$(document).on("click","#tech_specs_collapse.expanded",function(){var a=$(this).data("incrandomnumber");
var b=$(this).data("expandtextts");
var c=a-1000;
$(this).removeClass("expanded");
$(this).children("i").removeClass("fa-arrow-circle-up");
$(this).children("i").addClass("fa-arrow-circle-down");
$(this).children("span").html(b)
});
$(document).on("click","#overview_collapse_flc",function(){var b=$(this).data("collpseval");
var a=$(this).data("randomval");
$(this).addClass("expanded");
$(this).children("span").html(b);
$(this).children("i").removeClass("fa-arrow-circle-down");
$(this).children("i").addClass("fa-arrow-circle-up");
$("#features"+a+" .hidden_features").show()
});
$(document).on("click","#overview_collapse_flc.expanded",function(){var b=$(this).data("expval");
var a=$(this).data("randomval");
$(this).removeClass("expanded");
$(this).children("i").removeClass("fa-arrow-circle-up");
$(this).children("i").addClass("fa-arrow-circle-down");
$(this).children("span").html(b);
$("#features"+a+" .hidden_features").hide()
});
$(document).ready(function(){if(window.innerWidth>992){combinationCard()
}if(window.innerWidth<801){if(!$(".secondary-nav").length>0){$(".content-container").css("margin-top",$(".sidebar").outerHeight())
}}if($("div.supportList").length){$(".supportList .selectpicker").selectpicker("deselectAll")
}});
function combinationCard(){$(".module_container").each(function(){var a=$(this).outerHeight();
var d=$(this).children().children(".img-left").outerHeight();
var c=$(this).children(".content-wrapper").outerHeight();
var b=a-d;
if(c>d){$(this).children().children(".img-left").css("margin-top",b/2)
}})
}$(window).load(function(){$(".supportList select.selectpicker").children("option").each(function(c){var b=0;
var a=$(this).val();
b=c-1;
$(".supportList .bootstrap-select.btn-group .dropdown-menu li a").eq(b).attr("href",a)
});
$(document).on("click",".supportList .bootstrap-select.btn-group .dropdown-menu li",function(){var a=$(this).children("a").attr("href");
document.location=a
})
});
$(document).ready(function(){$("body").hover(function(){$(".nav>li>a").blur()
},function(){})
});
$(document).on("click","#close_video",function(){$(".overlay-brightcove, .modal1").hide();
$(".getVideo object").remove();
$(".getVideo iframe").remove()
});
$(document).ready(function(){$(".customerBanner").parents(".section").children("*").css("transition","none")
});
$(document).on("click",".collapse_content",function(){if(!$(this).hasClass("expanded")&&!$(this).hasClass("table_expanded")){$(this).parents(".section").css({"float":"left",width:"100%"})
}else{if($(this).hasClass("expanded")){$(this).parents(".section").removeAttr("style")
}else{if($(this).hasClass("table_expanded")){$(this).parents(".section").removeAttr("style")
}}}});
function tableInnerHeight(){$(".table-colspan").each(function(){$(this).find(".colspan-cells").removeAttr("style");
$(this).find(".colspan-cells p").removeAttr("style");
var d=new Array();
var c="";
$(this).find(".colspan-cells").each(function(){d.push($(this).outerHeight())
});
c=Math.max.apply(Math,d);
$(this).find(".colspan-cells").css("height",c);
var a=$(this).find(".colspan-cells:first p:first").outerHeight();
var b=$(this).find(".colspan-cells:first p:last").outerHeight();
$(this).find(".colspan-cells:last p:first").css("height",a);
$(this).find(".colspan-cells:last p:last").css("height",b)
})
}function ImageLargeView(a){var b=$(a).attr("largeimagename");
if(b!=undefined&&b!=""){$(".getImage").show();
$(".getImage").html("<img src="+b+" />");
$(".imgnewtab").show();
$(".imgnewtab").attr("href",b);
setModal1MaxHeight();
$(".modal1, .overlay-brightcove").show()
}}function setModal1MaxHeight(){if($(".getImage img").length){var a=$(window).height();
var b=0;
if(a<450){b=a-100
}else{b=500
}$(".outer-container").css({"overflow-y":"auto",height:"auto","padding-bottom":"0px","max-height":b+"px"})
}}$(window).resize(function(){resizeBlock_tech_specs();
tableInnerHeight();
setTimeout(moduleHeight,50);
if(window.innerWidth>992){combinationCard()
}if(window.innerWidth>801){if(!$(".secondary-nav").length>0){$(".content-container").removeAttr("style")
}}else{if(window.innerWidth<801){if(!$(".secondary-nav").length>0){$(".content-container").css("margin-top",$(".sidebar").outerHeight())
}}}setModal1MaxHeight()
});
$(document).ready(function(){$(".detail-content").each(function(){if($(this).find("h3").length<1&&$(this).parent(".col-md-10").find(".cta_module").length<1){$(this).addClass("singlePara")
}else{if($(this).find("p").length<1&&$(this).parent(".col-md-10").find(".cta_module").length<1){$(this).addClass("singleHeading")
}else{if($(this).find("h3").length<1){$(this).addClass("onlyPara")
}else{if($(this).find("p").length<1){$(this).addClass("onlyHeading")
}else{if($(this).parent(".col-md-10").find(".cta_module").length<1&&$(this).parent(".col-md-10").parent(".social-block").find(".social-block").length<1){$(this).addClass("onlyContent")
}}}}}});
$(document).on("click","i.detail-toggle.fa-bars",function(){$(this).removeClass("fa-bars");
$(this).addClass("fa-times");
$(this).parent().parent(".thumb-details").addClass("rollover");
$(this).parent().parent(".thumb-details").children(".col-md-10").children(".detail-content").children(".clampingDetail").children("span").removeClass("asianLang");
setTimeout(function(){$(".rollover").children(".col-md-10").children(".detail-content").children(".clampingDetail").css("max-height","100%");
$(".rollover").children(".col-md-10").children(".detail-content").children("p:not(:first)").show()
},250)
});
$(document).on("click","i.detail-toggle.fa-times",function(){var e=$(this);
b(e);
$(this).removeClass("fa-times");
$(this).addClass("fa-bars");
$(this).removeAttr("style");
$(this).parent().parent(".thumb-details").removeClass("rollover");
if($(this).parent().parent(".thumb-details").parent(".thumb-container").hasClass("singleLineEllipse")){$(this).parent().parent(".thumb-details").children(".col-md-10").children(".detail-content").children(".clampingDetail").children("span").addClass("asianLang")
}$(this).parent().parent(".thumb-details").children(".col-md-10").children(".detail-content").children("p:not(:first)").hide()
});
function c(){$(this).children(".col-md-1").removeAttr("style");
$(this).children(".col-md-10").removeAttr("style");
$(".thumb-details").each(function(){if(!$(this).hasClass("rollover")){$(this).children(".col-md-1").removeAttr("style");
$(this).children(".col-md-10").removeAttr("style");
var e=$(this).height();
$(this).children(".col-md-1").css("height",e);
$(this).children(".col-md-10").css("height",e)
}})
}c();
function b(g){var f=2*(parseInt((g.parent().parent(".thumb-details").children(".col-md-10").children(".detail-content").children("h3").css("line-height"))))+"px";
var e=2*(parseInt((g.parent().parent(".thumb-details").children(".col-md-10").children(".detail-content").children("p").css("line-height"))))+"px";
g.parent().parent(".thumb-details").children(".col-md-10").children(".detail-content").children("h3.clampingDetail").css("max-height",f);
g.parent().parent(".thumb-details").children(".col-md-10").children(".detail-content").children("p.clampingDetail").css("max-height",e)
}function a(){$(".thumb-details").each(function(){if(!$(this).parent(".thumb-container").hasClass("singleLineEllipse")){if(!$(this).hasClass("rollover")){var f=2*(parseInt(($(this).children(".col-md-10").children(".detail-content").children("h3").css("line-height"))))+"px";
var e=2*(parseInt(($(this).children(".col-md-10").children(".detail-content").children("p").css("line-height"))))+"px";
$(this).children(".col-md-10").children(".detail-content").children("h3.clampingDetail").css("max-height",f);
$(this).children(".col-md-10").children(".detail-content").children("p.clampingDetail").css("max-height",e)
}}})
}window.getlineHeightAsian=function(){$(".thumb-details").each(function(){if($(this).parent(".thumb-container").hasClass("singleLineEllipse")){if(!$(this).hasClass("rollover")){$(this).children(".col-md-10").children(".detail-content").children("h3.clampingDetail").css("max-height",$(this).children(".col-md-10").children(".detail-content").children("h3").css("line-height"));
$(this).children(".col-md-10").children(".detail-content").children("p.clampingDetail").css("max-height",$(this).children(".col-md-10").children(".detail-content").children("p").css("line-height"))
}}});
$(".clampingDetail").each(function(){if($(this).parent(".detail-content").parent(".col-md-10").parent(".thumb-details").parent(".thumb-container").hasClass("singleLineEllipse")){$(this).find("span").removeAttr("style");
var h=$(this).parent(".detail-content").parent(".col-md-10").parent(".thumb-details").parent(".thumb-container").children(".thumb-img").width();
var e=$(this).parent(".detail-content").parent(".col-md-10").prev(".col-md-1").children("i").width()+$(this).parent(".detail-content").parent(".col-md-10").next(".col-md-1.cntClk").children("i").width()+80;
var g=h-e;
var f=$(this).parent(".detail-content").children("h3").children("span").eq(0).innerWidth();
var j=$(this).parent(".detail-content").children("p").children("span").eq(0).innerWidth();
if(g<f){$(this).parent(".detail-content").parents(".thumb-details").addClass("showHam")
}if(g<j){$(this).parent(".detail-content").parents(".thumb-details").addClass("showHam")
}if($(this).parent(".detail-content").find("p").length>1||$(this).parent(".detail-content").find("p").children("span").length>1||$(this).parent(".detail-content").find("h3").children("span").length>1){$(this).parent(".detail-content").parents(".thumb-details").addClass("showHam")
}$(this).find("span").css("width",g);
if($(this).children("span").eq(0).is(":empty")){$(this).children("span").eq(1).addClass("addEllipsis").show()
}}})
};
window.addEventListener("resize",a);
function d(){$(".thumb-details").each(function(){if($(this).hasClass("rollover")){$(this).children(".cntClk").children(".detail-toggle").css("display","inline-block")
}})
}d();
window.addEventListener("resize",d);
$(window).resize(function(){var f=window.navigator.userAgent;
var e=f.indexOf("MSIE ");
if(e>0||!!navigator.userAgent.match(/Trident.*rv\:11\./)){var g=$(".thumb-img > a img").first();
$(".thumb-img > a img").remove();
$(".thumb-img > a").append(g)
}setTimeout(function(){getlineHeightAsian()
},400);
setTimeout(function(){c()
},400)
})
});
$(window).load(function(){setTimeout(function(){getlineHeightAsian()
},400);
$(".thumb-details").each(function(){if($(this).parent(".thumb-container").hasClass("singleLineEllipse")){if(!$(this).hasClass("rollover")){$(this).children(".col-md-1").removeAttr("style");
$(this).children(".col-md-10").removeAttr("style");
var a=$(this).height();
$(this).children(".col-md-1").css("height",a);
$(this).children(".col-md-10").css("height",a)
}}})
});
$(document).ready(function(){var a="";
$(".faq_ans").hide();
$(document).on("click",".faq_block",function(){if(!$(this).hasClass("noFade")){if(!$(this).hasClass("openState")){$(".faq_block").removeClass("selected");
$(this).addClass("selected");
a=$(this).next("div.faqAnsBox").html();
if($(".appenddiv")!=null){$(".appenddiv").remove();
if(window.innerWidth<993){$(this).parent(".col-md-6").append("<div class='col-md-12 appenddiv'><div class='openState faq_ans'> "+a+"</div></div>")
}else{$(this).parent().parent(".row").append("<div class='col-md-12 appenddiv'><div class='openState faq_ans'> "+a+"</div></div>")
}}else{if(window.innerWidth<993){$(this).parent().next().append("<div class='col-md-12 appenddiv'><div class='openState faq_ans'> "+a+"</div></div>")
}else{$(this).parent().parent(".row").append("<div class='col-md-12 appenddiv'><div class='openState faq_ans'> "+a+"</div></div>")
}}}}});
$(document).on("click","#remove",function(){$(this).parent(".faq_ans").remove();
$(".faq_block").removeClass("selected")
});
$(window).on("resize",function(){$(".faq_block.selected").click()
})
});
$(document).ready(function(){$(".thumb-container .detail-content").each(function(){if(!$(this).hasClass("noclamp")){$(this).find("p").addClass("clampingDetail");
$(this).find("p:not(:first)").hide()
}else{$(this).find("p").addClass("noclampingDetail")
}})
});
if(!Function.prototype.bind){Function.prototype.bind=function(a){if(typeof this!=="function"){throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")
}var e=Array.prototype.slice.call(arguments,1),d=this,b=function(){},c=function(){return d.apply(this instanceof b&&a?this:a,e.concat(Array.prototype.slice.call(arguments)))
};
b.prototype=this.prototype;
c.prototype=new b();
return c
}
}(function(n,l){var h,a,p,k,j,r,t,s,m,g,c=l.createElement.bind(l),f=l.createTextNode.bind(l),b,e,o;
a=c("span");
(function(d){d.position="absolute";
d.whiteSpace="pre";
d.visibility="hidden"
})(a.style);
b=c("span");
e=c("span");
e.style.display="block";
e.style.overflow="hidden";
e.appendChild(f("\u2060"));
h=function(v,u,w){var d;
if(!v.ownerDocument||!v.ownerDocument===l){return
}j=t=0;
r=1;
g=false;
k=[];
p=(v.textContent||v.innerText).replace(/\n/g," ");
for(d=1;
d<u;
d++){o=e.cloneNode(true);
b.appendChild(o);
if(d===1){e.style.textIndent=0
}}e.style.textIndent="";
o=void 0;
while(v.firstChild){v.removeChild(v.firstChild)
}v.appendChild(b);
for(d=0;
d<u-1;
d++){k.push(b.childNodes[d].clientWidth)
}v.removeChild(b);
while(b.firstChild){b.removeChild(b.firstChild)
}v.appendChild(a);
p.replace(/ /g,function(y,z){if(r===u){return
}a.appendChild(f(p.substr(j,z-j)));
if(w-20<=a.clientWidth){if(g){m=p.substr(j,z+1-j);
j=z+1
}else{m=p.substr(j,t-j);
j=t
}s=c("span");
s.appendChild(f(m));
v.appendChild(s);
g=true;
r++
}else{g=false
}t=z+1;
a.removeChild(a.firstChild)
});
v.removeChild(a);
s=c("span");
if(r===u){(function(y){y.overflow="hidden";
y.width="100%"
})(s.style)
}s.appendChild(f(p.substr(j)));
v.appendChild(s)
};
n.clamp=h
})(window,window.document);
var clampingWidth="";
window.loadClamp=function(a){var b="";
$(".clampingDetail").each(function(){$(this).attr("data-id","randomId"+Math.floor((Math.random()*10000)+1));
b=$(this).attr("data-id");
if($(window).innerWidth()>1260){clampingWidth=$(this).innerWidth()-55
}else{clampingWidth=$(this).innerWidth()
}clamp($(".clampingDetail[data-id='"+b+"']")[0],3,clampingWidth);
if($("html").attr("lang")=="ja"||$("html").attr("lang")=="ja-JP"||$("html").attr("lang")=="zh_CN"||$("html").attr("lang")=="zh-CN"||$("html").attr("lang")=="ko"||$("html").attr("lang")=="ko-KR"){$(".thumb-container").each(function(){$(this).addClass("singleLineEllipse")
});
if(!$(this).parent().parent().parent(".thumb-details").hasClass("rollover")){$(this).parent().children("h3").eq(0).children("span").addClass("asianLang");
$(this).parent().children("p").eq(0).children("span").addClass("asianLang")
}$(".addEllipsis").each(function(){if($(this).html()==""){$(this).addClass("blankSpan")
}});
if($(this).children("span").length>1){$(this).parent(".detail-content").parents(".thumb-details").addClass("showHam");
$(this).children("span").eq(0).addClass("addEllipsis")
}}else{if($(this).children("span").length>2){$(this).parent(".detail-content").parents(".thumb-details").addClass("showHam");
$(this).children("span").eq(1).addClass("addEllipsis")
}else{if($(this).parent().find("p").length>1){if($(this).parent().children("p").eq(0).find("span").length>1){$(this).parent().children("p").eq(0).children("span").eq(1).addClass("addEllipsis")
}else{$(this).parent().children("p").eq(0).children("span").eq(0).addClass("addEllipsis")
}}else{$(this).parent(".detail-content").parents(".thumb-details").removeClass("addEllipsis")
}}}})
};
$(function(){window.showHamBurger=function(){$(".thumb-details .col-md-10 .clampingDetail").each(function(){if($(this).parent().find("h3").find("span").hasClass("addEllipsis")){$(this).parent(".detail-content").parents(".thumb-details").addClass("showHam")
}else{if($(this).parent().find("p").find("span").hasClass("addEllipsis")){$(this).parent(".detail-content").parents(".thumb-details").addClass("showHam")
}else{$(this).parent(".detail-content").parents(".thumb-details").removeClass("showHam")
}}})
};
$(".collapse_content").on("click",function(){$(".hidden_clamp").toggle();
resizeFunc();
$(".thumb-details").each(function(){$(this).children(".col-md-1").removeAttr("style");
$(this).children(".col-md-10").removeAttr("style");
var b=$(this).height();
$(this).children(".col-md-1").css("height",b);
$(this).children(".col-md-10").css("height",b)
})
});
var a;
window.resizeFunc=function(){var b="";
b=$(this).attr("data-id");
loadClamp(b);
showHamBurger()
};
resizeFunc();
$(window).resize(function(){setTimeout(function(){resizeFunc()
},300)
})
});
function setStartUrl(){startURLst=window.location.search.substring(1);
document.getElementById("startURL").value=startURLst
}function validateLogin(){var a=$("#login");
if(a.length){a.on("submit",function(e){var h=$(".errMsg"),g=$("#username"),c=$("#password");
h.html("");
var j=$.trim(g.val()),f=$.trim(g.attr("placeholder")),d=$.trim(c.val()),b=$.trim(c.attr("placeholder"));
if(j==""||j==f||d==""||d==b){if(j==""||j==f){h.append('<p class="user">Invalid User Name.<br/>Please enter your company email</p>')
}else{h.find(".user").remove()
}if(d==""||d==b){h.append('<p class="pass">Please enter password</p>')
}else{h.find(".pass").remove()
}return false
}else{self.setStartUrl();
return true
}})
}}var owl;
