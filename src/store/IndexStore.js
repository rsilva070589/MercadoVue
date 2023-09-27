import { ref } from 'vue' 
import { defineStore } from 'pinia';
 

export const indexStore = defineStore("rotas", () =>{
    const rotas = ref({ 
    }); 

    const recursos = []

   //const baseApiHTTPS  = 'https://json-replace-oracle-production.up.railway.app'
   
   //const baseApiHTTPS  = 'http://192.168.1.103:4141'
   const baseApiHTTPS  = 'http://'+location.hostname+':4141'
   

   //const baseApiHTTPS  = 'http://35.226.231.200:4040'

    const dadosItens = []

    const dadosItensFiltro = []

    const ambiente = []

    const itensTipo = []     

    const itensSelecao = [ { AMBIENTE: null, 
                                TIPO: null, 
                                OPCIONAL: null, 
                                DESCRICAO: null,
                                PRECO_TOTAL: null ,
                                 ID_ITEM: null 
                        } ]

    const usuarioLogado = false                

    const BoxOpen = null

    const AmbienteOpen = null

    const ilhaBalcao = null
    

    const itemSelecionado = null

    const dadosEmpresa = {} 

    const imagens = []

    const itensCadastro = []

    const cadastroProduto = {
        ID: 0,
        CATEGORIA: 0,
        CODIGO_BARRAS: 0, 
        DESCRICAO: 0,
        FOTO: 0,
        NOME: 0, 
        SITUACAO: 0,
        VALOR: 0,  
        VALOR_CUSTO: 0, 
        QTDE_ESTOQUE: 0
        } 
    
        const CaixaProdutos = ref ([])

        function formataDinheiro(item) {
            let venda = item;
            if (!!venda && venda.toString().includes(",")) {
              venda = venda.toString().replace(",", ".");
            }
            return parseFloat(venda)
              .toFixed(2)
              .replace(".", ",")
              .replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
          }
 
          const vendaCaixa = {
            sequenciaVenda: null,
            formaPgto: null, 
            valorTotalItens: 0,
            valorTroco: 0,
            descontos: 0,
            itensPedido: null,
            valorPago: null,
        }

       const  itensRelVendas = [ {
        ID: 0,
        DATA: null,
        COD_PRODUTO:null,
        NOME:null,
        QTDE:null,
        VALOR : null,
        CUSTO : null,
        LUCRO : null,
        PERC_LUCRO : null
       } ]
    
       const somaCaixa = 0

       const itensRelDemanda = []

       const compras = {
        NOTA: null,
        DATA_EMISSAO: null,
        FORNECEDOR: null,
        TOTAL_NOTA: null,
        ITENS: []
       }

       const compraItens = {
        CODIGO_BARRAS: null,
        QTDE: null,
        VALOR_CUSTO: null
       }

       const tipoVenda =  null

    return {
        rotas,        
        dadosEmpresa,
        dadosItens,
        ambiente,
        itensTipo,
        itensSelecao,
        itemSelecionado,
        BoxOpen,
        AmbienteOpen,
        imagens,
        ilhaBalcao,
        dadosItensFiltro,
        baseApiHTTPS,
        itensCadastro,
        cadastroProduto,
        usuarioLogado,
        CaixaProdutos,
        recursos,
        formataDinheiro,
        vendaCaixa,
        itensRelVendas,
        somaCaixa,
        itensRelDemanda,
        compras,
        compraItens,
        tipoVenda
    }
});


