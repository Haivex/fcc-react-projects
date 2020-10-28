(this["webpackJsonppomodoro-clock"]=this["webpackJsonppomodoro-clock"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(3),r=n.n(i),o=(n(13),n(4)),c=n(5),l=n(1),h=n(7),m=n(6),u=(n(14),{breakLength:5,sessionLength:25,currentPhase:"Session",isPause:!0,timeToLeft:1500,displayedTime:"25:00"}),d=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state=u,a.reset=a.reset.bind(Object(l.a)(a)),a.sessionIncrement=a.sessionIncrement.bind(Object(l.a)(a)),a.sessionDecrement=a.sessionDecrement.bind(Object(l.a)(a)),a.breakIncrement=a.breakIncrement.bind(Object(l.a)(a)),a.breakDecrement=a.breakDecrement.bind(Object(l.a)(a)),a.startStop=a.startStop.bind(Object(l.a)(a)),a.changeDisplay=a.changeDisplay.bind(Object(l.a)(a)),a}return Object(c.a)(n,[{key:"reset",value:function(){this.audioBeep.pause(),this.audioBeep.currentTime=0,this.setState(u)}},{key:"sessionIncrement",value:function(){if(!(this.state.sessionLength>=60)){var e=this.state.sessionLength,t=e+1,n=(t<10?"0"+t:t)+":00";this.setState({sessionLength:e+1,displayedTime:n,timeToLeft:60*(e+1)})}}},{key:"sessionDecrement",value:function(){if(!(this.state.sessionLength<=1)){var e=this.state.sessionLength,t=e-1,n=(t<10?"0"+t:t)+":00";this.setState({sessionLength:e-1,displayedTime:n,timeToLeft:60*(e-1)})}}},{key:"playAlarm",value:function(){this.audioBeep.play()}},{key:"breakIncrement",value:function(){this.state.breakLength>=60||this.setState({breakLength:this.state.breakLength+1})}},{key:"breakDecrement",value:function(){this.state.breakLength<=1||this.setState({breakLength:this.state.breakLength-1})}},{key:"startStop",value:function(){this.setState({isPause:!this.state.isPause},this.changeTime())}},{key:"changeDisplay",value:function(){var e=this.state.timeToLeft,t=Math.trunc(e/60),n=e-60*t,a=(t<10?"0"+t:t)+":"+(n<10?"0"+n:n);this.setState({displayedTime:a}),0==e&&("Session"==this.state.currentPhase?this.setState({currentPhase:"Break",timeToLeft:60*this.state.breakLength+1}):this.setState({currentPhase:"Session",timeToLeft:60*this.state.sessionLength+1}),this.playAlarm())}},{key:"changeTime",value:function(){var e=this,t=setInterval((function(){if(e.state.isPause)clearInterval(t);else{var n=e.state.timeToLeft;e.setState({timeToLeft:n-1}),e.changeDisplay()}}),1e3)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{id:"pomodoro"},s.a.createElement("div",{id:"break-container"},s.a.createElement("label",{id:"break-label"},"Break Length"),s.a.createElement("button",{id:"break-increment",onClick:this.breakIncrement},"^"),s.a.createElement("span",{id:"break-length"},this.state.breakLength),s.a.createElement("button",{id:"break-decrement",onClick:this.breakDecrement},"v")),s.a.createElement("div",{id:"session-container"},s.a.createElement("label",{id:"session-label"},"Session Length"),s.a.createElement("button",{id:"session-increment",onClick:this.sessionIncrement},"^"),s.a.createElement("span",{id:"session-length"},this.state.sessionLength),s.a.createElement("button",{id:"session-decrement",onClick:this.sessionDecrement},"v")),s.a.createElement("div",{id:"timer"},s.a.createElement("label",{id:"timer-label"},this.state.currentPhase),s.a.createElement("span",{id:"time-left"},this.state.displayedTime)),s.a.createElement("div",{id:"controls"},s.a.createElement("button",{id:"start_stop",onClick:this.startStop},"Start/Stop"),s.a.createElement("button",{id:"reset",onClick:this.reset},"Reset"),s.a.createElement("audio",{id:"beep",preload:"auto",ref:function(t){e.audioBeep=t},type:"audio/mpeg",src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"})))}}]),n}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.6dc44c14.chunk.js.map