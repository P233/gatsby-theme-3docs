(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{205:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(239),o=n(227),l=n(228),i=n(225),s=(n(18),n(208)),u=n(224),f=n.n(u),d=n(248),m=n(249),p=n.n(m),v=n(237),h=n.n(v),g=n(250),y=n.n(g),E=function(e){var t=function(e){var t=d.data.allMdx,n=t.group.map(function(e){return e.edges[0].node.fields.version}).indexOf(e);if(-1===n)return[];var r,a=t.group[n].edges;return r=[],a.forEach(function(e){var t=e.node,n=r;t.fields.parents.forEach(function(e){var t=n[n.length-1];t&&t.title===e?n=t.list:(n.push({title:e,list:[]}),n=n[n.length-1].list)}),n.push({title:t.frontmatter.title,url:t.fields.slug})}),r}(e.currentVersion);return a.a.createElement("aside",{className:f()(y.a.docsTOC,e.className)},function e(t,n,r){return void 0===r&&(r=!1),a.a.createElement("ul",null,n&&a.a.createElement("li",null,a.a.createElement("div",{className:f()(y.a.tocEntry,y.a.title),style:{textTransform:"capitalize"}},a.a.createElement(p.a,{className:y.a.tocEntry__icon}),a.a.createElement("span",{className:y.a.tocEntry__body},n.replace(/([a-z]|[A-Z]+)([A-Z])/g,"$1 $2").replace(/(\w+)(\d+)/g,"$1 $2").replace(/[-_]/g," ")))),t.map(function(t){return Array.isArray(t.list)?a.a.createElement("li",{key:t.title},e(t.list,t.title,!0)):a.a.createElement("li",{key:t.url},a.a.createElement(s.a,{to:t.url,className:y.a.tocEntry,activeClassName:y.a.active},a.a.createElement(h.a,{className:y.a.tocEntry__icon}),a.a.createElement("span",{className:y.a.tocEntry__body},t.title)))}))}(t))},w=n(251),b=n.n(w),O=function(e){return a.a.createElement("aside",{className:f()(b.a.contentTOC,e.className)},function e(t,n){return void 0===n&&(n=!1),a.a.createElement("ul",null,t.map(function(t){return Array.isArray(t.items)?a.a.createElement(a.a.Fragment,null,a.a.createElement("li",null,a.a.createElement("a",{href:t.url,className:b.a.tocEntry},a.a.createElement(h.a,{className:b.a.tocEntry__icon}),a.a.createElement("span",{className:b.a.tocEntry__body},t.title))),a.a.createElement("li",null,e(t.items,!0)," ")):a.a.createElement("li",{key:t.title},a.a.createElement("a",{href:t.url,className:b.a.tocEntry},a.a.createElement(h.a,{className:b.a.tocEntry__icon}),a.a.createElement("span",{className:b.a.tocEntry__body},t.title)))}))}(e.tocArray))},k=n(226),M=n(252),x=n.n(M);n.d(t,"pageQuery",function(){return P});t.default=function(e){var t=e.data.mdx;return a.a.createElement(o.a,null,a.a.createElement(l.a,{title:t.frontmatter.title}),a.a.createElement("div",{className:x.a.docPage},a.a.createElement(i.a,null),a.a.createElement("div",{className:x.a.docPage__body},a.a.createElement("main",{className:x.a.docPage__content},a.a.createElement(k.a,{className:x.a.docBody},a.a.createElement(c.MDXRenderer,{children:t.body}))),a.a.createElement(O,{className:x.a.docPage__docsTOC,tocArray:t.tableOfContents.items}),a.a.createElement(E,{className:x.a.docPage__docsTOC,currentVersion:t.fields.version}))))};var P="4259430327"},206:function(e,t,n){"use strict";var r=n(209);t.a=function(){return r.data.site.siteMetadata}},207:function(e,t,n){var r;e.exports=(r=n(210))&&r.default||r},208:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(68),o=n.n(c);n.d(t,"a",function(){return o.a});n(207),n(10).default.enqueue,a.a.createContext({})},209:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Theme 3Docs",description:"Gatsby theme for 3 columns documentation site.",author:"@PeiwenLu",currentVersion:"0.1.0",headerIconLinks:[{name:"github",url:"https://github.com/P233/gatsby-theme-3docs"},{name:"twitter",url:"https://twitter.com/PeiwenLu"}],lang:"en"}}}}},210:function(e,t,n){"use strict";n.r(t);n(52),n(16),n(14),n(15),n(8),n(22);var r=n(0),a=n.n(r),c=n(98);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(c.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach(function(t){l(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({location:t,pageResources:n},n.json)):null}},211:function(e){e.exports={data:{allMdx:{edges:[{node:{frontmatter:{title:"Home"},fields:{slug:"/"}}},{node:{frontmatter:{title:"Changelog"},fields:{slug:"/changelog/"}}}]}}}},212:function(e){e.exports={data:{allMdx:{group:[{edges:[{node:{fields:{slug:"/docs/0.0.1/welcome/",version:"0.0.1"}}}]},{edges:[{node:{fields:{slug:"/docs/0.1.0/chapter1/",version:"0.1.0"}}}]}]}}}},213:function(e,t,n){var r=n(0);function a(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"sun"),r.createElement("path",{d:"M24 16c0-2.209-0.897-4.211-2.343-5.657s-3.448-2.343-5.657-2.343-4.211 0.897-5.657 2.343-2.343 3.448-2.343 5.657 0.897 4.211 2.343 5.657 3.448 2.343 5.657 2.343 4.211-0.897 5.657-2.343 2.343-3.448 2.343-5.657zM21.333 16c0 1.473-0.596 2.804-1.563 3.771s-2.297 1.563-3.771 1.563-2.804-0.596-3.771-1.563-1.563-2.297-1.563-3.771 0.596-2.804 1.563-3.771 2.297-1.563 3.771-1.563 2.804 0.596 3.771 1.563 1.563 2.297 1.563 3.771zM14.667 1.333v2.667c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-2.667c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333zM14.667 28v2.667c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-2.667c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333zM4.684 6.569l1.893 1.893c0.521 0.521 1.365 0.521 1.885 0s0.521-1.365 0-1.885l-1.893-1.893c-0.521-0.521-1.365-0.521-1.885 0s-0.521 1.365 0 1.885zM23.537 25.423l1.893 1.893c0.521 0.521 1.365 0.521 1.885 0s0.521-1.365 0-1.885l-1.893-1.893c-0.521-0.521-1.365-0.521-1.885 0s-0.521 1.365 0 1.885zM1.333 17.333h2.667c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-2.667c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333zM28 17.333h2.667c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-2.667c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333zM6.569 27.316l1.893-1.893c0.521-0.521 0.521-1.365 0-1.885s-1.365-0.521-1.885 0l-1.893 1.893c-0.521 0.521-0.521 1.365 0 1.885s1.365 0.521 1.885 0zM25.423 8.463l1.893-1.893c0.521-0.521 0.521-1.365 0-1.885s-1.365-0.521-1.885 0l-1.893 1.893c-0.521 0.521-0.521 1.365 0 1.885s1.365 0.521 1.885 0z",key:1})])}a.defaultProps={version:"1.1",width:"32",height:"32",viewBox:"0 0 32 32"},e.exports=a,a.default=a},214:function(e,t,n){var r=n(0);function a(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"moon"),r.createElement("path",{d:"M29.328 17.176c0.029-0.311-0.051-0.635-0.251-0.908-0.433-0.595-1.268-0.725-1.863-0.292-1.267 0.924-2.745 1.448-4.251 1.549-1.824 0.123-3.688-0.377-5.267-1.544-1.777-1.313-2.852-3.22-3.156-5.247s0.165-4.165 1.479-5.941c0.189-0.255 0.288-0.58 0.255-0.921-0.071-0.733-0.723-1.269-1.456-1.197-3.011 0.293-5.752 1.573-7.86 3.535-2.315 2.153-3.869 5.129-4.183 8.515-0.339 3.665 0.841 7.124 3.021 9.748s5.363 4.417 9.029 4.756 7.124-0.841 9.748-3.021 4.417-5.363 4.756-9.029zM26.089 19.565c-0.653 1.817-1.78 3.391-3.221 4.588-2.101 1.745-4.864 2.688-7.797 2.417s-5.477-1.704-7.223-3.805-2.688-4.864-2.417-7.797c0.249-2.709 1.489-5.085 3.343-6.808 1.043-0.971 2.28-1.733 3.641-2.229-0.608 1.685-0.769 3.475-0.512 5.199 0.404 2.697 1.84 5.245 4.208 6.996 2.105 1.556 4.597 2.224 7.031 2.060 1.003-0.067 1.995-0.276 2.947-0.62z",key:1})])}a.defaultProps={version:"1.1",width:"32",height:"32",viewBox:"0 0 32 32"},e.exports=a,a.default=a},215:function(e,t,n){var r={"./discord.svg":216,"./facebook.svg":217,"./gatsby.svg":218,"./github.svg":219,"./gitlab.svg":220,"./npm.svg":221,"./stackoverflow.svg":222,"./twitter.svg":223};function a(e){var t=c(e);return n(t)}function c(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=c,e.exports=a,a.id=215},216:function(e,t,n){var r=n(0);function a(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"discord"),r.createElement("path",{d:"M26.963 0c1.875 0 3.387 1.516 3.476 3.3v28.7l-3.569-3.031-1.96-1.784-2.139-1.864 0.893 2.94h-18.717c-1.869 0-3.387-1.42-3.387-3.301v-21.653c0-1.784 1.52-3.303 3.393-3.303l22.009-0.004zM18.805 7.577h-0.040l-0.269 0.267c2.764 0.8 4.101 2.049 4.101 2.049-1.781-0.891-3.387-1.336-4.992-1.516-1.16-0.18-2.32-0.085-3.3 0h-0.267c-0.627 0-1.96 0.267-3.747 0.98-0.623 0.271-0.98 0.448-0.98 0.448s1.336-1.336 4.28-2.049l-0.18-0.18s-2.229-0.085-4.636 1.693c0 0-2.407 4.192-2.407 9.36 0 0 1.333 2.32 4.991 2.408 0 0 0.533-0.711 1.073-1.336-2.053-0.624-2.853-1.872-2.853-1.872s0.179 0.088 0.447 0.267h0.080c0.040 0 0.059 0.020 0.080 0.040v0.008c0.021 0.021 0.040 0.040 0.080 0.040 0.44 0.181 0.88 0.36 1.24 0.533 0.621 0.269 1.42 0.537 2.4 0.715 1.24 0.18 2.661 0.267 4.28 0 0.8-0.18 1.6-0.356 2.4-0.713 0.52-0.267 1.16-0.533 1.863-0.983 0 0-0.8 1.248-2.94 1.872 0.44 0.621 1.060 1.333 1.060 1.333 3.659-0.080 5.080-2.4 5.16-2.301 0-5.16-2.42-9.36-2.42-9.36-2.18-1.619-4.22-1.68-4.58-1.68l0.075-0.027zM19.029 13.461c0.937 0 1.693 0.8 1.693 1.78 0 0.987-0.76 1.787-1.693 1.787s-1.693-0.8-1.693-1.779c0.003-0.987 0.764-1.784 1.693-1.784zM12.972 13.461c0.933 0 1.688 0.8 1.688 1.78 0 0.987-0.76 1.787-1.693 1.787s-1.693-0.8-1.693-1.779c0-0.987 0.76-1.784 1.693-1.784z",key:1})])}a.defaultProps={version:"1.1",width:"32",height:"32",viewBox:"0 0 32 32"},e.exports=a,a.default=a},217:function(e,t,n){var r=n(0);function a(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"facebook"),r.createElement("path",{d:"M31.997 15.999c0-8.836-7.163-15.999-15.999-15.999s-15.999 7.163-15.999 15.999c0 7.985 5.851 14.604 13.499 15.804v-11.18h-4.062v-4.625h4.062v-3.525c0-4.010 2.389-6.225 6.043-6.225 1.75 0 3.581 0.312 3.581 0.312v3.937h-2.017c-1.987 0-2.607 1.233-2.607 2.498v3.001h4.437l-0.709 4.625h-3.728v11.18c7.649-1.2 13.499-7.819 13.499-15.804z",key:1})])}a.defaultProps={version:"1.1",width:"32",height:"32",viewBox:"0 0 32 32"},e.exports=a,a.default=a},218:function(e,t,n){var r=n(0);function a(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"gatsby"),r.createElement("path",{d:"M16.001 0.009c-8.9 0-15.992 7.092-15.992 15.991s7.092 15.993 15.991 15.993 15.992-7.092 15.992-15.992-7.091-15.992-15.991-15.992zM3.485 16.14l12.377 12.377c-6.815 0-12.377-5.563-12.377-12.377zM18.783 28.239l-15.019-15.019c1.249-5.563 6.257-9.735 12.236-9.735 4.151 0.008 7.831 2.017 10.128 5.113l0.024 0.034-1.807 1.528c-1.864-2.702-4.943-4.449-8.429-4.449-0.019 0-0.037 0-0.056 0h0.003c-0.019-0-0.042-0-0.065-0-4.396 0-8.135 2.816-9.51 6.743l-0.022 0.071 13.072 13.073c3.2-1.113 5.701-3.893 6.397-7.232h-5.424v-2.364h8.205c0 5.98-4.172 10.987-9.735 12.237z",key:1})])}a.defaultProps={version:"1.1",width:"32",height:"32",viewBox:"0 0 32 32"},e.exports=a,a.default=a},219:function(e,t,n){var r=n(0);function a(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"github"),r.createElement("path",{d:"M16 0.396c-8.84 0-16 7.164-16 16 0 7.071 4.584 13.067 10.94 15.18 0.8 0.151 1.093-0.344 1.093-0.769 0-0.38-0.013-1.387-0.020-2.72-4.451 0.965-5.389-2.147-5.389-2.147-0.728-1.847-1.78-2.34-1.78-2.34-1.449-0.992 0.112-0.972 0.112-0.972 1.607 0.112 2.451 1.648 2.451 1.648 1.427 2.447 3.745 1.74 4.66 1.331 0.144-1.035 0.556-1.74 1.013-2.14-3.553-0.4-7.288-1.776-7.288-7.907 0-1.747 0.62-3.173 1.647-4.293-0.18-0.404-0.72-2.031 0.14-4.235 0 0 1.34-0.429 4.4 1.64 1.28-0.356 2.64-0.532 4-0.54 1.36 0.008 2.72 0.184 4 0.54 3.040-2.069 4.38-1.64 4.38-1.64 0.86 2.204 0.32 3.831 0.16 4.235 1.020 1.12 1.64 2.547 1.64 4.293 0 6.147-3.74 7.5-7.3 7.893 0.56 0.48 1.080 1.461 1.080 2.96 0 2.141-0.020 3.861-0.020 4.381 0 0.42 0.28 0.92 1.1 0.76 6.401-2.099 10.981-8.099 10.981-15.159 0-8.836-7.164-16-16-16z",key:1})])}a.defaultProps={version:"1.1",width:"32",height:"32",viewBox:"0 0 32 32"},e.exports=a,a.default=a},220:function(e,t,n){var r=n(0);function a(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"gitlab"),r.createElement("path",{d:"M31.94 18.116l-1.789-5.513-3.552-10.919c-0.18-0.564-0.973-0.564-1.156 0l-3.552 10.916h-11.781l-3.551-10.916c-0.181-0.564-0.979-0.564-1.159-0.004l-3.552 10.919-1.789 5.517c-0.161 0.5 0.019 1.052 0.441 1.364l15.5 11.259 15.5-11.257c0.424-0.313 0.604-0.863 0.44-1.365z",key:1})])}a.defaultProps={version:"1.1",width:"32",height:"32",viewBox:"0 0 32 32"},e.exports=a,a.default=a},221:function(e,t,n){var r=n(0);function a(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"npm"),r.createElement("path",{d:"M0 9.779v10.667h8.888v1.776h7.112v-1.776h16v-10.667h-32zM8.888 18.664h-1.776v-5.333h-1.78v5.333h-3.552v-7.108h7.108v7.108zM14.221 18.664v1.781h-3.553v-8.889h7.112v7.109l-3.559-0.001zM30.223 18.664h-1.773v-5.333h-1.781v5.333h-1.78v-5.333h-1.773v5.333h-3.561v-7.108h10.669v7.108zM14.22 13.333h1.78v3.556h-1.78v-3.556z",key:1})])}a.defaultProps={version:"1.1",width:"32",height:"32",viewBox:"0 0 32 32"},e.exports=a,a.default=a},222:function(e,t,n){var r=n(0);function a(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"stackoverflow"),r.createElement("path",{d:"M25.315 29.153v-8.539h2.845v11.385h-25.701v-11.385h2.84v8.539h20.016zM8.148 26.308h14.319v-2.849h-14.319v2.849zM8.493 19.839l13.973 2.919 0.601-2.76-13.971-2.916-0.604 2.757zM10.305 13.097l12.94 6.040 1.204-2.6-12.941-6.040-1.203 2.581v0.019zM13.925 6.717l10.956 9.14 1.812-2.16-10.955-9.137-1.8 2.156-0.013 0.001zM21.001 0l-2.328 1.725 8.54 11.472 2.328-1.725-8.54-11.472z",key:1})])}a.defaultProps={version:"1.1",width:"32",height:"32",viewBox:"0 0 32 32"},e.exports=a,a.default=a},223:function(e,t,n){var r=n(0);function a(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"twitter"),r.createElement("path",{d:"M31.939 6.092c-1.18 0.519-2.44 0.872-3.767 1.033 1.352-0.815 2.392-2.099 2.884-3.631-1.268 0.74-2.673 1.279-4.169 1.579-1.195-1.279-2.897-2.079-4.788-2.079-3.623 0-6.56 2.937-6.56 6.556 0 0.52 0.060 1.020 0.169 1.499-5.453-0.257-10.287-2.876-13.521-6.835-0.569 0.963-0.888 2.081-0.888 3.3 0 2.28 1.16 4.284 2.917 5.461-1.076-0.035-2.088-0.331-2.971-0.821v0.081c0 3.18 2.257 5.832 5.261 6.436-0.551 0.148-1.132 0.228-1.728 0.228-0.419 0-0.82-0.040-1.221-0.115 0.841 2.604 3.26 4.503 6.139 4.556-2.24 1.759-5.079 2.807-8.136 2.807-0.52 0-1.039-0.031-1.56-0.089 2.919 1.859 6.357 2.945 10.076 2.945 12.072 0 18.665-9.995 18.665-18.648 0-0.279 0-0.56-0.020-0.84 1.281-0.919 2.4-2.080 3.28-3.397l-0.063-0.027z",key:1})])}a.defaultProps={version:"1.1",width:"32",height:"32",viewBox:"0 0 32 32"},e.exports=a,a.default=a},225:function(e,t,n){"use strict";n(29),n(231);var r=n(0),a=n.n(r),c=n(208),o=n(206),l=n(211),i=(n(140),n(212)),s=n(213),u=n.n(s),f=n(214),d=n.n(f),m=n(232),p=n.n(m),v=n(215);t.a=function(e){if("undefined"==typeof window)return null;var t,n=window.document.documentElement,s=Object(r.useState)(n.getAttribute("data-theme")||"light"),f=s[0],m=s[1],h=Object(o.a)(),g=l.data.allMdx.edges.map(function(e){var t=e.node;return{title:t.frontmatter.title,link:t.fields.slug}}),y=(void 0===t&&(t=!1),i.data.allMdx.group.map(function(e){var t=e.edges;return{version:t[0].node.fields.version,initPage:t[0].node.fields.slug}}).sort(function(e,n){return t?e.version.localeCompare(n.version):n.version.localeCompare(e.version)}));return a.a.createElement("header",{className:p.a.header},a.a.createElement("div",{className:p.a.header__left},a.a.createElement(c.a,{to:"/",className:p.a.headerLogo},h.title),a.a.createElement("nav",{className:p.a.headerNav},g.map(function(e){return a.a.createElement(c.a,{key:e.title,to:e.link,className:p.a.headerNav__link,activeClassName:p.a.active},e.title)}))),a.a.createElement("div",{className:p.a.header__right},a.a.createElement("div",{className:p.a.headerVersionDropdown},a.a.createElement("button",null,h.currentVersion),y.length>1&&a.a.createElement("ul",{className:p.a.headerVersionDropdown__menu},y.map(function(e){return a.a.createElement("li",{key:e.version},a.a.createElement(c.a,{to:e.initPage},e.version))}))),h.socialMedia.map(function(e){return a.a.createElement("a",{key:e.name,href:e.link,className:p.a.headerSocialLink,target:"_blank",rel:"noopener noreferrer"},v("./"+e.name.toLowerCase()+".svg")({viewBox:"0 0 32 32"}))}),a.a.createElement("button",{onClick:function(){return m(e="light"===f?"dark":"light"),n.setAttribute("data-theme",e),void window.localStorage.setItem("theme",e);var e}},"light"===f?a.a.createElement(d.a,null):a.a.createElement(u.a,null))))}},226:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(224),o=n.n(c),l=n(233),i=n.n(l);t.a=function(e){return a.a.createElement("article",{className:o()(i.a.mdxContainer,e.className)},e.children)}},227:function(e,t,n){"use strict";var r=n(0),a=n.n(r);n(229),t.a=function(e){return a.a.createElement(a.a.Fragment,null,e.children)}},228:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(230),o=n.n(c),l=n(206),i=function(e){var t=e.title,n=e.description,r=e.meta,c=e.lang,i=Object(l.a)(),s=n||i.description;return a.a.createElement(o.a,{htmlAttributes:{lang:c||i.lang},title:t,titleTemplate:"%s | "+i.title,meta:[{name:"description",content:s},{property:"og:title",content:t},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.author},{name:"twitter:title",content:t},{name:"twitter:description",content:s}].concat(r||[])})};t.a=i},235:function(e,t,n){var r=n(1),a=n(55),c=n(31),o=n(5),l=n(6),i=n(9),s=n(145),u=(n(4).Reflect||{}).construct,f=i(function(){function e(){}return!(u(function(){},[],e)instanceof e)}),d=!i(function(){u(function(){})});r(r.S+r.F*(f||d),"Reflect",{construct:function(e,t){c(e),o(t);var n=arguments.length<3?e:c(arguments[2]);if(d&&!f)return u(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(s.apply(e,r))}var i=n.prototype,m=a(l(i)?i:Object.prototype),p=Function.apply.call(e,m,t);return l(p)?p:m}})},237:function(e,t,n){var r=n(0);function a(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"chevron-right"),r.createElement("path",{d:"M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.521-0.521-1.365-0.521-1.885 0s-0.521 1.365 0 1.885l7.057 7.057-7.057 7.057c-0.521 0.521-0.521 1.365 0 1.885s1.365 0.521 1.885 0z",key:1})])}a.defaultProps={version:"1.1",width:"32",height:"32",viewBox:"0 0 32 32"},e.exports=a,a.default=a},239:function(e,t,n){var r=n(240);e.exports={MDXRenderer:r}},240:function(e,t,n){function r(e,t,n){return(r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var c=new(Function.bind.apply(e,r));return n&&a(c,n.prototype),c}).apply(null,arguments)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach(function(t){i(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(52),n(15),n(22),n(96),n(141),n(53),n(16),n(14),n(139),n(70),n(8),n(235),n(235),n(139),n(96),n(141),n(70),n(53),n(52),n(16),n(14),n(15),n(8),n(22);var s=n(0),u=n(74),f=u.useMDXComponents,d=u.mdx,m=n(122).useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,a=e.children,o=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["scope","components","children"]),i=f(n),u=m(t),p=s.useMemo(function(){if(!a)return null;var e=l({React:s,mdx:d},u),t=Object.keys(e),n=t.map(function(t){return e[t]});return r(Function,["_fn"].concat(c(t),[""+a])).apply(void 0,[{}].concat(c(n)))},[a,t]);return s.createElement(p,l({components:i},o))}},248:function(e){e.exports={data:{allMdx:{group:[{edges:[{node:{frontmatter:{title:"Welcome"},fields:{slug:"/docs/0.0.1/welcome/",version:"0.0.1",parents:[]}}}]},{edges:[{node:{frontmatter:{title:"Chapter 1"},fields:{slug:"/docs/0.1.0/chapter1/",version:"0.1.0",parents:[]}}},{node:{frontmatter:{title:"Chapter 2 - 1"},fields:{slug:"/docs/0.1.0/chapter2/chapter2-1/",version:"0.1.0",parents:["chapter2"]}}},{node:{frontmatter:{title:"Chapter 2 - 2"},fields:{slug:"/docs/0.1.0/chapter2/chapter2-2/",version:"0.1.0",parents:["chapter2"]}}},{node:{frontmatter:{title:"Chapter 3"},fields:{slug:"/docs/0.1.0/chapter3/",version:"0.1.0",parents:[]}}}]}]}}}},249:function(e,t,n){var r=n(0);function a(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"chevron-down"),r.createElement("path",{d:"M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.521-0.521 0.521-1.365 0-1.885s-1.365-0.521-1.885 0l-7.057 7.057-7.057-7.057c-0.521-0.521-1.365-0.521-1.885 0s-0.521 1.365 0 1.885z",key:1})])}a.defaultProps={version:"1.1",width:"32",height:"32",viewBox:"0 0 32 32"},e.exports=a,a.default=a}}]);
//# sourceMappingURL=component---theme-src-templates-doc-template-doc-template-js-1f30f043d5a951cd2591.js.map