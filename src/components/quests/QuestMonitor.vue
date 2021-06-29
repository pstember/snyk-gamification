<template>
  <b-card header="MONITOR" border-variant="secondary" header-bg-variant="info" header-text-variant="white" bg-variant="light">
    <p class="card-text mt-2">
      <i> With reporting and alerts providing visibility of application security posture </i>
    </p>
    <b-list-group>
      <!-- Task 1 -->
      <div v-if="$store.getters.quests.monitor.cicdcli">
        <b-list-group-item disabled>
          <!-- add logic to count how many -->
          <b-badge pill variant="success">2</b-badge>
          <s> Monitoring (CI/CD or CLI)</s>
        </b-list-group-item>
      </div>
      <div v-else>
        <b-list-group-item>
          <b-badge pill variant="danger">2</b-badge><b> Monitoring (CI/CD or CLI) </b>
          <b-icon id="monitor" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
          <b-popover target="monitor" triggers="hover" placement="top">
            <center> How to monitor your project? <br> Click the <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360018245398-Snyk-CI-CD-Integration-good-practices-">LINK</b-link> </center>
          </b-popover>
        </b-list-group-item>
      </div>     

      <!-- Task 2 -->
      <div v-if="$store.getters.quests.monitor.notification">
        <b-list-group-item disabled>
          <!-- add logic to count how many -->
          <b-badge pill variant="success">2</b-badge>
          <s> Notification settings</s>
        </b-list-group-item>
      </div>
      <div v-else>
        <b-list-group-item>
          <b-badge pill variant="danger">2</b-badge><b> Notification settings </b>
          <b-icon id="monitor-settings" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
          <b-popover target="monitor-settings" triggers="hover" placement="top">
            <center> How to configure your notifications? <br> Click the <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360011633117-Notifications">LINK</b-link> </center>
          </b-popover>
        </b-list-group-item>
      </div>       
      
      <!-- Task 2 -->
      <div v-if="$store.getters.quests.monitor.alerts">
        <b-list-group-item disabled>
          <!-- add logic to count how many -->
          <b-badge pill variant="success">2</b-badge>
          <s> Alerts configured (slack/webhook)</s>
        </b-list-group-item>
      </div>
      <div v-else>
        <b-list-group-item>
          <b-badge pill variant="danger">2</b-badge><b> Alerts configured (slack/webhook) </b>
          <b-icon id="monitor-alerts" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
          <b-popover target="monitor-alerts" triggers="hover" placement="top">
            <center> How to configure your webhooks? <br> Click the <b-link target="_blank" href="https://solutions.snyk.io/integration-guide/snyk-webhooks">LINK</b-link> </center>
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
