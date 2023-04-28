"use strict";(self["webpackChunkcork_vue3"]=self["webpackChunkcork_vue3"]||[]).push([[726],{6056:(e,o,n)=>{n.d(o,{Z:()=>u});var t=n(6252),r=n(1499),a={style:{display:"flex","justify-content":"center","padding-top":"100px"}},l=(0,t._)("div",{class:"spinner-border text-primary",role:"status",style:{width:"100px",height:"100px"}},[(0,t._)("span",{class:"sr-only"})],-1),i=[l];const s={__name:"Progress",setup:function(e){(0,r.D)();return function(e,o){return(0,t.wg)(),(0,t.iD)("div",a,i)}}},c=s,u=c},3134:(e,o,n)=>{n.r(o),n.d(o,{default:()=>X});var t=n(8534),r=(n(5666),n(3710),n(1249),n(7327),n(1539),n(561),n(8862),n(6252)),a=n(2262),l=n(9963),i=n(3577),s=n(8433),c=(n(581),n(1499)),u={style:{"margin-top":"-110px"}},d=(0,r._)("h2",null,"Entrada de Notas",-1),p={class:"panel-body"},_={class:"row"},m={class:"form-group col-md-2"},f=(0,r._)("label",{class:"col-form-label pt-0",for:"CATEGORIA"},"Fornecedor",-1),g=(0,r.uE)('<option disabled value="">Selecione</option><option>Tatico</option><option>Dist-Silva</option><option>SIM</option><option>Costa</option><option>Atacadao</option><option>Batista</option><option>Max-Atacado</option><option>Acai</option><option>Barao</option><option>Canaa</option><option>Aviz - Walter Santos</option><option>Santa Marta</option>',13),v=[g],w={class:"form-group col-md-2"},A=(0,r._)("label",{class:"col-form-label pt-0",for:"CODIGO_BARRAS"},"NOTA",-1),D={class:"form-group col-md-2"},O=(0,r._)("label",{class:"col-form-label pt-0",for:"NOME"},"Data da Nota ",-1),x={class:"form-group col-md-2"},h=(0,r._)("label",{class:"col-form-label pt-0",for:"NOME"},"Valor da Nota",-1),S={class:"row"},T={class:"form-group col-md-2"},R=(0,r._)("label",{class:"col-form-label pt-0",for:"NOME"},"Codigo Barras",-1),E={class:"form-group col-md-2"},b=(0,r._)("label",{class:"col-form-label pt-0",for:"QTDE"},"QTDE",-1),y={class:"form-group col-md-2"},C=(0,r._)("label",{class:"col-form-label pt-0",for:"password"},"Total do Item",-1),I={class:"form-group col-md-2"},k=(0,r._)("label",{class:"col-form-label pt-0",for:"password"},"Total do Item Lançados",-1),U={style:{"font-size":"30px","text-align":"center"}},N=(0,r._)("div",null,null,-1),M={class:"conteudo",style:{height:"40vh",padding:"0px 40px 0px 40px"}},V={class:"table-responsive",style:{padding:"10px"}},Q={role:"table","aria-busy":"false","aria-colcount":"5",class:"table table-bordered",id:"__BVID__415"},L=(0,r._)("thead",{role:"rowgroup"},[(0,r._)("tr",{role:"row"},[(0,r._)("th",{role:"columnheader",scope:"col","aria-colindex":"1"},[(0,r._)("div",null,"Codigo")]),(0,r._)("th",{role:"columnheader",scope:"col","aria-colindex":"2"},[(0,r._)("div",null,"Item Descricao")]),(0,r._)("th",{role:"columnheader",scope:"col","aria-colindex":"3"},[(0,r._)("div",null,"Qtde")]),(0,r._)("th",{role:"columnheader",scope:"col","aria-colindex":"4",class:""},[(0,r._)("div",null,"Custo")]),(0,r._)("th",{role:"columnheader",scope:"col","aria-colindex":"5","aria-label":"Action",class:""},[(0,r._)("div")])])],-1),z={role:"rowgroup"},P={"aria-colindex":"1",role:"cell"},B={"aria-colindex":"2",role:"cell"},j={"aria-colindex":"2",role:"cell"},Z={"aria-colindex":"3",role:"cell"},G={"aria-colindex":"5",role:"cell",class:"text-center"},H=["onClick"],F=(0,r._)("polyline",{points:"3 6 5 6 21 6"},null,-1),q=(0,r._)("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},null,-1),$=(0,r._)("line",{x1:"10",y1:"11",x2:"10",y2:"17"},null,-1),J=(0,r._)("line",{x1:"14",y1:"11",x2:"14",y2:"17"},null,-1),Y=[F,q,$,J];const W={__name:"Compras",setup:function(e){var o=(0,c.D)(),g=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function F(e){var o=new Date(e);return o.getDate()+"/"+g[o.getMonth()]+"/"+o.getFullYear()}var q=function(){var e=(0,t.Z)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o.itensCadastro=[],e.next=3,s.Z.get(o.baseApiHTTPS+"/mercadoprodutos");case 3:n=e.sent,o.itensCadastro=n.data;case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();q();var $=function(e){return o.descricaoSelecionada=null,o.itensCadastro.filter((function(o){return o.CODIGO_BARRAS==e})).map((function(e){o.descricaoSelecionada=e.NOME})),o.descricaoSelecionada},J=function(){var e={CODIGO_BARRAS:o.compraItens.CODIGO_BARRAS,NOME:$(o.compraItens.CODIGO_BARRAS),QTDE:o.compraItens.QTDE,VALOR_CUSTO:o.compraItens.VALOR_CUSTO};o.compras.ITENS.push(e),X(),o.compraItens={CODIGO_BARRAS:null,QTDE:null,VALOR_CUSTO:null}},W=function(e){console.log(e),o.compras.ITENS.splice(e,1)};function K(){o.compras.DATA_EMISSAO=F(o.compras.DATA_EMISSAO),console.log("Cadastrando Novo Item");var e=n(7218),t=JSON.stringify(o.compras),r={method:"post",maxBodyLength:1/0,url:o.baseApiHTTPS+"/mercadocompras",headers:{"Content-Type":"application/json"},data:t};e(r).then((function(e){console.log(JSON.stringify(e.data)),q(),o.compras={NOTA:null,DATA_EMISSAO:null,FORNECEDOR:null,TOTAL_NOTA:null,ITENS:[]},o.compraItens={CODIGO_BARRAS:null,QTDE:null,VALOR_CUSTO:null}}))["catch"]((function(e){console.log(e)}))}function X(){if(o.compras.ITENS){var e=o.compras.ITENS.map((function(e){return e.VALOR_CUSTO})),n=0;for(var t in e)n+=e[t];return n}}return function(e,n){return(0,r.wg)(),(0,r.iD)("div",u,[d,(0,r._)("div",p,[(0,r._)("div",null,[(0,r._)("div",_,[(0,r._)("div",m,[f,(0,r._)("div",null,[(0,r.wy)((0,r._)("select",{class:"form-control",style:{height:"44px",width:"130px"},"onUpdate:modelValue":n[0]||(n[0]=function(e){return(0,a.SU)(o).compras.FORNECEDOR=e})},v,512),[[l.bM,(0,a.SU)(o).compras.FORNECEDOR]])])]),(0,r._)("div",w,[A,(0,r._)("div",null,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":n[1]||(n[1]=function(e){return(0,a.SU)(o).compras.NOTA=e}),type:"text",id:"NOTA",class:"form-control",placeholder:"NOTA"},null,512),[[l.nr,(0,a.SU)(o).compras.NOTA]])])]),(0,r._)("div",D,[O,(0,r._)("div",null,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":n[2]||(n[2]=function(e){return(0,a.SU)(o).compras.DATA_EMISSAO=e}),type:"date",id:"DATA_EMISSAO",class:"form-control",placeholder:"DATA_EMISSAO"},null,512),[[l.nr,(0,a.SU)(o).compras.DATA_EMISSAO]])])]),(0,r._)("div",x,[h,(0,r._)("div",null,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":n[3]||(n[3]=function(e){return(0,a.SU)(o).compras.TOTAL_NOTA=e}),type:"number",id:"TOTAL_NOTA",class:"form-control",placeholder:"TOTAL_NOTA"},null,512),[[l.nr,(0,a.SU)(o).compras.TOTAL_NOTA]])])])]),(0,r._)("div",S,[(0,r._)("div",T,[R,(0,r._)("div",null,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":n[4]||(n[4]=function(e){return(0,a.SU)(o).compraItens.CODIGO_BARRAS=e}),type:"text",id:"CODIGO_BARRAS",class:"form-control",placeholder:"CODIGO_BARRAS"},null,512),[[l.nr,(0,a.SU)(o).compraItens.CODIGO_BARRAS]])])]),(0,r._)("div",E,[b,(0,r._)("div",null,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":n[5]||(n[5]=function(e){return(0,a.SU)(o).compraItens.QTDE=e}),type:"number",id:"QTDE",class:"form-control",placeholder:"QTDE"},null,512),[[l.nr,(0,a.SU)(o).compraItens.QTDE]])])]),(0,r._)("div",y,[C,(0,r._)("div",null,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":n[6]||(n[6]=function(e){return(0,a.SU)(o).compraItens.VALOR_CUSTO=e}),type:"number",id:"VALOR_CUSTO",class:"form-control",placeholder:"VALOR_CUSTO"},null,512),[[l.nr,(0,a.SU)(o).compraItens.VALOR_CUSTO]])])]),(0,r._)("div",I,[k,(0,r._)("div",U,(0,i.zw)(X()),1)])]),(0,r._)("button",{onClick:n[7]||(n[7]=function(e){return J()}),type:"",class:"btn btn-primary mt-3"},"Incluir Item")])]),N,(0,r._)("div",M,[(0,r._)("div",V,[(0,r._)("table",Q,[L,(0,r._)("tbody",z,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,a.SU)(o).compras.ITENS,(function(e,o){return(0,r.wg)(),(0,r.iD)("tr",{key:e.CODIGO_BARRAS,role:"row"},[(0,r._)("td",P,(0,i.zw)(e.CODIGO_BARRAS),1),(0,r._)("td",B,(0,i.zw)(e.NOME),1),(0,r._)("td",j,(0,i.zw)(e.QTDE),1),(0,r._)("td",Z,(0,i.zw)(e.VALOR_CUSTO),1),(0,r._)("td",G,[((0,r.wg)(),(0,r.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-trash-2 icon",onClick:function(e){return W(o)}},Y,8,H))])])})),128))])])])]),(0,r._)("button",{onClick:n[8]||(n[8]=function(e){return K()}),type:"",class:"btn btn-primary mt-3"},"Enviar Dados")])}}},K=W,X=K},7122:(e,o,n)=>{n.r(o),n.d(o,{default:()=>ee});var t=n(8534),r=n(2482),a=(n(5666),n(6647),n(3710),n(1539),n(9714),n(6699),n(2023),n(4916),n(5306),n(6977),n(4678),n(7327),n(1249),n(6252)),l=n(2262),i=n(9963),s=n(3577),c=n(6056),u=n(1499),d=n(8433),p=n(6296),_={class:"layout-px-spacing",style:{"margin-top":"-100px"}},m=(0,a._)("h2",{class:"text-2xl font-medium mx-2","data-testid":"statements-title-txt"},"Demanda Mensal de Produtos",-1),f=(0,a._)("div",null,null,-1),g={key:1},v={style:{"font-size":"17px"}},w=(0,a._)("option",{disabled:"",value:""},"Selecione",-1),A=(0,a._)("option",null,"1",-1),D=(0,a._)("option",null,"3",-1),O=(0,a._)("option",null,"5",-1),x=(0,a._)("option",null,"7",-1),h=(0,a._)("option",null,"10",-1),S=(0,a._)("option",null,"15",-1),T=(0,a._)("option",null,"20",-1),R=(0,a._)("option",null,"30",-1),E=(0,a._)("option",null,"45",-1),b=(0,a._)("option",null,"90",-1),y=(0,a._)("option",null,"180",-1),C=(0,a._)("option",null,"365",-1),I=(0,a._)("option",null,"100000",-1),k={key:0},U={class:"panel br-0 p-0 mt-0"},N={class:"custom-table"},M={class:"progress"},V=["aria-valuemax"],Q={class:"me-2 custom-dropdown dropdown btn-group"},L={class:"btn dropdown-toggle btn-icon-only",href:"#",role:"button",id:"pendingTask","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},z={xmlns:"http://www.w3.org/2000/svg",style:{width:"24px",height:"24px"},width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-more-horizontal"},P=(0,a._)("circle",{cx:"12",cy:"12",r:"1"},null,-1),B=(0,a._)("circle",{cx:"19",cy:"12",r:"1"},null,-1),j=(0,a._)("circle",{cx:"5",cy:"12",r:"1"},null,-1),Z=[P,B,j],G={class:"dropdown-menu dropdown-menu-end"},H=["onClick"],F=["onClick"],q=(0,a._)("a",{href:"javascript:void(0);",class:"dropdown-item"}," Edit ",-1),$=[q],J=["onClick"],Y=(0,a._)("a",{href:"javascript:void(0);",class:"dropdown-item"}," Delete ",-1),W=[Y];const K={__name:"demanda",setup:function(e){var o;(0,p.j)({title:"Multiple Tables"});var n=(0,u.D)();(0,l.iH)([]);n.recursos.progress=!0,n.diasDemanda=3;var P=new Date;P.setHours(23,59,59,999),P.getTime();var B=function(e,o){return o="undefined"!==typeof o?o:0,+(Math.floor(e+"e+"+o)+"e-"+o)};function j(){var e=n.itensRelDemanda.filter((function(e){return e.DIAS_RESTANTES<n.diasDemanda})),o=n.itensRelDemanda.filter((function(e){return 0==e.QTDE_ESTOQUE}));console.log(e);var t=[];return n.itensRelDemanda.map((function(e){var o={COD_PRODUTO:e.COD_PRODUTO,NOME:e.NOME,DEMANDA_DIARIA:e.DEMANDA_DIARIA,QTDE_ESTOQUE:e.QTDE_ESTOQUE,DIAS_RESTANTES:e.DIAS_RESTANTES,QTDE_NECESSARIA:B(e.DEMANDA_DIARIA*n.diasDemanda),COMPRAR_QTDE:B(e.DEMANDA_DIARIA*n.diasDemanda-e.QTDE_ESTOQUE)};t.push(o)})),console.log(o),t.filter((function(e){return e.COMPRAR_QTDE>0}))}var q=(0,l.iH)(["COD_PRODUTO","NOME","DEMANDA_DIARIA","QTDE_ESTOQUE","DIAS_RESTANTES","QTDE_NECESSARIA","COMPRAR_QTDE"]),Y=(j(),(0,l.iH)((o={perPage:10,perPageValues:[5,10,20,50],skin:"table ",columnsClasses:{actions:"actions text-center"},sortable:[],pagination:{nav:"scroll",chunk:5},texts:{count:"Showing {from} to {to} of {count}",filter:"",filterPlaceholder:"Search...",limit:"Results:"}},(0,r.Z)(o,"sortable",["COD_PRODUTO","NOME","DEMANDA_DIARIA","QTDE_ESTOQUE","DIAS_RESTANTES"]),(0,r.Z)(o,"sortIcon",{base:"sort-icon-none",up:"sort-icon-asc",down:"sort-icon-desc"}),(0,r.Z)(o,"resizableColumns",!1),o)));(0,a.bv)((function(){K()}));var K=function(){var e=(0,t.Z)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.itensRelDemanda=[],e.next=3,d.Z.get(n.baseApiHTTPS+"/mercadodemanda");case 3:o=e.sent,n.itensRelDemanda=o.data,n.recursos.progress=!1;case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return function(e,o){var t=(0,a.up)("v-client-table");return(0,a.wg)(),(0,a.iD)("div",_,[m,f,(0,l.SU)(n).recursos.progress?((0,a.wg)(),(0,a.j4)(c.Z,{key:0})):(0,a.kq)("",!0),(0,l.SU)(n).recursos.progress?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",g,[(0,a._)("div",v,[(0,a.Uk)(" Estoque para os proximos: "),(0,a.wy)((0,a._)("select",{style:{height:"25px",width:"60px"},"onUpdate:modelValue":o[0]||(o[0]=function(e){return(0,l.SU)(n).diasDemanda=e})},[w,A,D,O,x,h,S,T,R,(0,a.Uk)(" ] "),E,b,y,C,I],512),[[i.bM,(0,l.SU)(n).diasDemanda]])]),(0,l.SU)(n).editando?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",k,[(0,a._)("div",null,[(0,a._)("div",U,[(0,a._)("div",N,[(0,a.Wm)(t,{data:j(),columns:q.value,options:Y.value},{progress:(0,a.w5)((function(e){return[(0,a._)("div",M,[(0,a._)("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":e.row.progress.count,"aria-valuenow":"100",class:(0,s.C_)(["progress-bar","bg-"+e.row.progress["class"]]),style:(0,s.j5)({width:e.row.progress.count+"%"})},null,14,V)])]})),salary:(0,a.w5)((function(e){return[(0,a.Uk)(" $"+(0,s.zw)(e.row.salary),1)]})),actions:(0,a.w5)((function(o){return[(0,a._)("div",Q,[(0,a._)("a",L,[((0,a.wg)(),(0,a.iD)("svg",z,Z))]),(0,a._)("ul",G,[(0,a._)("li",null,[(0,a._)("a",{href:"javascript:void(0);",class:"dropdown-item",onClick:function(n){return e.view_row1(o.row)}}," view ",8,H)]),(0,a._)("li",{onClick:function(n){return e.selectItemEdit(o.row)}},$,8,F),(0,a._)("li",{onClick:function(n){return e.deleteItem(o.row)}},W,8,J)])])]})),_:1},8,["data","columns","options"])])])])]))]))])}}},X=K,ee=X},2985:(e,o,n)=>{n.r(o),n.d(o,{default:()=>W});var t=n(8534),r=n(2482),a=(n(5666),n(6647),n(3710),n(1539),n(9714),n(6699),n(2023),n(4916),n(5306),n(6977),n(4678),n(7327),n(6252)),l=n(2262),i=n(3577),s=n(6056),c=n(1499),u=n(8433),d=n(6296),p={class:"layout-px-spacing",style:{"margin-top":"-100px"}},_=(0,a._)("h2",{class:"text-2xl font-medium mx-2","data-testid":"statements-title-txt"},"Ticket Médio de Vendas",-1),m=(0,a._)("div",null,null,-1),f={key:1},g={style:{display:"flex","flex-wrap":"wrap",margin:"15px 0px 15px 0px"}},v={class:"card",style:{padding:"10px",width:"250px",height:"120px","border-radius":"10px","align-items":"center",margin:"0px 20px 15px 0px"}},w=(0,a._)("span",{style:{"font-size":"30px",color:"black"}}," Total Mês ",-1),A={style:{"font-size":"30px",color:"forestgreen"}},D={class:"card",style:{padding:"10px",width:"250px",height:"120px","border-radius":"10px","align-items":"center",margin:"0px 20px 15px 0px","background-color":""}},O=(0,a._)("span",{style:{"font-size":"30px",color:"black"}}," Lucro Mês ",-1),x={style:{"font-size":"30px",color:"forestgreen"}},h={class:"card",style:{padding:"10px",width:"250px",height:"120px","border-radius":"10px","align-items":"center",margin:"0px 20px 15px 0px","background-color":""}},S=(0,a._)("span",{style:{"font-size":"30px",color:"black"}}," Total do Dia ",-1),T={style:{"font-size":"30px",color:"forestgreen"}},R={class:"card",style:{padding:"10px",width:"250px",height:"120px","border-radius":"10px","align-items":"center",margin:"0px 20px 15px 0px"}},E=(0,a._)("span",{style:{"font-size":"30px",color:"black"}}," Lucro do Dia ",-1),b={style:{"font-size":"30px",color:"forestgreen"}},y={key:0},C={class:"panel br-0 p-0 mt-0"},I={class:"custom-table"},k={class:"progress"},U=["aria-valuemax"],N={class:"me-2 custom-dropdown dropdown btn-group"},M={class:"btn dropdown-toggle btn-icon-only",href:"#",role:"button",id:"pendingTask","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},V={xmlns:"http://www.w3.org/2000/svg",style:{width:"24px",height:"24px"},width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-more-horizontal"},Q=(0,a._)("circle",{cx:"12",cy:"12",r:"1"},null,-1),L=(0,a._)("circle",{cx:"19",cy:"12",r:"1"},null,-1),z=(0,a._)("circle",{cx:"5",cy:"12",r:"1"},null,-1),P=[Q,L,z],B={class:"dropdown-menu dropdown-menu-end"},j=["onClick"],Z=["onClick"],G=(0,a._)("a",{href:"javascript:void(0);",class:"dropdown-item"}," Edit ",-1),H=[G],F=["onClick"],q=(0,a._)("a",{href:"javascript:void(0);",class:"dropdown-item"}," Delete ",-1),$=[q];const J={__name:"vendasRel",setup:function(e){var o;(0,d.j)({title:"Multiple Tables"});var n=(0,c.D)();(0,l.iH)([]);function Q(e){var o=e,n=o.getDate().toString(),t=1==n.length?"0"+n:n,r=(o.getMonth()+1).toString(),a=1==r.length?"0"+r:r,l=o.getFullYear();return t+"/"+a+"/"+l}function L(e){var o=e,n=o.getDate().toString(),t=(n.length,(o.getMonth()+1).toString()),r=1==t.length?"0"+t:t,a=o.getFullYear();return r+"/"+a}n.recursos.progress=!0;var z=new Date;function G(e){var o=e;return o&&o.toString().includes(",")&&(o=o.toString().replace(",",".")),parseFloat(o).toFixed(2).replace(".",",").replace(/(\d)(?=(\d{3})+\,)/g,"$1.")}function q(e){for(var o=n.itensRelVendas.filter((function(e){return e.DATA==Q(new Date)})),t=0,r=0;r<o.length;r++)t+=o[r].VALOR;return G(t)}function J(e){for(var o=n.itensRelVendas.filter((function(e){return e.DATA==Q(new Date)})),t=0,r=0;r<o.length;r++)t+=o[r].LUCRO;return G(t)}function Y(e){for(var o=n.itensRelVendas.filter((function(e){return e.MES==L(new Date)})),t=0,r=0;r<o.length;r++)t+=o[r].VALOR;return G(t)}function W(e){for(var o=n.itensRelVendas.filter((function(e){return e.MES==L(new Date)})),t=0,r=0;r<o.length;r++)t+=o[r].LUCRO;return G(t)}z.setHours(23,59,59,999),z.getTime();var K=(0,l.iH)(["ID","DATA","COD_PRODUTO","NOME","QTDE","VALOR","CUSTO","LUCRO","PERC_LUCRO"]),X=(n.itensRelVendas,(0,l.iH)((o={perPage:10,perPageValues:[5,10,20,50],skin:"table ",columnsClasses:{actions:"actions text-center"},sortable:[],pagination:{nav:"scroll",chunk:5},texts:{count:"Showing {from} to {to} of {count}",filter:"",filterPlaceholder:"Search...",limit:"Results:"}},(0,r.Z)(o,"sortable",["ID","DATA","COD_PRODUTO","NOME","QTDE","VALOR","CUSTO","LUCRO","PERC_LUCRO"]),(0,r.Z)(o,"sortIcon",{base:"sort-icon-none",up:"sort-icon-asc",down:"sort-icon-desc"}),(0,r.Z)(o,"resizableColumns",!1),o)));(0,a.bv)((function(){ee()}));var ee=function(){var e=(0,t.Z)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.itensRelVendas=[],e.next=3,u.Z.get(n.baseApiHTTPS+"/mercadovendas");case 3:o=e.sent,console.log(o.data),n.itensRelVendas=o.data,n.recursos.progress=!1;case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),oe=function(e){alert("ID: "+item1.value.ID+", Name: "+item1.value.NOMENCLATURA)};return function(e,o){var t=(0,a.up)("v-client-table");return(0,a.wg)(),(0,a.iD)("div",p,[_,m,(0,l.SU)(n).recursos.progress?((0,a.wg)(),(0,a.j4)(s.Z,{key:0})):(0,a.kq)("",!0),(0,l.SU)(n).recursos.progress?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",f,[(0,a._)("div",g,[(0,a._)("div",v,[w,(0,a._)("div",A," R$ "+(0,i.zw)(Y()),1)]),(0,a._)("div",D,[O,(0,a._)("div",x," R$ "+(0,i.zw)(W()),1)]),(0,a._)("div",h,[S,(0,a._)("div",T," R$ "+(0,i.zw)(q()),1)]),(0,a._)("div",R,[E,(0,a._)("div",b," R$ "+(0,i.zw)(J()),1)])]),(0,l.SU)(n).editando?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",y,[(0,a._)("div",null,[(0,a._)("div",C,[(0,a._)("div",I,[(0,a.Wm)(t,{data:(0,l.SU)(n).itensRelVendas,columns:K.value,options:X.value},{progress:(0,a.w5)((function(e){return[(0,a._)("div",k,[(0,a._)("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":e.row.progress.count,"aria-valuenow":"100",class:(0,i.C_)(["progress-bar","bg-"+e.row.progress["class"]]),style:(0,i.j5)({width:e.row.progress.count+"%"})},null,14,U)])]})),salary:(0,a.w5)((function(e){return[(0,a.Uk)(" $"+(0,i.zw)(e.row.salary),1)]})),actions:(0,a.w5)((function(o){return[(0,a._)("div",N,[(0,a._)("a",M,[((0,a.wg)(),(0,a.iD)("svg",V,P))]),(0,a._)("ul",B,[(0,a._)("li",null,[(0,a._)("a",{href:"javascript:void(0);",class:"dropdown-item",onClick:function(e){return oe(o.row)}}," view ",8,j)]),(0,a._)("li",{onClick:function(n){return e.selectItemEdit(o.row)}},H,8,Z),(0,a._)("li",{onClick:function(n){return e.deleteItem(o.row)}},$,8,F)])])]})),_:1},8,["data","columns","options"])])])])]))]))])}}},Y=J,W=Y}}]);
//# sourceMappingURL=auth-login-boxed.310647c1.js.map