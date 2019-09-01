<template>
  <q-page class="row column justify-between">
    <div>
      <TitleHelp>
        Qual seu objetivo?
      </TitleHelp>
      <p>
        Nós queremos saber qual o seu objetivo ao investir :)
        Assim nós conseguimos indicar os melhores fundos sem dor de cabeça :D
      </p>
      <div class="q-mt-xl">
        <q-select
          class="text-primary"
          v-model="objective"
          :options="[
            { label: 'Comprar imóvel', value: 'imóvel' },
            { label: 'Comprar apartamento', value: 'apartamento' }
          ]"
          filled
        />
      </div>
    </div>
    <q-btn
      label="Próximo"
      class="bg-primary text-white full-width"
      flat
      size="lg"
      @click="nextRoute"
      :disable="!objective"
    />
  </q-page>
</template>

<script>
export default {
  data: () => ({
    objective: '',
  }),
  methods: {
    nextRoute() {
      this.$store.dispatch('SET_OBJECTIVE', this.objective);

      this.$router.push({ name: 'infos' });
    },
  },
};
</script>
