<template>
  <div>
  <div>
    <el-tag type="success">标签二</el-tag>
    <el-tag type="info">标签三</el-tag>
  </div>
  <el-steps :active="active" align-center>
  <el-step title="论文开题" description="要求按学校的格式要求填写开题报告"></el-step>
  <el-step title="中期检查" description="要求按学校的格式要求填写中期检查"></el-step>
  <el-step title="论文答辩" description="要求学生打印评分表，准备好PPT"></el-step>
  <el-step title="论文提交" description="撰写毕业鉴定表，按要求提交论文材料"></el-step>
  </el-steps>
  <br>
  
  <div v-show="firstshow">
  <el-form >
    
    <el-form-item label="论文题目">
         <el-input v-model="papertitle"></el-input>
    </el-form-item>
    <el-form-item label="研究意义">
         <el-input v-model="papervalue" autosize type="textarea"></el-input>
    </el-form-item>
    
    <el-form-item label="研究主要内容及预期目标">
         <el-input v-model="papercontent" autosize type="textarea"></el-input>
    </el-form-item>
    
    <el-form-item label="研究方案（思路）">
         <el-input v-model="paperscheme" autosize type="textarea"></el-input>
    </el-form-item>
    
    <el-form-item label="论文进度安排">
         <el-input v-model="paperplan" autosize type="textarea"></el-input>
    </el-form-item>
    <el-form-item label="主要参考文献">
         <el-input v-model="paperliter" autosize type="textarea"></el-input>
    </el-form-item>
    <el-form-item label="指导老师意见">
         <el-input autosize v-model="papercheck1" type="textarea" :disabled="teacher"></el-input>
    </el-form-item>
    
    <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                    <el-button>取消</el-button>
    </el-form-item>
    
  </el-form>
  </div>
  
  <div v-show="secondshow">
  <el-form >
    
    <el-form-item label="计划完成时间">
         <el-input v-model="paperdate"></el-input>
    </el-form-item>
    <el-form-item label="工作完成情况（已完成的工作与未完成的工作）">
         <el-input v-model="papermid" autosize type="textarea"></el-input>
    </el-form-item>
    
        
    <el-form-item label="指导教师评议（指出优点和不足）">
         <el-input autosize v-model="papercheck2" type="textarea" ></el-input>
    </el-form-item>
    
    <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                    <el-button>取消</el-button>
    </el-form-item>
    
   </el-form>
  </div>
  
  <div v-show="thirdshow">
    
    <el-upload  
                    class="upload-demo"
                    drag
                    action="/api/posts/"
                    multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将论文PPT拖到此处，或<em>点击上传</em></div>
                    <!--<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
    </el-upload>
    
    <el-upload  
                    class="upload-demo"
                    drag
                    action="/api/posts/"
                    multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将论文终稿拖到此处，或<em>点击上传</em></div>
                    <!--<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
    </el-upload>
    
    
  </div>
  
  
  <div v-show="fourthshow">
    
    <el-upload  
                    class="upload-demo"
                    drag
                    action="/api/posts/"
                    multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将学校要求的doc文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">doc文件中包含开题、中期检查、毕业鉴定表及论文终，且不超过500kb</div>
    </el-upload>
    
    
    
    
  </div>
  
  
  
  
  <el-button style="margin-top: 12px;" @click="back">上一步</el-button>
  <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
  <el-button  type="warning" @click="showdetail">返回</el-button>  
    
  </div>
  
  
  
</template>

<script>
  export default {
    data() {
      
      return {
        active: 1,
        firstshow:true,
        secondshow:false,
        thirdshow:false,
        fourthshow:false,
        teacher: false,
        papertitle:'',
        papervalue:'',
        papercontent:'',
        paperplan:'',
        paperliter:'',
        papercheck1:'',
        papercheck2:'',
        paperdate:'',
        papermid:'',
        paperscheme:''
        
      };
    },
  props: ['famsg'],
      created(){
          let username = localStorage.getItem('stuinfo');
          
          let data={'username':username}
          this.$axios.post('http://zilizhou.vicp.net:15931/getformdata',data).then((res)=>{
						console.log(res.data)
            this.papertitle=res.data.papertitle
            this.papervalue=res.data.papervalue
            this.papercontent=res.data.papercontent
            this.paperscheme=res.data.paperscheme
            this.paperplan=res.data.paperplan
            this.paperliter=res.data.paperliter
            this.papercheck1=res.data.papercheck1
            this.papercheck2=res.data.papercheck2
            this.papermid=res.data.papermid
            this.paperdate=res.data.paperdate
            })
        
      },
    
    methods: {
      next() {
        var self=this;
        if (self.active++ > 3) self.active = 4;
        if(self.active==1){self.firstshow=true;self.secondshow=false;self.thirdshow=false;self.fourthshow=false;}
        if(self.active==2){self.firstshow=false;self.secondshow=true;self.thirdshow=false;self.fourthshow=false;}
        if(self.active==3){self.firstshow=false;self.secondshow=false;self.thirdshow=true;self.fourthshow=false;}
        if(self.active==4){self.firstshow=false;self.secondshow=false;self.thirdshow=false;self.fourthshow=true;}
        
      },
      back(){
        var self=this;
        var temp=self.active;
        if(temp>=2) {temp--; self.active=temp;}
        if(self.active==1){self.firstshow=true;self.secondshow=false;self.thirdshow=false;self.fourthshow=false;}
        if(self.active==2){self.firstshow=false;self.secondshow=true;self.thirdshow=false;self.fourthshow=false;}
        if(self.active==3){self.firstshow=false;self.secondshow=false;self.thirdshow=true;self.fourthshow=false;}
        if(self.active==4){self.firstshow=false;self.secondshow=false;self.thirdshow=false;self.fourthshow=true;}
        
        
      },
      showdetail(){
            this.$router.replace('/stupapertable');
          },
      onSubmit(){
        
        let username = localStorage.getItem('stuinfo');
        
        let data = {'username':username,'papertitle':this.papertitle,'papervalue':this.papervalue,'papercontent':this.papercontent,'paperplan':this.paperplan,'papercheck1':this.papercheck1,'paperliter':this.paperliter,'paperdate':this.paperdate,'papermid':this.papermid,'papercheck2':this.papercheck2,'paperscheme':this.paperscheme}
        
            this.$axios.post('http://zilizhou.vicp.net:15931/stupaperform',data).then((。)=>{
						console.log(res);
            this.$message('提交成功');})
        
      }
    }
  }
</script>