**Xiang Wang @ 2018-09-20 01:54:33**

* [小程序文档](./README.md)
* [官方文档](https://developers.weixin.qq.com/miniprogram/dev/api/)

## 路由 [官网](https://developers.weixin.qq.com/miniprogram/dev/api/wx.navigateBack.html)

### wx.navigateBack
```
wx.nanigateBack({
    delta: number, // 返回的页面数, 如果delta大于现有页面数，则返回到首页, 必填
    success: // 接口成功的返回
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

## 界面
[官网文档](https://developers.weixin.qq.com/miniprogram/dev/api/api-react.html)
### 交互反馈:
    1. wx.showToast [官网](https://developers.weixin.qq.com/miniprogram/dev/api/wx.showToast.html)
    ```
    wx.showToast({
        "title": "成功",
        "icon": "success|loading|none",
    })
    ```

    2. wx.showModal
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
      // 可选参数
      showCancel: true, // 是否显示取消按钮， 默认True
      cancelColor: "#000000",  // 取消按钮的文字颜色
      confirmText: "确认",  // 最多4个
      confirmColor: "#3cc51f",
      fail: "", // 接口调用失败，几乎不可能
      complete: "", // 接口调用结束
    })
    ```

### 导航栏
* 修改顶部页面标题
```
wx.setNavigationBarTitle({
  title: "当前页面"
})
```

### 下拉刷新
* wx.stopPullDownRefresh
开启下拉刷新，并且会触发 page.onPullDownRefresh
* wx.startPullDownRefresh
关闭下拉刷新的动画

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
### 发起请求
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
        if (res.errMsg == 'downloaadFile:ok') {
          console.info(res.tempFilePath)
        }
      }
})
```

## 媒体
### 图片
* 保存图片到相册 需要先授权
```
wx.saveImageToPhotosAlbum({
    filePath: 图片路径, 必须是临时文件路径或者永久路径
    success(res) {}
})
```

* 预览图片
```
wx.previewImage({
  urls: "需要预览的图片列表",
})
```
* [ ] 获取图片信息
* [ ] 压缩图片
* [ ] 客户端会话选择文件
* [ ] 从本地相册选择文件


## 开放接口
### 登录
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

### 授权
这个授权真的是用fail, success来判断。但是授权拒绝一次或者同意一次，就不再弹窗提问了。
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
