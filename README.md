

## 前言:
> 完全使用ajax交互, 无服务端模版渲染
后端部分基本完全参考妙味课堂腾讯课堂公开的nodejs搭建博客视频
但是该视频是完全的后端项目,后端模版渲染,十分不习惯就用vue重写了
没有node基础和mongoose基础的同学可以去看看,两天快速刷完
[传送门](https://ke.qq.com/course/185893)

后端下载地址[传送门](https://github.com/734976581/blog-Backstage)

博客访问地址[传送门](http://www.734976581.xyz:8080/blog)

使用技术:

* 前端
    1. vue
    2. vue-router 前端路由管理
    3. axios 发送ajax请求
    4. element-ui 后台管理ui
    5. marked.js 新建文章支持markdown语法
    6. highlight.js 新建文章支持代码高亮

* 后端
    1. express
    2. body-parser 获取post请求内容
    3. cookies cookie处理模块
    4. mongoose 数据库操作模块

* 功能需求

前端:

1. 首页内容聚合
2. 列表页 —— 分类列表
3. 内容页 —— 评论
4. 注册(暂时取消)
5. 登录(暂时取消)

后台:

1. 登录
2. 分类管理

    * 分类列表
    * 添加分类
    * 修改分类
    * 删除分类
    * 查看分类下的所有博文 (暂未实现)

3. 文章管理

    * 文章列表 : 所有文章;  按分类查看文章 (暂未实现)
    * 添加文章
    * 修改文章
    * 删除文章
    * 查看文章下所有评论

4. 评论管理

    * 评论列表 : 所有评论; 查看指定文章评论
    * 删除评论(暂未实现)

5. 友情链接

    *添加友情链接
    *删除友情链接


## 开始

``` bash
# vue项目根目录需npm install
# 建议使用cnpm,所需要install的项比较多
npm install 

# 进入blog-backstage启动服务端

# 启动浏览器端
npm run dev
```

### 注意

1. cookie相关:使用axios碰到的跨域cookie问题
参考:[axios cookie问题和表单上传问题探究](http://blog.csdn.net/hongchh/article/details/72675777)

2. markdown语法支持: marked.js + highlight.js
使用方法可参见源文件 src => pages => admin => markdown.vue 有详细的使用代码
参考:[marked.js简易手册](http://www.cnblogs.com/djtao/p/6224399.html)

3. mongoose以及express等后端部分代码有详细的注释,但是基本知识还是要了解,不懂可以看前面提到的视频

问题肯定特别多,做这个的时候也是特别糙,这是我学习过程中的项目,不喜勿喷.

[给我一颗小星星好不咯:github](https://github.com/734976581/personal-blog)
