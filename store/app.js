import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
  const categories = ref([]);
  const foods = ref([]);
  const plants = ref([]);

  const setCategories = (categoryData) => {
    categories.value = categoryData;
  };
  const setFoods = (foodData) => {
    foods.value = foodData;
  };
  const setPlants = (plantData) => {
    plants.value = plantData;
  };

  const getFoods = (storeId) => {
    let filterFoods = foods.value;
    if (storeId !== null && storeId !== "null") {
      filterFoods = foods.value.filter((store) => store.id === parseInt(storeId));
    }
    return filterFoods
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
  };

  const getStores = () => {
    return foods.value.map((store) => {
      return { id: store.id, name: store.name };
    });
  };

  const getPlants = (searchText) => {
    let filterPlants = plants.value;
    if (searchText !== "") {
      filterPlants = plants.value.filter((plant) => {
        return (
          plant.name.includes(searchText) ||
          plant.properties.filter((property) => {
            return property.key.includes(searchText) || property.value.includes(searchText);
          }).length !== 0
        );
      });
    }
    return filterPlants.flat().sort((a, b) => {
      if (a.id > b.id) return -1;
      if (a.id < b.id) return -1;
      return 0;
    });
  };

  return {
    categories,
    foods,
    plants,
    setCategories,
    setFoods,
    setPlants,
    getFoods,
    getStores,
    getPlants,
  };
});
