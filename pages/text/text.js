Page({
  data: {
    "title": "标题",
    "texts": {
      "page": 1,
      "results": [
        {"id": 1, "text": "第一条数据"},
        {"id": 2, "text": "第二条数据"}
      ]
    },
    "array": [
      [1, 2, 3, 4, 5]
    ]
  },
  onLoad: function () {
    console.log("载入了text页面");
  },
  onPullDownRefresh: function() {
    console.log("就算你下拉，我也不变哦");
  },
  onShareAppMessage: function() {
    console.log("谢谢分享")
    return {
      "title": "分享的标题",
      "path": "/text/text"
    }
  },
  viewTap: function () {
    console.log('你还真的敢啊');
    console.log(this.route);
    this.setData({"title": "我被点了555"})
  }
})
