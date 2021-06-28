<template>
  <div>
    <b-row >
      <b-col cols=12>
      <b-card-group deck>
        <b-card 
          header="FIND"
          border-variant="secondary"
          header-bg-variant="primary"
          header-text-variant="white"
          >
          <b-list-group>
            <b-list-group-item>SCM Integration </b-list-group-item>
            <b-list-group-item>Import one project from your SCM</b-list-group-item>
            <b-list-group-item disabled>Import several projects </b-list-group-item>
            <b-list-group-item>Extra scan Container/IaC/Code </b-list-group-item>
          </b-list-group>

          <p class="card-text mt-2">
            TEXT
          </p>
        </b-card>


        <b-card header="FIX" border-variant="secondary" bg-variant="light">
          <b-list-group>
            <b-list-group-item href="#">Open a fix-PR </b-list-group-item>
            <b-list-group-item href="#">Fix an issue</b-list-group-item>
          </b-list-group>

          <p class="card-text mt-2">
            TEXT
          </p>
        </b-card>

      </b-card-group>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col cols=12>
        <b-card-group deck>

          <b-card header="MONITOR" border-variant="secondary">
            <b-list-group>
              <b-list-group-item href="#">CI/CD not failing the build or CLI Monitor</b-list-group-item>
              <b-list-group-item href="#">Configuration notifications </b-list-group-item>
              <b-list-group-item href="#">Reporting overview  </b-list-group-item>
            </b-list-group>

            <p class="card-text mt-2">
              TEXT
            </p>
          </b-card>



          <b-card header="PREVENT" border-variant="secondary">
            <b-list-group>
              <b-list-group-item href="#">Automatic fail in the PR Check for High or Critical</b-list-group-item>
              <b-list-group-item href="#">Automatic PR Check created for existing vulns</b-list-group-item>
              <b-list-group-item href="#">Health of your application </b-list-group-item>
            </b-list-group>

            <p class="card-text mt-2">
              TEXT
            </p>
          </b-card>

          <b-card header="MANAGE" border-variant="secondary">
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
      </b-col>
    </b-row>
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

<style scoped>

</style>