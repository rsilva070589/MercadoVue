<template>
    <div class="layout-px-spacing" style="margin-top: -100px;">
        <h1 class="text-2xl font-medium mx-2" data-testid="statements-title-txt">Cadastro dos Itens</h1>
        <div> 
</div>
        
        <div v-if="store.editando">
        
            <div class="row layout-top-spacing"
                           > 
                     
          <div class="col-xl-10 col-lg-6 col-md-6 col-sm-10 col-10" style="margin-bottom: 24px">
                <div class="statbox panel box box-shadow">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h4>Cadastro de Itens</h4>
                            </div>
                        </div>   
                    </div>
                    <div class="panel-body">
                        <div > 
                        
                            <div class="row">
                                <div class="form-group col-md-2">
                                    <label class="col-form-label pt-0" for="CATEGORIA">CATEGORIA</label>
                                    <div>
                                        <select class="form-control" style="height: 44px; width: 130px;" v-model="store.cadastroProduto.CATEGORIA">
                                            <option disabled value="">Selecione</option>
                                            <option>Mercearia</option>
                                            <option>Limpeza</option>     
                                            <option>Bebidas</option>  
                                            <option>Diversos</option>   
                                            <option>Cigarros</option>                                        
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group col-md-2">
                                    <label class="col-form-label pt-0" for="CODIGO_BARRAS">CODIGO_BARRAS</label>
                                    <div>
                                        <input  v-model="store.cadastroProduto.CODIGO_BARRAS" type="text" id="CODIGO_BARRAS" class="form-control" placeholder="CODIGO_BARRAS" />
                                    </div>
                                </div>
                                <div class="form-group col-md-8">
                                    <label class="col-form-label pt-0" for="NOME">NOME</label>
                                    <div>
                                        <input v-model="store.cadastroProduto.NOME"  type="text" id="NOME" class="form-control" placeholder="NOME" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-12">
                                    <label class="col-form-label pt-0" for="FOTO">FOTO</label>
                                    <div>
                                        <input  v-model="store.cadastroProduto.FOTO" type="text" id="FOTO" class="form-control" placeholder="FOTO" />
                                    </div>
                                </div>                           
                            </div>
                            <div class="row">
                                <div class="form-group col-md-4">
                                    <label class="col-form-label pt-0" for="NOME">DESCRICAO</label>
                                    <div>
                                        <input v-model="store.cadastroProduto.DESCRICAO"  type="text" id="DESCRICAO" class="form-control" placeholder="DESCRICAO" />
                                    </div>
                                </div>
                                <div class="form-group col-md-2">
                                    <label class="col-form-label pt-0" for="password">SITUACAO</label>
                                    <div>
                                        <select class="form-control"   v-model="store.cadastroProduto.SITUACAO">
                                            <option disabled value="">Selecione</option>
                                            <option>ATIVADO</option>
                                            <option>DESATIVADO</option>                                            
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group col-md-2">
                                    <label class="col-form-label pt-0" for="password">VALOR</label>
                                    <div>
                                        <input v-model="store.cadastroProduto.VALOR"  type="text" id="VALOR" class="form-control" placeholder="VALOR" />
                                    </div>
                                </div>
                                <div class="form-group col-md-2">
                                    <label class="col-form-label pt-0" for="password">VALOR_CUSTO</label>
                                    <div>
                                        <input v-model="store.cadastroProduto.VALOR_CUSTO"  type="text" id="VALOR_CUSTO" class="form-control" placeholder="VALOR_CUSTO" />
                                    </div>
                                </div> 
                            </div>
                          
                   

                        

                            <button @click="confirmar(store.cadastroProduto.ID)" type="" class="btn btn-primary mt-3">CONFIRMAR</button>
                            <button style="margin-left: 10px;" @click="store.editando = false " type="" class="btn btn-danger mt-3">CANCELAR</button>
                      
                        </div>
                    </div>
                </div>
            </div>

             
        </div>
        </div>
 
<div
        v-if="!store.editando"
         @click="store.editando = true; 
                      store.cadastroProduto = [];
                      store.cadastroProduto.ID=0">

    <svg version="1.1" id="Capa_1" width="30px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 50 50" xml:space="preserve">
        <circle style="fill:#43B05C;" cx="25" cy="25" r="25"/>
        <line style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="25" y1="13" x2="25" y2="38"/>
        <line style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="37.5" y1="25" x2="12.5" y2="25"/>
    </svg>
