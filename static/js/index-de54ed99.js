var me=Object.defineProperty,pe=Object.defineProperties;var Be=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var q=(u,t,r)=>t in u?me(u,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):u[t]=r,i=(u,t)=>{for(var r in t||(t={}))R.call(t,r)&&q(u,r,t[r]);if(v)for(var r of v(t))M.call(t,r)&&q(u,r,t[r]);return u},m=(u,t)=>pe(u,Be(t));var w=(u,t)=>{var r={};for(var s in u)R.call(u,s)&&t.indexOf(s)<0&&(r[s]=u[s]);if(u!=null&&v)for(var s of v(u))t.indexOf(s)<0&&M.call(u,s)&&(r[s]=u[s]);return r};import{r as e,a7 as W,g as X,a1 as de,C as b,G as xe,F as p,X as Ce,I as De,T as C,D as z,e as H,a8 as Ae,a9 as fe,d as h,m as j}from"./vendor-53f28a41.js";import{P as D}from"./style.module-22f9f897.js";import{a as k,r as _e,f as ye,v as ge,p as ve,g as be}from"./index-74bab682.js";import{u as he}from"./user-list-5942b2ca.js";import{F as Ie,U as Se}from"./index-7658ac5f.js";import{a as Pe}from"./index-35361678.js";import{D as I}from"./time-a4cc2158.js";import"./index-9818c93d.js";const Ve=["initiate","upload"],Ne=u=>Ve[u],G=e.exports.createContext({}),S=()=>e.exports.useContext(G),we=u=>{const[t,r]=e.exports.useState(0),s=()=>r(t+1>2?2:t+1),o=()=>r(t-1<0?0:t-1);return e.exports.createElement(G.Provider,{value:{step:{index:t,type:Ne(t)},next:s,prev:o}},u.children)};var x={"steps-page-header":"xupt_sHsstyle-module__steps-page-header__2FibH","initiate-form":"xupt_sHsstyle-module__initiate-form__126bU","initiate-form-item":"xupt_sHsstyle-module__initiate-form-item__3auwR","step-footer-banner":"xupt_sHsstyle-module__step-footer-banner__1PJ5f","step-prev-button":"xupt_sHsstyle-module__step-prev-button__EZyqN","text-center":"xupt_sHsstyle-module__text-center__6y2Nt","text-indent":"xupt_sHsstyle-module__text-indent__dwLSt"};const{Step:$}=W,He=()=>{const{step:u}=S();return e.exports.createElement(W,{current:u.index,className:x["steps-page-header"]},e.exports.createElement($,{title:"\u53D1\u8D77\u5956\u5B66\u91D1\u8BC4\u5B9A\u6D41\u7A0B"}),e.exports.createElement($,{title:"\u4E0A\u4F20\u76F8\u5173\u516C\u5F00\u6587\u4EF6"}),e.exports.createElement($,{title:"\u786E\u8BA4\u53D1\u8D77\u6D41\u7A0B"}))},J=e.exports.createContext({}),je=()=>e.exports.useContext(J);function ke(u,t){switch(t.type){case"initiate":return m(i({},u),{initiate:t.value});case"upload":return m(i({},u),{upload:t.value});default:throw new Error}}const $e=u=>{const[t,r]=e.exports.useReducer(ke,{initiate:null,upload:null}),s=(o,a)=>{r({type:o,value:a})};return e.exports.createElement(J.Provider,{value:m(i({},t),{updateFormValue:s})},u.children)};var f={"user-info-box":"xupt_sHsstyle-module__user-info-box__ITxj-","user-avatar":"xupt_sHsstyle-module__user-avatar__3Xbt-","user-text-info":"xupt_sHsstyle-module__user-text-info__2bx50","user-name-text":"xupt_sHsstyle-module__user-name-text__3tBXQ","user-email-text":"xupt_sHsstyle-module__user-email-text__2Tn29"};const Te=u=>{const o=u,{placeholder:t}=o,r=w(o,["placeholder"]),{list:s}=he();return e.exports.createElement(X,m(i({},r),{allowClear:!0,mode:"multiple",filterOption:(a,n)=>`${n==null?void 0:n.value}-${n==null?void 0:n.name}`.includes(a.toUpperCase()),placeholder:t||"\u9009\u62E9\u6210\u5458\uFF0C\u652F\u6301\u4F7F\u7528Email\u3001\u59D3\u540D\u8FDB\u884C\u6DFB\u52A0"}),s.map(a=>e.exports.createElement(X.Option,{key:a.email,value:a.email,name:`${a.name}-${a.en}`},e.exports.createElement("div",{className:f["user-info-box"]},e.exports.createElement(de,{className:f["user-avatar"],src:a.avatar}),e.exports.createElement("div",{className:f["user-text-info"]},e.exports.createElement("span",{className:f["user-name-text"]},a.name),e.exports.createElement("span",{className:f["user-email-text"]},`<${a.email}>`))))))},K=()=>{const{createable:u,editable:t}=k();return!u||!t},Q=["green","blue","purple"],Z=["geekblue","volcano","gold","lime"],Oe=u=>{const{name:t,title:r,duration:s,processIndex:o}=u,a=K();return e.exports.createElement(b,{type:"inner",title:r,headStyle:{fontWeight:600},hoverable:!0,className:x["initiate-form-item"]},e.exports.createElement(xe,{align:"baseline"},e.exports.createElement(p.Item,{shouldUpdate:!0},({getFieldValue:n})=>{let l=ye;if(o>0){let c=n(D[o-1].step).date||[];t==="examination_and_review_of_the_discipline_office"&&(c=n(D[o-2].step).date||[]),c.length>0&&(l=F=>F&&F<c[1])}return e.exports.createElement(p.Item,{name:[t,"date"],label:"\u8D77\u59CB\u65F6\u95F4",rules:_e},e.exports.createElement(Ie,{disabled:a,type:"range",placeholder:["\u6D41\u7A0B\u5F00\u59CB\u65F6\u95F4","\u6D41\u7A0B\u622A\u6B62\u65F6\u95F4"],disabledDate:l}))}),e.exports.createElement(p.Item,{shouldUpdate:(n,l)=>n!==l},({getFieldValue:n})=>{let l=0;const c=n(t).date||[];return c.length>0&&(l=c[1].diff(c[0],"days")+1),e.exports.createElement(Ce,{color:l>0?Q[l%Q.length]:Z[s%Z.length]},l>0?`\u5F53\u524D\u6D41\u7A0B\u65F6\u957F\u300E${l}\u5929\u300F`:s>0?`\u6D41\u7A0B\u9884\u4F30\u65F6\u957F\u300E${s}\u5929\u300F`:"\u6682\u65E0\u9884\u671F\u65F6\u957F")})),e.exports.createElement(p.Item,{name:[t,"desc"],label:"\u63CF\u8FF0\u4FE1\u606F"},e.exports.createElement(De.TextArea,{disabled:a,placeholder:"\u8BF7\u8F93\u5165\u8BE5\u6D41\u7A0B\u5BF9\u5E94\u7684\u63CF\u8FF0\u4FE1\u606F\u4EE5\u53CA\u76F8\u5173\u5E2E\u52A9\u5B66\u751F\u6216\u5176\u4ED6\u7BA1\u7406\u8005\u4E86\u89E3\u8BE5\u6D41\u7A0B\u7684\u63CF\u8FF0\u6027\u6587\u5B57"})),e.exports.createElement(p.Item,{name:[t,"mentions"],label:"\u901A\u77E5\u6210\u5458"},e.exports.createElement(Te,{disabled:a})))},Y=e.exports.createContext({}),ee=()=>e.exports.useContext(Y);function Ue(u,t){switch(t.type){case"initiate":return m(i({},u),{initiate:t.value});case"upload":return m(i({},u),{upload:t.value});default:throw new Error}}const Le=u=>{const[t,r]=e.exports.useReducer(Ue,{initiate:null,upload:null}),s=(a,n)=>{r({type:a,value:n})},o=a=>t[a];return e.exports.createElement(Y.Provider,{value:m(i({},t),{updateFormInstance:s,getFormInstance:o})},u.children)},ue=u=>{const l=je(),{updateFormValue:t}=l,r=w(l,["updateFormValue"]),{step:s}=S(),{updateFormInstance:o}=ee(),[a]=p.useForm();return e.exports.useEffect(()=>{a.setFieldsValue(r[u])},[s]),e.exports.useEffect(()=>{o(u,a)},[u]),[a,(c,F)=>{t(u,F)}]},Re={date:[],desc:"",mentions:[]},Me=()=>{const u={};return D.forEach(t=>{u[t.step]=Re}),u},te=()=>{const[u,t]=ue("initiate");return e.exports.createElement(p,{className:x["initiate-form"],form:u,colon:!1,initialValues:Me(),requiredMark:!1,validateMessages:ge,onValuesChange:t},D.map((r,s)=>e.exports.createElement(e.exports.Fragment,{key:r.step},e.exports.createElement(Oe,{title:r.title,name:r.step,processIndex:s,duration:r.duration}))))},{Title:_,Paragraph:re,Text:P,Link:su}=C,se=x["text-center"],V=x["text-indent"],ae=()=>{const u=e.exports.useMemo(()=>D.map(t=>t.title).join("\uFF0C"),[]);return e.exports.createElement(b,{style:{marginBottom:30},headStyle:{fontWeight:600},bodyStyle:{padding:"100px 120px"},hoverable:!0},e.exports.createElement(C,null,e.exports.createElement(_,{className:se,level:3},"\u300A\u5956\u5B66\u91D1\u6D41\u7A0B\u53D1\u8D77\u8BF4\u660E\u4E66\u300B"),e.exports.createElement(re,null,e.exports.createElement(P,{className:se},"\u672C\u8BF4\u660E\u4E66\u4EC5\u7528\u4E8E\u4F7F\u7528\u8BE5\u7CFB\u7EDF\u53D1\u8D77\u7814\u7A76\u751F\u5956\u5B66\u91D1\u8BC4\u5B9A\u6D41\u7A0B\u4EE5\u53CA\u540E\u7EED\u7684\u6D41\u7A0B\u7BA1\u7406\uFF0C\u5BF9\u4E8E\u8BF4\u660E\u4E66\u4E2D\u76F8\u5173\u5185\u5BB9\u5B58\u7591\u53EF\u4EE5\u81F4\u7535\u5BF9\u5E94\u7814\u7A76\u751F\u9662\u529E\u516C\u5BA4\u7535\u8BDD\u8FDB\u884C\u54A8\u8BE2\u3002")),e.exports.createElement(_,{level:4},"1. \u6D41\u7A0B\u53D1\u8D77\u8BF4\u660E"),e.exports.createElement(C,{className:V},"\u6D41\u7A0B\u5305\u542B12\u4E2A\u9636\u6BB5\uFF0C\u5206\u522B\u662F",u,"\u3002 \u6D41\u7A0B\u987A\u5E8F\u6267\u884C\u5982\u4E0B\u56FE\uFF0C\u5F53\u524D\u652F\u6301\u540C\u65F6\u6267\u884C\u5B66\u79D1\u529E\u5BA1\u6838\u3001\u590D\u67E5\u548C\u5E74\u7EA7\u516C\u793A\u4E24\u4E2A\u90E8\u5206\u540C\u65F6\u8FDB\u884C\u8FDB\u884C\u3002"),e.exports.createElement(Pe,{title:"",currentStep:"deployment_mobilization_phase"}),e.exports.createElement(_,{level:4},"2. \u6D41\u7A0B\u8FDB\u884C\u8BF4\u660E"),e.exports.createElement(C,{className:V},"\u6D41\u7A0B\u5728\u5F00\u59CB\u524D\u4F1A\u9646\u7EED\u5411\u4E0B\u4E00\u6D41\u7A0B\u7684\u53C2\u4E0E\u4EBA\u5458\uFF08\u7BA1\u7406\u4EBA\u5458\u4EE5\u53CA\u7814\u7A76\u751F\uFF09\u53D1\u9001\u90AE\u4EF6\u901A\u77E5\uFF0C\u5E76\u4E14\u544A\u77E5\u5BF9\u5E94\u7684\u64CD\u4F5C\u65B9\u5F0F\u3002 \u6D41\u7A0B\u5728\u8FDB\u884C\u81F3\u4E2A\u4EBA\u7533\u8BF7\u9636\u6BB5\u540E\u5F00\u653E\u4E2A\u4EBA\u7533\u8BF7\u5956\u5B66\u91D1\u901A\u9053\uFF08\u7533\u8BF7\u5956\u5B66\u91D1\u2192\u53D1\u8D77\u7533\u8BF7\uFF09\uFF0C\u652F\u6301\u7814\u7A76\u751F\u6309\u7167\u4E2A\u4EBA\u5B9E\u9645\u60C5\u51B5\u8FDB\u884C\u586B\u5199\u548C\u5B8C\u5584\u5BF9\u5E94\u7684\u7533\u8BF7\u4FE1\u606F\u3002",e.exports.createElement(P,{strong:!0},"\u5728\u5176\u4ED6\u975E\u81EA\u8BC4\u9636\u6BB5\uFF0C\u4E0D\u4F1A\u5F00\u542F\u7533\u8BF7\u5956\u5B66\u91D1\u901A\u9053\u3002")),e.exports.createElement(_,{level:4},"3. \u5956\u5B66\u91D1\u5BA1\u6838\u3001\u590D\u67E5"),e.exports.createElement(C,null,"\u5956\u5B66\u91D1\u5BA1\u6838\u3001\u590D\u67E5\u5305\u62EC\u4E2A\u4EBA\u81EA\u8BC4\u65F6\u5728\u8BC4\u5B9A\u6D41\u7A0B\u4E2D\u6D41\u7A0B\u7BA1\u7406\u8FDB\u884C\u5BA1\u6279\u548C\u5904\u7406\uFF0C\u5BF9\u4E8E\u5B58\u7591\u7684\u4FE1\u606F\u8FDB\u884C\u5F02\u5E38\u5904\u7406\uFF0C\u901A\u77E5\u5BF9\u5E94\u7684\u7814\u7A76\u751F\u5904\u7406\u3002"),e.exports.createElement(_,{level:4},"4. \u6D41\u7A0B\u4FEE\u6539\u8BF4\u660E"),e.exports.createElement(re,{className:V},"\u5728\u786E\u8BA4\u521B\u5EFA\u5956\u5B66\u91D1\u8BC4\u5B9A\u6D41\u7A0B\u540E\uFF0C\u6D41\u7A0B\u8DDD\u79BB\u8FDB\u5165\u7B2C\u4E00\u9636\u6BB5\uFF08\u90E8\u7F72\u52A8\u5458\u9636\u6BB5\uFF09\u768424\u5C0F\u65F6\u4E4B\u524D\uFF0C\u53EF\u4EE5\u8FDB\u884C\u6D41\u7A0B\u7684\u4FEE\u6539\u548C\u64A4\u9500\u3002",e.exports.createElement(P,{mark:!0},"\u5728\u6D41\u7A0B\u521B\u5EFA\u540E\u8FDB\u884C\u5BF9\u5E94\u7684\u4FEE\u6539\u548C\u64A4\u9500\u64CD\u4F5C\uFF0C\u90FD\u4F1A\u88AB\u8BA4\u4E3A\u5F53\u524D\u7684\u64CD\u4F5C\u662F\u4E00\u79CD\u98CE\u9669\u64CD\u4F5C\u3002"))),e.exports.createElement(C,{className:V},e.exports.createElement(P,{strong:!0},"\u5728\u672C\u7CFB\u7EDF\u7684\u6240\u6709\u6D41\u7A0B\u7BA1\u7406\u4EE5\u53CA\u5BF9\u5E94\u7684\u901A\u77E5\uFF0C\u90FD\u662F\u91C7\u7528\u90AE\u4EF6\u8FDB\u884C\u901A\u77E5\u548C\u53CD\u9988\uFF0C\u5E0C\u671B\u5BF9\u5E94\u7684\u53C2\u4E0E\u4EBA\u5458\u5728\u6D41\u7A0B\u5F00\u59CB\u540E\u80FD\u53CA\u65F6\u6838\u5BF9\u4E2A\u4EBA\u5956\u5B66\u91D1\u4FE1\u606F\u3002 \u5BF9\u4E8E\u5B58\u7591\u7684\u4E2A\u4EBA\u4FE1\u606F\u53EF\u8FDB\u5165\u7528\u6237\u4E2D\u5FC3\u8FDB\u884C\u4FEE\u6539\u548C\u53CD\u9988\u3002")))},qe={files:[]},ne=()=>{const[u,t]=ue("upload"),r=K();return e.exports.createElement(b,{type:"inner",title:"\u6D41\u7A0B\u4EE5\u53CA\u8BC4\u5B9A\u4F9D\u636E\u76F8\u5173\u6587\u4EF6",style:{margin:"0 96px"},headStyle:{fontWeight:600},hoverable:!0},e.exports.createElement(p,{form:u,initialValues:qe,onValuesChange:t},e.exports.createElement(p.Item,{name:"files"},e.exports.createElement(Se,{disabled:r}))))},T=()=>{const{process_id:u}=k();return u===-1},We=()=>{const{step:u}=S(),t=T(),r=u.index,s=e.exports.useMemo(()=>{if(!t)return e.exports.createElement(e.exports.Fragment,null,e.exports.createElement(ae,null),e.exports.createElement(z,{orientation:"left"},"\u76F8\u5173\u6587\u4EF6"),e.exports.createElement(ne,null),e.exports.createElement(z,{orientation:"left"},"\u8BE6\u7EC6\u521B\u5EFA\u4FE1\u606F"),e.exports.createElement(te,null));switch(r){case 2:return e.exports.createElement(ae,null);case 1:return e.exports.createElement(ne,null);default:return e.exports.createElement(te,null)}},[r,t]);return e.exports.createElement($e,null,s)};var Xe=e.exports.memo(We);const ze=()=>{const{step:u,next:t,prev:r}=S(),{getFormInstance:s}=ee(),[o,a]=e.exports.useState(!1),[n,l]=e.exports.useState(5),c=e.exports.useRef(),F=u.index,{process_id:O,createable:U,editable:L}=k(),B=T(),oe=async()=>{const E=s(u.type);try{a(!0),await E.validateFields(),t()}catch(A){console.error(A)}finally{a(!1)}},le=async()=>{try{a(!0);const E=s("initiate").getFieldsValue(!0),A=Object.keys(E).map(N=>{const d=N,[Ee,Fe]=E[d].date||[];E[d].date=[h(Ee).format(I),h(Fe).format(I)];const Ge=D.find(ie=>ie.step===d);return i({step:d},E[d])}),y=s("upload").getFieldsValue(!0),g=await ve({upload:y,form:A});j.success("\u521B\u5EFA\u6210\u529F")}catch(E){j.error(E.message)}finally{a(!1)}},ce=async()=>{try{a(!0);const{form:E}=await be(O),A=E.form.reduce((y,g)=>{const[N,d]=g.date||[];return y[g.step]=m(i({},g),{date:[h(N,I),h(d,I)]}),y},{});s("initiate").setFieldsValue(A),s("upload").setFieldsValue(E.upload)}catch(E){j.error(E.message)}finally{a(!1)}};return e.exports.useEffect(()=>{!B&&s("initiate")&&s("upload")&&ce()},[O,s]),e.exports.useEffect(()=>(n>0?F===2&&(a(!0),c.current=setInterval(()=>{l(()=>n-1)},1e3)):(clearInterval(c.current),a(!1)),()=>{c.current&&clearInterval(c.current),a(!1)}),[n,F]),e.exports.createElement("div",{className:x["step-footer-banner"]},F!==0&&B&&e.exports.createElement(H,{className:x["step-prev-button"],onClick:r},"\u4E0A\u4E00\u6B65"),(F===2||!B)&&(U||L)&&e.exports.createElement(H,{type:"primary",loading:o,onClick:le,disabled:o||!(B?U:L),icon:B?e.exports.createElement(Ae,null):e.exports.createElement(fe,null)},B?n<=0?"":`${n} s`:"","\u6211\u5DF2\u77E5\u6653\uFF0C\u786E\u8BA4",B?"\u521B\u5EFA":"\u4FEE\u6539"),F!==2&&B&&e.exports.createElement(H,{type:"primary",disabled:o,loading:o,onClick:oe},"\u4E0B\u4E00\u6B65"))},au=()=>{const u=T();return e.exports.createElement(we,null,e.exports.createElement(Le,null,e.exports.createElement(b,null,u&&e.exports.createElement(He,null),e.exports.createElement(Xe,null),e.exports.createElement(ze,null))))};export{au as default};
//# sourceMappingURL=index-de54ed99.js.map
