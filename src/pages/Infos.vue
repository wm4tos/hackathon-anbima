<template>
  <q-page>
    <q-form
      @submit="$router.push({ name: 'select-profile' })">

      <TitleHelp>
        Comprar {{ objective.value }}?
      </TitleHelp>

      <p>Nós queremos saber um pouquinho sobre o {{ objective.value }} que você tem como objetivo.</p>

      <div class="row justify-between q-mt-lg">

        <CircleLabel class="-big"> 1 </CircleLabel>
        <h1 class="col-9"> Qual o valor do imóvel? </h1>

        <q-input
          v-model="objectiveValue"
          class="q-mb-lg full-width"
          filled
          v-money="money"
        />
      </div>
      <div class="row justify-between">
        <CircleLabel class="-big"> 2 </CircleLabel>
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
