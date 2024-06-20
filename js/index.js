////////pie
(function () {
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  option = {
    title: {
      // text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: 'bottom',
      textStyle: {
        color: '#fff'
      }
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius:  '75%',
        avoidLabelOverlap: false,
        padAngle:20,
        itemStyle: {
          borderRadius: 10,
          borderWidth:30,	//边框的宽度
        },
        data: [
          { value: 1048, name: 'Search Engine', itemStyle: { color: '#351148' } },
          { value: 735, name: 'Direct', itemStyle: { color: '#61ccf3' } },
          { value: 580, name: 'Email', itemStyle: { color: '#beeafa' } },
          { value: 484, name: 'Union Ads', itemStyle: { color: '#d3a8eb' } },
          { value: 300, name: 'Video Ads', itemStyle: { color: '#a652d7' } }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

///////////// line
(function () {
  var myChart = echarts.init(document.querySelector(".line .chart"));

  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      top: 'top',
      textStyle: {
        color: '#fff'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['2020', '2021', '2022', '2023', '2024', '2025', '2026','2027','2028','2028'],
      axisLabel: {
        color: '#fff'
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: '#fff'
      }
    },
    series: [
      {
        name: 'Direct',
        type: 'bar',
        stack: 'total',
        emphasis: {
          focus: 'series'
        },
        data: [320, 302, 301, 334, 390, 330, 320,306,301,302],
        itemStyle: {
          color: '#351148'
        },
        barWidth: '28%',
      },
      {
        name: 'Mail Ad',
        type: 'bar',
        stack: 'total',
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210,306,301,302],
        itemStyle: {
          color: '#61ccf3'
        },
      },
      {
        name: 'Affiliate Ad',
        type: 'bar',
        stack: 'total',
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310,306,301,302],
        itemStyle: {
          color: '#beeafa'
        },
      },
      {
        name: 'Video Ad',
        type: 'bar',
        stack: 'total',
        emphasis: {
          focus: 'series'
        },
        data: [150, 212, 201, 154, 190, 330, 410,406,401,402],
        itemStyle: {
          color: '#d3a8eb'
        },
      },
      {
        name: 'Search Engine',
        type: 'bar',
        stack: 'total',
        emphasis: {
          focus: 'series'
        },
        data: [502, 508, 509, 554, 600, 610, 620,606,601,602],
        itemStyle: {
          color: '#a652d7'
        },
      },
      {
        name: 'Others',
        type: 'bar',
        stack: 'total',
        emphasis: {
          focus: 'series'
        },
        data: [250, 312, 491, 454, 590, 630, 710,756,771,812],
        itemStyle: {
          color: '#70259d'
        },
      },


    ]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();













