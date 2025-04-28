<template>
  <div>
    <Tabs />

    <Alfabeto />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Tabs from 'src/components/drinks/tabs/Tabs.vue';
import Alfabeto from 'src/components/drinks/alfabeto/Alfabeto.vue';
export default defineComponent({
  data(){
    return {
    }
  },
  components:{
    Tabs,
    Alfabeto
  }
})
</script>

