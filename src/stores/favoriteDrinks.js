import { defineStore, acceptHMRUpdate } from 'pinia'

export const useFavoriteDrinks = defineStore('favoriteDrinks', {
  state: () => ({
    favorites: []
  }),

  actions: {
    addFavoriteDrink(drink) {
      const existingDrink  = this.favorites.find(favoriteDrink => favoriteDrink.idDrink === drink.idDrink);

      if (!existingDrink) {
        this.favorites.push(drink);
      }
    },

    removeFavoriteDrink(drink){
      const index = this.favorites.findIndex(favoriteDrink => favoriteDrink.idDrink === drink.idDrink);

      if (index !== -1) {
        this.favorites.splice(index, 1);
      }
    }

  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useFavoriteDrinks, import.meta.hot))
}
