 // pages/frame/view/components/testif.js
const DEFAULT_BOOL = true
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    propmybool: {
      type: Boolean,
      value: DEFAULT_BOOL,
      observer: function(newVal, oldVal) {
        console.info("传入了propmybool", newVal);
        this.setData({
          "mybool": newVal,
        })
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    "mybool": DEFAULT_BOOL,
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
