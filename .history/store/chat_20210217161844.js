export const state = () => ({
  username: null,
})

export const mutations = {
  SET_USERNAME(state, value) {
    state.username = value
  },
},

export const getters = {
  GET_USER: (state) => {
    return state.username
  }
},

export const actions = {
  DISPATCH_USERNAME({ commit }, value) {
    commit('SET_USERNAME', value)
  },
}

