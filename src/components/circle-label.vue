<template>
  <div class="circle-label">
    <slot/>
  </div>
</template>

<style lang="scss">
.circle-label {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  font-size: 20px;
  font-weight: bold;
  color: white;

  background: #343434;
  border-radius: 50%;

  &[active] {
    background: #662BFF;
  }

  &[disabled] {
    opacity: 0.1;
  }

  &.-big {
    width: 48px;
    height: 48px;
  }

  & ~ .circle-label {
    margin-left: 20px;
  }
}

</style>
