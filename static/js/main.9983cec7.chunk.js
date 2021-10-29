(this["webpackJsonpassignment-1"]=this["webpackJsonpassignment-1"]||[]).push([[0],{31:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var r,c,i,a,s,j,o,b,d=t(1),l=t.n(d),p=t(22),u=t.n(p),O=(t(31),t(2)),x=t(17),h=t(8),f=t(3),v=t(4),m=t(5),g=t(7),y=t(6),k=t(0),w=f.a.div(r||(r=Object(O.a)(["\n  border: 1px solid #121212;\n  margin: 20px 0px;\n"]))),C=f.a.div(c||(c=Object(O.a)(["\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n"]))),z=f.a.div(i||(i=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 20px;\n  font-size: 1.3rem;\n"]))),D=f.a.div(a||(a=Object(O.a)(["\n  padding: 25px;\n  display: flex;\n  align-items: center;\n"]))),T=f.a.table(s||(s=Object(O.a)([""]))),E=function(e){Object(g.a)(t,e);var n=Object(y.a)(t);function t(){return Object(v.a)(this,t),n.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return Object(k.jsxs)(w,{children:[Object(k.jsx)(z,{children:this.props.title}),Object(k.jsxs)(C,{children:[Object(k.jsx)(D,{children:this.props.component}),Object(k.jsxs)(T,{children:[Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{children:"Prop"}),Object(k.jsx)("th",{children:"Description"}),Object(k.jsx)("th",{children:"Type"}),Object(k.jsx)("th",{children:"Default value"})]}),this.props.propDocs.map((function(e){return Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{children:e.prop}),Object(k.jsx)("td",{children:e.description}),Object(k.jsx)("td",{children:e.type}),Object(k.jsx)("td",{children:Object(k.jsx)("code",{children:e.defaultValue})})]})}))]})]})]})}}]),t}(l.a.Component),S=E,I={small:10,medium:14,large:20},R=f.a.div(j||(j=Object(O.a)(["\n  animation: spin 1.5s linear infinite;\n\n  @-moz-keyframes spin {\n    100% {\n      -moz-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n"]))),M=f.a.span(o||(o=Object(O.a)(["\n  display: block;\n  width: ","px;\n  height: ","px;\n  background-color: ",";\n  border-radius: 100%;\n  transform: scale(0.75);\n  transform-origin: 50% 50%;\n  opacity: 0.3;\n  animation: wobble 1s ease-in-out infinite;\n\n  @keyframes wobble {\n    0% {\n      border-radius: 25%;\n    }\n    100% {\n      border-radius: 100%;\n    }\n  }\n"])),(function(e){return e.size}),(function(e){return e.size}),(function(e){return e.color})),P=f.a.div(b||(b=Object(O.a)(["\n  display: flex;\n"]))),L=function(e){Object(g.a)(t,e);var n=Object(y.a)(t);function t(){return Object(v.a)(this,t),n.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=I[this.props.size],n=this.props.color;return Object(k.jsxs)(R,{children:[Object(k.jsxs)(P,{children:[Object(k.jsx)(M,{size:e,color:n}),Object(k.jsx)(M,{size:e,color:n})]}),Object(k.jsxs)(P,{children:[Object(k.jsx)(M,{size:e,color:n}),Object(k.jsx)(M,{size:e,color:n})]})]})}}]),t}(l.a.Component);L.defaultProps={size:"medium",color:"#ffa2bf"};var N,U=L,V=f.a.button(N||(N=Object(O.a)(["\n  flex: 1 25%;\n  font-weight: 100;\n  background-color: #ef233c;\n  height: ",";\n  width: ",";\n  font-size: 1.25em;\n  color: #edf2f4;\n  line-height: 100px;\n  padding: 5px 15px;\n  border-radius: 100px;\n  border: 2px solid #edf2f4;\n  outline: 0;\n  text-transform: uppercase;\n  text-align: center;\n  margin: 10px;\n  cursor: pointer;\n  transition: ease background-color 100ms;\n  &:hover {\n    background-color: #d90429;\n  }\n  &:disabled {\n    cursor: default;\n    opacity: 0.7;\n  }\n"])),(function(e){return e.height}),(function(e){return e.width}));V.defaultProps={height:"125px",width:"125px"};var J,B=function(e){Object(g.a)(t,e);var n=Object(y.a)(t);function t(){return Object(v.a)(this,t),n.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return Object(k.jsx)(V,{children:this.props.value})}}]),t}(d.Component),K=B,W=f.a.h1(J||(J=Object(O.a)(['\n  color: #edf2f4;\n  font-family: "Lato", sans-serif;\n  font-weight: 800;\n  font-size: 3rem;\n  align-items: center;\n  margin: 1px;\n'])));W.defaultProps={value:0};var X,Y,q,A,F,G,H,Q,Z,$,_,ee,ne=function(e){Object(g.a)(t,e);var n=Object(y.a)(t);function t(){return Object(v.a)(this,t),n.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)("h1",{style:{color:"#edf2f4"},children:"ROUND"}),Object(k.jsx)(W,{children:this.props.value})]})}}]),t}(d.Component),te=ne,re=f.a.div(X||(X=Object(O.a)(["\n  width: 200px;\n  height: 200px;\n  border-radius: 200px;\n  background-color: rgba(0, 0, 0, 0.1);\n  border: 4px solid #edf2f4;\n  font-size: 48px;\n  color: #eeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n"]))),ce=function(e){Object(g.a)(t,e);var n=Object(y.a)(t);function t(){return Object(v.a)(this,t),n.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return Object(k.jsx)(re,{children:"00:00"})}}]),t}(d.Component),ie=ce,ae=f.a.input(Y||(Y=Object(O.a)(["\n  width: 100px;\n  height: 50px;\n  padding: 10px;\n  margin: 10px;\n  border: 2px solid #ef233c;\n  border-radius: 5px;\n  font-size: 40px;\n"]))),se=function(e){Object(g.a)(t,e);var n=Object(y.a)(t);function t(){return Object(v.a)(this,t),n.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return Object(k.jsx)("div",{children:Object(k.jsx)(ae,{})})}}]),t}(d.Component),je=se,oe=f.a.h1(q||(q=Object(O.a)(['\n  color: #edf2f4;\n  font-family: "Lato", sans-serif;\n  font-weight: 400;\n  font-size: 1.25rem;\n  align-items: center;\n  margin-bottom: 1px;\n']))),be=function(e){Object(g.a)(t,e);var n=Object(y.a)(t);function t(){return Object(v.a)(this,t),n.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return Object(k.jsx)("div",{children:Object(k.jsx)(oe,{children:this.props.value})})}}]),t}(d.Component),de=be,le=f.a.div(A||(A=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"]))),pe=f.a.div(F||(F=Object(O.a)(["\n  font-size: 2rem;\n"]))),ue=function(e){Object(g.a)(t,e);var n=Object(y.a)(t);function t(){return Object(v.a)(this,t),n.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return Object(k.jsx)(le,{children:Object(k.jsxs)("div",{children:[Object(k.jsx)(pe,{children:"Documentation"}),Object(k.jsx)(S,{title:"Loading spinner ",component:Object(k.jsx)(U,{}),propDocs:[{prop:"size",description:"Changes the size of the loading spinner",type:"string",defaultValue:"medium"}]}),Object(k.jsx)(S,{title:"Control button ",component:Object(k.jsx)(K,{}),propDocs:[{prop:"value",description:"Changes the text",type:"string"}]}),Object(k.jsx)(S,{title:"Control button ",component:Object(k.jsx)(K,{}),propDocs:[{prop:"value",description:"Changes the text",type:"string"}]}),Object(k.jsx)(S,{title:"Disply Rounds ",component:Object(k.jsx)(te,{}),propDocs:[{prop:"value",description:"Changes the number",type:"int",defaultValue:0}]}),Object(k.jsx)(S,{title:"Display time ",component:Object(k.jsx)(ie,{}),propDocs:[{prop:"value",description:"Changes the number",type:"int"}]}),Object(k.jsx)(S,{title:"Input ",component:Object(k.jsx)(je,{}),propDocs:[{prop:"null"}]}),Object(k.jsx)(S,{title:"Simple text ",component:Object(k.jsx)(de,{}),propDocs:[{prop:"null"}]})]})})}}]),t}(l.a.Component),Oe=ue,xe=f.a.div(G||(G=Object(O.a)(["\n  height: 90%;\n  width: 100%;\n  border: none;\n  background: #8d99ae;\n  padding: 20px;\n  text-align: center;\n"]))),he=function(e){Object(g.a)(t,e);var n=Object(y.a)(t);function t(){return Object(v.a)(this,t),n.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return Object(k.jsxs)(xe,{children:[Object(k.jsx)(ie,{}),Object(k.jsxs)("div",{children:[Object(k.jsx)(K,{value:"start"}),Object(k.jsx)(K,{value:"pause"})]})]})}}]),t}(l.a.Component),fe=he,ve=f.a.div(H||(H=Object(O.a)(["\n  height: 90%;\n  width: 100%;\n  border: none;\n  background: #8d99ae;\n  padding: 20px;\n  text-align: center;\n"]))),me=function(e){Object(g.a)(t,e);var n=Object(y.a)(t);function t(){return Object(v.a)(this,t),n.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return Object(k.jsxs)(ve,{children:[Object(k.jsx)(ie,{}),Object(k.jsxs)("div",{children:[Object(k.jsx)(K,{value:"start"}),Object(k.jsx)(K,{value:"pause"})]}),Object(k.jsx)(de,{value:"SET TIME"}),Object(k.jsx)(je,{})]})}}]),t}(l.a.Component),ge=me,ye=f.a.div(Q||(Q=Object(O.a)(["\n  height: 90%;\n  width: 100%;\n  border: none;\n  background: #8d99ae;\n  padding: 20px;\n  text-align: center;\n"]))),ke=function(e){Object(g.a)(t,e);var n=Object(y.a)(t);function t(){return Object(v.a)(this,t),n.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return Object(k.jsxs)(ye,{children:[Object(k.jsx)(ie,{}),Object(k.jsxs)("div",{children:[Object(k.jsx)(K,{value:"start"}),Object(k.jsx)(K,{value:"pause"})]}),Object(k.jsx)(te,{value:"0"}),Object(k.jsxs)("div",{children:[Object(k.jsx)(de,{value:"ROUNDS"}),Object(k.jsx)(je,{}),Object(k.jsx)(de,{value:"TIME"}),Object(k.jsx)(je,{})]})]})}}]),t}(l.a.Component),we=ke,Ce=f.a.div(Z||(Z=Object(O.a)(["\n  height: 90%;\n  width: 100%;\n  border: none;\n  background: #8d99ae;\n  padding: 20px;\n  text-align: center;\n"]))),ze=function(e){Object(g.a)(t,e);var n=Object(y.a)(t);function t(){return Object(v.a)(this,t),n.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return Object(k.jsxs)(Ce,{children:[Object(k.jsx)(ie,{}),Object(k.jsxs)("div",{children:[Object(k.jsx)(K,{value:"start"}),Object(k.jsx)(K,{value:"pause"})]}),Object(k.jsx)(te,{value:"0"}),Object(k.jsxs)("div",{children:[Object(k.jsx)(de,{value:"WORK TIME"}),Object(k.jsx)(je,{}),Object(k.jsx)(de,{value:"REST TIME"}),Object(k.jsx)(je,{}),Object(k.jsx)(de,{value:"ROUNDS"}),Object(k.jsx)(je,{})]})]})}}]),t}(l.a.Component),De=ze,Te=f.a.div($||($=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),Ee=f.a.div(_||(_=Object(O.a)(["\n  /* border: 1px solid gray;\n  padding: 20px;\n  margin: 10px;\n  font-size: 1.5rem; */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),Se=f.a.div(ee||(ee=Object(O.a)([""])));var Ie,Re=function(){var e=[{title:"Stopwatch",C:Object(k.jsx)(fe,{})},{title:"Countdown",C:Object(k.jsx)(ge,{})},{title:"XY",C:Object(k.jsx)(we,{})},{title:"Tabata",C:Object(k.jsx)(De,{})}];return Object(k.jsx)(Te,{children:e.map((function(e){return Object(k.jsxs)(Ee,{children:[Object(k.jsx)(Se,{children:e.title}),e.C]})}))})},Me=f.a.div(Ie||(Ie=Object(O.a)(["\n  background: #f0f6fb;\n  height: 100vh;\n  overflow: auto;\n"])));var Pe=function(){return Object(k.jsx)(Me,{children:Object(k.jsxs)(x.a,{children:[Object(k.jsx)("nav",{children:Object(k.jsxs)("ul",{children:[Object(k.jsx)("li",{children:Object(k.jsx)(x.b,{to:"/",children:"Timers"})}),Object(k.jsx)("li",{children:Object(k.jsx)(x.b,{to:"/docs",children:"Documentation"})})]})}),Object(k.jsxs)(h.c,{children:[Object(k.jsx)(h.a,{path:"/docs",children:Object(k.jsx)(Oe,{})}),Object(k.jsx)(h.a,{path:"/",children:Object(k.jsx)(Re,{})})]})]})})};u.a.render(Object(k.jsx)(l.a.StrictMode,{children:Object(k.jsx)(Pe,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.9983cec7.chunk.js.map