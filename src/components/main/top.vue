<template>
<div>
   

    <div class="left-col">
      <div class="overlay" style="background: #4d4d4d"></div>
        <div class="intrude-less">
          <header id="header" class="inner">
		        <a href="/" class="profilepic">
			        <img src="../../../static/image/1.jpg" class="js-avatar">
		        </a>
		      <hgroup>
		        <h1 class="header-author"><a href="/">734976581</a></h1>
		      </hgroup>
		      <p class="header-subtitle">热爱生活</p>
		      <nav class="header-menu">
			      <ul>
				      <li><a href="/">主页</a></li>
			      	<li><a href="/tags/随笔/">随笔</a></li>
      			</ul>
		      </nav>
          <nav class="header-smart-menu">
      			<a  href="javascript:void(0)" @click="showB(1)">所有文章</a>
      			<a  href="javascript:void(0)" @click="showB(2)">友情链接</a>
      			<a  href="javascript:void(0)" @click="showB(3)">关于我</a>
      		</nav>
          <nav class="header-nav">
            <div class="social">
                <a class="weibo" target="_blank" href="http://weibo.com/" title="weibo"><i class="icon-weibo"></i></a>
                <a class="zhihu" target="_blank" href="https://www.zhihu.com/" title="zhihu"><i class="icon-zhihu"></i></a>
                <a class="qq" target="_blank" href="http://www.qq.com/" title="qq"><i class="icon-qq"></i></a>
                <a class="douban" target="_blank" href="https://www.douban.com/" title="douban"><i class="icon-douban"></i></a>
            </div>
          </nav>
        </header>
        		
      </div>
    </div>
    <nav id="mobile-nav">
          <div class="overlay js-overlay" style="background: #4d4d4d" @click="hideMenu"></div>
          <div class="btnctn js-mobile-btnctn" @click="showPanel">
              <div class="slider-trigger list" ><i class="icon icon-sort"></i></div>
          </div>
          <div class="intrude-less" @click="hideMenu">
              <header id="header" class="inner">
                  <div class="profilepic">
                      <img src="../../../static/image/1.jpg" class="js-avatar">
                  </div>
                  <hgroup>
                      <h1 class="header-author js-header-author">734976581</h1>
                  </hgroup>
                  <p class="header-subtitle"><i class="icon icon-quo-left"></i>热爱生活<i class="icon icon-quo-right"></i></p>
                  <nav class="header-nav">
                      <div class="social">
                          <a class="weibo" target="_blank" href="http://weibo.com/" title="weibo"><i class="icon-weibo"></i></a>
                          <a class="zhihu" target="_blank" href="https://www.zhihu.com/" title="zhihu"><i class="icon-zhihu"></i></a>
                          <a class="qq" target="_blank" href="http://www.qq.com/" title="qq"><i class="icon-qq"></i></a>
                          <a class="douban" target="_blank" href="https://www.douban.com/" title="douban"><i class="icon-douban"></i></a>
                      </div>
                  </nav>
                  <nav class="header-menu js-header-menu">
                      <ul style="width: 50%;padding-left:0;">
                          <li style="width: 50%"><a href="/">主页</a></li>
                          <li style="width: 50%"><a href="/tags/随笔/">随笔</a></li>
              </ul>
                  </nav>
              </header>				
          </div>
          <div class="mobile-mask" v-if="show" @click="hideMenu"></div>
        </nav>
        <div v-if="show" class="otherMenu">
            <div class="other-menu">
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
                        <router-link :to="{path:'/view',query:{id:content._id}}" v-for="(content,index) in data.contents"  :key="index">
                            <p><i class="icon-quo-left icon" style="margin-right:10px;"></i>
                            {{ content.title }}</p>
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
                        <router-link to="" v-for="(linkinfo,index) in linkinfos" :key="index" @click.native="goLink(linkinfo.link)">
                            <i class="icon-quo-left icon" style="margin-right:10px;"></i>
                            {{linkinfo.name}}
                            <i data-v-4364ff14="" class="icon icon-quo-right" style="margin-left:10px;"></i>
                        </router-link>
                    </section>
                </div>
                <div v-if="num === 3" class="theOne">
                    789
                </div>
            </div>
            <div class="mask111" v-if="show" @click="hideMenu"></div>
    </div>
 </div> 
</template>

<script>
export default {
    data () {
    return {
      show: false,
      num: 1,
      data: {
        contents: [],
        count: 0,
        limit: 0,
        pages: 0,
        page: 1,
      },
      linkinfos: []
    }
  },
  methods: {
    showPanel () {
      this.show = !this.show
    },
    showB (i) {
      this.show = true
      this.num = i
    },
    hideMenu () {
        this.show = false
    },
    change (i) {
        this.num = i
    },
    getData(id) {
        this.$http.get('http://www.734976581.xyz:8081/category?id=' + id + '&page=' + this.data.page).then(response => {
          response.data.contents.forEach((content) => {
            content.addTime = this.formatDate(content.addTime);
          })
          this.data = response.data;
        }, response => {
          console.log('error:' + response);
        })
    },
    getLink () {
        this.$http.get('http://www.734976581.xyz:8081/api/setting',{
            emulateJSON:true
        })
        .then(result => {
            result.data.linkinfo.forEach(value => {
                this.linkinfos.push(value)
            })
        })
    },
    goLink (link){
        window.location.href = link
    }
  },
  created () {
    var id = ''
    this.getData(id)
    this.getLink()
  }
}
</script>

<style>
h1,h2{
  border: none;
}
    .otherMenu{
       position: fixed;
       top: 0;
       left: 300px;
       
       color: #fff;
       z-index: 500;
       height: 100%;
       width: 100%;
       animation:move 1s 1;
    }
    .other-menu{
        width: 30%;
        height: 100%;
        float: left;
       padding: 0 2%;
        background-color: #a8ced9;
    }
    .mask111{
        width: 70%;
        height: 100%;
        float: left;
        background-color: #000;
        opacity: 0.5;
    }
    @keyframes  move{
        from {left:0;}
        to {left:300px;}
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
    .mask{

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
        .otherMenu{
            width: 80%;
            left: 0;
            z-index: 10000;
        }
        .other-menu{
            width: 100%;
            left: 0;
            z-index: 10000;
            padding: 0 5%;
        }
        .mask111{
            display: none;
        }
        @keyframes  move{
            from {left:-80%;}
            to {left:0;}
        }
        .article-txt{
            float: none;
            width: auto;
        }
        .article-header .archive-article-date{
            margin-bottom: 0.5rem;
        }
        
    }
</style>
