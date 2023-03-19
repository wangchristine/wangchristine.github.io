import categories from '@/config/category.json';
import foods from '@/config/food.json';
import plants from '@/config/plant.json';

export const state = () => ({
  categories: [],
  articles: [],
  foods: [],
  plants: [],
});

export const actions = {
  async nuxtServerInit({ commit }, { $content }) {
    commit('setCategories', categories);

    const articles = await $content({ deep: true })
      .sortBy('updatedAt', 'desc')
      .fetch();

    commit('setArticles', articles);
  },
  setCategories({ commit }, categories) {
    commit('setCategories', categories);
  },
  setFoods({ commit }) {
    commit('setFoods', foods);
  },
  setPlants({ commit }) {
    commit('setPlants', plants);
  },
};

export const mutations = {
  setArticles(state, articles) {
    state.articles = articles;
  },
  setCategories(state, categories) {
    state.categories = categories;
  },
  setFoods(state, foods) {
    state.foods = foods;
  },
  setPlants(state, plants) {
    state.plants = plants;
  },
};

export const getters = {
  getArticles: (state) => (searchText) => {
    return state.articles.filter((article) => {
      return article.title.toLowerCase().includes(searchText ? searchText.toLowerCase() : searchText);
    });
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
  getPlants: (state) => (searchText) => {
    let plants = state.plants;
    if (searchText !== "") {
      plants = plants.filter((plant) => {
        return plant.name.includes(searchText) || plant.properties.filter((property) => {
          return property.key.includes(searchText) || property.value.includes(searchText);
        }).length !== 0
      });
    }

    return plants.flat().sort((a, b) => {
      if (a.id > b.id) return -1;
      if (a.id < b.id) return -1;
      return 0;
    });
  },
};
