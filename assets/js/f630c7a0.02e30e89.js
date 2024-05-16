"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[3366],{4394:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=i(5893),s=i(1151);const a={title:"2024-01-17-alpha.0",slug:"2024-01-17-alpha.0"},r=void 0,o={permalink:"/release/2024-01-17-alpha.0",source:"@site/release-blog/2024-alpha/2024-01-17-alpha.0.mdx",title:"2024-01-17-alpha.0",description:"Highlights",date:"2024-01-17T00:00:00.000Z",formattedDate:"January 17, 2024",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{title:"2024-01-17-alpha.0",slug:"2024-01-17-alpha.0"},unlisted:!1,prevItem:{title:"2024-02-15-alpha.0",permalink:"/release/2024-02-15-alpha.0"},nextItem:{title:"2023-12-14-alpha.0",permalink:"/release/2023-12-14-alpha.0"}},l={authorsImageUrls:[]},d=[{value:"Highlights",id:"highlights",level:3},{value:"Changelog",id:"changelog",level:3},{value:"Theme-specific updates",id:"theme-specific-updates",level:3},{value:"Attribution",id:"attribution",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"highlights",children:"Highlights"}),"\n",(0,t.jsxs)(n.p,{children:["Overture ",(0,t.jsx)(n.code,{children:"2024-01-17-alpha.0"})," is now available. This release includes several incremental improvements, addition of geopolitical boundary information in the Admins Theme and expansion of GERS IDs across several themes. More information about these additions is available in the relevant sections below."]}),"\n",(0,t.jsx)(n.p,{children:"This data is formatted in the Overture Data Schema unless otherwise noted."}),"\n",(0,t.jsx)(n.p,{children:"This data is available for use under the designated licenses for each theme."}),"\n",(0,t.jsx)(n.p,{children:"We would like feedback on the data, its usefulness, and how it could be improved. Please use this Github repo for discussions and feedback related to this data release."}),"\n",(0,t.jsxs)(n.p,{children:["Overture ",(0,t.jsx)(n.code,{children:"2024-01-17-alpha.0"})," is available in GeoParquet and stored on AWS and Azure."]}),"\n",(0,t.jsx)(n.h3,{id:"changelog",children:"Changelog"}),"\n",(0,t.jsxs)(n.p,{children:["See our ",(0,t.jsx)(n.a,{href:"https://github.com/OvertureMaps/schema/releases/tag/v0.8.0",children:"changelog"})," here."]}),"\n",(0,t.jsx)(n.h3,{id:"theme-specific-updates",children:"Theme-specific updates"}),"\n",(0,t.jsxs)(n.p,{children:["Overture ",(0,t.jsx)(n.code,{children:"2024-01-17-alpha.0"})," is released in five themes."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Buildings Theme"}),"\nThe dataset includes 2.35B conflated building footprints from OSM, Esri Community Maps, Microsoft ML Building Footprints, and Google Open Buildings.\nThe order of conflation is OpenStreetMap \u2192 Esri Community Maps \u2192 high precision Google Open Buildings \u2192 Microsoft ML Building Footprints \u2192 lower precision Google Open Buildings. For example, if Esri has a building that does not exist in OSM, we take that building, then we \u201cfill-in\u201d the rest of the map with any ML buildings that do not intersect with either OSM or Esri.\nWe use the 90% precision confidence threshold to delineate between high and lower precision for Google Open Buildings, this threshold varies per s2 cell."]}),"\n",(0,t.jsx)(n.p,{children:"We've made incremental improvements to further ensure the data conforms to the buildings layer schema."}),"\n",(0,t.jsx)(n.p,{children:"3d attributes from OSM, such as roof shape, are now available."}),"\n",(0,t.jsx)(n.p,{children:"The sources of the buildings theme include OpenStreetMap, Esri Community Maps, Microsoft Building footprints, and Google Open Buildings. Some building heights have also been derived using lidar from USGS 3DEP."}),"\n",(0,t.jsx)(n.p,{children:"Data in the Buildings theme is licensed under ODbL."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Transportation Theme"}),"\nRefreshed data to include OSM data up to Dec 19"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"GERS IDs for connectors and segments should now be considered stable for future releases"})}),"\n",(0,t.jsx)(n.p,{children:"Data in the Transportation theme is licensed under ODbL."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Base Theme"}),"\nAll of the features in the base theme are from OpenStreetMap, sourced via the latest Daylight Map Distribution (v1.38)."]}),"\n",(0,t.jsx)(n.p,{children:"Includes 43M water features, 63M land features, and 44M land use features."}),"\n",(0,t.jsx)(n.p,{children:"Most original OSM tags remain on all features. Some tags become normalized and added as top-level properties, such as the surface or wikidata tags."}),"\n",(0,t.jsx)(n.p,{children:"Data in the Base theme is licensed under ODbL."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Places Theme"}),"\nThis release has over 57M place records."]}),"\n",(0,t.jsx)(n.p,{children:"The Places theme in this release includes incremental improvements to improve the accuracy and quality of the dataset."}),"\n",(0,t.jsx)(n.p,{children:"Data in the Places theme is licensed under CDLA Permissive 2.0."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Administrative Boundaries (Admins) Theme"}),"\nMinor improvements on second-level subdivision of countries.\nData from OSM is updated to 15th of January."]}),"\n",(0,t.jsx)(n.p,{children:'This is first release with "geopolDisplay" property set on boundaries.'}),"\n",(0,t.jsx)(n.p,{children:"Known issues:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Second-level subdivision are still not complete world-wide, as we search for data sources that are compatible with ODbL."}),"\n",(0,t.jsx)(n.li,{children:"All first-level subdivisions have type=state and all second-level subdivisions have type=county which is not always true, we plan to address this issue in following release."}),"\n",(0,t.jsx)(n.li,{children:"We plan to use admin_level=8,9,10 to add polygons to cities, towns, villages and other localities when available depending on individual country mapping."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The sources of the admin theme are OpenStreetMap and Esri. The Administrative Boundary data is in the Overture Maps data schema for Admin."}),"\n",(0,t.jsx)(n.p,{children:"Data in the Admin theme is licensed under ODbL."}),"\n",(0,t.jsx)(n.h3,{id:"attribution",children:"Attribution"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\xa9 OpenStreetMap contributors available under the Open Database License (",(0,t.jsx)(n.a,{href:"http://www.openstreetmap.org/copyright",children:"www.openstreetmap.org/copyright"}),")"]}),"\n",(0,t.jsx)(n.li,{children:"U.S. Geological Survey, 2019, USGS 3D Elevation Program Digital Elevation Program"}),"\n",(0,t.jsx)(n.li,{children:"Building data \xa9 OpenStreetMap contributors, Microsoft, Esri Community Maps contributors, Google Open Buildings"}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var t=i(7294);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);