(this["webpackJsonpfriday-with-ignat"]=this["webpackJsonpfriday-with-ignat"]||[]).push([[0],{14:function(e,t,n){e.exports={mainBlock:"Login_mainBlock__2Hnsf",heading:"Login_heading__2uUNe",form:"Login_form__YUnFu",item:"Login_item__8ruFX"}},17:function(e,t,n){e.exports={mainBlock:"Registration_mainBlock__2-tPy",heading:"Registration_heading__1ikXU",form:"Registration_form__2vKhD",item:"Registration_item__2OvGO"}},18:function(e,t,n){e.exports={header:"Header_header__10E-F",item:"Header_item__2jxiJ",selected:"Header_selected__1gq-3"}},20:function(e,t,n){e.exports={mainBlock:"NewPassword_mainBlock__18qO6",heading:"NewPassword_heading__1yeBX",form:"NewPassword_form__GI_Wx",item:"NewPassword_item__JkpR3"}},22:function(e,t,n){e.exports={mainBlock:"RecoverPassword_mainBlock__36Kk5",heading:"RecoverPassword_heading__2PBQ9",form:"RecoverPassword_form__2SbKz",item:"RecoverPassword_item__hD7wO",text:"RecoverPassword_text__17f5i"}},26:function(e,t,n){e.exports={textContainer:"Error_textContainer__33KNz",img:"Error_img__1DIRY",text:"Error_text__1aWPg"}},27:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__1Dvnc",errorInput:"SuperInputText_errorInput__2KNWh",error:"SuperInputText_error__39NON"}},28:function(e,t,n){e.exports={profileImage:"Profile_profileImage__V14iU",item:"Profile_item__1iv2e"}},31:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__BWIdw",spanClassName:"SuperCheckbox_spanClassName__3Sm-t"}},32:function(e,t,n){e.exports={default:"SuperButton_default__2uC1O",red:"SuperButton_red__3Lo1u"}},53:function(e,t,n){},54:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),c=n(24),r=n.n(c),i=(n(53),n(54),n(8)),o=n(4),l=n(26),d=n.n(l),u=n.p+"static/media/404-Error.f783912e.jpg",j=function(){return Object(a.jsxs)("div",{className:d.a.textContainer,children:[Object(a.jsx)("div",{className:d.a.img,children:Object(a.jsx)("img",{src:u})}),Object(a.jsx)("div",{className:d.a.text,children:"Error 404: page donut found :("})]})},O=n(9),b=n(2),h=n(21),m=n(27),p=n.n(m),f=function(e){var t=e.onChange,n=e.onChangeText,s=e.onKeyPress,c=e.onEnter,r=e.error,i=(e.className,e.spanClassName),o=e.setError,l=Object(h.a)(e,["onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName","setError"]),d="".concat(p.a.error," ").concat(i||""),u=r?p.a.errorInput:p.a.superInput;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",Object(b.a)({onChange:function(e){t&&t(e),n&&n(e.currentTarget.value),o&&o("")},onKeyPress:function(e){s&&s(e),"Enter"===e.key&&c&&c()},className:u},l)),r&&Object(a.jsx)("span",{className:d,children:r})]})},x=n(31),R=n.n(x),g=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,s=e.className,c=(e.spanClassName,e.children),r=Object(h.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),i="".concat(R.a.checkbox," ").concat(s||"");return Object(a.jsxs)("label",{children:[Object(a.jsx)("input",Object(b.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:i},r)),c&&Object(a.jsx)("span",{className:R.a.spanClassName,children:c})]})},E=n(32),_=n.n(E),v=function(e){var t=e.red,n=e.className,s=Object(h.a)(e,["red","className"]),c="".concat(t?_.a.red:_.a.default," ").concat(n);return Object(a.jsx)("button",Object(b.a)({className:c},s))},S=n(5),N=n(14),C=n.n(N),w=n(16),I=n.n(w),P=I.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),k=function(e){return P.post("auth/login",e)},T={isLoggedIn:!1,error:""},y=n(12),D=n.n(y),L=function(){var e=Object(s.useState)(""),t=Object(O.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(""),l=Object(O.a)(r,2),d=l[0],u=l[1],j=Object(s.useState)(!1),h=Object(O.a)(j,2),m=h[0],p=h[1],x=Object(S.b)(),R=Object(S.c)((function(e){return e.login.isLoggedIn})),E=Object(S.c)((function(e){return e.login.error}));return R?Object(a.jsx)(o.a,{to:de.PROFILE}):Object(a.jsxs)("div",{className:C.a.mainBlock,children:[E||"",Object(a.jsx)(D.a,{left:!0,children:Object(a.jsx)("div",{className:C.a.heading,children:"Log In"})}),Object(a.jsx)(D.a,{right:!0,children:Object(a.jsxs)("div",{className:C.a.form,children:[Object(a.jsx)("div",{className:C.a.item,children:Object(a.jsx)(f,{type:"text",placeholder:"email",value:n,onChange:function(e){c(e.target.value)}})}),Object(a.jsx)("div",{className:C.a.item,children:Object(a.jsx)(f,{type:"password",placeholder:"password",value:d,onChange:function(e){u(e.target.value)}})}),Object(a.jsxs)("div",{className:C.a.item,children:[Object(a.jsx)("span",{children:"Remember me"}),Object(a.jsx)(g,{checked:m,onChange:function(e){p(e.target.checked)}})]}),Object(a.jsx)("div",{className:C.a.item,children:Object(a.jsx)(v,{onClick:function(){var e;x((e={email:n,password:d,rememberMe:m},function(t){k(e).then((function(e){t({type:"LOGIN-REDUCER/LOGIN",isLoggedIn:!0})})).catch((function(e){t({type:"LOGIN/SET_ERROR",error:e.response.data.error+" more details in the console"}),console.log("Error:",Object(b.a)({},e))}))}))},children:"Log In"})}),Object(a.jsx)("div",{className:C.a.item,children:Object(a.jsx)(i.b,{activeClassName:C.a.selected,to:de.RECOVER_PASSWORD,children:"Forgot password?"})}),Object(a.jsx)("div",{className:C.a.item,children:Object(a.jsx)(i.b,{activeClassName:C.a.selected,to:de.REGISTRATION,children:"Don't have profile? Sign up."})})]})})]})},U=I.a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),W=function(e){return U.post("/auth/forgot",{email:e,from:"alexbushueva27@gmail.com",message:"<div style=\"background-color: #ffb7d5; padding: 15px border-radius: 20px\">\n                    password recovery link: \n                        <a href='https://itsmeshusha.github.io/IncFriday/#/new-password/$token$'>link</a>\n                    </div>\n                    "})},A=function(e,t){return U.post("/auth/set-new-password",{password:e,resetPasswordToken:t})},G={status:"idle",error:"",successMessage:""},B=function(e){return{type:"NEW-PASSWORD-REDUCER/SET_STATUS",status:e}},F=n(20),V=n.n(F),K=function(){var e=Object(s.useState)(""),t=Object(O.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(""),i=Object(O.a)(r,2),l=i[0],d=i[1],u=Object(o.g)().token,j=Object(S.b)();return"succeeded"===Object(S.c)((function(e){return e.newPassword.status}))?Object(a.jsx)(o.a,{to:de.LOGIN}):Object(a.jsxs)("div",{className:V.a.mainBlock,children:[Object(a.jsx)(D.a,{left:!0,children:Object(a.jsx)("div",{className:V.a.heading,children:"New Password"})}),Object(a.jsx)(D.a,{right:!0,children:Object(a.jsxs)("div",{className:V.a.form,children:[Object(a.jsx)("div",{className:V.a.item,children:Object(a.jsx)(f,{type:"password",placeholder:"password",value:n,onChange:function(e){c(e.target.value)}})}),Object(a.jsx)("div",{className:V.a.item,children:Object(a.jsx)(f,{type:"password",placeholder:"password",value:l,onChange:function(e){d(e.target.value)}})}),Object(a.jsx)("div",{className:V.a.item,children:Object(a.jsx)(v,{onClick:function(){n===l?j(function(e,t){return function(n){n(B("loading")),A(e,t).then((function(e){n({type:"NEW-PASSWORD-REDUCER/SET_SUCCESS",success:e.data.message})})).catch((function(e){var t=e.response?e.response.data.error:e.message+", more details in the console";n(function(e){return{type:"NEW-PASSWORD-REDUCER/SET_ERROR",error:e}}(t))})).finally((function(){n(B("succeeded"))}))}}(n,u)):alert("Passwords don't match!")},children:"Set password"})})]})})]})},M=n(28),H=n.n(M),J=I.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),Y=function(){return J.post("auth/me")},X={profile:{_id:null,email:null,name:null,avatar:null,publicCardPacksCount:null,created:null,updated:null,isAdmin:null,verified:null,rememberMe:null,error:null}},q=n.p+"static/media/user.fd39d1b5.png",z=function(){var e=Object(S.c)((function(e){return e.login.isLoggedIn})),t=Object(S.c)((function(e){return e.profile.profile})),n=Object(S.b)();return Object(s.useEffect)((function(){e&&n((function(e){return Y().then((function(t){e({type:"PROFILE-REDUCER/SET_PROFILE",profile:t.data})})).catch((function(e){var t=e.response?e.response.data.error:e.message+", more details in the console";console.log(t)}))}))}),[e,n]),e?Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:H.a.profileImage,children:Object(a.jsx)("img",{src:t.avatar?t.avatar:q,alt:"userPhoto"})}),Object(a.jsxs)("div",{className:H.a.item,children:["id: ",t._id]}),Object(a.jsxs)("div",{className:H.a.item,children:["email: ",t.email]})]}):Object(a.jsx)(o.a,{to:de.LOGIN})},$={status:"idle",error:"",successMessage:""},Q=function(e){return{type:"RECOVER-PASSWORD-REDUCER/SET_RECOVERY_STATUS",status:e}},Z=n(22),ee=n.n(Z),te=function(){var e=Object(s.useState)(""),t=Object(O.a)(e,2),n=t[0],c=t[1],r=Object(S.b)();return Object(a.jsxs)("div",{className:ee.a.mainBlock,children:[Object(a.jsx)(D.a,{left:!0,children:Object(a.jsx)("div",{className:ee.a.heading,children:"Forgot Password?"})}),Object(a.jsxs)(D.a,{right:!0,children:[Object(a.jsx)("div",{className:ee.a.form,children:Object(a.jsxs)("div",{className:ee.a.item,children:[Object(a.jsx)(f,{type:"text",placeholder:"email",value:n,onChange:function(e){c(e.target.value)}}),Object(a.jsx)(v,{onClick:function(){r(function(e){return function(t){return t(Q("loading")),W(e).then((function(e){200===e.status&&t({type:"RECOVER-PASSWORD-REDUCER/SET_SUCCESS",recoverySuccess:e.data.info})})).catch((function(e){var n=e.response?e.response.data.error:e.message+", more details in the console";t(function(e){return{type:"RECOVER-PASSWORD-REDUCER/SET_ERROR",error:e}}(n))})).finally((function(){t(Q("succeeded"))}))}}(n))},children:"Send email"})]})}),Object(a.jsx)("p",{className:ee.a.text,children:"On your email we'll send a link. Please click it."})]})]})},ne=I.a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),ae=function(e){return ne.post("/auth/register",e)},se={isRegistered:!1},ce=function(e){return{type:"REGISTER-REDUCER/REGISTER-NEW-USER",isRegistered:e}},re=n(17),ie=n.n(re),oe=function(){var e=Object(s.useState)(""),t=Object(O.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(""),i=Object(O.a)(r,2),l=i[0],d=i[1],u=Object(s.useState)(""),j=Object(O.a)(u,2),b=j[0],h=j[1],m=Object(S.b)();return Object(S.c)((function(e){return e.register.isRegistered}))?Object(a.jsx)(o.a,{to:de.LOGIN}):Object(a.jsxs)("div",{className:ie.a.mainBlock,children:[Object(a.jsx)(D.a,{left:!0,children:Object(a.jsx)("div",{className:ie.a.heading,children:"Registration"})}),Object(a.jsx)(D.a,{right:!0,children:Object(a.jsxs)("div",{className:ie.a.form,children:[Object(a.jsx)("div",{className:ie.a.item,children:Object(a.jsx)(f,{type:"text",placeholder:"email",value:n,onChange:function(e){c(e.target.value)}})}),Object(a.jsx)("div",{className:ie.a.item,children:Object(a.jsx)(f,{type:"password",placeholder:"password",value:l,onChange:function(e){d(e.target.value)}})}),Object(a.jsx)("div",{className:ie.a.item,children:Object(a.jsx)(f,{type:"password",placeholder:"confirm password",value:b,onChange:function(e){h(e.target.value)}})}),Object(a.jsx)("div",{className:ie.a.item,children:Object(a.jsx)(v,{onClick:function(){var e;l===b?(m((e={email:n,password:l},function(t){ae(e).then((function(e){201===e.status?t(ce(!0)):(t(ce(!1)),alert(e.status))})).catch((function(e){return console.log(e)}))})),c(""),d(""),h("")):alert("Passwords don't match!")},children:"Register"})})]})})]})},le=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(f,{}),Object(a.jsx)(v,{children:"Button"}),Object(a.jsx)(g,{})]})},de={LOGIN:"/login",NEW_PASSWORD:"/new-password/:token?",PROFILE:"/profile",RECOVER_PASSWORD:"/recover-password",REGISTRATION:"/registration",TEST:"/test"},ue=function(){return Object(a.jsx)("div",{children:Object(a.jsxs)(o.d,{children:[Object(a.jsx)(o.b,{exact:!0,path:"/",render:function(){return Object(a.jsx)(o.a,{to:de.PROFILE})}}),Object(a.jsx)(o.b,{path:de.LOGIN,render:function(){return Object(a.jsx)(L,{})}}),Object(a.jsx)(o.b,{path:de.NEW_PASSWORD,render:function(){return Object(a.jsx)(K,{})}}),Object(a.jsx)(o.b,{path:de.PROFILE,render:function(){return Object(a.jsx)(z,{})}}),Object(a.jsx)(o.b,{path:de.RECOVER_PASSWORD,render:function(){return Object(a.jsx)(te,{})}}),Object(a.jsx)(o.b,{path:de.REGISTRATION,render:function(){return Object(a.jsx)(oe,{})}}),Object(a.jsx)(o.b,{path:de.TEST,render:function(){return Object(a.jsx)(le,{})}}),Object(a.jsx)(o.b,{render:function(){return Object(a.jsx)(j,{})}})]})})},je=n(18),Oe=n.n(je),be=function(){return Object(a.jsxs)("div",{className:Oe.a.header,children:[Object(a.jsx)("span",{className:Oe.a.item,children:Object(a.jsx)(i.b,{activeClassName:Oe.a.selected,to:de.LOGIN,children:"Log In"})}),Object(a.jsx)("span",{className:Oe.a.item,children:Object(a.jsx)(i.b,{activeClassName:Oe.a.selected,to:de.REGISTRATION,children:"Registration"})}),Object(a.jsx)("span",{className:Oe.a.item,children:Object(a.jsx)(i.b,{activeClassName:Oe.a.selected,to:de.PROFILE,children:"Profile"})})]})};var he=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(i.a,{children:[Object(a.jsx)(be,{}),Object(a.jsx)(ue,{})]})})},me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))},pe=n(19),fe=n(47),xe=Object(pe.c)({profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROFILE-REDUCER/SET_PROFILE":return Object(b.a)(Object(b.a)({},e),{},{profile:t.profile});default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER-REDUCER/REGISTER-NEW-USER":return Object(b.a)(Object(b.a)({},e),{},{isRegistered:t.isRegistered});default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN-REDUCER/LOGIN":return Object(b.a)(Object(b.a)({},e),{},{isLoggedIn:t.isLoggedIn});case"LOGIN/SET_ERROR":return Object(b.a)(Object(b.a)({},e),{},{error:t.error});default:return e}},recoverPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECOVER-PASSWORD-REDUCER/SET_ERROR":return Object(b.a)(Object(b.a)({},e),{},{status:t.error});case"RECOVER-PASSWORD-REDUCER/SET_SUCCESS":return Object(b.a)(Object(b.a)({},e),{},{status:t.recoverySuccess});case"RECOVER-PASSWORD-REDUCER/SET_RECOVERY_STATUS":return Object(b.a)(Object(b.a)({},e),{},{status:t.status});default:return e}},newPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW-PASSWORD-REDUCER/SET_ERROR":return Object(b.a)(Object(b.a)({},e),{},{error:t.error});case"NEW-PASSWORD-REDUCER/SET_STATUS":return Object(b.a)(Object(b.a)({},e),{},{status:t.status});case"NEW-PASSWORD-REDUCER/SET_SUCCESS":return Object(b.a)(Object(b.a)({},e),{},{successMessage:t.success});default:return e}}}),Re=Object(pe.d)(xe,Object(pe.a)(fe.a)),ge=Re;window.store=Re,r.a.render(Object(a.jsx)(S.a,{store:ge,children:Object(a.jsx)(he,{})}),document.getElementById("root")),me()}},[[80,1,2]]]);
//# sourceMappingURL=main.ea6e1810.chunk.js.map