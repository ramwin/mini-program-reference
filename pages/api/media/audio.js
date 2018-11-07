// pages/api/media/audio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodes: [{
      "name": "code",
      "type": "text",
      "text": "var audio_context = wx.createInnerAudioContext()\n" +
              "audio_context.src = this.data.mp3url;\n" +
              "audio_context.play();",
    }],
    "mp3url": "https://www.ramwin.com/media/Jerry%20Lee%20Lewis%20-%20Great%20Balls%20Of%20Fire.mp3"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var audio_context = wx.createInnerAudioContext();
    audio_context.src = this.data.mp3url;
    audio_context.play();
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

  }
})
