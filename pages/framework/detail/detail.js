var dot = "../../../"
var api = require(dot + "api/");

Page({

  data: {
    id: undefined,
    detail: undefined,
  },

  get_api: function() {
    return api.获取详情
  },

  onLoad: function (options) {
    this.setData({
      id: options.id,
    })
    this.refresh()
  },
  refresh: function() {
    var scope = this;
    this.get_api()(
      this.data.id,
      resdata=>{
        scope.setData({
          detail: resdata,
        })
      }
    )
  },
  onPullDownRefresh: function() {
    this.refresh();
  },
})