// pages/frame/view/components/testhidden.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    propbool: {
      type: Boolean,
      value: false,
      observer: function(newVal, oldVal) {
        console.info("输入propbool", newVal);
        this.setData({
          "mybool": newVal,
        })
      }
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

  },
  options: {
    addGlobalClass: true,
  },
})
