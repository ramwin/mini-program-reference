// pages/api/network/websocket.js
var pageid = Math.random()
Page({
  data: {
    client: null,
    messages: [],
  },
  onLoad: function (options) {
    var scope = this;
    this.data.client = wx.connectSocket({
      url: "wss://duishang.net/ws/chat/ramwin/",
    })
    this.data.client.onMessage(res=>{
      console.info("消息来啦", JSON.parse(res.data).message);
      scope.data.messages.unshift(JSON.parse(res.data).message);
      scope.setData({
        "messages": scope.data.messages.slice(0,5),
      })
    })
    this.data.interval = setInterval(
      res=>{
        console.info(pageid);
        console.info("当前socket状态", this.data.client.readyState)
        if (this.data.client.readyState == 3) {
          this.data.client = wx.connectSocket({
            url: "wss://duishang.net/ws/chat/ramwin/",
          })
          this.data.client.onMessage(res=>{
            console.info("消息来啦", JSON.parse(res.data).message);
            scope.data.messages.unshift(JSON.parse(res.data).message);
            scope.setData({
              "messages": scope.data.messages.slice(0,5),
            })
          })
        }
      },
      3000
    )
  },
  onReady: function () {
  },
  onShow: function () {
  },
  onHide: function () {
  },
  onUnload: function () {
    clearInterval(this.data.interval);
    this.data.client.close();
  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  },
  sendone: function() {
    this.data.client.send({
      data: JSON.stringify({"message": "点击了按钮"}),
      success: function() {
        console.info("发送成功");
      },
      fail: function() {
        console.error("发送失败，已经断开了链接");
      }
    })
  },
  close: function() {
    this.data.client.close({});
  },
  stopheart: function() {
    console.info("停止心跳了");
    clearInterval(this.data.interval);
  }
})
