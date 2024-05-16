"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[1948],{3161:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=i(5893),s=i(1151);const a={title:"2023-10-19-alpha.0",slug:"2023-10-19-alpha.0"},r=void 0,o={permalink:"/release/2023-10-19-alpha.0",source:"@site/release-blog/2023-alpha/2023-10-19-alpha.0.mdx",title:"2023-10-19-alpha.0",description:"Highlights",date:"2023-10-19T00:00:00.000Z",formattedDate:"October 19, 2023",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{title:"2023-10-19-alpha.0",slug:"2023-10-19-alpha.0"},unlisted:!1,prevItem:{title:"2023-11-14-alpha.0",permalink:"/release/2023-11-14-alpha.0"},nextItem:{title:"2023-07-26-alpha.0",permalink:"/release/2023-07-26-alpha.0"}},l={authorsImageUrls:[]},d=[{value:"Highlights",id:"highlights",level:3},{value:"Changelog",id:"changelog",level:3},{value:"Theme-specific updates",id:"theme-specific-updates",level:3},{value:"Attribution",id:"attribution",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"highlights",children:"Highlights"}),"\n",(0,t.jsxs)(n.p,{children:["Overture ",(0,t.jsx)(n.code,{children:"2023-10-19-alpha.0"})," is now available. This release includes several improvements to the data quality and coverage as well as updates for data currency.  There are two new additions of note:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Base Theme"}),": A new Base theme that provides three context data subtypes. These can be used with the other themes to allow developers to build complete maps using any Overture release."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Buildings Theme"}),": Stable identifiers have been added to 1.6M buildings in 8 cities to demonstrate how Overture will implement stable identifiers (named Global Entity Reference System or GERS)."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"More information about these additions is available in the relevant sections below."}),"\n",(0,t.jsx)(n.p,{children:"This data is formatted in the Overture Data Schema unless otherwise noted."}),"\n",(0,t.jsx)(n.p,{children:"This data is available for use under the designated licenses for each theme. While Overture intends to release open map data on a regular cadence in the future, the date of subsequent releases has not yet been established."}),"\n",(0,t.jsx)(n.p,{children:"We would like feedback on the data, its usefulness, and how it could be improved. Please use this Github repo for discussions and feedback related to this data release."}),"\n",(0,t.jsxs)(n.p,{children:["Overture ",(0,t.jsx)(n.code,{children:"2023-10-19-alpha.0"})," is formatted in the Overture Maps schema described here. It is available in cloud-native Parquet and stored on AWS and Azure."]}),"\n",(0,t.jsx)(n.h3,{id:"changelog",children:"Changelog"}),"\n",(0,t.jsxs)(n.p,{children:["See our ",(0,t.jsx)(n.a,{href:"https://github.com/OvertureMaps/schema/releases/tag/v0.5.0",children:"changelog"})," here."]}),"\n",(0,t.jsx)(n.h3,{id:"theme-specific-updates",children:"Theme-specific updates"}),"\n",(0,t.jsxs)(n.p,{children:["Overture ",(0,t.jsx)(n.code,{children:"2023-10-19-alpha.0"})," is released in five themes."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Base Theme"}),"\nThe Base theme is an entirely new theme with 3 subTypes: land, landUse, and water. The overall purpose of this new theme is to allow users to create a complete map using any Overture release. Descriptions of the subTypes for Base are:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"land: Physical representations of land surfaces. Derived from the inverse of OSM Coastlines."}),"\n",(0,t.jsx)(n.li,{children:"landUse: Classifications of the human use of a section of land. Mostly derived from the key landuse in OpenStreetMap"}),"\n",(0,t.jsx)(n.li,{children:"water: Physical representations of inland and ocean marine surfaces. Derived from OSM Coastlines, and the keys natural and waterway in OpenStreetMap."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"All of the features in the base theme are from OpenStreetMap, sourced via the Daylight Map Distribution. Original OSM tags remain on all features. Some tags become top-level properties, such as the surface or wikidata tags."}),"\n",(0,t.jsx)(n.p,{children:"Data in the Base theme is licensed under ODbL."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Buildings Theme"}),"\nThe dataset includes 1.39B conflated building footprints from OSM, Esri Community Maps, and Microsoft ML Building Footprints. This is an increase of ~700M building footprints from the July Alpha release by including the complete Microsoft ML Building footprint dataset."]}),"\n",(0,t.jsx)(n.p,{children:'The order of conflation is OpenStreetMap > Esri Community Maps > Microsoft ML Building Footprints. For example, if Esri has a building that does not exist in OSM, we take that building, then, we "fill-in" the rest of the map with any Microsoft ML buildings that do not intersect with either OSM or Esri.'}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"A sample set of 1.6M buildings from OpenStreetMap and Esri have been assigned an initial GERS ID for demonstration purposes. These IDs are 32 character strings. By referencing these other datasets to this data release, we can match GERS IDs to external datasets and demonstrate how GERS can enable ID-based joins between two geospatial datasets. These are located in the following cities:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"United States: Seattle, Washington; Macon, Georgia; Charleston, South Carolina; Spokane, Washington"}),"\n",(0,t.jsx)(n.li,{children:"Canada: Kingston, Ontario"}),"\n",(0,t.jsx)(n.li,{children:"Netherlands: Leeuwarden, Friesland"}),"\n",(0,t.jsx)(n.li,{children:"Germany: Berlin"}),"\n",(0,t.jsx)(n.li,{children:"Brazil: Rio De Janeiro"}),"\n"]}),(0,t.jsxs)(n.p,{children:["For a deeper look at how GERS is used to link datasets on this data, see ",(0,t.jsx)(n.a,{href:"https://www.esri.com/arcgis-blog/products/arcgis-online/mapping/enriching-overture-data-with-gers/",children:"this blog post from Deane Kensok at Esri"}),"."]})]}),"\n",(0,t.jsx)(n.p,{children:"The sources include OpenStreetMap, Microsoft Building footprints, and Esri Community Partners. Some building heights have also been derived using lidar from USGS 3DEP. The Building data is in the Overture Maps data schema for Buildings."}),"\n",(0,t.jsx)(n.p,{children:"Data in the Buildings theme is licensed under ODbL."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Administrative Boundaries (Admins) Theme"}),"\nThe Admins theme includes multiple locality types:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Countries formed from OpenStreetMap relations, primarily admin_level=2, with few exceptions such as admin_level=3 French Polynesia."}),"\n",(0,t.jsx)(n.li,{children:"First-level subdivisions under the country which was mapped from OpenStreetMap admin_level depending on country, in most countries admin_level=4."}),"\n",(0,t.jsx)(n.li,{children:"Second-level subdivisions under the country which was mapped from OpenStreetMap admin_level depending on country, in most countries admin_level=6."}),"\n",(0,t.jsx)(n.li,{children:"Cities, Town, Villages, Neighborhoods... based on place=* tag. In most cases these are just points. When relation with place=* tag exist we provide polygon geometry."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["It also includes administrative boundaries representing borders of countries, first-level subdivisions and second-level subdivisions. The Administrative Boundary data is in the Overture Maps data schema for Admin.\nSecond-level subdivision did not undergo worldwide inspection of quality so some missing or wrong data is expected. All first-level subdivisions have ",(0,t.jsx)(n.code,{children:"type=state"})," and all second-level subdivisions have ",(0,t.jsx)(n.code,{children:"type=county"})," which is not always true; we plan to address this issue in future releases. We plan to use admin_level=8,9,10 to add polygons to cities, town, villages and other localities when available depending on individual country mapping."]}),"\n",(0,t.jsx)(n.p,{children:"Data in the Admin theme is licensed under ODbL. The sources of the admin theme are OpenStreetMap and Esri."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Places Theme"}),"\nThis release has over 57M place records. The Places theme in this release includes several modifications to improve the accuracy and quality of the dataset:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Increased deduplication on significant landmarks by revising the screening criteria for signals based on check-ins only"}),"\n",(0,t.jsx)(n.li,{children:"Removal of places determined to be non-existent"}),"\n",(0,t.jsx)(n.li,{children:"Address normalization bug fix that was yielding incorrect pin locations. In addition, support for website, phone and category was added to the Microsoft sourced data."}),"\n",(0,t.jsx)(n.li,{children:"Some additional place records were added as a result of tuning of the algorithms."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Data in the Places theme is licensed under CDLA Permissive 2.0."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Transportation Theme"}),"\nThe Transportation theme includes the following improvements:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Collective OSM changes through September 15th, updated and converted to Overture's Schema."}),"\n",(0,t.jsx)(n.li,{children:"Addition of Linear Referenced features, enabling the description of properties that apply along only portions of a segment."}),"\n",(0,t.jsx)(n.li,{children:"Over 1.3 million turn restrictions worldwide"}),"\n",(0,t.jsx)(n.li,{children:"Additional scoping types populated in the Transportation data, including Travel Modes, Temporal Scoping, Geometric Scoping, and Heading"}),"\n",(0,t.jsx)(n.li,{children:"Additional properties populated in the Transportation data, including Speed Limits, surface, and road flags."}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"There are several missing properties in this data release that will be added in future releases:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Only includes road segments made from Ways that include a \u2018highway\u2019 tag"}),"\n",(0,t.jsx)(n.li,{children:"Non-geometric scoping properties are not included"}),"\n",(0,t.jsx)(n.li,{children:"Turn and Access restrictions are not included"}),"\n",(0,t.jsx)(n.li,{children:"Lane information is not included"}),"\n",(0,t.jsx)(n.li,{children:"Some language/scripts are not included in names properties"}),"\n"]})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"The data includes some provisional Global Entity Reference System (GERS) data which is used to express relationships between road segments. This may not be representative of the final GERS format and should not be the basis for long-term development work."})}),"\n",(0,t.jsx)(n.p,{children:"Data in the Transportation theme is licensed under ODbL."}),"\n",(0,t.jsx)(n.h3,{id:"attribution",children:"Attribution"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\xa9 OpenStreetMap contributors available under the Open Database License (",(0,t.jsx)(n.a,{href:"http://www.openstreetmap.org/copyright",children:"www.openstreetmap.org/copyright"}),")"]}),"\n",(0,t.jsx)(n.li,{children:"U.S. Geological Survey, 2019, USGS 3D Elevation Program Digital Elevation Program"}),"\n",(0,t.jsx)(n.li,{children:"Building data \xa9 OpenStreetMap contributors, Microsoft, Esri Community Maps contributors"}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var t=i(7294);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);