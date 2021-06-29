<template>
  <b-card header="FIND" border-variant="secondary" header-bg-variant="info" header-text-variant="white" bg-variant="light">
    <p class="card-text mt-2">
      <i> Vulnerabilities while you code, within your SCM integration </i>
    </p>

    <b-list-group>
      <!-- Task 1 -->
      <div v-if="$store.getters.quests.find.scmIntegration">
        <b-list-group-item disabled>
          <b-badge pill variant="success">1</b-badge>
          <s> SCM Integration</s>
        </b-list-group-item>
      </div>
      <div v-else>
        <b-list-group-item>
          <b-badge pill variant="danger">1</b-badge><b> SCM Integration </b>
          <b-icon id="SCM-Integration" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
          <b-popover target="SCM-Integration" triggers="hover" placement="top">
            <center> How to set your first integration? <br> Click the <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360018010597-Snyk-SCM-integration-good-practices">LINK</b-link> </center>
          </b-popover>
        </b-list-group-item>
      </div>

      <!-- Task 2 -->
      <div v-if="$store.getters.quests.find.scmIntegration">
        <b-list-group-item disabled>
          <b-badge pill variant="success">1</b-badge>
          <s> Import one project from your SCM</s>
        </b-list-group-item>
      </div>
      <div v-else>
        <b-list-group-item>
          <b-badge pill variant="danger">1</b-badge><b> Import one project from your SCM </b>
          <b-icon id="SCM-help" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
          <b-popover target="SCM-help" triggers="hover" placement="top">
            <center> How to import your first project? <br> click the <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360018010597-Snyk-SCM-integration-good-practices">LINK</b-link> </center>
          </b-popover>
        </b-list-group-item>
      </div>
        
      <!-- Task 3 -->
      <div v-if="$store.getters.quests.find.importMulti">
        <b-list-group-item disabled>
          <b-badge pill variant="success">4</b-badge>
          <s> Import several projects</s>
        </b-list-group-item>
      </div>
      <div v-else>
        <b-list-group-item>
          <b-badge pill variant="danger">4</b-badge><b> Import several projects </b>
        </b-list-group-item>
      </div>

      <!-- Task 4 -->
      <div v-if="$store.getters.quests.find.extraScan">
        <b-list-group-item disabled>
          <b-badge pill variant="success">3</b-badge>
          <s> Extra scan Container/IaC/Code</s>
        </b-list-group-item>
      </div>
      <div v-else>
        <b-list-group-item>
          <b-badge pill variant="danger">3</b-badge><b> Extra scan Container/IaC/Code </b>
        </b-list-group-item>
      </div>
    </b-list-group>
  </b-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class QuestFind extends Vue {
}
</script>
