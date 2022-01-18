<template>
  <div>
    <card />
  </div>
</template>

<script>
import { useStore } from "vuex";

import card from "@/components/card.vue";

export default {
  components: {
    card,
  },
  setup() {
    const store = useStore();

    return { store };
  },
};
</script>
