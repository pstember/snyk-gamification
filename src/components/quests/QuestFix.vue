<template>
  <b-card header="FIX" border-variant="secondary" header-bg-variant="info" header-text-variant="white" bg-variant="light">
    <p class="card-text mt-2">
      <i> Quickly and early with automate remediation and actionable insight </i>
    </p>
    <b-list-group>
      <!-- Task 1 -->
      <div v-if="$store.getters.quests.fix.openPR">
        <b-list-group-item disabled>
          <!-- add logic to count how many up to ten, using warning for value vetween 4-6 -->
          <b-badge pill variant="success">10</b-badge>
          <s> Open a fix-PR</s>
        </b-list-group-item>
      </div>
      <div v-else>
        <b-list-group-item>
          <b-badge pill variant="danger">10</b-badge><b> Open a fix-PR </b>
          <b-icon id="fix-pr" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
          <b-popover target="fix-pr" triggers="hover" placement="top">
            <center> How to open your first fix-PR? <br> click the <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360011484018-Fixing-vulnerabilities">LINK</b-link> </center>
          </b-popover>
        </b-list-group-item>
      </div>

      <!-- Task 2 -->
      <div v-if="$store.getters.quests.fix.fixIssue">
        <b-list-group-item disabled>
          <!-- add logic to count how many up to ten, using warning for value vetween 4-6 -->
          <b-badge pill variant="success">10</b-badge>
          <s> Fix an issue</s>
        </b-list-group-item>
      </div>
      <div v-else>
        <b-list-group-item>
          <b-badge pill variant="danger">10</b-badge><b> Fix an issue </b>
          <b-icon id="fix-issue" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
          <b-popover target="fix-issue" triggers="hover" placement="top">
            <center> How to fix your vulnerabilities? <br> click the <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360011484018-Fixing-vulnerabilities">LINK</b-link> </center>
          </b-popover>
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
