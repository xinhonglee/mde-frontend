export const state = () => ({
  color: '#c0e4da'
});

export const mutations = {
  set(state, background) {
    state.color = background;
  },
  default(state) {
    state.color = '#c0e4da'
  }
};
