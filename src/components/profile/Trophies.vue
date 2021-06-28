<template>
  <div>
    <b-row>
      <div class="mt-3">
        <b-card-group deck>

          <b-card border-variant="dark" header="Dark" align="center">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>

          <b-card border-variant="dark" header="Dark" align="center">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>

          <b-card
            border-variant="secondary"
            header="Secondary"
            header-border-variant="secondary"
            align="center"
          >
          <div slot="header">
            <b-img src="https://www.madebycooper.co.uk/images/made/assets/uploads/images/shop/1386/trophy-trophy-gold_600_600_s.jpg" fluid></b-img>
          </div>
            <b-card-text>dsdfsd </b-card-text>
          </b-card>

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