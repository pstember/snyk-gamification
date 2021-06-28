<template>
  <div>
    <b-row>
      <b-col cols="3">
        <base-card>
          <div slot="header" >{{$store.getters.profile.org.slug}}</div>
            Current level is LEVELLEVELLEVEL
            <hr class="my-4">
            Gain X points to move to the next level: 
            <b-progress :value=5 :max=8></b-progress>
            <div slot="default">
            <hr class="my-4">
            <b-link :href=$store.getters.profile.org.url>Go to Snyk</b-link>
            </div>
        </base-card>
      </b-col>
      <b-col cols="9">
        <trophies></trophies>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseCard from './baseElements/baseCards/BaseCard.vue';
import Trophies from './profile/Trophies.vue';

@Component({
  components: {
    BaseCard,
    Trophies
  },
})
export default class Profile extends Vue {
}
</script>