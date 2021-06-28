<template>
  <div>

    <b-card-group deck>
      <b-card header="FIND">
        <b-list-group>
          <b-list-group-item href="#">SCM Integration </b-list-group-item>
          <b-list-group-item href="#">Import one project from your SCM</b-list-group-item>
          <b-list-group-item href="#">Import several projects </b-list-group-item>
          <b-list-group-item href="#">Extra scan Container/IaC/Code </b-list-group-item>
        </b-list-group>

        <p class="card-text mt-2">
          TEXT
        </p>
      </b-card>


      <b-card header="FIX">
        <b-list-group>
          <b-list-group-item href="#">Open a fix-PR </b-list-group-item>
          <b-list-group-item href="#">Fix an issue</b-list-group-item>
        </b-list-group>

        <p class="card-text mt-2">
          TEXT
        </p>
      </b-card>


      <b-card header="MONITOR">
        <b-list-group>
          <b-list-group-item href="#">CI/CD not failing the build or CLI Monitor</b-list-group-item>
          <b-list-group-item href="#">Configuration notifications </b-list-group-item>
          <b-list-group-item href="#">Reporting overview  </b-list-group-item>
        </b-list-group>

        <p class="card-text mt-2">
          TEXT
        </p>
      </b-card>



    <b-card header="PREVENT">
      <b-list-group>
        <b-list-group-item href="#">Automatic fail in the PR Check for High or Critical</b-list-group-item>
        <b-list-group-item href="#">Automatic PR Check created for existing vulns</b-list-group-item>
        <b-list-group-item href="#">Health of your application </b-list-group-item>
      </b-list-group>

      <p class="card-text mt-2">
        TEXT
      </p>
    </b-card>


      <b-card header="MANAGE">
        <b-list-group>
          <b-list-group-item href="#">Create an org</b-list-group-item>
          <b-list-group-item href="#">Create a policy (Enterprise)</b-list-group-item>
          <b-list-group-item href="#">Add additional users </b-list-group-item>
        </b-list-group>

        <p class="card-text mt-2">
          TEXT
        </p>
      </b-card>
    </b-card-group>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Quests extends Vue {
}
</script>

<style lang="scss">

div{




}
</style>
