<template>
  <div>
    <div class="mid-col" >
        <div id="wrapper" class="body-wrap">
            <div class="menu-l">
                <div class="canvas-wrap" style="display:none">
                    <canvas data-colors="#eaeaea" data-sectionheight="100" data-contentid="js-content" id="myCanvas1" class="anm-canvas"></canvas>
                </div>
                <div id="js-content" class="content-ll" >
                    <article id="post-浏览器兼容问题" class="article article-type-post  article-index" itemscope="" itemprop="blogPost" v-for="content in data.contents">
                        <div class="article-inner">
                            <header class="article-header">
                                <h1 itemprop="name">
                                    <router-link :to="{path:'/view', query: {id: content._id}}" style="color:#7e8c8d">{{ content.title }}</router-link>
                                </h1>
                                <router-link :to="{path:'/view', query: {id: content._id}}" class="archive-article-date" style="display: block;width: 93%;">
                                    <p class="article-txt">
                                        <span>类别: <el-tag type="primary">{{ content.category.name }}</el-tag></span>
                                        <span>阅读量: <el-tag type="primary">{{ content.views }}</el-tag></span>
                                        <span>评论: <el-tag type="primary">{{ content.comments.length }}</el-tag></span>
                                    </p>
                                    <time datetime="2017-03-15T08:49:25.000Z" itemprop="datePublished"><i class="icon-rili icon"></i>{{ content.addTime }}</time>
                                </router-link>
                            </header>
                        <div class="article-entry" itemprop="articleBody">
                            {{ content.description }}
                        </div>
                        <div class="article-info article-info-index">
                            <p class="article-more-link">
                                <router-link :to="{path:'/view', query: {id: content._id}}" class="more">阅读全文&gt;&gt;</router-link>
                            </p>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                    </article>
                    
                </div>
            </div>
        </div>
        <router-view id="levelTwo"></router-view>
        <Foot></Foot>
    </div>
    <div v-if="show" class="otherMenu">
        <ul class="chooseText">
            <li :class="{active: num ===1}">
                <a href="javascript:void(0);" @click="change(1)" >所有文章</a>
            </li>
            <li :class="{active: num ===2}">
                <a href="javascript:void(0);" @click="change(2)" >友情链接</a>
            </li>
            <li :class="{active: num ===3}">
                <a href="javascript:void(0);" @click="change(3)" >关于我</a>
            </li>
        </ul>
        <div v-if="num === 1" class="theOne">
            <section class="allLink">
                <router-link :to="{path:'/view', query: {id: content._id}}" v-for="(content,index) in data.contents" :key="index">
                    <i class="icon-quo-left icon" style="margin-right:10px;"></i>
                    {{ content.title }}
                    <p class="search-time">
                        <i class="icon-calendar icon"></i>
                        <span >{{ content.addTime }}</span>
                    </p>
                    <p class="search-tag">
                        <i class="icon-price-tags icon">
                            {{ content.category.name }}
                        </i>
                    </p>
                </router-link>
                
            </section>
        </div>
        <div v-if="num === 2" class="theOne">
            <section class="allLink">
                <router-link to="">
                    <i class="icon-quo-left icon" style="margin-right:10px;"></i>
                    慕课网
                    <i data-v-4364ff14="" class="icon icon-quo-right" style="margin-left:10px;"></i>
                </router-link>
            </section>
        </div>
        <div v-if="num === 3" class="theOne">
            789
        </div>
    </div>
  </div>
</template>

<script>
import Foot from './foot.vue'
export default {
  components:{
    Foot
  },
  data () {
    return {
      show: false,
      num: 1,
      input1: '',
      data: {
        contents: [],
        count: 0,
        limit: 0,
        pages: 0,
        page: 1,
      }
    }
  },
  methods: {
    showPanel () {
      this.show = !this.show
    },
    hideMenu () {
        this.show = false
    },
    change (i) {
        this.num = i
    },
    getData() {
        let id = this.$route.query['id'] || '';
        this.$http.get('http://www.734976581.xyz:8081/category?id=' + id + '&page=' + this.data.page).then(response => {
          response.data.contents.forEach((content) => {
            content.addTime = this.formatDate(content.addTime);
          })
          this.data = response.data;
        }, response => {
          console.log('error:' + response);
        })
      },
  },
  created () {
      this.getData()
  }
}
</script>

<style scoped>
h1{
    border-bottom: none;
}
    .otherMenu{
       position: fixed;
       top: 0;
       left: 0;
       background-color: #a8ced9;
       color: #fff;
       z-index: 10000;
       height: 100%;
       width: 80%;
       padding: 0 5%;
       animation:move 1s 1;
    }
    @keyframes  move{
        from {left: -80%;}
        to {left:0;}
    }
    .article-txt{
        width: 60%;
        float: left;
        text-align: left;
    }
    .chooseText{
        width: 100%;
        float: left;
        
    }
    .chooseText li{
        float: left;
        width: 33.3%;
        margin: 1rem 0;
        text-align: center;
        border: 1px solid #fff;
    }
    .chooseText li a{
        color: #fff;
        display: block;
    }
    .active{
        background-color: #81b5cc;
    }
    .active a{
        color: #eee!important;
    }
    .theOne{
        float: left;
        width: 100%;
    }
    .allLink{
        width: 100%;
        padding: 1rem 5%;
        float: left;
    }
    .allLink a{
        padding:10px 5%;
        display: block;
        float: left;
        color: #fff;
        width: 100%;
        border-bottom: 1px dashed #fff;
    }
    .search-time,
    .search-tag{
        display: inline;
        float: left;
    }
    .search-tag{
        margin-left: 2%;
    }
    @media screen and (max-width: 800px){
        .article-txt{
            float: none;
            width: auto;
        }
        .article-header .archive-article-date{
            margin-bottom: 0.5rem;
        }
        
    }
</style>
