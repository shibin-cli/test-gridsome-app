<template>
  <Layout>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ $page.dynamic.edges[0].node.title }}</span>
      </div>
      <div>发布 {{ $page.dynamic.edges[0].node.created_at | format }}</div>
      <div>更新 {{ $page.dynamic.edges[0].node.updated_at | format }}</div>
      <h3>说明</h3>
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
        created_at
        updated_at
      }
    }
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
  }
};
</script>


