"use strict";(self["webpackChunkcork_vue3"]=self["webpackChunkcork_vue3"]||[]).push([[787],{2566:(o,t,e)=>{e.r(t),e.d(t,{default:()=>lt});var r=e(8534),n=e(2482),a=(e(8862),e(1249),e(7327),e(1539),e(6699),e(2023),e(6647),e(3710),e(9714),e(4916),e(5306),e(6977),e(4678),e(5666),e(6252)),l=e(2262),i=e(3577),s=e(9963),d=e(1499),c=e(8433),u=e(6296),p={class:"layout-px-spacing",style:{"margin-top":"-100px"}},O=(0,a._)("h4",null,"Historico de Vendas do Item",-1),v={style:{padding:"10px"}},f={style:{color:"red"}},_={class:"panel br-0 p-0 mt-0"},C={class:"custom-table"},g={class:"progress"},m=["aria-valuemax"],w={class:"me-2 custom-dropdown dropdown btn-group"},x={class:"btn dropdown-toggle btn-icon-only",href:"#",role:"button",id:"pendingTask","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},h={xmlns:"http://www.w3.org/2000/svg",style:{width:"24px",height:"24px"},width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-more-horizontal"},S=(0,a._)("circle",{cx:"12",cy:"12",r:"1"},null,-1),A=(0,a._)("circle",{cx:"19",cy:"12",r:"1"},null,-1),T=(0,a._)("circle",{cx:"5",cy:"12",r:"1"},null,-1),E=[S,A,T],y={class:"dropdown-menu dropdown-menu-end"},D=["onClick"],R=["onClick"],U=(0,a._)("a",{href:"javascript:void(0);",class:"dropdown-item"}," Edit ",-1),k=[U],b=["onClick"],P=(0,a._)("a",{href:"javascript:void(0);",class:"dropdown-item"}," Delete ",-1),I=[P];const V={__name:"ItensDetalhe",setup:function(o){var t;(0,u.j)({title:"Multiple Tables"});var e=(0,d.D)(),s=((0,l.iH)([]),(0,l.iH)(["MES","COD_PRODUTO","NOME","QTDE","VALOR","CUSTO","LUCRO"])),S=(e.itensHistorico,(0,l.iH)((t={perPage:10,perPageValues:[5,10,20,50],skin:"table ",columnsClasses:{actions:"actions text-center"},sortable:[],pagination:{nav:"scroll",chunk:5},texts:{count:"Showing {from} to {to} of {count}",filter:"",filterPlaceholder:"Search...",limit:"Results:"}},(0,n.Z)(t,"sortable",["MES","COD_PRODUTO","NOME","QTDE","VALOR","CUSTO","LUCRO"]),(0,n.Z)(t,"sortIcon",{base:"sort-icon-none",up:"sort-icon-asc",down:"sort-icon-desc"}),(0,n.Z)(t,"resizableColumns",!1),t)));(0,a.bv)((function(){A()}));var A=function(){var o=(0,r.Z)(regeneratorRuntime.mark((function o(){var t;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return e.itensHistorico=[],o.next=3,c.Z.get(e.baseApiHTTPS+"/mercadohistorico/"+e.ItensSelecionadoDemanda.CODIGO_BARRAS);case 3:t=o.sent,console.log(t.data),e.itensHistorico=t.data;case 6:case"end":return o.stop()}}),o)})));return function(){return o.apply(this,arguments)}}();return function(o,t){var r=(0,a.up)("v-client-table");return(0,a.wg)(),(0,a.iD)("div",p,[O,(0,a._)("div",v,[(0,a._)("h3",f,(0,i.zw)((0,l.SU)(e).ItensSelecionadoDemanda.NOME)+" - "+(0,i.zw)((0,l.SU)(e).ItensSelecionadoDemanda.CODIGO_BARRAS),1)]),(0,a._)("div",_,[(0,a._)("div",C,[(0,a.Wm)(r,{data:(0,l.SU)(e).itensHistorico,columns:s.value,options:S.value},{progress:(0,a.w5)((function(o){return[(0,a._)("div",g,[(0,a._)("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":o.row.progress.count,"aria-valuenow":"100",class:(0,i.C_)(["progress-bar","bg-"+o.row.progress["class"]]),style:(0,i.j5)({width:o.row.progress.count+"%"})},null,14,m)])]})),salary:(0,a.w5)((function(o){return[(0,a.Uk)(" $"+(0,i.zw)(o.row.salary),1)]})),actions:(0,a.w5)((function(t){return[(0,a._)("div",w,[(0,a._)("a",x,[((0,a.wg)(),(0,a.iD)("svg",h,E))]),(0,a._)("ul",y,[(0,a._)("li",null,[(0,a._)("a",{href:"javascript:void(0);",class:"dropdown-item",onClick:function(e){return o.view_row1(t.row)}}," view ",8,D)]),(0,a._)("li",{onClick:function(e){return o.selectItemEdit(t.row)}},k,8,R),(0,a._)("li",{onClick:function(e){return o.deleteItem(t.row)}},I,8,b)])])]})),_:1},8,["data","columns","options"])])]),(0,a._)("div",null,[(0,a._)("button",{onClick:t[0]||(t[0]=function(o){return(0,l.SU)(e).itensDetalhe=!1})},"Voltar")])])}}},N=V,L=N;var Q={key:0},M={key:1,class:"layout-px-spacing",style:{"margin-top":"-100px"}},B=(0,a._)("div",null,null,-1),z={key:0,style:{display:"flex","flex-wrap":"wrap",margin:"15px 0px 15px 0px"}},G={class:"card",style:{padding:"10px",width:"250px",height:"120px","border-radius":"10px","align-items":"center",margin:"0px 20px 15px 0px"}},F=(0,a._)("span",{style:{"font-size":"30px",color:"black"}}," Estoque Atual ",-1),H={style:{"font-size":"30px",color:"forestgreen"}},j={key:1,style:{display:"flex"}},Z={key:"index"},q={class:"card",style:{padding:"5px",width:"180px",height:"100px","border-radius":"10px","align-items":"center",margin:"0px 20px 15px 0px"}},W={style:{"font-size":"30px",color:"black"}},J={style:{"font-size":"30px",color:"forestgreen"}},$={key:2},Y={class:"row layout-top-spacing"},K={class:"col-xl-10 col-lg-6 col-md-6 col-sm-10 col-10",style:{"margin-bottom":"24px"}},X={class:"statbox panel box box-shadow"},oo=(0,a._)("div",{class:"panel-heading"},[(0,a._)("div",{class:"row"},[(0,a._)("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[(0,a._)("h4",null,"Cadastro de Itens")])])],-1),to={class:"panel-body"},eo={class:"row"},ro={class:"form-group col-md-2"},no=(0,a._)("label",{class:"col-form-label pt-0",for:"CATEGORIA"},"CATEGORIA",-1),ao=(0,a._)("option",{disabled:"",value:""},"Selecione",-1),lo=(0,a._)("option",null,"Mercearia",-1),io=(0,a._)("option",null,"Limpeza",-1),so=(0,a._)("option",null,"Bebidas",-1),co=(0,a._)("option",null,"Diversos",-1),uo=(0,a._)("option",null,"Cigarros",-1),po=(0,a._)("option",null,"Frios",-1),Oo=[ao,lo,io,so,co,uo,po],vo={class:"form-group col-md-2"},fo=(0,a._)("label",{class:"col-form-label pt-0",for:"CODIGO_BARRAS"},"CODIGO_BARRAS",-1),_o={class:"form-group col-md-8"},Co=(0,a._)("label",{class:"col-form-label pt-0",for:"NOME"},"NOME",-1),go={class:"row"},mo={class:"form-group col-md-12"},wo=(0,a._)("label",{class:"col-form-label pt-0",for:"FOTO"},"FOTO",-1),xo={class:"row"},ho={class:"form-group col-md-4"},So=(0,a._)("label",{class:"col-form-label pt-0",for:"NOME"},"DESCRICAO",-1),Ao={class:"form-group col-md-2"},To=(0,a._)("label",{class:"col-form-label pt-0",for:"password"},"SITUACAO",-1),Eo=(0,a._)("option",{disabled:"",value:""},"Selecione",-1),yo=(0,a._)("option",null,"ATIVADO",-1),Do=(0,a._)("option",null,"DESATIVADO",-1),Ro=[Eo,yo,Do],Uo={class:"form-group col-md-2"},ko=(0,a._)("label",{class:"col-form-label pt-0",for:"password"},"VALOR",-1),bo={class:"form-group col-md-2"},Po=(0,a._)("label",{class:"col-form-label pt-0",for:"password"},"VALOR_CUSTO",-1),Io={class:"form-group col-md-2"},Vo=(0,a._)("label",{class:"col-form-label pt-0",for:"password"},"QTDE_ESTOQUE",-1),No=(0,a._)("svg",{version:"1.1",id:"Capa_1",width:"30px",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 50 50","xml:space":"preserve"},[(0,a._)("circle",{style:{fill:"#43B05C"},cx:"25",cy:"25",r:"25"}),(0,a._)("line",{style:{fill:"none",stroke:"#FFFFFF","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10"},x1:"25",y1:"13",x2:"25",y2:"38"}),(0,a._)("line",{style:{fill:"none",stroke:"#FFFFFF","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10"},x1:"37.5",y1:"25",x2:"12.5",y2:"25"})],-1),Lo=[No],Qo={key:4},Mo={class:"panel br-0 p-0 mt-0"},Bo={class:"custom-table"},zo={class:"progress"},Go=["aria-valuemax"],Fo={class:"me-2 custom-dropdown dropdown btn-group"},Ho={class:"btn dropdown-toggle btn-icon-only",href:"#",role:"button",id:"pendingTask","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},jo={xmlns:"http://www.w3.org/2000/svg",style:{width:"24px",height:"24px"},width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-more-horizontal"},Zo=(0,a._)("circle",{cx:"12",cy:"12",r:"1"},null,-1),qo=(0,a._)("circle",{cx:"19",cy:"12",r:"1"},null,-1),Wo=(0,a._)("circle",{cx:"5",cy:"12",r:"1"},null,-1),Jo=[Zo,qo,Wo],$o={class:"dropdown-menu dropdown-menu-end"},Yo=["onClick"],Ko=["onClick"],Xo=(0,a._)("a",{href:"javascript:void(0);",class:"dropdown-item"}," Edit ",-1),ot=[Xo],tt=["onClick"],et=(0,a._)("a",{href:"javascript:void(0);",class:"dropdown-item"}," Delete ",-1),rt=[et];const nt={__name:"Itens",setup:function(o){var t;(0,u.j)({title:"Multiple Tables"});var p=(0,d.D)(),O=((0,l.iH)([]),(0,l.iH)(["actions","ID","CATEGORIA","CODIGO_BARRAS","NOME","VALOR","VALOR_CUSTO","QTDE_ESTOQUE","SITUACAO"])),v=(p.itensCadastro,(0,l.iH)((t={perPage:10,perPageValues:[5,10,20,50],skin:"table ",columnsClasses:{actions:"actions text-center"},sortable:[],pagination:{nav:"scroll",chunk:5},texts:{count:"Showing {from} to {to} of {count}",filter:"",filterPlaceholder:"Search...",limit:"Results:"}},(0,n.Z)(t,"sortable",["ID","AMBIENTE","TIPO","NOMENCLATURA","VLR_UNITARIO","QTDE_ESTOQUE"]),(0,n.Z)(t,"sortIcon",{base:"sort-icon-none",up:"sort-icon-asc",down:"sort-icon-desc"}),(0,n.Z)(t,"resizableColumns",!1),t)));(0,a.bv)((function(){f()}));var f=function(){var o=(0,r.Z)(regeneratorRuntime.mark((function o(){var t;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return p.itensCadastro=[],o.next=3,c.Z.get(p.baseApiHTTPS+"/mercadoprodutos");case 3:t=o.sent,p.itensCadastro=t.data,p.itensHistorico=[];case 6:case"end":return o.stop()}}),o)})));return function(){return o.apply(this,arguments)}}(),_=function(o){p.itensDetalhe=!0,p.ItensSelecionadoDemanda=o,console.log(o),p.itensHistorico=[]};function C(o){p.editando=!0,console.log(o),p.cadastroProduto.ID=o.ID,p.cadastroProduto.CATEGORIA=o.CATEGORIA,p.cadastroProduto.CODIGO_BARRAS=o.CODIGO_BARRAS,p.cadastroProduto.DESCRICAO=o.DESCRICAO,p.cadastroProduto.FOTO=o.FOTO,p.cadastroProduto.NOME=o.NOME,p.cadastroProduto.SITUACAO=o.SITUACAO,p.cadastroProduto.VALOR=o.VALOR,p.cadastroProduto.VALOR_CUSTO=o.VALOR_CUSTO,p.cadastroProduto.QTDE_ESTOQUE=o.QTDE_ESTOQUE}function g(o){console.log("Editando Item ID: "+o),console.log("NOMENCLATURA "+p.cadastroProduto.NOMENCLATURA);var t=JSON.stringify({ID:o,CATEGORIA:p.cadastroProduto.CATEGORIA,CODIGO_BARRAS:p.cadastroProduto.CODIGO_BARRAS,DESCRICAO:p.cadastroProduto.DESCRICAO,FOTO:p.cadastroProduto.FOTO,NOME:p.cadastroProduto.NOME,SITUACAO:p.cadastroProduto.SITUACAO,VALOR:p.cadastroProduto.VALOR,VALOR_CUSTO:p.cadastroProduto.VALOR_CUSTO,QTDE_ESTOQUE:p.cadastroProduto.QTDE_ESTOQUE}),e={method:"put",maxBodyLength:1/0,url:p.baseApiHTTPS+"/mercadoprodutos/"+o,headers:{"Content-Type":"application/json"},data:t};(0,c.Z)(e).then((function(o){console.log(JSON.stringify(o.data)),f()}))["catch"]((function(o){console.log(o)}))}function m(){console.log("Cadastrando Novo Item");var o=e(7218);console.log(p.cadastroProduto.AMBIENTE);var t=JSON.stringify({CATEGORIA:p.cadastroProduto.CATEGORIA,CODIGO_BARRAS:p.cadastroProduto.CODIGO_BARRAS,DESCRICAO:p.cadastroProduto.DESCRICAO,FOTO:p.cadastroProduto.FOTO,NOME:p.cadastroProduto.NOME,SITUACAO:p.cadastroProduto.SITUACAO,VALOR:p.cadastroProduto.VALOR,VALOR_CUSTO:p.cadastroProduto.VALOR_CUSTO,QTDE_ESTOQUE:p.cadastroProduto.QTDE_ESTOQUE}),r={method:"post",maxBodyLength:1/0,url:p.baseApiHTTPS+"/mercadoprodutos",headers:{"Content-Type":"application/json"},data:t};o(r).then((function(o){console.log(JSON.stringify(o.data)),f()}))["catch"]((function(o){console.log(o)}))}function w(o){console.log("Valor do ID: "+o),o>0?g(o):m(),p.editando=!1,p.cadastroProduto.ID=0}function x(o){p.editando=!1,p.cadastroProduto.ID=0;var t={ID:o.ID},e={method:"delete",maxBodyLength:1/0,url:p.baseApiHTTPS+"/mercadoprodutos",headers:{"Content-Type":"application/json"},data:t};(0,c.Z)(e).then((function(o){console.log(JSON.stringify(o.data)),f()}))["catch"]((function(o){console.log(o)}))}function h(){if(p.itensCadastro){var o=p.itensCadastro.map((function(o){return o.VALOR_CUSTO*o.QTDE_ESTOQUE})),t=0;for(var e in o)t+=o[e];return T(t,2)}}var S=["Mercearia","Bebidas","Cigarros","Diversos","Frios","Limpeza"];function A(o){if(p.itensCadastro){p.itensCadastro;var t=p.itensCadastro.filter((function(t){return t.CATEGORIA==o})).map((function(o){return o.VALOR_CUSTO*o.QTDE_ESTOQUE})),e=0;for(var r in t)e+=t[r];return T(e,2)}}function T(o){var t=o;return t&&t.toString().includes(",")&&(t=t.toString().replace(",",".")),parseFloat(t).toFixed(2).replace(".",",").replace(/(\d)(?=(\d{3})+\,)/g,"$1.")}return function(o,t){var e=(0,a.up)("v-client-table");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,l.SU)(p).itensDetalhe?((0,a.wg)(),(0,a.iD)("div",Q,[(0,a.Wm)(L)])):(0,a.kq)("",!0),(0,l.SU)(p).itensDetalhe?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",M,[B,(0,l.SU)(p).editando?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",z,[(0,a._)("div",G,[F,(0,a._)("div",H,(0,i.zw)(h()),1)])])),(0,l.SU)(p).editando?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",j,[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(S,(function(o,t){return(0,a._)("div",Z,[(0,a._)("div",q,[(0,a._)("span",W,(0,i.zw)(o),1),(0,a._)("div",J,(0,i.zw)(A(o)),1)])])})),64))])),(0,l.SU)(p).editando?((0,a.wg)(),(0,a.iD)("div",$,[(0,a._)("div",Y,[(0,a._)("div",K,[(0,a._)("div",X,[oo,(0,a._)("div",to,[(0,a._)("div",null,[(0,a._)("div",eo,[(0,a._)("div",ro,[no,(0,a._)("div",null,[(0,a.wy)((0,a._)("select",{class:"form-control",style:{height:"44px",width:"130px"},"onUpdate:modelValue":t[0]||(t[0]=function(o){return(0,l.SU)(p).cadastroProduto.CATEGORIA=o})},Oo,512),[[s.bM,(0,l.SU)(p).cadastroProduto.CATEGORIA]])])]),(0,a._)("div",vo,[fo,(0,a._)("div",null,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[1]||(t[1]=function(o){return(0,l.SU)(p).cadastroProduto.CODIGO_BARRAS=o}),type:"text",id:"CODIGO_BARRAS",class:"form-control",placeholder:"CODIGO_BARRAS"},null,512),[[s.nr,(0,l.SU)(p).cadastroProduto.CODIGO_BARRAS]])])]),(0,a._)("div",_o,[Co,(0,a._)("div",null,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[2]||(t[2]=function(o){return(0,l.SU)(p).cadastroProduto.NOME=o}),type:"text",id:"NOME",class:"form-control",placeholder:"NOME"},null,512),[[s.nr,(0,l.SU)(p).cadastroProduto.NOME]])])])]),(0,a._)("div",go,[(0,a._)("div",mo,[wo,(0,a._)("div",null,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[3]||(t[3]=function(o){return(0,l.SU)(p).cadastroProduto.FOTO=o}),type:"text",id:"FOTO",class:"form-control",placeholder:"FOTO"},null,512),[[s.nr,(0,l.SU)(p).cadastroProduto.FOTO]])])])]),(0,a._)("div",xo,[(0,a._)("div",ho,[So,(0,a._)("div",null,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[4]||(t[4]=function(o){return(0,l.SU)(p).cadastroProduto.DESCRICAO=o}),type:"text",id:"DESCRICAO",class:"form-control",placeholder:"DESCRICAO"},null,512),[[s.nr,(0,l.SU)(p).cadastroProduto.DESCRICAO]])])]),(0,a._)("div",Ao,[To,(0,a._)("div",null,[(0,a.wy)((0,a._)("select",{class:"form-control","onUpdate:modelValue":t[5]||(t[5]=function(o){return(0,l.SU)(p).cadastroProduto.SITUACAO=o})},Ro,512),[[s.bM,(0,l.SU)(p).cadastroProduto.SITUACAO]])])]),(0,a._)("div",Uo,[ko,(0,a._)("div",null,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[6]||(t[6]=function(o){return(0,l.SU)(p).cadastroProduto.VALOR=o}),type:"text",id:"VALOR",class:"form-control",placeholder:"VALOR"},null,512),[[s.nr,(0,l.SU)(p).cadastroProduto.VALOR]])])]),(0,a._)("div",bo,[Po,(0,a._)("div",null,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[7]||(t[7]=function(o){return(0,l.SU)(p).cadastroProduto.VALOR_CUSTO=o}),type:"text",id:"VALOR_CUSTO",class:"form-control",placeholder:"VALOR_CUSTO"},null,512),[[s.nr,(0,l.SU)(p).cadastroProduto.VALOR_CUSTO]])])]),(0,a._)("div",Io,[Vo,(0,a._)("div",null,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[8]||(t[8]=function(o){return(0,l.SU)(p).cadastroProduto.QTDE_ESTOQUE=o}),type:"text",id:"QTDE_ESTOQUE",class:"form-control",placeholder:"QTDE_ESTOQUE"},null,512),[[s.nr,(0,l.SU)(p).cadastroProduto.QTDE_ESTOQUE]])])])]),(0,a._)("button",{onClick:t[9]||(t[9]=function(o){return w((0,l.SU)(p).cadastroProduto.ID)}),type:"",class:"btn btn-primary mt-3"},"CONFIRMAR"),(0,a._)("button",{style:{"margin-left":"10px"},onClick:t[10]||(t[10]=function(o){return(0,l.SU)(p).editando=!1}),type:"",class:"btn btn-danger mt-3"},"CANCELAR")])])])])])])):(0,a.kq)("",!0),(0,l.SU)(p).editando?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",{key:3,onClick:t[11]||(t[11]=function(o){(0,l.SU)(p).editando=!0,(0,l.SU)(p).cadastroProduto=[],(0,l.SU)(p).cadastroProduto.ID=0})},Lo)),(0,l.SU)(p).editando?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",Qo,[(0,a._)("div",null,[(0,a._)("div",Mo,[(0,a._)("div",Bo,[(0,a.Wm)(e,{data:(0,l.SU)(p).itensCadastro,columns:O.value,options:v.value},{progress:(0,a.w5)((function(o){return[(0,a._)("div",zo,[(0,a._)("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":o.row.progress.count,"aria-valuenow":"100",class:(0,i.C_)(["progress-bar","bg-"+o.row.progress["class"]]),style:(0,i.j5)({width:o.row.progress.count+"%"})},null,14,Go)])]})),salary:(0,a.w5)((function(o){return[(0,a.Uk)(" $"+(0,i.zw)(o.row.salary),1)]})),actions:(0,a.w5)((function(o){return[(0,a._)("div",Fo,[(0,a._)("a",Ho,[((0,a.wg)(),(0,a.iD)("svg",jo,Jo))]),(0,a._)("ul",$o,[(0,a._)("li",null,[(0,a._)("a",{href:"javascript:void(0);",class:"dropdown-item",onClick:function(t){return _(o.row)}}," view ",8,Yo)]),(0,a._)("li",{onClick:function(t){return C(o.row)}},ot,8,Ko),(0,a._)("li",{onClick:function(t){return x(o.row)}},rt,8,tt)])])]})),_:1},8,["data","columns","options"])])])])]))]))],64)}}},at=nt,lt=at},6991:(o,t,e)=>{e.r(t),e.d(t,{default:()=>j});var r=e(6252),n={style:{"background-color":"red",height:"50px"}},a=(0,r._)("h1",{style:{color:"white","text-align":"center",padding:"5px","font-size":"30px"}}," MERCEARIA BRAGATTO - CAIXA ",-1),l=[a];function i(o,t,e,a,i,s){return(0,r.wg)(),(0,r.iD)("div",n,l)}const s={};var d=e(3744);const c=(0,d.Z)(s,[["render",i]]),u=c;var p=e(3577),O=e(2262),v=e(1499),f={style:{"background-color":"red",height:"90px"}},_={style:{color:"white","text-align":"right",padding:"0px 50px 0px 0px","font-size":"60px",bottom:"0"}};const C={__name:"RodapeTotal",setup:function(o){var t=(0,v.D)();return function(o,e){return(0,r.wg)(),(0,r.iD)("div",f,[(0,r._)("div",_,[(0,r.Uk)(" Total: R$ "+(0,p.zw)((0,O.SU)(t).formataDinheiro((0,O.SU)(t).somaCaixa,2))+" ",1),(0,r._)("span",{style:{"font-size":"10px",color:"green","background-color":"white"},onClick:e[0]||(e[0]=function(o){return(0,O.SU)(t).recursos.telaCaixaConfirmar=!0})}," Confirmar ")])])}}},g=C,m=g;var w=e(8534),x=(e(561),e(7327),e(1539),e(1249),e(8862),e(5666),e(9963)),h=e(8433),S={style:{"font-size":"40px"}},A={style:{"font-size":"40px"}},T={style:{}},E=["onClick"],y=(0,r._)("polyline",{points:"3 6 5 6 21 6"},null,-1),D=(0,r._)("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},null,-1),R=(0,r._)("line",{x1:"10",y1:"11",x2:"10",y2:"17"},null,-1),U=(0,r._)("line",{x1:"14",y1:"11",x2:"14",y2:"17"},null,-1),k=[y,D,R,U],b=["value"],P={key:0,style:{"background-color":"red",color:"white",padding:"10px","text-align":"center",display:"flex",margin:"10px","justify-content":"center"}},I={key:0,style:{"font-size":"23px",padding:"5px"}};const V={__name:"ListagemProdVenda",setup:function(o){var t=(0,v.D)();t.CaixaProdutos.QTDE=1,t.CaixaProdutos.DESCONTO=0,t.VendaEnviada=!1;var e=[],n=function(){var o=(0,w.Z)(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,h.Z.get(t.baseApiHTTPS+"/mercadoprodutos");case 2:r=o.sent,e.push(r.data);case 4:case"end":return o.stop()}}),o)})));return function(){return o.apply(this,arguments)}}();n();var a=function(o){console.log(o),t.CaixaProdutos.splice(o,1),i()},l=function(o){var r;console.log(o);var n,a,l=function(t){return t.CODIGO_BARRAS==o},s=e[0].filter(l);(console.log(s),(null===(r=s[0])||void 0===r?void 0:r.CODIGO_BARRAS)==o)&&(t.CaixaProdutos.push({COD_PRODUTO:o,NOME:null===(n=s[0])||void 0===n?void 0:n.NOME,QTDE:t.CaixaProdutos.QTDE,VALOR:(null===(a=s[0])||void 0===a?void 0:a.VALOR)*t.CaixaProdutos.QTDE,DESCONTO:t.CaixaProdutos.DESCONTO}),i(),t.CaixaProdutos.QTDE=1,t.CaixaProdutos.DESCONTO=0)};function i(){var o=t.CaixaProdutos.map((function(o){return o.VALOR-o.DESCONTO})),e=0;for(var r in o)e+=o[r];return t.somaCaixa=e,e}var s=function(){var o=(0,w.Z)(regeneratorRuntime.mark((function o(){var e,r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:t.CaixaProdutos.length>0&&0==t.VendaEnviada&&(e={COD_CLIENTE:999,COD_ENDERECO:1,VALOR:t.somaCaixa,TROCO:t.vendaCaixa.valorTroco,DESCONTO:t.vendaCaixa.descontos,ITENS:t.CaixaProdutos},console.log(e),r={method:"post",maxBodyLength:1/0,url:t.baseApiHTTPS+"/mercadovendas",headers:{"Content-Type":"application/json"},data:e},t.VendaEnviada=!0,(0,h.Z)(r).then((function(o){console.log(JSON.stringify(o.data)),t.CaixaProdutos=[],window.location.href=window.location.href}))["catch"]((function(o){console.log(o)})));case 1:case"end":return o.stop()}}),o)})));return function(){return o.apply(this,arguments)}}();return function(o,e){var n=(0,r.Q2)("focus");return(0,r.wg)(),(0,r.iD)(r.HY,null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,O.SU)(t).CaixaProdutos,(function(o,e){return(0,r.wg)(),(0,r.iD)("div",{key:e,style:{display:"flex","justify-content":"space-between","font-size":"40px"}},[(0,r._)("div",S,(0,p.zw)(o.QTDE)+" - "+(0,p.zw)(o.NOME),1),(0,r._)("div",A," R$ "+(0,p.zw)((0,O.SU)(t).formataDinheiro(o.VALOR,2)),1),(0,r._)("div",T,[((0,r.wg)(),(0,r.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-trash-2 icon",onClick:function(o){return a(e)}},k,8,E))])])})),128)),(0,r._)("div",null,[(0,r.Uk)(" Qtde: "),(0,r.wy)((0,r._)("input",{type:"number",ref:"myinput",style:{width:"60px"},"onUpdate:modelValue":e[0]||(e[0]=function(o){return(0,O.SU)(t).CaixaProdutos.QTDE=o}),placeholder:"novo produto"},null,512),[[n],[x.nr,(0,O.SU)(t).CaixaProdutos.QTDE]]),(0,r.Uk)(" Desconto "),(0,r.wy)((0,r._)("input",{type:"number",ref:"myinput",style:{width:"50px"},"onUpdate:modelValue":e[1]||(e[1]=function(o){return(0,O.SU)(t).CaixaProdutos.DESCONTO=o}),placeholder:"novo produto"},null,512),[[n],[x.nr,(0,O.SU)(t).CaixaProdutos.DESCONTO]]),(0,r.Uk)(" Codigo de Barras "),(0,r.wy)((0,r._)("input",{type:"text",ref:"myinput",value:(0,O.SU)(t).CaixaProdutos.codProduto,onInput:e[2]||(e[2]=function(o){return(0,O.SU)(l)(o.target.value)}),placeholder:"novo produto"},null,40,b),[[n]])]),(0,O.SU)(t).recursos.telaCaixaConfirmar?((0,r.wg)(),(0,r.iD)("div",P,[(0,r._)("div",null,[(0,r.Uk)(" Valor do Dinheiro: "),(0,r.wy)((0,r._)("input",{style:{"text-align":"center",width:"70px",padding:"5px"},"onUpdate:modelValue":e[3]||(e[3]=function(o){return(0,O.SU)(t).vendaCaixa.valorPago=o}),type:"number",placeholder:"valor Dinheiro"},null,512),[[x.nr,(0,O.SU)(t).vendaCaixa.valorPago]])]),(0,O.SU)(t).vendaCaixa.valorPago>0?((0,r.wg)(),(0,r.iD)("div",I," TROCO: "+(0,p.zw)((0,O.SU)(t).formataDinheiro((0,O.SU)(t).vendaCaixa.valorPago-i(),2)),1)):(0,r.kq)("",!0),(0,r._)("div",{style:{padding:"8px"}},[(0,r._)("button",{onClick:s},"VENDER")])])):(0,r.kq)("",!0)],64)}}},N=V,L=N;var Q={style:{height:"100vh"}},M={style:{position:"fixed","margin-left":"98%"}},B=(0,r._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:""},[(0,r._)("circle",{cx:"12",cy:"12",r:"3"}),(0,r._)("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})],-1),z={class:"conteudo",style:{height:"80vh",padding:"0px 40px 0px 40px"}},G={style:{}};const F={__name:"Caixa",setup:function(o){(0,v.D)();return function(o,t){var e=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",Q,[(0,r._)("div",M,[(0,r.Wm)(e,{class:"button is-light",to:"/itens"},{default:(0,r.w5)((function(){return[B]})),_:1})]),(0,r._)("div",null,[(0,r.Wm)(u)]),(0,r._)("div",z,[(0,r.Wm)(L)]),(0,r._)("div",G,[(0,r.Wm)(m)])])}}},H=F,j=H}}]);
//# sourceMappingURL=index2.7fbce159.js.map