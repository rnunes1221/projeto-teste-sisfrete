<template>
  <q-card
    class="q-pa-md font-special-title"
  >
    Favorite Drinks:
  </q-card>
  <div
    class="row"
  >
    <div
      v-show="favoriteDrinksStore.favorites.length"
      v-for="drink in favoriteDrinksStore.favorites"
      :key="drink.idDrink"
      class="col-12 col-sm-6 col-md-3 col-lg-3 q-pr-xs q-pt-xs"
    >
      <q-card
        class="rounded-borders border-card q-ml-xs text-vine"
      >
        <q-card-section
          class="q-pa-none card-section"
          @click="redirectByDetailsDrink(drink.idDrink)"
        >
          <q-img
            :src="drink.strDrinkThumb"
            spinner-color="grey"
            class="q-ma-none rounded-borders img"
          />
            <div
              class="text-bold font-special"
            >
              {{ drink.strDrink }}
            </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useFavoriteDrinks } from 'src/stores/favoriteDrinks.js'
import redirects from 'src/mixins/redirects';
export default defineComponent({
  mixins: [redirects],
  data(){
    const favoriteDrinksStore = useFavoriteDrinks();
    return {
      favoriteDrinksStore
    }
  },
})

</script>
<style lang="css" scoped>
.card-section{
  display: flex;
  align-items: center;
  cursor: pointer;
}
.img{
  height: 120px;
  max-width: 130px;
  margin-right: 10px;
}
.border-card {
  border: 1px solid #701c2c;
  border-radius: 8px;
}

.text-vine:hover {
  background-color: #701c2c;
  color: white;
}

</style>
