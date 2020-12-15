<template>
  <Layout>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ $page.dynamic.edges[0].node.title }}</span>
      </div>
      <div class="date">发布 {{ $page.dynamic.edges[0].node.created_at | formatDate }}</div>
      <div class="date">更新 {{ $page.dynamic.edges[0].node.updated_at | formatDate }}</div>
      <h3>{{$page.dynamic.edges[0].node.description}}</h3>
      <el-divider></el-divider>
      <div v-html="markdown($page.dynamic.edges[0].node.content)">
      </div>
    </el-card>
  </Layout>
</template>
<page-query>
query{
  dynamic:allDynamic{
    edges{
      node{
        url
        title
        content
        description
        created_at
        updated_at
      }
    }
  }
}
</page-query>
<script>
import MarkdownIt from "markdown-it";
let md = new MarkdownIt();
export default {
  metaInfo: {
    title: "最新动态",
  },
  methods:{
     markdown(content) {
      return md.render(content);
    },
  }
};
</script>
<style>
.date {
  font-size: 13px;
  color: rgb(96, 108, 113);
  line-height: 22px;
}
</style>
