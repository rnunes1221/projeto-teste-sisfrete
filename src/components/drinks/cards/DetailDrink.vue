<template>
  <div
    v-show="arrDrinks.length"
    v-for="drink in arrDrinks"
    :key="drink.idDrink"
  >
    <div
      class="row no-wrap bg-vine"
    >
      <q-img
        :src="drink.strDrinkThumb"
        spinner-color="grey"
        fit="fill"
        class="q-ma-none rounded-borders img"
      >
        <div
          class="absolute-bottom font-special-title text-center"
        >
          {{ drink.strDrink }}

          <q-checkbox
            v-model="drink.favorite"
            :val="drink.favorite"
            @update:model-value="drink.favorite == true ?
            favoriteDrinksStore.addFavoriteDrink(drink) :
            favoriteDrinksStore.removeFavoriteDrink(drink)"
            checked-icon="star"
            unchecked-icon="star_border"
            color="yellow"
            class="q-pl-lg"
            label="Favoritar Drink"
            indeterminate-icon="star_border"
          />
        </div>
      </q-img>

      <div
        class="content q-pl-sm"
      >

        <div
          class="font-special-title"
        >
          Ingredients:
        </div>

        <div>
          {{ this.ingredients }}
        </div>

        <div
          class="font-special-title"
        >
          Instructions:
        </div>

        <div
          class="text-pre"
        >
          {{ drink.strInstructions }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useFavoriteDrinks } from 'src/stores/favoriteDrinks.js'
import { Loading } from 'quasar';
export default defineComponent({
  data(){
    const favoriteDrinksStore = useFavoriteDrinks();
    return {
      favoriteDrinksStore,
      arrDrinks: [],
      ingredients: null,
    }
  },
  methods: {
    extractIngredients(arrDrinks){
      return Object.entries(arrDrinks[0])
      .filter(([key, value]) =>
        key.startsWith("strIngredient") &&
        value !== null &&
        value.trim() !== ""
      )
      .map(([_, value]) => value)
      .join(', ');
    },

    validateFavoriteDrink(drinks){
      drinks.forEach(drink => {
        drink.favorite = this.favoriteDrinksStore.favorites.some(fav => fav.idDrink === drink.idDrink);
      });
    },

    getDetailsDrinkById(idDrink){
      Loading.show();
      this.$axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`).then((res) => {
        this.arrDrinks = res.data.drinks;
        this.validateFavoriteDrink(this.arrDrinks);
        this.ingredients = this.extractIngredients(this.arrDrinks);
        Loading.hide();
      });
    },
  },
  mounted() {
    const idDrinkRouteParams = this.$route.query.idDrink;
    this.getDetailsDrinkById(idDrinkRouteParams)
  },
})

</script>
<style lang="css" scoped>

.img {
  width: 42%;
  object-fit: contain;
}

.content {
  width: 42%;
  overflow-wrap: break-word;
}

.text-pre {
  white-space: pre-line;
}

@media (max-width: 600px) {
  .img,
  .content {
    width: 100%;
    height: 100%
  }

  .row.no-wrap {
    flex-wrap: wrap;
  }
}

</style>
