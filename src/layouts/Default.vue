<template>
  <div>
    <header>
      <h1>{{ $static.user.edges[0].node.name }}</h1>
      <p>{{ $static.user.edges[0].node.blogDescribe }}</p>
      <div>
        <a
          :href="$static.user.edges[0].node.html_url"
          style="margin-right: 20px"
          ><el-button>Github主页</el-button></a
        >

        <a :href="$static.user.edges[0].node.code_url"
          ><el-button>博客源码</el-button></a
        >
      </div>
    </header>
    <div class="main">
      <el-row>
        <el-col :span="8">
          <el-menu class="el-menu-demo" mode="horizontal">
            <el-submenu index="1">
              <template slot="title">了解博主</template>
              <el-menu-item
                @click="openUrl($static.user.edges[0].node.html_url)"
                >github主页</el-menu-item
              >
              <el-menu-item
                @click="
                  openUrl(
                    $static.user.edges[0].node.other_blog_url,
                    '暂时没有其他博客'
                  )
                "
                >其他网站</el-menu-item
              >
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">了解博主</template>
              <el-menu-item @click="openUrl('https://segmentfault.com/')"
                >segmentfault</el-menu-item
              >
            </el-submenu>
          </el-menu>
        </el-col>
        <el-col :span="10">&nbsp;</el-col>
        <el-col :span="4" class="aligin-right">
          <strong>{{ $static.user.edges[0].node.githubUsername }}</strong>
          <div>
            <i class="el-icon-location-outline"></i
            >{{ $static.user.edges[0].node.location }}
          </div>
        </el-col>
        <el-col :span="2">
        
               <el-image :src="$static.user.edges[0].node.avatar_url" :style="{
                 width:'35px',
                 height:'35px'
               }">
              
    </el-image>
        </el-col>
      </el-row>

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
              <g-link to="/social">
                <el-menu-item index="2">
                  <i class="el-icon-mobile-phone"></i>
                  <span slot="title">社交圈</span>
                </el-menu-item>
              </g-link>
              <g-link to="/blog">
                <el-menu-item index="3">
                  <i class="el-icon-edit-outline"></i>
                  <span slot="title">博客列表</span>
                </el-menu-item>
              </g-link>
              <g-link to="/project/" >
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

        <el-col :span="18" class="content">
          <slot />
        </el-col>
      </el-row>
    </div>

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
        avatar_url
        other_blog_url
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
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log("close", key, keyPath);
    },
    openUrl(url, message) {
      if (!url) {
        if (message)
          this.$notify({
            title: "提示",
            message: message,
          });
        return;
      }
      window.open(url);
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
.aligin-right{
  text-align: right;
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
.active .el-menu-item i{
color: #409eff;
}  

.content{
  padding-left: 10px;
}
footer {
  text-align: center;
  line-height: 60px;
}
</style>
