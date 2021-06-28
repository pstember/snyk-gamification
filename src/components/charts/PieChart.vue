<template>
  <div>
    <highcharts :options="this.chartOptions" ref="chart"></highcharts>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import Highcharts from 'highcharts'
import exportingInit from 'highcharts/modules/exporting'

exportingInit(Highcharts)

@Component({
  components: {
  },
})
export default class DashboardOpenSource extends Vue {
  @Prop() private chartOptions;
}
</script>
