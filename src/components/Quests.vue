<template>
  <div>
    <b-row >
      <b-col cols=12>
      <!-- 2 boxes on the first line -->
      <b-card-group deck>
        <quest-find/>
        <quest-fix/>
      </b-card-group>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col cols=12>
        <!-- 3 boxes on the first line -->
        <b-card-group deck>
          <quest-monitor/>
          <quest-prevent/>
          <quest-manage/>
        </b-card-group>
      </b-col>
    </b-row>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import QuestFind from './quests/QuestFind.vue';
import QuestFix from './quests/QuestFix.vue';
import QuestMonitor from './quests/QuestMonitor.vue';
import QuestPrevent from './quests/QuestPrevent.vue';
import QuestManage from './quests/QuestManage.vue';

@Component({
  components: {
    QuestFind,
    QuestFix,
    QuestMonitor,
    QuestPrevent,
    QuestManage,
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
