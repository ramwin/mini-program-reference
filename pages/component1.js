// pages/component1.js
Component({
  /**
   * 组件的属性列表
   */
  properties: { // 如果传入的属性没有在下面定义，是无法使用的。
    innerText: {
      type: String,
      value: 'default value'
    },
    innerdata: {
      type: Object,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    sing: function() {
      console.log(this.properties.innerdata['age'])
      this.properties.innerdata['age'] += 1;  // 直接修改properties是不行的
      var myEventDetail = {'mydetail': 'mydetail'} // detail对象，提供给事件监听函数
      var myEventOption = {'myoption': 'myoption'} // 触发事件的选项
      this.triggerEvent('sing', myEventDetail, myEventOption);
    }
  }
})
