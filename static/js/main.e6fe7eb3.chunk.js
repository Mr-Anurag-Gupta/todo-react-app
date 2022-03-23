(this["webpackJsonptodo-react-app"]=this["webpackJsonptodo-react-app"]||[]).push([[0],{54:function(e,t,o){},61:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),d=o(23),s=o.n(d),l=(o(54),o(7)),i=o(8),c=o(14),r=o(11),h=o(12),u=o(66),b=o(67),j=o(45),p=o(70),m=o(44),O=o(32),C=o(2),f=function(e){Object(r.a)(o,e);var t=Object(h.a)(o);function o(e){var n;return Object(l.a)(this,o),(n=t.call(this,e)).state={label:""},n.handleChange=n.handleChange.bind(Object(c.a)(n)),n.handleClick=n.handleClick.bind(Object(c.a)(n)),n}return Object(i.a)(o,[{key:"handleChange",value:function(e){this.setState({label:e.target.value})}},{key:"handleClick",value:function(e){this.props.onAdd(this.state.label),this.setState({label:""})}},{key:"render",value:function(){return Object(C.jsxs)(p.a,{className:"mt-3",children:[Object(C.jsx)(m.a,{value:this.state.label,onChange:this.handleChange,placeholder:"Enter todo here...","aria-label":"Enter todo","aria-describedby":"add-button"}),Object(C.jsx)(O.a,{variant:"primary",id:"add-button",onClick:this.handleClick,children:"Add"})]})}}]),o}(n.Component),g=o(38),T=o(68),v=o(69),x=o(71),S=o(49);var k=function(e){function t(t){e.onTodoStatusChange(e.todo,t.target.checked)}function o(o){return Object(C.jsx)(v.a.Check,{inline:!0,type:"checkbox",className:o,label:e.todo.todo,checked:e.todo.isCompleted,onChange:t.bind(this)})}return Object(C.jsx)(x.a.Item,{children:e.todo.isCompleted?Object(C.jsxs)(C.Fragment,{children:[o("todoitem_completed"),Object(C.jsx)(O.a,{variant:"primary",className:"btn-sm",onClick:function(){e.onTodoDelete(e.todo)},children:Object(C.jsx)(S.a,{})})]}):o("")})},y=function(e){Object(r.a)(o,e);var t=Object(h.a)(o);function o(e){var n;return Object(l.a)(this,o),(n=t.call(this,e)).handleTodoStatusChange=n.handleTodoStatusChange.bind(Object(c.a)(n)),n.handleTodoDelete=n.handleTodoDelete.bind(Object(c.a)(n)),n}return Object(i.a)(o,[{key:"handleTodoStatusChange",value:function(e,t){this.props.onTodoStatusChange(e,t)}},{key:"handleTodoDelete",value:function(e){this.props.onTodoDelete(e)}},{key:"render",value:function(){var e=this;return Object(C.jsx)("div",{children:Object(C.jsxs)(T.a,{className:"mt-3",children:[Object(C.jsx)(g.a,{eventKey:"all",title:"all",className:"mt-3",children:this.props.todos.map((function(t,o){return Object(C.jsx)(k,{todo:t,onTodoStatusChange:e.handleTodoStatusChange.bind(e),onTodoDelete:e.handleTodoDelete.bind(e)},o.toString())}))}),Object(C.jsx)(g.a,{eventKey:"active",title:"active",className:"mt-3",children:this.props.todos.map((function(t,o){if(!1===t.isCompleted)return Object(C.jsx)(k,{todo:t,onTodoStatusChange:e.handleTodoStatusChange.bind(e),onTodoDelete:e.handleTodoDelete.bind(e)},o.toString())}))}),Object(C.jsx)(g.a,{eventKey:"completed",title:"completed",className:"mt-3",children:this.props.todos.map((function(t,o){if(!0===t.isCompleted)return Object(C.jsx)(k,{todo:t,onTodoStatusChange:e.handleTodoStatusChange.bind(e),onTodoDelete:e.handleTodoDelete.bind(e)},o.toString())}))})]})})}}]),o}(n.Component),D=[{todo:"Buys shirts",isCompleted:!0},{todo:"Visit uncle",isCompleted:!1},{todo:"Write a blog on sample react app",isCompleted:!1},{todo:"Practise coding on leetcode platform",isCompleted:!1},{todo:"Resume the learning on Asp.Net Core WebAPI/MVC",isCompleted:!1}],N=function(e){Object(r.a)(o,e);var t=Object(h.a)(o);function o(e){var n;return Object(l.a)(this,o),(n=t.call(this,e)).state={todos:D},n.handleAdd=n.handleAdd.bind(Object(c.a)(n)),n.handleTodoDelete=n.handleTodoDelete.bind(Object(c.a)(n)),n.handleTodoStatusChange=n.handleTodoStatusChange.bind(Object(c.a)(n)),n}return Object(i.a)(o,[{key:"handleAdd",value:function(e){var t={todo:e,isCompleted:!1};this.setState((function(e){return{todos:e.todos.concat(t)}}))}},{key:"handleTodoStatusChange",value:function(e,t){this.setState((function(o){return{todos:o.todos.map((function(o){return o.todo===e.todo&&(o.isCompleted=t),o}))}}))}},{key:"handleTodoDelete",value:function(e){var t=this.state.todos.filter((function(t){if(t.todo!==e.todo)return t}));this.setState({todos:t})}},{key:"render",value:function(){return Object(C.jsxs)(u.a,{className:"wrapper",children:[Object(C.jsx)(b.a,{children:Object(C.jsx)(j.a,{children:Object(C.jsx)("h2",{className:"text-center mt-3 todoapp__heading",children:"To-Do List"})})}),Object(C.jsx)(b.a,{children:Object(C.jsx)(j.a,{children:Object(C.jsx)(f,{onAdd:this.handleAdd})})}),Object(C.jsx)(b.a,{children:Object(C.jsx)(j.a,{children:Object(C.jsx)(y,{todos:this.state.todos,onTodoStatusChange:this.handleTodoStatusChange,onTodoDelete:this.handleTodoDelete})})})]})}}]),o}(n.Component);s.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(N,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.e6fe7eb3.chunk.js.map