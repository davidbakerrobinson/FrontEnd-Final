(this.webpackJsonpfood_nutrition_app=this.webpackJsonpfood_nutrition_app||[]).push([[0],{133:function(e,t,n){},152:function(e,t,n){},153:function(e,t,n){},171:function(e,t,n){},172:function(e,t,n){},185:function(e,t,n){},195:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(29),s=n.n(a),i=(n(152),n(6)),o=(n(153),n(90)),j=n.n(o),l=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e},n=[],c=[],r=0;r<12;++r)n.push(j.a.get(e[r]).then((function(e){c.push(e)})));Promise.allSettled(n).then((function(e){var n=c.filter((function(e){return 200===e.status&&e.data.totalResults>0})),r=JSON.stringify(n);sessionStorage.setItem("Home_Page_Array",r),t(n)}))},u=(n(171),n(172),n(50),n(2)),d=n(211),b=n(145),h=n(134),O=n(208),x=n(202),f=n(34),m=n(1);function p(e){var t=e.setLink,n=e.setCompare,r=e.info,a=e.src,s=e.key,o=e.alt,j=e.compare,l=e.index,p=e.setRemoved,g=Object(c.useState)(!1),v=Object(i.a)(g,2),y=v[0],N=v[1],S=Object(c.useRef)(null),I=Object(c.useState)(!1),w=Object(i.a)(I,2),C=w[0],k=w[1];return Object(m.jsxs)(d.a,{onMouseEnter:function(){return N(!0)},onMouseLeave:function(){return N(!1)},children:[Object(m.jsx)(d.a.Img,{className:"col-img",src:a,alt:o},s),Object(m.jsx)(b.a,{in:y,children:Object(m.jsxs)(d.a.Body,{className:"active",children:[Object(m.jsx)(d.a.Title,{children:o}),Object(m.jsx)(h.a,{ref:S,onMouseOut:function(){return k(!1)},onClick:function(){j.length<2?n(r):k(!0),t(r)},className:"btn-success",children:"Compare"}),Object(m.jsx)(O.a,{target:S.current,show:C,placement:"bottom",children:function(e){return Object(m.jsx)(x.a,Object(u.a)(Object(u.a)({},e),{},{children:"Only two recipes are permitted"}))}}),Object(m.jsx)(f.b,{to:"/recipe",children:Object(m.jsx)(h.a,{onClick:function(){return t(r)},className:"btn-primary",children:"Info"})}),Object(m.jsx)(h.a,{onClick:function(){var e=sessionStorage.getItem("Home_Page_Array"),t=JSON.parse(e);t.splice(l,1);var n=JSON.stringify(t);sessionStorage.setItem("Home_Page_Array",n),p()},className:"btn-danger",children:"Remove"})]})})]})}var g=function(e){var t=e.setLink,n=e.info,c=e.src,r=e.alt,a=e.toCompare,s=e.compare,i=e.index,o=e.setRemoved,j=void 0===o?function(e){return e}:o;return console.log("I am in the image definition\n    and the data is\n    ".concat(n.data,"\n    ")),Object(m.jsx)(p,{setRemoved:j,index:i,compare:s,setCompare:a,src:c,alt:r,info:n,setLink:t})},v=n(108),y=n(203),N=n(204);function S(e){return Math.floor(Math.random()*e)}var I=function(e){var t,n,r=e.stateChange,a=void 0===r?function(e){return e}:r,s=e.setLink,o=void 0===s?function(e){return e}:s,j=e.toCompare,u=void 0===j?function(e){return e}:j,d=e.columnCount,b=e.compare,h=Object(c.useState)(!1),O=Object(i.a)(h,2),x=O[0],f=O[1];if(null===sessionStorage.getItem("Home_Page_Array")){var p="main%20course side%20dish".split(" ");console.log("I be in dat conditional render do");for(var I=[],w=p.length,C=0;C<18;C++){var k=S(w),E=S(900);I.push((t=p[k],n=E,"https://api.spoonacular.com/recipes/complexSearch?apiKey=145e78a54cd247a3aa402896abfbbc1a&type=".concat(t,"&offset=").concat(n,"&addRecipeInformation=true&addRecipeNutrition=true&number=1")))}return l(I,a),Object(m.jsx)("h1",{children:"Images are loading..."})}{var A=sessionStorage.getItem("Home_Page_Array"),L=JSON.parse(A),R=L.length,_=Math.ceil(L.length/d);function e(e,t,n){for(var c=[],r=t*e+t,a=e*t;a<r;++a)if(a<R){var s=n[a];c.push(Object(m.jsx)(v.a,{children:Object(m.jsx)(g,{setRemoved:function(){return f(!x)},index:a,compare:b,setLink:o,toCompare:u,info:s,src:s.data.results[0].image,alt:"".concat(s.data.results[0].title)},s.data.results[0].id)},a))}else c.push(Object(m.jsx)(v.a,{},a));return c}function t(t,n,c){for(var r=[],a=0;a<t;++a)r.push(Object(m.jsx)(y.a,{children:e(a,c,n)},a));return r}return console.log(_),Object(m.jsx)(N.a,{className:"margin",children:t(_,L,d)})}},w=n(212),C=n(207),k=n(209),E=n(138),A=function(e){var t=Object(c.useState)(e),n=Object(i.a)(t,2),r=n[0],a=n[1];return[{value:r,onChange:function(e){return a(e.target.value)}},function(){return a(e)}]},L=n(17);var R=function(e){var t=e.changeRecipe,n=void 0===t?function(e){return e}:t,r=A(""),a=Object(i.a)(r,2),s=a[0],o=a[1],l=Object(c.useState)(!1),d=Object(i.a)(l,2),b=d[0],O=d[1];return Object(m.jsxs)(C.a,{className:"border p3",children:[Object(m.jsxs)(N.a,{children:[Object(m.jsx)(C.a.Brand,{href:"https://davidbakerrobinson.github.io/FrontEnd-Final/#/",children:Object(m.jsx)("h2",{children:"Food Nutrition"})}),Object(m.jsx)(w.a.Link,{href:"https://davidbakerrobinson.github.io/FrontEnd-Final/#/macro-calculator",children:Object(m.jsx)(h.a,{children:"Macro Calculator"})}),Object(m.jsxs)(k.a,{className:"d-flex",onSubmit:function(e){e.preventDefault(),j.a.get(function(e){var t=encodeURI(e);return"https://api.spoonacular.com/recipes/complexSearch?apiKey=145e78a54cd247a3aa402896abfbbc1a&addRecipeInformation=true&addRecipeNutrition=true&query=".concat(t,"&number=1")}(s.value)).then((function(e){n(e)})).catch((function(e){alert("Error occurred with request: ".concat(e))})),O(!0),o()},children:[Object(m.jsx)(E.a,Object(u.a)(Object(u.a)({},s),{},{type:"search","aria-label":"Search",placeholder:"Search"})),Object(m.jsx)(h.a,{type:"submit",variant:"outline-success",children:"Search"})]})]}),b&&Object(m.jsx)(L.a,{to:"/recipe"})]})},_=n(123);var P=n(140),q=n(141),F=(n(185),function(e){var t=e.setLink,n=void 0===t?function(e){return e}:t,r=e.column_count,a=void 0===r?3:r,s=e.compare,o=e.setCompare,j=Object(c.useState)([]),l=Object(i.a)(j,2),u=(l[0],l[1]);return Object(m.jsxs)("div",{children:[Object(m.jsx)(I,{stateChange:function(e){u(e)},setLink:n,columnCount:a,toCompare:function(e){var t=s.map((function(e){return e}));t.push(e),o(t)},compare:s}),Object(m.jsx)(b.a,{in:s.length>0,children:Object(m.jsxs)("div",{className:"fixed-bottom d-flex justify-content-center bottom-box bg-light align-items-center",children:[s.map((function(e,t){return Object(m.jsxs)("div",{children:[Object(m.jsx)(_.a,{className:"image-sizing",src:e.data.results[0].image},t),Object(m.jsx)(h.a,{variant:"danger",onClick:function(){return function(e){var t=s.map((function(e){return e}));t.splice(e,1),o(t)}(t)},children:Object(m.jsx)(P.a,{icon:q.a})})]})})),s.length>1&&Object(m.jsx)(f.b,{to:"/compare",id:"compare-margin",children:Object(m.jsx)(h.a,{variant:"info",children:"Compare"})})]})})]})}),T=n(215),H=n(47),M=n(205),B=n(144),J=(n(194),function(e,t){var n=Object(c.useState)([]),r=Object(i.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(!0),j=Object(i.a)(o,2),l=j[0],u=j[1],d=Object(c.useState)(null),b=Object(i.a)(d,2),h=b[0],O=b[1],x=Object(c.useState)(!1),f=Object(i.a)(x,2),m=f[0],p=f[1];return Object(c.useEffect)((function(){u(!0);var n=new AbortController,c="https://api.nal.usda.gov/fdc/v1/foods/search?api_key=tUczyHuY9sF4hO3Ndv4LQbQcwO1xU3ounwk9pbsc&query="+encodeURIComponent(e)+"&pageSize="+t+"&dataType=Branded";return fetch(c,{signal:n.signal}).then((function(e){if(!e.ok)throw Error("Could not fetch the data");return e.json()})).then((function(e){var t=e.foods.filter((function(e){return e.foodNutrients.filter((function(e){return"Energy"===e.nutrientName&&"kcal"===e.unitName.toLowerCase()})).length>0}));0===t.length?(p(!0),s([]),u(!1),O(null)):(p(!1),s(t),u(!1),O(null))})).catch((function(e){"AbortError"===e.name?console.log("Aborted"):(O(e.message),u(!1))})),function(){return n.abort()}}),[e,t]),{data:a,isPending:l,error:h,empty:m}}),U=function(e){var t=e.TDEE,n=Object(c.useState)(""),r=Object(i.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)([]),j=Object(i.a)(o,2),l=j[0],d=j[1],b=Object(c.useState)(0),h=Object(i.a)(b,2),O=h[0],x=h[1],f=J(a,15),p=f.data,g=f.isPending,v=Object(c.useRef)(),y=function(e){d(l.map((function(t){return t.fdcId===parseInt(e.target.dataset.id)?Object(u.a)(Object(u.a)({},t),{},{quantity:parseInt(e.target.value)}):Object(u.a)({},t)})))};Object(c.useEffect)((function(){var e=l.map((function(e){return e.energy*e.quantity})).reduce((function(e,t){return e+t}),0);x(e)}),[l]);return Object(m.jsxs)(T.a,{children:[Object(m.jsx)("h4",{className:"mt-5 text-center",children:"Add consumed food"}),Object(m.jsx)(B.a,{id:"async-query-food",filterBy:function(){return!0},isLoading:g,labelKey:"description",minLength:3,onSearch:s,onChange:function(e){var t=e[0],n=!1;if(d(l.map((function(e){var c=e.fdcId===t.fdcId;return(n|=c)?Object(u.a)(Object(u.a)({},e),{},{quantity:e.quantity+1}):Object(u.a)({},e)}))),!n){var c=t.foodNutrients.find((function(e){return"Energy"===e.nutrientName&&"kcal"===e.unitName.toLowerCase()})).value,r={fdcId:t.fdcId,text:t.description+" - "+t.brandOwner,energy:c,quantity:1};d((function(e){return[].concat(Object(H.a)(e),[r])}))}v.current.clear()},options:p,placeholder:"Milk, Apple,...",renderMenuItemChildren:function(e,t){return Object(m.jsxs)("span",{children:[e.description," - ",e.brandOwner]})},ref:v}),l.length>0&&Object(m.jsxs)(M.a,{className:"mt-3",striped:!0,bordered:!0,hover:!0,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{className:"w-50",children:"Name"}),Object(m.jsxs)("th",{className:"w-25 text-center",children:["Energy",Object(m.jsx)("br",{}),"(each 100g/100ml)"]}),Object(m.jsx)("th",{className:"w-25 text-center",children:"Quantity"})]})}),Object(m.jsx)("tbody",{children:l.map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.text}),Object(m.jsx)("td",{className:"text-center",children:e.energy}),Object(m.jsx)("td",{className:"text-center",children:Object(m.jsx)("input",{type:"number","data-id":e.fdcId,value:e.quantity,min:"0",onChange:y,style:{width:"40px"}})})]},t)}))})]}),function(){if(O>0){var e=t-O,n="";return e>0?n="You need ".concat(e," calories to maintain your current weight."):e<0&&(n="You've eaten more than your maintain calories ".concat(-1*e,".")),Object(m.jsxs)("h3",{id:"calorie",children:["You consumed ",Object(m.jsx)("span",{className:"calorie",children:O})," kcal. ",Object(m.jsx)("span",{className:"calorie",children:n})]})}}()]})},D=n(139),z=function(e){var t=e.onTDEE,n=Object(c.useState)(""),r=Object(i.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(""),j=Object(i.a)(o,2),l=j[0],u=j[1],d=Object(c.useState)(""),b=Object(i.a)(d,2),O=b[0],x=b[1],f=Object(c.useState)("1"),p=Object(i.a)(f,2),g=p[0],v=p[1],y=Object(c.useState)("1"),N=Object(i.a)(y,2),S=N[0],I=N[1];return Object(m.jsx)(T.a,{children:Object(m.jsxs)(k.a,{onSubmit:function(e){var n,c,r;switch(e.preventDefault(),"1"===S?n=66+13.7*parseInt(l)+5*parseInt(a)-6.8*parseInt(O):"2"===S&&(n=655+9.6*parseInt(l)+1.8*parseInt(a)-4.7*parseInt(O)),parseInt(g)){case 1:default:r=1.2;break;case 2:r=1.375;break;case 3:r=1.55;break;case 4:r=1.725;break;case 5:r=1.9}c=parseInt(r*n),console.log({height:a,weight:l,age:O,activityLevel:g,gender:S}),console.log({BMR:n,activity:r,TDEE:c}),t(c)},children:[Object(m.jsx)(D.a,{controlId:"formInput.height",label:"Height (cm)",children:Object(m.jsx)(k.a.Control,{type:"number",min:"0",placeholder:"1",required:!0,onChange:function(e){return s(e.target.value)}})}),Object(m.jsx)(D.a,{className:"mt-3",controlId:"formInput.width",label:"Weight (kg)",children:Object(m.jsx)(k.a.Control,{type:"number",min:"0",placeholder:"1",required:!0,onChange:function(e){return u(e.target.value)}})}),Object(m.jsx)(D.a,{className:"mt-3",controlId:"formInput.age",label:"Age",children:Object(m.jsx)(k.a.Control,{type:"number",min:"0",placeholder:"1",required:!0,onChange:function(e){return x(e.target.value)}})}),Object(m.jsx)(D.a,{className:"mt-3",controlId:"formInput.activityLevel",label:"Activity",children:Object(m.jsxs)(k.a.Select,{onChange:function(e){return v(e.target.value)},children:[Object(m.jsx)("option",{value:"1",children:"Sedentary"}),Object(m.jsx)("option",{value:"2",children:"Light Exercise (1-2 days per week)"}),Object(m.jsx)("option",{value:"3",children:"Moderate (3-5 days per week)"}),Object(m.jsx)("option",{value:"4",children:"Heavy (6-7 days per week)"}),Object(m.jsx)("option",{value:"5",children:"Athlete (2x per day)"})]})}),Object(m.jsxs)(T.a,{direction:"horizontal",className:"mt-3",children:[Object(m.jsx)(k.a.Check,{inline:!0,type:"radio",label:"Male",required:!0,value:"1",name:"formInput.gender",onChange:function(e){return I(e.target.value)}}),Object(m.jsx)(k.a.Check,{inline:!0,type:"radio",label:"Female",required:!0,value:"2",name:"formInput.gender",onChange:function(e){return I(e.target.value)}})]},"inline-radio"),Object(m.jsx)(T.a,{children:Object(m.jsx)(h.a,{className:"mt-3 align-self-center",type:"submit",children:"Calculate"})})]})})},Q=function(){var e=Object(c.useState)("TBD"),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)("h4",{children:"Total Daily Energy Expenditure(TDEE)"}),Object(m.jsxs)(T.a,{direction:"horizontal",gap:3,children:[Object(m.jsx)(T.a,{className:"border p-3 align-self-start w-50",children:Object(m.jsx)(z,{onTDEE:r})}),Object(m.jsxs)(T.a,{className:"align-self-start w-50",children:[Object(m.jsxs)(T.a,{className:"border p-3 text-center",children:[Object(m.jsx)("h4",{children:"Maintenance Calories"}),Object(m.jsx)("h4",{style:{color:"red"},children:n}),Object(m.jsx)("h4",{children:"Calories per day"})]}),Object(m.jsx)(U,{TDEE:n})]})]})]})},Y=(n(133),n(216)),K=function(e){var t=e.info,n=e.changeIngredient,c=void 0===n?function(e){return e}:n,r=e.showButton,a=void 0!==r&&r,s=e.forcompare,i=void 0!==s&&s,o=t.data.results[0].nutrition.ingredients,j=t.data.results[0].analyzedInstructions[0].steps,l=t.data.results[0].nutrition.nutrients;console.log(l);var u=j.map((function(e){return e.step})),b=o.map((function(e){return e.name}));return Object(m.jsxs)(N.a,{fluid:!0,children:[Object(m.jsxs)(y.a,{className:"p-10",children:[Object(m.jsx)(v.a,{}),Object(m.jsx)(v.a,{xs:12,md:6,className:"d-flex justify-content-center",children:Object(m.jsx)("img",{className:"w-100",src:t.data.results[0].image,alt:"food"})}),Object(m.jsx)(v.a,{})]}),a&&Object(m.jsxs)(y.a,{children:[Object(m.jsx)(v.a,{}),Object(m.jsx)(v.a,{xs:12,sm:6,children:Object(m.jsx)(f.b,{to:"/",children:Object(m.jsx)(h.a,{variant:"outline-success",onClick:function(){var e=sessionStorage.getItem("Home_Page_Array"),n=JSON.parse(e);n.unshift(t);var c=JSON.stringify(n);sessionStorage.setItem("Home_Page_Array",c)},children:"Add To HomePage"})})}),Object(m.jsx)(v.a,{})]}),Object(m.jsxs)(y.a,{children:[Object(m.jsx)(v.a,{sm:2}),Object(m.jsx)(v.a,{xs:12,md:8,className:"d-flex justify-content-center",children:Object(m.jsx)("h1",{className:"text-center",children:t.data.results[0].title})}),Object(m.jsx)(v.a,{})]}),!1===i&&Object(m.jsxs)(y.a,{children:[Object(m.jsx)(v.a,{xs:12,md:4,children:Object(m.jsx)(d.a,{className:"w-100",children:Object(m.jsxs)(d.a.Body,{children:[Object(m.jsx)(d.a.Header,{children:"Ingredients"}),Object(m.jsx)(Y.a,{variant:"flush",children:b.map((function(e,t){return Object(m.jsx)(Y.a.Item,{action:!0,onClick:function(){return c(e)},children:Object(m.jsx)(f.b,{to:"/ingredient/".concat(e),children:e})},t)}))})]})})}),Object(m.jsx)(v.a,{xs:12,md:4,children:Object(m.jsxs)(d.a,{className:"w-100",children:[Object(m.jsx)(d.a.Title,{children:"Recipe"}),Object(m.jsx)(d.a.Subtitle,{children:"Steps"}),Object(m.jsx)(Y.a,{variant:"flush",children:u.map((function(e,t){return Object(m.jsx)(Y.a.Item,{children:e},t)}))})]})}),Object(m.jsx)(v.a,{xs:12,md:4,children:Object(m.jsx)(d.a,{className:"w-100",children:Object(m.jsxs)(M.a,{children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Nutrient"}),Object(m.jsx)("th",{children:"Amount(units)"})]})}),Object(m.jsx)("tbody",{children:l.map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.name}),Object(m.jsxs)("td",{children:[e.amount,"(",e.unit,")"]})]},t)}))})]})})})]}),!0===i&&Object(m.jsxs)(y.a,{children:[Object(m.jsx)(v.a,{xs:12,children:Object(m.jsx)(d.a,{className:"w-100",children:Object(m.jsxs)(d.a.Body,{children:[Object(m.jsx)(d.a.Header,{children:"Ingredients"}),Object(m.jsx)(Y.a,{variant:"flush",children:b.map((function(e,t){return Object(m.jsx)(Y.a.Item,{action:!0,onClick:function(){return c(e)},children:Object(m.jsx)(f.b,{to:"/ingredient/".concat(e),children:e})},t)}))})]})})}),Object(m.jsx)(v.a,{xs:12,children:Object(m.jsxs)(d.a,{className:"w-100",children:[Object(m.jsx)(d.a.Title,{children:"Recipe"}),Object(m.jsx)(d.a.Subtitle,{children:"Steps"}),Object(m.jsx)(Y.a,{variant:"flush",children:u.map((function(e,t){return Object(m.jsx)(Y.a.Item,{children:e},t)}))})]})}),Object(m.jsx)(v.a,{xs:12,children:Object(m.jsx)(d.a,{className:"w-100",children:Object(m.jsxs)(M.a,{children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Nutrient"}),Object(m.jsx)("th",{children:"Amount(units)"})]})}),Object(m.jsx)("tbody",{children:l.map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.name}),Object(m.jsxs)("td",{children:[e.amount,"(",e.unit,")"]})]},t)}))})]})})})]})]})},G=function(e){var t=e.info,n=e.changeIngredient,c=void 0===n?function(e){return e}:n;if(null!=t){if(0===t.data.totalResults)return Object(m.jsx)("h1",{children:"No Results were found for your search"});var r=t.data.results[0].nutrition.ingredients,a=t.data.results[0].analyzedInstructions[0].steps,s=t.data.results[0].nutrition.nutrients;console.log(s);a.map((function(e){return e.step})),r.map((function(e){return e.name}));return Object(m.jsx)(K,{info:t,changeIngredient:c,showButton:!0})}return Object(m.jsx)("h1",{children:"Loading..."})},W=n(206),V=n(213),X=n(210),Z=function(e,t){var n=Object(c.useState)([]),r=Object(i.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(!0),j=Object(i.a)(o,2),l=j[0],u=j[1],d=Object(c.useState)(null),b=Object(i.a)(d,2),h=b[0],O=b[1],x=Object(c.useState)(!1),f=Object(i.a)(x,2),m=f[0],p=f[1];return t<3&&(t=3),Object(c.useEffect)((function(){var n=new AbortController,c="https://pixabay.com/api/?key=24408638-26cdd708596774f885af10e46&q="+encodeURIComponent(e)+"&per_page="+t+"&category=food";return fetch(c,{signal:n.signal}).then((function(e){if(!e.ok)throw Error("Could not fetch the data");return e.json()})).then((function(e){var t=e.hits.map((function(e){return e.webformatURL}));0===t.length?(p(!0),s([]),u(!1),O(null)):(p(!1),s(t),u(!1),O(null))})).catch((function(e){"AbortError"===e.name?console.log("Aborted"):(O(e.message),u(!1))})),function(){return n.abort()}}),[e,t]),{data:a,isPending:l,error:h,empty:m}},$=function(e){var t=e.name,n=Z(t,3),c=n.data,r=n.isPending,a=n.error,s=n.empty;return Object(m.jsxs)(T.a,{children:[a&&Object(m.jsx)(W.a,{children:a}),r&&Object(m.jsx)(V.a,{as:"p",animation:"glow",children:Object(m.jsx)(V.a,{xs:12})}),s&&Object(m.jsx)("p",{children:"No photo to show."}),c.length>0&&Object(m.jsx)(X.a,{variant:"dark",children:c.map((function(e,t){return Object(m.jsx)(X.a.Item,{children:Object(m.jsx)("img",{src:e,alt:"Sample"})},t)}))})]})},ee=function(e){var t=Object(c.useState)([]),n=Object(i.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(!0),o=Object(i.a)(s,2),j=o[0],l=o[1],u=Object(c.useState)(null),d=Object(i.a)(u,2),b=d[0],h=d[1],O=Object(c.useState)(!1),x=Object(i.a)(O,2),f=x[0],m=x[1];return Object(c.useEffect)((function(){var t=new AbortController,n="https://api.nal.usda.gov/fdc/v1/foods/search?api_key=tUczyHuY9sF4hO3Ndv4LQbQcwO1xU3ounwk9pbsc&query="+encodeURIComponent(e)+"&pageSize=1&dataType=SR%20Legacy";return fetch(n,{signal:t.signal}).then((function(e){if(!e.ok)throw Error("Could not fetch the data");return e.json()})).then((function(e){0===e.foods.length?(m(!0),a([]),l(!1),h(null)):(m(!1),a(e.foods[0].foodNutrients.filter((function(e){return e.value>0}))),l(!1),h(null))})).catch((function(e){"AbortError"===e.name?console.log("Aborted"):(h(e.message),l(!1))})),function(){return t.abort()}}),[e]),{data:r,isPending:j,error:b,empty:f}},te=function(e){var t=e.name,n=ee(t),c=n.data,r=n.isPending,a=n.error,s=n.empty,i=function(e){switch(e){case"kJ":return"kJ";case"J":return"J";case"UG":return"\xb5g";default:return e.toLowerCase()}};return Object(m.jsxs)(T.a,{children:[a&&Object(m.jsx)(W.a,{children:a}),r&&Object(m.jsx)(V.a,{as:"p",animation:"glow",children:Object(m.jsx)(V.a,{xs:12})}),s&&Object(m.jsx)("p",{children:"No nutrients to show."}),c.length>0&&Object(m.jsxs)(M.a,{striped:!0,bordered:!0,hover:!0,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{className:"w-50",children:"Name"}),Object(m.jsx)("th",{className:"w-25",children:"Amount"}),Object(m.jsx)("th",{className:"w-25",children:"Unit"})]})}),Object(m.jsx)("tbody",{children:c&&function(){var e=null;return null!==c&&(e=c.map((function(e,t){if(e.nutrientName.toLowerCase().includes("protein")||e.nutrientName.toLowerCase().includes("carb")||e.nutrientName.toLowerCase().includes("lipid"))return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.nutrientName}),Object(m.jsx)("td",{children:e.value}),Object(m.jsx)("td",{children:i(e.unitName)})]},t)}))),console.log(e),e}()})]})]})},ne=n(214),ce=function(e,t){var n=Object(c.useState)([]),r=Object(i.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(!0),j=Object(i.a)(o,2),l=j[0],u=j[1],d=Object(c.useState)(null),b=Object(i.a)(d,2),h=b[0],O=b[1],x=Object(c.useState)(!1),f=Object(i.a)(x,2),m=f[0],p=f[1];return Object(c.useEffect)((function(){var n=new AbortController,c="https://api.spoonacular.com/recipes/findByIngredients?apiKey=512a6c36ad624fbf89471ffccafe02f0&ingredients="+encodeURIComponent(e)+"&number="+t;return fetch(c,{signal:n.signal}).then((function(e){if(!e.ok)throw Error("Could not fetch the data");return e.json()})).then((function(e){var t=e;0===t.length?(p(!0),s([]),u(!1),O(null)):(p(!1),s(t),u(!1),O(null))})).catch((function(e){"AbortError"===e.name?console.log("Aborted"):(O(e.message),u(!1))})),function(){return n.abort()}}),[e,t]),{data:a,isPending:l,error:h,empty:m}},re=function(e){var t=e.name,n=ce(t,3),c=n.data,r=n.isPending,a=n.error,s=n.empty;return Object(m.jsxs)(T.a,{children:[Object(m.jsx)("h4",{className:"mt-5",children:"Recipe"}),a&&Object(m.jsx)(W.a,{children:a}),r&&Object(m.jsx)(V.a,{as:"p",animation:"glow",children:Object(m.jsx)(V.a,{xs:12})}),s&&Object(m.jsx)("p",{children:"No recipe to show."}),c.length>0&&Object(m.jsx)(y.a,{children:c.map((function(e,t){return Object(m.jsx)(v.a,{children:Object(m.jsx)(T.a,{children:Object(m.jsxs)(ne.a,{children:[Object(m.jsx)(ne.a.Image,{src:e.image,thumbnail:!0,style:{height:"180px",width:"auto",objectFit:"cover"}}),Object(m.jsx)(ne.a.Caption,{children:e.title})]})})},t)}))})]})},ae=function(e){var t=e.ingredientName;return Object(m.jsxs)(T.a,{className:"mt-5 text-center",direction:"horizontal",gap:"3",children:[Object(m.jsxs)(T.a,{className:"w-75 align-self-start",children:[Object(m.jsx)("h4",{children:t}),Object(m.jsx)($,{name:t}),Object(m.jsx)(re,{name:t})]}),Object(m.jsxs)(T.a,{className:"w-25",children:[Object(m.jsx)("h4",{children:"Nutrition Facts"}),Object(m.jsx)(te,{name:t})]})]})};function se(e){var t=e.compare;return Object(m.jsx)("div",{children:Object(m.jsx)(N.a,{children:Object(m.jsx)(y.a,{children:t.map((function(e,t){return Object(m.jsx)(v.a,{children:Object(m.jsx)(K,{info:e,forcompare:!0},t)})}))})})})}var ie=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(i.a)(a,2),o=s[0],j=s[1],l=Object(c.useState)([]),u=Object(i.a)(l,2),d=u[0],b=u[1];return Object(m.jsx)(N.a,{className:"mt-3 mb-3",children:Object(m.jsxs)(f.a,{basename:"/FrontEnd-Final",children:[Object(m.jsx)(R,{changeRecipe:function(e){return r(e)}}),Object(m.jsx)("div",{className:"content mt-3",children:Object(m.jsxs)(L.d,{children:[Object(m.jsx)(L.b,{exact:!0,path:"/",children:Object(m.jsx)(F,{setLink:function(e){return r(e)},compare:d,setCompare:b,info:n,column_count:3})}),Object(m.jsx)(L.b,{path:"/recipe",children:Object(m.jsx)(G,{info:n,changeIngredient:function(e){return j(e)}})}),Object(m.jsx)(L.b,{path:"/compare",children:Object(m.jsx)(se,{compare:d})}),Object(m.jsx)(L.b,{path:"/ingredient/",children:Object(m.jsx)(ae,{ingredientName:o})}),Object(m.jsx)(L.b,{path:"/macro-calculator",children:Object(m.jsx)(Q,{})})]})})]})})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,217)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(ie,{})}),document.getElementById("root")),oe()}},[[195,1,2]]]);
//# sourceMappingURL=main.41fc87af.chunk.js.map