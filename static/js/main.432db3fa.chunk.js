(this.webpackJsonpreactniceresume=this.webpackJsonpreactniceresume||[]).push([[0],{22:function(e,s,t){},25:function(e,s,t){},37:function(e,s,t){"use strict";t.r(s);var a=t(2),c=t(14),n=t.n(c),i=(t(22),t(6)),r=t(7),l=t(9),j=t(8),o=(t(36),t(15)),d=t.n(o),h=(t(25),t(16)),b=t(5),m=t.n(b),u=t(1),O=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.LinkedIN,s=this.props.data.github,t=this.props.data.name,a=this.props.data.description;return Object(u.jsxs)("header",{id:"home",children:[Object(u.jsx)(h.a,{type:"lines",bg:!0}),Object(u.jsx)("nav",{id:"nav-wrap",children:Object(u.jsxs)("ul",{id:"nav",className:"nav",children:[Object(u.jsx)("li",{className:"current",children:Object(u.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})}),Object(u.jsx)("div",{className:"row banner",children:Object(u.jsxs)("div",{className:"banner-text",children:[Object(u.jsx)(m.a,{bottom:!0,children:Object(u.jsx)("h1",{className:"responsive-headline",children:t})}),Object(u.jsx)(m.a,{bottom:!0,duration:1200,children:Object(u.jsxs)("h3",{children:[a,"."]})}),Object(u.jsx)("hr",{}),Object(u.jsx)(m.a,{bottom:!0,duration:3e3,children:Object(u.jsxs)("ul",{className:"social",children:[Object(u.jsxs)("a",{href:e,className:"button btn project-btn",children:[Object(u.jsx)("i",{className:"fa fa-book"}),"LinkedIn"]}),Object(u.jsxs)("a",{href:s,className:"button btn github-btn",children:[Object(u.jsx)("i",{className:"fa fa-github"}),"Github"]})]})})]})}),Object(u.jsx)("p",{className:"scrolldown",children:Object(u.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(u.jsx)("i",{className:"icon-down-circle"})})})]})}}]),t}(a.Component),x=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:e.url,children:Object(u.jsx)("i",{className:e.className})})},e.name)}));return Object(u.jsx)("footer",{children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)(m.a,{bottom:!0,children:Object(u.jsx)("div",{className:"twelve columns",children:Object(u.jsx)("ul",{className:"social-links",children:e})})}),Object(u.jsx)("div",{id:"go-top",children:Object(u.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(u.jsx)("i",{className:"icon-up-open"})})})]})})}}]),t}(a.Component),p=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;this.props.data.name;var e="images/"+this.props.data.image,s=this.props.data.bio,t=this.props.data.address.street,a=this.props.data.address.city,c=this.props.data.address.state,n=this.props.data.address.zip,i=this.props.data.phone,r=this.props.data.email,l=this.props.data.resumedownload;return Object(u.jsx)("section",{id:"about",children:Object(u.jsx)(m.a,{duration:1e3,children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"three columns",children:Object(u.jsx)("img",{className:"profile-pic",src:e,alt:"Akash Tickoo Profile Pic"})}),Object(u.jsxs)("div",{className:"nine columns main-col",children:[Object(u.jsx)("h2",{children:"About Me"}),Object(u.jsx)("p",{children:s}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"columns contact-details",children:[Object(u.jsx)("h2",{children:"Contact Details"}),Object(u.jsxs)("p",{className:"address",children:[Object(u.jsx)("br",{}),Object(u.jsxs)("span",{children:[t,Object(u.jsx)("br",{}),a," ",c,", ",n]}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:i}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:r})]})]}),Object(u.jsx)("div",{className:"columns download",children:Object(u.jsx)("p",{children:Object(u.jsxs)("a",{href:l,className:"button",children:[Object(u.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})})}}]),t}(a.Component),f=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"getRandomColor",value:function(){for(var e="#",s=0;s<6;s++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;this.props.data.skillmessage;var s=this.props.data.education.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.school}),Object(u.jsxs)("p",{className:"info",children:[e.degree," ",Object(u.jsx)("span",{children:"\u2022"})," ",e.percentage," ",Object(u.jsx)("span",{children:"\u2022"}),Object(u.jsx)("em",{className:"date",children:e.graduated})]}),Object(u.jsx)("p",{className:"info",children:e.description})]},e.school)})),t=this.props.data.work.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.company}),Object(u.jsxs)("p",{className:"info",children:[e.title,Object(u.jsx)("span",{children:"\u2022"})," ",Object(u.jsx)("em",{className:"date",children:e.years})]}),Object(u.jsx)("p",{className:"info",children:e.description})]},e.company)})),a=this.props.data.skills.map((function(s){var t=e.getRandomColor(),a="bar-expand "+s.name.toLowerCase(),c=s.level;return Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{style:{width:c,backgroundColor:t},className:a}),Object(u.jsx)("em",{children:s.name})]},s.name)}));return Object(u.jsxs)("section",{id:"resume",children:[Object(u.jsx)(m.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row education",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Education"})})}),Object(u.jsx)("div",{className:"nine columns main-col",children:Object(u.jsx)("div",{className:"row item",children:Object(u.jsx)("div",{className:"twelve columns",children:s})})})]})}),Object(u.jsx)(m.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row work",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Work"})})}),Object(u.jsx)("div",{className:"nine columns main-col",children:t})]})}),Object(u.jsx)(m.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row skill",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Skills"})})}),Object(u.jsx)("div",{className:"nine columns main-col",children:Object(u.jsx)("div",{className:"bars",children:Object(u.jsx)("ul",{className:"skills",children:a})})})]})})]})}}]),t}(a.Component),v=t(17),N=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(e){var a;return Object(i.a)(this,t),(a=s.call(this,e)).state={name:"",email:"",subject:"",message:"",successMessage:""},a}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;this.props.data.name;var e=this.props.data.address.street,s=this.props.data.address.city,t=this.props.data.address.state,a=this.props.data.address.zip,c=this.props.data.phone,n=this.props.data.contactmessage;return Object(u.jsxs)("section",{id:"contact",children:[Object(u.jsx)(b.Fade,{bottom:!0,duration:1e3,children:Object(u.jsxs)("div",{className:"row section-head",children:[Object(u.jsx)("div",{className:"two columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Get In Touch."})})}),Object(u.jsx)("div",{className:"ten columns",children:Object(u.jsx)("p",{className:"lead",children:n})})]})}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)(b.Slide,{left:!0,duration:1e3,children:Object(u.jsx)("div",{className:"eight columns",children:Object(u.jsx)("form",{onSubmit:this.handleSubmit.bind(this),method:"post",id:"contactForm",name:"contactForm",children:Object(u.jsxs)("fieldset",{children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(u.jsx)("span",{className:"required",children:"*"})]}),Object(u.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",value:this.state.name,onChange:this.onNameChange.bind(this)})]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(u.jsx)("span",{className:"required",children:"*"})]}),Object(u.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",value:this.state.email,onChange:this.onEmailChange.bind(this)})]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{htmlFor:"contactSubject",children:["Subject ",Object(u.jsx)("span",{className:"required",children:"*"})]}),Object(u.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",value:this.state.subject,onChange:this.onSubjectChange.bind(this)})]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(u.jsx)("span",{className:"required",children:"*"})]}),Object(u.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage",value:this.state.message,onChange:this.onMessageChange.bind(this)})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"submit",children:"Submit"}),Object(u.jsx)("span",{id:"image-loader",children:Object(u.jsx)("img",{alt:"",src:"images/loader.gif"})})]}),Object(u.jsx)("h4",{color:"#ffffff",children:this.state.successMessage})]})})})}),Object(u.jsx)(b.Slide,{right:!0,duration:1e3,children:Object(u.jsx)("aside",{className:"four columns footer-widgets",children:Object(u.jsxs)("div",{className:"widget widget_contact",children:[Object(u.jsx)("h4",{children:"Address and Phone"}),Object(u.jsxs)("p",{className:"address",children:[Object(u.jsx)("br",{}),e," ",Object(u.jsx)("br",{}),s,", ",t," ",a,Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:c})]})]})})})]})]})}},{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onSubjectChange",value:function(e){this.setState({subject:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}},{key:"handleSubmit",value:function(e){var s=this;e.preventDefault(),v.a.sendForm("service_grz6zeg","template_g67axhd",e.target,"TkeiYiy3ORS4_Pw9Q").then((function(e){console.log(e),s.setState({name:"",email:"",message:"",subject:"",successMessage:"Your message was sent, thank you!"})})).catch((function(e){return console.log(e)}))}}]),t}(a.Component),g=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(e){var a;return Object(i.a)(this,t),(a=s.call(this,e)).state={foo:"bar",resumeData:{}},a}return Object(r.a)(t,[{key:"getResumeData",value:function(){d.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,s,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(O,{data:this.state.resumeData.main}),Object(u.jsx)(p,{data:this.state.resumeData.main}),Object(u.jsx)(f,{data:this.state.resumeData.resume}),Object(u.jsx)(N,{data:this.state.resumeData.main}),Object(u.jsx)(x,{data:this.state.resumeData.main})]})}}]),t}(a.Component),k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,38)).then((function(s){var t=s.getCLS,a=s.getFID,c=s.getFCP,n=s.getLCP,i=s.getTTFB;t(e),a(e),c(e),n(e),i(e)}))};n.a.render(Object(u.jsx)(g,{}),document.getElementById("root")),k()}},[[37,1,2]]]);
//# sourceMappingURL=main.432db3fa.chunk.js.map