(this.webpackJsonpmynearbyplaces=this.webpackJsonpmynearbyplaces||[]).push([[0],{43:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(0),n=a.n(c),r=a(20),i=a.n(r),l=(a(43),a(21)),j=a(13),h=a(14),o=a(16),b=a(15),d=a(6),u=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(j.a)(this,a),(s=t.call(this)).onLogin=function(){s.state.authenticated},s.onChange=function(e){var t=e.target.value;s.setState({username:t})},s.onSubmit=function(e){s.state.username.trim().length>0&&s.setState({authenticated:!0})},s.state={username:"",authenticated:!1},s}return Object(h.a)(a,[{key:"render",value:function(){var e={pathname:"/",state:{username:this.state.username,authenticated:this.authenticated}};return this.state.authenticated?Object(s.jsx)(d.a,{to:e}):Object(s.jsx)("div",{id:"loginForm",children:Object(s.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(s.jsx)("label",{htmlFor:"username",children:"Sign in:"}),Object(s.jsx)("input",{type:"text",name:"username",value:this.state.username,onChange:this.onChange}),Object(s.jsx)("button",{type:"submit",children:"Login"})]})})}}]),a}(n.a.Component),p=a(61),O=a(54),x=a(55),m=a(56),y=a(35),f=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(e){var c;return Object(j.a)(this,a),(c=t.call(this)).createTable=function(){for(var e=[],t=0;t<c.state.places.length;t++){var a=c.state.places[t];e.push(Object(s.jsxs)("tr",{children:[Object(s.jsx)("p",{children:a.name}),Object(s.jsxs)("p",{children:["Type: ",a.type]}),Object(s.jsxs)("p",{children:["Delivery: ",a.hasDelivery]})," ",Object(s.jsxs)("p",{children:["Takeout: ",a.hasTakeOut]}),Object(s.jsx)("p",{children:a.address})," ",Object(s.jsx)("p",{children:a.phoneNum}),Object(s.jsx)("br",{})]}))}return e},c.onChange=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value;c.temp_query=a},c.fetchPlace=function(e){for(var t=0;t<c.state.places.length;t++){var a=c.state.places[t];if(a.name.toLowerCase().includes(e.toLowerCase()))return Object(s.jsx)("div",{className:"resultPlace",children:Object(s.jsx)(p.a,{style:{width:"18rem"},back:!0,children:Object(s.jsxs)(p.a.Body,{children:[Object(s.jsx)(O.a,{className:"foodThumb",src:a.thumb,roundedCircle:!0}),Object(s.jsx)("br",{}),Object(s.jsx)(p.a.Title,{children:a.name}),Object(s.jsxs)(p.a.Subtitle,{className:"mb-2 text-muted",children:["Type: ",a.type]}),Object(s.jsxs)(p.a.Text,{children:["Delivery: ",a.hasDelivery]}),Object(s.jsxs)(p.a.Text,{children:["Takeout: ",a.hasTakeOut]}),Object(s.jsx)(p.a.Link,{href:"#",children:a.address}),Object(s.jsx)("br",{}),Object(s.jsx)(p.a.Link,{href:"#",children:a.phoneNum})]})})})}return Object(s.jsx)("div",{children:"Not Found"})},c.fetchFivePlaces=function(){if(c.props.places.length>=4){var e=c.props.places[0],t=c.props.places[1],a=(c.props.places[2],c.props.places[3]);return Object(s.jsxs)("div",{id:"defaultPlaces",children:[Object(s.jsx)("br",{}),Object(s.jsx)("h1",{className:"sep",children:"Nearby Places"}),Object(s.jsx)(x.a,{children:Object(s.jsxs)(m.a,{children:[Object(s.jsx)(y.a,{children:Object(s.jsx)(p.a,{style:{width:"18rem"},back:!0,children:Object(s.jsxs)(p.a.Body,{children:[Object(s.jsx)(O.a,{className:"foodThumb",src:e.thumb,roundedCircle:!0}),Object(s.jsx)("br",{}),Object(s.jsx)(p.a.Title,{children:e.name}),Object(s.jsxs)(p.a.Subtitle,{className:"mb-2 text-muted",children:["Type: ",e.type]}),Object(s.jsxs)(p.a.Text,{children:["Delivery: ",e.hasDelivery]}),Object(s.jsxs)(p.a.Text,{children:["Takeout: ",e.hasTakeOut]}),Object(s.jsx)(p.a.Link,{href:"#",children:e.address}),Object(s.jsx)("br",{}),Object(s.jsx)(p.a.Link,{href:"#",children:e.phoneNum})]})})}),Object(s.jsx)(y.a,{children:Object(s.jsx)(p.a,{style:{width:"18rem"},back:!0,children:Object(s.jsxs)(p.a.Body,{children:[Object(s.jsx)(O.a,{className:"foodThumb",src:t.thumb,roundedCircle:!0}),Object(s.jsx)("br",{}),Object(s.jsx)(p.a.Title,{children:t.name}),Object(s.jsxs)(p.a.Subtitle,{className:"mb-2 text-muted",children:["Type: ",t.type]}),Object(s.jsxs)(p.a.Text,{children:["Delivery: ",t.hasDelivery]}),Object(s.jsxs)(p.a.Text,{children:["Takeout: ",t.hasTakeOut]}),Object(s.jsx)(p.a.Link,{href:"#",children:t.address}),Object(s.jsx)("br",{}),Object(s.jsx)(p.a.Link,{href:"#",children:t.phoneNum})]})})}),Object(s.jsx)(y.a,{children:Object(s.jsx)(p.a,{style:{width:"18rem"},back:!0,children:Object(s.jsxs)(p.a.Body,{children:[Object(s.jsx)(O.a,{className:"foodThumb",src:a.thumb,roundedCircle:!0}),Object(s.jsx)("br",{}),Object(s.jsx)(p.a.Title,{children:a.name}),Object(s.jsxs)(p.a.Subtitle,{className:"mb-2 text-muted",children:["Type: ",a.type]}),Object(s.jsxs)(p.a.Text,{children:["Delivery: ",a.hasDelivery]}),Object(s.jsxs)(p.a.Text,{children:["Takeout: ",a.hasTakeOut]}),Object(s.jsx)(p.a.Link,{href:"#",children:a.address}),Object(s.jsx)("br",{}),Object(s.jsx)(p.a.Link,{href:"#",children:a.phoneNum})]})})})]})}),Object(s.jsx)("br",{})]})}return Object(s.jsx)("div",{children:"No Places"})},c.onSubmit=function(e){c.setState({search_query:c.temp_query}),c.temp_query="",e.preventDefault()},c.temp_query="",c.state={places:e.places,search_query:""},c}return Object(h.a)(a,[{key:"render",value:function(){return console.log("QUERY: "+this.state.search_query),Object(s.jsxs)("div",{children:[Object(s.jsxs)("form",{id:"searchForm",onSubmit:this.onSubmit,children:[Object(s.jsx)("label",{htmlFor:"search",children:"Search A Place: "}),Object(s.jsx)("input",{id:"placeSearchBox",type:"text",name:"search_query",onChange:this.onChange}),Object(s.jsx)("button",{type:"submit",children:"Search"})]}),""===this.state.search_query?this.fetchFivePlaces():this.fetchPlace(this.state.search_query)]})}}]),a}(n.a.Component),v=a(59),g=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(j.a)(this,a),(s=t.call(this)).setPlaces=function(){s.props.location&&s.props.location.state&&s.setState({places:s.props.location.state.places}),console.log(s.state)},s.onChangeName=function(e){e.persist();var t=e.target.value;s.setState((function(e){return{name:t}}))},s.onSubmit=function(e){var t=s.createPlace(),a=s.state.places;a.push(t),d.a,s.props},s.createPlace=function(){return{name:s.state.name,type:s.state.type,hasDelivery:s.state.hasDelivery,hasTakeout:s.state.hasTakeout,address:s.state.address,phoneNum:s.state.phoneNum,thumb:s.state.thumb}},s.state={places:[],name:"",type:"",hasDelivery:"Yes",hasTakeout:"Yes",address:"",phoneNum:"",thumb:""},s}return Object(h.a)(a,[{key:"render",value:function(){return console.log("Props"),console.log(this.props),0===this.state.places.length&&this.setPlaces(),""!==this.state.name?this.state.name:Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{className:"sep",children:"Add a Place"}),Object(s.jsx)("div",{id:"addForm",children:Object(s.jsxs)(v.a,{children:[Object(s.jsxs)(v.a.Group,{controlId:"formName",children:[Object(s.jsx)(v.a.Label,{children:"New Place Name"}),Object(s.jsx)(v.a.Control,{type:"type",placeholder:"Ex: Tucker's Chop House"})]}),Object(s.jsxs)(v.a.Group,{controlId:"formType",children:[Object(s.jsx)(v.a.Label,{children:"Place Type"}),Object(s.jsx)(v.a.Control,{type:"type",placeholder:"Ex: Chinese, American, Mexican"})]}),Object(s.jsxs)(v.a.Group,{controlId:"formDelivery",children:[Object(s.jsx)(v.a.Label,{children:"Does it have delivery?"}),Object(s.jsx)(v.a.Control,{type:"type",placeholder:"No"})]}),Object(s.jsxs)(v.a.Group,{controlId:"formTakeout",children:[Object(s.jsx)(v.a.Label,{children:"Does it have takeout?"}),Object(s.jsx)(v.a.Control,{type:"type",placeholder:"No"})]}),Object(s.jsxs)(v.a.Group,{controlId:"formAddress",children:[Object(s.jsx)(v.a.Label,{children:"Address"}),Object(s.jsx)(v.a.Control,{type:"type",placeholder:"Ex: 1234 W Harmony St"})]}),Object(s.jsxs)(v.a.Group,{controlId:"formPhone",children:[Object(s.jsx)(v.a.Label,{children:"Phone Number"}),Object(s.jsx)(v.a.Control,{type:"type",placeholder:"Ex: 480-123-4567"})]}),Object(s.jsx)("button",{type:"submit",children:"Add Place"})]})})]})}}]),a}(n.a.Component),T=a(9),N=a(58),k=a(60),S=a(57),C=a.p+"static/media/apple.fde7415a.jpg",P=a.p+"static/media/lair.3801f713.jpg",L=a.p+"static/media/taco.049a69ab.jpg",D=a.p+"static/media/wildcat.1b7f4bd1.jpg",F=(a(50),function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(e){var c;return Object(j.a)(this,a),(c=t.call(this)).login=function(){c.setState({loggedIn:!0})},c.body=function(){return Object(s.jsxs)("div",{className:"content",children:[Object(s.jsx)(T.b,{to:{pathname:"/add",state:{places:c.state.places}},children:"Add a Place"}),Object(s.jsx)("br",{}),Object(s.jsx)(T.b,{to:{pathname:"/delete",state:{places:c.state.places}},children:"Delete a Place"}),Object(s.jsx)("br",{}),Object(s.jsx)(T.b,{to:{pathname:"/search",state:{places:c.state.places}},children:"Find a Place"}),Object(s.jsx)("br",{})]})},c.addPlace=function(e){var t=JSON.parse(JSON.stringify(c.state.places));c.setState({places:t})},c.getPlaces=function(){var e=[];for(var t in c.state.places)e.push(t);return e},c.nav=function(){return Object(s.jsxs)(N.a,{bg:"light",variant:"light",children:[Object(s.jsxs)(k.a,{className:"mr-auto",children:[Object(s.jsx)(N.a.Brand,{href:"/",children:"MyNearbyPlaces"}),Object(s.jsx)(k.a.Link,{as:T.b,to:{pathname:"/",state:{username:c.state.username,authenticated:!0}},children:"Home"}),Object(s.jsx)(k.a.Link,{as:T.b,to:{pathname:"/add",state:{places:c.state.places,addPlace:c.addPlace,test:""}},children:"Add a Place"})]}),Object(s.jsx)(k.a,{children:Object(s.jsxs)(k.a.Link,{href:"#deets",children:["Welcome, ",c.state.username]})})]})},c.searchTextHandler=function(e){},c.state={loggedIn:!1,authenticated:!1,username:"",places:[{name:"Applebee's Grill + Bar",hasDelivery:"Yes",hasTakeOut:"Yes",address:"5870 East Broadway",phoneNum:"(520) 750-9780",type:"American, Sports Bar",thumb:C},{name:"Joey's Taco Shop",hasDelivery:"Yes",hasTakeOut:"Yes",address:"123 South Campbell",phoneNum:"(520) 125-1538",type:"Mexican, Small Plates",thumb:L},{name:"Wildcat Kitchen",hasDelivery:"Yes",hasTakeOut:"Yes",address:"1658 N Cherry Ave",phoneNum:"(520) 986-8943",type:"Variety, Grill",thumb:D},{name:"Roger's Lair",hasDelivery:"Yes",hasTakeOut:"Yes",address:"123 S Kent St",phoneNum:"(520) 712-7649",type:"BBQ, American",thumb:P}],cursor:0},c}return Object(h.a)(a,[{key:"render",value:function(){return this.props.location&&this.props.location.state&&this.props.location.state.username&&this.state.username!=this.props.location.state.username&&this.setState({username:this.props.location.state.username,authenticated:this.props.location.state.authenticated}),Object(s.jsx)("div",{children:Object(s.jsxs)("body",{children:[Object(s.jsx)("div",{id:"navigation-bar",children:Object(s.jsx)("div",{className:"username",children:this.state.username.length>0?Object(s.jsx)("div",{className:"username",children:this.nav()}):Object(s.jsx)("div",{id:"notLogged",children:Object(s.jsx)(u,{})})})}),Object(s.jsxs)(S.a,{className:"hero",children:[Object(s.jsx)("h1",{children:"Welcome to Mynearbyplaces!"}),Object(s.jsx)("p",{children:"Here one can find a multitude of nearby restaurants. All kinds of cultural cuisines and recipe in your local area can be found today!"})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)("div",{children:[Object(s.jsx)(f,{places:this.state.places,searchTextChanged:this.searchTextHandler}),Object(s.jsx)("br",{}),Object(s.jsx)("hr",{}),Object(s.jsx)("br",{}),Object(s.jsx)(g,{places:this.state.places,searchTextChanged:this.searchTextHandler})]})]})})}}]),a}(n.a.Component)),A=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(j.a)(this,a),(s=t.call(this)).setPlaces=function(){s.props.location&&s.props.location.state&&s.setState({places:s.props.location.state.places})},s.onSubmit=function(e){for(var t=s.state.places,a=0;a<t.length;a++){t[a].name.includes(s.state.name)&&t.splice(a,1)}d.a},s.state={places:[],name:""},s}return Object(h.a)(a,[{key:"render",value:function(){return 0===this.state.places.length&&this.setPlaces(),""!==this.state.name?this.state.name:Object(s.jsxs)("div",{id:"delForm",children:[Object(s.jsxs)("nav",{className:"navbar",children:[Object(s.jsx)("ul",{children:Object(s.jsx)(T.b,{to:{pathname:"/"},children:"Home"})}),Object(s.jsx)("span",{className:"username",children:this.state.username})]}),Object(s.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(s.jsx)("label",{htmlFor:"name",children:"Name of Place to Delete: "}),Object(s.jsx)("input",{type:"text",name:"name",onChange:this.onChangeName}),Object(s.jsx)("button",{type:"submit",children:"Submit"})]})]})}}]),a}(n.a.Component);a(51);var B=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(T.a,{basename:"/mynearbyplaces",children:Object(s.jsxs)(d.d,{children:[Object(s.jsx)(d.b,{exact:!0,path:"/",render:function(e){return Object(s.jsx)(F,Object(l.a)({},e))}}),Object(s.jsx)(d.b,{exact:!0,path:"/login",render:function(e){return Object(s.jsx)(u,Object(l.a)({},e))}}),Object(s.jsx)(d.b,{exact:!0,path:"/add",render:function(e){return Object(s.jsx)(g,Object(l.a)({},e))}}),Object(s.jsx)(d.b,{exact:!0,path:"/delete",render:function(e){return Object(s.jsx)(A,Object(l.a)({},e))}})]})})})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,62)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),n(e),r(e)}))};i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(B,{})}),document.getElementById("root")),w()}},[[52,1,2]]]);
//# sourceMappingURL=main.693d0e8b.chunk.js.map