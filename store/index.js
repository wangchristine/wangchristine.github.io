export const state = () => ({
  categories: [],
});

export const actions = {
  setCategories({ commit }, categories) {
    commit('setCategories', categories);
  },
};

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories;
  },
};

export const getters = {
  getCategories: (state) => {
    return state.categories;
  },
};
