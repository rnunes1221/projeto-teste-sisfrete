<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-vine">
        <q-btn
          icon="home"
          flat
          class="font-special"
          label="Home"
          dense
          @click="redirectHome()"
        />
        <q-btn
          icon="star"
          flat
          class="font-special"
          label="Favorite Drinks"
          dense
          @click="redirectFavoriteDrink()"
        >
          <q-badge color="red" class="font-badge" floating v-show="favoriteDrinksStore.favorites.length > 0">
            {{ favoriteDrinksStore.favorites.length }}
          </q-badge>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
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
      favoriteDrinksStore,
    }
  },
})
</script>

<style lang="scss" scoped>
  .font-badge{
    font-size: 13px;
  }
</style>
