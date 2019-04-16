// pages/frame/view/WXML.js
Page({
  data: {
    complex_data: {
      list: [1,2,3],
      dict: {"key": "value"},
      str: "string",
    },
    importcss: false,
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
  tapName: function(event) {
    console.log(event);
  },
  touchmove: function(evt) {
    console.info("摸了", evt)
  },
  touchmove_returnfalse: function(evt) {
    console.info(evt)
    return false;
  },
  catch_false: function(evt) {
    return false
  },
  catch_true: function(evt) {
    console.info("catch_true")
    return true;
  },
  bind_raise: function(evt) {
    throw Error("你的蒙版，你不能滚");
  },
  importcss: function() {
    var query = wx.createSelectorQuery();
    var rect = query.select("#ramquery").boundingClientRect()
    console.info("rect", rect)
    query.exec(function(res) {
      console.info("res", res);
      res[0]
    })
    this.setData({
      "importcss": true
    })
    query.select("body")
    query.exec(function(res) {
    })
  }
})
