<template>
  <div>
    <header>
      <h1>{{$static.user.edges[0].node.name}}</h1>
      <p>{{$static.user.edges[0].node.blogDescribe}}</p>
      <div>
        <a :href="$static.user.edges[0].node.html_url" style="margin-right:20px;"><el-button>Github主页</el-button></a>
        
        <a :href="$static.user.edges[0].node.code_url"><el-button>博客源码</el-button></a>
      </div>
    </header>
    <el-row class="main">
      <el-col :span="6">
        <el-card>
          <el-menu
            class="menu"
            default-active="-1"
            @open="handleOpen"
            @close="handleClose"
          >
            <g-link to="/" exact>
              <el-menu-item index="1">
                <i class="el-icon-star-off"></i>
                <span>最新动态</span>
              </el-menu-item>
            </g-link>
            <g-link to="/social" exact>
              <el-menu-item index="2">
                <i class="el-icon-mobile-phone"></i>
                <span slot="title">社交圈</span>
              </el-menu-item>
            </g-link>
            <g-link to="/blog" exact>
              <el-menu-item index="3">
                <i class="el-icon-edit-outline"></i>
                <span slot="title">博客列表</span>
              </el-menu-item>
            </g-link>
            <g-link to="/project" exact>
              <el-menu-item index="4">
                <i class="el-icon-notebook-2"></i>
                <span slot="title">开源项目</span>
              </el-menu-item>
            </g-link>
              <el-menu-item index="5" disabled>
                <i class="el-icon-help"></i>
                <span slot="title">使用帮助</span>
              </el-menu-item>
           
              <el-menu-item index="6" disabled>
                <i class="el-icon-reading"></i>
                <span slot="title">READEME.md</span>
              </el-menu-item>
          
          </el-menu>
        </el-card>
      </el-col>

      <el-col :span="18">
        <slot />
      </el-col>
    </el-row>
    <el-footer>&copy;2020</el-footer>
  </div>
</template>
<static-query>
query{
  user:allUser{
    edges{
      node{
        githubUsername
        id
        blogDescribe
        audioUrl
        name
        url
        html_url
        htmlTitle
        location
        code_url
        webSites{
          name
          url
        }
      }
    }
  }
}
</static-query>


<script>
export default {
  // data() {
  //   return {
  //     collapse: false,
  //   };
  // },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log("close", key, keyPath);
    },
  },
};
</script>
<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  padding: 80px 96px;
  text-align: center;
  background-image: linear-gradient(
    120deg,
    rgb(38, 144, 249),
    rgb(252, 45, 45)
  );
  color: rgb(255, 255, 255);
}
.main {
  max-width: 1024px;
  margin: 0 auto;
}
.menu {
  padding: 20px;
}
.active .el-menu-item {
  color: #409eff;
}
footer {
  text-align: center;
}
</style>
