"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8203],{2988:(n,l,o)=>{o.r(l),o.d(l,{assets:()=>S,contentTitle:()=>m,default:()=>z,frontMatter:()=>u,metadata:()=>p,toc:()=>x});var e=o(5893),r=o(1151);const t={horizontalScrollWrapper:"horizontalScrollWrapper_Vp3R",scrollArrow:"scrollArrow_M7yv",left:"left_fV0R",right:"right_m9du",horizontalScroll:"horizontalScroll_da5R",horizontalScrollFades:"horizontalScrollFades_HlWy",visible:"visible_aQ43"};var s=o(7294);const i=n=>{let{theme:l="#000"}=n;return(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 23 24",fill:"none",children:(0,e.jsx)("path",{d:"M11.4973 19.2992L10.4726 18.2893L16.042 12.7199H4.19922V11.2824H16.042L10.4726 5.71304L11.4973 4.70312L18.7953 12.0012L11.4973 19.2992Z",fill:l,stroke:l,strokeWidth:.1})})},c=n=>{let{children:l,blueFade:o=!1}=n;const[r,c]=(0,s.useState)(!1),[a,d]=(0,s.useState)(!1),[h,f]=(0,s.useState)(!1),u=(0,s.useRef)(null),m=(0,s.useCallback)((()=>{const n=u.current;if(n){const l=n.scrollWidth-n.clientWidth;d(n.scrollLeft>0),f(n.scrollLeft<l),c(n.scrollLeft>0)}}),[]),p=(0,s.useCallback)((n=>{m()}),[m]);(0,s.useEffect)((()=>{m()}),[m]);const S=n=>{if(u.current){const l=100;u.current.scrollBy({left:"left"===n?-l:l,behavior:"smooth"})}};return(0,e.jsxs)("div",{className:t.horizontalScrollWrapper,children:[a&&(0,e.jsx)("button",{className:`${t.scrollArrow} ${t.left}`,onClick:()=>S("left"),children:(0,e.jsx)(i,{theme:"currentColor"})}),(0,e.jsx)("div",{className:`${t.horizontalScrollFades}  ${t.left}  ${r?t.visible:t.invisible}`}),(0,e.jsx)("div",{className:t.horizontalScroll,onScroll:p,ref:u,children:l}),(0,e.jsx)("div",{className:`${t.horizontalScrollFades} ${t.right}  ${h?t.visible:t.invisible}`}),h&&(0,e.jsx)("button",{className:`${t.scrollArrow} ${t.right}`,onClick:()=>S("right"),children:(0,e.jsx)(i,{theme:"currentColor"})})]})},a="horizontalScrollWrapper_itBA",d=n=>{let{children:l}=n;return(0,e.jsx)("div",{className:`${a} `,children:l})},h=n=>{let{index:l}=n;return(0,e.jsx)("img",{src:"https://media1.giphy.com/media/lFof5NSRqNn1yNMleM/200.webp?cid=ecf05e47sog650v8879psfmh39rvxyloewktqddquvb0tr9t&ep=v1_stickers_search&rid=200.webp&ct=s",alt:`Demo ${l}`},l)},f=()=>Array.from({length:10},((n,l)=>(0,e.jsx)(h,{index:l},l))),u={},m="Horizontal Scroll",p={id:"Components/HorizontalScroll/HorizontalScroll",title:"Horizontal Scroll",description:"Horizontal Scroll Simple",source:"@site/docs/Components/HorizontalScroll/HorizontalScroll.mdx",sourceDirName:"Components/HorizontalScroll",slug:"/Components/HorizontalScroll/",permalink:"/docs/Components/HorizontalScroll/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"componentsSidebar"},S={},x=[{value:"Horizontal Scroll Simple",id:"horizontal-scroll-simple",level:3},{value:"Horizontal Scroll Fancy",id:"horizontal-scroll-fancy",level:3}];function v(n){const l={code:"code",h1:"h1",h3:"h3",pre:"pre",...(0,r.a)(),...n.components},{Details:o}=l;return o||function(n,l){throw new Error("Expected "+(l?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.h1,{id:"horizontal-scroll",children:"Horizontal Scroll"}),"\n",(0,e.jsx)(l.h3,{id:"horizontal-scroll-simple",children:"Horizontal Scroll Simple"}),"\n",(0,e.jsx)(d,{children:f()}),"\n",(0,e.jsx)(l.h3,{id:"horizontal-scroll-fancy",children:"Horizontal Scroll Fancy"}),"\n",(0,e.jsx)(c,{children:f()}),"\n",(0,e.jsxs)(o,{children:[(0,e.jsx)("summary",{children:"Javascript"}),(0,e.jsx)(l.pre,{children:(0,e.jsx)(l.code,{children:'import styles from "./HorizontalScrollFancy.module.css";\n\nimport React, {\n  ReactNode,\n  useCallback,\n  useEffect,\n  useRef,\n  useState,\n} from "react";\n\nimport { RightArrow } from "../Icons/RightArrow";\n\ninterface HorizontalScrollProps {\nchildren: ReactNode;\nblueFade?: boolean;\n}\n\nconst HorizontalScrollFancy: React.FC<HorizontalScrollProps> = ({\nchildren,\nblueFade = false,\n}) => {\nconst [isScrolled, setIsScrolled] = useState(false);\nconst [canScrollLeft, setCanScrollLeft] = useState(false);\nconst [canScrollRight, setCanScrollRight] = useState(false);\nconst scrollContainerRef = useRef<HTMLDivElement>(null);\n\nconst checkForScrollPosition = useCallback(() => {\nconst el = scrollContainerRef.current;\nif (el) {\nconst maxScrollLeft = el.scrollWidth - el.clientWidth;\nsetCanScrollLeft(el.scrollLeft > 0);\nsetCanScrollRight(el.scrollLeft < maxScrollLeft);\nsetIsScrolled(el.scrollLeft > 0);\n}\n}, []);\n\nconst handleScroll = useCallback(\n(event: React.UIEvent<HTMLDivElement>) => {\ncheckForScrollPosition();\n},\n[checkForScrollPosition]\n);\n\nuseEffect(() => {\ncheckForScrollPosition();\n}, [checkForScrollPosition]);\n\nconst scroll = (direction: "left" | "right") => {\nif (scrollContainerRef.current) {\nconst scrollAmount = 100;\nscrollContainerRef.current.scrollBy({\nleft: direction === "left" ? -scrollAmount : scrollAmount,\nbehavior: "smooth",\n});\n}\n};\n\nreturn (\n\n<div className={styles.horizontalScrollWrapper}>\n  {canScrollLeft && (\n    <button\n      className={`${styles.scrollArrow} ${styles.left}`}\n      onClick={() => scroll("left")}\n    >\n      <RightArrow theme="currentColor" />\n    </button>\n  )}\n  <div\n    className={`${styles.horizontalScrollFades}  ${styles.left}  ${\n      isScrolled ? styles.visible : styles.invisible\n    }`}\n  ></div>\n  <div\n    className={styles.horizontalScroll}\n    onScroll={handleScroll}\n    ref={scrollContainerRef}\n  >\n    {children}\n  </div>\n  <div\n    className={`${styles.horizontalScrollFades} ${styles.right}  ${\n      canScrollRight ? styles.visible : styles.invisible\n    }`}\n  ></div>\n  {canScrollRight && (\n    <button\n      className={`${styles.scrollArrow} ${styles.right}`}\n      onClick={() => scroll("right")}\n    >\n      <RightArrow theme="currentColor" />\n    </button>\n  )}\n</div>\n); };\n\nexport default HorizontalScrollFancy;\n\n'})})]}),"\n",(0,e.jsxs)(o,{children:[(0,e.jsx)("summary",{children:"CSS"}),(0,e.jsx)(l.pre,{children:(0,e.jsx)(l.code,{children:"\n/_ HorizontalScrollFancy.module.css _/\n\n.horizontalScrollWrapper {\nposition: relative;\nwidth: 100%;\n}\n\n.scrollArrow {\nposition: absolute;\ncursor: pointer;\nz-index: 5;\nwidth: 30px;\nheight: 30px;\ndisplay: flex;\njustify-content: flex-end;\nalign-items: center;\n}\n\n.scrollArrow.left {\nleft: 1rem;\ntransform: scale(130%) rotate(180deg);\n}\n\n.scrollArrow.right {\nright: 1rem;\ntransform: scale(130%);\n}\n\n.horizontalScroll {\noverflow-x: auto;\noverflow-y: hidden;\nflex: row;\ndisplay: flex;\nflex-direction: row;\n\nposition: relative;\n-ms-overflow-style: none; /_ Internet Explorer 10+ _/\nscrollbar-width: none; /_ Firefox _/\n}\n\n.horizontalScroll::-webkit-scrollbar {\ndisplay: none; /_ Safari and Chrome _/\n}\n\n.horizontalScrollFades {\nposition: absolute;\ntop: 0;\nheight: 100%;\nwidth: 36px;\npointer-events: none;\nz-index: 6;\nbackground: linear-gradient(\nto right,\nrgba(255, 255, 255, 1) 30%,\nrgba(255, 255, 255, 0) 100%\n);\n}\n\n.horizontalScrollFades.left {\nleft: 0;\nz-index: 2;\ntransition: opacity 0.3s ease-in-out;\nopacity: 0;\n}\n\n.horizontalScrollFades.left.visible {\nopacity: 1;\n}\n\n.horizontalScrollFades.right {\nright: 0;\ntransition: opacity 0.3s ease-in-out;\nopacity: 0;\ntransform: rotate(180deg);\n}\n\n.horizontalScrollFades.right.visible {\nopacity: 1;\n}\n\n"})})]}),"\n",(0,e.jsx)(l.pre,{children:(0,e.jsx)(l.code,{})})]})}function z(n={}){const{wrapper:l}={...(0,r.a)(),...n.components};return l?(0,e.jsx)(l,{...n,children:(0,e.jsx)(v,{...n})}):v(n)}},1151:(n,l,o)=>{o.d(l,{Z:()=>i,a:()=>s});var e=o(7294);const r={},t=e.createContext(r);function s(n){const l=e.useContext(t);return e.useMemo((function(){return"function"==typeof n?n(l):{...l,...n}}),[l,n])}function i(n){let l;return l=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),e.createElement(t.Provider,{value:l},n.children)}}}]);