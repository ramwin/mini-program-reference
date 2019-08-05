// pages/component/map.js
Page({
  data: {
    markers: [
      {
        "title": "王祥",
        "longitude": 121.544568,
        "latitude": 31.274717,
        "iconPath": "https://publicstatic.duishang.net/avatar-2586",
        // "iconPath": "/img/icons/bar.png",
        "id": 1,
        width: 100,
        height: 100,
        "label": "标签",
      },
    ]
  },
  addmarker: function() {
    console.info("添加marker")
    this.data.markers.push(
      {
        "longitude": 121.544568,
        "latitude": 31.274717,
        "iconPath": "https://publicstatic.duishang.net/avatar-2586",
        // "iconPath": "/img/icons/bar.png",
        "id": 1,
        width: 100,
        height: 100,
      },
    )
    this.setData({
      "markers": this.data.markers,
    })
  }
})
