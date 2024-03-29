import { createRouter, createWebHistory } from 'vue-router';
import { getAuth, onAuthStateChanged } from "@firebase/auth";

import Home from '../views/index.vue';
import store from '../store';


// Vue.use(VueRouter);
// import { createApp } from 'vue';
// const app = createApp();
// app.use(createRouter);

const routes = [
    //dashboard
    {
      path: '/',
      name: 'pdv',
      component: () => import(/* webpackChunkName: "index2" */ '../views/pdv/Caixa.vue'),
      meta: { layout: 'auth'  }, 
  },

    {
      path: '/vendas',
      name: 'RelVendas',
      component: () => import(/* webpackChunkName: "auth-login-boxed" */ '../views/vendasRel/vendasRel.vue'),
      meta: { layout: 'app'  }, 
    },

    {
      path: '/demanda',
      name: 'RelDemanda',
      component: () => import(/* webpackChunkName: "auth-login-boxed" */ '../views/demanda/demanda.vue'),
      meta: { layout: 'app'  }, 
    },
    
    {
      path: '/compras',
      name: 'Compras',
      component: () => import(/* webpackChunkName: "auth-login-boxed" */ '../views/compras/Compras.vue'),
      meta: { layout: 'app'  }, 
    },

    {
        path: '/itens',
        name: 'itens',
        component: () => import(/* webpackChunkName: "index2" */ '../views/itens/Itens.vue'),
        meta: { requiresAuth: true }, 
    },
    {
      path: '/cartao',
      name: 'Cartões',
      component: () => import(/* webpackChunkName: "index2" */ '../views/formaPagamento/FormaPagamento.vue'),
      meta: { requiresAuth: true }, 
  },
    {
      path: '/pdv',
      name: 'pdv',
      component: () => import(/* webpackChunkName: "index2" */ '../views/pdv/Caixa.vue'),
      meta: { requiresAuth: true }, 
  },

    //auth
   
    {
        path: '/auth/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "auth-login" */ '../views/auth/login.vue'),
        meta: { layout: 'app' },
    },
      
];

const router = new createRouter({
    // mode: 'history',
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 };
        }
    },
});

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const removeListener = onAuthStateChanged(
        getAuth(),
        (user) => {
          removeListener();
          resolve(user);
        }
  
      )
    })
  }
 

 
router.beforeEach(async(to,from, next)=> {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (1) {
            if(to.name == 'pdv' || to.name == 'login'){
                store.commit('setLayout', 'auth');
            }else{
                store.commit('setLayout', 'app');
            }
         
          next();
        }else { 
          store.commit('setLayout', 'auth');
          next("/auth/login")
        }
    }else {    
      next();
    }
  });

export default router;
