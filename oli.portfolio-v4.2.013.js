import{_ as d,r as h,o as f,a as b,b as l,c,d as r,m as v,t as g,n as u,i as w,F as k,q as L,u as p,e as _,w as N}from"./oli.portfolio-v4.2.0.js";import{_ as T}from"./oli.portfolio-v4.2.012.js";const x=(a,o,n,t)=>{!a||!o||!n||!t||gtag("event",o,{event_category:a,event_label:n,value:t})};const y={class:"app-tooltip"},I={__name:"Tooltip",props:{position:{type:String,default:""},content:{type:String,default:""}},setup(a){const o=a,n=h({hideTooltip:!1});f(()=>window.addEventListener("touchmove",t)),b(()=>window.removeEventListener("touchmove",t));const t=()=>n.hideTooltip=!0;return(i,e)=>(l(),c("div",y,[r("div",{class:u(`app-tooltip__position ${o.position}`),tabindex:"0"},[v(i.$slots,"default",{},void 0,!0),r("span",{ref:"hideTooltipRef",class:"app-tooltip__text"},g(o.content),513)],2)]))}},M=d(I,[["__scopeId","data-v-cad86fee"]]),S="/icons/linkedin.webp",$="/icons/medium.webp",G="/icons/github.webp",E="/icons/gmail.webp",B="/icons/phone.webp",P=w({id:"leftNavbar",state:()=>({items:[{path:"https://www.linkedin.com/in/seulean-olimpiu",alt:"Linkedin icon",icon:S,title:"Linkedin"},{path:"https://medium.com/@olimpiuseulean",alt:"Medium icon",icon:$,title:"Medium"},{path:"https://github.com/oliseulean",alt:"Github icon",icon:G,title:"Github"},{path:"mailto:seulean.olimpiu@gmail.com",alt:"Mail icon",icon:E,title:"Mail"},{path:"tel:0741547328",alt:"Telephone icon",icon:B,title:"Phone"}]}),getters:{},actions:{}});const z={class:"app-left-navbar"},C=["href"],F={__name:"LeftNavbar",setup(a){const o=P(),n=t=>{var s;const e=((s=t==null?void 0:t.target)==null?void 0:s.alt).replace("webp","");x("Olimpiu Seulean Portfolio",`${e}`,`${e} - social`,1)};return(t,i)=>(l(),c("div",z,[(l(!0),c(k,null,L(p(o).items,(e,s)=>(l(),c("a",{key:s,href:e.path,target:"_blank",class:"app-left-navbar__link",onClick:i[0]||(i[0]=m=>n(m))},[_(p(M),{position:"right",content:e.title,class:"app-left-navbar__tooltip"},{default:N(()=>[_(p(T),{altText:e.alt,src:e.icon,height:30,width:30,class:u("app-left-navbar__icon"),loading:"lazy"},null,8,["altText","src"])]),_:2},1032,["content"])],8,C))),128))]))}},A=d(F,[["__scopeId","data-v-6204a3b5"]]);export{A as L,M as T,x as s};
