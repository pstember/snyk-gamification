<template>
  <div>
    <highcharts class="hc" :options="chartOptions" ref="chart_bars"></highcharts>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'column',
        },
        title: {
          text: 'Monthly Average Rainfall',
        },
        subtitle: {
          text: 'Source: WorldClimate.com',
        },
        xAxis: {
          categories: [
            'NPM',
            'Maven',
            'Nuget',
          ],
          crosshair: true,
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Number of vulnerabilities',
          },
        },
        tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>'
            + '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
          },
        },
        series: [{
          name: 'High',
          data: [350, 100, 130],
        }, {
          name: 'Medium',
          data: [400, 50, 150],
        }, {
          name: 'Low',
          data: [1000, 250, 50],
        }],
      },
    };
  },
};
</script>
