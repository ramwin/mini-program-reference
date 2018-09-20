**Xiang Wang @ 2018-09-20 01:54:33**


## 网络
### 发起请求
```
wx.request({
    url: '',
    method: '', GET|POST|PUT
    data: '',
    header: '',
})
```

## 开放接口
### 登录
* wx.login
```
    wx.login({
        success: function(res) {
            res {'code': '用户code', 'errMsg': 'login:ok'
        }
    })
```
