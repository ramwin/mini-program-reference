// pages/component/view/scroll-view.js
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    toView: 'red',
    scrollTop: 100
  },
  upper: function(e) {
    console.log(e)
  },
  lower: function(e) {
    console.log(e)
  },
  scroll: function(e) {
    console.log(e)
  },
  tap: function(e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function(e) {
    console.group("tapMove")
    console.info(`scrollTop before: ${this.data.scrollTop}`)
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
    console.info(`scrollTop after: ${this.data.scrollTop}`)
    console.groupEnd()
  }
})

