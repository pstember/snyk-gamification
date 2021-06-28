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
            border-variant="primary"
            header="Primary"
            header-bg-variant="primary"
            header-text-variant="white"
            align="center"
          >
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
        </b-card-group>
      </div>
      <div class="mt-3">
        <b-card-group deck>
          <b-card border-variant="info" header="Info" align="center">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>

          <b-card
            border-variant="warning"
            header="Warning"
            header-bg-variant="transparent"
            align="center"
          >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>

          <b-card
            border-variant="danger"
            header="Danger"
            header-border-variant="danger"
            header-text-variant="danger"
            align="center"
          >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>
        </b-card-group>
      </div>
      <div class="mt-3">
        <b-card-group deck class="mb-3">
          <b-card border-variant="light" header="Light" class="text-center">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>

          <b-card border-variant="dark" header="Dark" align="center">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>

          <b-card border-variant="dark" header="Dark" align="center">
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