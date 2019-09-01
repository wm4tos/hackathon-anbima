<template>
  <q-page>
    <TitleHelp> Perfil </TitleHelp>
    <p>
      Precisamos conhecer você um pouco melhor para poder recomendar os melhores fundos para você atingir seu objetivo mais rápido.
    </p>

    <div>
      <div class="q-mb-lg row">
        <CircleLabel active class="-big">1</CircleLabel>
        <CircleLabel disabled class="-big">2</CircleLabel>
      </div>

      <q-checkbox
        class="q-mb-lg"
        v-model="selected"
        :val="1"
        label="Sou conservador, prefiro correr poucos riscos mesmo que isso signifique perder algumas oportunidades"
      />

      <q-checkbox
        class="q-mb-lg"
        v-model="selected"
        :val="2"
        label="Sou moderado, poderia investir em uma oportunidade que possa me dar um maior retorno mesmo que com algum risco"
      />

      <q-checkbox
        class="q-mb-lg"
        v-model="selected"
        :val="3"
        label=" Sou arrojado, gosto da liberdade para investir em vários ativos, mesmo que signifique correr um maior risco"
      />
    </div>
    <div class="q-mt-lg">
      <q-btn
        class="text-white bg-primary full-width"
        label="Próximo"
        size="lg"
        @click="$router.push({ name: 'profile' })"
        :disable="!selected.length"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  data: () => ({
    selected: [],
    buttonSelected: 1,
  }),
};
</script>
