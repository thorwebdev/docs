"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[3854],{96217:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=n(74848),t=n(28453);const a={title:"2024-02-15-alpha.0",slug:"2024-02-15-alpha.0"},r=void 0,o={permalink:"/release/2024-02-15-alpha.0",source:"@site/release-blog/2024-alpha/2024-02-15-alpha.0.mdx",title:"2024-02-15-alpha.0",description:"Highlights",date:"2024-02-15T00:00:00.000Z",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{title:"2024-02-15-alpha.0",slug:"2024-02-15-alpha.0"},unlisted:!1,prevItem:{title:"2024-03-12-alpha.0",permalink:"/release/2024-03-12-alpha.0"},nextItem:{title:"2024-01-17-alpha.0",permalink:"/release/2024-01-17-alpha.0"}},l={authorsImageUrls:[]},d=[{value:"Highlights",id:"highlights",level:3},{value:"Changelog",id:"changelog",level:3},{value:"Theme-specific updates",id:"theme-specific-updates",level:3},{value:"Attribution",id:"attribution",level:3}];function h(e){const i={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h3,{id:"highlights",children:"Highlights"}),"\n",(0,s.jsxs)(i.p,{children:["Overture ",(0,s.jsx)(i.code,{children:"2024-02-15-alpha.0"})," is now available. This release includes several incremental improvements, addition of geopolitical boundary information in the Admins Theme and expansion of GERS IDs across several themes. More information about these additions is available in the relevant sections below."]}),"\n",(0,s.jsx)(i.p,{children:"This data is formatted in the Overture Data Schema unless otherwise noted."}),"\n",(0,s.jsx)(i.p,{children:"This data is available for use under the designated licenses for each theme."}),"\n",(0,s.jsx)(i.p,{children:"We would like feedback on the data, its usefulness, and how it could be improved. Please use this Github repo for discussions and feedback related to this data release."}),"\n",(0,s.jsxs)(i.p,{children:["Overture ",(0,s.jsx)(i.code,{children:"2024-02-15-alpha.0"})," is available in GeoParquet and stored on AWS and Azure."]}),"\n",(0,s.jsx)(i.h3,{id:"changelog",children:"Changelog"}),"\n",(0,s.jsxs)(i.p,{children:["See our ",(0,s.jsx)(i.a,{href:"https://github.com/OvertureMaps/schema/releases/tag/v0.8.0",children:"changelog"})," here."]}),"\n",(0,s.jsx)(i.h3,{id:"theme-specific-updates",children:"Theme-specific updates"}),"\n",(0,s.jsxs)(i.p,{children:["Overture ",(0,s.jsx)(i.code,{children:"2024-02-15-alpha.0"})," is released in five themes."]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Buildings Theme"}),"\nThe dataset includes 2.35B conflated building footprints from OSM, Esri Community Maps, Microsoft ML Building Footprints, and Google Open Buildings.\nThe order of conflation is OpenStreetMap \u2192 Esri Community Maps \u2192 high precision Google Open Buildings \u2192 Microsoft ML Building Footprints \u2192 lower precision Google Open Buildings. For example, if Esri has a building that does not exist in OSM, we take that building, then we \u201cfill-in\u201d the rest of the map with any ML buildings that do not intersect with either OSM or Esri.\nWe use the 90% precision confidence threshold to delineate between high and lower precision for Google Open Buildings, this threshold varies per s2 cell."]}),"\n",(0,s.jsx)(i.p,{children:"We've made incremental improvements to further ensure the data conforms to the buildings layer schema."}),"\n",(0,s.jsx)(i.p,{children:"3d attributes from OSM, such as roof shape, are now available."}),"\n",(0,s.jsx)(i.p,{children:"The sources of the buildings theme include OpenStreetMap, Esri Community Maps, Microsoft Building footprints, and Google Open Buildings. Some building heights have also been derived using lidar from USGS 3DEP."}),"\n",(0,s.jsx)(i.p,{children:"Data in the Buildings theme is licensed under ODbL."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Transportation Theme"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Refreshed data to include OSM data up to Feb 5"}),"\n",(0,s.jsx)(i.li,{children:"Segment names are now a top-level property with a unified schema"}),"\n",(0,s.jsx)(i.li,{children:"Access restrictions are now populated for most simple cases"}),"\n",(0,s.jsx)(i.li,{children:"OSM source IDs are now included for all segments"}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsx)(i.p,{children:"GERS IDs for connectors and segments should now be considered stable for this and future releases"})}),"\n",(0,s.jsx)(i.p,{children:"Data in the Transportation theme is licensed under ODbL."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Base Theme"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"All of the features in the base theme are from OpenStreetMap, sourced via the latest Daylight Map Distribution (v1.40)."}),"\n",(0,s.jsx)(i.li,{children:"Includes 44M water features, 63M land features, and 34M land use features.\nMost original OSM tags remain on all features. Some tags become normalized and added as top-level properties, such as the surface or wikidata tags."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Data in the Base theme is licensed under ODbL."}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Places Theme"}),"\nThis release has roughly 54M place records. The Places theme in this release includes incremental improvements to improve the accuracy and quality of the dataset."]}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsx)(i.p,{children:"For the first time, this release includes GERS stableids propagated from the previous release. Roughly 50M of the ids are propagated and 4M of the ids are new."})}),"\n",(0,s.jsx)(i.p,{children:"Data in the Places theme is licensed under CDLA Permissive 2.0."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Administrative Boundaries (Admins) Theme"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"First version where all countries have second-level subdivisions."}),"\n",(0,s.jsx)(i.li,{children:"In 37 countries we used geoBoundaries as data source for second-level subdivisions where OpenStreetMap data is missing or is incomplete."}),"\n",(0,s.jsx)(i.li,{children:"Data from OSM is updated to 8th of February."}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"AdminLevel"})," property value changed from 2 for Country, 4 for State and 6 for County to be 1 for Country, 2 for State and 3 for County."]}),"\n",(0,s.jsx)(i.li,{children:"Added Wikidata and Population properties."}),"\n",(0,s.jsxs)(i.li,{children:["All administrative localities now have ",(0,s.jsx)(i.code,{children:"isoCountryCodeAlpha2"})," set for easier filtering to specific country."]}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsx)(i.p,{children:"Known issue: All first-level subdivisions have type=state and all second-level subdivisions have type=county which is not always true, we plan to address this issue in following release. Will be fixed in March release."})}),"\n",(0,s.jsx)(i.p,{children:"The sources of the admin theme are OpenStreetMap, geoBoundaries and Esri."}),"\n",(0,s.jsx)(i.p,{children:"The Administrative Boundary data is in the Overture Maps data schema for Admin."}),"\n",(0,s.jsx)(i.p,{children:"Data in the Admin theme is licensed under ODbL."}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Documentation"}),"\nUpdated schema, reference and GERS technical documentation.\nIntegrated ",(0,s.jsx)(i.a,{href:"https://labs.overturemaps.org/how-to/",children:"https://labs.overturemaps.org/how-to/"})," with core documentation.\nAdded new guides and tutorials for accessing, exploring  and visualizing data."]}),"\n",(0,s.jsx)(i.h3,{id:"attribution",children:"Attribution"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\xa9 OpenStreetMap contributors available under the Open Database License (",(0,s.jsx)(i.a,{href:"http://www.openstreetmap.org/copyright",children:"www.openstreetmap.org/copyright"}),")"]}),"\n",(0,s.jsx)(i.li,{children:"U.S. Geological Survey, 2019, USGS 3D Elevation Program Digital Elevation Program"}),"\n",(0,s.jsx)(i.li,{children:"Building data \xa9 OpenStreetMap contributors, Microsoft, Esri Community Maps contributors, Google Open Buildings"}),"\n",(0,s.jsx)(i.li,{children:"Administrative Boundaries from geoBoundaries."}),"\n"]})]})}function c(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);