**Xiang Wang @ 2018-09-20 01:54:33**

[官方api文档](https://developers.weixin.qq.com/miniprogram/dev/api/)
## 基础
### 系统
* 获取系统信息
```
wx.getSystemInfoSync()
{
    SDKVersion: "2.7.1"
}
```

## 路由
[官网](https://developers.weixin.qq.com/miniprogram/dev/api/wx.navigateBack.html)

### wx.reLaunch
关闭所有页面，打开应用内的某个页面

### wx.redirectTo
关闭当前页面，跳转到应用内的某个页面,不允许跳转到tabbar页面
```
wx.redirectTo({
    url:
    success:
    fail:
    complete:
})
```

### wx.navigateTo
```
wx.navigateTo({
    url: "test?id=1",
    success: function,
    fail: function,
    complete: function
})
```


### wx.navigateBack
```
wx.nanigateBack({
    delta: number, // 返回的页面数, 如果delta大于现有页面数，则返回到首页, 必填
    success: // 接口成功的返回
    fail:
    complete:
})
```

## 数据缓存
* wx.setStorageSync(key, data)  // 支持原生类型, Date
* wx.setStorage(object)  // 异步设置storage，真的不明白做这个是为了什么
* wx.removeStorageSync(key)  // 删除一个缓存

## [界面][界面]
### 交互反馈
1. [`wx.showToast`][showtoast]
```
wx.showToast({
    "title": "成功",
    "icon": "success|loading|none", 前两个最多显示7个汉字，后面的显示2行
    "image": "", 自定义本地图标,
    "duration": 1500, 提示事件,
    "mask": 是否显示透明蒙层,
    "success": 成功的函数, 但是注意，这个函数不会等duration过了才执行，而是立刻执行
    "fail": 
    "complete":
})
```

2. `wx.showModal`
```
wx.showModal({
  title: '提示的标题',
  content: '提示的内容',
  success (res) {
      if (res.confirm) {
          console.log('用户点击确定')
      } else if (res.cancel) {
          console.log('用户点击取消')
      }
  },
  showCancel: true, // 是否显示取消按钮， 默认True
  cancelColor: "#000000",  // 取消按钮的文字颜色
  confirmText: "确认",  // 最多4个
  confirmColor: "#3cc51f",
  fail: "", // 接口调用失败，几乎不可能
  complete: "", // 接口调用结束
})
```

3. `wx.showLoading`
显示Loading提示框，必须主动调用`wx.hideLoading`才能关闭
```
wx.showLoading({
  title: "提示的内容",  // 最多只能显示7个字
  mask: false,  // 是否显示蒙层防止触摸. 默认false
})
```

4. [ ] wx.showActionSheet

5. `wx.hideToast`
隐藏消息提示框

6. `wx.hideLoading`
隐藏loading提示框


### 导航栏
* showNavigationBarLoading
* setNavigationBarTitle
```
wx.setNavigationBarTitle({
  title: "当前页面"
})
```
* setNavigationBarColor
* hideNavigationBarLoading

### 下拉刷新
[官网](https://developers.weixin.qq.com/miniprogram/dev/api/wx.stopPullDownRefresh.html)
* wx.stopPullDownRefresh  
停止下拉刷新，
* wx.startPullDownRefresh
开始下拉刷新的动画, 并且会触发 page.onPullDownRefresh

### 滚动
将页面滚动到目标位置
wx.pageScrollTo({
    scrollTop: 3000rpx;
    duration: 300;
})

### 其他
* 设置tabBar
* 设置置顶信息


## 网络
### [发起请求](https://developers.weixin.qq.com/miniprogram/dev/api/wx.request.html)
```
wx.request({
    url: '',
    method: '', GET|POST|PUT
    data: '',
    dataType: 'json',
    responseType: 'json',
    header: '',
    success: function(res) {
        if (res.statusCode == 200) {
            console.info(res.header)
            console.info(res.data)
        }
    }
})
```

### 下载
* wx.downloadFile
保存图片到临时路径
```
wx.downloadFile({
      url: "https://www.ramwin.com/media/avatar.png",
      success(res) {
        console.info("下载完成");
        if (res.errMsg == 'downloadFile:ok') {
          console.info(res.tempFilePath)
        }
      }
})
```
### WebSocket
[官网](https://developers.weixin.qq.com/miniprogram/dev/api/wx.sendSocketMessage.html)
* 例子
```
wx.connectSocket()
```

## 媒体
### [图片](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.saveImageToPhotosAlbum.html)
* 保存图片到相册 需要先授权
```
wx.saveImageToPhotosAlbum({
    filePath: filepath,
    success: function (res) {
        switch (res.errMsg) {
          case "saveImageToPhotosAlbum:ok": {
            break;
          }
          default: {
            throw Error(res.errMsg);
          }
        }
    },
    fail: function (res) {
        switch (res.errMsg) {
          case "saveImageToPhotosAlbum:fail cancel": {
            throw Error("保存图片成功")
            break;
          }
          default: {
            break;
          }
        }
    }
})
```

* 预览图片
[官网](https://developers.weixin.qq.com/miniprogram/dev/api/wx.previewImage.html)
```
wx.previewImage({
  urls: "需要预览的图片列表",
  current: //, 当前显示的图片链接
})
```
* [ ] 获取图片信息
* [ ] 压缩图片
* [ ] 客户端会话选择文件
* 从本地相册选择文件
[官网](https://developers.weixin.qq.com/miniprogram/dev/api/wx.chooseImage.html)
```
wx.chooseImage({
    count: 9,  // 最多选几张
    sizeType: ["original", "compressed"],  //尺寸
    sourceType: ["album", "camera"], // 图片来源
    success: function(res) {
        const tempFilePaths = res.tempFilePaths
    },
    fail: function(res) {
        console.info("取消选择")
    },
})
```


## 位置
* wx.chooseLocation
```
wx.chooseLocation({
  success: function(res) {
    res: {
        name: "江苏省溧阳中学",
        address: "江苏省常州市溧阳市南环西路88号",
        latitude: "31.41727",
        longitude: "119.47035",
        errMsg: "chooseLocation:ok",
    }
  },
  fail: res => {
    switch (res.errMsg) {
      case "chooseLocation:fail auth deny":
        console.info("用户拒绝授权")
        break;
      case "chooseLocation:fail cancel":
        console.info("用户取消");
        break;
      default:
        throw Error(errMsg.errMsg);
    }
  },
})
```

## 转发
* wx.hideShareMenu({}) **隐藏转发按钮**

## 开放接口
### [登录](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html)
* wx.login
```
    wx.login({
        success: function(res) {
            res = {'code': '用户code', 'errMsg': 'login:ok'
        }
    })
```

### 用户信息
见 [button组件](./组件.md#button)

### [支付](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/payment/wx.requestPayment.html)
* wx.requestPayment
```
wx.requestPayment({
  timeStamp: '',
  nonceStr: '',
  package: '',
  signType: 'MD5',
  paySign: '',
  success(res) {
    res基本没有什么信息了
  },
  fail(res) { }
})
```

### [授权](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/authorize/wx.authorize.html)
这个授权真的是用fail, success来判断。但是授权拒绝一次或者同意一次，就不再弹窗提问了。
* 授权保存到相册
```
wx.authorize({
    scope: "scope.writePhotosAlbum",
    success: function(res) {
        console.info("授权成功")
    },
    fail: function(res) {
        switch (res.errMsg) {
          case "authorize:fail auth deny": {
            break;
          }
          default: {
            throw Error(res.errMsg)
          }
        }
    },
})
```

### 设置
* wx.getSetting
```
wx.getSetting({
  success(res) {
    if (!res.authSetting['scope.record']) {
      wx.authorize({
        scope: 'scope.record',
        success() {
          // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
          wx.startRecord()
        }
      })
    }
  }
})
```

### 订阅消息
* [`wx.requestSubscribeMessage`][requestSubscribeMessage]
> 低版本基础库2.4.4~2.8.3 已支持订阅消息接口调用，仅支持传入一个一次性 tmplId / 永久 tmplId。  
> 用户发起点击行为或者发起支付回调后，才可以调起订阅消息  
> 一次性模板 id 和永久模板 id 不可同时使用。  
如果用户没有选择那个订阅，仍然是success. 但是对应的temlId的值为reject
```javascript
wx.requestSubscribeMessage({
    tmplIds: [],
    success: function(obj) {
        if (obj.errMsg != "requestSubscribeMessage:ok") {
            throw Error("搞笑呢")
        }
        {
            errMsg: "requestSubscribeMessage:ok",
            UHKWsewjxxxx1e8s: "accept",  | accept, reject, ban, accept
        }
    },
    fail: function(obj) {
        throw Error("竟然申请失败了");
    },
    complete: function(obj) {
    },
})
```

## WXML
### wx.createSelectorQuery
```
const query = wx.createSelectorQuery()
query.select('#the-id').boundingClientRect()
query.selectViewport().scrollOffset()
query.exec(function(res){
  res[0].top       // #the-id节点的上边界坐标
  res[1].scrollTop // 显示区域的竖直滚动位置
})
```
### NodesRef
* boundingClientRect
返回一个节点的布局位置
```
// 单个节点
wx.createSelectorQuery().select('#the-id').boundingClientRect(function(rect){
      rect.id      // 节点的ID
      rect.dataset // 节点的dataset
      rect.left    // 节点的左边界坐标
      rect.right   // 节点的右边界坐标
      rect.top     // 节点的上边界坐标
      rect.bottom  // 节点的下边界坐标
      rect.width   // 节点的宽度
      rect.height  // 节点的高度
    }).exec()
// 多个节点
wx.createSelectorQuery().selectAll('.a-class').boundingClientRect(function(rects){
      rects.forEach(function(rect){
        rect.id      // 节点的ID
        rect.dataset // 节点的dataset
        rect.left    // 节点的左边界坐标
        rect.right   // 节点的右边界坐标
        rect.top     // 节点的上边界坐标
        rect.bottom  // 节点的下边界坐标
        rect.width   // 节点的宽度
        rect.height  // 节点的高度
      })
    }).exec()
```

[界面]: https://developers.weixin.qq.com/miniprogram/dev/api/wx.showToast.html
[showtoast]: https://developers.weixin.qq.com/miniprogram/dev/api/wx.showToast.html
[requestSubscribeMessage]: https://developers.weixin.qq.com/miniprogram/dev/api/open-api/subscribe-message/wx.requestSubscribeMessage.html
