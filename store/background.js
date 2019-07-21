const data = {
  color: '#c0e4da',
};

const changeBodyBackground =(color) => {
  const body = document.getElementsByTagName('body');
  body[0].style.backgroundColor = color;
};

export const state = () => ({
  color: data.color
});

export const mutations = {
  set(state, color) {
    state.color = color;
    changeBodyBackground(state.color);
  },
  default(state) {
    state.color = data.color;
    changeBodyBackground(state.color);
  }
};
