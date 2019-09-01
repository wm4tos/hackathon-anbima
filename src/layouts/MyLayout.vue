<template>
  <q-layout view="lHh Lpr lFf">
    <q-header v-show="!isHome" class="bg-primary">
      <q-toolbar
        class="q-px-lg q-pt-xl justify-between"
        :class="bgPrimary ? 'bg-primary' : 'bg-white'"
      >
        <div class="q-px-md">
          <img
            v-if="!bgPrimary"
            src="~assets/i9acao.svg"
            alt="i9ação"
            height="90px"
          />
          <img
            v-else
            src="~assets/i9acao-white.svg"
            alt="i9ação"
            height="90px"
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
