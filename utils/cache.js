// Xiang Wang @ 2019-04-24 16:24:38
//
//

function set(key, value, expire) {
  // 设置一个key, expire秒后过期
  var expireat = Date.now()/1000 + expire
  wx.setStorageSync(key, {"value": value, "expireat": expireat})
}

function get(key) {
  // 返回数据或者 null
  var result = wx.getStorageSync(key)
  if (result=="") {
    return null
  }
  if (result["expireat"] < Date.now()/1000) {
    wx.removeStorageSync(key)
    return null
  } else {
    return result["value"]
  }
}

module.exports = {
  get: get,
  set: set,
}
