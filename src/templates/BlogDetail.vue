<template>
  <Layout>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
          <i class="el-icon-back" @click="back"></i>
        <span>{{ $page.blog.title }}</span>
      </div>
      <div class="date">发布 {{ $page.blog.created_at | format }}</div>
      <div class="date">更新 {{ $page.blog.updated_at | format }}</div>
      <div>说明 {{ $page.blog.description}}</div>
      <el-divider></el-divider>
      <div v-html="markdown($page.blog.content)">
      </div>
    </el-card>
  </Layout>
</template>
<page-query>
query($id:ID){
  blog:gist(id:$id){
    html_url
    title
    description
    content
    created_at
    updated_at
  }
}
</page-query>
<script>
import dayjs from "dayjs";
import MarkdownIt from "markdown-it";
let md = new MarkdownIt();
export default {
  metaInfo: {
    title: "最新动态",
  },
  filters: {
    format(val, format = "YYYY-MM-DD HH:mm:ss") {
      return dayjs(val).format(format);
    },
   
  },
  methods:{
     markdown(content) {
      return md.render(content);
    },
    back(){
        this.$router.back()
    }
  }
};
</script>
<style>
.el-icon-back{
    padding: 0 5px;
    color: #409eff;
    cursor: pointer;
}
.date {
  font-size: 13px;
  color: rgb(96, 108, 113);
  line-height: 22px;
}
</style>

