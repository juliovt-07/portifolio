export const state = () => ({
  mode: null
})

export const mutations = {
  setMode(state, payload) {
    state.mode = payload
  }
}