import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    counter: 0,
    product: {},
  },
  mutations: {
    increment (state) {
      state.counter++
    },
    updateProduct(state, newState) {
      state.product = newState;
    }
  }
})

export default store