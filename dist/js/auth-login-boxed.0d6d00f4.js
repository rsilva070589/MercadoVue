"use strict";(self["webpackChunkcork_vue3"]=self["webpackChunkcork_vue3"]||[]).push([[726],{2985:(e,t,n)=>{n.r(t),n.d(t,{default:()=>W});var r=n(8534),o=n(2482),a=(n(5666),n(6647),n(3710),n(1539),n(9714),n(6699),n(2023),n(4916),n(5306),n(6977),n(4678),n(7327),n(6252)),i=n(3577),s=n(2262),l=n(1499),c=n(8433),d=n(6296),u={class:"layout-px-spacing",style:{"margin-top":"-100px"}},p=(0,a._)("h2",{class:"text-2xl font-medium mx-2","data-testid":"statements-title-txt"},"Ticket Médio de Vendas",-1),g=(0,a._)("div",null,null,-1),x={style:{display:"flex","flex-wrap":"wrap",margin:"15px 0px 15px 0px"}},f={class:"card",style:{padding:"10px",width:"200px",height:"120px","border-radius":"10px","align-items":"center",margin:"0px 20px 15px 0px"}},v=(0,a._)("span",{style:{"font-size":"30px",color:"black"}}," Total Mês ",-1),w={style:{"font-size":"30px",color:"forestgreen"}},h={class:"card",style:{padding:"10px",width:"200px",height:"120px","border-radius":"10px","align-items":"center",margin:"0px 20px 15px 0px","background-color":""}},m=(0,a._)("span",{style:{"font-size":"30px",color:"black"}}," Lucro Mês ",-1),_={style:{"font-size":"30px",color:"forestgreen"}},b={class:"card",style:{padding:"10px",width:"200px",height:"120px","border-radius":"10px","align-items":"center",margin:"0px 20px 15px 0px","background-color":""}},R=(0,a._)("span",{style:{"font-size":"30px",color:"black"}}," Total do Dia ",-1),k={style:{"font-size":"30px",color:"forestgreen"}},D={class:"card",style:{padding:"10px",width:"200px",height:"120px","border-radius":"10px","align-items":"center",margin:"0px 20px 15px 0px"}},y=(0,a._)("span",{style:{"font-size":"30px",color:"black"}}," Lucro do Dia ",-1),C={style:{"font-size":"30px",color:"forestgreen"}},O={key:0},T={class:"panel br-0 p-0 mt-0"},z={class:"custom-table"},A={class:"progress"},S=["aria-valuemax"],U={class:"me-2 custom-dropdown dropdown btn-group"},V={class:"btn dropdown-toggle btn-icon-only",href:"#",role:"button",id:"pendingTask","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},L={xmlns:"http://www.w3.org/2000/svg",style:{width:"24px",height:"24px"},width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-more-horizontal"},E=(0,a._)("circle",{cx:"12",cy:"12",r:"1"},null,-1),M=(0,a._)("circle",{cx:"19",cy:"12",r:"1"},null,-1),P=(0,a._)("circle",{cx:"5",cy:"12",r:"1"},null,-1),I=[E,M,P],j={class:"dropdown-menu dropdown-menu-end"},$=["onClick"],H=["onClick"],N=(0,a._)("a",{href:"javascript:void(0);",class:"dropdown-item"}," Edit ",-1),Z=[N],F=["onClick"],Q=(0,a._)("a",{href:"javascript:void(0);",class:"dropdown-item"}," Delete ",-1),Y=[Q];const q={__name:"vendasRel",setup:function(e){var t;(0,d.j)({title:"Multiple Tables"});var n=(0,l.D)();(0,s.iH)([]);function E(e){var t=e,n=t.getDate().toString(),r=1==n.length?"0"+n:n,o=(t.getMonth()+1).toString(),a=1==o.length?"0"+o:o,i=t.getFullYear();return r+"/"+a+"/"+i}function M(e){var t=e,n=t.getDate().toString(),r=(n.length,(t.getMonth()+1).toString()),o=1==r.length?"0"+r:r,a=t.getFullYear();return o+"/"+a}var P=new Date;function N(e){var t=e;return t&&t.toString().includes(",")&&(t=t.toString().replace(",",".")),parseFloat(t).toFixed(2).replace(".",",").replace(/(\d)(?=(\d{3})+\,)/g,"$1.")}function Q(e){for(var t=n.itensRelVendas.filter((function(e){return e.DATA==E(new Date)})),r=0,o=0;o<t.length;o++)r+=t[o].VALOR;return N(r)}function q(e){for(var t=n.itensRelVendas.filter((function(e){return e.DATA==E(new Date)})),r=0,o=0;o<t.length;o++)r+=t[o].LUCRO;return N(r)}function B(e){for(var t=n.itensRelVendas.filter((function(e){return e.MES==M(new Date)})),r=0,o=0;o<t.length;o++)r+=t[o].VALOR;return N(r)}function W(e){for(var t=n.itensRelVendas.filter((function(e){return e.MES==M(new Date)})),r=0,o=0;o<t.length;o++)r+=t[o].LUCRO;return N(r)}P.setHours(23,59,59,999),P.getTime();var G=(0,s.iH)(["ID","DATA","COD_PRODUTO","NOME","QTDE","VALOR","CUSTO","LUCRO","PERC_LUCRO"]),J=(n.itensRelVendas,(0,s.iH)((t={perPage:10,perPageValues:[5,10,20,50],skin:"table ",columnsClasses:{actions:"actions text-center"},sortable:[],pagination:{nav:"scroll",chunk:5},texts:{count:"Showing {from} to {to} of {count}",filter:"",filterPlaceholder:"Search...",limit:"Results:"}},(0,o.Z)(t,"sortable",["ID","DATA","COD_PRODUTO","NOME","QTDE","VALOR","CUSTO","LUCRO","PERC_LUCRO"]),(0,o.Z)(t,"sortIcon",{base:"sort-icon-none",up:"sort-icon-asc",down:"sort-icon-desc"}),(0,o.Z)(t,"resizableColumns",!1),t)));(0,a.bv)((function(){K()}));var K=function(){var e=(0,r.Z)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.itensRelVendas=[],e.next=3,c.Z.get(n.baseApiHTTPS+"/mercadovendas");case 3:t=e.sent,console.log(t.data),n.itensRelVendas=t.data;case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(e){alert("ID: "+item1.value.ID+", Name: "+item1.value.NOMENCLATURA)};return function(e,t){var r=(0,a.up)("v-client-table");return(0,a.wg)(),(0,a.iD)("div",u,[p,g,(0,a._)("div",x,[(0,a._)("div",f,[v,(0,a._)("div",w," R$ "+(0,i.zw)(B()),1)]),(0,a._)("div",h,[m,(0,a._)("div",_," R$ "+(0,i.zw)(W()),1)]),(0,a._)("div",b,[R,(0,a._)("div",k," R$ "+(0,i.zw)(Q()),1)]),(0,a._)("div",D,[y,(0,a._)("div",C," R$ "+(0,i.zw)(q()),1)])]),(0,s.SU)(n).editando?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",O,[(0,a._)("div",null,[(0,a._)("div",T,[(0,a._)("div",z,[(0,a.Wm)(r,{data:(0,s.SU)(n).itensRelVendas,columns:G.value,options:J.value},{progress:(0,a.w5)((function(e){return[(0,a._)("div",A,[(0,a._)("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":e.row.progress.count,"aria-valuenow":"100",class:(0,i.C_)(["progress-bar","bg-"+e.row.progress["class"]]),style:(0,i.j5)({width:e.row.progress.count+"%"})},null,14,S)])]})),salary:(0,a.w5)((function(e){return[(0,a.Uk)(" $"+(0,i.zw)(e.row.salary),1)]})),actions:(0,a.w5)((function(t){return[(0,a._)("div",U,[(0,a._)("a",V,[((0,a.wg)(),(0,a.iD)("svg",L,I))]),(0,a._)("ul",j,[(0,a._)("li",null,[(0,a._)("a",{href:"javascript:void(0);",class:"dropdown-item",onClick:function(e){return X(t.row)}}," view ",8,$)]),(0,a._)("li",{onClick:function(n){return e.selectItemEdit(t.row)}},Z,8,H),(0,a._)("li",{onClick:function(n){return e.deleteItem(t.row)}},Y,8,F)])])]})),_:1},8,["data","columns","options"])])])])]))])}}},B=q,W=B}}]);
//# sourceMappingURL=auth-login-boxed.0d6d00f4.js.map