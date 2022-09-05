"use strict";(self.webpackChunkwhop_docs=self.webpackChunkwhop_docs||[]).push([[341],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,g=u["".concat(s,".").concat(h)]||u[h]||p[h]||a;return n?i.createElement(g,o(o({ref:t},d),{},{components:n})):i.createElement(g,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const a={sidebar_position:3},o="Validating the License Key",l={unversionedId:"beginner/validating-the-license-key",id:"beginner/validating-the-license-key",title:"Validating the License Key",description:"There are two ways to validate the license key, the first one is to use the `validate method from the API and the second one is to validate from the license object itself using the valid` property.",source:"@site/docs/beginner/validating-the-license-key.md",sourceDirName:"beginner",slug:"/beginner/validating-the-license-key",permalink:"/docs/beginner/validating-the-license-key",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"License Object",permalink:"/docs/beginner/license-object"},next:{title:"License MetaData",permalink:"/docs/beginner/license-metadata"}},s={},c=[{value:"Using the API",id:"using-the-api",level:2},{value:"Using the License Object",id:"using-the-license-object",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"validating-the-license-key"},"Validating the License Key"),(0,r.kt)("p",null,"There are two ways to validate the license key, the first one is to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"validate")," method from the API and the second one is to validate from the license object itself using the ",(0,r.kt)("inlineCode",{parentName:"p"},"valid")," property."),(0,r.kt)("h2",{id:"using-the-api"},"Using the API"),(0,r.kt)("p",null,"To validate the license key using the API you will need to make a request to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/validate")," endpoint and pass the license key as a parameter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"...\nfunction validate(license) {\n    return request('POST', url + '/licenses/' + license + '/validate', null);\n}\n")),(0,r.kt)("p",null,"After you have completed the setup of your function, you can now validate the license key by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"validate")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"...\nvalidate('ABC-123').then(res => {\n    console.log(res.valid);\n});\n")),(0,r.kt)("h2",{id:"using-the-license-object"},"Using the License Object"),(0,r.kt)("p",null,"To validate the license key using the license object you will need to get the license information first and then check the ",(0,r.kt)("inlineCode",{parentName:"p"},"valid")," property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"...\ngetLicense('ABC-123').then(res => {\n    console.log(res.valid);\n});\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},".catch")," function to handle errors.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"...\ngetLicense('ABC-123').then(res => {\n    console.log(res.valid);\n}).catch(err => {\n    console.log(err);\n});\n")),(0,r.kt)("p",null,"Now that you know how to validate the license, let's move on to the next step and learn how to check and add the license metadata for the HWID."))}p.isMDXComponent=!0}}]);