(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(2),l=n.n(r),o=(n(12),n(3)),i=n(4),u=n(6),s=n(5),b=(n(13),function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={index:0},t.hendleClickTab=function(e){t.setState({index:+e.target.value})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.props.tabs,n=this.state.index;return c.a.createElement(c.a.Fragment,null,e.map((function(e,a){return c.a.createElement("button",{onClick:t.hendleClickTab,className:a===n?"tab tab--active":"tab",value:a,key:a},e.title)})),e.map((function(e,a){return c.a.createElement("div",{onClick:t.hendleClickTab,className:a===n?"content":"content--none",key:a},c.a.createElement("h3",null,e.content))})))}}]),n}(c.a.Component)),m=[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"}],h=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"React tabs"),c.a.createElement(b,{tabs:m}))};l.a.render(c.a.createElement(h,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.777e6617.chunk.js.map