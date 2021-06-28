<template>
  <div>
    <b-row>
      <b-col>
        <h2>Licenses</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <pie-chart v-if="$store.getters.licUpdated" v-bind:chartOptions="$store.getters.licenseChart"></pie-chart>
        <b-spinner v-else class="mx-auto" label="Spinning" ></b-spinner>
      </b-col>
      <b-col>
        <b-row>
          <b-col cols="6">
            <stats-card>
              <div slot="header" class="icon-success">
                <b-icon icon="exclamation-octagon-fill" class="con-big text-center" style="color: red;"></b-icon>
              </div>
              <div slot="content" class="numbers">
                      <p>High</p>
                      {{ $store.getters.licenses.high }}
              </div>
            </stats-card>
         </b-col>
          <b-col cols="6">
              <stats-card>
                <div slot="header" class="icon-success">
                  <b-icon icon="exclamation-triangle-fill" class="con-big text-center" style="color: orange;"></b-icon>
                </div>
                <div slot="content" class="numbers">
                        <p>Medium</p>
                        {{ $store.getters.licenses.medium }}<br/>
                </div>
              </stats-card>
          </b-col>
          <b-col cols="6">
            <stats-card>
              <div slot="header" class="icon-success">
                <b-icon icon="info-circle-fill" class="con-big text-center" style="color: green;"></b-icon>
              </div>
              <div slot="content" class="numbers">
                      <p>Low</p>
                      {{ $store.getters.licenses.low }}
              </div>
            </stats-card>
         </b-col>
         <b-col cols="6">
            <stats-card>
              <div slot="header" class="icon-success">
                <b-icon icon="info-circle-fill" class="con-big text-center" style="color: grey;"></b-icon>
              </div>
              <div slot="content" class="numbers">
                      <p>N/A</p>
                      {{ $store.getters.licenses.total }}
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
import Card from '../baseElements/baseCards/BaseCard.vue';
import StatsCard from '../baseElements/baseCards/BaseStatsCard.vue';
import PieChart from '../charts/PieChart.vue';

@Component({
  components: {
    StatsCard,
    Card,
    PieChart,
  },
})
export default class Overview extends Vue {
}
</script>