<template>
  <div class="conteudo">
    <DetailDrink />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import DetailDrink from 'src/components/drinks/cards/DetailDrink.vue';
export default defineComponent({
  data(){
    return {
    }
  },
  components:{
    DetailDrink
  }
})
</script>
<style lang="scss" scoped>

.conteudo {
  color: rgb(255, 255, 255);
  padding: 5px;
}
</style>
