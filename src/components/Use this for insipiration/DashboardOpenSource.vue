<template>
  <div>
    <dashboard-open-source-dependencies></dashboard-open-source-dependencies>
    <dashboard-open-source-licenses></dashboard-open-source-licenses>
    <dashboard-open-source-quality></dashboard-open-source-quality>
    <dashboard-open-source-actions></dashboard-open-source-actions>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DashboardOpenSourceDependencies from './DashboardOpenSourceDependencies.vue';
import DashboardOpenSourceLicenses from './DashboardOpenSourceLicenses.vue';
import DashboardOpenSourceQuality from './DashboardOpenSourceQuality.vue';
import DashboardOpenSourceActions from './DashboardOpenSourceActions.vue';
import PieChart from '../charts/PieChart.vue'
import StatsCard from '../baseElements/baseCards/BaseStatsCard.vue';

@Component({
  components: {
    DashboardOpenSourceDependencies,
    DashboardOpenSourceLicenses,
    DashboardOpenSourceQuality,
    DashboardOpenSourceActions,
    PieChart,
    StatsCard,
  },
})
export default class DashboardOpenSource extends Vue {
}
</script>