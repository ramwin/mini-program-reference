// pages/api/interface/animation.js
Page({
  data: {
    animationData: null,
    animationData2: null,
    scale_hide: true,
  },
  onLoad: function (options) {
    var animation = wx.createAnimation({
      duration: 1000,
      "timingFunction": "ease",
    })
    animation.height(400);
    // animation.backgroundColor("#fff");
    this.animation = animation;
  },
  tap1: function() {
    console.info("点击了");
    this.animation.rotate(45).scale(2, 2).step();
    this.setData({
      "animationData": this.animation.export()
    })
    // this.data.animation1.step({
    //   "duration": 1400,
    //   timingFunction: "linear",
    // });
  },
  tap2: function() {
    var animation2 = wx.createAnimation({
      duration: 1000,
      "timingFunction": "ease",
    })
    animation2.height(400);
    animation2.rotate(45).scale(2, 2).step();
    // animation.backgroundColor("#fff");
    this.setData({
      "animationData2":  animation2.export()
    })
  },
  tapscale: function() {
    console.info("scale")
    var animation = wx.createAnimation({
      duration: 1000,
      "timingFunction": "ease",
    })
    animation.scale(0.1).step();
    this.setData({
      "animation":  animation.export()
    })
    this.setData({
      "scale_hide": false,
    })
  },
  animationstart: function() {
    console.info("动画开始");
  },
  animationend: function() {
    console.info("动画结束");
    console.info("隐藏起来");
    this.setData({
      "scale_hide": false,
    })
  },
})
