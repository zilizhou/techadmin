<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 个人信息</el-breadcrumb-item>
                <el-breadcrumb-item>信息编辑</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        
        <div class="form-box">
            <!--<p v-show="showtishi">{{tishi}}</p>-->
            <el-form ref="form" :model="form" label-width="80px">
                
                <el-form-item label="用户名">
                    <el-input disabled v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="旧密码">
                    <el-input type="password" v-model="form.oldpsw" placeholder="请输入旧密码"></el-input>
                </el-form-item>
                
                <el-form-item label="新密码">
                    <el-input type="password"  v-model="form.newpsw" placeholder="请输入新密码"></el-input>
                </el-form-item>
                <el-form-item label="手机">
                    <el-input  v-model="form.phone" placeholder="请输入手机号"></el-input>
                </el-form-item>
                
                <!--<el-form-item label="出生日期">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-col>
                    
                </el-form-item>-->
                <el-form-item label="电子邮箱">
                    <el-input v-model="form.mail"></el-input>
                </el-form-item>
                
                <el-form-item label="QQ(选填)">
                    <el-input v-model="form.qq"></el-input>
                </el-form-item>
                
                
                <!--<el-upload  
                    class="upload-demo"
                    drag
                    action="/api/posts/"
                    multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将照片拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>-->
                
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
                    username: localStorage.getItem('ms_username'),
                    oldpsw:'',
                    newpsw:'',
                    mail:'',
                    qq:'',
                    tishi:'',
                    phone:'',
                    showtishi: false
                }
            }
        },
        
        created(){
          
          this.getdata()
        },
        
        methods: {
              
              getdata(){
                let data={'form':this.form};
                this.$axios.post('http://zilizhou.vicp.net:15931/getperinfo',data).then((res)=>{
						       console.log(res)
                   
                   this.form.phone=res.data.phone;
                   this.form.mail=res.data.mail;
                   
                   });
              },
              
              onSubmit() {
                let data={'form':this.form};
                this.$axios.post('http://zilizhou.vicp.net:15931/perinfochg',data).then((res)=>{
						       console.log(res)
                 if (res.data==0) {
                  
                  this.$message('原密码输入错误');
                 }else if(res.data=='ok'){
                  
                  this.$message('密码修改成功');
                  
                 }
            
            });
                
            }
        }
    }
</script>