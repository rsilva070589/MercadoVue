<template>

    <div v-if="!store.itensDetalhe" class="layout-px-spacing" style="margin-top: -100px;">
        <span style="font-size: 30px; color: black;">
               Cadastro de Cartão
            </span> 
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
                                <h4>Cadastro de Cartões</h4>
                            </div>
                        </div>   
                    </div>
                    <div class="panel-body">
                        <div > 
                        
                            <div class="row">
                              
                                <div class="form-group col-md-2">
                                    <label class="col-form-label pt-0" for="DESCRICAO">DESCRICAO</label>
                                    <div>
                                        <input  v-model="store.cadastroCartao.DESCRICAO" type="text" id="DESCRICAO" class="form-control" placeholder="DESCRICAO" />
                                    </div>
                                </div>
                                <div class="form-group col-md-8">
                                    <label class="col-form-label pt-0" for="PERCENTUAL">PERCENTUAL</label>
                                    <div>
                                        <input v-model="store.cadastroCartao.PERCENTUAL"  type="number" id="PERCENTUAL" class="form-control" placeholder="PERCENTUAL" />
                                    </div>
                                </div>
                            </div>
                                              

                            <button @click="confirmar(store.cadastroCartao.ID)" type="" class="btn btn-primary mt-3">CONFIRMAR</button>
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
                      store.cadastroCartao = [];
                      store.cadastroCartao.ID=0">

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
                        <v-client-table :data="store.cartaoCadastro" :columns="columns1" :options="table_option1">
                        
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
    import { onMounted, ref, computed } from 'vue';
    import axios from 'axios'
    import { useMeta } from '@/composables/use-meta';
    
    useMeta({ title: 'Multiple Tables' });
    const store = indexStore(); 
    const code_arr = ref([]);
    //table 1
   

    //table 2
    const columns1 = ref(['actions','ID', 'DESCRICAO', 'PERCENTUAL']);
    const items1 = store.cartaoCadastro;
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
        sortable: ['ID', 'DESCRICAO', 'PERCENTUAL' ],
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
        store.cartaoCadastro = []
       var result = await axios.get(store.baseApiHTTPS+'/cartao')  
       result.data.map(x=> {
        const itens ={
            ID: x.id,
            DESCRICAO: x.descricao,
            PERCENTUAL: x.percendual         
       }
       store.cartaoCadastro.push(itens)
       })       
       console.log(store.cartaoCadastro)
        store.itensHistorico = []

    }
    //table 2
    const view_row1 =  (item1) => {       
   
        
        store.ItensSelecionadoDemanda = item1 ;
         
        //table 2
        console.log(item1)
        store.itensHistorico =  []
    };

    function selectItemEdit (props) {
        store.editando = true
        console.log(props)
        
        store.cadastroCartao.ID = props.ID,
        store.cadastroCartao.DESCRICAO = props.DESCRICAO,
        store.cadastroCartao.PERCENTUAL = props.PERCENTUAL
    }


    function editItem(id){        
        console.log('Editando Item ID: '+id)
        console.log('DESCRICAO '+ store.cadastroCartao.DESCRICAO)
        
    var data = 
    JSON.stringify ( { 
                        "ID": id, 
                        "DESCRICAO":   store.cadastroCartao.DESCRICAO, 
                        "PERCENTUAL": store.cadastroCartao.PERCENTUAL
                    } 
             )

    var config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: store.baseApiHTTPS+'/cartao/'+id,
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
var data = JSON.stringify( 
            {  
            "DESCRICAO":   store.cadastroCartao.DESCRICAO        , 
            "PERCENTUAL": store.cadastroCartao.PERCENTUAL
            } 
 );

var config = {
  method: 'post',
maxBodyLength: Infinity,
  url: store.baseApiHTTPS+'/cartao',
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
    store.cadastroCartao.ID=0
    
     
    
 }

 function deleteItem(props){
    store.editando = false
    store.cadastroCartao.ID=0
    
    var data =   {"ID" : props.ID}  

                var config = {
                method: 'delete',
                maxBodyLength: Infinity,
                url: store.baseApiHTTPS+'/cartao',
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
