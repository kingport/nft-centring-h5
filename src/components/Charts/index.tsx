import React, { useEffect } from "react";
import F2 from "@antv/f2/lib/index";
import Interaction from "@antv/f2/lib/interaction/pan";
import dayjs from "dayjs";

const Charts = (props) => {
  const { data, width = "100%", type = "interval", unit = "USD", periodEarnings } = props;
  useEffect(() => {
    if (type === "line") {
      renderChartsLine();
    }
    if (type === "interval" && data) {
      renderChartsInterval(data);
    }
    if (type === "graph" && data) {
      renderChartsGraph(data);
    }
    if (type === "analysis" && data) {
      renderChartsAnalysis(data);
    }
    // eslint-disable-next-line
  }, [data]);

  // 柱状图渲染
  const renderChartsInterval = (data) => {
    let _data = data;
    _data.map((item) => (item.performance = item.performance * 1));
    let chart;
    if (!chart) {
      chart = new F2.Chart<typeof data[0]>({
        id: "recordChart",
        pixelRatio: window.devicePixelRatio,
      });
    }
    chart.source(data);
    chart.scale("date", {
      type: "timeCat",
      mask: "MM/DD",
      tickCount: 7, // time时间轴切割等分
    });
    chart.axis("date", true);
    chart.legend(false);
    chart.tooltip(false);
    chart
      .interval()
      .position("date*performance")
      .color("date*performance", (date, performance) => {
        if (date === dayjs(new Date()).format("YYYY-MM-DD")) {
          return "rgba(0, 181, 207, 1)";
        } else {
          return "rgba(0, 181, 207, 0.3)";
        }
      });
    if (periodEarnings * 1 > 0) {
      chart.guide().line({
        start: ["min", periodEarnings * 1],
        end: ["max", periodEarnings * 1],
        style: {
          stroke: "#5AB5CD",

          lineWidth: 1,
          lineCap: "round",
        },
      });
      chart.guide().text({
        position: [data[data.length - 1].time, periodEarnings * 1.1],
        content: `${periodEarnings * 1} ${unit}`,
        offsetX: -20,
        style: {
          fontSize: 10,
        },
        limitInPlot: true,
      });
    }
    chart.render();

    // 绘制柱状图文本
    const offset = -5;
    const canvas = chart.get("canvas");
    const group = canvas.addGroup();
    const shapes = {};
    data.forEach(function (obj, index) {
      // 当天渲染
      if (new Date().toDateString() === new Date(obj.date).toDateString() && obj.performance !== 0) {
        const point = chart.getPosition(obj);
        const text = group.addShape("text", {
          attrs: {
            x: point.x,
            y: point.y + offset,
            text: obj.performance,
            textAlign: "center",
            textBaseline: "bottom",
            fill: "#1F5C7F",
          },
        });
        shapes[obj.date] = text;
      }
    });
    // let lastTextShape; // 上一个被选中的 text
    // 配置柱状图点击交互 坑
    // F2.Chart.registerInteraction("interval-select", Interaction);

    // chart.interaction("interval-select", {
    //   selectAxisStyle: {
    //     fill: "#252d35",
    //     fontWeight: "bold",
    //   },
    //   mode: "range",
    //   defaultSelected: {
    //     date: data[data.length - 1]?.date,
    //     performance: data[data.length - 1]?.performance * 1,
    //   },
    //   onEnd: function onEnd(ev) {
    //     const data = ev.data,
    //       selected = ev.selected;

    //     lastTextShape &&
    //       lastTextShape.attr({
    //         fill: "#808080",
    //         fontWeight: "normal",
    //       });
    //     if (selected) {
    //       const textShape = shapes[data.date];
    //       textShape.attr({
    //         fill: "#252d35",
    //         fontWeight: "bold",
    //       });
    //       lastTextShape = textShape;
    //     }
    //     canvas.draw();
    //   },
    // });
  };

  // 线图渲染
  const renderChartsLine = () => {
    // let chart: F2.Chart = null;
    const data = [
      {
        month: "08/07",
        PM: 21.8,
      },
      {
        month: "08/08",
        PM: 23.3,
      },
      {
        month: "08/09",
        PM: 29.4,
      },
      {
        month: "08/10",
        PM: 27.6,
      },
      {
        month: "08/11",
        PM: 25.1,
      },
      {
        month: "08/12",
        PM: 19,
      },
      {
        month: "08/13",
        PM: 19.9,
      },
      {
        month: "08/14",
        PM: 16.2,
      },
      {
        month: "08/15",
        PM: 21.7,
      },
      {
        month: "08/16",
        PM: 23.7,
      },
      {
        month: "08/17",
        PM: 23.7,
      },
    ];
    // if (!chart) {
    const chart = new F2.Chart<typeof data[0]>({
      id: "recordChart",
      pixelRatio: window.devicePixelRatio,
      padding: [0, 10, 10, 10],
    });
    // }
    chart.source(data);
    chart.scale("month", {
      tickCount: 2, // time时间轴切割等分
    });
    chart.axis("month", {
      grid: {
        lineDash: null,
        stroke: "#e8e8e8",
        lineWidth: 1,
      },
    }); // 坐标轴配置
    chart.axis("PM", {
      grid: {
        lineDash: null,
      },
    }); // 坐标轴配置

    // 绘制 Guide.Line
    chart.guide().line({
      start: ["min", 25],
      end: ["max", 25],
      style: {
        stroke: "#d0502d",
        lineWidth: 2,
        lineCap: "round",
      },
    });

    chart.line().position("month*PM").color("#00B5CF").shape("smooth");
    chart.point().position("month*PM").color("#00B5CF");
    chart.render();
  };

  // 曲线图
  const renderChartsGraph = (data) => {
    let chart: F2.Chart;
    let _data = data;
    _data.map((item) => (item.value = item.value * 1));
    // if (!chart) {
    chart = new F2.Chart({
      id: "recordChart",
      pixelRatio: window.devicePixelRatio,
      padding: [20, "auto", 20, "auto"],
    });
    // }
    chart.source(_data, {
      time: {
        type: "timeCat",
        mask: "MM/DD",
        tickCount: 7,
        range: [0, 1],
      },
      value: {
        tickCount: 5,
        min: 0,
        alias: "期間值",
      },
    });
    chart.axis("value", {
      label: (text, index, total) => {
        const cfg = {
          fill: "#4E6585",
          fontSize: 12,
        };
        return cfg;
      },
      grid: {
        // lineDash: null,
        stroke: "#DFE5ED",
        lineWidth: 1,
      },
    });
    chart.axis("time", {
      label: (text, index, total) => {
        const cfg = {
          fill: "#4E6585",
          fontSize: 12,
        };
        return cfg;
      },
    });

    chart.scale("value", {
      range: [0, 1],
    });

    chart.tooltip(false);
    if (periodEarnings * 1 > 0) {
      chart.guide().line({
        start: ["min", periodEarnings * 1],
        end: ["max", periodEarnings * 1],
        style: {
          stroke: "#5AB5CD",

          lineWidth: 1,
          lineCap: "round",
        },
      });
      chart.guide().text({
        position: [data[data.length - 1].time, periodEarnings * 1.1],
        content: `${periodEarnings * 1} ${unit}`,
        offsetX: -20,
        style: {
          fontSize: 10,
        },
        limitInPlot: true,
      });
    }

    chart.line().position("time*value").color("l(90) 0:#5AB5CD 1:#fff").shape("smooth");
    chart.area().position("time*value").color("l(90) 0:#5AB5CD 1:#fff").shape("smooth");
    chart.render();
  };

  // 市场收益分析
  const renderChartsAnalysis = (data) => {
    let chart: F2.Chart;
    let _data = data;
    _data.map((item) => (item.amount = item.amount * 1));
    // if (!chart) {
    chart = new F2.Chart({
      id: "recordChart",
      pixelRatio: window.devicePixelRatio,
      padding: [20, 20, 20, 20],
    });
    // }
    chart.source(data, {
      settle_date: {
        type: "timeCat",
        mask: "MM/DD",
        tickCount: 7,
        range: [0, 1],
      },
      amount: {
        tickCount: 5,
        min: 0,
        alias: "期間值",
      },
    });
    chart.axis("amount", {
      label: (text, index, total) => {
        const cfg = {
          fill: "#4E6585",
          fontSize: 12,
        };
        return cfg;
      },
      grid: {
        // lineDash: null,
        stroke: "#DFE5ED",
        lineWidth: 1,
      },
    });
    chart.axis("settle_date", {
      label: (text, index, total) => {
        const cfg = {
          fill: "#4E6585",
          fontSize: 12,
        };
        return cfg;
      },
    });

    chart.tooltip(false);
    if (periodEarnings * 1 > 0) {
      chart.guide().line({
        start: ["min", periodEarnings * 1],
        end: ["max", periodEarnings * 1],
        style: {
          stroke: "#5AB5CD",

          lineWidth: 1,
          lineCap: "round",
        },
      });
      chart.guide().text({
        position: [data[data.length - 1].settle_date, periodEarnings * 1.1],
        content: `${periodEarnings * 1}FIL`,
        style: {
          fontSize: 10,
        },
      });
    }
    chart.line().position("settle_date*amount").color("l(90) 0:#5AB5CD 1:#fff").shape("smooth");
    chart.area().position("settle_date*amount").color("l(90) 0:#5AB5CD 1:#fff").shape("smooth");
    // chart.axis("settle_date", {
    //   label: function label(text, index, total) {
    //     const textCfg: { textAlign?: string } = {};
    //     if (index === 0) {
    //       textCfg.textAlign = "left";
    //     } else if (index === total - 1) {
    //       textCfg.textAlign = "right";
    //     }
    //     return textCfg;
    //   },
    // });
    chart.render();
  };

  return <canvas width="375" id="recordChart" height="300"></canvas>;
};

export default Charts;
