<template>
  <q-page class="q-px-none">
    <div class="bg-primary q-pa-lg text-white">
      <h3> Seu perfil de risco é: </h3>
      <div class="flex justify-between items-center">
        <h1> {{ profiles[selected] }} </h1>
        <i-button
          colorButton="white"
          colorText="black"
        />
      </div>
      <p class="q-mt-md"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos culpa id deserunt officia assumenda consequuntur error, optio reiciendis quod et earum dolores! Numquam error, ipsa maxime quas molestias magni voluptatum. </p>
      <q-btn
        class="q-pl-none"
        label="Refazer perfil"
        no-caps
        icon-right="refresh"
        flat
        size="lg"
        @click="$router.push({ name: 'select-profile' })"
      />
    </div>
    <div class="q-px-lg q-pt-xl">
      <div class="flex justify-between items-center">
        <h1> Recomendações </h1>
        <i-button />
      </div>
      <div class="q-mt-lg">
        <q-card
          class="q-mb-lg bg-primary"
          v-for="card in cards"
          :key="card.name"
          @click="setFund(card)"
        >
          <router-link
            :to="{ name: 'fund' }">
            <q-card-section class="text-white">
            <div class="row justify-between ">
              <h3 class="col-9"> {{ card.title }} </h3>
              <h3>
                <q-icon name="arrow_forward"/>
              </h3>
            </div>
            <div class="row q-mt-md">
              <p
                class="shadow-2 bg-white q-px-xs text-weight-bold"
                :class="`text-${risks[card.risk].color}`"
              >
                {{ risks[card.risk].label.toUpperCase() }}
              </p>
            </div>
            <div class="q-mt-md flex items-center">
              <h3>
                <q-icon
                  class="q-pb-xs q-mr-sm"
                  name="access_time"
                />
              </h3>
              <h3> {{ card.time }} </h3>
              <p class="shadow-2 bg-white text-primary q-px-xs rounded-borders q-ml-xs"> + rápido que a poupança </p>
            </div>
          </q-card-section>
          </router-link>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data: () => ({
    profiles: [
      'Agressivo',
      'Conservador',
      'Arrojado',
    ],
    selected: Math.floor(Math.random() * Math.floor(3)),
    risks: [
      {
        label: 'Alto-risco',
        color: 'red',
      },
      {
        label: 'Médio-risco',
        color: 'orange',
      },
      {
        label: 'Baixo-risco',
        color: 'green',
      },
    ],
    cards: [
      {
        title: 'Fundo batata doce com frango',
        risk: 0,
        time: '2 anos',
        goal: 750.00,
      },
      {
        title: 'Fundo pão de queijo',
        risk: 2,
        time: '4 anos',
        goal: 500.00,
      },
      {
        title: 'Fundo coxinha',
        risk: 1,
        time: '3 anos',
        goal: 400,
      },
    ],
  }),
  methods: {
    setFund(fund) {
      fund.risk = this.risks[fund.risk];

      this.$store.dispatch('SET_FUND', fund);
    },
  },
};
</script>
