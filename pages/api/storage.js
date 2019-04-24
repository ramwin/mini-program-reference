// pages/api/storage.js
var dot = "../../"
var cache = require(dot + "utils/cache.js")
Page({
  data: {

  },

  onLoad: function (options) {
  },
  set: function() {
    cache.set("user", {"name": "王祥"}, 5)
  },
  show: function() {
    console.info(cache.get("user"))
  },
})
