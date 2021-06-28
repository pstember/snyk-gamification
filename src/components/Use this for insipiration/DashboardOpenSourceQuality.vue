<template>
  <div>
    <b-row>
      <b-col>
        <h2>Code insights</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <pie-chart v-if="$store.getters.dependencies.updated" v-bind:chartOptions="$store.getters.packageChart"></pie-chart>
        <b-spinner v-else class="mx-auto" label="Spinning" ></b-spinner>
      </b-col>
      <b-col>
        <b-row>
          <b-col cols="6">
              <stats-card>
                <div slot="header" class="icon-success">
                  <b-icon icon="calculator-fill" class="con-big text-center"></b-icon>
                </div>
                <div slot="content" class="numbers">
                        <p>Total</p>
                        {{ $store.getters.dependencies.total }}<br/>
                </div>
              <div slot="footer">
                <b-icon icon="pie-chart-fill"></b-icon> {{ $store.getters.dependencies.duplicate }} in mulitple versions
              </div>
              </stats-card>
          </b-col>
          <b-col cols="6">
            <stats-card>
              <div slot="header" class="icon-success">
                <b-icon icon="droplet-fill" class="con-big text-center" style="color: red;"></b-icon>
              </div>
              <div slot="content" class="numbers">
                      <p>Vulnerable</p>
                      {{ $store.getters.dependencies.vulnerable }}
              </div>
              <div slot="footer">
                <b-icon icon="eye-fill"></b-icon> {{ $store.getters.dependencies.updatedAndVuln }} on latest version
              </div>
            </stats-card>
         </b-col>
          <b-col cols="6">
              <stats-card>
                <div slot="header" class="icon-success">
                  <b-icon icon="shield-fill-exclamation" class="con-big text-center" style="color: orange;"></b-icon>
                </div>
                <div slot="content" class="numbers">
                        <p>Outdated</p>
                        {{ $store.getters.dependencies.outdated }}<br/>
                </div>
                <div slot="footer">
                  <b-icon icon="shield-fill-exclamation" class="con-big text-center" style="color: orange;"></b-icon> +
                  <b-icon icon="droplet-fill" class="con-big text-center" style="color: red;"></b-icon> = {{ $store.getters.dependencies.outdatedAndVuln }}
                </div>
              </stats-card>
          </b-col>
          <b-col cols="6">
            <stats-card>
              <div slot="header" class="icon-success">
                <b-icon icon="eye-slash-fill" class="con-big text-center" style="color: red;"></b-icon>
              </div>
              <div slot="content" class="numbers">
                      <p>Deprecated</p>
                      {{ $store.getters.dependencies.deprecated }}
              </div>
              <div slot="footer" class="text-left">
                <b-icon icon="eye-slash-fill" class="con-big text-center" style="color: red;"></b-icon> + 
                <b-icon icon="droplet-fill" class="con-big text-center" style="color: red;"></b-icon> = {{ $store.getters.dependencies.deprecatedAndVuln }}
              </div>
            </stats-card>
         </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import StatsCard from '../baseElements/baseCards/BaseStatsCard.vue';
import PieChart from '../charts/PieChart.vue'

@Component({
  components: {
    PieChart,
    StatsCard,
  },
})
export default class DashboardOpenSource extends Vue {
}
</script>