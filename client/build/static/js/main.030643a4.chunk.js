(this.webpackJsonpreactform=this.webpackJsonpreactform||[]).push([[0],{154:function(e,t,a){},155:function(e,t,a){},309:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),l=a(12),s=a.n(l),n=(a(154),a(155),a(16)),c=a(338),o=a(343),d=(a(82),a.p+"static/media/leftside.1615a937.gif"),h=a(5),m=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(c.a,{children:Object(h.jsx)("img",{src:d,height:"400px",width:"400px"})})})},j=a(345),u=a(344),b=a(342),g=a(141),x=a.n(g),p=a(143),O=a(36),f=a(138),v=a(139),S=a.n(v),y=a(140),I=a.n(y),N=(a(291),new Date);console.log(N);var C=O.b({first:O.c().max(30,"Should be MAX 30 chars long").required("Apka first name kya hai "),last:O.c().required("Apka last name kya hai ").max(30,"Should be MAX 30 chars long"),email:O.c().email("Enter a valid email").required("Bhai email dedo please"),date:O.a().max(N,"Invalid DOB").required("DOB bhul gye bhai !")}),T=function(e){var t=Object(r.useState)(""),a=Object(n.a)(t,2),i=a[0],l=a[1];function s(){return i.length<50?(alert("The description is too short, MIN 50 chars"),!1):!(i.length>600)||(alert("The description is too long ,MAX 50 chars "),!1)}var c=function(e,t,a){var r=e.first,s=e.last,n=e.email,c=e.date;console.log("This is not running"),r&&s&&n&&c&&i&&a?(I.a.post("/submitForm",{first:r,last:s,email:n,date:c,text:i}).then((function(e){t.displayCallback(e.data)})),l("")):(alert("Invalid Input"),l(""))},o=Object(p.a)({initialValues:{first:"",last:"",email:"",date:""},onSubmit:function(t,a,r){(0,a.resetForm)({values:""});var i=s();c(t,e,i)},validationSchema:C});return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:o.handleSubmit,children:[Object(h.jsx)("h2",{children:"How are we feeling? "}),Object(h.jsxs)("div",{className:"textfield-container",children:[Object(h.jsx)(x.a,{color:"primary",fontSize:"large",style:{marginRight:10,fontSize:40,marginTop:10}}),Object(h.jsx)(u.a,{name:"first",variant:"outlined",label:"First Name",style:{marginRight:30},value:o.values.first,onChange:o.handleChange,error:o.touched.first&&Boolean(o.errors.first),helperText:o.touched.first&&o.errors.first}),Object(h.jsx)(u.a,{name:"last",variant:"outlined",label:"Last Name",value:o.values.last,onChange:o.handleChange,error:o.touched.last&&Boolean(o.errors.last),helperText:o.touched.last&&o.errors.last})]}),Object(h.jsxs)("div",{className:"email-container",children:[Object(h.jsx)(b.a,{color:"primary",style:{fontSize:42,marginTop:20,marginRight:10},children:"email"}),Object(h.jsx)(u.a,{name:"email",type:"email",label:"Email",variant:"outlined",onChange:o.handleChange,style:{marginRight:30,marginTop:15,width:350},value:o.values.email,error:o.touched.email&&Boolean(o.errors.email),helperText:o.touched.email&&o.errors.email})]}),Object(h.jsxs)("div",{className:"date-container",children:[Object(h.jsx)(b.a,{color:"primary",style:{fontSize:42,marginTop:20,marginRight:10},children:"cake"}),Object(h.jsx)(u.a,{name:"date",type:"date",label:"Date of Birth",variant:"outlined",value:o.values.date,onChange:o.handleChange,style:{marginTop:15},error:o.touched.date&&Boolean(o.errors.date),helperText:o.touched.date&&o.errors.date,InputLabelProps:{shrink:!0}})]}),Object(h.jsxs)("div",{className:"outerApp",children:[Object(h.jsx)(b.a,{color:"primary",style:{fontSize:40,marginRight:10},children:"description"}),Object(h.jsxs)("div",{className:"editor",children:[Object(h.jsx)(f.CKEditor,{name:"desc",editor:S.a,data:i,onChange:function(e,t){var a=t.getData();l(a)}}),Object(h.jsx)("p",{children:i})]})]}),Object(h.jsx)(j.a,{style:{width:150,marginLeft:230},endIcon:Object(h.jsx)(b.a,{children:"arrow_forward"}),color:"secondary",type:"submit",variant:"contained",children:"Submit"})]})})},k=a(142),w=function(){var e=Object(r.useState)(null),t=Object(n.a)(e,2),a=t[0],i=t[1];return null!=a&&(localStorage.setItem("first",a.first),localStorage.setItem("last",a.last),localStorage.setItem("email",a.email),localStorage.setItem("date",a.date),localStorage.setItem("isFirst",1),localStorage.setItem("text",a.text),undefined,console.log(undefined)),Object(h.jsxs)("div",{className:"card_container",children:[Object(h.jsxs)(c.a,{class:"card",children:[Object(h.jsx)(T,{displayCallback:i}),Object(h.jsx)(m,{})]}),Object(h.jsx)(o.a,{className:"card2",children:1==localStorage.getItem("isFirst")?Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{children:["Name : ",localStorage.getItem("first")," ",localStorage.getItem("last")]}),Object(h.jsxs)("p",{children:["Email : ",localStorage.getItem("email")]}),Object(h.jsxs)("p",{children:["Date of Birth: ",localStorage.getItem("date")]}),Object(h.jsxs)("p",{children:["Description :",Object(k.a)(localStorage.getItem("text"))]})]}):Object(h.jsx)("div",{})})]})};var B=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)("header",{className:"App-header",children:Object(h.jsx)(w,{})})})};s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(B,{})}),document.getElementById("root"))},82:function(e,t,a){}},[[309,1,2]]]);
//# sourceMappingURL=main.030643a4.chunk.js.map