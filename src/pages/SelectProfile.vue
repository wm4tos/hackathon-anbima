<template>
  <q-page>
    <div class="flex justify-between items-center">
      <h1> Perfil </h1>
      <i-button />
    </div>
    <p class="q-mt-md">
      Precisamos conhecer você um pouco melhor para poder recomendar os melhores fundos para você atingir seu objetivo mais rápido.
    </p>
    <div>
      <q-btn
        class="text-white q-mr-md q-mt-lg"
        :class="buttonSelected === v ? 'bg-primary' : 'bg-black'"
        v-for="v in 2"
        :key="v"
        :label="v"
        round
        size="md"
        @click="buttonSelected = v"
      />
    </div>
    <div>
      <q-checkbox
        class="q-mt-md"
        v-model="selected"
        v-for="v in 3"
        :key="v"
        :val="v"
        :label="buttonSelected === 1 ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit massa gravida amet, egestas massa est pellentesque turpi.' : 'Chase after silly colored fish toys around the house man running from cops stops to pet cats, goes to jail yet find something else more interesting poop in litter box.'"
      />
    </div>
    <div class="q-mt-lg">
      <q-btn
        class="text-white bg-primary full-width"
        label="Próximo"
        size="lg"
        @click="$router.push({ name: 'profile' })"
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
