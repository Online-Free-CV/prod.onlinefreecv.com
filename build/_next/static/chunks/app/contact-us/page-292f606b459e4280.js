(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[746],{8097:function(e,t,s){Promise.resolve().then(s.bind(s,6812))},5601:function(e,t){"use strict";function s(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2702:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var n=s(3827),r=s(4090),l=()=>{let[e,t]=(0,r.useState)(!1);return(0,n.jsxs)("nav",{className:"flex items-center flex-row justify-between flex-wrap ",children:[(0,n.jsx)("a",{className:"flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl",href:"/",children:(0,n.jsx)("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500",children:"Online Free CV"})}),(0,n.jsx)("div",{className:"block lg:hidden",children:(0,n.jsx)("button",{onClick:()=>t(!e),className:"flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white",children:(0,n.jsxs)("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("title",{children:"Menu"}),(0,n.jsx)("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z"})]})})}),(0,n.jsx)("div",{className:"".concat(e?"block":"hidden"," w-full block flex-grow lg:flex lg:items-center lg:w-auto "),children:(0,n.jsx)("div",{className:"text-md lg:flex-grow text-end",children:(0,n.jsx)("a",{href:"/contact-us",className:"block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4",children:"Contact us"})})})]})},i={src:"https://onlinefreecv.com//_next/static/media/background.e0ed7b61.png"},a=()=>(0,n.jsx)("footer",{className:" text-white ",children:(0,n.jsxs)("div",{className:"container mx-auto text-center",children:[(0,n.jsxs)("p",{className:"text-sm",children:["\xa9 ",new Date().getFullYear()," Online Free CV. All rights reserved."]}),(0,n.jsxs)("div",{className:"mt-4",children:[(0,n.jsx)("a",{href:"/terms-of-service",className:"block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4",children:"Terms of Service"}),(0,n.jsx)("a",{href:"/privacy-policy",className:"block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 lg:mr-0",children:"Privacy Policy"})]})]})});function o(e){let{children:t,hideBg:s}=e;return(0,n.jsx)("main",{className:"leading-normal tracking-normal text-indigo-400 px-10 py-5 bg-cover bg-fixed min-h-screen",style:{backgroundImage:s?"none":"url(".concat(i.src,")"),width:"100%",height:"100%"},children:(0,n.jsxs)("div",{className:"h-full",children:[(0,n.jsx)(l,{}),t,(0,n.jsx)("div",{className:"w-full pt-16 pb-6 text-sm text-center fade-in",children:(0,n.jsx)(a,{})})]})})}},6812:function(e,t,s){"use strict";s.r(t);var n=s(3827),r=s(4090),l=s(5601),i=s.n(l),a=s(2702);t.default=()=>{let[e,t]=(0,r.useState)({name:"",email:"",message:""}),[s,l]=(0,r.useState)(!1),[o,c]=(0,r.useState)(!1),[d,m]=(0,r.useState)(!1),u=e=>{let{id:s,value:n}=e.target;t(e=>({...e,[s]:n}))},x=async s=>{s.preventDefault(),l(!0),c(!1),m(!1);try{(await fetch("https://formspree.io/f/xyzkrldb",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok?(c(!0),t({name:"",email:"",message:""})):m(!0)}catch(e){m(!0)}finally{l(!1)}};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i(),{children:[(0,n.jsx)("title",{children:"Contact Us - OnlineFreeCV"}),(0,n.jsx)("meta",{name:"description",content:"Contact OnlineFreeCV for any inquiries, support, or feedback."})]}),(0,n.jsx)(a.Z,{hideBg:!0,children:(0,n.jsxs)("div",{style:{maxWidth:"800px",margin:"auto",padding:"20px",lineHeight:"1.6"},className:"text-white",children:[(0,n.jsx)("h1",{className:"mb-5",children:"Contact Us"}),(0,n.jsxs)("form",{className:"space-y-4",onSubmit:x,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"block text-sm font-medium text-gray-300",htmlFor:"name",children:"Name"}),(0,n.jsx)("input",{type:"text",id:"name",value:e.name,onChange:u,className:"mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",required:!0})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"block text-sm font-medium text-gray-300",htmlFor:"email",children:"Email"}),(0,n.jsx)("input",{type:"email",id:"email",value:e.email,onChange:u,className:"mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",required:!0})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"block text-sm font-medium text-gray-300",htmlFor:"message",children:"Message"}),(0,n.jsx)("textarea",{id:"message",rows:4,value:e.message,onChange:u,className:"mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",required:!0})]}),(0,n.jsx)("div",{children:(0,n.jsx)("button",{type:"submit",className:"w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",disabled:s,children:s?"Sending...":"Send Message"})})]}),o&&(0,n.jsx)("p",{className:"mt-4 text-green-500",children:"Your message has been sent successfully!"}),d&&(0,n.jsx)("p",{className:"mt-4 text-red-500",children:"There was an error sending your message. Please try again."})]})})]})}}},function(e){e.O(0,[971,69,744],function(){return e(e.s=8097)}),_N_E=e.O()}]);