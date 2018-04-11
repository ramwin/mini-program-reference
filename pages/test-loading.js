// pages/test-loading.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  showloading: function() {
    wx.showLoading({
      "title": "loading标题",
      "mask": true,
      "success": function() {
        console.log("成功调用loading")
        setTimeout(
          function() { wx.hideLoading()}, 5000)
      },
      "fail": function() {
        console.log("失败调用loading")
      },
      "complete": function() {
        console.log("完成loading")
      }
    })
  },
  showmodal: function() {
    wx.showModal({
      "title": "标题",
      "content": "提示的内容",
      "showCancel": true,
      "cancelText": "取消文字",
      "cancelColor": "#ff0000",
      "confirmText": "确认文字",
      "confirmColor": "#0F0",
      "success": function(kwargs) {
        console.log(kwargs)
        console.log("调用成功，不管是确认还是失败")
      }
    })
  },
  showaction: function() {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success: function (res) {
        console.log(res)
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res)
        console.log(res.errMsg)
      }
    })
  }
})