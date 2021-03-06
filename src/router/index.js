import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../components/common/Login.vue'], resolve)
      //name: 'HelloWorld',
      //component: HelloWorld
    },
    
    {
      path: '/stucellhome',
      component: resolve => require(['../components/common/StuCellHome.vue'], resolve)
      //name: 'HelloWorld',
      //component: HelloWorld
    },
    
    {
      path :'/student',
      component: resolve => require(['../components/common/StuHome.vue'], resolve),
      children:[
        {
          path:'/stubaseform',
          component: resolve => require(['../components/page/BaseForm.vue'], resolve)
          
          
        },
        {
          path:'/coursetable',
          component: resolve => require(['../components/page/BaseTable.vue'], resolve)
          
          
        },
        
        {
          path:'/paperofstu',
          component: resolve => require(['../components/page/PaperOfStu.vue'], resolve)
          
          
        },
        {
          path:'/stupersoninfo',
          component: resolve => require(['../components/page/PersonInfo.vue'], resolve)
          
          
        }
        ]
      
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
      path: '/teapaperofstu',
      component: resolve => require(['../components/page/TeaPaperOfStu.vue'], resolve)
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
          path:'/teapersoninfo',
          component: resolve => require(['../components/page/PersonInfo.vue'], resolve)
          
          
        }
        
        
        
      ]
      
      
      
    }
    
    
    
  ]
})
