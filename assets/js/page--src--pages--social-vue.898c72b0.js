(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Hvg3:function(t,a,e){"use strict";e.r(a);var o={metaInfo:{title:"社交"},data:function(){return{activeName:"followers"}},methods:{openUrl:function(t){window.open(t)}}},s=(e("OMvm"),e("KHd+")),n=null,l=Object(s.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Layout",[e("el-tabs",{attrs:{type:"card"},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"粉丝 "+t.$page.followers.totalCount,name:"followers"}},[t.$page.followers.totalCount?e("el-row",t._l(t.$page.followers.edges,(function(a){return e("el-col",{key:a.node.id,staticClass:"content",attrs:{span:8}},[e("el-card",{staticClass:"box-card",attrs:{hadow:"hover"}},[e("div",[e("i",{staticClass:"el-icon-star-off"}),t._v(" "+t._s(a.node.login)+"\n            ")]),e("div",[e("i",{staticClass:"el-icon-message"}),t._v(" 他的主页")]),e("div",[e("img",{attrs:{src:a.node.avatar_url}})])])],1)})),1):t._e(),e("div",{staticClass:"empty"},[t._v("没有粉丝哦~")])],1),e("el-tab-pane",{attrs:{label:"关注 "+t.$page.followings.totalCount,name:"following"}},[e("el-row",t._l(t.$page.followings.edges,(function(a){return e("el-col",{key:a.node.id,staticClass:"content",attrs:{span:8}},[e("el-card",{staticClass:"box-card",attrs:{shadow:"hover"}},[e("div",[e("i",{staticClass:"el-icon-star-off"}),t._v(" "+t._s(a.node.login)+"\n            ")]),e("div",{staticClass:"webpage",on:{click:function(e){return t.openUrl(a.node.html_url)}}},[e("i",{staticClass:"el-icon-message"}),t._v(" 他的主页\n            ")]),e("div",[e("img",{attrs:{src:a.node.avatar_url}})])])],1)})),1)],1)],1)],1)}),[],!1,null,"33da7074",null);"function"==typeof n&&n(l);a.default=l.exports},OMvm:function(t,a,e){"use strict";e("cPah")},cPah:function(t,a,e){}}]);