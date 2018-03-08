// pages/text/text-component.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  options: {
    multipleSlots: true
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function() {
      console.log("谁让你点我了")
      this.triggerEvent('myevent', {}, {})
    }
  }
})
