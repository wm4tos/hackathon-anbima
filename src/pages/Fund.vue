<template>
  <q-page>
    <h1> {{ fund.title }} </h1>
    <div class="q-mt-lg">
      <q-btn
        @click="$router.push({ name: 'checkout' })"
        class="bg-primary text-white full-width"
        label="Investir"
        flat
        size="lg"
      />
    </div>
    <div class="q-mt-lg">
      <h1 class="q-mt-xl"> Formas de Pagamento </h1>
      <payment-methods/>
    </div>
    <div class="q-mt-lg">
      <TitleHelp>Risco</TitleHelp>
      <h3
        class="text-weight-bold"
        :class="`text-${(fund.risk || {}).color}`"
      > {{ (fund.risk || {}).label.toUpperCase() }} </h3>
    </div>
    <div class="q-mt-lg">
      <TitleHelp>Duração do investimento</TitleHelp>
      <div class="flex text-primary">
        <h3>
          <q-icon
            class="q-pb-xs q-mr-sm text-bold"
            name="access_time"
          />
        </h3>
        <h3 class="text-bold"> {{ fund.time }} </h3>
      </div>
    </div>
    <div class="q-mt-lg">
      <TitleHelp>Meta mensal de investimento</TitleHelp>
      <h3 class="text-weight-bold text-primary">
        {{ fund.goal | currency }}
      </h3>
    </div>
    <div class="q-mt-lg">
      <q-btn
        @click="$router.push({ name: 'checkout' })"
        class="bg-primary text-white full-width"
        label="Investir"
        flat
        size="lg"
      />
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      fund: 'getFund',
    }),
  },
  filters: {
    currency(value) {
      const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
      });

      return formatter.format(value);
    },
  },
};
</script>
