export default {
  data() {
    return {
    };
  },
  methods: {
    redirectByDetailsDrink(idDrink){
      this.$router.push({ path: 'detailsByDrink', query: { idDrink } });
    },

    redirectByCategory(category){
      this.$router.push({ path: 'drinksByCategory', query: { category } });
    },

    redirectHome(){
      this.$router.push({ path: '/'});
    },

    redirectFavoriteDrink(){
      this.$router.push({ path: 'favoriteDrinks'});
    },
  }
};
