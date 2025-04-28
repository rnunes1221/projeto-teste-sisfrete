<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-xs">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-vine"
          align="justify"
          narrow-indicator
        >
          <q-tab name="category" label="Category" />
          <q-tab name="name" label="Drinks For Name" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="category">
            <TabCategory />
          </q-tab-panel>

          <q-tab-panel name="name">

            <TabName />

          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import TabCategory from './TabCategory.vue';
import TabName from './TabName.vue';
export default defineComponent({
  data(){
    return {
      tab: 'category'
    }
  },
  components:{
    TabCategory,
    TabName
  }
})
</script>

