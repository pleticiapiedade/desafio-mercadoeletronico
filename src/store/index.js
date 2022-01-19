import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    card: false,
  },
  mutations: {
    setCard(state, card) {
      state.card = card;
    },
    setDate(state) {
      let date = new Date(state.card.header.createdAt);
      let formattedDate = date.toLocaleDateString("pt-BR");

      state.card.header.createdAt = formattedDate;
    },
  },
  actions: {
    fetchCardData(context) {
      return fetch("https://me-frontend-challenge-api.herokuapp.com/orders/1")
        .then((response) => response.json())
        .then((data) => {
          context.commit("setCard", data);
          context.commit("setDate");
        })
        .catch((err) => console.error(err));
    },
  },
  getters: {},
})