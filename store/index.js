import categories from '@/config/category.json';

export const state = () => ({
  categories: [],
  allArticles: [],
});

export const actions = {
  async nuxtServerInit({ commit }, { $content }) {
    commit('setCategories', categories);

    const allArticles = await $content({ deep: true })
      .sortBy('updatedAt', 'desc')
      .fetch();

    commit('setAllArticles', allArticles);
  },
  setCategories({ commit }, categories) {
    commit('setCategories', categories);
  },
};

export const mutations = {
  setAllArticles(state, allArticles) {
    state.allArticles = allArticles;
  },
  setCategories(state, categories) {
    state.categories = categories;
  },
};

export const getters = {
  getAllArticles: (state) => {
    return state.allArticles;
  },
  getCategories: (state) => {
    return state.categories;
  },
};
