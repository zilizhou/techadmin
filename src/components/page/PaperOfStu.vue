<template>
  <div>
    
  <el-steps :active="active" align-center>
  <el-step title="论文开题" description="要求按学校的格式要求填写开题报告"></el-step>
  <el-step title="中期检查" description="要求按学校的格式要求填写中期检查"></el-step>
  <el-step title="论文答辩" description="要求学生打印评分表，准备好PPT"></el-step>
  <el-step title="论文提交" description="撰写毕业鉴定表，按要求提交论文材料"></el-step>
  </el-steps>
  <div v-show="firstshow">
  <el-form >
    
    <el-form-item label="论文题目">
         <el-input ></el-input>
    </el-form-item>
    <el-form-item label="研究意义">
         <el-input type="textarea"></el-input>
    </el-form-item>
    
    <el-form-item label="研究内容">
         <el-input type="textarea"></el-input>
    </el-form-item>
    <el-form-item label="研究内容计划">
         <el-input type="textarea"></el-input>
    </el-form-item>
    
    <el-form-item label="指导老师意见">
         <el-input type="textarea" disabled></el-input>
    </el-form-item>
    
    <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                    <el-button>取消</el-button>
    </el-form-item>
    
  </el-form>
  </div>
  
  
  
  
  <el-button style="margin-top: 12px;" @click="back">上一步</el-button>
  <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    
    
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
        fourthshow:false
      };
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
        
        
      }
    }
  }
</script>