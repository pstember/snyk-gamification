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
            <b-list-group-item>SCM Integration
              <b-icon id="SCM-Integration" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
              <b-popover target="SCM-Integration" triggers="hover" placement="top">
                To get help with integration click the <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360018010597-Snyk-SCM-integration-good-practices#:~:text=Navigate%20to%20the%20Projects%20page,then%20click%20Add%20selected%20repositories.&text=Snyk%20evaluates%20root%20folders%20and,no%20files%20can%20be%20imported">LINK</b-link>
              </b-popover>

            </b-list-group-item>
            <b-list-group-item>Import one project from your SCM
              <b-icon id="SCM-help" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
              <b-popover target="SCM-help" triggers="hover" placement="top">
                To get help with import click the <b-link target="_blank" href="https://support.snyk.io/hc/en-us/categories/360000598398-Integrations">LINK</b-link>
              </b-popover>
              </b-list-group-item>
            <b-list-group-item>Import several projects </b-list-group-item>
            <b-list-group-item>Extra scan Container/IaC/Code </b-list-group-item>
          </b-list-group>

          <p class="card-text mt-2">
            TEXT
          </p>
        </b-card>


        <b-card header="FIX" border-variant="secondary" bg-variant="light">
          <b-list-group>
            <b-list-group-item href="#">Open a fix-PR
              <b-icon id="fix-pr" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
              <b-popover target="fix-pr" triggers="hover" placement="top">
                To get help with open a fix-PR <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360018010597-Snyk-SCM-integration-good-practices">LINK</b-link>
              </b-popover>

            </b-list-group-item>
            <b-list-group-item href="#">Fix an issue
              <b-icon id="fix-issue" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
              <b-popover target="fix-issue" triggers="hover" placement="top">
                To get help with fixing an issue <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360011484018-Fixing-vulnerabilities">LINK</b-link>
              </b-popover>
            </b-list-group-item>
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
              <b-list-group-item href="#">CI/CD not failing the build or CLI Monitor
                <b-icon id="monitor" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
                <b-popover target="monitor" triggers="hover" placement="top">
                  To get help with monitoring <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360003851297-Monitor-your-projects-at-regular-intervals">LINK</b-link>
                  or <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360018245398-Snyk-CI-CD-Integration-good-practices-">LINK</b-link>
                </b-popover>

              </b-list-group-item>
              <b-list-group-item href="#">Configuration notifications
                <b-icon id="monitor" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
                <b-popover target="monitor" triggers="hover" placement="top">
                  To get help with notification management <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360004037657-Notification-management">LINK</b-link>
                </b-popover>
              </b-list-group-item>
              <b-list-group-item href="#">Reporting overview  </b-list-group-item>
            </b-list-group>

            <p class="card-text mt-2">
              TEXT
            </p>
          </b-card>



          <b-card header="PREVENT" border-variant="secondary">
            <b-list-group>
              <b-list-group-item href="#">Automatic fail in the PR Check for High or Critical
                <b-icon id="Automatic-fail" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
                <b-popover target="Automatic-fail" triggers="hover" placement="top">
                  To get help with automatic settings <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360006581898-Upgrading-dependencies-with-automatic-PRs">LINK</b-link>
                </b-popover>
              </b-list-group-item>
              <b-list-group-item href="#">Automatic PR Check created for existing vulns
                <b-icon id="Automatic-fail-vulns" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
                <b-popover target="Automatic-fail-vulns" triggers="hover" placement="top">
                  To get help with automatic settings <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360006581898-Upgrading-dependencies-with-automatic-PRs">LINK</b-link>
                </b-popover>
              </b-list-group-item>
              <b-list-group-item href="#">Health of your application </b-list-group-item>
            </b-list-group>

            <p class="card-text mt-2">
              TEXT
            </p>
          </b-card>

          <b-card header="MANAGE" border-variant="secondary"
          header-bg-variant="primary"
          header-text-variant="white">
            <b-list-group>
              <b-list-group-item href="#">Create an org
                <b-icon id="Create-an-org" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
                <b-popover target="ACreate-an-org" triggers="hover" placement="top">
                  To get help creating an org <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360004008418-Manage-Snyk-organizations#:~:text=administrator%20users%20only).-,Create%20a%20new%20Snyk%20organization,organization%20and%20start%20a%20trial">LINK</b-link>
                </b-popover>
              </b-list-group-item>
              <b-list-group-item href="#">Create a policy (Enterprise)
                <b-icon id="Create-policy" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
                <b-popover target="ACreate-policy" triggers="hover" placement="top">
                  To get help creating a policy <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360007547397-Creating-and-editing-policies">LINK</b-link>
                </b-popover>
              </b-list-group-item>
              <b-list-group-item href="#">Add additional users
                <b-icon id="add-users" icon="question-circle-fill" class="con-big text-center" style="color: primary;"></b-icon>
                <b-popover target="add-users" triggers="hover" placement="top">
                  To get help adding an user <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360004399238-Invite-and-collaborate-with-team-members">LINK</b-link>
                </b-popover>

              </b-list-group-item>
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

.card-header {
  padding: 0px;
}


</style>
