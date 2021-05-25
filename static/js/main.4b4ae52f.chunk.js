(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{49:function(e,t,c){},50:function(e,t,c){},52:function(e,t,c){},80:function(e,t,c){},82:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(19),s=c.n(r),i=(c(49),c(17)),o=(c(50),c(51),c(89)),j=c(16),l=c(7),d=(c(52),c(1)),h=function(e){var t=e.click;return Object(d.jsxs)("nav",{className:"navbar",children:[Object(d.jsx)("div",{className:"navbar__logo",children:Object(d.jsx)("h3",{children:Object(d.jsx)(j.b,{className:"home",to:"/",children:"GrocyShop"})})}),Object(d.jsxs)("ul",{className:"navbar__links mr-3",children:[Object(d.jsx)("li",{children:Object(d.jsxs)(j.b,{to:"/add_Products",className:"cart__link",children:[Object(d.jsx)("i",{className:"fas fa-shopping-cart"}),Object(d.jsx)("span",{children:"Cart"})]})}),Object(d.jsx)("li",{className:"cart__link",children:Object(d.jsx)(j.b,{to:"/update/:id",children:"Update"})})]}),Object(d.jsxs)("div",{className:"hamburger__menu",onClick:t,children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{})]})]})},b=c(9),u=c(40),p=c(91),O=c(88),m=c(90),x=c(92),f=c(18),v=c.n(f);c(80);var g=function(e){var t=e.updating,c=Object(a.useState)({importance:1,productName:"",price:"",descripcion:""}),n=Object(i.a)(c,2),r=n[0],s=n[1],o=Object(a.useState)([]),l=Object(i.a)(o,2),h=l[0],f=l[1],g=Object(a.useState)(),N=Object(i.a)(g,2),y=N[0],C=N[1];return Object(a.useEffect)((function(){v.a.get("https://groceryactiveit.herokuapp.com/products/add").then((function(e){e.data.sort((function(e,t){var c=e.importance,a=t.importance,n=0;return c>a?n=1:c<a&&(n=-1),n})),console.log(e.data),f(e.data)}))}),[t]),Object(d.jsxs)("div",{className:"container-new-product rgba-stylish-strong py-5 px-5 z-depth-4",children:[Object(d.jsxs)(u.a,{className:"product-image",children:[Object(d.jsx)("h1",{className:"white-text font-weight-bold",children:"Add New Product"}),Object(d.jsxs)(p.a,{className:"formProduct",onSubmit:function(e){e.preventDefault();var c=JSON.stringify(r);console.log(r);v.a.post("https://groceryactiveit.herokuapp.com/products/add",c,{headers:{"Content-Type":"application/json; charset=UTF-8",Accept:"Token","Access-Control-Allow-Origin":"*"}}).then((function(e){console.log(e.data),t()}))},children:[Object(d.jsxs)(p.a.Group,{children:[Object(d.jsx)(p.a.Label,{children:"Importancy"}),Object(d.jsxs)(p.a.Control,{as:"select",name:"importance",defaultValue:"1 - Very Much Important",onChange:function(e){return s(Object(b.a)(Object(b.a)({},r),{},{importance:e.target.value}))},children:[Object(d.jsx)("option",{value:"1",children:"1 - Very Much Important"}),Object(d.jsx)("option",{value:"2",children:"2 - Very Important"}),Object(d.jsx)("option",{value:"3",children:"3 - Important"}),Object(d.jsx)("option",{value:"4",children:"4 - Not Important"}),Object(d.jsx)("option",{value:"5",children:"5 - Not Important At All"})]}),Object(d.jsx)(p.a.Label,{children:"Product Name"}),Object(d.jsx)(p.a.Control,{name:"productName",type:"text",placeholder:"What is ur product?Potatoes, lemons, etc?",onChange:function(e){return s(Object(b.a)(Object(b.a)({},r),{},{productName:e.target.value}))}}),Object(d.jsx)(p.a.Label,{children:"Price"}),Object(d.jsx)(p.a.Control,{name:"price",type:"text",placeholder:"What is the price of your product??",onChange:function(e){return s(Object(b.a)(Object(b.a)({},r),{},{price:e.target.value}))}}),Object(d.jsx)(p.a.Label,{children:"Describe your product"}),Object(d.jsx)(p.a.Control,{name:"descripcion",type:"text",placeholder:"Please Describe the Product?",onChange:function(e){return s(Object(b.a)(Object(b.a)({},r),{},{descripcion:e.target.value}))}})]}),Object(d.jsx)(O.a,{className:"mt-2 ml-4 ButtonAddShop",variant:"success",type:"submit",children:"Add to Shop"})]})]}),null!=y&&Object(d.jsx)(m.a,{className:"w-50",variant:"dark ml-5 mt-5",children:y}),Object(d.jsx)("h1",{className:"mt-5 mb-5",children:"My Products"}),Object(d.jsx)("div",{className:"container-fluid d-flex",children:h.map((function(e){return Object(d.jsx)("div",{className:" ",children:Object(d.jsxs)(x.a,{className:" m-1 bg-success text-center",style:{width:"18rem"},children:[Object(d.jsxs)(x.a.Body,{className:"ml-1",children:[Object(d.jsxs)(x.a.Title,{children:[Object(d.jsx)("h3",{className:"text-white",children:"Product Name:"}),Object(d.jsx)("h4",{children:e.productName})]}),Object(d.jsxs)(x.a.Title,{children:[Object(d.jsx)("h3",{className:"text-white",children:"Price"}),Object(d.jsxs)(x.a.Text,{children:[e.price,"$"]})]}),Object(d.jsxs)(x.a.Title,{children:[Object(d.jsx)("h3",{className:"text-white",children:"Description:"}),Object(d.jsx)(x.a.Text,{children:e.descripcion})]})]}),Object(d.jsx)(O.a,{className:"buttonUpdate btn btn-warning",children:Object(d.jsx)(j.b,{to:"/update/".concat(e._id),children:"Update"})}),Object(d.jsx)(O.a,{type:"button",onClick:function(){return c=e._id,void v.a.get("https://groceryactiveit.herokuapp.com/products/delete/"+c).then((function(e){C(e.data),console.log(e.data),t()}));var c},children:"Delete"})]})})}))})]})};c(82);var N=function(){return Object(d.jsx)("div",{className:"home-image mt-5 container-home home-form",children:Object(d.jsxs)("div",{className:"centered mb-5 ",children:[Object(d.jsx)("div",{className:"mb-5  text-light",id:"div1",children:"Welcome To GrocyShop"}),Object(d.jsx)("div",{className:"mt-5 designed",children:Object(d.jsx)("h4",{children:"Website designed to Active-It Recruitment, By Nico Alvarez "})})]})})},y=c(28),C=c.n(y),w=c(43);c(84);var k=function(){var e=Object(l.f)(),t=Object(l.g)(),c=Object(a.useState)({productName:"",price:"",descripcion:" "}),n=Object(i.a)(c,2),r=n[0],s=n[1],o=function(){var c=Object(w.a)(C.a.mark((function c(a){var n,i;return C.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return a.preventDefault(),n=JSON.stringify(r),i={headers:{"Content-Type":"application/json; charset=UTF-8",Accept:"Token","Access-Control-Allow-Origin":"*"}},c.next=5,v.a.post("https://groceryactiveit.herokuapp.com/products/updatedshop/".concat(t.params.id),n,i).then((function(e){e.data&&console.log(e.data)})).catch((function(e){return console.log("Error:",e)}));case 5:s({productName:"",price:"",descripcion:" "}),e.push("/add_Products");case 7:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}();return Object(a.useEffect)((function(){v.a.get("https://groceryactiveit.herokuapp.com/products/update/".concat(t.params.id)).then((function(e){console.log(e.data),s(e.data)}))}),[]),console.log(r),Object(d.jsx)("div",{className:"update-image mt-5",children:Object(d.jsxs)(p.a,{className:"formUpdate mt-5",onSubmit:o,children:[Object(d.jsxs)(p.a.Group,{children:[Object(d.jsx)(p.a.Label,{children:"Product Name"}),Object(d.jsx)(p.a.Control,{value:r.productName,name:"productName",type:"text",placeholder:"What is your product name?",onChange:function(e){return s(Object(b.a)(Object(b.a)({},r),{},{productName:e.target.value}))}}),Object(d.jsx)(p.a.Label,{children:"Price"}),Object(d.jsx)(p.a.Control,{value:r.price,name:"price",type:"text",placeholder:"What is the price of your product??",onChange:function(e){return s(Object(b.a)(Object(b.a)({},r),{},{price:e.target.value}))}}),Object(d.jsx)(p.a.Label,{children:"Description"}),Object(d.jsx)(p.a.Control,{value:r.descripcion,name:"descripcion",type:"text",placeholder:"Please Describe the Product?",onChange:function(e){return s(Object(b.a)(Object(b.a)({},r),{},{descripcion:e.target.value}))}})]}),Object(d.jsx)(O.a,{className:" mt-2 ml-4 ButtonAddUpdate",variant:"warning",type:"submit",children:"Update"})]})})};c(85);var P=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("footer",{className:"footer-distributed mt-5",children:[Object(d.jsxs)("div",{className:"footer-left",children:[Object(d.jsx)("h3",{children:Object(d.jsx)("span",{children:" GrocyShop"})}),Object(d.jsxs)("p",{className:"footer-links",children:[Object(d.jsx)("a",{href:"#",children:"Home"}),"\xb7",Object(d.jsx)("a",{href:"#",children:"Blog"}),"\xb7",Object(d.jsx)("a",{href:"#",children:"Pricing"}),"\xb7",Object(d.jsx)("a",{href:"#",children:"About"}),"\xb7",Object(d.jsx)("a",{href:"#",children:"Faq"}),"\xb7",Object(d.jsx)("a",{href:"#",children:"Contact"})]}),Object(d.jsx)("p",{className:"footer-company-name",children:"Nico Alvarez \xa9 2021"})]}),Object(d.jsxs)("div",{className:"footer-center",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("i",{className:"fa fa-map-marker"}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{})," Berlin"]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("i",{className:"fa fa-phone"}),Object(d.jsx)("p",{children:"+49 0163-962-8128"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("i",{className:"ml-1 fa fa-envelope"}),Object(d.jsx)("p",{children:Object(d.jsx)("a",{href:"https://www.gmail.com",children:"neao002@gmail.com"})})]})]}),Object(d.jsx)("div",{className:"footer-right",children:Object(d.jsxs)("div",{className:"footer-icons",children:[Object(d.jsx)("a",{href:"https://www.facebook.com/nalvarezortiz",children:Object(d.jsx)("i",{className:"fa fa-facebook"})}),Object(d.jsx)("a",{href:"https://www.linkedin.com/in/nicol%C3%A1s-%C3%A1lvarez-609bb9165/",children:Object(d.jsx)("i",{className:"fa fa-linkedin"})}),Object(d.jsx)("a",{href:"https://github.com/neao002",children:Object(d.jsx)("i",{className:"fa fa-github"})})]})})]})})};var A=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(d.jsx)(j.a,{basename:"/",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(h,{}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",children:Object(d.jsx)(N,{})}),Object(d.jsx)(l.a,{path:"/add_Products",children:Object(d.jsx)(g,{updating:function(){n(!c)}})}),Object(d.jsx)(l.a,{path:"/update/:id",children:Object(d.jsx)(k,{})})]}),Object(d.jsx)(P,{})]})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,93)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(A,{})}),document.getElementById("root")),S()}},[[86,1,2]]]);
//# sourceMappingURL=main.4b4ae52f.chunk.js.map