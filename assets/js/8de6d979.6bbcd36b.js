"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[3141],{2407:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=a(5893),r=a(1151);const s={description:"Examples of breaking changes",title:"Breaking Changes"},i=void 0,o={id:"release-notes/breaking-changes",title:"Breaking Changes",description:"Examples of breaking changes",source:"@site/docs/release-notes/breaking-changes.mdx",sourceDirName:"release-notes",slug:"/release-notes/breaking-changes",permalink:"/release-notes/breaking-changes",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{description:"Examples of breaking changes",title:"Breaking Changes"},sidebar:"docs",previous:{title:"Attribution",permalink:"/release-notes/attribution"}},c={},l=[{value:"Understanding a breaking change in Overture&#39;s <code>2024-03-12-alpha.0</code> release",id:"understanding-a-breaking-change-in-overtures-2024-03-12-alpha0-release",level:3}];function d(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h3,{id:"understanding-a-breaking-change-in-overtures-2024-03-12-alpha0-release",children:["Understanding a breaking change in Overture's ",(0,t.jsx)(n.code,{children:"2024-03-12-alpha.0"})," release"]}),"\n",(0,t.jsxs)(n.p,{children:["In previous releases of Overture data, we used ",(0,t.jsx)(n.code,{children:"camelCase"})," for attribute names throughout the schema. A duckdb query to find Pennsylvania in our admins dataset might have looked like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"LOAD spatial;\nLOAD httpfs:\n\nSELECT\n   id,\n   isoSubCountryCode,\n   contextId,\n   names.primary,\n   ST_GeomFromWKB(geometry) as geometry\nFROM\n   read_parquet('s3://overturemaps-us-west-2/release/2024-02-15-alpha.0/theme=admins/type=*/*', filename=true, hive_partitioning=1)\nWHERE type='locality'\n   AND subType='administrativeLocality'\n   AND adminLevel=2\n   AND names.primary LIKE 'Pennsylvania';\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In the March release, we changed all property names and enumeration member names to ",(0,t.jsx)(n.code,{children:"snake_case"}),". This is a big one-time churn to improve SQL compatibility. That same query to find Pennsylvania now looks like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"LOAD spatial;\nLOAD httpfs:\n\nSELECT\n   id,\n   iso_sub_country_code,\n   context_id,\n   names.primary,\n   ST_GeomFromWKB(geometry) as geometry\nFROM\n   read_parquet('s3://overturemaps-us-west-2/release/2024-03-12-alpha.0/theme=admins/type=*/*', filename=true, hive_partitioning=1)\nWHERE type='locality'\n   AND subtype='administrative_locality'\n   AND admin_level=2\n   AND names.primary LIKE 'Pennsylvania';\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502                id                \u2502 iso_sub_country_code \u2502            context_id            \u2502   primary    \u2502            geometry            \u2502\n\u2502             varchar              \u2502       varchar        \u2502             varchar              \u2502   varchar    \u2502            geometry            \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 0857b2b73fffffff01914c596abbfacd \u2502 US-PA                \u2502 0850c861bfffffff01aeb407d56d3441 \u2502 Pennsylvania \u2502 POINT (-77.7278831 40.9699889) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>i});var t=a(7294);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);