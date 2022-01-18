<template>
  <div class="card-holder">
    <div class="card"></div>
  </div>
</template>

<script>
export default {
  name: "card",
  setup() {},
};
</script>

<style lang="scss" scoped>
@use "../assets/baseline/theme";
@use "../assets/baseline/spacing";
@use "sass:map";

.card-holder {
  z-index: 50;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: map.get(theme.$colors, "grey");
  padding: 0 clamp(15px, 10vw, 10rem);

  min-height: inherit;
  min-width: inherit;
}

.card {
  height: clamp(350px, 75vh, 1200px);
  width: clamp(250px, 100%, 850px);

  background-color: map.get(theme.$colors, "white");
  color: map.get(theme.$colors, "black");
}
</style>