</div>
        
        <div v-if="!store.editando">
            <div  >
              
                <div class="panel br-0 p-0 mt-0">
                    <div class="custom-table">
                        <v-client-table :data="store.itensCadastro" :columns="columns1" :options="table_option1">
                        
                            <template #progress="props">
                                <div class="progress">
                                    <div
                                        role="progressbar"
                                        aria-valuemin="0"
                                        :aria-valuemax="props.row.progress.count"
                                        aria-valuenow="100"
                                        class="progress-bar"
                                        :class="'bg-' + props.row.progress.class"
                                        :style="{ width: props.row.progress.count + '%' }"
                                    ></div>
                                </div>
                            </template>
                            <template #salary="props"> ${{ props.row.salary }} </template>
                            <template #actions="props">
                                <div class="me-2 custom-dropdown dropdown btn-group">
                                    <a class="btn dropdown-toggle btn-icon-only" href="#" role="button" id="pendingTask" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            style="width: 24px; height: 24px"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-more-horizontal"
                                        >
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                        </svg>
                                    </a>

                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item" @click="view_row1(props.row)"> view </a>
                                        </li>
                                        <li @click="selectItemEdit(props.row)">
                                            <a href="javascript:void(0);" class="dropdown-item"> Edit </a>
                                        </li>
                                        <li @click="deleteItem(props.row)">
                                            <a href="javascript:void(0);" class="dropdown-item"> Delete </a>
                                        </li>
                                    </ul>
                                </div>
                            </template>
                        </v-client-table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {indexStore} from '../../store/IndexStore' 
    import { onMounted, ref } from 'vue';
    import axios from 'axios'
    import { useMeta } from '@/composables/use-meta';
    useMeta({ title: 'Multiple Tables' });
    const store = indexStore(); 
    const code_arr = ref([]);
    //table 1
   

    //table 2
    const columns1 = ref(['actions','ID', 'CATEGORIA', 'CODIGO_BARRAS', 'NOME' ,'VALOR','VALOR_CUSTO','SITUACAO']);
    const items1 = store.itensCadastro;
    const table_option1 = ref({
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        skin: 'table ',
        columnsClasses: { actions: 'actions text-center' },
        sortable: [],
        pagination: { nav: 'scroll', chunk: 5 },
        texts: {
            count: 'Showing {from} to {to} of {count}',
            filter: '',
            filterPlaceholder: 'Search...',
            limit: 'Results:',
        },
        sortable: ['ID', 'AMBIENTE', 'TIPO', 'NOMENCLATURA', 'VLR_UNITARIO' ],
        sortIcon: {
            base: 'sort-icon-none',
            up: 'sort-icon-asc',
            down: 'sort-icon-desc',
        },
        resizableColumns: false,
    });

    onMounted(() => {
        bind_data();
    });

    const bind_data = async  () => {
        store.itensCadastro = []
       var result = await axios.get(store.baseApiHTTPS+'/mercadoprodutos') 
      
    
        //table 2
        console.log(result.data)
        store.itensCadastro =  result.data

    }
    //table 2
    const view_row1 = (item) => {
        alert('ID: ' + item1.value.ID + ', Name: ' + item1.value.NOMENCLATURA);
    };

    function selectItemEdit (props) {
        store.editando = true
        console.log(props)
        
        store.cadastroProduto.ID = props.ID,
        store.cadastroProduto.CATEGORIA = props.CATEGORIA,
        store.cadastroProduto.CODIGO_BARRAS = props.CODIGO_BARRAS, 
        store.cadastroProduto.DESCRICAO = props.DESCRICAO, 
        store.cadastroProduto.FOTO = props.FOTO, 
        store.cadastroProduto.NOME = props.NOME, 
        store.cadastroProduto.SITUACAO = props.SITUACAO, 
        store.cadastroProduto.VALOR = props.VALOR,
        store.cadastroProduto.VALOR_CUSTO = props.VALOR_CUSTO
    }


    function editItem(id){        
        console.log('Editando Item ID: '+id)
        console.log('NOMENCLATURA '+ store.cadastroProduto.NOMENCLATURA)
        
    var data = 
    JSON.stringify ( { 
                        "ID": id, 
                        "CATEGORIA":   store.cadastroProduto.CATEGORIA     , 
                        "CODIGO_BARRAS": store.cadastroProduto.CODIGO_BARRAS, 
                        "DESCRICAO": store.cadastroProduto.DESCRICAO, 
                        "FOTO": store.cadastroProduto.FOTO, 
                        "NOME": store.cadastroProduto.NOME, 
                        "SITUACAO": store.cadastroProduto.SITUACAO, 
                        "VALOR": store.cadastroProduto.VALOR, 
                        "VALOR_CUSTO": store.cadastroProduto.VALOR_CUSTO 
                    } 
             )

    var config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: store.baseApiHTTPS+'/mercadoprodutos/'+id,
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        bind_data()
        })
        .catch(function (error) {
        console.log(error);
        });

 }

 function createItem(){
    console.log('Cadastrando Novo Item')
    var axios = require('axios');
    console.log(store.cadastroProduto.AMBIENTE)
var data = JSON.stringify( 
            {  
            "CATEGORIA":   store.cadastroProduto.CATEGORIA     , 
            "CODIGO_BARRAS": store.cadastroProduto.CODIGO_BARRAS, 
            "DESCRICAO":        store.cadastroProduto.DESCRICAO, 
            "FOTO": store.cadastroProduto.FOTO, 
            "NOME": store.cadastroProduto.NOME, 
            "SITUACAO": store.cadastroProduto.SITUACAO, 
            "VALOR": store.cadastroProduto.VALOR, 
            "VALOR_CUSTO": store.cadastroProduto.VALOR_CUSTO 
            } 
 );

var config = {
  method: 'post',
maxBodyLength: Infinity,
  url: store.baseApiHTTPS+'/mercadoprodutos',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  bind_data()
})
.catch(function (error) {
  console.log(error);
});

 }

 function confirmar (id) {
    console.log('Valor do ID: ' + id)
    if (id > 0) {
        editItem(id)
    }else{
        createItem()
    }
    store.editando = false
    store.cadastroProduto.ID=0
    
     
    
 }

 function deleteItem(props){
    store.editando = false
    store.cadastroProduto.ID=0
    
    var data =   {"ID" : props.ID}  

                var config = {
                method: 'delete',
                maxBodyLength: Infinity,
                url: store.baseApiHTTPS+'/mercadoprodutos',
                headers: { 
                    'Content-Type': 'application/json'
                },
                data : data
                };

                axios(config)
                .then(function (response) {
                console.log(JSON.stringify(response.data));
                bind_data()
                })
                .catch(function (error) {
                console.log(error);
                });

 }


</script>
