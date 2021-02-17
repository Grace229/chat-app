export const state = () => ({
  username: null,
})

export const mutations = {
  SET_USERNAME(state, value) {
    state.username = value
  },
},
export const getters = () => ({
  getUser: state => state.user
}),

export const actions = {
  DISPATCH_USERNAME({ commit }, value) {
    commit('SET_USERNAME', value)
  },
}

