// pages/api/WXML.js
Page({
  data: {
    "current": 3,
    "range": [
      0,1,2,3,4,5,6,7,8,9
    ],
  },
  onLoad: function (options) {

  },
  getheight: function() {
    console.group("getheight")
    var current = parseInt(this.data.current)
    console.info(current)
    const query = wx.createSelectorQuery()
    var nodes = query.selectAll(".h3")
    console.info(nodes)
    console.info(nodes.length)
    nodes.boundingClientRect(function(rects) {
      // 这样会循环所有的node
      console.info(rects[current].top)
    })
    query.exec()
    console.groupEnd()
  },
  dynamicinput: function(event) {
    console.info(event.detail)
    this.setData({
      "current": event.detail.value
    })
  }
})
