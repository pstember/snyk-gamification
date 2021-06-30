<template>
  <div>
    <b-row>
      <div class="mt-3">
        <b-card-group deck>

          <!-- Platform badge -->
          <div v-if="$store.getters.trophies.platform">
            <b-card border-variant="success" bg-variant="success" header-bg-variant="success" text-variant="white" header="Platform" header-border-variant="dark" align="center">
              <b-card-text>
                <b-icon icon="layers-fill" class="con-big text-center" font-scale="5" style="color: white;"></b-icon>
                <hr>
                <b-icon icon="check-circle-fill" class="con-big text-center" style="color: white;"></b-icon>
              </b-card-text>
            </b-card>
          </div>
          <div v-else>
            <b-card border-variant="danger" bg-variant="danger" header-bg-variant="danger" text-variant="white" header="Platform" header-border-variant="dark" align="center">
              <b-card-text>
                <b-icon icon="layers-fill" class="con-big text-center" font-scale="5" style="color: white;"></b-icon>
                <hr>
                <b-icon id="trophy-platform" icon="question-circle-fill" class="con-big text-center" style="color: white;"></b-icon>
                <b-popover target="trophy-platform" triggers="hover" placement="top">
                  Leverage all Snyk products to unlock me <b-link target="_blank" href="https://support.snyk.io/hc/en-us">LINK</b-link>
                </b-popover>
              </b-card-text>
            </b-card>
          </div>
          <!-- End of platform badge -->

          <!-- fixer badge -->
          <div v-if="$store.getters.trophies.fixer">
            <b-card border-variant="success" bg-variant="success" header-bg-variant="success" text-variant="white" header="Fixer" header-border-variant="dark" align="center">
              <b-card-text>
                <b-icon icon="tools" class="con-big text-center" font-scale="5" style="color: white;"></b-icon>
                <hr>
                <b-icon icon="check-circle-fill" class="con-big text-center" style="color: white;"></b-icon>
              </b-card-text>
            </b-card>
          </div>
          <div v-else>
            <b-card border-variant="danger" bg-variant="danger" header-bg-variant="danger" text-variant="white" header="Fixer" header-border-variant="dark" align="center">
              <b-card-text>
                <b-icon icon="wrench" class="con-big text-center" font-scale="5" style="color: white;"></b-icon>
                <hr>
                <b-icon id="trophy-fixer" icon="question-circle-fill" class="con-big text-center" style="color: white;"></b-icon>
                <b-popover target="trophy-fixer" triggers="hover" placement="top">
                  Fix a vulnerability to unlock me <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360006113798-Remediate-your-vulnerabilities">LINK</b-link>
                </b-popover>
              </b-card-text>
            </b-card>
          </div>
          <!-- End of fixer badge -->

          <!-- notification badge -->
          <div v-if="$store.getters.trophies.notifications">
            <b-card border-variant="success" bg-variant="success" header-bg-variant="success" text-variant="white" header="Notification" header-border-variant="dark" align="center">
              <b-card-text>
                <b-icon icon="speaker-fill" class="con-big text-center" font-scale="5" style="color: white;"></b-icon>
                <hr>
                <b-icon icon="check-circle-fill" class="con-big text-center" style="color: white;"></b-icon>
              </b-card-text>
            </b-card>
          </div>
          <div v-else>
            <b-card border-variant="danger" bg-variant="danger" header-bg-variant="danger" text-variant="white" header="Notification" header-border-variant="dark" align="center">
              <b-card-text>
                <b-icon icon="speaker-fill" class="con-big text-center" font-scale="5" style="color: white;"></b-icon>
                <hr>
                <b-icon id="trophy-notif" icon="question-circle-fill" class="con-big text-center" style="color: white;"></b-icon>
                <b-popover target="trophy-notif" triggers="hover" placement="top">
                  Configure your setting to unlock me <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360011633117-Notifications">LINK</b-link>
                </b-popover>
              </b-card-text>
            </b-card>
          </div>
          <!-- End of notification badge -->

          <!-- Secure badge -->
          <div v-if="$store.getters.trophies.secure">
            <b-card border-variant="success" bg-variant="success" header-bg-variant="success" text-variant="white" header="Secure" header-border-variant="dark" align="center">
              <b-card-text>
                <b-icon icon="lock-fill" class="con-big text-center" font-scale="5" style="color: white;"></b-icon>
                <hr>
                <b-icon icon="check-circle-fill" class="con-big text-center" style="color: white;"></b-icon>
              </b-card-text>
            </b-card>
          </div>
          <div v-else>
            <b-card border-variant="danger" bg-variant="danger" header-bg-variant="danger" text-variant="white" header="Secure" header-border-variant="dark" align="center">
              <b-card-text>
                <b-icon icon="unlock-fill" class="con-big text-center" font-scale="5" style="color: white;"></b-icon>
                <hr>
                <b-icon id="trophy-secure" icon="question-circle-fill" class="con-big text-center" style="color: white;"></b-icon>
                <b-popover target="trophy-secure" triggers="hover" placement="top">
                  No issue with a score of 750 to unlock me <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360009884837-Prioritizing-Snyk-issues">LINK</b-link>
                </b-popover>
              </b-card-text>
            </b-card>
          </div>
          <!-- End of friendly badge -->

          <!-- Friendy badge -->
          <div v-if="$store.getters.trophies.friendly">
            <b-card border-variant="success" bg-variant="success" header-bg-variant="success" text-variant="white" header="Friendly" header-border-variant="dark" align="center">
              <b-card-text>
                <b-icon icon="people-fill" class="con-big text-center" font-scale="5" style="color: white;"></b-icon>
                <hr>
                <b-icon icon="check-circle-fill" class="con-big text-center" style="color: white;"></b-icon>
              </b-card-text>
            </b-card>
          </div>
          <div v-else>
            <b-card border-variant="danger" bg-variant="danger" header-bg-variant="danger" text-variant="white" header="Friendly" header-border-variant="dark" align="center">
              <b-card-text>
                <b-icon icon="person-fill" class="con-big text-center" font-scale="5" style="color: white;"></b-icon>
                <hr>
                <b-icon id="trophy-friendly" icon="question-circle-fill" class="con-big text-center" style="color: white;"></b-icon>
                <b-popover target="trophy-friendly" triggers="hover" placement="top">
                  Invite more than 3 users to unlock me <b-link target="_blank" href="https://support.snyk.io/hc/en-us/articles/360004399238-Invite-and-collaborate-with-team-members">LINK</b-link>
                </b-popover>
              </b-card-text>
            </b-card>
          </div>
          <!-- End of friendly badge -->

          <!-- Secret badge, not real -->
            <b-card border-variant="danger" bg-variant="danger" header-bg-variant="danger" text-variant="white" header="Secret" header-border-variant="dark" align="center">
              <b-card-text>
                <b-icon icon="question" class="con-big text-center" font-scale="5" style="color: white;"></b-icon>
                <hr>
                <b-icon id="trophy-secret" icon="question-circle-fill" class="con-big text-center" style="color: white;"></b-icon>
                <b-popover target="trophy-secret" triggers="hover" placement="top">
                  Do or not do, there is no try!
                </b-popover>
              </b-card-text>
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