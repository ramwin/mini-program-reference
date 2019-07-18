// pages/api/share.js
Page({
  data: {

  },
  onLoad: function (options) {
    // wx.hideShareMenu();
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
    console.info("测试转发报错")
    wx.showToast({
      "icon": "none",
      "title": "当前账号不可以转发",
    })
    wx.hideShareMenu();
    throw Error("转发报错");  // 不行不管是hideShareMenu还是报一个错，最后都会导致默认的转发弹窗显示出来
    return {};
  },
  share: function() {
    console.info("显示转发按钮")
    wx.showShareMenu({
    })
  },
})
