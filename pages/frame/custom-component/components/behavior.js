module.exports = Behavior({
  data: {
    size: 30,
  },
  methods: {
    grow() {
      this.data.size += 3
      this.setData({
        size: this.data.size,
      })
      console.info("长大啦")
    },
    ill: function() {
      this.data.size -= 10
      this.setData({
        size: this.data.size,
      })
    },
    say: function() {
      console.info(`我现在${this.data.size}大了，我要快快长大`)
    }
  }
})