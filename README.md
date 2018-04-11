
# 学习小程序
吐槽：微信小程序文档真是写得烂，文档，账号管理乱七八糟  
用json当配置文件真是败笔，注释都加不上去，逗号都不能多写一个  
组件都已经用名字进行封装好了，为何css的作用域竟然还是全局的  
navigateTo和switchtag用处严格分开，如果某个链接变成了主页怎么办  
没有对数据的动态监测。
wxss就多了一个rpx的功能，就是全体用百分比而已，连嵌套都不支持，去模仿一下less啊  
对于input，没有一个 wx:bind 的方法，需要手动写 bindinput 的函数，这个太差  
不同的组件，在不同地方引用时无法获取parent的路径，还需要手工传入dot  
request连同步功能都没有  
request连PATCH的请求都没法发送，还做成开发工具可以用，手机上不可以用  


点赞:
behaviors实现了类似mixin的效果，这个我喜欢

# 框架
## [配置](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/config.html)
* app.json
  ```
  {
    "pages": [
      "pages/index/index",
      "pages/logs/index"
    ],
    "window": {
      "navigationBarTitleText": "Demo"
    },
    "tabBar": {
      "list": [{
        "pagePath": "pages/index/index",
        "text": "首页"
      }]
    },
    "networkTimeout": {
      "request": 10000,
      "downloadFile": 10000
    },
    "debug": true
  }
  ```  

## 逻辑层...
* 注册程序
  * 注册和使用
  ```javascript
  App({})  // 注册一个小程序
  var appInstance = getApp()  // 获取小程序实例
  ```
  * 回掉函数:
    * onLaunch
    * onShow
    * onHide
    * onError
    * 其他
  * 注意:
    只能注册一个App, onLaunch的时候不要调用getCurrentPage, 此时没有page。getApp后不要私自调用生命周期函数
* [场景值](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/scene.html)
  * 1001: 发现栏小程序主入口
  * 1011: 扫描二维码
* [注册页面](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/page.html)
  * 示例代码  
    ```
    Page({  // 注册页面
      data: {
        text: 'init data',
        array: [{'msg': '1'}, {'msg': '2'}]
      },
      onLoad: function(options) {
        // 页面载入触发
      },
      viewTag: function() {
        console.log("view tap");
      }
    })
    
    # html
    <view bindtap="viewTap">click me </view>
    ```

  * Page：
    * onReachBottom

  * 事件处理函数
    * bindtap: `<view bindtap="viewTag">clickme </view>`
  * 属性和函数
    * route: 当前的路径
    * setData(): 设置数据

* 路由
  * `wx.reLaunch({'url': '/pages/text/text'})`
  * 注意各个跳转之间是严格限定的，switchtab只能切换tab和navigateto只能切换url
* [模块化](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/module.html)
  * 文件作用域:
    * 全局变量: 放在App里面
    * 模块化  

    ```
    // 定义
    function sayHello(name) {
      console.log(`Hello ${name} !`)
    }
    function sayGoodbye(name) {
      console.log(`Goodbye ${name} !`)
    }
    module.exports.sayHello = sayHello
    exports.sayGoodbye = sayGoodbye

    // 使用
    var common = require('common.js')  // 使用../../不能用绝对路径
    Page({
      helloMINA: function() {
        common.sayHello('MINA')
      },
      goodbyeMINA: function() {
        common.sayGoodbye('MINA')
      }
    })
    ```

* API

## 视图层
  * WXML
    * 数据绑定
    * [列表渲染](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/list.html)
    * [条件渲染](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/conditional.html)
      * <view wx:key="id" wx:for="array"></view>
    * [模板](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/template.html)
      * 使用 `...name` 来起到 `**kwargs` 的效果
    * [事件](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/event.html)
      * bindtap: `<view data-hi="data" bindtap="viewTag">clickme </view>`
      * bind: 阻止冒泡, catch: 阻止冒泡
    * [引用](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/import.html)
      ```
      <import src="item.wxml"/>  # 无法import item中 import的template
      <template is="item 里面的item"></template>
      <include src="header.wxml"/>  # 相当于把页面的代码复制过来了
      ```
  * WXS
  * WXSS
  * 组件
    * 使用自定义组件: `{"usingComponents": {"text-component": "./text"}}`
    * [组件事件](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/custom-component/events.html)
    * [behaviors](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/custom-component/behaviors.html) 有点类似mixin
      
## 自定义组件...
## 性能...

# 组件
## 视图容器
* [ ] view: html的div
* [ ] scroll-view: 能滚动的div
* [swiper](https://mp.weixin.qq.com/debug/wxadoc/dev/component/swiper.html)
    滑动视图
* [ ] movable-view
* [ ] cover-view
## 基础内容
## 表单组件
## 导航
## 媒体组件
## 地图
## 画布
## 开放能力

# API...
## 界面
* 交互反馈:
  1. wx.showToast

# 工具...

# Q&A...
