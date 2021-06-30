<template>
  <div>
    <b-row>
      <b-col cols="3">
        <base-card>
          <div slot="header" ><b>{{$store.getters.profile.org.slug}}</b></div>
            Current level is <b>{{$store.getters.profile.level}}</b>
            <br/>Score {{$store.getters.profile.score}}
            <hr class="my-4">
            Gain {{$store.getters.profile.maxScore - $store.getters.profile.score}} points to move to the next level
            <b-progress :value="$store.getters.profile.score - $store.getters.profile.minScore" :max="$store.getters.profile.maxScore- $store.getters.profile.minScore"></b-progress>
            <div slot="default">
            <hr class="my-4">
            <b-link target="_blank" :href=$store.getters.profile.org.url>Go to Snyk</b-link>
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
