(this["webpackJsonpformula-calculator"]=this["webpackJsonpformula-calculator"]||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(5),s=a.n(i),u=(a(16),a(6)),o=a(1),l=a.n(o),c=a(3),p=a(7),d=a(8),b=a(2),m=a(10),h=a(9),f=(a(18),{isFunction:!1,isZero:!0,isNumber:!0,isMinus:!1,isDot:!1,formulaValue:"0",displayValue:"0",prevOp:"",isEqual:!1}),v=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(p.a)(this,a),(r=t.call(this,e)).state=f,r.concatNumber=r.concatNumber.bind(Object(b.a)(r)),r.reset=r.reset.bind(Object(b.a)(r)),r.addOperation=r.addOperation.bind(Object(b.a)(r)),r.addDotToNumber=r.addDotToNumber.bind(Object(b.a)(r)),r.result=r.result.bind(Object(b.a)(r)),r}return Object(d.a)(a,[{key:"reset",value:function(){var e=Object(c.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState(f);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"concatNumber",value:function(){var e=Object(c.a)(l.a.mark((function e(t){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.target.innerText,!this.state.isZero){e.next=11;break}if("0"!==a){e.next=6;break}return e.next=5,this.setState({isZero:!0});case 5:return e.abrupt("return");case 6:if("0"!==this.state.displayValue){e.next=11;break}return r=this.state.formulaValue.slice(0,-1)+a,e.next=10,this.setState({displayValue:a,formulaValue:r,isZero:!1,isEqual:!1});case 10:return e.abrupt("return");case 11:if(!this.state.isFunction){e.next=16;break}return e.next=14,this.setState({isFunction:!1,displayValue:a,formulaValue:this.state.formulaValue+a,isNumber:!0,isEqual:!1,isMinus:!1,prevOp:""});case 14:e.next=18;break;case 16:return e.next=18,this.setState({isNumber:!0,isEqual:!1,isMinus:!1,displayValue:this.state.displayValue+a,formulaValue:this.state.formulaValue+a,prevOp:""});case 18:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"addDotToNumber",value:function(){var e=Object(c.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.isNumber){e.next=4;break}return e.next=3,this.setState({displayValue:"0.",formulaValue:this.state.formulaValue+"0.",isNumber:!0,isFunction:!1,isZero:!1,isMinus:!1,isDot:!0,prevOp:"",isEqual:!1});case 3:return e.abrupt("return");case 4:if(!this.state.isDot){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,this.setState({displayValue:this.state.displayValue+".",formulaValue:this.state.formulaValue+".",isEqual:!1,isNumber:!0,isFunction:!1,isZero:!1,isDot:!0,prevOp:""});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"addOperation",value:function(){var e=Object(c.a)(l.a.mark((function e(t){var a,r,n,i,s,u,o,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.target.value,r=this.state,n=r.displayValue,i=r.formulaValue,s=parseFloat(n),u=!1,isNaN(s)||(u=!0),!u){e.next=11;break}return e.next=8,this.setState({displayValue:a,formulaValue:i+a,isFunction:!0,isZero:!1,isNumber:!1,isDot:!1,isEqual:!1,prevOp:a});case 8:return e.abrupt("return");case 11:if(""!==this.state.prevOp){e.next=17;break}return e.next=14,this.setState({displayValue:a,formulaValue:this.state.formulaValue+a,prevOp:a,isEqual:!1});case 14:return e.abrupt("return");case 17:if("-"===this.state.prevOp||"-"!==a){e.next=23;break}return e.next=20,this.setState({displayValue:a,formulaValue:this.state.formulaValue+a,prevOp:a,isMinus:!0,isEqual:!1});case 20:return e.abrupt("return");case 23:if("-"===this.state.prevOp||"-"===a){e.next=30;break}return o=this.state.formulaValue.slice(0,-1)+a,e.next=27,this.setState({displayValue:a,formulaValue:o,prevOp:a,isEqual:!1});case 27:return e.abrupt("return");case 30:return c=this.state.formulaValue.slice(0,-2)+a,e.next=33,this.setState({displayValue:a,formulaValue:c,prevOp:a,isEqual:!1});case 33:return e.abrupt("return");case 34:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"result",value:function(){var e=Object(c.a)(l.a.mark((function e(){var t,a,r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state.formulaValue,!this.state.isEqual){e.next=5;break}return e.next=4,this.setState({isFunction:!1,isNumber:!0,isMinus:!1,isDot:!1,prevOp:""});case 4:return e.abrupt("return");case 5:for(this.state.displayValue.match(/[\-\*\:\+]/)&&(t=t.substring(0,t.length-1)),console.log(t),a=t.split(/([\-\*\:\+])/g),console.log(a),a=a.filter((function(e){return""!=e})),console.log(a),r=a.map((function(e){return isNaN(Number(e))?e:Number(e)}));-1!=r.indexOf("-")&&isNaN(Number(r[r.indexOf("-")-1]));)n=r.indexOf("-"),r.splice(r.indexOf("-"),1),r[n]=-1*r[n],console.log("Deleted and new:",r);return[":","*","-","+"].forEach((function(e){for(;-1!=r.indexOf(e);){var t=r.indexOf(e),a=void 0;switch(e){case":":a=r[t-1]/r[t+1];break;case"*":a=r[t-1]*r[t+1];break;case"-":a=r[t-1]-r[t+1];break;case"+":a=r[t-1]+r[t+1]}r.splice(t-1,3,a),console.log("Deleted sign",r)}})),r[0]=r[0]+"",e.next=18,this.setState(Object(u.a)({displayValue:r[0],formulaValue:r[0],isFunction:!1,isZero:"0"===r[0],prevOp:"",isEqual:!0,isNumber:!0,isMinus:!1,isDot:!1},"prevOp",""));case 18:console.log("Final",this.state.displayValue);case 19:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement("div",{id:"calculator"},n.a.createElement("span",{id:"formula"},this.state.formulaValue),n.a.createElement("span",{id:"display"},this.state.displayValue),n.a.createElement("button",{id:"clear",onClick:this.reset},"C"),n.a.createElement("button",{id:"equals",onClick:this.result},"="),n.a.createElement("button",{id:"zero",onClick:this.concatNumber},"0"),n.a.createElement("button",{id:"one",onClick:this.concatNumber},"1"),n.a.createElement("button",{id:"two",onClick:this.concatNumber},"2"),n.a.createElement("button",{id:"three",onClick:this.concatNumber},"3"),n.a.createElement("button",{id:"four",onClick:this.concatNumber},"4"),n.a.createElement("button",{id:"five",onClick:this.concatNumber},"5"),n.a.createElement("button",{id:"six",onClick:this.concatNumber},"6"),n.a.createElement("button",{id:"seven",onClick:this.concatNumber},"7"),n.a.createElement("button",{id:"eight",onClick:this.concatNumber},"8"),n.a.createElement("button",{id:"nine",onClick:this.concatNumber},"9"),n.a.createElement("button",{id:"add",value:"+",onClick:this.addOperation},"+"),n.a.createElement("button",{id:"subtract",value:"-",onClick:this.addOperation},"-"),n.a.createElement("button",{id:"multiply",value:"*",onClick:this.addOperation},"*"),n.a.createElement("button",{id:"divide",value:":",onClick:this.addOperation},":"),n.a.createElement("button",{id:"decimal",onClick:this.addDotToNumber},"."))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.c9f26e42.chunk.js.map