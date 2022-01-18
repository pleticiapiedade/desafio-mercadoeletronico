<template>
  <div id="home">
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

<style lang="scss" scoped>
@use "../assets/baseline/theme";
@use "sass:map";
</style>