<template>
<div style="background-color: red; height: 90px;">


  <div style="color: white;
      text-align: right;
      padding: 0px 50px 0px 0px;
      font-size: 60px;
      bottom: 0;

  ">
 
        Total: R$ {{store.formataDinheiro(somaCaixa(),2)}}
        <span style="font-size: 10px; 
                      color: green; 
                      background-color: white;"
              @click="store.recursos.telaCaixaConfirmar=true"
              >
          Confirmar
        </span>
  </div>
 
</div>

  
</template>

<script setup>

import {indexStore} from '../../store/IndexStore' 
const store = indexStore(); 

function somaCaixa () {
  var somarProduto = store.CaixaProdutos.map(p =>{
                return (p.QTDE * p.VALOR)
              } )

  let totalProd = 0
  for(let i in somarProduto) {
           totalProd += somarProduto[i] 
          }
          return totalProd
}


 

 

</script>

<style>

</style>