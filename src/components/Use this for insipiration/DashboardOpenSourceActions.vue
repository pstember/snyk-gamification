<template>
  <div>
    <b-row>
      <b-col>
        <h2>Top 10 vulnerabilities</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table 
          small 
          v-bind:items="$store.getters.vulnerabilities.actionVulns"
          v-bind:responsive="true"
          v-bind:hover="true"
        >
          <!-- A custom formatted column -->
          <template #cell(isFixable)="items">
            <b-icon icon="hand-thumbs-up" font-scale="2" style="color: green;" v-if="items.item.isFixable"></b-icon>
            <b-icon icon="hand-thumbs-down" font-scale="2" style="color: red;" v-else></b-icon>
          </template>
          <template #cell(exploit)="items">
            <b-icon icon="layers-fill" font-scale="2" style="color: red;" v-if="items.item.exploit == 'mature'"></b-icon>
            <b-icon icon="layers-half" font-scale="2" style="color: orange;" v-else-if="items.item.exploit == 'proof-of-concept'"></b-icon>
            <b-icon icon="layers" font-scale="2" style="color: green;" v-else></b-icon>
          </template>
          <template #cell(snykUrl)="items">
            <a :href="items.item.snykUrl">{{ items.item.snykUrl }}</a>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component,Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class DashboardOpenSourceActions extends Vue {
}
</script>