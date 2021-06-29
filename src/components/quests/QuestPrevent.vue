<template>
  <b-card header="PREVENT" border-variant="secondary" header-bg-variant="info" header-text-variant="white" bg-variant="light">
    <p class="card-text mt-2">
      <i> Introducing new vulnerabilities into your code base through new dependencies and code change </i>
    </p>
    <b-list-group>
      <!-- Task 1 -->
      <div v-if="$store.getters.quests.prevent.autoFail">
        <b-list-group-item disabled>
          <!-- add logic to count how many up to ten, using warning for value vetween 4-6 -->
          <b-badge pill variant="success">1</b-badge>
          <s> Automatic fail in the PR Check for High or Critical</s>
        </b-list-group-item>
      </div>
      <div v-else>
        <b-list-group-item>
          <b-badge pill variant="danger">1</b-badge><b> Automatic fail in the PR Check for High or Critical </b>
          <b-icon id="Automatic-fail" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
          <b-popover target="Automatic-fail" triggers="hover" placement="top">
            <center> How to enable test on your PR? <br> Click the <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360018010597-Snyk-SCM-integration-good-practices">LINK</b-link> </center>
          </b-popover>
        </b-list-group-item>
      </div>
      
       <!-- Task 2 -->
      <div v-if="$store.getters.quests.prevent.fixPR">
        <b-list-group-item disabled>
          <b-badge pill variant="success">1</b-badge>
          <s> Automatic fix-PR created for existing vulns</s>
        </b-list-group-item>
      </div>
      <div v-else>
        <b-list-group-item>
          <b-badge pill variant="danger">1</b-badge><b> Automatic fix-PR created for existing vulns </b>
          <b-icon id="Automatic-fail-vulns" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
          <b-popover target="Automatic-fail-vulns" triggers="hover" placement="top">
            <center> How to set automatic fix PR? <br> Click the <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360018010597-Snyk-SCM-integration-good-practices">LINK</b-link> </center>
          </b-popover>
        </b-list-group-item>
      </div>     

       <!-- Task 3 -->
      <div v-if="$store.getters.quests.prevent.health">
        <b-list-group-item disabled>
          <b-badge pill variant="success">1</b-badge>
          <s> Health of your application</s>
        </b-list-group-item>
      </div>
      <div v-else>
        <b-list-group-item>
          <b-badge pill variant="danger">1</b-badge><b> Health of your application </b>
          <b-icon id="prevent-health" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
          <b-popover target="prevent-health" triggers="hover" placement="top">
            <center> Fix all vulnerabilities with the higher score (850, 750, 500)</center>
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
