// pages/frame/custom-component/property.js
Page({
  data: {
    str: "字符串",
    bool: true,
    dict: {
      "key": "value",
      "time": Date.now()
    }
  },
  changebool: function() {
    this.setData({
      "bool": !this.data.bool,
    })
  },
  changedict: function() {
    console.info("property.changedict")
    this.setData({
      "dict": {
        "time": Date.now()
      }
    })
  },
})
