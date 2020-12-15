<template>
  <Layout>
    <el-row class="search">
      <el-col :span="10">
        <el-input
          v-model="keyword"
          placeholder="请输入内容"
          clearable
        ></el-input>
      </el-col>
      <el-col :span="2"
        ><el-button icon="el-icon-search" circle></el-button
      ></el-col>
      <el-col :span="2"
        ><el-button
          icon="el-icon-share"
          type="warning"
          circle
          plain
          @click="copy()"
        ></el-button>
      </el-col>
    </el-row>
    <el-card
      class="box-card"
      v-for="item in $page.glist.edges"
      :key="item.node.id"
    >
      <el-row slot="header" class="card-header clearfix">
        <el-col :span="21">
          <g-link :to="'/blog/' + item.node.id">
            <i class="el-icon-edit-outline"></i>&nbsp;&nbsp;{{
              item.node.title
            }}
          </g-link>
        </el-col>
        <el-col :span="3" class="right-btns">
          <el-button
            icon="el-icon-share"
            type="text"
            @click="copy(item.node.id)"
          ></el-button>
          <el-button icon="el-icon-edit" type="text"></el-button>
          <el-button icon="el-icon-delete" type="text"></el-button>
        </el-col>
      </el-row>
      <div class="text item">
        <div class="date">最近更新 {{ item.node.created_at | formatDate }}</div>
        <div class="desc">{{ item.node.description }}</div>
      </div>
    </el-card>
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="2"
      :current-page="$page.glist.pageInfo.currentPage"
      :total="$page.glist.totalCount"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </Layout>
</template>
<page-query>
query($page:Int){
  glist: allGist(page:$page,perPage:2) @paginate{
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges{
      node{
        id
        
        title
        description
        created_at
        updated_at
      }
    }
  }
}
</page-query>
<script>
import { copyText } from "../uitls";

export default {
  metaInfo: {
    title: "博客",
  },
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    handleCurrentChange(val) {
      if (val === 1) {
        val = "";
      }
      this.$router.push("/blog/" + val);
    },
    copy(str) {
      let text = str ? (window.location.href + "/" + str) : window.location.href
      if (copyText(text)) {
        this.$notify({
          title: "提示",
          message: "链接已复制,去分享给好友吧!!",
          type: "success",
        });
      } else {
        this.$notify({
          title: "提示",
          message: "当前浏览器不支持复制，换个浏览器再试试吧！！",
          type: "error",
        });
      }
    },
  },
};
</script>
<style scoped>
a {
  color: #1e6bb8;
}
.search {
  margin-bottom: 10px;
  text-align: center;
}
.box-card {
  margin-bottom: 20px;
}
.right-btns {
  text-align: right;
}
.right-btns button {
  padding: 0 3px;
}
.date {
  font-size: 13px;
  color: rgb(96, 108, 113);
  line-height: 22px;
}
.desc {
  margin: 10px 0;
}
.el-pagination {
  text-align: center;
}
</style>