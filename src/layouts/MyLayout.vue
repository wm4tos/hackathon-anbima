<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      v-show="!isHome"
      reveal
      :reveal-offset="100"
    >
      <q-toolbar
        class="q-px-lg q-pt-xl justify-between items-center flex"
        :class="bgPrimary ? 'bg-primary' : 'bg-white'"
      >
        <q-btn
          dense
          no-caps
          label="voltar"
          color="black"
          flat
          icon="arrow_back"
          @click="redirectUser"
        />
        <div>
          <img
            v-if="!bgPrimary"
            src="~assets/i9acao.svg"
            alt="i9ação"
            height="90px"
            class="logo"
          />
          <img
            v-else
            src="~assets/i9acao-white.svg"
            alt="i9ação"
            height="90px"
            class="logo"
          >
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container :class="bgPrimary ? 'bg-primary' : ''">
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'default-layout',
  computed: {
    isHome() {
      return this.$route.name === 'home';
    },
    bgPrimary() {
      return this.$route.name === 'welcome';
    },
  },
  methods: {
    redirectUser() {
      const routes = ['home', 'welcome', 'objective', 'infos', 'select-profile', 'profile', 'fund', 'checkout', 'congratulations'];
      const index = routes.findIndex(route => route === this.$route.name);

      this.$router.push({ name: routes[index - 1] });
    },
  },
};
</script>
