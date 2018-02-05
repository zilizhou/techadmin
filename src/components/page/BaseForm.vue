<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 我的论文</el-breadcrumb-item>
                <el-breadcrumb-item>论文编辑</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form ref="form" :model="form" label-width="80px">
                
                <el-form-item label="论文题目">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="作者">
                    <el-input v-model="form.author" placeholder="作者请用分号分开"></el-input>
                </el-form-item>
                <el-form-item label="关键词">
                    <el-input v-model="form.keyword" placeholder="关键词请用分号分开"></el-input>
                </el-form-item>
                <el-form-item label="论文摘要">
                    <el-input type="textarea" autosize v-model="form.abstracts"></el-input>
                </el-form-item>
                <el-form-item label="收录情况">
                    <el-select v-model="form.region" placeholder="请选择">
                        <el-option key="bbk" label="SCI" value="bbk"></el-option>
                        <el-option key="xtc" label="EI" value="xtc"></el-option>
                        <el-option key="imoo" label="SSCI" value="imoo"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="发表时间">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-col>
                    
                </el-form-item>
                <el-form-item label="期刊名称">
                    <el-input v-model="form.journal"></el-input>
                </el-form-item>
                
                <el-form-item label="页码">
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