**学习小程序**

[官网](https://developers.weixin.qq.com/miniprogram/dev/framework/)

# [指南](./指南.md)
* [ ] 目录结构
* ## 小程序框架
    * ### [逻辑层](逻辑层.md)
        * [页面路由](逻辑层.md)
    * 视图层
        * WXSS
* ## [自定义组件](./自定义组件.md)
* ## 开放能力
#### [获取小程序码](./指南.md#获取小程序码)

# 框架
* ## [配置](./框架.md)
* [ ] 场景值
* ## [框架接口](./框架.md)
getCurrentPages, Page, 生命周期
    * 页面
        * Page
        [生命周期](./框架.md)
        * [getCurrentPages](./框架.md#getCurrentPages)
        获取当前的页面栈
* ## [WXML语法参考](./框架.md)
* [ ] WXS语法参考

## 以前的
* ## [开放能力](./框架.md)
* ## 性能...


# [组件](组件.md)
* 视图容器
    * swiper 类似**轮播图**
* 基础内容
    * text
* ## [表单组件](./组件.md#表单组件)
* ## [导航](./组件.md#导航)
* ## [媒体组件](./组件.md#媒体组件_官网)
* ## 地图
* ## 画布
* ## 开放能力

# [API](./api.md)
## [路由](./api.md#路由-官网)
## [网络](./api.md)
### 下载
## [数据缓存](./api.md#数据缓存)
## [界面](./api.md#界面)
* [交互反馈](./api.md#交互反馈)
* [导航栏](./api.md#导航栏)
* 动画
```
var animation = wx.createAnimation(Object object)
<view animation={{animation}}>
</view>
```

## 媒体
### 图片
* [预览图片](./api.md#图片)

## 转发
一旦设置了显示转发按钮，用户就一定可以转发出去。不管在onShareAppMessage里面报了什么错，返回了什么数据都无法阻止用户转发了
* wx.hideShareMenu: *隐藏转发按钮*
* wx.showShareMenu: *显示转发按钮*

## 开放接口

# 工具...

# Q&A...

* 微信小程序文档真是写得烂，文档，账号管理乱七八糟  
* 用json当配置文件真是败笔，注释都加不上去，逗号都不能多写一个  
* 组件都已经用名字进行封装好了，为何css的作用域竟然还是全局的  
* navigateTo和switchtag用处严格分开，如果某个链接变成了主页怎么办  
* 没有对数据的动态监测。
* wxss就多了一个rpx的功能，就是全体用百分比而已，连嵌套都不支持，去模仿一下less啊  
* 对于input，没有一个 wx:bind 的方法，需要手动写 bindinput 的函数，这个太差  
* 不同的组件，在不同地方引用时无法获取parent的路径，还需要手工传入dot  
* request连同步功能都没有  
* request连PATCH的请求都没法发送，还做成开发工具可以用，手机上不可以用  
* wx:for和data-item="{{item}}"好像无法嵌套到内部
* behaviors实现了类似mixin的效果，这个我喜欢
* 组件的 addGlobalClass 和 extendClassed 好用
* **垃圾小程序，如果小程序码的颜色超过一定范围，颜色修改会无效。比如{"r":"150","g":"200","b":"150"}**
