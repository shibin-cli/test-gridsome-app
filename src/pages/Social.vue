<template>
  <Layout>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane
        :label="'粉丝 ' + $page.followers.totalCount"
        name="followers"
      >
        <el-row v-if="$page.followers.totalCount">
          <el-col
            class="content"
            :span="8"
            v-for="item in $page.followers.edges"
            :key="item.node.id"
          >
            <el-card class="box-card" hadow="hover">
              <div>
                <i class="el-icon-star-off"></i>&nbsp;{{ item.node.login }}
              </div>
              <div><i class="el-icon-message"></i>&nbsp;他的主页</div>
              <div>
                <img :src="item.node.avatar_url" />
              </div>
            </el-card>
          </el-col>
        </el-row>
        <div class="empty">没有粉丝哦~</div>
      </el-tab-pane>
      <el-tab-pane
        :label="'关注 ' + $page.followings.totalCount"
        name="following"
      >
        <el-row>
          <el-col
            class="content"
            :span="8"
            v-for="item in $page.followings.edges"
            :key="item.node.id"
          >
            <el-card class="box-card" shadow="hover">
              <div>
                <i class="el-icon-star-off"></i>&nbsp;{{ item.node.login }}
              </div>
              <div class="webpage" @click="openUrl(item.node.html_url)">
                <i class="el-icon-message"></i>&nbsp;他的主页
              </div>
              <div>
                <img :src="item.node.avatar_url" />
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </Layout>
</template>
<page-query>
query{
  followers: allFollower{
    totalCount
  },
  followings:allFollowing{
    totalCount
    edges{
      node{
        id
        login
        html_url
      }
    }
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: "社交",
  },
  data() {
    return {
      activeName: "followers",
    };
  },
  methods: {
    openUrl(url) {
      window.open(url);
    },
  },
};
</script>
<style scoped>
.content {
  padding: 10px;
}
.box-card {
  line-height: 25px;
  font-size: 13px;
}
img {
  width: 100%;
}
.webpage {
  cursor: pointer;
}
.empty {
  line-height: 60px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: rgb(221, 221, 221);
}
</style>
