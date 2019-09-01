<template>
  <q-page class="q-px-none">
    <div class="bg-primary q-pa-lg text-white">
      <h3> Seu perfil de risco é: </h3>
      <TitleHelp white> {{ profiles[selected] }} </TitleHelp>

      <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos culpa id deserunt officia assumenda consequuntur error, optio reiciendis quod et earum dolores! Numquam error, ipsa maxime quas molestias magni voluptatum. </p>
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
      <TitleHelp> Recomendações </TitleHelp>


      <div class="q-mt-lg">
        <q-card
          class="q-mb-lg bg-primary"
          v-for="card in cards"
          :key="card.name"
          @click="setFund(card)"
        >
          <router-link :to="{ name: 'fund' }">

            <q-card-section class="text-white">

            <div class="row justify-between ">
              <h3 class="col-9"> {{ card.title }} </h3>
              <h3>
                <q-icon name="arrow_forward"/>
              </h3>
            </div>

            <div class="row q-mt-md">
              <div
                class="bg-white text-weight-bold rounded-borders q-px-xs"
                :class="`text-${risks[card.risk].color}`"
              >
                {{ risks[card.risk].label.toUpperCase() }}
              </div>
            </div>
            <div class="q-mt-md flex items-center">
              <h3>
                <q-icon
                  class="q-pb-xs q-mr-sm"
                  name="access_time"
                />
              </h3>
              <h3> {{ card.time }} </h3>
              <div class="bg-white text-primary q-px-xs rounded-borders q-ml-xs"> + rápido que a poupança </div>
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
        title: 'Fundo grupo Armando Ferreira',
        risk: 0,
        time: '2 anos',
        goal: 750.00,
      },
      {
        title: 'Fundo de ações BIEX',
        risk: 2,
        time: '4 anos',
        goal: 500.00,
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
