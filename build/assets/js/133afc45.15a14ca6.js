"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[913],{8402:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>p,toc:()=>h});var n=r(5893),s=r(1151),a=r(8955);function u(e){return(0,n.jsx)(n.Fragment,{})}function o(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u()}function l(e){return(0,n.jsx)(n.Fragment,{})}function i(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l()}const c={},d="Typescript",p={id:"Topics/Typescript/Typescript",title:"Typescript",description:"- Typescript .d.ts File - WittCode",source:"@site/docs/Topics/Typescript/Typescript.md",sourceDirName:"Topics/Typescript",slug:"/Topics/Typescript/",permalink:"/docs/Topics/Typescript/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},f={},h=[];function b(e){const t={a:"a",h1:"h1",li:"li",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"typescript",children:"Typescript"}),"\n",(0,n.jsx)("div",{class:"beginner",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=qUIs-uwmXlk",children:"Typescript .d.ts File - WittCode"})}),"\n"]})}),"\n",(0,n.jsx)("div",{class:"intermediate"}),"\n",(0,n.jsx)("div",{class:"expert"}),"\n",(0,n.jsx)(a.f,{Questions:(0,n.jsx)(o,{}),Resources:(0,n.jsx)(i,{})})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},8955:(e,t,r)=>{r.d(t,{f:()=>V});var n=r(7294),s=r(6010),a=r(2466),u=r(6550),o=r(469),l=r(1980),i=r(7392),c=r(12);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const s=(0,u.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=p(e),[u,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[i,d]=h({queryString:r,groupId:s}),[b,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,c.Nk)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),v=(()=>{const e=i??b;return f({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:u,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=r(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=r(5893);function x(e){let{className:t,block:r,selectedValue:n,selectValue:u,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,a.o5)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),s=o[r].value;s!==n&&(i(t),u(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...a,className:(0,s.Z)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function j(e){const t=b(e);return(0,y.jsxs)("div",{className:(0,s.Z)("tabs-container",v.tabList),children:[(0,y.jsx)(x,{...e,...t}),(0,y.jsx)(g,{...e,...t})]})}function w(e){const t=(0,m.Z)();return(0,y.jsx)(j,{...e,children:d(e.children)},String(t))}const T="tabItem_Ymn6";function k(e){let{children:t,hidden:r,className:n}=e;return(0,y.jsx)("div",{role:"tabpanel",className:(0,s.Z)(T,n),hidden:r,children:t})}const V=e=>{let{Resources:t,Questions:r,Books:n}=e;return(0,y.jsxs)(w,{defaultValue:"questions",values:[{label:"Questions",value:"questions"},{label:"Resources",value:"resources"}],children:[(0,y.jsxs)(k,{value:"questions",children:[" ",r]}),(0,y.jsxs)(k,{value:"resources",children:[" ",t]})]})}},1151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>u});var n=r(7294);const s={},a=n.createContext(s);function u(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:u(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);