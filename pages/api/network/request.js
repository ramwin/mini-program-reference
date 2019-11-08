// pages/api/network/request.js
Page({
  data: {

  },
  sendrequest: function() {
    wx.request({
      data: {

      },
      url: "https://www.baidu.com/",
      success: function() {
        console.info("成功")
      },
      complete: function() {
        console.info("结束")
      }
    })
  }
})
