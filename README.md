
# 学习小程序
## 吐槽：
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

## 点赞:
* behaviors实现了类似mixin的效果，这个我喜欢

# 框架
## [配置](配置.md)

## [逻辑层](逻辑层.md)
### [路由](逻辑层.md)

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
        <template is="item 里面的item" data=""></template>  # 这个data="{{text: text}}"  后面的text不加引号就是用this.data，加了引号就是直接的数据
        <include src="header.wxml"/>  # 相当于把页面的代码复制过来了
        ```
* WXS
* WXSS
    * 尺寸单位
    * 样式导入
    ```
    @import "common.wxss"
    ```
    * 内联样式
    ```
    <view style="color: {{color}};" /> 避免将静态的样式写进style，会影响渲染速度, 动态的样式才写入style
    <view class="normal_view"/>
    ```
    * 选择器
* 组件
* 使用自定义组件: `{"usingComponents": {"text-component": "./text"}}`
* [组件事件](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/custom-component/events.html)
* [behaviors](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/custom-component/behaviors.html) 有点类似mixin
      
## [自定义组件](./component组件.md)
* [ ] slot
* [ ] [构造器](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html)
    * 事件
        * created: 创建好了，这时候不能使用setData
        * attached: 加载好了，这时候可以用直接输入的那些数据，innertype="create", 这个变量可以用了
        * ready: 组件布局完成，这时候可以用onload里面生成然后传入组建的数据, innerid="{{resource.id}}", 这个变量可以用了
* [ ] 事件
    * 组件.js
    ```
    var myEventDetail = {'mydetail': 'mydetail'}
    var myEventOption = {'myoption': 'myoption'}
    this.triggerEvent('sing', myEventDetail, myEventOption);
    ```
    * 触发的选项
        * bubbles: 是否冒泡(false)
        * [ ] composed: 是否穿越组件(false)
        * [ ] capturePhase: 是否拥有捕获阶段(false)
* [ ] behaviros
* [ ] 组件之间的关系
* [ ] 抽象节点
## 性能...

# [组件](组件.md)
## 视图容器
* [ ] view: html的div
* [ ] scroll-view: 能滚动的div
* [swiper](https://mp.weixin.qq.com/debug/wxadoc/dev/component/swiper.html)
    滑动视图
* [ ] movable-view
* [ ] cover-view
## 基础内容
## [表单组件](./组件.md)
* ### input
* ### button
* ### picker
* [ ] 待办
## [导航](组件.md)
## 媒体组件
## 地图
## 画布
## 开放能力

# API...
## [网络](https://developers.weixin.qq.com/miniprogram/dev/api/api-network.html)
## [界面](https://developers.weixin.qq.com/miniprogram/dev/api/api-react.html)
* 交互反馈:
  1. wx.showToast
* 设置导航条
* 设置tabBar
* 设置置顶信息
* [导航](https://developers.weixin.qq.com/miniprogram/dev/api/ui-navigate.html)
    * wx.navigateTo
    ```
    wx.navigateTo({
        url: "test?id=1",
        success: function,
        fail: function,
        complete: function
    })
    ```

# 工具...

# Q&A...
