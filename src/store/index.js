import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    card: [],
  },
  mutations: {
    setCard(state, card) {
      state.card = card;
    },
  },
  actions: {
    fetchCardData(context) {
      return fetch("https://me-frontend-challenge-api.herokuapp.com/orders/1")
        .then((response) => response.json())
        .then((data) => {
          context.commit("setCard", data);
        })
        .catch((err) => console.error(err));
    },
  },
  getters: {
    card(state) {
      return state.countries;
    },
  },
})