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
      <div class="flex items-center justify-between">
        <h2> Risco </h2>
        <i-button />
      </div>
      <h3
        class="q-mt-md text-weight-bold"
        :class="`text-${fund.risk.color}`"
      > {{ fund.risk.label.toUpperCase() }} </h3>
    </div>
    <div class="q-mt-lg">
      <div class="row items-center justify-between">
        <h2 class="col-8"> Duração do investimento </h2>
        <i-button />
      </div>
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
      <div class="row items-center justify-between">
        <h2 class="col-8"> Meta mensal de investimento </h2>
        <i-button />
      </div>
      <h3 class="q-mt-md text-weight-bold text-primary">
        {{ fund.goal | currency }}
      </h3>
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
