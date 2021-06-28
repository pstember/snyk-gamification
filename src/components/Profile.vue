<template>
  <div>
    Profile goes here hehe {{$store.getters.trophies}}
    <div v-if="$store.getters.trophies > 10">
        Lots of integration are done
    </div>
    <div v-else>
        More integration are needed to unlock this badge
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Profile extends Vue {
}
</script>