<template>
  <div>
    <CategoryDrinks />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import CategoryDrinks from 'src/components/drinks/cards/CategoryDrinks.vue'
export default defineComponent({
  data(){
    return {
    }
  },
  components:{
    CategoryDrinks
  }
})
</script>

