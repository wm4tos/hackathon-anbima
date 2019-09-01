<template>
  <div :class="`i-button bg-${colorButton} text-${colorText}`">
    <div class="label"> ? </div>
    <q-tooltip anchor="bottom right">
      {{ labelTooltip }}
    </q-tooltip>
  </div>
</template>

<script>
export default {
  data: () => ({
    tooltip: false,
  }),
  props: {
    labelTooltip: {
      type: String,
      default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, animi nobis facere libero repellendus quasi! Nulla qui labore, expedita cum assumenda sequi sint fugit sunt repellat doloribus temporibus illo minus.',
    },
    colorButton: {
      type: String,
      default: 'black',
    },
    colorText: {
      type: String,
      default: 'white',
    },
  },
};
</script>

<style lang="scss">
.i-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 0 4px 0 24px;
  background: #343434;
  border-radius: 50%;

  color: white;
  font-size: 20px;
  font-weight: bold;
}

</style>
