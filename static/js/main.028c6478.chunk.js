(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{11:function(e,t,n){e.exports=n(23)},23:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),l=n(3),c=n(1),o=n(2),u=n(10),a=n(9),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(a.a)(e),[{id:t.id,text:t.text,completed:!1}]);case"TOGGLE_TODO":return e.map((function(e){return e.id===t.id?Object(u.a)({},e,{completed:!e.completed}):e}));default:return e}},f=0,m="SHOW_ALL",s="SHOW_COMPLETED",E="SHOW_ACTIVE",p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}},v=Object(o.b)({todos:d,visibilityFilter:p}),b=function(e){var t=e.active,n=e.children,r=e.onClick;return i.a.createElement("button",{onClick:r,disabled:t,style:{marginLeft:"4px"}},n)},O=Object(c.b)((function(e,t){return{active:t.filter===e.visibilityFilter}}),(function(e,t){return{onClick:function(){return e({type:"SET_VISIBILITY_FILTER",filter:t.filter})}}}))(b),T=function(){return i.a.createElement("div",null,i.a.createElement("span",null,"Show: "),i.a.createElement(O,{filter:m},"All"),i.a.createElement(O,{filter:E},"Active"),i.a.createElement(O,{filter:s},"Completed"))},h=Object(c.b)()((function(e){var t,n=e.dispatch;return i.a.createElement("div",null,i.a.createElement("form",{onSubmit:function(e){var r;(e.preventDefault(),t.value.trim())&&(n((r=t.value,{type:"ADD_TODO",id:f++,text:r})),t.value="")}},i.a.createElement("input",{ref:function(e){return t=e}}),i.a.createElement("button",{type:"submit"},"Add Todo")))})),y=function(e){var t=e.onClick,n=e.completed,r=e.text;return i.a.createElement("li",{onClick:t,style:{textDecoration:n?"line-through":"none"}},r)},g=function(e){var t=e.todos,n=e.toggleTodo;return i.a.createElement("ul",null,t.map((function(e){return i.a.createElement(y,Object.assign({key:e.id},e,{onClick:function(){return n(e.id)}}))})))},I=function(e,t){switch(t){case m:return e;case s:return e.filter((function(e){return e.completed}));case E:return e.filter((function(e){return!e.completed}));default:throw new Error("Unknown filter: "+t)}},D=Object(c.b)((function(e){return{todos:I(e.todos,e.visibilityFilter)}}),(function(e){return{toggleTodo:function(t){return e(function(e){return{type:"TOGGLE_TODO",id:e}}(t))}}}))(g),_=function(){return i.a.createElement("div",null,i.a.createElement(h,null),i.a.createElement(D,null),i.a.createElement(T,null))},k=(n(22),Object(o.c)(v));Object(l.render)(i.a.createElement(c.a,{store:k},i.a.createElement(_,null)),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.028c6478.chunk.js.map