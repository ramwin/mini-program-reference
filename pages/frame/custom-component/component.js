// pages/frame/custom-component/component.js
Page({
  data: {
    "booltrue": true,
    "boolfalse": false,
    "dict": {
      "key": "value",
    }
  },
  keyaddold: function() {
    this.data.dict.key += 'old'
    this.setData({
      "dict": this.data.dict,
    })
  },
})
