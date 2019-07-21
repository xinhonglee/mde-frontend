const data = {
  color: '#c0e4da',
};


export const state = () => ({
  color: data.color
});

export const mutations = {
  set(state, color) {
    state.color = color;
  },
  default(state) {
    state.color = data.color;
  }
};
