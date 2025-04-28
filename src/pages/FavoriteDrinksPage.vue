<template>
  <div>
    <FavoriteDrinks />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import FavoriteDrinks from 'src/components/drinks/cards/FavoriteDrinks.vue'
export default defineComponent({
  data(){
    return {
    }
  },
  components:{
    FavoriteDrinks
  }
})
</script>

