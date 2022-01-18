<template>
  <div class="card-holder">
    <div class="card">
      <div class="header">
        <div class="title">
          <div class="order-number">
            <h3>Purchase Order</h3>
            <p>4510001114</p>
            <p>SerialME 1122334444</p>

            <div class="logo-holder">
              <img src="" alt="" />
            </div>
          </div>
          <div class="description">

          </div>
        </div>

        <div class="amount"></div>
      </div>

      <div class="details"></div>

      <div class="addresses"></div>
    </div>
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
  padding: 0 clamp(spacing.toRem(14), 10vw, spacing.toRem(350));

  min-height: inherit;
  min-width: inherit;
}

.card {
  height: clamp(spacing.toRem(350), 75vh, spacing.toRem(1200));
  width: clamp(spacing.toRem(250), 100%, spacing.toRem(1600));

  background-color: map.get(theme.$colors, "white");
  color: map.get(theme.$colors, "black");

  border-radius: 18px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(spacing.toRem(150), spacing.toRem(200)) 1fr 1fr;
}

.header {
  min-height: 100%;
  padding: max(3%, 15px) 0;
}

.title {
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}

.order-number {
  background-color: map.get(theme.$colors, "highlight");

  border-radius: 0 13px 13px 0;

  width: clamp(spacing.toRem(100), 40%, spacing.toRem(250));
  height: 100%;

  padding: 0 36px 0 12px;

  position: relative;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;

  color: white;

  > .logo-holder {
    background-color: white;

    position: absolute;
    right: -40px;

    border-radius: 50%;
    border-width: 2px;
    border-color: map.get(theme.$colors, "black");
    border-style: solid;

    height: 75px;
    width: 75px;
  }
}
</style>