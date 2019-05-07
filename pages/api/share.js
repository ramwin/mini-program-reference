// pages/api/share.js
Page({
  data: {

  },
  onLoad: function (options) {
    wx.hideShareMenu();
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  share: function() {
    console.info("显示转发按钮")
    wx.showShareMenu({
    })
  },
})
