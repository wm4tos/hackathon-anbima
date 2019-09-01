<template>
  <div class="payment-methods">
    <div
      class="method"
      :class="selected === 'credit' ? 'method-actived' : ''"
      @click="selected = 'credit'"
    >
      <img src="~/assets/credit-card.svg" alt="" fill="white">
      <div> CARTÃO DE <br> CRÉDITO </div>
    </div>
    <div
      class="method"
      :class="selected === 'wallet' ? 'method-actived' : ''"
      @click="selected = 'wallet'"
    >
      <img src="~/assets/wallet.svg" alt="">
      <div> WALLET <br> DIGITAL </div>
    </div>
    <div
      class="method"
      :class="selected === 'bill' ? 'method-actived' : ''"
      @click="selected = 'bill'"
    >
      <img src="~/assets/boleto.svg" alt="">
      <div> BOLETO <br> BANCÁRIO </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'payment-methods',
  data: () => ({
    selected: 'credit',
  }),
};
</script>

<style lang="scss">
.payment-methods {
  display: flex;
  max-width: 100%;;
  margin-bottom: 40px;
  overflow-x: scroll;

  &[active] {
    >.method-actived {
      background: #662BFF;
      border-radius: 8px;
      color: white;

      > img {
        filter: invert(1);
      }
    }
  }

  &.-white {
    >.method {
      > img {
        filter: invert(1);
      }
    }
  }

  &.-black {
    >.method {
      color: black;
    }
  }

  > .method {
    flex-shrink: 0;
    width: 116px;
    padding: 16px 0 16px;
    margin-left: 20px;
    text-align: center;
    font-weight: bold;

    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
