"use strict";(self["webpackChunkcork_vue3"]=self["webpackChunkcork_vue3"]||[]).push([[726],{6056:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(6252),o=n(1499),a={style:{display:"flex","justify-content":"center","padding-top":"100px"}},s=(0,r._)("div",{class:"spinner-border text-primary",role:"status",style:{width:"100px",height:"100px"}},[(0,r._)("span",{class:"sr-only"})],-1),i=[s];const l={__name:"Progress",setup:function(e){(0,o.D)();return function(e,t){return(0,r.wg)(),(0,r.iD)("div",a,i)}}},c=l,u=c},7122:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var r=n(8534),o=n(2482),a=(n(5666),n(6647),n(3710),n(1539),n(9714),n(6699),n(2023),n(4916),n(5306),n(6977),n(4678),n(7327),n(1249),n(6252)),s=n(3577),i=n(2262),l=n(9963),c=n(6056),u=n(1499),d=n(8433),p=n(6296),g={class:"layout-px-spacing",style:{"margin-top":"-100px"}},v=(0,a._)("h2",{class:"text-2xl font-medium mx-2","data-testid":"statements-title-txt"},"Demanda Mensal de Produtos",-1),w=(0,a._)("div",null,null,-1),f={key:1},m={style:{"font-size":"17px"}},_=(0,a.uE)('<option disabled value="">Selecione</option><option>1</option><option>3</option><option>5</option><option>7</option><option>15</option><option>30</option><option>90</option><option>180</option><option>365</option><option>100000</option>',11),x=[_],D={key:0},h={class:"panel br-0 p-0 mt-0"},R={class:"custom-table"},E={class:"progress"},k=["aria-valuemax"],A={class:"me-2 custom-dropdown dropdown btn-group"},b={class:"btn dropdown-toggle btn-icon-only",href:"#",role:"button",id:"pendingTask","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},T={xmlns:"http://www.w3.org/2000/svg",style:{width:"24px",height:"24px"},width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-more-horizontal"},y=(0,a._)("circle",{cx:"12",cy:"12",r:"1"},null,-1),S=(0,a._)("circle",{cx:"19",cy:"12",r:"1"},null,-1),O=(0,a._)("circle",{cx:"5",cy:"12",r:"1"},null,-1),C=[y,S,O],U={class:"dropdown-menu dropdown-menu-end"},I=["onClick"],M=["onClick"],N=(0,a._)("a",{href:"javascript:void(0);",class:"dropdown-item"}," Edit ",-1),P=[N],z=["onClick"],Q=(0,a._)("a",{href:"javascript:void(0);",class:"dropdown-item"}," Delete ",-1),V=[Q];const j={__name:"demanda",setup:function(e){var t;(0,p.j)({title:"Multiple Tables"});var n=(0,u.D)();(0,i.iH)([]);n.recursos.progress=!0,n.diasDemanda=3;var _=new Date;_.setHours(23,59,59,999),_.getTime();var y=function(e,t){return t="undefined"!==typeof t?t:0,+(Math.floor(e+"e+"+t)+"e-"+t)};function S(){var e=n.itensRelDemanda.filter((function(e){return e.DIAS_RESTANTES<n.diasDemanda}));console.log(e);var t=[];return n.itensRelDemanda.map((function(e){var r={COD_PRODUTO:e.COD_PRODUTO,NOME:e.NOME,DEMANDA_DIARIA:e.DEMANDA_DIARIA,QTDE_ESTOQUE:e.QTDE_ESTOQUE,DIAS_RESTANTES:e.DIAS_RESTANTES,QTDE_NECESSARIA:y(e.DEMANDA_DIARIA*n.diasDemanda),COMPRAR_QTDE:y(e.DEMANDA_DIARIA*n.diasDemanda-e.QTDE_ESTOQUE)};t.push(r)})),t.filter((function(e){return e.COMPRAR_QTDE>0}))}var O=(0,i.iH)(["COD_PRODUTO","NOME","DEMANDA_DIARIA","QTDE_ESTOQUE","DIAS_RESTANTES","QTDE_NECESSARIA","COMPRAR_QTDE"]),N=(S(),(0,i.iH)((t={perPage:10,perPageValues:[5,10,20,50],skin:"table ",columnsClasses:{actions:"actions text-center"},sortable:[],pagination:{nav:"scroll",chunk:5},texts:{count:"Showing {from} to {to} of {count}",filter:"",filterPlaceholder:"Search...",limit:"Results:"}},(0,o.Z)(t,"sortable",["COD_PRODUTO","NOME","DEMANDA_DIARIA","QTDE_ESTOQUE","DIAS_RESTANTES"]),(0,o.Z)(t,"sortIcon",{base:"sort-icon-none",up:"sort-icon-asc",down:"sort-icon-desc"}),(0,o.Z)(t,"resizableColumns",!1),t)));(0,a.bv)((function(){Q()}));var Q=function(){var e=(0,r.Z)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.itensRelDemanda=[],e.next=3,d.Z.get(n.baseApiHTTPS+"/mercadodemanda");case 3:t=e.sent,n.itensRelDemanda=t.data,n.recursos.progress=!1;case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return function(e,t){var r=(0,a.up)("v-client-table");return(0,a.wg)(),(0,a.iD)("div",g,[v,w,(0,a.Uk)(" "+(0,s.zw)()+" ",1),(0,i.SU)(n).recursos.progress?((0,a.wg)(),(0,a.j4)(c.Z,{key:0})):(0,a.kq)("",!0),(0,i.SU)(n).recursos.progress?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",f,[(0,a._)("div",m,[(0,a.Uk)(" Estoque para os proximos: "),(0,a.wy)((0,a._)("select",{style:{height:"25px",width:"60px"},"onUpdate:modelValue":t[0]||(t[0]=function(e){return(0,i.SU)(n).diasDemanda=e})},x,512),[[l.bM,(0,i.SU)(n).diasDemanda]])]),(0,i.SU)(n).editando?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",D,[(0,a._)("div",null,[(0,a._)("div",h,[(0,a._)("div",R,[(0,a.Wm)(r,{data:S(),columns:O.value,options:N.value},{progress:(0,a.w5)((function(e){return[(0,a._)("div",E,[(0,a._)("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":e.row.progress.count,"aria-valuenow":"100",class:(0,s.C_)(["progress-bar","bg-"+e.row.progress["class"]]),style:(0,s.j5)({width:e.row.progress.count+"%"})},null,14,k)])]})),salary:(0,a.w5)((function(e){return[(0,a.Uk)(" $"+(0,s.zw)(e.row.salary),1)]})),actions:(0,a.w5)((function(t){return[(0,a._)("div",A,[(0,a._)("a",b,[((0,a.wg)(),(0,a.iD)("svg",T,C))]),(0,a._)("ul",U,[(0,a._)("li",null,[(0,a._)("a",{href:"javascript:void(0);",class:"dropdown-item",onClick:function(n){return e.view_row1(t.row)}}," view ",8,I)]),(0,a._)("li",{onClick:function(n){return e.selectItemEdit(t.row)}},P,8,M),(0,a._)("li",{onClick:function(n){return e.deleteItem(t.row)}},V,8,z)])])]})),_:1},8,["data","columns","options"])])])])]))]))])}}},L=j,Z=L},2985:(e,t,n)=>{n.r(t),n.d(t,{default:()=>J});var r=n(8534),o=n(2482),a=(n(5666),n(6647),n(3710),n(1539),n(9714),n(6699),n(2023),n(4916),n(5306),n(6977),n(4678),n(7327),n(6252)),s=n(2262),i=n(3577),l=n(6056),c=n(1499),u=n(8433),d=n(6296),p={class:"layout-px-spacing",style:{"margin-top":"-100px"}},g=(0,a._)("h2",{class:"text-2xl font-medium mx-2","data-testid":"statements-title-txt"},"Ticket Médio de Vendas",-1),v=(0,a._)("div",null,null,-1),w={key:1},f={style:{display:"flex","flex-wrap":"wrap",margin:"15px 0px 15px 0px"}},m={class:"card",style:{padding:"10px",width:"200px",height:"120px","border-radius":"10px","align-items":"center",margin:"0px 20px 15px 0px"}},_=(0,a._)("span",{style:{"font-size":"30px",color:"black"}}," Total Mês ",-1),x={style:{"font-size":"30px",color:"forestgreen"}},D={class:"card",style:{padding:"10px",width:"200px",height:"120px","border-radius":"10px","align-items":"center",margin:"0px 20px 15px 0px","background-color":""}},h=(0,a._)("span",{style:{"font-size":"30px",color:"black"}}," Lucro Mês ",-1),R={style:{"font-size":"30px",color:"forestgreen"}},E={class:"card",style:{padding:"10px",width:"200px",height:"120px","border-radius":"10px","align-items":"center",margin:"0px 20px 15px 0px","background-color":""}},k=(0,a._)("span",{style:{"font-size":"30px",color:"black"}}," Total do Dia ",-1),A={style:{"font-size":"30px",color:"forestgreen"}},b={class:"card",style:{padding:"10px",width:"200px",height:"120px","border-radius":"10px","align-items":"center",margin:"0px 20px 15px 0px"}},T=(0,a._)("span",{style:{"font-size":"30px",color:"black"}}," Lucro do Dia ",-1),y={style:{"font-size":"30px",color:"forestgreen"}},S={key:0},O={class:"panel br-0 p-0 mt-0"},C={class:"custom-table"},U={class:"progress"},I=["aria-valuemax"],M={class:"me-2 custom-dropdown dropdown btn-group"},N={class:"btn dropdown-toggle btn-icon-only",href:"#",role:"button",id:"pendingTask","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},P={xmlns:"http://www.w3.org/2000/svg",style:{width:"24px",height:"24px"},width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-more-horizontal"},z=(0,a._)("circle",{cx:"12",cy:"12",r:"1"},null,-1),Q=(0,a._)("circle",{cx:"19",cy:"12",r:"1"},null,-1),V=(0,a._)("circle",{cx:"5",cy:"12",r:"1"},null,-1),j=[z,Q,V],L={class:"dropdown-menu dropdown-menu-end"},Z=["onClick"],H=["onClick"],q=(0,a._)("a",{href:"javascript:void(0);",class:"dropdown-item"}," Edit ",-1),$=[q],F=["onClick"],B=(0,a._)("a",{href:"javascript:void(0);",class:"dropdown-item"}," Delete ",-1),W=[B];const Y={__name:"vendasRel",setup:function(e){var t;(0,d.j)({title:"Multiple Tables"});var n=(0,c.D)();(0,s.iH)([]);function z(e){var t=e,n=t.getDate().toString(),r=1==n.length?"0"+n:n,o=(t.getMonth()+1).toString(),a=1==o.length?"0"+o:o,s=t.getFullYear();return r+"/"+a+"/"+s}function Q(e){var t=e,n=t.getDate().toString(),r=(n.length,(t.getMonth()+1).toString()),o=1==r.length?"0"+r:r,a=t.getFullYear();return o+"/"+a}n.recursos.progress=!0;var V=new Date;function q(e){var t=e;return t&&t.toString().includes(",")&&(t=t.toString().replace(",",".")),parseFloat(t).toFixed(2).replace(".",",").replace(/(\d)(?=(\d{3})+\,)/g,"$1.")}function B(e){for(var t=n.itensRelVendas.filter((function(e){return e.DATA==z(new Date)})),r=0,o=0;o<t.length;o++)r+=t[o].VALOR;return q(r)}function Y(e){for(var t=n.itensRelVendas.filter((function(e){return e.DATA==z(new Date)})),r=0,o=0;o<t.length;o++)r+=t[o].LUCRO;return q(r)}function G(e){for(var t=n.itensRelVendas.filter((function(e){return e.MES==Q(new Date)})),r=0,o=0;o<t.length;o++)r+=t[o].VALOR;return q(r)}function J(e){for(var t=n.itensRelVendas.filter((function(e){return e.MES==Q(new Date)})),r=0,o=0;o<t.length;o++)r+=t[o].LUCRO;return q(r)}V.setHours(23,59,59,999),V.getTime();var K=(0,s.iH)(["ID","DATA","COD_PRODUTO","NOME","QTDE","VALOR","CUSTO","LUCRO","PERC_LUCRO"]),X=(n.itensRelVendas,(0,s.iH)((t={perPage:10,perPageValues:[5,10,20,50],skin:"table ",columnsClasses:{actions:"actions text-center"},sortable:[],pagination:{nav:"scroll",chunk:5},texts:{count:"Showing {from} to {to} of {count}",filter:"",filterPlaceholder:"Search...",limit:"Results:"}},(0,o.Z)(t,"sortable",["ID","DATA","COD_PRODUTO","NOME","QTDE","VALOR","CUSTO","LUCRO","PERC_LUCRO"]),(0,o.Z)(t,"sortIcon",{base:"sort-icon-none",up:"sort-icon-asc",down:"sort-icon-desc"}),(0,o.Z)(t,"resizableColumns",!1),t)));(0,a.bv)((function(){ee()}));var ee=function(){var e=(0,r.Z)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.itensRelVendas=[],e.next=3,u.Z.get(n.baseApiHTTPS+"/mercadovendas");case 3:t=e.sent,console.log(t.data),n.itensRelVendas=t.data,n.recursos.progress=!1;case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(e){alert("ID: "+item1.value.ID+", Name: "+item1.value.NOMENCLATURA)};return function(e,t){var r=(0,a.up)("v-client-table");return(0,a.wg)(),(0,a.iD)("div",p,[g,v,(0,s.SU)(n).recursos.progress?((0,a.wg)(),(0,a.j4)(l.Z,{key:0})):(0,a.kq)("",!0),(0,s.SU)(n).recursos.progress?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",w,[(0,a._)("div",f,[(0,a._)("div",m,[_,(0,a._)("div",x," R$ "+(0,i.zw)(G()),1)]),(0,a._)("div",D,[h,(0,a._)("div",R," R$ "+(0,i.zw)(J()),1)]),(0,a._)("div",E,[k,(0,a._)("div",A," R$ "+(0,i.zw)(B()),1)]),(0,a._)("div",b,[T,(0,a._)("div",y," R$ "+(0,i.zw)(Y()),1)])]),(0,s.SU)(n).editando?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",S,[(0,a._)("div",null,[(0,a._)("div",O,[(0,a._)("div",C,[(0,a.Wm)(r,{data:(0,s.SU)(n).itensRelVendas,columns:K.value,options:X.value},{progress:(0,a.w5)((function(e){return[(0,a._)("div",U,[(0,a._)("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":e.row.progress.count,"aria-valuenow":"100",class:(0,i.C_)(["progress-bar","bg-"+e.row.progress["class"]]),style:(0,i.j5)({width:e.row.progress.count+"%"})},null,14,I)])]})),salary:(0,a.w5)((function(e){return[(0,a.Uk)(" $"+(0,i.zw)(e.row.salary),1)]})),actions:(0,a.w5)((function(t){return[(0,a._)("div",M,[(0,a._)("a",N,[((0,a.wg)(),(0,a.iD)("svg",P,j))]),(0,a._)("ul",L,[(0,a._)("li",null,[(0,a._)("a",{href:"javascript:void(0);",class:"dropdown-item",onClick:function(e){return te(t.row)}}," view ",8,Z)]),(0,a._)("li",{onClick:function(n){return e.selectItemEdit(t.row)}},$,8,H),(0,a._)("li",{onClick:function(n){return e.deleteItem(t.row)}},W,8,F)])])]})),_:1},8,["data","columns","options"])])])])]))]))])}}},G=Y,J=G}}]);
//# sourceMappingURL=auth-login-boxed.e33f7453.js.map