(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(25)},19:function(e,t,n){},21:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),u=(n(19),n(9)),s=n(8),l=n(1),i=n(2),m=n(4),d=n(3),p=n(5),b=function(e){var t=e.totalCounters;return console.log("NavBar - Rendered"),o.a.createElement("nav",{className:"navbar navbar-light bg-dark text-white"},o.a.createElement("div",{className:"container"},"Counter App","",o.a.createElement("span",{className:"badge badge-pill badge-primary "},t),o.a.createElement("a",{className:"navbar-brand",href:"#"})))},v=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.counter.value,this.props.counter.value}},{key:"componentWillUnmount",value:function(){console.log("Counter - Unmounted")}},{key:"render",value:function(){var e=this;return console.log("Counter - Rendered"),o.a.createElement("div",null,o.a.createElement("input",{placeholder:"Label name",type:"text"}),o.a.createElement("span",{className:this.getBadgeClasses()},this.formatCount()),o.a.createElement("button",{onClick:function(){return e.props.onIncrement(e.props.counter)},className:"btn btn-secondary btn-sm m-2"},"Increment"),o.a.createElement("button",{onClick:function(){return e.props.onRemove(e.props.counter.id)},className:"btn btn-danger btn-sm m-2"},"Remove"))}},{key:"getBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=0===this.props.counter.value?"warning":"success"}},{key:"formatCount",value:function(){var e=this.props.counter.value;return 0===e?"0":e}}]),t}(a.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;console.log("Counters - Rendered");var t=this.props,n=t.onAdd,a=t.onReset,r=t.counters,c=t.onRemove,u=t.onIncrement;return o.a.createElement("div",null,o.a.createElement("button",{onClick:a,className:"btn btn-warning btn-sm m-2"},"Reset All"),o.a.createElement("button",{onClick:function(){return e.props.onAdd(e.props.counters)},className:"btn btn-primary btn-sm m-2"},"Add Counter"),r.map(function(e){return o.a.createElement(v,{key:e.id,onRemove:c,onIncrement:u,onAdd:n,counter:e})}))}}]),t}(a.Component),h=(n(21),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).state={counters:[{id:1,value:0}]},e.onEnter=function(e){console.log("input submitted")},e.handleAdd=function(t){var n=e.state.counters;n.push({id:t+1,value:0}),e.setState({counters:n})},e.handleReset=function(){var t=e.state.counters.map(function(e){return e.value=0,e});e.setState({counters:t})},e.handleIncrement=function(t){var n=Object(s.a)(e.state.counters),a=n.indexOf(t);n[a]=Object(u.a)({},t),n[a].value++,e.setState({counters:n})},e.handleRemove=function(t){var n=e.state.counters.filter(function(e){return e.id!==t});e.setState({counters:n})},console.log("App - Constructor"),e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("App - Mounted")}},{key:"render",value:function(){return console.log("App - Rendered"),o.a.createElement(o.a.Fragment,null,o.a.createElement(b,{totalCounters:this.state.counters.filter(function(e){return e.value>0}).length}),o.a.createElement("main",{className:"container"},o.a.createElement(f,{counters:this.state.counters,onReset:this.handleReset,onIncrement:this.handleIncrement,onRemove:this.handleRemove,onAdd:this.handleAdd})))}}]),t}(a.Component)),g=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,26)).then(function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),r(e),c(e)})};n(23);c.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null))),g()}},[[10,3,2]]]);
//# sourceMappingURL=main.8ac05769.chunk.js.map