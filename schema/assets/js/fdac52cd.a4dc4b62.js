"use strict";(self.webpackChunkoverture_schema=self.webpackChunkoverture_schema||[]).push([[245],{2704:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>T,contentTitle:()=>_,default:()=>F,frontMatter:()=>S,metadata:()=>A,toc:()=>k});var r=t(4848),s=t(8453),o=t(1432),a=t(7595),i=t.n(a),c=t(6770),l=t(8285),d=t(7930);const p='---\nid: overture:transportation:example:simple-road\ntype: Feature\ngeometry:\n  type: LineString\n  coordinates:\n    - [-123.13538016118466, 49.28584368472093]\n    - [-123.13430200328841, 49.28656927229528]\n    - [-123.13325122717998, 49.28727252390803]\nproperties:\n  theme: transportation\n  type: segment\n  version: 5\n  update_time: "2024-03-13T16:36:44-08:00"\n  subtype: road\n  class: residential\n  connector_ids:\n    - overture:transportation:example:simple-road-connector-1\n    - overture:transportation:example:simple-road-connector-2\n  names:\n    primary: Nicola Street\n  road:\n    surface:\n      - value: paved\n    lanes:\n      - value:\n        - direction: backward\n        - direction: forward\n',h='---\nid: overture:transportation:example:simple-road2\ntype: Feature\ngeometry:\n  type: LineString\n  coordinates:\n    - [-122.2421117, 47.6382849]\n    - [-122.2429835, 47.6384385]\n    - [-122.2442307, 47.6386337]\n    - [-122.2445016, 47.6386753]\nproperties:\n  theme: transportation\n  type: segment\n  subtype: road\n  update_time: "2024-03-13T16:35:53-08:00"\n  version: 2\n  class: secondary\n  road:\n    restrictions:\n      speed_limits:\n        - max_speed:\n            value: 100\n            unit: km/h\n    lanes:\n      # one-way road with access and speed limit restrictions\n      # digitization: S->N\n      # |   |   |   |\n      # |   |   |   | => max speeds: 100 km/h for whole segment\n      # | h |   |   |    but on lane 2 is limited to 80 km/h for hgv vehicles\n      # | o |   |   |\n      # | v |   |   |\n      # |   |   |   |\n      # | 0 | 1 | 2 |\n      - value:\n        - direction: forward # lane 0 -> hov only\n          restrictions:\n           access:\n             - access_type: allowed\n               when:\n                 mode:\n                   - hov\n           min_occupancy: 3\n        - direction: forward # lane 1\n        - direction: forward # lane 2\n',m='---\nid: overture:transportation:example:simple-road1\ntype: Feature\ngeometry:\n  type: LineString\n  coordinates:\n    - [-122.152944, 47.629681]\n    - [-122.152916, 47.629686]\n    - [-122.152501, 47.62977]\n    - [-122.152188, 47.62984]\n    - [-122.151813, 47.629934]\n    - [-122.151747, 47.629952]\nproperties:\n  theme: transportation\n  type: segment\n  version: 4\n  update_time: "2024-03-13T16:34:41-08:00"\n  subtype: road\n  class: motorway\n  connector_ids:\n    - overture:transportation:example:simple-road-connector-1\n    - overture:transportation:example:simple-road-connector-2\n  names:\n    primary: SR 520\n  road:\n    surface:\n      - value: paved\n    restrictions:\n      access:\n        - access_type: denied\n          when: {mode: [foot]}\n',u='---\nid: overture:transportation:example:via-turn-restriction-source\ntype: Feature\ngeometry:\n  type: LineString\n  coordinates:\n    - [-71.1100226929593, 42.30156668552357]\n    - [-71.11055493812631, 42.30157222996385]\n    - [-71.11102971081017, 42.30157407811038]\n    - [-71.11143701579662, 42.30156114108277]\n    - [-71.11197425857047, 42.30152602627953]\n    - [-71.11234408150312, 42.30149091145671]\n    - [-71.1126589307566, 42.30147612626226]\n    - [-71.11301376086777, 42.301494607754876]\n    - [-71.11320616874515, 42.301516785538524]\nproperties:\n  theme: transportation\n  type: segment\n  version: 5\n  update_time: "2024-03-14T16:33:21-08:00"\n  subtype: road\n  class: primary\n  connector_ids:\n    - overture:transportation:example:via-turn-restriction-connector1\n  names:\n    primary: Arborway\n  road:\n    surface:\n      - value: paved\n    restrictions:\n      prohibited_transitions:\n        - sequence:\n            - segment_id: overture:transportation:example:via-turn-restriction-target\n              connector_id: overture:transportation:example:via-turn-restriction-connector2\n            - segment_id: overture:transportation:example:via-turn-restriction-via\n              connector_id: overture:transportation:example:via-turn-restriction-connector1\n          final_heading: forward\n          when:\n            heading: forward\n            during: Mo-Fr 06:00-09:00, 15:00-19:00\n',x='---\nid: overture:transportation:example:turn-restriction-target\ntype: Feature\ngeometry:\n  type: LineString\n  coordinates:\n    - [-71.11325364601365, 42.301374477956756]\n    - [-71.11278137213321, 42.3013264259736]\n    - [-71.11248901211202, 42.3013264259736]\n    - [-71.11157195119078, 42.30139295947919]\n    - [-71.1109997251666, 42.301428074356636]\n    - [-71.11058492376937, 42.30143177065813]\n    - [-71.11002519176327, 42.301415137298676]\nproperties:\n  theme: transportation\n  type: segment\n  version: 5\n  update_time: "2024-03-13T16:34:31-08:00"\n  subtype: road\n  class: primary\n  connector_ids:\n    - overture:transportation:example:via-turn-restriction-connector2\n  names:\n    primary: Arborway\n  road:\n    surface:\n      - value: paved\n',g='---\nid: overture:transportation:example:simple-road2\ntype: Feature\ngeometry:\n  type: LineString\n  coordinates:\n    - [-71.11213418200086, 42.3017182333833]\n    - [-71.11234408150312, 42.30149091145671]\n    - [-71.11248901211202, 42.3013264259736]\n    - [-71.11283634581244, 42.30093831245662]\nproperties:\n  theme: transportation\n  type: segment\n  version: 5\n  update_time: "2024-03-13T16:34:38-08:00"\n  subtype: road\n  class: secondary\n  connector_ids:\n    - overture:transportation:example:via-turn-restriction-connector1\n    - overture:transportation:example:via-turn-restriction-connector2\n  names:\n    primary: Washington Street\n  road:\n    surface:\n      - value: paved\n',y='---\nid: overture:transportation:example:via-turn-restriction-connector1\ntype: Feature\ngeometry:\n  type: Point\n  coordinates: [-71.11234408150312, 42.30149091145671]\nproperties:\n  theme: transportation\n  type: connector\n  version: 1\n  update_time: "2023-08-18T11:21:00-06:00"\n',j='---\nid: overture:transportation:example:via-turn-restriction-connector2\ntype: Feature\ngeometry:\n  type: Point\n  coordinates: [-71.11248901211202, 42.3013264259736]\nproperties:\n  theme: transportation\n  type: connector\n  version: 1\n  update_time: "2023-08-18T11:21:00-06:00"\n';var v=t(1470),f=t(9365),b=t(1122),w=t(6025);const S={title:"segment"},_="Segment",A={id:"reference/transportation/segment",title:"segment",description:"Segments are paths which can be traveled by people or objects.",source:"@site/docs/reference/transportation/segment.mdx",sourceDirName:"reference/transportation",slug:"/reference/transportation/segment",permalink:"/schema/reference/transportation/segment",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"segment"},sidebar:"docs",previous:{title:"connector",permalink:"/schema/reference/transportation/connector"}},T={},k=[{value:"Subtypes",id:"subtypes",level:2},{value:"Schema",id:"schema",level:2},{value:"Examples",id:"examples",level:2}];function N(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",...(0,s.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"segment",children:"Segment"}),"\n",(0,r.jsx)(n.p,{children:"Segments are paths which can be traveled by people or objects."}),"\n",(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Geometry Type"}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"LineString"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Theme"}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"transportation"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Type"}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"segment"})})]})]})}),"\n",(0,r.jsxs)(n.p,{children:["Segment geometry represents the center-line of a path that a person or object may\ntravel. Segment properties describe both the physical attributes\n(",(0,r.jsx)(n.em,{children:"e.g."})," road surface and width) and non-physical attributes (",(0,r.jsx)(n.em,{children:"e.g."}),"\naccess restriction rules) of that path."]}),"\n",(0,r.jsxs)(n.p,{children:["Two segments are physically connected if a common ",(0,r.jsx)(n.a,{href:"connector",children:"connector"}),"\nis referenced from the ",(0,r.jsx)(n.code,{children:"connector"})," property of both segments. Where\nthis occurs, both segment geometries must contain the common connector's\ncoordinates. A physical connection between segments indicates that it\n",(0,r.jsx)(n.em,{children:"may be"})," possible to travel from one segment to the next at the\nconnected location provided the segment properties do not indicate a\nrestriction, such as a turn restriction, which would prevent the\ntransition. Conversely, two segments are not physically connected -\u2014 even if their geometries intersect \u2014- if they do not share a common connector."]}),"\n",(0,r.jsx)(n.h2,{id:"subtypes",children:"Subtypes"}),"\n",(0,r.jsx)(n.p,{children:"A segment may have one of three possible subtypes."}),"\n",(0,r.jsxs)(v.default,{children:[(0,r.jsxs)(f.default,{value:"road",label:"Road",default:!0,children:[(0,r.jsx)("table",{children:(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)("code",{children:"subtype"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"road"})})]})})}),(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.code,{children:"road"})," segment represents a section of any kind of road, street or\npath, including a dedicated path for walking or cycling, but excluding\na railway."]})]}),(0,r.jsxs)(f.default,{value:"rail",label:"Railway",children:[(0,r.jsx)("table",{children:(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)("code",{children:"subtype"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"rail"})})]})})}),(0,r.jsxs)(n.p,{children:["The schema for ",(0,r.jsx)(n.code,{children:"rail"})," segments is under development."]})]}),(0,r.jsxs)(f.default,{value:"water",label:"Waterway",children:[(0,r.jsx)("table",{children:(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)("code",{children:"subtype"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"water"})})]})})}),(0,r.jsxs)(n.p,{children:["The schema for ",(0,r.jsx)(n.code,{children:"water"})," segments is under development."]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"schema",children:"Schema"}),"\n",(0,r.jsxs)(v.default,{children:[(0,r.jsx)(f.default,{value:"browsable",label:"Browsable",default:!0,children:(0,r.jsx)(i(),{schema:(0,l.A)(d.default),resolverOptions:(0,c.A)({remote:!0,yamlBasePath:"/transportation"})})}),(0,r.jsx)(f.default,{value:"yaml",label:"YAML",default:!0,children:(0,r.jsx)(o.default,{language:"jsx",children:d.default})})]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(v.default,{children:[(0,r.jsx)(f.default,{value:"simple-road",label:"Simple Road",default:!0,children:(0,r.jsx)(o.default,{language:"json",children:JSON.stringify((0,l.A)(p),null,2)})}),(0,r.jsx)(f.default,{value:"lanes",label:"Lanes",default:!0,children:(0,r.jsx)(o.default,{language:"json",children:JSON.stringify((0,l.A)(h),null,2)})}),(0,r.jsx)(f.default,{value:"accessRestrictions",label:"Access Restrictions",default:!0,children:(0,r.jsx)(o.default,{language:"json",children:JSON.stringify((0,l.A)(m),null,2)})}),(0,r.jsxs)(f.default,{value:"turnRestrictions",label:"Turn Restrictions",default:!0,children:[(0,r.jsxs)(n.p,{children:["This example illustrates a complex ",(0,r.jsx)(n.code,{children:"via"})," type turn restriction across three\nconnected segments. When traveling forward along the ",(0,r.jsx)(n.code,{children:"source"})," segment, the transition to the ",(0,r.jsx)(n.code,{children:"target"})," segment is not allowed to go through the ",(0,r.jsx)(n.code,{children:"via"})," segment."]}),(0,r.jsx)("div",{style:{textAlign:"center"},children:(0,r.jsx)(b.A,{alt:"Diagram of the `via` transition from source to destination segment",sources:{light:(0,w.A)("/img/transportation/turn-restriction-02-light.png"),dark:(0,w.A)("/img/transportation/turn-restriction-02-dark.png")}})}),(0,r.jsxs)(t,{open:!0,children:[(0,r.jsx)("summary",{children:"Source segment"}),(0,r.jsx)(o.default,{language:"json",children:JSON.stringify((0,l.A)(u),null,2)})]}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Connector 1"}),(0,r.jsx)(o.default,{language:"json",children:JSON.stringify((0,l.A)(y),null,2)})]}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Via segment"}),(0,r.jsx)(o.default,{language:"json",children:JSON.stringify((0,l.A)(g),null,2)})]}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Connector 2"}),(0,r.jsx)(o.default,{language:"json",children:JSON.stringify((0,l.A)(j),null,2)})]}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Target segment"}),(0,r.jsx)(o.default,{language:"json",children:JSON.stringify((0,l.A)(x),null,2)})]})]})]})]})}function F(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(N,{...e})}):N(e)}}}]);