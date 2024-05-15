"use strict";(self.webpackChunkoverture_schema=self.webpackChunkoverture_schema||[]).push([[914],{3210:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>y,contentTitle:()=>b,default:()=>_,frontMatter:()=>f,metadata:()=>x,toc:()=>j});var r=i(4848),t=i(8453),l=i(1432),s=i(7595),a=i.n(s),o=i(6770),d=i(8285),u=i(100);const c='---\nid: overture:buildings:building:1234\ntype: Feature\ngeometry:\n  type: Polygon\n  coordinates: [[\n            [-77.036873, 38.897804],\n            [-77.036873, 38.897559],\n            [-77.036260, 38.897559],\n            [-77.036260, 38.897804],\n            [-77.036873, 38.897804]\n          ]]\nproperties:\n  # Custom user properties.\n  ext_foo: I am a customer user property.\n  ext_bar: Me too!\n  # Overture properties\n  theme: buildings\n  type: building\n  version: 1\n  level: 1\n  update_time: "2023-06-06T10:30:00-08:00"\n  height: 21.34\n  num_floors: 4\n  subtype: transportation\n  class: parking\n  sources:\n  - property: ""\n    dataset: microsoftMLBuildings,\n    confidence: 1\n  - property: /properties/height\n    dataset:  metaLidarExtractions,\n    confidence: 0.95\n',h='---\nid: overture:buildings:building:1234\ntype: Feature\ngeometry:\n  type: MultiPolygon\n  coordinates: [[[[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]]]]\nproperties:\n  # Custom user properties.\n  ext_foo: I am a customer user property.\n  ext_bar: Me too!\n  # Overture properties\n  theme: buildings\n  type: building\n  version: 0\n  update_time: "2023-02-22T23:55:01-08:00"\n',p='---\nid: overture:buildings:building:1234\ntype: Feature\nproperties:\n  # Custom user properties.\n  ext_foo: I am a customer user property.\n  ext_bar: Me too!\n  # Overture properties\n  theme: buildings\n  type: building\n  version: 1\n  update_time: "2023-02-22T23:55:01-08:00"\n  names:\n    primary: The White house\n    common:\n      es: La Casa Blanca\n    rules:\n      - variant: official\n        value: The White House\n      - variant: alternate\n        value: White House\ngeometry:\n  type: Polygon\n  coordinates: [[\n            [-77.036873, 38.897804],\n            [-77.036873, 38.897559],\n            [-77.036260, 38.897559],\n            [-77.036260, 38.897804],\n            [-77.036873, 38.897804]\n          ]]\n';var m=i(1470),g=i(9365);const f={title:"building"},b="Building",x={id:"reference/buildings/building",title:"building",description:"Buildings are human-made structures with roofs or interior spaces that are permanently or semi-permanently in one place (OSM building definition).",source:"@site/docs/reference/buildings/building.mdx",sourceDirName:"reference/buildings",slug:"/reference/buildings/building",permalink:"/schema/reference/buildings/building",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"building"},sidebar:"docs",previous:{title:"water",permalink:"/schema/reference/base/water"},next:{title:"building_part",permalink:"/schema/reference/buildings/building_part"}},y={},j=[{value:"Schema",id:"schema",level:2},{value:"Examples",id:"examples",level:2}];function v(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",p:"p",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"building",children:"Building"}),"\n",(0,r.jsxs)(n.p,{children:["Buildings are human-made structures with roofs or interior spaces that are permanently or semi-permanently in one place (",(0,r.jsx)(n.a,{href:"https://wiki.openstreetmap.org/wiki/Key:building",children:"OSM building definition"}),")."]}),"\n",(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Geometry Type"}),(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"Polygon"})," or ",(0,r.jsx)("code",{children:"MultiPolygon"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Theme"}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"buildings"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Type"}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"building"})})]})]})}),"\n",(0,r.jsxs)(n.p,{children:["The most basic form of a ",(0,r.jsx)(n.em,{children:"building"})," feature in the Overture Schema. The geometry is expected to be the most outer footprint (or roofprint if traced from satellite/aerial imagery) of a building."]}),"\n",(0,r.jsx)(n.h2,{id:"schema",children:"Schema"}),"\n",(0,r.jsxs)(m.default,{children:[(0,r.jsx)(g.default,{value:"browsable",label:"Browsable",default:!0,children:(0,r.jsx)(a(),{schema:(0,d.A)(u.default),resolverOptions:(0,o.A)({remote:!0,yamlBasePath:"/buildings"})})}),(0,r.jsx)(g.default,{value:"yaml",label:"YAML",default:!0,children:(0,r.jsx)(l.default,{language:"jsx",children:u.default})})]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(m.default,{children:[(0,r.jsx)(g.default,{value:"1",label:"Polygon Building",default:!0,children:(0,r.jsx)(l.default,{language:"json",children:JSON.stringify((0,d.A)(c),null,2)})}),(0,r.jsx)(g.default,{value:"2",label:"MultiPolygon Building",default:!0,children:(0,r.jsx)(l.default,{language:"json",children:JSON.stringify((0,d.A)(h),null,2)})}),(0,r.jsx)(g.default,{value:"3",label:"Building with Multiple Names",default:!0,children:(0,r.jsx)(l.default,{language:"json",children:JSON.stringify((0,d.A)(p),null,2)})})]})]})}function _(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(v,{...e})}):v(e)}}}]);