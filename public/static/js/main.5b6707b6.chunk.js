(this["webpackJsonpreact-rails-api-project-template-client"]=this["webpackJsonpreact-rails-api-project-template-client"]||[]).push([[0],{136:function(e,t,o){},149:function(e,t,o){},150:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o(52),a=o.n(r),c=(o(136),o(79),o(10)),i=o(22),s=o(187),l=o(196),d=o(8),h=o(13),j=o(192),u=o(190),b=o(197),m=o(1);function p(e){var t=e.loginAnchorEl,o=e.handleLoginClose,r=e.setUser,a=Boolean(t),i=a?"simple-popover":void 0,s=Object(n.useState)({username:"",password:""}),p=Object(c.a)(s,2),O=p[0],g=p[1];function x(e){g(Object(h.a)(Object(h.a)({},O),{},Object(d.a)({},e.target.name,e.target.value))),console.log(e.target.value)}return Object(m.jsx)("div",{children:Object(m.jsx)(j.a,{id:i,open:a,anchorReference:"anchorPosition",anchorPosition:{top:600,left:675},anchorEl:t,onClose:o,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:Object(m.jsxs)(b.a,{onSubmit:function(e){e.preventDefault(),console.log(e),fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(O)}).then((function(e){e.ok?e.json().then((function(e){return r(e)})):e.json().then((function(e){return console.error(e)}))}))},component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[Object(m.jsx)(u.a,{onChange:x,noerror:!0,type:"text",name:"username",value:O.username,id:"outlined-error-helper-text",label:"Username"}),Object(m.jsx)(u.a,{onChange:x,noerror:!0,type:"password",name:"password",value:O.password,id:"outlined-error-helper-text",label:"Password"}),Object(m.jsx)(l.a,{type:"submit",sx:{color:"#7C8988"},children:" Login "})]})})})}function O(e){var t=e.signUpAnchorEl,o=e.handleSignUpClose,r=e.setUser,a=Boolean(t),i=a?"simple-popover":void 0,s=Object(n.useState)({username:"",email:"",password:"",password_confirmation:""}),p=Object(c.a)(s,2),O=p[0],g=p[1];function x(e){g(Object(h.a)(Object(h.a)({},O),{},Object(d.a)({},e.target.name,e.target.value))),console.log(e.target.value)}return Object(m.jsx)("div",{children:Object(m.jsx)(j.a,{id:i,open:a,anchorReference:"anchorPosition",anchorPosition:{top:600,left:400},anchorEl:t,onClose:o,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:Object(m.jsxs)(b.a,{onSubmit:function(e){e.preventDefault(),console.log(e),fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(O)}).then((function(e){e.ok?e.json().then((function(e){r(e)})):e.json().then((function(e){console.error(e)}))}))},component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[Object(m.jsx)(u.a,{onChange:x,noerror:!0,type:"text",name:"username",value:O.username,id:"outlined-error-helper-text",label:"Username"}),Object(m.jsx)(u.a,{onChange:x,noerror:!0,type:"text",name:"email",value:O.email,id:"outlined-error-helper-text",label:"Email"}),Object(m.jsx)(u.a,{onChange:x,noerror:!0,type:"password",name:"password",value:O.password,id:"outlined-error-helper-text",label:"Password"}),Object(m.jsx)(u.a,{onChange:x,noerror:!0,type:"password",name:"password_confirmation",value:O.passwordConfirm,id:"outlined-error-helper-text",label:"Confirm Password"}),Object(m.jsx)(l.a,{type:"submit",sx:{color:"#7C8988"},children:" Sign Up "})]})})})}var g=o.p+"static/media/finalloginlogo.0705f858.gif";function x(e){var t=e.handleLoginClick,o=e.handleSignUpClick,n=e.setLoginAnchorEl,r=e.setSignUpAnchorEl,a=e.loginAnchorEl,c=e.setUser,i=e.signUpAnchorEl;return Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:g,width:"500",height:"500",style:{display:"block",margin:"0 auto",textAlign:"center"}}),Object(m.jsxs)(s.a,{spacing:3,direction:"row",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[Object(m.jsx)(l.a,{onClick:t,style:{backgroundColor:"#F8E9FE",color:"gray"},variant:"contained",children:"Login"}),Object(m.jsx)(l.a,{onClick:o,style:{backgroundColor:"#F8E9FE",color:"gray"},variant:"contained",children:"SignUp"})]}),Object(m.jsx)(p,{loginAnchorEl:a,handleLoginClose:function(){n(null)},setUser:c}),Object(m.jsx)(O,{signUpAnchorEl:i,handleSignUpClose:function(){r(null)},setUser:c})]})}var f=o(47),v=o(34),M=o(12),y=o(92),w=o(198),C=o(194),E=o(188),S=o(201),k=o(200);function P(e){var t=e.index,o=e.style,n=e.username,r=e.id;return Object(m.jsxs)("div",{children:[Object(m.jsx)(k.a,{}),Object(m.jsxs)(C.a,{style:o,component:"div",disablePadding:!0,children:[Object(m.jsx)(E.a,{children:Object(m.jsx)(S.a,{style:{color:"gray"},primary:n})}),Object(m.jsx)(l.a,{onClick:function(e){console.log("friend"),console.log(r),fetch("/friends",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({friendee_id:r})})},style:{paddingRight:"15px",color:"pink"},children:"Add Friend"})]},t)]})}function I(e){var t=e.searchAnchorEl,o=(e.setSearchAnchorEl,e.handleClose),n=e.searchedUsers.map((function(e){return Object(m.jsx)(P,{id:e.id,username:e.username})})),r=Boolean(t),a=r?"simple-popover":void 0;return Object(m.jsx)("div",{children:Object(m.jsx)(j.a,{id:a,open:r,anchorReference:"anchorPosition",anchorPosition:{top:820,left:5},anchorEl:t,onClose:o,anchorOrigin:{vertical:"top",horizontal:"left"},children:Object(m.jsx)(b.a,{style:{backgroundColor:"#7f8087"},sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:Object(m.jsx)(w.a,{style:{backgroundColor:"white",color:"white"},children:n})})})})}var z=Object(M.a)("div")((function(e){var t=e.theme;return Object(d.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(y.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(y.a)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"15%"})})),F=Object(M.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),A=Object(M.a)(v.c)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":Object(d.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function T(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),o=t[0],r=t[1],a=Object(n.useState)([]),i=Object(c.a)(a,2),s=i[0],l=i[1],d=Object(n.useState)(null),h=Object(c.a)(d,2),j=h[0],u=h[1];Object(n.useEffect)((function(){fetch("/users").then((function(e){return e.json()})).then((function(e){l(e)}))}),[]);var b=s.filter((function(e){return e.username.toLowerCase().includes(o.toLowerCase())}));return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{children:[Object(m.jsxs)(z,{value:o,onKeyDown:function(e){"Enter"===e.key&&u(e.currentTarget)},variant:"outlined",style:{color:"#F8E9FE",border:"1px solid #F8E9FE",position:"absolute",bottom:"20px"},onChange:function(e){return r(e.target.value)},children:[Object(m.jsx)(F,{}),Object(m.jsx)(A,{style:{color:"gray"},placeholder:"Find Friends...",inputProps:{"aria-label":"search"}})]}),Object(m.jsx)(I,{searchAnchorEl:j,setSearchAnchorEl:u,handleClose:function(){u(null)},searchedUsers:b})]})})}var L=o(199);function U(e){var t=e.scoreAnchorEl,o=e.handleClose,n=Boolean(t),r=n?"simple-popover":void 0;return Object(m.jsx)("div",{children:Object(m.jsx)(j.a,{id:r,open:n,anchorReference:"anchorPosition",anchorPosition:{top:875,left:725},anchorEl:t,onClose:o,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:Object(m.jsx)(L.a,{sx:{p:2},children:"The content of the Popover."})})})}function R(e){var t=e.index,o=e.username,r=e.id,a=e.score,i=Object(n.useState)(null),s=Object(c.a)(i,2),d=s[0],h=s[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)(k.a,{}),Object(m.jsxs)(C.a,{style:{backgroundColor:"white"},component:"div",disablePadding:!0,children:[Object(m.jsx)(E.a,{children:Object(m.jsx)(S.a,{style:{color:"gray"},primary:o,secondary:"Highscore ".concat(a)})}),Object(m.jsx)(l.a,{onClick:function(){console.log("unfriend"),console.log(r),fetch("/friends",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({friendee_id:r})})},style:{paddingRight:"15px",color:"#dd87dc"},children:"Unfriend"})]},t),Object(m.jsx)(U,{handleClose:function(){h(null)},scoreAnchorEl:d})]})}function B(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),o=t[0],r=t[1],a=Object(n.useState)(null),i=Object(c.a)(a,2),s=i[0],d=i[1];Object(n.useEffect)((function(){fetch("/friends").then((function(e){return e.json()})).then((function(e){r(e)}))}),[]);var h=o.map((function(e){return Object(m.jsx)(R,{id:e.id,username:e.friendee.username,score:e.friendee.scores.map((function(e){return e.score})).sort((function(e,t){return t-e}))[0]})})),u=Boolean(s),p=u?"simple-popover":void 0;return Object(m.jsxs)("div",{children:[Object(m.jsx)(j.a,{id:p,open:u,anchorReference:"anchorPosition",anchorPosition:{top:875,left:440},anchorEl:s,onClose:function(){d(null)},anchorOrigin:{vertical:"top",horizontal:"right"},children:Object(m.jsx)(b.a,{style:{backgroundColor:"#7f8087"},sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:Object(m.jsx)(w.a,{style:{backgroundColor:"white",color:"white"},children:h})})}),Object(m.jsx)(l.a,{onClick:function(e){d(e.currentTarget)},variant:"contained",style:{color:"gray",backgroundColor:"#F8E9FE",border:"1px solid #F8E9FE",textDecoration:"none",position:"absolute",bottom:"22px",left:"310px"},children:"My Friends"})]})}var N=o.p+"static/media/finalwelcome.fbcbf7ba.gif";function W(e){var t=e.setUser;e.user;return Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:N,width:"300",height:"300",style:{display:"block",margin:"0 auto",textAlign:"center"}}),Object(m.jsx)(s.a,{spacing:1,direction:"row",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(m.jsx)(l.a,{as:f.b,to:"/game",variant:"contained",style:{color:"gray",backgroundColor:"#F8E9FE",border:"1px solid #F8E9FE",textDecoration:"none"},children:"Start"})}),Object(m.jsx)(T,{}),Object(m.jsx)(B,{}),Object(m.jsx)(l.a,{onClick:function(e){console.log(e),fetch("/logout",{method:"DELETE"}).then((function(e){e.ok&&t(null)}))},variant:"contained",style:{color:"gray",backgroundColor:"#F8E9FE",border:"1px solid #F8E9FE",textDecoration:"none",position:"absolute",bottom:"20px",right:"20px"},children:"Logout"})]})}var G=o(29);var J=o(189);o(148),o(99);var D=o(2);function V(){var e=Object(n.useRef)();Object(G.c)((function(){e.current.position.z+=.8}));var t=Object(n.useState)((function(){for(var e=[],t=-50;t<50;t+=1)e.push(new D.Vector3(0,-3,t/4*1e4));return new D.CatmullRomCurve3(e)})),o=Object(c.a)(t,1)[0],r=Object(G.d)(D.TextureLoader,"https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/materials/normals/check_normal+y.jpg");return r.wrapS=D.RepeatWrapping,r.wrapT=D.RepeatWrapping,r.repeat.set(2e3,5),r.anisotropy=16,Object(m.jsxs)("mesh",{ref:e,children:[Object(m.jsx)("tubeGeometry",{args:[o,500,30,1e3,!0]}),Object(m.jsx)("meshStandardMaterial",{side:D.BackSide,map:r,metalness:1})]})}var Y=o(193),Z=Object(n.createContext)();function _(e){var t=e.children,o=Object(n.useState)(0),r=Object(c.a)(o,2),a=r[0],i=r[1];return Object(m.jsx)(Z.Provider,{value:{score:a,setScore:i},children:t})}var X=Object(n.createContext)();function Q(e){var t=e.children,o=Object(n.useState)([]),r=Object(c.a)(o,2),a=r[0],i=r[1];return Object(m.jsx)(X.Provider,{value:{userScores:a,setUserScores:i},children:t})}var H,K,q=o(30),$=o(117),ee=o(118),te=o.p+"static/media/bold.8c67ffdd.blob",oe=["children","vAlign","hAlign","size","color"];function ne(e){var t=e.children,o=e.vAlign,r=void 0===o?"center":o,a=e.hAlign,c=void 0===a?"center":a,i=e.size,s=void 0===i?1.5:i,l=(e.color,Object(q.a)(e,oe)),d=Object(G.d)($.a,te),j=Object(n.useMemo)((function(){return{font:d,size:40,height:30,curveSegments:32,bevelEnabled:!0,bevelThickness:6,bevelSize:2.5,bevelOffset:0,bevelSegments:8}}),[d]),u=Object(n.useRef)();return Object(n.useLayoutEffect)((function(){var e=new D.Vector3;u.current.geometry.computeBoundingBox(),u.current.geometry.boundingBox.getSize(e),u.current.position.x="center"===c?-e.x/2:"right"===c?0:-e.x,u.current.position.y="center"===r?-e.y/2:"top"===r?0:-e.y}),[t]),Object(m.jsx)("group",Object(h.a)(Object(h.a)({},l),{},{scale:[.1*s,.1*s,.1],children:Object(m.jsxs)("mesh",{ref:u,children:[Object(m.jsx)("textGeometry",{args:[t,j]}),Object(m.jsx)("meshNormalMaterial",{})]})}))}function re(e){var t=Object(n.useRef)(),o=Object(Y.a)("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/heart/model.gltf"),r=o.nodes,a=o.materials;return Object(G.c)((function(){t.current.position.z+=0})),Object(m.jsx)("group",Object(h.a)(Object(h.a)({ref:t},e),{},{dispose:null,children:Object(m.jsx)("mesh",{geometry:r.heart_teamRed.geometry,material:a["Red.015"],rotation:[.5,0,0]})}))}function ae(e){e.user;var t=Object(n.useContext)(X),o=(t.userScores,t.setUserScores,Object(n.useContext)(Z)),r=(o.score,o.setScore,Object(n.useState)(!1)),a=Object(c.a)(r,2),s=(a[0],a[1]),l=Object(n.useState)(!1),d=Object(c.a)(l,2),h=(d[0],d[1],Object(n.useState)(!1)),j=Object(c.a)(h,2),u=(j[0],j[1],Object(i.f)(),function(){var e=Object(G.e)().viewport,t=Object(n.useRef)(),o=Object(Y.a)("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-spaceship/model.gltf"),r=o.nodes,a=o.materials;return Object(G.c)((function(o){var n=o.mouse;H=n.x*e.width/2,K=n.y*e.height/2,t.current.position.set(H,K,0)})),Object(m.jsxs)("group",{rotation:[0,9.45,0],ref:t,dispose:null,children:[Object(m.jsx)("mesh",{geometry:r.Cube005.geometry,material:a.Mat0}),Object(m.jsx)("mesh",{geometry:r.Cube005_1.geometry,material:a.Mat1}),Object(m.jsx)("mesh",{geometry:r.Cube005_2.geometry,material:a.Mat2}),Object(m.jsx)("mesh",{geometry:r.Cube005_3.geometry,material:a.Window_Frame}),Object(m.jsx)("mesh",{geometry:r.Cube005_4.geometry,material:a.Mat4}),Object(m.jsx)("mesh",{geometry:r.Cube005_5.geometry,material:a.Mat3}),Object(m.jsx)("mesh",{geometry:r.Cube005_6.geometry,material:a.Window})]})}),b=3,p=function(e){var t=e.position,o=e.rotation,r=e.scale,a=e.args,c=e.color,i=Object(n.useRef)(null),s=0;return Object(G.c)((function(){return i.current.rotation.x=i.current.rotation.y+=.2})),Object(G.c)((function(){i.current.position.z+=.9})),Object(G.c)((function(){return s+=.5})),Object(m.jsxs)("mesh",{onPointerOver:function(e){i.current.position.z<=3&&i.current.position.z>=-20&&(b-=1,console.log("hit"),console.log(b))},castShadow:!0,position:t,rotation:o,scale:r,ref:i,children:[Object(m.jsx)("boxBufferGeometry",{args:a,attach:"geometry"}),Object(m.jsx)(J.a,{attach:"material",color:c})]})},O=function(e){var t=e.position,o=e.rotation,r=e.scale,a=e.args,c=e.color,i=Object(n.useRef)(null),l=0;return Object(G.c)((function(){i.current.position.z+=.9})),Object(G.c)((function(){return l+=.5})),Object(m.jsxs)("mesh",{onPointerOver:function(e){i.current.position.z<=3&&i.current.position.z>=-20&&(b-=1,s(!0),console.log("hit"),console.log(b))},castShadow:!0,position:t,rotation:o,scale:r,ref:i,children:[Object(m.jsx)("boxBufferGeometry",{args:a,attach:"geometry"}),Object(m.jsx)(J.a,{attach:"material",color:c})]})};Y.a.preload("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-spaceship/model.gltf");for(var g=[],x=0;x<300;x++)g.push(x);for(var f=[],v=0;v<400;v++)f.push(v);for(var M=[],y=0;y<700;y++)M.push(y);for(var w=[],C=0;C<1e3;C++)w.push(C);var E=g.map((function(e){return Object(m.jsx)(O,{color:800*Math.random()-700,position:[50*Math.random()-25,50*Math.random()-25,1e3*Math.random()-1600],rotation:[2*Math.random()*Math.PI,2*Math.random()*Math.PI,2*Math.random()*Math.PI],scale:[Math.random()+3,Math.random()+3,Math.random()+3]})})),S=f.map((function(e){return Object(m.jsx)(O,{color:800*Math.random()-300,position:[50*Math.random()-25,50*Math.random()-25,1e3*Math.random()-2900],rotation:[2*Math.random()*Math.PI,2*Math.random()*Math.PI,2*Math.random()*Math.PI],scale:[Math.random()+3,Math.random()+3,Math.random()+3]})})),k=w.map((function(e){return Object(m.jsx)(O,{color:800*Math.random()-300,position:[50*Math.random()-25,50*Math.random()-25,1e3*Math.random()-4200],rotation:[2*Math.random()*Math.PI,2*Math.random()*Math.PI,2*Math.random()*Math.PI],scale:[Math.random()+3,Math.random()+3,Math.random()+3]})})),P=g.map((function(e){return Object(m.jsx)(O,{color:1e4*Math.random()-50,position:[50*Math.random()-25,50*Math.random()-25,1e3*Math.random()-5500],rotation:[2*Math.random()*Math.PI,2*Math.random()*Math.PI,2*Math.random()*Math.PI],scale:[Math.random()+5,Math.random()+5,Math.random()+5]})})),I=g.map((function(e){return Object(m.jsx)(p,{color:16777215*Math.random(),position:[50*Math.random()-25,50*Math.random()-25,1e3*Math.random()-6800],rotation:[2*Math.random()*Math.PI,2*Math.random()*Math.PI,2*Math.random()*Math.PI],scale:[Math.random()+3.5,Math.random()+3.5,Math.random()+3.5]})})),z=f.map((function(e){return Object(m.jsx)(p,{color:16777215*Math.random(),position:[50*Math.random()-25,50*Math.random()-25,1e3*Math.random()-8100],rotation:[2*Math.random()*Math.PI,2*Math.random()*Math.PI,2*Math.random()*Math.PI],scale:[Math.random()+3.5,Math.random()+3.5,Math.random()+3.5]})})),F=w.map((function(e){return Object(m.jsx)(p,{color:16777215*Math.random(),position:[50*Math.random()-25,50*Math.random()-25,1e3*Math.random()-9400],rotation:[2*Math.random()*Math.PI,2*Math.random()*Math.PI,2*Math.random()*Math.PI],scale:[Math.random()+2,Math.random()+2,Math.random()+2]})})),A=g.map((function(e){return Object(m.jsx)(p,{color:16777215*Math.random(),position:[50*Math.random()-25,50*Math.random()-25,1e3*Math.random()-10700],rotation:[2*Math.random()*Math.PI,2*Math.random()*Math.PI,2*Math.random()*Math.PI],scale:[Math.random()+5,Math.random()+5,Math.random()+5]})}));new Audio("/CB2022.mp3"),new Audio("/gameover.wav");function T(){var e=Object(n.useRef)();return Object(G.c)((function(){e.current.position.z+=.5})),Object(m.jsxs)("group",{ref:e,children:[Object(m.jsx)(ne,{hAlign:"right",position:[-6,2,-265],children:"GO"}),Object(m.jsx)(ne,{hAlign:"right",position:[-3,2,-220],children:"1"}),Object(m.jsx)(ne,{hAlign:"right",position:[-3,2,-160],children:"2"}),Object(m.jsx)(ne,{hAlign:"right",position:[-3,2,-100],children:"3"})]})}return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(G.a,{style:{backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",backgroundImage:"url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12cbe8a4-f55c-4b40-85bb-d8e1405e7b84/d9oji4g-e98045e6-424f-40e6-bee0-42149b0ef1c0.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEyY2JlOGE0LWY1NWMtNGI0MC04NWJiLWQ4ZTE0MDVlN2I4NFwvZDlvamk0Zy1lOTgwNDVlNi00MjRmLTQwZTYtYmVlMC00MjE0OWIwZWYxYzAuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.T9mA5yCUSLT2yOIGsTjOdDUiy24Xs7ZVzzKBC12JtXM)"},shadowMap:!0,colorManagement:!0,camera:{position:[0,4,10],fov:100},children:[Object(m.jsx)("ambientLight",{intensity:.3}),Object(m.jsx)("directionalLight",{castShadow:!0,position:[0,10,0],intensity:1.5,"shadow-mapSize-width":1024,"shadow-mapSize-height":1024,"shadow-camera-far":50,"shadow-camera-left":-10,"shadow-camera-right":10,"shadow-camera-top":10,"shadow-camera-bottom":-10}),Object(m.jsx)("pointLight",{position:[-10,0,-20],intensity:.5}),Object(m.jsx)("pointLight",{position:[0,-10,0],intensity:1.5}),Object(m.jsxs)("group",{children:[Object(m.jsxs)("mesh",{receiveShadow:!0,rotation:[-Math.PI/2,0,0],position:[0,-3,0],children:[Object(m.jsx)("planeBufferGeometry",{attach:"geometry",args:[100,100]}),Object(m.jsx)("shadowMaterial",{attach:"material",opacity:.3})]}),Object(m.jsxs)(n.Suspense,{fallback:null,children:[Object(m.jsx)(V,{}),Object(m.jsx)(T,{}),Object(m.jsx)(u,{}),Object(m.jsx)(re,{position:[-.5,0,8.3],scale:[.25,.25,.25]}),Object(m.jsx)(re,{position:[0,0,8.3],scale:[.25,.25,.25]}),Object(m.jsx)(re,{position:[.5,0,8.3],scale:[.25,.25,.25]}),E,S,k,I,z,F,A,P]})]})]})})}Object(G.b)({TextGeometry:ee.a}),Y.a.preload("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/heart/model.gltf");var ce=o(191);o(149);function ie(e){var t=e.index,o=e.score,n=e.user;return Object(m.jsxs)("div",{children:[Object(m.jsx)(k.a,{}),Object(m.jsx)(C.a,{style:{backgroundColor:"white",color:"white"},component:"div",disablePadding:!0,children:Object(m.jsx)(S.a,{style:{backgroundColor:"white",color:"black"},primary:n,secondary:o})},t)]})}function se(e){var t=Object(n.useState)([]),o=Object(c.a)(t,2),r=o[0],a=o[1];Object(n.useEffect)((function(){fetch("/scores").then((function(e){return e.json()})).then((function(e){a(e)}))}),[]);var i=r.sort((function(e,t){return t.score-e.score})).map((function(e){return Object(m.jsx)(ie,{score:e.score,user:e.user.username})}));return Object(m.jsxs)(b.a,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:[Object(m.jsx)("h1",{children:"Highscores"}),Object(m.jsx)(w.a,{style:{width:"100%",maxWidth:360,position:"relative",overflow:"auto",maxHeight:300,backgroundColor:"white",color:"white"},children:i})]})}function le(){var e=n.useRef(null),t=Object(n.useContext)(Z),o=t.score;t.setScore;return console.log(o),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(ce.a,{disableEnforceFocus:!0,disableAutoFocus:!0,open:!0,"aria-labelledby":"server-modal-title","aria-describedby":"server-modal-description",sx:{display:"flex",p:1,alignItems:"center",justifyContent:"center"},container:function(){return e.current},children:Object(m.jsxs)(b.a,{sx:{position:"relative",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:function(e){return e.shadows[5]},p:4},children:[Object(m.jsx)(L.a,{id:"server-modal-title",variant:"h6",component:"h2",children:"GAME OVER"}),Object(m.jsxs)(L.a,{id:"server-modal-description",sx:{pt:2},children:["You were obliterated by the cubefield.",Object(m.jsx)("br",{}),"Score: ",o,Object(m.jsx)("br",{}),"Would you like to play again?",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(l.a,{as:f.b,to:"/game",style:{textDecoration:"none",backgroundColor:"#F8E9FE"},variant:"contained",children:" Play Again "}),Object(m.jsx)(l.a,{as:f.b,to:"/",style:{textDecoration:"none",backgroundColor:"#F8E9FE",marginLeft:"63px"},variant:"contained",children:" Go to the Hub "})]}),Object(m.jsx)("br",{}),Object(m.jsx)(se,{})]})})})}var de=function(){var e=Object(n.useState)(null),t=Object(c.a)(e,2),o=t[0],r=t[1],a=Object(n.useState)(null),s=Object(c.a)(a,2),l=s[0],d=s[1],h=Object(n.useState)(null),j=Object(c.a)(h,2),u=j[0],b=j[1];return Object(n.useEffect)((function(){fetch("/me").then((function(e){e.ok&&e.json().then((function(e){return b(e)}))}))}),[]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(i.c,{children:[Object(m.jsx)(i.a,{path:"/gameover",element:Object(m.jsx)(le,{})}),Object(m.jsx)(i.a,{path:"/scoreBoard",element:Object(m.jsx)(se,{})}),Object(m.jsx)(i.a,{path:"/game",element:Object(m.jsx)(ae,{user:u})}),Object(m.jsx)(i.a,{path:"/",element:u?Object(m.jsx)(W,{}):Object(m.jsx)(x,{handleSignUpClick:function(e){d(e.currentTarget),console.log("Signup")},handleLoginClick:function(e){console.log("Login"),r(e.currentTarget)},setLoginAnchorEl:r,setSignUpAnchorEl:d,loginAnchorEl:o,signUpAnchorEl:l,setUser:b})})]})})},he=Object(n.createContext)();function je(e){var t=e.children,o=Object(n.useState)(null),r=Object(c.a)(o,2),a=r[0],i=r[1];return Object(m.jsx)(he.Provider,{value:{hit:a,setHit:i},children:t})}a.a.render(Object(m.jsx)(je,{children:Object(m.jsx)(_,{children:Object(m.jsx)(Q,{children:Object(m.jsx)(f.a,{children:Object(m.jsx)(de,{})})})})}),document.getElementById("root"))},79:function(e,t,o){}},[[150,1,2]]]);
//# sourceMappingURL=main.5b6707b6.chunk.js.map