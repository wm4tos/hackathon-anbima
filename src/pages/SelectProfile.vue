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
        label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium reiciendis beatae mollitia eveniet tempora minus asperiores error labore, illum voluptatum, dignissimos molestias a fugit distinctio nisi repellat impedit exercitationem quas."
      />

      <q-checkbox
        class="q-mb-lg"
        v-model="selected"
        :val="2"
        label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium reiciendis beatae mollitia eveniet tempora minus asperiores error labore, illum voluptatum, dignissimos molestias a fugit distinctio nisi repellat impedit exercitationem quas."
      />

      <q-checkbox
        class="q-mb-lg"
        v-model="selected"
        :val="3"
        label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium reiciendis beatae mollitia eveniet tempora minus asperiores error labore, illum voluptatum, dignissimos molestias a fugit distinctio nisi repellat impedit exercitationem quas."
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
