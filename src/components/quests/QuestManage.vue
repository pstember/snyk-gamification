<template>
<b-card header="MANAGE" border-variant="secondary" header-bg-variant="info" header-text-variant="white" bg-variant="light">
  <p class="card-text mt-2">
    <i> With security and license policies and contextual prioritization defined and customized across the organization </i>
  </p>
  <b-list-group>
      <!-- Task 1 -->
      <div v-if="$store.getters.quests.manage.multiOrgs">
        <b-list-group-item disabled>
          <b-badge pill variant="success">1</b-badge>
          <s> Create an org</s>
        </b-list-group-item>
      </div>
      <div v-else>
        <b-list-group-item>
          <b-badge pill variant="danger">1</b-badge><b> Create an org </b>
          <b-icon id="Create-an-org" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
          <b-popover target="Create-an-org" triggers="hover" placement="top">
            <center> How to create an organization? <br> Click the <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360004008418-Manage-Snyk-organizations">LINK</b-link> </center>
          </b-popover>
        </b-list-group-item>
      </div>

      <!-- Task 2 -->
      <div v-if="$store.getters.quests.manage.policy">
        <b-list-group-item disabled>
          <b-badge pill variant="success">2</b-badge>
          <s> Create a policy (Enterprise)</s>
        </b-list-group-item>
      </div>
      <div v-else>
        <b-list-group-item>
          <b-badge pill variant="danger">2</b-badge><b> Create a policy (Enterprise) </b>
          <b-icon id="Create-policy" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
          <b-popover target="Create-policy" triggers="hover" placement="top">
            <center> How to create new policies? <br> Click the <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360007547397-Creating-and-editing-policies">LINK</b-link> </center>
          </b-popover>
        </b-list-group-item>
      </div>

      <!-- Task 3 -->
      <div v-if="$store.getters.quests.manage.multiUsers">
        <b-list-group-item disabled>
          <b-badge pill variant="success">∞</b-badge>
          <s> Add additional users</s>
        </b-list-group-item>
      </div>
      <div v-else>
        <b-list-group-item>
          <b-badge pill variant="danger">∞</b-badge><b> Add additional users </b>
          <b-icon id="add-users" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
          <b-popover target="add-users" triggers="hover" placement="top">
            <center> How to configure your notifications? <br> Click the <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360004399238-Invite-and-collaborate-with-team-members">LINK</b-link> </center>
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
