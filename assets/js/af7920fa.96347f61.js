"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[949],{5549:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var i=s(5893),t=s(1151);const a={title:"2024-03-12-alpha.0",slug:"2024-03-12-alpha.0"},r=void 0,l={permalink:"/release/2024-03-12-alpha.0",source:"@site/release-blog/2024-alpha/2024-03-12-alpha.0.mdx",title:"2024-03-12-alpha.0",description:"Highlights",date:"2024-03-12T00:00:00.000Z",formattedDate:"March 12, 2024",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{title:"2024-03-12-alpha.0",slug:"2024-03-12-alpha.0"},unlisted:!1,prevItem:{title:"2024-04-16-beta.0",permalink:"/release/2024-04-16-beta.0"},nextItem:{title:"2024-02-15-alpha.0",permalink:"/release/2024-02-15-alpha.0"}},d={authorsImageUrls:[]},o=[{value:"Highlights",id:"highlights",level:3},{value:"Breaking changes",id:"breaking-changes",level:3},{value:"Deprecations",id:"deprecations",level:3},{value:"Changelog",id:"changelog",level:3},{value:"Theme-specific updates",id:"theme-specific-updates",level:3},{value:"Attribution",id:"attribution",level:3}];function c(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"highlights",children:"Highlights"}),"\n",(0,i.jsxs)(n.p,{children:["Here are the highlights of what's new and updated in Overture's ",(0,i.jsx)(n.code,{children:"2024-03-12-alpha.0"})," release. This release includes a schema change from ",(0,i.jsx)(n.code,{children:"camelCase"})," to ",(0,i.jsx)(n.code,{children:"snake_case"})," for all property names and enumeration member names, an expansion of stable GERS IDs and incremental updates to the schema and datasets."]}),"\n",(0,i.jsx)(n.h3,{id:"breaking-changes",children:"Breaking changes"}),"\n",(0,i.jsxs)(n.p,{children:["We changed ",(0,i.jsx)(n.code,{children:"camelCase"})," to ",(0,i.jsx)(n.code,{children:"snake_case"})," in the schema for properties to be more compatible with some SQL engines. This may break existing code and queries:"]}),"\n",(0,i.jsxs)(n.p,{children:["In previous releases of Overture data, we used ",(0,i.jsx)(n.code,{children:"camelCase"})," for attribute names throughout the schema. A duckdb query to find Pennsylvania in our admins dataset might have looked like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"LOAD spatial;\nLOAD httpfs:\n\nSELECT\n   id,\n   isoSubCountryCode,\n   contextId,\n   names.primary,\n   ST_GeomFromWKB(geometry) as geometry\nFROM\n   read_parquet('s3://overturemaps-us-west-2/release/2024-02-15-alpha.0/theme=admins/type=*/*', filename=true, hive_partitioning=1)\nWHERE type='locality'\n   AND subType='administrativeLocality'\n   AND adminLevel=2\n   AND names.primary LIKE 'Pennsylvania';\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the March release, we changed all property names and enumeration member names to ",(0,i.jsx)(n.code,{children:"snake_case"}),". This is a big one-time churn to improve SQL compatibility. That same query to find Pennsylvania now looks like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"LOAD spatial;\nLOAD httpfs:\n\nSELECT\n   id,\n   iso_sub_country_code,\n   context_id,\n   names.primary,\n   ST_GeomFromWKB(geometry) as geometry\nFROM\n   read_parquet('s3://overturemaps-us-west-2/release/2024-03-12-alpha.0/theme=admins/type=*/*', filename=true, hive_partitioning=1)\nWHERE type='locality'\n   AND subtype='administrative_locality'\n   AND admin_level=2\n   AND names.primary LIKE 'Pennsylvania';\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502                id                \u2502 iso_sub_country_code \u2502            context_id            \u2502   primary    \u2502            geometry            \u2502\n\u2502             varchar              \u2502       varchar        \u2502             varchar              \u2502   varchar    \u2502            geometry            \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 0857b2b73fffffff01914c596abbfacd \u2502 US-PA                \u2502 0850c861bfffffff01aeb407d56d3441 \u2502 Pennsylvania \u2502 POINT (-77.7278831 40.9699889) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,i.jsx)(n.h3,{id:"deprecations",children:"Deprecations"}),"\n",(0,i.jsxs)(n.p,{children:["In the April 2024 release, Overture will implement a refactor of the ",(0,i.jsx)(n.code,{children:"Admins"})," theme called ",(0,i.jsx)(n.code,{children:"Divisions"}),". Admins and Divisions will coexist for three releases, at which point Divisions will fully replace Admins. More information on this change ",(0,i.jsx)(n.a,{href:"https://github.com/OvertureMaps/schema/discussions/117",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"changelog",children:"Changelog"}),"\n",(0,i.jsxs)(n.p,{children:["See our ",(0,i.jsx)(n.a,{href:"https://github.com/OvertureMaps/schema/releases/tag/v0.9.0",children:"changelog"})," here."]}),"\n",(0,i.jsx)(n.h3,{id:"theme-specific-updates",children:"Theme-specific updates"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Transportation"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Refreshed to include OSM data up to 2024-03-03."}),"\n",(0,i.jsx)(n.li,{children:"Added ferry and alley segments."}),"\n",(0,i.jsx)(n.li,{children:"Included 125K previously unsupported turn restrictions."}),"\n",(0,i.jsx)(n.li,{children:"Added support for max weight, height, width and length access restrictions."}),"\n",(0,i.jsx)(n.li,{children:"Added one-way road access restrictions."}),"\n",(0,i.jsx)(n.li,{children:"Added road widths property to segments."}),"\n",(0,i.jsx)(n.li,{children:"Acheived stability of GERS IDs for connectors and segments for this and future releases."}),"\n",(0,i.jsx)(n.li,{children:"Note: data in the transportation theme is licensed under ODbL."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Administrative Boundaries (Admins)"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Refreshed to include OSM data up to 2024-03-07."}),"\n",(0,i.jsxs)(n.li,{children:["Adapted schema to use ",(0,i.jsx)(n.code,{children:"snake_case"})," to make attribute names more compatible with some SQL engines."]}),"\n",(0,i.jsx)(n.li,{children:"Correctly set locality types."}),"\n",(0,i.jsxs)(n.li,{children:["Made minor fixes:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"All country localities now have ISO codes."}),"\n",(0,i.jsx)(n.li,{children:"All non-country localities now have context property set."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Note: data in the Admin theme is licensed under ODbL."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Places"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Achieved roughly 54 million place records."}),"\n",(0,i.jsx)(n.li,{children:"Propagated stable GERS IDs from the previous release."}),"\n",(0,i.jsx)(n.li,{children:"Made incremental improvements to accuracy and data quality."}),"\n",(0,i.jsx)(n.li,{children:"Note: data in the Places theme is licensed under CDLA Permissive 2.0."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Buildings"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Exposed the logic Overture uses to transform OSM tags into building attributes."}),"\n",(0,i.jsx)(n.li,{children:"Made incremental improvements to further ensure the data conforms to the buildings schema."}),"\n",(0,i.jsx)(n.li,{children:"Note: data in the Buildings theme is licensed under ODbL."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Base"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Exposed the logic Overture uses to transform OSM tags into attributes in the land use, land and water data types."}),"\n",(0,i.jsx)(n.li,{children:"Made incremental improvements to further ensure the data conforms to the base schema."}),"\n",(0,i.jsx)(n.li,{children:"Note: data in the Base theme is licensed under ODbL."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"attribution",children:"Attribution"}),"\n",(0,i.jsxs)(n.p,{children:["The data sources for each theme are cited ",(0,i.jsx)(n.a,{href:"//attribution",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var i=s(7294);const t={},a=i.createContext(t);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);