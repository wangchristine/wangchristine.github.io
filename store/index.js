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
  getFoods: (state) => (storeId) => {
    let foods = state.foods;
    if (storeId !== null && storeId !== 'null') {
      foods = foods.filter((store) => store.id === parseInt(storeId));
    }
    return foods
      .map((store) => {
        return store.foods.map((food) => {
          return { storeId: store.id, storeName: store.name, ...food };
        });
      })
      .flat()
      .sort((a, b) => {
        const aCreatedAt = new Date(a.createdAt);
        const bCreatedAt = new Date(b.createdAt);

        if (aCreatedAt > bCreatedAt) return -1;
        if (aCreatedAt < bCreatedAt) return 1;
        return 0;
      });
  },
  getStores: (state) => {
    return state.foods.map((store) => {
      return { id: store.id, name: store.name };
    });
  },
};
