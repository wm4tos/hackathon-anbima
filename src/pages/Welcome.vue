<template>
  <q-page class="text-white column justify-between">
    <div>
      <h1> BEM-VINDO! </h1>
      <!-- eslint-disable-next-line max-len -->
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident dignissimos voluptatem perferendis minus reprehenderit, atque excepturi ipsum error, impedit quibusdam fugiat ipsam culpa omnis deleniti. Sint omnis commodi aperiam nihil. </p>
    </div>
    <q-btn
      class="bg-white text-primary"
      label="Começar"
      flat
      size="lg"
      @click="$router.push({ name: 'objective' })"
    />
  </q-page>
</template>

<script>
export default {

};
</script>
