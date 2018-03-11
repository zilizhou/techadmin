<template>
    <div>
        
<van-nav-bar
  title="标题"
  left-text="返回"
  right-text="按钮"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>  
   
  <van-tabs :active="active">
  <van-tab  title="论文开题">
    内容  开题报告
    <van-form>
    <van-cell-group>
    <van-field v-model="papertitle" autosize placeholder="论文题目" label="论文题目"/>
    <van-field type="textarea" v-model="papervalue" autosize placeholder="论文研究意义" label="论文研究意义"/>
    <van-field type="textarea" v-model="papercontent" autosize placeholder="论文研究内容" label="论文研究内容"/>
    <van-field type="textarea" v-model="paperplan" autosize placeholder="论文研究计划" label="论文研究计划"/>
    <van-field type="textarea" v-model="paperliter" autosize placeholder="参考文献" label="参考文献"/>
    </van-cell-group>
    
    </van-form>
  </van-tab>
  <van-tab  title="中期检查">
    内容  中期检查 
  </van-tab>
  
  <van-tab  title="论文答辩">
    内容  论文答辩 
  </van-tab>
  <van-tab  title="论文提交">
    内容  论文提交 
  </van-tab>
</van-tabs>
        
    </div>
    
</template>



export default {
  methods: {
    data() {
    return {
      active: 2
    };
  },
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    }
  }
}