// pages/api/location.js
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

  openlocation: function() {
    wx.openLocation({
      success: function() {
      },
      fail: function() {
      }
    })
  },

  chooseLocation: function() {
    wx.chooseLocation({
      success: res => {
        console.info({
          "name": "位置名称",
          "address": "详细地址",
          "latitude": "纬度",
          "longitude": "经度",
        }, res)
      },
      fail: res => {
        console.info({
          "errMsg": "chooseLocation:fail auth deny"
        } ,res)
      }
    })
  }
})
