<template>
  <q-page class="row column justify-between">
    <div>
      <div class="flex justify-between">
        <h1> Qual seu objetivo? </h1>
        <i-button />
      </div>
      <p>
        Precisamos conhecer você um pouco melhor para poder recomendar os melhores fundos para você atingir seu objetivo mais rápido.
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
import IButton from 'components/interrogation-button.vue';

export default {
  data: () => ({
    objective: '',
  }),
  components: {
    IButton,
  },
  methods: {
    nextRoute() {
      this.$store.dispatch('SET_OBJECTIVE', this.objective);

      this.$router.push({ name: 'infos' });
    },
  },
};
</script>
