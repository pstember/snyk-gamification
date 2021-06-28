<template>
  <div>
    <b-row>
      <div class="mt-3">
        <b-card-group deck>

          <b-card border-variant="dark" header="Platform" align="center">
            <b-card-text>trophy: {{$store.getters.trophies.platform}} </b-card-text>
          </b-card>

          <b-card border-variant="dark" header="Fixer" align="center">
            <b-card-text>
              trophy: {{$store.getters.trophies.fixer}}
              <div v-if="!$store.getters.trophies.fixer">
                <hr>
                test
              </div>
            </b-card-text>
          </b-card>

          <!-- notification badge -->
          <div v-if="$store.getters.trophies.notification">
            <b-card
              border-variant="success"
              header="Notification"
              header-border-variant="success"
              align="center"
            >
              <b-card-text>
                trophy: {{$store.getters.trophies.notification}}
                <hr>
                <b-icon icon="tools" class="con-big text-center" font-scale="5" style="color: #03c04a;"></b-icon>
              </b-card-text>
            </b-card>
          </div>
          <div v-else>
            <b-card
              border-variant="danger"
              bg-variant="secondary"
              header-bg-variant="secondary"
              text-variant="white"
              header="Notification"
              header-border-variant="secondary"
              align="center"
            >
              <b-card-text>
                <b-icon icon="tools" class="con-big text-center" font-scale="5" style="color: white;"></b-icon>
                <hr>
                <b-icon id="trophy-notif" icon="question-circle-fill" class="con-big text-center" style="color: white;"></b-icon>
                <b-popover target="trophy-notif" triggers="hover" placement="top">
                  Configure your setting to unlock me <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360011633117-Notifications">LINK</b-link>
                </b-popover>
              </b-card-text>
            </b-card>
          </div>

          <b-card border-variant="success" header="Success" align="center">
            <b-card-text><b-img src="https://www.madebycooper.co.uk/images/made/assets/uploads/images/shop/1386/trophy-trophy-gold_600_600_s.jpg" fluid></b-img></b-card-text>
          </b-card>

          <b-card
            border-variant="warning"
            header="Warning"
            header-bg-variant="transparent"
            align="center"
          >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>

        </b-card-group>
      </div>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseCard from '../baseElements/baseCards/BaseCard.vue';

@Component({
  components: {
    BaseCard,
  },
})
export default class Trophies extends Vue {
}
</script>