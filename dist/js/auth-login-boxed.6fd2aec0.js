"use strict";(self["webpackChunkcork_vue3"]=self["webpackChunkcork_vue3"]||[]).push([[726],{6056:(e,n,o)=>{o.d(n,{Z:()=>d});var t=o(6252),r=o(1499),a={style:{display:"flex","justify-content":"center","padding-top":"100px"}},l=(0,t._)("div",{class:"spinner-border text-primary",role:"status",style:{width:"100px",height:"100px"}},[(0,t._)("span",{class:"sr-only"})],-1),i=[l];const s={__name:"Progress",setup:function(e){(0,r.D)();return function(e,n){return(0,t.wg)(),(0,t.iD)("div",a,i)}}},c=s,d=c},3134:(e,n,o)=>{o.r(n),o.d(n,{default:()=>X});var t=o(8534),r=(o(5666),o(3710),o(1249),o(7327),o(1539),o(561),o(8862),o(6252)),a=o(2262),l=o(9963),i=o(3577),s=o(8433),c=(o(581),o(1499)),d={style:{"margin-top":"-110px"}},p=(0,r._)("h2",null,"Entrada de Notas",-1),u={class:"panel-body"},_={class:"row"},m={class:"form-group col-md-2"},f=(0,r._)("label",{class:"col-form-label pt-0",for:"CATEGORIA"},"Fornecedor",-1),g=(0,r.uE)('<option disabled value="">Selecione</option><option>Tatico</option><option>Dist-Silva</option><option>SIM</option><option>Costa</option><option>Atacadao</option><option>Batista</option><option>Max-Atacado</option><option>Acai</option><option>Barao</option><option>Canaa</option><option>Aviz - Walter Santos</option><option>Santa Marta</option>',13),v=[g],x={class:"form-group col-md-2"},w=(0,r._)("label",{class:"col-form-label pt-0",for:"CODIGO_BARRAS"},"NOTA",-1),A={class:"form-group col-md-2"},D=(0,r._)("label",{class:"col-form-label pt-0",for:"NOME"},"Data da Nota ",-1),h={class:"form-group col-md-2"},O=(0,r._)("label",{class:"col-form-label pt-0",for:"NOME"},"Valor da Nota",-1),S={class:"row"},T={class:"form-group col-md-2"},R=(0,r._)("label",{class:"col-form-label pt-0",for:"NOME"},"Codigo Barras",-1),y={class:"form-group col-md-2"},E=(0,r._)("label",{class:"col-form-label pt-0",for:"QTDE"},"QTDE",-1),b={class:"form-group col-md-2"},C=(0,r._)("label",{class:"col-form-label pt-0",for:"password"},"Total do Item",-1),I={class:"form-group col-md-2"},k=(0,r._)("label",{class:"col-form-label pt-0",for:"password"},"Total do Item Lançados",-1),U={style:{"font-size":"30px","text-align":"center"}},N=(0,r._)("div",null,null,-1),M={class:"conteudo",style:{height:"40vh",padding:"0px 40px 0px 40px"}},V={class:"table-responsive",style:{padding:"10px"}},z={role:"table","aria-busy":"false","aria-colcount":"5",class:"table table-bordered",id:"__BVID__415"},L=(0,r._)("thead",{role:"rowgroup"},[(0,r._)("tr",{role:"row"},[(0,r._)("th",{role:"columnheader",scope:"col","aria-colindex":"1"},[(0,r._)("div",null,"Codigo")]),(0,r._)("th",{role:"columnheader",scope:"col","aria-colindex":"2"},[(0,r._)("div",null,"Item Descricao")]),(0,r._)("th",{role:"columnheader",scope:"col","aria-colindex":"3"},[(0,r._)("div",null,"Qtde")]),(0,r._)("th",{role:"columnheader",scope:"col","aria-colindex":"4",class:""},[(0,r._)("div",null,"Custo")]),(0,r._)("th",{role:"columnheader",scope:"col","aria-colindex":"5","aria-label":"Action",class:""},[(0,r._)("div")])])],-1),Q={role:"rowgroup"},P={"aria-colindex":"1",role:"cell"},B={"aria-colindex":"2",role:"cell"},G={"aria-colindex":"2",role:"cell"},j={"aria-colindex":"3",role:"cell"},H={"aria-colindex":"5",role:"cell",class:"text-center"},Z=["onClick"],F=(0,r._)("polyline",{points:"3 6 5 6 21 6"},null,-1),q=(0,r._)("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},null,-1),$=(0,r._)("line",{x1:"10",y1:"11",x2:"10",y2:"17"},null,-1),Y=(0,r._)("line",{x1:"14",y1:"11",x2:"14",y2:"17"},null,-1),J=[F,q,$,Y];const K={__name:"Compras",setup:function(e){var n=(0,c.D)(),g=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function F(e){var n=new Date(e);return n.getDate()+"/"+g[n.getMonth()]+"/"+n.getFullYear()}var q=function(){var e=(0,t.Z)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.itensCadastro=[],e.next=3,s.Z.get(n.baseApiHTTPS+"/mercadoprodutos");case 3:o=e.sent,n.itensCadastro=o.data;case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();q();var $=function(e){return n.descricaoSelecionada=null,n.itensCadastro.filter((function(n){return n.CODIGO_BARRAS==e})).map((function(e){n.descricaoSelecionada=e.NOME})),n.descricaoSelecionada},Y=function(){var e={CODIGO_BARRAS:n.compraItens.CODIGO_BARRAS,NOME:$(n.compraItens.CODIGO_BARRAS),QTDE:n.compraItens.QTDE,VALOR_CUSTO:n.compraItens.VALOR_CUSTO};n.compras.ITENS.push(e),X(),n.compraItens={CODIGO_BARRAS:null,QTDE:null,VALOR_CUSTO:null}},K=function(e){console.log(e),n.compras.ITENS.splice(e,1)};function W(){n.compras.DATA_EMISSAO=F(n.compras.DATA_EMISSAO),console.log("Cadastrando Novo Item");var e=o(7218),t=JSON.stringify(n.compras),r={method:"post",maxBodyLength:1/0,url:n.baseApiHTTPS+"/mercadocompras",headers:{"Content-Type":"application/json"},data:t};e(r).then((function(e){console.log(JSON.stringify(e.data)),q(),n.compras={NOTA:null,DATA_EMISSAO:null,FORNECEDOR:null,TOTAL_NOTA:null,ITENS:[]},n.compraItens={CODIGO_BARRAS:null,QTDE:null,VALOR_CUSTO:null}}))["catch"]((function(e){console.log(e)}))}function X(){if(n.compras.ITENS){var e=n.compras.ITENS.map((function(e){return e.VALOR_CUSTO})),o=0;for(var t in e)o+=e[t];return o}}return function(e,o){return(0,r.wg)(),(0,r.iD)("div",d,[p,(0,r._)("div",u,[(0,r._)("div",null,[(0,r._)("div",_,[(0,r._)("div",m,[f,(0,r._)("div",null,[(0,r.wy)((0,r._)("select",{class:"form-control",style:{height:"44px",width:"130px"},"onUpdate:modelValue":o[0]||(o[0]=function(e){return(0,a.SU)(n).compras.FORNECEDOR=e})},v,512),[[l.bM,(0,a.SU)(n).compras.FORNECEDOR]])])]),(0,r._)("div",x,[w,(0,r._)("div",null,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":o[1]||(o[1]=function(e){return(0,a.SU)(n).compras.NOTA=e}),type:"text",id:"NOTA",class:"form-control",placeholder:"NOTA"},null,512),[[l.nr,(0,a.SU)(n).compras.NOTA]])])]),(0,r._)("div",A,[D,(0,r._)("div",null,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":o[2]||(o[2]=function(e){return(0,a.SU)(n).compras.DATA_EMISSAO=e}),type:"date",id:"DATA_EMISSAO",class:"form-control",placeholder:"DATA_EMISSAO"},null,512),[[l.nr,(0,a.SU)(n).compras.DATA_EMISSAO]])])]),(0,r._)("div",h,[O,(0,r._)("div",null,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":o[3]||(o[3]=function(e){return(0,a.SU)(n).compras.TOTAL_NOTA=e}),type:"number",id:"TOTAL_NOTA",class:"form-control",placeholder:"TOTAL_NOTA"},null,512),[[l.nr,(0,a.SU)(n).compras.TOTAL_NOTA]])])])]),(0,r._)("div",S,[(0,r._)("div",T,[R,(0,r._)("div",null,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":o[4]||(o[4]=function(e){return(0,a.SU)(n).compraItens.CODIGO_BARRAS=e}),type:"text",id:"CODIGO_BARRAS",class:"form-control",placeholder:"CODIGO_BARRAS"},null,512),[[l.nr,(0,a.SU)(n).compraItens.CODIGO_BARRAS]])])]),(0,r._)("div",y,[E,(0,r._)("div",null,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":o[5]||(o[5]=function(e){return(0,a.SU)(n).compraItens.QTDE=e}),type:"number",id:"QTDE",class:"form-control",placeholder:"QTDE"},null,512),[[l.nr,(0,a.SU)(n).compraItens.QTDE]])])]),(0,r._)("div",b,[C,(0,r._)("div",null,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":o[6]||(o[6]=function(e){return(0,a.SU)(n).compraItens.VALOR_CUSTO=e}),type:"number",id:"VALOR_CUSTO",class:"form-control",placeholder:"VALOR_CUSTO"},null,512),[[l.nr,(0,a.SU)(n).compraItens.VALOR_CUSTO]])])]),(0,r._)("div",I,[k,(0,r._)("div",U,(0,i.zw)(X()),1)])]),(0,r._)("button",{onClick:o[7]||(o[7]=function(e){return Y()}),type:"",class:"btn btn-primary mt-3"},"Incluir Item")])]),N,(0,r._)("div",M,[(0,r._)("div",V,[(0,r._)("table",z,[L,(0,r._)("tbody",Q,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,a.SU)(n).compras.ITENS,(function(e,n){return(0,r.wg)(),(0,r.iD)("tr",{key:e.CODIGO_BARRAS,role:"row"},[(0,r._)("td",P,(0,i.zw)(e.CODIGO_BARRAS),1),(0,r._)("td",B,(0,i.zw)(e.NOME),1),(0,r._)("td",G,(0,i.zw)(e.QTDE),1),(0,r._)("td",j,(0,i.zw)(e.VALOR_CUSTO),1),(0,r._)("td",H,[((0,r.wg)(),(0,r.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-trash-2 icon",onClick:function(e){return K(n)}},J,8,Z))])])})),128))])])])]),(0,r._)("button",{onClick:o[8]||(o[8]=function(e){return W()}),type:"",class:"btn btn-primary mt-3"},"Enviar Dados")])}}},W=K,X=W},7122:(e,n,o)=>{o.r(n),o.d(n,{default:()=>ee});var t=o(8534),r=o(2482),a=(o(5666),o(6647),o(3710),o(1539),o(9714),o(6699),o(2023),o(4916),o(5306),o(6977),o(4678),o(7327),o(1249),o(6252)),l=o(2262),i=o(9963),s=o(3577),c=o(6056),d=o(1499),p=o(8433),u=o(6296),_={class:"layout-px-spacing",style:{"margin-top":"-100px"}},m=(0,a._)("h2",{class:"text-2xl font-medium mx-2","data-testid":"statements-title-txt"},"Demanda Mensal de Produtos",-1),f=(0,a._)("div",null,null,-1),g={key:1},v={style:{"font-size":"17px"}},x=(0,a._)("option",{disabled:"",value:""},"Selecione",-1),w=(0,a._)("option",null,"1",-1),A=(0,a._)("option",null,"3",-1),D=(0,a._)("option",null,"5",-1),h=(0,a._)("option",null,"7",-1),O=(0,a._)("option",null,"10",-1),S=(0,a._)("option",null,"15",-1),T=(0,a._)("option",null,"20",-1),R=(0,a._)("option",null,"30",-1),y=(0,a._)("option",null,"45",-1),E=(0,a._)("option",null,"90",-1),b=(0,a._)("option",null,"180",-1),C=(0,a._)("option",null,"365",-1),I=(0,a._)("option",null,"100000",-1),k={key:0},U={class:"panel br-0 p-0 mt-0"},N={class:"custom-table"},M={class:"progress"},V=["aria-valuemax"],z={class:"me-2 custom-dropdown dropdown btn-group"},L={class:"btn dropdown-toggle btn-icon-only",href:"#",role:"button",id:"pendingTask","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},Q={xmlns:"http://www.w3.org/2000/svg",style:{width:"24px",height:"24px"},width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-more-horizontal"},P=(0,a._)("circle",{cx:"12",cy:"12",r:"1"},null,-1),B=(0,a._)("circle",{cx:"19",cy:"12",r:"1"},null,-1),G=(0,a._)("circle",{cx:"5",cy:"12",r:"1"},null,-1),j=[P,B,G],H={class:"dropdown-menu dropdown-menu-end"},Z=["onClick"],F=["onClick"],q=(0,a._)("a",{href:"javascript:void(0);",class:"dropdown-item"}," Edit ",-1),$=[q],Y=["onClick"],J=(0,a._)("a",{href:"javascript:void(0);",class:"dropdown-item"}," Delete ",-1),K=[J];const W={__name:"demanda",setup:function(e){var n;(0,u.j)({title:"Multiple Tables"});var o=(0,d.D)();(0,l.iH)([]);o.recursos.progress=!0,o.diasDemanda=3;var P=new Date;P.setHours(23,59,59,999),P.getTime();var B=function(e,n){return n="undefined"!==typeof n?n:0,+(Math.floor(e+"e+"+n)+"e-"+n)};function G(){var e=o.itensRelDemanda.filter((function(e){return e.DIAS_RESTANTES<o.diasDemanda})),n=o.itensRelDemanda.filter((function(e){return 0==e.QTDE_ESTOQUE}));console.log(e);var t=[];return o.itensRelDemanda.map((function(e){var n={COD_PRODUTO:e.COD_PRODUTO,NOME:e.NOME,DEMANDA_DIARIA:e.DEMANDA_DIARIA,QTDE_ESTOQUE:e.QTDE_ESTOQUE,DIAS_RESTANTES:e.DIAS_RESTANTES,QTDE_NECESSARIA:B(e.DEMANDA_DIARIA*o.diasDemanda),COMPRAR_QTDE:B(e.DEMANDA_DIARIA*o.diasDemanda-e.QTDE_ESTOQUE)};t.push(n)})),console.log(n),t.filter((function(e){return e.COMPRAR_QTDE>0}))}var q=(0,l.iH)(["COD_PRODUTO","NOME","DEMANDA_DIARIA","QTDE_ESTOQUE","DIAS_RESTANTES","QTDE_NECESSARIA","COMPRAR_QTDE"]),J=(G(),(0,l.iH)((n={perPage:10,perPageValues:[5,10,20,50],skin:"table ",columnsClasses:{actions:"actions text-center"},sortable:[],pagination:{nav:"scroll",chunk:5},texts:{count:"Showing {from} to {to} of {count}",filter:"",filterPlaceholder:"Search...",limit:"Results:"}},(0,r.Z)(n,"sortable",["COD_PRODUTO","NOME","DEMANDA_DIARIA","QTDE_ESTOQUE","DIAS_RESTANTES"]),(0,r.Z)(n,"sortIcon",{base:"sort-icon-none",up:"sort-icon-asc",down:"sort-icon-desc"}),(0,r.Z)(n,"resizableColumns",!1),n)));(0,a.bv)((function(){W()}));var W=function(){var e=(0,t.Z)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o.itensRelDemanda=[],e.next=3,p.Z.get(o.baseApiHTTPS+"/mercadodemanda");case 3:n=e.sent,o.itensRelDemanda=n.data,o.recursos.progress=!1;case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return function(e,n){var t=(0,a.up)("v-client-table");return(0,a.wg)(),(0,a.iD)("div",_,[m,f,(0,l.SU)(o).recursos.progress?((0,a.wg)(),(0,a.j4)(c.Z,{key:0})):(0,a.kq)("",!0),(0,l.SU)(o).recursos.progress?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",g,[(0,a._)("div",v,[(0,a.Uk)(" Estoque para os proximos: "),(0,a.wy)((0,a._)("select",{style:{height:"25px",width:"60px"},"onUpdate:modelValue":n[0]||(n[0]=function(e){return(0,l.SU)(o).diasDemanda=e})},[x,w,A,D,h,O,S,T,R,(0,a.Uk)(" ] "),y,E,b,C,I],512),[[i.bM,(0,l.SU)(o).diasDemanda]])]),(0,l.SU)(o).editando?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",k,[(0,a._)("div",null,[(0,a._)("div",U,[(0,a._)("div",N,[(0,a.Wm)(t,{data:G(),columns:q.value,options:J.value},{progress:(0,a.w5)((function(e){return[(0,a._)("div",M,[(0,a._)("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":e.row.progress.count,"aria-valuenow":"100",class:(0,s.C_)(["progress-bar","bg-"+e.row.progress["class"]]),style:(0,s.j5)({width:e.row.progress.count+"%"})},null,14,V)])]})),salary:(0,a.w5)((function(e){return[(0,a.Uk)(" $"+(0,s.zw)(e.row.salary),1)]})),actions:(0,a.w5)((function(n){return[(0,a._)("div",z,[(0,a._)("a",L,[((0,a.wg)(),(0,a.iD)("svg",Q,j))]),(0,a._)("ul",H,[(0,a._)("li",null,[(0,a._)("a",{href:"javascript:void(0);",class:"dropdown-item",onClick:function(o){return e.view_row1(n.row)}}," view ",8,Z)]),(0,a._)("li",{onClick:function(o){return e.selectItemEdit(n.row)}},$,8,F),(0,a._)("li",{onClick:function(o){return e.deleteItem(n.row)}},K,8,Y)])])]})),_:1},8,["data","columns","options"])])])])]))]))])}}},X=W,ee=X},2985:(e,n,o)=>{o.r(n),o.d(n,{default:()=>ue});var t=o(8534),r=o(2482),a=(o(5666),o(6647),o(3710),o(1539),o(9714),o(6699),o(2023),o(4916),o(5306),o(6977),o(4678),o(7327),o(6252)),l=o(2262),i=o(3577),s=o(9963),c=o(6056),d=o(1499),p=o(8433),u=o(6296),_={class:"layout-px-spacing",style:{"margin-top":"-100px"}},m=(0,a._)("h2",{class:"text-2xl font-medium mx-2","data-testid":"statements-title-txt"},"Ticket Médio de Vendas",-1),f=(0,a._)("div",null,null,-1),g={key:1},v={style:{display:"flex","flex-wrap":"wrap",margin:"15px 0px 15px 0px"}},x={class:"card",style:{padding:"10px",width:"250px",height:"120px","border-radius":"10px","align-items":"center",margin:"0px 20px 15px 0px"}},w=(0,a._)("span",{style:{"font-size":"30px",color:"black"}}," Total Mês ",-1),A={style:{"font-size":"30px",color:"forestgreen"}},D={class:"card",style:{padding:"10px",width:"250px",height:"120px","border-radius":"10px","align-items":"center",margin:"0px 20px 15px 0px","background-color":""}},h=(0,a._)("span",{style:{"font-size":"30px",color:"black"}}," Lucro Mês ",-1),O={style:{"font-size":"30px",color:"forestgreen"}},S={class:"card",style:{padding:"10px",width:"250px",height:"120px","border-radius":"10px","align-items":"center",margin:"0px 20px 15px 0px","background-color":""}},T=(0,a._)("span",{style:{"font-size":"30px",color:"black"}}," Total do Dia ",-1),R={style:{"font-size":"30px",color:"forestgreen"}},y={class:"card",style:{padding:"10px",width:"250px",height:"120px","border-radius":"10px","align-items":"center",margin:"0px 20px 15px 0px"}},E=(0,a._)("span",{style:{"font-size":"30px",color:"black"}}," Lucro do Dia ",-1),b={style:{"font-size":"30px",color:"forestgreen"}},C=(0,a._)("option",null,"Esconder",-1),I=(0,a._)("option",null,"Diario",-1),k=(0,a._)("option",null,"Mensal",-1),U=[C,I,k],N={key:0,style:{display:"flex","flex-wrap":"wrap",margin:"15px 0px 15px 0px"}},M={key:"index"},V={class:"card",style:{padding:"5px",width:"180px",height:"100px","border-radius":"10px","align-items":"center",margin:"0px 20px 15px 0px"}},z={style:{"font-size":"30px",color:"black"}},L={style:{"font-size":"30px",color:"forestgreen"}},Q={key:1,style:{display:"flex","flex-wrap":"wrap",margin:"15px 0px 15px 0px"}},P={key:"index"},B={class:"card",style:{padding:"5px",width:"180px",height:"100px","border-radius":"10px","align-items":"center",margin:"0px 20px 15px 0px"}},G={style:{"font-size":"30px",color:"black"}},j={style:{"font-size":"30px",color:"forestgreen"}},H={key:2},Z={class:"panel br-0 p-0 mt-0"},F={class:"custom-table"},q={class:"progress"},$=["aria-valuemax"],Y={class:"me-2 custom-dropdown dropdown btn-group"},J={class:"btn dropdown-toggle btn-icon-only",href:"#",role:"button",id:"pendingTask","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},K={xmlns:"http://www.w3.org/2000/svg",style:{width:"24px",height:"24px"},width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-more-horizontal"},W=(0,a._)("circle",{cx:"12",cy:"12",r:"1"},null,-1),X=(0,a._)("circle",{cx:"19",cy:"12",r:"1"},null,-1),ee=(0,a._)("circle",{cx:"5",cy:"12",r:"1"},null,-1),ne=[W,X,ee],oe={class:"dropdown-menu dropdown-menu-end"},te=["onClick"],re=["onClick"],ae=(0,a._)("a",{href:"javascript:void(0);",class:"dropdown-item"}," Edit ",-1),le=[ae],ie=["onClick"],se=(0,a._)("a",{href:"javascript:void(0);",class:"dropdown-item"}," Delete ",-1),ce=[se];const de={__name:"vendasRel",setup:function(e){var n;(0,u.j)({title:"Multiple Tables"});var o=(0,d.D)();(0,l.iH)([]);function C(e){var n=e,o=n.getDate().toString(),t=1==o.length?"0"+o:o,r=(n.getMonth()+1).toString(),a=1==r.length?"0"+r:r,l=n.getFullYear();return t+"/"+a+"/"+l}function I(e){var n=e,o=n.getDate().toString(),t=(o.length,(n.getMonth()+1).toString()),r=1==t.length?"0"+t:t,a=n.getFullYear();return r+"/"+a}o.recursos.progress=!0;var k=new Date;function W(e){var n=e;return n&&n.toString().includes(",")&&(n=n.toString().replace(",",".")),parseFloat(n).toFixed(2).replace(".",",").replace(/(\d)(?=(\d{3})+\,)/g,"$1.")}function X(e){for(var n=o.itensRelVendas.filter((function(e){return e.DATA==C(new Date)})),t=0,r=0;r<n.length;r++)t+=n[r].VALOR;return W(t)}function ee(e){for(var n=o.itensRelVendas.filter((function(e){return e.DATA==C(new Date)})),t=0,r=0;r<n.length;r++)t+=n[r].LUCRO;return W(t)}function ae(e){for(var n=o.itensRelVendas.filter((function(e){return e.MES==I(new Date)})),t=0,r=0;r<n.length;r++)t+=n[r].VALOR;return W(t)}function se(e){for(var n=o.itensRelVendas.filter((function(e){return e.MES==I(new Date)})),t=0,r=0;r<n.length;r++)t+=n[r].LUCRO;return W(t)}function de(e){console.log(o.itensRelVendas);for(var n=o.itensRelVendas.filter((function(n){return n.DATA==C(new Date)&&n.CATEGORIA==e})),t=0,r=0;r<n.length;r++)t+=n[r].VALOR;return W(t)}function pe(e){console.log(o.itensRelVendas);for(var n=o.itensRelVendas.filter((function(n){return n.MES==I(new Date)&&n.CATEGORIA==e})),t=0,r=0;r<n.length;r++)t+=n[r].VALOR;return W(t)}k.setHours(23,59,59,999),k.getTime();var ue=(0,l.iH)(["ID","DATA","CATEGORIA","COD_PRODUTO","NOME","QTDE","VALOR","CUSTO","LUCRO","PERC_LUCRO"]),_e=(o.itensRelVendas,(0,l.iH)((n={perPage:10,perPageValues:[5,10,20,50],skin:"table ",columnsClasses:{actions:"actions text-center"},sortable:[],pagination:{nav:"scroll",chunk:5},texts:{count:"Showing {from} to {to} of {count}",filter:"",filterPlaceholder:"Search...",limit:"Results:"}},(0,r.Z)(n,"sortable",["ID","DATA","CATEGORIA","COD_PRODUTO","NOME","QTDE","VALOR","CUSTO","LUCRO","PERC_LUCRO"]),(0,r.Z)(n,"sortIcon",{base:"sort-icon-none",up:"sort-icon-asc",down:"sort-icon-desc"}),(0,r.Z)(n,"resizableColumns",!1),n)));(0,a.bv)((function(){me()}));var me=function(){var e=(0,t.Z)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o.itensRelVendas=[],e.next=3,p.Z.get(o.baseApiHTTPS+"/mercadovendas");case 3:n=e.sent,console.log(n.data),o.itensRelVendas=n.data,o.recursos.progress=!1;case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fe=function(e){alert("ID: "+item1.value.ID+", Name: "+item1.value.NOMENCLATURA)},ge=["Mercearia","Bebidas","Cigarros","Diversos","Frios","Limpeza"];return o.displayVendasCategoria="Diario",function(e,n){var t=(0,a.up)("v-client-table");return(0,a.wg)(),(0,a.iD)("div",_,[m,f,(0,l.SU)(o).recursos.progress?((0,a.wg)(),(0,a.j4)(c.Z,{key:0})):(0,a.kq)("",!0),(0,l.SU)(o).recursos.progress?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",g,[(0,a._)("div",v,[(0,a._)("div",x,[w,(0,a._)("div",A," R$ "+(0,i.zw)(ae()),1)]),(0,a._)("div",D,[h,(0,a._)("div",O," R$ "+(0,i.zw)(se()),1)]),(0,a._)("div",S,[T,(0,a._)("div",R," R$ "+(0,i.zw)(X()),1)]),(0,a._)("div",y,[E,(0,a._)("div",b," R$ "+(0,i.zw)(ee()),1)]),(0,a.wy)((0,a._)("select",{class:"form-control",style:{height:"44px",width:"130px"},"onUpdate:modelValue":n[0]||(n[0]=function(e){return(0,l.SU)(o).displayVendasCategoria=e})},U,512),[[s.bM,(0,l.SU)(o).displayVendasCategoria]])]),"Diario"==(0,l.SU)(o).displayVendasCategoria?((0,a.wg)(),(0,a.iD)("div",N,[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(ge,(function(e,n){return(0,a._)("div",M,[(0,a._)("div",V,[(0,a._)("span",z,(0,i.zw)(e),1),(0,a._)("div",L,(0,i.zw)(de(e)),1)])])})),64))])):(0,a.kq)("",!0),"Mensal"==(0,l.SU)(o).displayVendasCategoria?((0,a.wg)(),(0,a.iD)("div",Q,[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(ge,(function(e,n){return(0,a._)("div",P,[(0,a._)("div",B,[(0,a._)("span",G,(0,i.zw)(e),1),(0,a._)("div",j,(0,i.zw)(pe(e)),1)])])})),64))])):(0,a.kq)("",!0),(0,l.SU)(o).editando?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",H,[(0,a._)("div",null,[(0,a._)("div",Z,[(0,a._)("div",F,[(0,a.Wm)(t,{data:(0,l.SU)(o).itensRelVendas,columns:ue.value,options:_e.value},{progress:(0,a.w5)((function(e){return[(0,a._)("div",q,[(0,a._)("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":e.row.progress.count,"aria-valuenow":"100",class:(0,i.C_)(["progress-bar","bg-"+e.row.progress["class"]]),style:(0,i.j5)({width:e.row.progress.count+"%"})},null,14,$)])]})),salary:(0,a.w5)((function(e){return[(0,a.Uk)(" $"+(0,i.zw)(e.row.salary),1)]})),actions:(0,a.w5)((function(n){return[(0,a._)("div",Y,[(0,a._)("a",J,[((0,a.wg)(),(0,a.iD)("svg",K,ne))]),(0,a._)("ul",oe,[(0,a._)("li",null,[(0,a._)("a",{href:"javascript:void(0);",class:"dropdown-item",onClick:function(e){return fe(n.row)}}," view ",8,te)]),(0,a._)("li",{onClick:function(o){return e.selectItemEdit(n.row)}},le,8,re),(0,a._)("li",{onClick:function(o){return e.deleteItem(n.row)}},ce,8,ie)])])]})),_:1},8,["data","columns","options"])])])])]))]))])}}},pe=de,ue=pe}}]);
//# sourceMappingURL=auth-login-boxed.6fd2aec0.js.map