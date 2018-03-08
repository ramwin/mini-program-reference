
# 学习小程序
吐槽：微信小程序文档真是写得烂，文档，账号管理乱七八糟
用json当配置文件真是败笔，注释都加不上去，逗号都不能多写一个

# 框架
## [配置](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/config.html)
* app.json
  ```
  {
    "pages": [  # 页面所有路径
      "pages/index/index",
      "pages/logs/index"
    ],
    "window": {  # 小程序的状态栏、导航条、标题、窗口背景色
      "navigationBarTitleText": "Demo"
    },
    "tabBar": {
      "list": [{
        "pagePath": "pages/index/index",
        "text": "首页"
      }, {
        "pagePath": "pages/logs/logs",
        "text": "日志"
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

  * 事件处理函数
    * bindtap: `<view bindtap="viewTag">clickme </view>`
  * 属性和函数
    * route: 当前的路径
    * setData(): 设置数据

* 路由
  * `wx.reLaunch({'url': '/pages/text/text'})`
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
## 自定义组件...
## 性能...

# 组件...

# API...

# 工具...

# Q&A...
