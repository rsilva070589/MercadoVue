<template>
  
   
  <div v-for=" (p,index) in store.CaixaProdutos" :key="index"
        style="display: flex; 
        justify-content: space-between; font-size: 40px;
  
        ">
  <div style="font-size: 40px;">
    {{p.QTDE}} -  {{p.NOME}}
    </div>
   
    <div style="font-size: 40px;">
       R$ {{store.formataDinheiro(p.VALOR,2)  }}
    </div>
    
  </div> 
 


  <input     type="text" 
              ref="myinput"
              v-focus
              :value='store.CaixaProdutos.codProduto' 
              @input='evt=>incluirProduto(evt.target.value)'
              placeholder="novo produto"
               
  />

  <div class="card" style="background-color: red; color: white; padding: 10px; text-align: center;" 
      v-if="store.recursos.telaCaixaConfirmar">
 
    <div>
      Valor do Dinheiro: <input style="text-align: center;" v-model="store.vendaCaixa.valorPago" 
      
            type="number" 
            placeholder="valor Dinheiro">
    </div>

    <div style="font-size: 40px;" v-if="store.vendaCaixa.valorPago > 0">
      TROCO: {{store.formataDinheiro(store.vendaCaixa.valorPago - somaCaixa(),2) }}
    </div>

    <div>
      <button @click="addVenda">VENDER</button>
    </div>
   
  </div>

</template>

<script setup>
 
import {indexStore} from '../../store/IndexStore' 
import axios from 'axios'
const store = indexStore(); 



const produtos = [ ]
 
const getProdutos = (async () => { 
  const result = await axios.get('https://json-replace-oracle-production.up.railway.app/mercadoprodutos') 
    produtos.push(result.data)
  })
 
 getProdutos()
 
 
 
var incluirProduto = (codProduto) => {
 console.log(codProduto)
 
  const ItemSelectCaixa = p => p.CODIGO_BARRAS == codProduto
  const item  = produtos[0].filter(ItemSelectCaixa)
  
console.log(item)
  if (item[0]?.CODIGO_BARRAS == codProduto) { 
    store.CaixaProdutos.push({
                COD_PRODUTO: codProduto,
                NOME: item[0]?.NOME,
                QTDE: 1,
                VALOR: item[0]?.VALOR,
                DESCONTO: item[0]?.DESCONTO
    })
  }

    
}


function somaCaixa() {
  var somarProduto = store.CaixaProdutos.map(p =>{
                return (p.QTDE * p.VALOR)
              } )

  let totalProd = 0
  for(let i in somarProduto) {
           totalProd += somarProduto[i] 
          }
          return totalProd
}
 

 const addVenda = async () => {
  if (store.CaixaProdutos.length > 0) { 
 
   
var data = {   
      COD_CLIENTE: 999,
      COD_ENDERECO: 1,    
      VALOR: somaCaixa(),
      TROCO: store.vendaCaixa.valorTroco, 
      DESCONTO: store.vendaCaixa.descontos,
      ITENS: store.CaixaProdutos
    }

console.log(data)

var config = {
  method: 'post',
maxBodyLength: Infinity,
  url: 'https://json-replace-oracle-production.up.railway.app/mercadovendas',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  //store.CaixaProdutos = []
  //window.location.href = window.location.href
})
.catch(function (error) {
  console.log(error);
});


}} 


</script>

<style>

</style>