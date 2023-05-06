<template> 
  
  <div v-for=" (p,index) in store.CaixaProdutos" :key="index"
        style="display: flex; 
        justify-content: space-between; font-size: 40px;
  
        ">
  <div style="font-size: 40px;">
    {{p.QTDE}} -  {{p.NOME}}
    </div>
   
    <div style="font-size: 40px; ">
       R$ {{store.formataDinheiro(p.VALOR,2)  }}
    </div>

    <div style=" ">
      <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-trash-2 icon"
                        @click="deleteItem(index)"
                    >
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
    </div>
    
    
  </div> 
 
<div>
Qtde: 
<input    type="number" 
          ref="myinput"
          style="width: 60px;"
          v-focus
          v-model="store.CaixaProdutos.QTDE" 
          placeholder="novo produto"
               
  />
  Desconto
  <input    type="number" 
          ref="myinput"
          style="width: 50px;"
          v-focus
          v-model="store.CaixaProdutos.DESCONTO" 
          placeholder="novo produto"
               
  />
 Codigo de Barras
<input     type="text" 
              ref="myinput"
              v-focus
              :value='store.CaixaProdutos.codProduto' 
              @input='evt=>incluirProduto(evt.target.value)'
              placeholder="novo produto"
               
  />


</div>

  

  <div 
       style="background-color: red; color: white; 
              padding: 10px; text-align: center; display: flex;
              margin: 10px;
              justify-content: center;
              " 
      v-if="store.recursos.telaCaixaConfirmar">
 
    <div>
      Valor do Dinheiro: <input style="text-align: center;width: 70px; padding: 5px;" v-model="store.vendaCaixa.valorPago"  
                          type="number" 
                          placeholder="valor Dinheiro">  
    </div> 

    <div style="font-size: 23px; padding: 5px;" v-if="store.vendaCaixa.valorPago > 0">
      TROCO: {{store.formataDinheiro(store.vendaCaixa.valorPago - somaCaixa(),2) }}
    </div>

    <div style="padding:8px;">
      <button @click="addVenda">VENDER</button>
    </div>
   
   
  </div>
  

</template>

<script setup>
 
import {indexStore} from '../../store/IndexStore' 
import axios from 'axios'
const store = indexStore(); 

store.CaixaProdutos.QTDE = 1
store.CaixaProdutos.DESCONTO=0
store.VendaEnviada = false

const produtos = [ ]
 
const getProdutos = (async () => { 
  const result = await axios.get(store.baseApiHTTPS+'/mercadoprodutos') 
    produtos.push(result.data)
  })
 
 getProdutos()
 
 const deleteItem = (index) => {
    console.log(index)
    store.CaixaProdutos.splice(index, 1);
    somaCaixa() 
 }
 
 
var incluirProduto = (codProduto) => {
 console.log(codProduto)
 
  const ItemSelectCaixa = p => p.CODIGO_BARRAS == codProduto
  const item  = produtos[0].filter(ItemSelectCaixa)
  
console.log(item)
  if (item[0]?.CODIGO_BARRAS == codProduto) { 
    store.CaixaProdutos.push({
                COD_PRODUTO: codProduto,
                NOME: item[0]?.NOME,
                QTDE: store.CaixaProdutos.QTDE,
                VALOR: item[0]?.VALOR * store.CaixaProdutos.QTDE,
                DESCONTO: store.CaixaProdutos.DESCONTO
    })
   
    
    somaCaixa() 
     store.CaixaProdutos.QTDE=1
    store.CaixaProdutos.DESCONTO=0
  }

    
}


function somaCaixa() {
  var somarProduto = store.CaixaProdutos.map(p =>{
                return (p.VALOR - p.DESCONTO)
              } )

  let totalProd = 0
  for(let i in somarProduto) {
           totalProd += somarProduto[i] 
          }
          store.somaCaixa = totalProd
          return totalProd
}
 

 const addVenda = async () => {
  if (store.CaixaProdutos.length > 0 && store.VendaEnviada == false) { 
 
   
var data = {   
      COD_CLIENTE: 999,
      COD_ENDERECO: 1,    
      VALOR: store.somaCaixa,
      TROCO: store.vendaCaixa.valorTroco, 
      DESCONTO: store.vendaCaixa.descontos,
      ITENS: store.CaixaProdutos
    }

console.log(data)

var config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: store.baseApiHTTPS+'/mercadovendas',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

store.VendaEnviada=true

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  store.CaixaProdutos = []
  window.location.href = window.location.href
})
.catch(function (error) {
  console.log(error);
});


}} 


</script>

<style>

</style>