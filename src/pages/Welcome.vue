<template>
  <q-page class="welcome text-white column justify-between">
    <h1> Bem vindo! </h1>
      <!-- eslint-disable-next-line max-len -->
    <p>
      Você está prestes a entrar na melhor plataforma de investimentos para atingir seus objetivos financeiros.
      <br><br>
      O processo é muito simples e transparente!
      <br><br>
      Esperamos que  goste ;)
    </p>

    <h2>Valor minimo para começar</h2>
    <p class="text -bold">R$ 100,00</p>

    <h2>Formas de atingir sua meta</h2>
    <PaymentMethods class="-white"/>
    <div class="button-wrapper">
      <q-btn
        class="bg-white text-primary"
        label="Começar"
        flat
        size="lg"
        @click="$router.push({ name: 'objective' })"
      />
      <q-btn
        class="text-white"
        label="Login"
        flat
        size="lg"
        @click="$router.push({ name: 'objective' })"
      />
    </div>
  </q-page>
</template>

<script>
export default {

};
</script>

<style lang="scss">
  .welcome {
    >.button-wrapper {
      display: flex;
      flex-direction: column;
      padding: 0 20px;

      >.q-btn {
        margin-bottom: 12px;
      }
    }
  }
</style>
