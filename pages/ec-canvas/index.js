var dot = "../../"
import * as echarts from "../../ec-canvas/echarts"

const app = getApp()

function initChart(canvas, width, height, dpr) {
  console.info("initChart")
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr, // new
  })
  canvas.setChart(chart)

  var option = {
    color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F"],
    title: {
      text: "测试关系图",
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: "quinticInOut",
    series: [
      {
        type: "graph",
        layout: "force",
        roam: true,
        force: {
          edgeLength: 100,
          repulsion: 200,
        },
        symbolSize: 5,
        label: {
          normal: {
            show: true,
          },
        },
        // edgeSymbol: ['circle', 'arrow'],
        // edgeSymbolSize: [4, 10],
        edgeLabel: {
          normal: {
            textStyle: {
              fontSize: 20,
            },
          },
        },
        data: [
          {
            name: "节点1",
            itemStyle: {
              color: "#37A2DA",
            },
          },
          {
            name: "节点2",
            itemStyle: {
              color: "#32C5E9",
            },
          },
          {
            name: "节点3",
            itemStyle: {
              color: "#9FE6B8",
            },
          },
          {
            name: "节点4",
            itemStyle: {
              color: "#FF9F7F",
            },
          },
          {
            name: "节点5",
            itemStyle: {
              color: "red",
            },
          },
        ],
        // links: [],
        links: [
          {
            source: "节点1",
            target: "节点2",
            label: {
              show: false,
            },
            lineStyle: {
              curveness: 0.2,
            },
          },
          {
            source: "节点1",
            target: "节点3",
          },
          {
            source: "节点1",
            target: "节点4",
          },
          {
            source: "节点1",
            target: "节点5",
          },
        ],
        lineStyle: {
          normal: {
            opacity: 0.9,
            width: 2,
            curveness: 0,
          },
        },
      },
    ],
  }

  chart.setOption(option)
  return chart
}

Page({
  onShareAppMessage: function(res) {
    return {
      title: "ECharts 可以在微信小程序中使用啦！",
      path: "/pages/index/index",
      success: function() {},
      fail: function() {},
    }
  },
  data: {
    ec: {
      onInit: initChart,
    },
  },

  onReady() {},
})
