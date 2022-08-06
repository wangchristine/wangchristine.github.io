import categories from '@/config/category.json';
import foods from '@/config/food.json';

export const state = () => ({
  categories: [],
  allArticles: [],
  foods: [],
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
  setFoods({ commit }) {
    commit('setFoods', foods);
  },
};

export const mutations = {
  setAllArticles(state, allArticles) {
    state.allArticles = allArticles;
  },
  setCategories(state, categories) {
    state.categories = categories;
  },
  setFoods(state, foods) {
    state.foods = foods;
  },
};

export const getters = {
  getAllArticles: (state) => {
    return state.allArticles;
  },
  getCategories: (state) => {
    return state.categories;
  },
  getFoods: (state) => {
    return state.foods
      .map((store) => {
        return store.foods.map((food) => {
          return { storeId: store.id, storeName: store.name, ...food };
        });
      })
      .flat()
      .sort((a, b) => {
        const aCeatedAt = new Date(a.createdAt);
        const bCeatedAt = new Date(b.createdAt);

        if (aCeatedAt > bCeatedAt) return -1;
        if (aCeatedAt < bCeatedAt) return 1;
        return 0;
      });
  },
};
