<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 我的科研</el-breadcrumb-item>
                <el-breadcrumb-item>论文测试</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="handle-box">
            <el-button type="primary" icon="delete" class="handle-del mr10" @click="delAll">批量删除</el-button>
            
            <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>
            <el-button type="primary" icon="search" @click="search">搜索</el-button>
        </div>
        <el-table :data="data" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="author" label="作者" sortable width="150">
            </el-table-column>
            <el-table-column prop="papername" label="论文题目" width="120">
            </el-table-column>
            <el-table-column prop="journal" label="发表期刊" :formatter="formatter">
            </el-table-column>
            <el-table-column prop="paperdate" label="发表时间" :formatter="formatter">
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template slot-scope="scope">
                    <el-button size="small"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination
                    @current-change ="handleCurrentChange"
                    layout="prev, pager, next"
                    :total="300">
            </el-pagination>
        </div>
    </div>
</template>

<script>
  export default {
    
    data() {
            return {
                url: '../../../../static/vuetable.json',
                tableData: [],
                cur_page: 1,
                multipleSelection: [],
                select_cate: '',
                select_word: '',
                del_list: [],
                is_search: false
            }
        },
        created(){
           //this.getData();
           this.tableData=[{author:'tom',papername:'this is a test',journal:'aaa',paperdate:'2018-02-05'},{}];
           console.log(this.tableData);
            
            
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