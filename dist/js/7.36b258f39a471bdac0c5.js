(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{688:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a(0),a(34);var n=[{id:"Hot",name:"Hot"},{id:"Techology",name:"Techology"},{id:"Fashion",name:"Fashion"},{id:"Sport",name:"Sport"},{id:"Social",name:"Social"},{id:"Relax",name:"Relax"}]},796:function(e,t,a){"use strict";a.r(t);var n=a(90),r=a(734),o=a.n(r),c=a(162),i=a.n(c),l=a(735),s=a.n(l),m=a(0),u=a.n(m),d=a(736),g=a(737),p=a.n(g),h=a(89),f=a(688),b=a(34),v=a.n(b),E=a(152),w=function(e){e.post;var t=e.doPost,a=e.getBlogByID,n=e.editPost,r=Object(m.useState)(""),c=i()(r,2),l=c[0],g=c[1],b=Object(m.useState)(""),E=i()(b,2),w=E[0],y=E[1],S=Object(m.useState)(""),k=i()(S,2),N=k[0],C=k[1],P=Object(m.useState)(""),x=i()(P,2),_=x[0],F=x[1],B=Object(m.useState)(!1),L=i()(B,2),R=L[0],T=L[1],j=function(e){g(e.title),y(e.content),C(e.category),C(e.thumbnail)};Object(m.useEffect)((function(){new URLSearchParams(location.search).get("id")&&(T(!0),a(new URLSearchParams(location.search).get("id"),j))}),[new URLSearchParams(location.search).get("id")]);var O=function(){var e=o()(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.target.files[0],!(2<a.size/1024/1024)){e.next=5;break}return v()({title:"Error",html:'<p class="pop-content">Image size cannot bigger than 2MB.</p>',animation:!1,showCloseButton:!0,confirmButtonText:"Đóng",customClass:"custom-modal animated zoomIn"}),e.abrupt("return");case 5:return e.next=7,U(a);case 7:n=e.sent,F(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(e){return new Promise((function(t,a){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){t(n.result)},n.onerror=function(e){a(e)}}))};return p.a.create(document.querySelector("#editor"),{toolbar:["heading","|","bold","italic","link","bulletedList","numberedList","blockQuote"],heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"}]}}).catch((function(){})),u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"tvf-container"},u.a.createElement("div",{className:"section-admin"},u.a.createElement("h4",{className:"adm-title"},R?"Edit Post":"Create Post"),u.a.createElement("div",{className:"signin__form--control"},u.a.createElement("label",{htmlFor:"postTitle"},"Title"),u.a.createElement("input",{type:"text",className:"sign__control",placeholder:"post title",value:l,onChange:function(e){return g(e.target.value)},id:"postTitle"})),u.a.createElement("div",{className:"signin__form--control"},u.a.createElement("label",{htmlFor:"categoryLbl"},"Category"),u.a.createElement("select",{className:"form-control",onChange:function(e){return C(e.target.value)},value:N,id:"categoryLbl"},u.a.createElement("option",{selected:!0},"Chose title category"),0<f.a.length&&f.a.map((function(e,t){return u.a.createElement("option",{key:t,value:e.id},e.name)})))),u.a.createElement("div",{className:"signin__form--control"},u.a.createElement("label",{htmlFor:"postTitle"},"Thumbnail"),_&&u.a.createElement("img",{src:_,alt:""}),u.a.createElement("input",{id:"originalFileName",type:"file",inputProps:{accept:"image/*, .xlsx, .xls, .csv, .pdf, .pptx, .pptm, .ppt"},required:!0,label:"Document",name:"originalFileName",onChange:function(e){return O(e)},size:"small",variant:"standard"})),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("div",null,u.a.createElement(d.CKEditor,{editor:p.a,data:w,onReady:function(){},onChange:function(e,t){var a=t.getData();y(a)},onBlur:function(){},onFocus:function(){}})),u.a.createElement("div",{className:"text-right"},u.a.createElement(h.a,{className:"btn btn--back",to:"/admin"},"Back"),R?u.a.createElement("button",{type:"submit",className:"btn btn--tvf",onClick:function(){n(new URLSearchParams(location.search).get("id"),l,w,N,_)}},"Save"):u.a.createElement("button",{type:"submit",className:"btn btn--tvf",onClick:function(){t(l,w,N,_)}},"Create")))))},y={doPost:E.c,getBlogByID:E.e,editPost:E.d};t.default=Object(n.b)((function(e){return{currentUser:e.currentUser}}),y)(w)}}]);
//# sourceMappingURL=7.36b258f39a471bdac0c5.js.map