<template>
    <div class="table" >
      <div v-show="paperlistshow">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i>毕业论文</el-breadcrumb-item>
                <el-breadcrumb-item>学生论文</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="handle-box">
            <el-button type="primary" icon="delete" class="handle-del mr10" @click="delAll">批量删除</el-button>
            
            <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>
            <el-button type="primary" icon="search" @click="search">搜索</el-button>
        </div>
        <el-table :data="tableData" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="username" label="学号" sortable width="150">
            </el-table-column>
            <el-table-column prop="stuname" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="stuclass" label="班级" width="120">
            </el-table-column>
            <el-table-column prop="stuyear" label="年级" width="120">
            </el-table-column>
            <el-table-column prop="papertitle" label="论文题目" :formatter="formatter">
            </el-table-column>
            
            <el-table-column label="操作" width="180">
                <template slot-scope="scope">
                    <el-button size="small" type="primary"
                            @click="handleEdit(scope.$index, scope.row)">详细信息</el-button>
                    <!--<el-button size="small" type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>-->
                </template>
            </el-table-column>
        </el-table>
        
        <!--<div class="pagination">
            <el-pagination
                    @current-change ="handleCurrentChange"
                    layout="prev, pager, next"
                    :total="300">
            </el-pagination>
        </div>-->
        </div>
    
    </div>
    
</template>

<script>
  
  export default {
        
        
        data(){
          
          return{
            son_username:'',
            tableData:[],
            detail: false,
            paperlistshow: true
            
          }
          
        },
        created(){
           
            this.getData();
            
        },
        
        methods:{
          
          
          handleEdit(index, row){
            
            localStorage.setItem('stuinfo',row.username);
            this.$router.replace('/teapaperofstu');
            this.$message('编辑第'+(index+1)+row.username+'行');
            
             
          },
          getData(){
                let self = this;
                //if(process.env.NODE_ENV === 'development'){
                //    self.url = '/static/vuetable.json';//'/ms/table/list';
                //};
                let username = localStorage.getItem('ms_username');
                let data={'username':username}
                //这里用Get,可以获取到本地的json文件中的内容。
                self.$axios.post('http://zilizhou.vicp.net:15931/getpapers', data).then((res) => {
                  
                    //self.tableData = res.data.list;
                    self.tableData=res.data.data;
                    console.log(self.tableData);
                    
                    
                    
                })
            
            
          }
          
        }
    }
  
  
  
</script>



<style scoped>
.handle-box{
    margin-bottom: 20px;
}
.handle-select{
    width: 120px;
}
.handle-input{
    width: 300px;
    display: inline-block;
}
</style>