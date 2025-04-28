<template>
  <div
    class="row"
  >
    <div
      class="col-12 col-sm-6 col-md-3 col-lg-3 q-pr-xs q-pt-xs"
      v-show="arrCategory.length"
      v-for="category in arrCategory"
      :key="category.strCategory"
    >
      <q-card
        class="rounded-borders card text-vine"
        @click="redirectByCategory(category.strCategory)"
      >
        <q-card-section
          class="q-pa-sm card-section font-special center"
        >
          {{category.strCategory}}
        </q-card-section>
      </q-card>
    </div>
  </div>

</template>

<script>
import { defineComponent } from 'vue';
import { Loading } from 'quasar';
import redirects from 'src/mixins/redirects';
export default defineComponent({
  mixins: [redirects],
  data(){
    return {
      arrCategory: [],
    }
  },
  methods: {
    getAllCategory(){
      Loading.show();
      this.$axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`).then((res) => {
        this.arrCategory = [];
        this.arrCategory = res.data.drinks;
        Loading.hide();
      });
    },
  },

  mounted() {
    this.getAllCategory();
  },
})

</script>
<style lang="css" scoped>
.card-section{
  text-align: center;
}
.card{
  cursor: pointer;
}

.text-vine:hover {
  background-color: #701c2c;
  color: white;
}
</style>
