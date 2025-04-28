<template>
  <div>
    <q-input
      v-model="search"
      stack-label
      outlined
      dense
      color="red-10"
      type="search"
      label="Search"
      @keyup.enter="searchDrink(search)"
    >
      <template v-slot:append>
        <q-icon name="search" color="red-10"/>
      </template>
    </q-input>
  </div>
  <div
    class="row"
  >
    <div
      v-show="arrDrinks.length"
      v-for="drink in arrDrinks"
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
import redirects from 'src/mixins/redirects';
import { Loading } from 'quasar';
export default defineComponent({
  mixins: [redirects],
  data(){
    return {
      arrDrinks: [],
      search: ''
    }
  },
  methods: {
    searchDrink(drink){
      Loading.show();
      this.$axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`).then((res) => {
        this.arrDrinks = [];
        this.arrDrinks = res.data.drinks
        Loading.hide();
      });
    },
  },
})

</script>
<style lang="css" scoped>
.img{
  height: 120px;
  max-width: 130px;
  margin-right: 10px;
}

.card-section{
  display: flex;
  align-items: center;
  cursor: pointer;
}

.card{
  cursor: pointer;
}

.text-vine:hover {
  background-color: #701c2c;
  color: white;
}
</style>
