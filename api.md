**Xiang Wang @ 2018-09-20 01:54:33**


[官方文档](https://developers.weixin.qq.com/miniprogram/dev/api/)

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

## 界面
[官网文档](https://developers.weixin.qq.com/miniprogram/dev/api/api-react.html)
* ### 交互反馈:
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

* 滚动
将页面滚动到目标位置
wx.pageScrollTo({
    scrollTop: 3000rpx;
    duration: 300;
})

* [ ] 导航栏
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
