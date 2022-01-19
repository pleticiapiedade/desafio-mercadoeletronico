<template>
  <div class="card-holder">
    <div v-if="true" class="card">
      <div class="header">
        <div class="title">
          <div class="order-number">
            <h4>Purchase Order</h4>
            <h3>4510001114</h3>
            <p>SerialME 11223344</p>

            <div class="logo-holder">
              <img src="" alt="" />
            </div>
          </div>
          <div class="description">
            <h3>MTP West Buyer</h3>
            <div class="user-holder">
              <p>Jacksonville Group (Jason Burn)</p>
              <div class="contact-holder">
                <p class="email">jacksonvillegroup@me.com</p>
                <p class="tel">903-575-3050</p>
                <p class="fax">999-575-3050</p>
              </div>
            </div>
          </div>
        </div>

        <div class="amount">
          <h2>USD 20,000.00</h2>
          <h4>Need to Confirm</h4>
          <p>Created on 04/16/2020</p>
        </div>
      </div>

      <div class="details">
        <p class="subtitle">Supplier</p>
        <div class="header-holder">
          <h5>Motion Industries INC.</h5>
          <p>Code #101908</p>
        </div>
        <div class="infos">
          <div><p>00.888.053/0001-02</p></div>
          <div><p>Jack Jeff Ripple Applejack - jack_jeff_applejack@motion.com</p></div>
          <div><p>Read: 05/23/2020 09:45</p></div>
          <div><p>O Box 3322 - Birmingham AL - 33331-4666 - United States of Am…</p></div>
          <div><p>800-222-5522  -</p> <p>800-222-5522</p></div>
          <div><p>Last Reply: 05/23/2020 10:10</p></div>
        </div>
      </div>

      <div class="addresses"></div>
    </div>
     <div v-else class="card skeleton">
      <div class="header">
        <div class="title">
          <div class="order-number">
            <h3>Purchase Order</h3>
            <p>{{ card.header.number }}</p>
            <p>SerialME {{ card.header.serial }}</p>

            <div class="logo-holder">
              <img src="" alt="" />
            </div>
          </div>
          <div class="description">
            <p>{{ card.header.buyer }}</p>
          </div>
        </div>

        <div class="amount">
          <p>{{ card.header.currency }} {{ card.header.price }}</p>
          <p>{{ card.header.status }}</p>
          <p>{{ card.header.createdAt }}</p>
        </div>
      </div>

      <div class="details"></div>

      <div class="addresses"></div>
    </div>
  </div>
</template>

<script>
// import { computed } from "vue";
// import { useStore } from "vuex";

export default {
  name: "card",
  setup() {
    // const store = useStore();
    // store.dispatch("fetchCardData");
    // let card = computed(() => store.state.card);

    // return { card: card };
    return {};
  },
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

  display: flex;
}

.title {
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  flex: 2;
}


.order-number {
  background-color: map.get(theme.$colors, "highlight");

  border-radius: 0 13px 13px 0;

  width: clamp(spacing.toRem(100), 40%, spacing.toRem(250));
  height: 100%;
  padding: 0 2rem;
  position: relative;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
  gap: 7px;

  color: white;

  
  h4{
    font-weight: 500;
  }

  p{
    font-size: 13px;
  }

  > .logo-holder {
    background-color: white;

    position: absolute;
    right: -40px;

    border-radius: 50%;
    border-width: 2px;
    border-color: map.get(theme.$colors, "dark-blue");
    border-style: solid;

    height: 75px;
    width: 75px;
  }
}

.description{
    height: 100%;
    padding: 8px 3rem;

    display: flex;
    flex-flow: column;
    gap: 8px;
    flex-grow: 1;

    h3{
      font-weight: 500;
    }

    P{
      font-size: 13px;
      font-weight: 400;
    }

    .user-holder{
      display: flex;
      flex-direction: column;
      gap: 8px;
      .contact-holder{
        display: flex;
        gap: 5px;
      }
    }
}

.amount{
    width: 20%;
    padding-right: 2rem;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;

    h2{
      font-weight: 500;
    }

    h4{
      color: map.get(theme.$colors, "yellow");
    }

    p{
      font-size: 13px;
    }
}

.details{
  padding: 10px 2rem;

  p.subtitle{
    color: map.get(theme.$colors, "grey");
    font-size: 14px;
    font-weight: 400;
  }

  .infos{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30%, 11fr));
    grid-template-rows: repeat(auto-fit, minmax(20px, 11fr));
    gap: 10px;

    div{
      text-align: justify;
      padding-top: 8px;

      display: flex;
      gap: .5rem;

      p{
        font-size: .9rem;
      }
    }

    div:not(:nth-child(3n+1)){
      padding-left: 10px;
    }

    div:nth-child(3n){
      text-align: end;
     justify-content: flex-end;
    }
  }

}

.header-holder{
    display: flex;
    align-items: baseline;

    padding-top: 5px;

    gap: 1rem;

    h5{
      color: map.get(theme.$colors, "highlight");
    }

    p{
      color: map.get(theme.$colors, "grey");
      font-size: 14px;
      font-weight: 500;

      padding: 5px 10px;

      background: RGBA(10, 140, 204, 0.12);
      border-radius: 20px;
    }
  }

</style>