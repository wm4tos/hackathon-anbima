<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      class="bg-primary"
      v-show="!isHome"
      reveal
      :reveal-offset="100"
    >
      <q-toolbar
        class="q-px-lg q-pt-xl justify-between"
        :class="bgPrimary ? 'bg-primary' : 'bg-white'"
      >
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

    <!-- <q-footer
      v-show="!isHome"
      class="q-pa-md text-right"
      :class="bgPrimary ? 'bg-primary' : 'bg-white'"
    >
      <q-btn
        color="primary"
        round
        label="?"
        size="lg"
      />
    </q-footer> -->
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
};
</script>
