// pages/frame/custom-component/components/component-properties.js
Component({
  properties: {
    "propertya": {
      type: Boolean,
      value: false,  // 其实默认就是false的
      observer: function(newVal, oldVal) {
        console.info(`组件#${this.id}传入了propertya: ${newVal}, 类型: ${typeof(newVal)}`)
        this.setData({
          "innerpropertya": newVal,
        })
      }
    },
  },

  data: {
    "innerpropertya": undefined,
  },

  methods: {

  },
  options: {
    addGlobalClass: true,
  },
})
