<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 个人信息</el-breadcrumb-item>
                <el-breadcrumb-item>信息编辑</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form ref="form" :model="form" label-width="80px">
                
                <el-form-item label="用户名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="旧密码">
                    <el-input type="password" v-model="form.oldpsw" placeholder="请输入旧密码"></el-input>
                </el-form-item>
                <el-form-item label="新密码">
                    <el-input type="password"  v-model="form.newpsw" placeholder="请输入新密码"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-input type="password" v-model="form.abstracts" placeholder="请再输入一次密码"></el-input>
                </el-form-item>
                
                <el-form-item label="出生日期">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-col>
                    
                </el-form-item>
                <el-form-item label="电子邮箱">
                    <el-input v-model="form.journal"></el-input>
                </el-form-item>
                
                <el-form-item label="QQ">
                    <el-input v-model="form.page"></el-input>
                </el-form-item>
                
                
                <el-upload  
                    class="upload-demo"
                    drag
                    action="/api/posts/"
                    multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将论文拖到此处，或<em>点击上传</em></div>
                    <!--<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
                </el-upload>
                
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>


<script>
    export default {
        data: function(){
            return {
                form: {
                    name: '',
                    author: '',
                    keyword: '',
                    abstracts: '',
                    region:'',
                    date1:'',
                    journal:'',
                    page: ''
                }
            }
        },
        methods: {
            onSubmit() {
                this.$message.success('提交成功！');
            }
        }
    }
</script>