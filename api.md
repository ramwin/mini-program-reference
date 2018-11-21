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
* 交互反馈:
  1. wx.showToast
    ```
    wx.showToast({
        "title": "成功",
        "icon": "success|loading|none",
    })
    ```
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
