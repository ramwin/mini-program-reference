// pages/api/interface/interaction.js
Page({
  data: {

  },
  actionsheet: function() {
    wx.showActionSheet({
      itemList: ["A", "B", "C"],
      success (res) {
        console.info(res)
        // {errMsg : "showActionSheet:ok", tapIndex: 1}
      },
      fail (res) {
        console.info(res)
        // {errMsg: "showActionSheet:fail cancel"}
      }
    })
  },
  modal: function() {
    wx.showLoading({
      "title": "正在保存信息",
      "mask": true,
    })
  },
})
