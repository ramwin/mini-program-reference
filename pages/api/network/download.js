// pages/api/network/download.js
Page({
  data: {

  },
  onLoad: function (options) {

  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  },
  download: function() {
    console.info("开始下载文件");
    wx.downloadFile({
      url: "https://publicstatic.duishang.net/static-mini-report.pdf",
      success(res) {
        console.info("下载完成");
        if (res.errMsg == 'downloadFile:ok') {
          console.info(res.tempFilePath)
          // wx.openDocument({
          //   filePath: res.tempFilePath,
          // })
          wx.saveFile({
            tempFilePath: res.tempFilePath,
            success: function(res) {
              console.info(res);
            }
          })
        } else {
          throw Error(res.errMsg)
        }
      }
    })
  }
})
