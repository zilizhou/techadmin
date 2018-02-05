import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../components/common/Home.vue'], resolve)
      //name: 'HelloWorld',
      //component: HelloWorld
    },
    {
      path :'/readme',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      children:[
        {
          path:'/baseform',
          component: resolve => require(['../components/page/BaseForm.vue'], resolve)
          
          
        },
        {
          path:'/basetable',
          component: resolve => require(['../components/page/BaseTable.vue'], resolve)
          
          
        },
        
        {
          path:'/papertable',
          component: resolve => require(['../components/page/PaperTable.vue'], resolve)
          
          
        },
        
        {
          path:'/stupapertable',
          component: resolve => require(['../components/page/StuPaper.vue'], resolve)
          
          
        },
        {
          path:'/personinfo',
          component: resolve => require(['../components/page/PersonInfo.vue'], resolve)
          
          
        }
        
        
        
      ]
      
      
      
    }
    
    
    
  ]
})