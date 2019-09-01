<template>
  <div class="title-help">
    <div class="title">
      <slot />
    </div>
    <i-button />
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
.title-help {
  display: flex;

  >.title {
    flex-grow: 1;
    margin-bottom: 16px;
    font-size: 28px;
    font-weight: 900;
    line-height: 37px;
  }

  >.i-button {
    flex-shrink: 0;
  }
}

</style>
