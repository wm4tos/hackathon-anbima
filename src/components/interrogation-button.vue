<template>
  <q-btn
    :class="`bg-${colorButton} text-${colorText}`"
    label="?"
    round
    size="lg"
    @click="changeTooltipValue"
    @blur="changeTooltipValue"
  >
    <q-tooltip
      v-model="tooltip"
      anchor="bottom right"
    >
      {{ labelTooltip }}
    </q-tooltip>
  </q-btn>
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
  methods: {
    changeTooltipValue() {
      this.tooltip = !this.tooltip;
    },
  },
};
</script>
