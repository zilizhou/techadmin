<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    
                    {
                        icon: 'el-icon-menu',
                        index: '2',
                        title: '我的学习',
                        subs: [
                            //{
                            //    index: 'coursetable',
                            //    title: '我的课程'
                            //},
                            {
                                index: 'paperofstu',
                                title: '毕业论文'
                            }
                        ]
                    },
                    //{
                    //    icon: 'el-icon-date',
                    //    index: '3',
                    //    title: '我的科研',
                    //    subs: [
                    //        {
                    //            index: 'baseform',
                    //            title: '我的论文'
                    //        },
                    //        {
                    //            index: 'vueeditor',
                    //            title: '我的项目'
                    //        },
                    //        {
                    //            index: 'papertable',
                    //            title: '论文测试'
                    //        },
                    //        {
                    //            index: 'upload',
                    //            title: '文件上传'
                    //        }
                    //    ]
                    //},
                    //{
                    //    icon: 'el-icon-star-on',
                    //    index: 'basecharts',
                    //    title: '图表'
                    //},
                    {
                        icon: 'el-icon-upload2',
                        index: 'stupersoninfo',
                        title: '个人信息'
                    }/*,
                    {
                        icon: 'el-icon-setting',
                        index: 'readme',
                        title: '帮助'
                    }*/
                ]
            }
        },
        computed:{
            onRoutes(){
                
                return this.$route.path.replace('/','');
                
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
</style>