(this["webpackJsonpdemo-task"]=this["webpackJsonpdemo-task"]||[]).push([[0],{146:function(e,t,n){},450:function(e,t,n){"use strict";n.r(t);var c=n(1),a=(n(22),n(146),n(49)),r=n.n(a),s=n(142),o=n(63),i=n(90),l=n(13),j=n(61),d=n.n(j),u=n(2),b=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(u.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})};b.defaultProps={color:"steelbule"},b.prototype={text:d.a.string,color:d.a.string,onClick:d.a.func};var m=b,x=function(e){var t=e.title,n=e.onAdd,c=e.showAdd;return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("h1",{children:t}),Object(u.jsx)(m,{color:c?"red":"green",text:c?"Close":"Add",onClick:n})]})};x.defaultProps={title:"Task Tracers"};var h=x,O=n(141),p=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(u.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(u.jsxs)("h3",{children:[t.text," ",Object(u.jsx)(O.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(u.jsx)("p",{children:t.day})]})},f=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(u.jsx)(u.Fragment,{children:t.map((function(e){return Object(u.jsx)(p,{task:e,onDelete:n,onToggle:c},e.id)}))})},v=function(e){var t=e.onAdd,n=Object(c.useState)(""),a=Object(l.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)(""),i=Object(l.a)(o,2),j=i[0],d=i[1],b=Object(c.useState)(!1),m=Object(l.a)(b,2),x=m[0],h=m[1];return Object(u.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),r?(t({text:r,day:j,reminder:x}),s(""),d(""),h(!1)):alert("Please add a task")},children:[Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{children:"Task"}),Object(u.jsx)("input",{type:"text",placeholder:"Add Task",value:r,onChange:function(e){return s(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{children:"Day & Time"}),Object(u.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:j,onChange:function(e){return d(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-control form-control-check",children:[Object(u.jsx)("label",{children:"Set Reminder"}),Object(u.jsx)("input",{type:"checkbox",checked:x,value:x,onChange:function(e){return h(e.currentTarget.checked)}})]}),Object(u.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})};var g=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],j=Object(c.useState)([{id:1,text:"Doctors Appoinment",day:"Feb 5th at 2.30pm",reminder:!0},{id:2,text:"Meeting at School",day:"Feb 6th at 1.30pm",reminder:!0},{id:3,text:"Food Shopping",day:"Feb 5th at 2.30pm",reminder:!1}]),d=Object(l.a)(j,2),b=d[0],m=d[1],x=function(){var e=Object(i.a)(r.a.mark((function e(t){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=Math.floor(1e3*Math.random()+1),c=Object(o.a)({id:n},t),m([].concat(Object(s.a)(b),[c]));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m(b.filter((function(e){return e.id!==t})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(h,{onAdd:function(){return a(!n)},showAdd:n}),n&&Object(u.jsx)(v,{onAdd:x}),b.length>0?Object(u.jsx)(f,{tasks:b,onDelete:O,onToggle:function(e){m(b.map((function(t){return t.id===e?Object(o.a)(Object(o.a)({},t),{},{reminder:!t.reminder}):t})))}}):"No Task to Show"]})},k=n(48);var N=function(){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("nav",{style:{borderBottom:"solid 1px",paddingBottom:"1rem"},children:[Object(u.jsx)(k.b,{to:"/about",children:"About Us"})," |"," ",Object(u.jsx)(k.b,{to:"/contact",children:"Contanct"})]}),Object(u.jsx)(g,{})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,451)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},T=n(3),C=n(138),S=n.p+"static/media/ExpressNo1.a0551278.jpg";var A=function(){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"About Us"}),Object(u.jsxs)("div",{className:"about-items",children:[Object(u.jsx)("div",{className:"abt-img",children:Object(u.jsx)("img",{src:S,alt:"pic"})}),Object(u.jsx)("div",{className:"abt-txt",children:Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sapiente quis perspiciatis mollitia exercitationem voluptate aperiam quidem odio, esse eaque. Beatae iure similique magni consequatur aliquam odio rem non excepturi!"})})]})]})};var w=function(){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h3",{children:"Contact Us"}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{children:"Name"}),Object(u.jsx)("input",{type:"text",placeholder:"Name"})]}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{children:"Email"}),Object(u.jsx)("input",{type:"text",placeholder:"Email"})]}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{children:"Message"}),Object(u.jsx)("textarea",{name:"message",placeholder:"Type Your Message...",rows:"10",cols:"57"})]}),Object(u.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},D=document.getElementById("root");Object(C.a)(Object(u.jsx)(k.a,{children:Object(u.jsxs)(T.c,{children:[Object(u.jsx)(T.a,{path:"/",element:Object(u.jsx)(N,{})}),Object(u.jsx)(T.a,{path:"about",element:Object(u.jsx)(A,{})}),Object(u.jsx)(T.a,{path:"contact",element:Object(u.jsx)(w,{})})]})}),D),y()}},[[450,1,2]]]);
//# sourceMappingURL=main.b9f08c49.chunk.js.map