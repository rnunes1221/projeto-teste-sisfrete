<template>
  <q-page class="q-pa-md">
    <div class="row q-gutter-sm q-mb-md">
      <q-btn
        v-for="letra in letras"
        :key="letra"
        :label="letra"
        size="sm"
        @click="selecionarLetra(letra)"
        :color="letra === letraSelecionada ? 'red-10' : 'grey-4'"
        flat
      />
    </div>

    <q-list bordered>
      <q-item
        v-for="item in itens"
        :key="item.idDrink"
        clickable
        class="text-vine"
        @click="redirectByDetailsDrink(item.idDrink)"
      >
        <q-img
          :src="item.strDrinkThumb"
          spinner-color="grey"
          class="q-ma-none rounded-borders img"
        />
        <div
          class="text-bold font-special "
        >
          {{ item.strDrink }}
        </div>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { Loading } from 'quasar';
import axios from 'axios';
import redirects from 'src/mixins/redirects';
export default {
  mixins: [redirects],
  data() {
    return {
      letras: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      letraSelecionada: '',
      itens: []
    };
  },
  mounted() {
  },
  methods: {
    async selecionarLetra(letra) {
      this.letraSelecionada = letra;
      this.itens = [];

      try {
        Loading.show();
        const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letra}`);
        this.itens = res.data.drinks || [];
        Loading.hide();
      } catch (e) {
        Loading.hide();
        this.$q.notify({ message: 'Erro ao buscar dados', color: 'negative' });
      }
    }
  }
};
</script>
<style lang="css" scoped>
.img{
  height: 40px;
  max-width: 40px;
  margin-right: 10px;
}
.text-vine:hover {
  background-color: #701c2c;
  color: white;
}
</style>
