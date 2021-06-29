<template>
  <div>
    <b-row >
      <b-col cols=12>
      <b-card-group deck>

<!--FIND Box-->
        <b-card header="FIND" border-variant="secondary" header-bg-variant="info" header-text-variant="white" bg-variant="light">
        <p class="card-text mt-2">
            <i> Vulnerabilities while you code, within your SCM integration </i>
          </p>

          <b-list-group>
            <!-- Task 1 -->
            <b-list-group-item>
              <div v-if="$store.getters.trophies.fixer">
                <s>SCM Integration</s>
              </div>
              <div v-else>
                <b-badge pill variant="info">2</b-badge><b> SCM Integration </b>
                <b-icon id="SCM-Integration" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>

                <b-popover target="SCM-Integration" triggers="hover" placement="top">
                  <center> How to set your first integration? <br> Click the <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360018010597-Snyk-SCM-integration-good-practices">LINK</b-link> </center>
                </b-popover>
              </div>

            </b-list-group-item>
            <b-list-group-item>Import one project from your SCM
              <b-icon id="SCM-help" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
              <b-popover target="SCM-help" triggers="hover" placement="top">
                <center> How to import your first project? <br> click the <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360018010597-Snyk-SCM-integration-good-practices">LINK</b-link> </center>
              </b-popover>
              </b-list-group-item>
            <b-list-group-item>Import several projects </b-list-group-item>
            <b-list-group-item>Extra scan Container/IaC/Code </b-list-group-item>
          </b-list-group>
        </b-card>

 <!--FIX Box -->
        <b-card header="FIX" border-variant="secondary" header-bg-variant="info" header-text-variant="white" bg-variant="light">
          <p class="card-text mt-2">
            <i> Quickly and early with automate remediation and actionable insight </i>
          </p>
          <b-list-group>
            <b-list-group-item href="#">Open a fix-PR
              <b-icon id="fix-pr" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
              <b-popover target="fix-pr" triggers="hover" placement="top">
                <center> How to open your first fix-PR? <br> click the <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360011484018-Fixing-vulnerabilities">LINK</b-link> </center>
              </b-popover>

            </b-list-group-item>
            <b-list-group-item href="#">Fix an issue
              <b-icon id="fix-issue" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
              <b-popover target="fix-issue" triggers="hover" placement="top">
                <center> How to fix your vulnerabilities? <br> click the <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360011484018-Fixing-vulnerabilities">LINK</b-link> </center>
              </b-popover>
            </b-list-group-item>
          </b-list-group>
        </b-card>

<!-- saut a la ligne et creation de 3 boxs -->
      </b-card-group>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col cols=12>
        <b-card-group deck>

<!--MONITOR Box -->
          <b-card header="MONITOR" border-variant="secondary" header-bg-variant="info" header-text-variant="white" bg-variant="light">
            <p class="card-text mt-2">
              <i> With reporting and alerts providing visibility of application security posture </i>
            </p>
            <b-list-group>
              <b-list-group-item href="#">Monitoring (CI/CD or CLI)
                <b-icon id="monitor" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
                <b-popover target="monitor" triggers="hover" placement="top">
                  <center> How to monitor your project? <br> Click the <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360018245398-Snyk-CI-CD-Integration-good-practices-">LINK</b-link> </center>
                </b-popover>

              </b-list-group-item>
              <b-list-group-item href="#">Notification settings
                <b-icon id="Notification" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
                <b-popover target="Notification" triggers="hover" placement="top">
                  <center> How to configure your notifications? <br> Click the <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360011633117-Notifications">LINK</b-link> </center>
                </b-popover>

              </b-list-group-item>
              <b-list-group-item href="#">Reporting overview  </b-list-group-item>
            </b-list-group>
          </b-card>


<!--PREVENT Box -->
          <b-card header="PREVENT" border-variant="secondary" header-bg-variant="info" header-text-variant="white" bg-variant="light">
            <p class="card-text mt-2">
              <i> Introducing new vulnerabilities into your code base through new dependencies and code change </i>
            </p>
            <b-list-group>
              <b-list-group-item href="#">Automatic fail in the PR Check for High or Critical
                <b-icon id="Automatic-fail" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
                <b-popover target="Automatic-fail" triggers="hover" placement="top">
                  <center> How to enable test on your PR? <br> Click the <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360018010597-Snyk-SCM-integration-good-practices">LINK</b-link> </center>
                </b-popover>
              </b-list-group-item>
              <b-list-group-item href="#">Automatic PR Check created for existing vulns
                <b-icon id="Automatic-fail-vulns" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
                <b-popover target="Automatic-fail-vulns" triggers="hover" placement="top">
                  <center> How to set automatic fix PR? <br> Click the <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360018010597-Snyk-SCM-integration-good-practices">LINK</b-link> </center>
                </b-popover>
              </b-list-group-item>
              <b-list-group-item href="#">Health of your application </b-list-group-item>
            </b-list-group>
          </b-card>

<!--MANAGE Box -->
          <b-card header="MANAGE" border-variant="secondary" header-bg-variant="info" header-text-variant="white" bg-variant="light">
            <p class="card-text mt-2">
              <i> With security and license policies and contextual prioritization defined and customized across the organization </i>
            </p>
            <b-list-group>
              <b-list-group-item href="#">Create an org
                <b-icon id="Create-an-org" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
                <b-popover target="ACreate-an-org" triggers="hover" placement="top">
                  <center> How to create an organization? <br> Click the <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360004008418-Manage-Snyk-organizations">LINK</b-link> </center>
                </b-popover>
              </b-list-group-item>
              <b-list-group-item href="#">Create a policy (Enterprise)
                <b-icon id="Create-policy" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
                <b-popover target="ACreate-policy" triggers="hover" placement="top">
                  <center> How to create new policies? <br> Click the <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360007547397-Creating-and-editing-policies">LINK</b-link> </center>
                </b-popover>
              </b-list-group-item>
              <b-list-group-item href="#">Add additional users
                <b-icon id="add-users" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
                <b-popover target="add-users" triggers="hover" placement="top">
                  <center> How to configure your notifications? <br> Click the <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360004399238-Invite-and-collaborate-with-team-members">LINK</b-link> </center>
                </b-popover>

              </b-list-group-item>
            </b-list-group>
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

.card-header {
  padding: 0px;
}


</style>
