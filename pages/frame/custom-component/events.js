// pages/frame/custom-component/events.js
// 测试组件的事件
Page({
  data: {

  },

  onLoad: function (options) {

  },

  tapevent: function() {
    var component = this.selectComponent("#testevent")
    component.setData({
      "title": "啊呀，我被点了",
      "count": component.data.count + 1,
    })
  },
  tapeventnotfound: function() {
    var component = this.selectComponent("#notfound")
    if (component == null) {
    } else {
      component.setData({
        "title": "啊呀，我被点了",
        "count": component.data.count + 1,
      })
    }
  },

})
