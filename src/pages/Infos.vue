<template>
  <q-page>
    <q-form
      @submit="$router.push({ name: 'select-profile' })">
      <div class="row justify-between">
        <h1 class="col-9"> Comprar {{ objective.value }} </h1>
        <i-button />
      </div>
      <div class="row justify-between items-center q-mt-lg">
        <q-btn
          class="bg-black text-white"
          label="1"
          flat
          round
          size="lg"
        />
        <h1 class="col-9"> Qual o valor do {{ objective.value }}? </h1>
        <q-input
          v-model="objectiveValue"
          class="q-mt-lg full-width"
          filled
          v-money="money"
        />
      </div>
      <div class="row justify-between q-mt-lg">
        <q-btn
          class="bg-black text-white"
          label="2"
          flat
          round
          size="lg"
        />
        <h1 class="col-9"> Quanto quer pagar por mês? </h1>
        <q-input
          v-model="monthValue"
          class="q-mt-lg full-width"
          filled
          v-money="money"
        />
      </div>
      <q-btn
        label="Próximo"
        class="bg-primary text-white full-width q-mt-xl"
        flat
        size="lg"
        type="submit"
        :disable="monthValue === 'R$ 0,00' || objectiveValue === 'R$ 0,00'"
      />
    </q-form>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import VMoney from 'src/mixins/v-money';

export default {
  data: () => ({
    objectiveValue: 0,
    monthValue: 0,
  }),
  mixins: [VMoney],
  computed: {
    ...mapGetters({
      objective: 'getObjective',
    }),
  },
};
</script>
