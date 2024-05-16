"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[6195],{57455:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=s(74848),t=s(28453);const a={title:"Working Overture Maps base layers"},i=void 0,c={id:"guides/base",title:"Working Overture Maps base layers",description:"Overview",source:"@site/docs/guides/base.mdx",sourceDirName:"guides",slug:"/guides/base",permalink:"/guides/base",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Working Overture Maps base layers"},sidebar:"docs",previous:{title:"Divisions",permalink:"/guides/divisions"},next:{title:"Transportation",permalink:"/guides/transportation/"}},o={},l=[{value:"Overview",id:"overview",level:2},{value:"Schema design choices",id:"schema-design-choices",level:2},{value:"Schema reference",id:"schema-reference",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(r.p,{children:["The Overture Maps ",(0,n.jsx)(r.code,{children:"base"})," theme provides the land and water features that are necessary to render a complete basemap. These features are currently derived from the ",(0,n.jsx)(r.a,{href:"https://daylightmap.org/earth/",children:"Daylight Earth Tables"})," schema and include the ",(0,n.jsx)(r.a,{href:"https://daylightmap.org/coastlines.html",children:"Daylight Coastlines"}),". The theme includes five feature types:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"infrastructure"})}),": Infrastructure features such as communication towers and lines, piers, and bridges."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"land"})}),": physical representations of land surfaces derived from the inverse of OSM Coastlines; translates natural tags from OpenStreetMap."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"land_use"})}),": classifications of the human use of a section of land; translates landuse tag from OpenStreetMap."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"water"})}),": physical representations of inland and ocean marine surfaces; translates natural and waterway tags from OpenStreetMap."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"land_cover"})}),": derived from ",(0,n.jsx)(r.a,{href:"https://esa-worldcover.org/en",children:"ESA WorldCover"}),", high-resolution optical Earth observation data."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"schema-design-choices",children:"Schema design choices"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["basic classification of features into ",(0,n.jsx)(r.code,{children:"type"}),", ",(0,n.jsx)(r.code,{children:"subtype"})," and ",(0,n.jsx)(r.code,{children:"class"})," where appropriate."]}),"\n",(0,n.jsxs)(r.li,{children:["parsing and normalization of common OSM tags, such as ",(0,n.jsx)(r.code,{children:"height"})," and ",(0,n.jsx)(r.code,{children:"ele"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["extraction of consistent OSM tags, such as ",(0,n.jsx)(r.code,{children:"wikidata"})," to top-level properties."]}),"\n",(0,n.jsx)(r.li,{children:"direct pass-through of remaining relevant OSM tags."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"schema-reference",children:"Schema reference"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://docs.overturemaps.org/schema/reference/base/infrastructure",children:"Explore the schema for the infrastructure feature type"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://docs.overturemaps.org/schema/reference/base/land",children:"Explore the schema for the land feature type"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://docs.overturemaps.org/schema/reference/base/land_use",children:"Explore the schema for the land use feature type"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://docs.overturemaps.org/schema/reference/base/water",children:"Explore the schema for the water feature type"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://docs.overturemaps.org/schema/reference/base/land_cover",children:"Explore the schema for the land cover feature type"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>c});var n=s(96540);const t={},a=n.createContext(t);function i(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);