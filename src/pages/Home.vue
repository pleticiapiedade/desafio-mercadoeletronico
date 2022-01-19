<template>
  <div id="home">
    <card />
  </div>
</template>

<script>
import card from "@/components/card.vue";

export default {
  components: {
    card,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
@use "../assets/baseline/theme";
@use "sass:map";
</style>