"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[7048],{26535:(e,t,a)=>{a.d(t,{A:()=>j});var n=a(96540),r=a(18215),s=a(79201),l=a(24581),i=a(28774),o=a(21312),c=a(56347),d=a(99169);function m(e){const{pathname:t}=(0,c.zy)();return(0,n.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,d.ys)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var h=a(74848);function g(e){let{sidebar:t}=e;const a=m(t.items);return(0,h.jsx)("aside",{className:"col col--3",children:(0,h.jsxs)("nav",{className:(0,r.A)(u.sidebar,"thin-scrollbar"),"aria-label":(0,o.translate)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,h.jsx)("div",{className:(0,r.A)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,h.jsx)("ul",{className:(0,r.A)(u.sidebarItemList,"clean-list"),children:a.map((e=>(0,h.jsx)("li",{className:u.sidebarItem,children:(0,h.jsx)(i.A,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var f=a(75600);function p(e){let{sidebar:t}=e;const a=m(t.items);return(0,h.jsx)("ul",{className:"menu__list",children:a.map((e=>(0,h.jsx)("li",{className:"menu__list-item",children:(0,h.jsx)(i.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function x(e){return(0,h.jsx)(f.GX,{component:p,props:e})}function b(e){let{sidebar:t}=e;const a=(0,l.l)();return t?.items.length?"mobile"===a?(0,h.jsx)(x,{sidebar:t}):(0,h.jsx)(g,{sidebar:t}):null}function j(e){const{sidebar:t,toc:a,children:n,...l}=e,i=t&&t.items.length>0;return(0,h.jsx)(s.A,{...l,children:(0,h.jsx)("div",{className:"container margin-vert--lg",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)(b,{sidebar:t}),(0,h.jsx)("main",{className:(0,r.A)("col",{"col--7":i,"col--9 col--offset-1":!i}),children:n}),a&&(0,h.jsx)("div",{className:"col col--2",children:a})]})})})}},24651:(e,t,a)=>{a.d(t,{A:()=>T});a(96540);var n=a(18215),r=a(7131),s=a(74848);function l(e){let{children:t,className:a}=e;return(0,s.jsx)("article",{className:a,children:t})}var i=a(28774);const o={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:l}=(0,r.e)(),{permalink:c,title:d}=a,m=l?"h1":"h2";return(0,s.jsx)(m,{className:(0,n.A)(o.title,t),children:l?d:(0,s.jsx)(i.A,{to:c,children:d})})}var d=a(21312),m=a(53465),u=a(36266);const h={container:"container_mt6G"};function g(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,m.W)();return t=>{const a=Math.ceil(t);return e(a,(0,d.translate)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,s.jsx)(s.Fragment,{children:a(t)})}function f(e){let{date:t,formattedDate:a}=e;return(0,s.jsx)("time",{dateTime:t,children:a})}function p(){return(0,s.jsx)(s.Fragment,{children:" \xb7 "})}function x(e){let{className:t}=e;const{metadata:a}=(0,r.e)(),{date:l,readingTime:i}=a,o=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,s.jsxs)("div",{className:(0,n.A)(h.container,"margin-vert--md",t),children:[(0,s.jsx)(f,{date:l,formattedDate:(c=l,o.format(new Date(c)))}),void 0!==i&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p,{}),(0,s.jsx)(g,{readingTime:i})]})]});var c}function b(e){return e.href?(0,s.jsx)(i.A,{...e}):(0,s.jsx)(s.Fragment,{children:e.children})}function j(e){let{author:t,className:a}=e;const{name:r,title:l,url:i,imageURL:o,email:c}=t,d=i||c&&`mailto:${c}`||void 0;return(0,s.jsxs)("div",{className:(0,n.A)("avatar margin-bottom--sm",a),children:[o&&(0,s.jsx)(b,{href:d,className:"avatar__photo-link",children:(0,s.jsx)("img",{className:"avatar__photo",src:o,alt:r})}),r&&(0,s.jsxs)("div",{className:"avatar__intro",children:[(0,s.jsx)("div",{className:"avatar__name",children:(0,s.jsx)(b,{href:d,children:(0,s.jsx)("span",{children:r})})}),l&&(0,s.jsx)("small",{className:"avatar__subtitle",children:l})]})]})}const v={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function A(e){let{className:t}=e;const{metadata:{authors:a},assets:l}=(0,r.e)();if(0===a.length)return null;const i=a.every((e=>{let{name:t}=e;return!t}));return(0,s.jsx)("div",{className:(0,n.A)("margin-top--md margin-bottom--sm",i?v.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,s.jsx)("div",{className:(0,n.A)(!i&&"col col--6",i?v.imageOnlyAuthorCol:v.authorCol),children:(0,s.jsx)(j,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t)))})}function N(){return(0,s.jsxs)("header",{children:[(0,s.jsx)(c,{}),(0,s.jsx)(x,{}),(0,s.jsx)(A,{})]})}var P=a(70440),k=a(25128);function _(e){let{children:t,className:a}=e;const{isBlogPostPage:l}=(0,r.e)();return(0,s.jsx)("div",{id:l?P.blogPostContainerID:void 0,className:(0,n.A)("markdown",a),children:(0,s.jsx)(k.A,{children:t})})}var w=a(17559),y=a(4336),I=a(58046);function B(){return(0,s.jsx)("b",{children:(0,s.jsx)(d.default,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function M(e){const{blogPostTitle:t,...a}=e;return(0,s.jsx)(i.A,{"aria-label":(0,d.translate)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,s.jsx)(B,{})})}function U(){const{metadata:e,isBlogPostPage:t}=(0,r.e)(),{tags:a,title:l,editUrl:i,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,m=!t&&o,u=a.length>0;if(!(u||m||i))return null;if(t){const e=!!(i||d||c);return(0,s.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,s.jsx)("div",{className:(0,n.A)("row","margin-top--sm",w.G.blog.blogFooterEditMetaRow),children:(0,s.jsx)("div",{className:"col",children:(0,s.jsx)(I.A,{tags:a})})}),e&&(0,s.jsx)(y.A,{className:(0,n.A)("margin-top--sm",w.G.blog.blogFooterEditMetaRow),editUrl:i,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,s.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,s.jsx)("div",{className:(0,n.A)("col",{"col--9":m}),children:(0,s.jsx)(I.A,{tags:a})}),m&&(0,s.jsx)("div",{className:(0,n.A)("col text--right",{"col--3":u}),children:(0,s.jsx)(M,{blogPostTitle:l,to:e.permalink})})]})}function T(e){let{children:t,className:a}=e;const i=function(){const{isBlogPostPage:e}=(0,r.e)();return e?void 0:"margin-bottom--xl"}();return(0,s.jsxs)(l,{className:(0,n.A)(i,a),children:[(0,s.jsx)(N,{}),(0,s.jsx)(_,{children:t}),(0,s.jsx)(U,{})]})}},7131:(e,t,a)=>{a.d(t,{e:()=>o,i:()=>i});var n=a(96540),r=a(89532),s=a(74848);const l=n.createContext(null);function i(e){let{children:t,content:a,isBlogPostPage:r=!1}=e;const i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:r});return(0,s.jsx)(l.Provider,{value:i,children:t})}function o(){const e=(0,n.useContext)(l);if(null===e)throw new r.dV("BlogPostProvider");return e}},6676:(e,t,a)=>{a.d(t,{k:()=>d,J:()=>m});var n=a(86025),r=a(44586),s=a(36803);var l=a(7131);const i=e=>new Date(e).toISOString();function o(e){const t=e.map(u);return{author:1===t.length?t[0]:t}}function c(e,t,a){return e?{image:h({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function d(e){const{siteConfig:t}=(0,r.A)(),{withBaseUrl:a}=(0,n.h)(),{metadata:{blogDescription:s,blogTitle:l,permalink:d}}=e,m=`${t.url}${d}`;return{"@context":"https://schema.org","@type":"Blog","@id":m,mainEntityOfPage:m,headline:l,description:s,blogPost:e.items.map((e=>function(e,t,a){const{assets:n,frontMatter:r,metadata:s}=e,{date:l,title:d,description:m,lastUpdatedAt:u}=s,h=n.image??r.image,g=r.keywords??[],f=`${t.url}${s.permalink}`,p=u?i(u):void 0;return{"@type":"BlogPosting","@id":f,mainEntityOfPage:f,url:f,headline:d,name:d,description:m,datePublished:l,...p?{dateModified:p}:{},...o(s.authors),...c(h,a,d),...g?{keywords:g}:{}}}(e.content,t,a)))}}function m(){const e=function(){const e=(0,s.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:a}=(0,l.e)(),{siteConfig:d}=(0,r.A)(),{withBaseUrl:m}=(0,n.h)(),{date:u,title:h,description:g,frontMatter:f,lastUpdatedAt:p}=a,x=t.image??f.image,b=f.keywords??[],j=p?i(p):void 0,v=`${d.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":v,mainEntityOfPage:v,url:v,headline:h,name:h,description:g,datePublished:u,...j?{dateModified:j}:{},...o(a.authors),...c(x,m,h),...b?{keywords:b}:{},isPartOf:{"@type":"Blog","@id":`${d.url}${e.blogBasePath}`,name:e.blogTitle}}}function u(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function h(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}},53465:(e,t,a)=>{a.d(t,{W:()=>c});var n=a(96540),r=a(44586);const s=["zero","one","two","few","many","other"];function l(e){return s.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const r=a.select(t),s=a.pluralForms.indexOf(r);return n[Math.min(s,n.length-1)]}(a,t,e)}}}}]);