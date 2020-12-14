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
          @click="copy"
        ></el-button>
      </el-col>
    </el-row>

    <el-card
      class="box-card"
      shadow="hover"
      v-for="repo in $page.repos.edges"
      :key="repo.node.id"
    >
      <div slot="header" class="clearfix">
        <span><i class="el-icon-headset"></i>&nbsp;{{ repo.node.name }}</span>
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          @click="openUrl(repo.node.html_url)"
          >前往Github&nbsp; <i class="el-icon-right"></i>
        </el-button>
      </div>
      <div class="text item">
        <div class="date">最近更新 {{ repo.node.createdAt | format }}</div>
        <div class="repo-name">{{ repo.node.description || "暂无描述" }}</div>
        <el-row>
          <el-col :span="16">
            <el-tooltip
              class="item"
              effect="dark"
              :content="'star ' + repo.node.stargazers_count"
              placement="bottom"
            >
              <span
                ><i class="el-icon-star-off"></i>&nbsp;{{
                  repo.node.stargazers_count
                }}</span
              >
            </el-tooltip>
            <el-tooltip
              class="item"
              effect="dark"
              :content="'watch ' + repo.node.watchers_count"
              placement="bottom"
            >
              <span
                ><i class="el-icon-view"></i>&nbsp;{{
                  repo.node.watchers_count
                }}</span
              >
            </el-tooltip>
            <el-tooltip
              class="item"
              effect="dark"
              placement="bottom"
              :content="'fork ' + repo.node.forks_count"
            >
              <span>
                <i class="el-icon-bell"></i>&nbsp;{{
                  repo.node.forks_count
                }}</span
              >
            </el-tooltip>
          </el-col>
          <el-col :span="8" class="tags">
            <el-tag size="small" type="danger" v-if="repo.node.license">{{
              repo.node.license.key.toUpperCase()
            }}</el-tag>
            &nbsp;<el-tag
              size="small"
              type="success"
              v-if="repo.node.language"
              >{{ repo.node.language }}</el-tag
            >
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="2"
      :current-page="$page.repos.pageInfo.currentPage"
      :total="$page.repos.totalCount"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </Layout>
</template>
<page-query>
query($page: Int){
  repos:allRepos(perPage: 2, page: $page) @paginate{
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges{
    node{
      id
      name
      description
      forks_count
      watchers_count
      stargazers_count
      language
      html_url
      created_at
      updated_at
      license{
        name
        key
      }
    }
  }
  }
}
</page-query>
<script>
import dayjs from "dayjs";
export default {
  metaInfo: {
    title: "开源项目",
  },
  data() {
    return {
      keyword: "",
    };
  },
  filters: {
    format(val, format = "YYYY-MM-DD HH:mm:ss") {
      return dayjs(val).format(format);
    },
  },
  methods: {
    handleCurrentChange(val) {
      if (val === 1) {
        val = "";
      }
      this.$router.push("/project/" + val);
    },
    openUrl(git_url) {
      window.open(git_url);
    },
    copy() {
      let doc = document.createElement("input");
      doc.value = window.location.href;
      document.body.appendChild(doc);
      doc.select();
      let status = document.execCommand("copy");
      this.$notify({
        title: "提示",
        message: "链接已复制,去分享给好友吧!!",
        type: "success",
      });
    },
  },
};
</script>
<style scoped>
.search {
  margin-bottom: 10px;
  text-align: center;
}
.box-card {
  margin-bottom: 20px;
}
.date {
  font-size: 13px;
  color: rgb(96, 108, 113);
  line-height: 22px;
}
.repo-name {
  margin: 10px 0;
}
.item {
  padding: 0 15px;
}
.tags {
  text-align: right;
}
</style>