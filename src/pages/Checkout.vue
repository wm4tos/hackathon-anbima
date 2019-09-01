<template>
  <q-page>
    <title-help>
      Checkout de investimento
    </title-help>
    <p>
      Para finalizar o investimento vamos precisar de algumas informações pessoais, ta bom? :)
    </p>
    <h1 class="q-mt-sm"> Já possui conta? </h1>
    <q-btn
      class="full-width"
      label="Login"
      color=""
      outline
      disable
      size="lg"
    />
    <h1 class="q-mt-xl"> Qual seu CPF? </h1>
    <q-input
      filled
      class="text-grey"
      placeholder="xxx.xxx.xxx-xx"
      v-model="doc"
      mask="###.###.###-##"
    />
    <h1 class="q-mt-xl"> Qual seu e-mail? </h1>
    <q-input
      filled
      class="text-grey"
      placeholder="seu@email.com"
      v-model="email"
      :rules="[
        validateMail
      ]"
    />
    <h1 class="q-mt-xl"> Forma de Pagamento </h1>
    <payment-methods active/>
    <q-form
      @submit="$router.push({ name: 'congratulations' })">
      <h1 class="q-mt-xl"> Dados de pagamento </h1>
      <q-input
        filled
        class="text-grey"
        placeholder="XXXX XXXX XXXX XXXX"
        mask="#### #### #### ####"
        :rules="[
          val => /\d{4}\s\d{4}\s\d{4}\s\d{4}/.test(val) || 'Digite um cartão válido.'
        ]"
        v-model="cardNumber"
      />
      <div class="row justify-between items-start q-mt-md">
        <q-input
          filled
          v-model="dueDate"
          class="text-grey col-4"
          placeholder="DD/MM"
          mask="XX/XX"
          :rules="[
            val => /([123][0-9])\/(19|[2-9][0-9])/.test(val) || 'Digite uma data de vencimento válida.'
          ]"
        />
        <q-input
          filled
          v-model="cvv"
          class="text-grey col-4"
          placeholder="CVV"
          :rules="[
            val => /\d{3}/.test(val) || 'Digite um CVV válido.'
          ]"
          mask="###"
        />
        <div class="col-2 flex justify-end q-mt-sm q-pt-xs">
          <img src="~assets/master-card.svg" alt="MasterCard logo">
        </div>
      </div>
      <div class="q-mt-xl">
        <q-btn
          class="bg-primary text-white full-width"
          flat
          label="Investir <3"
          size="lg"
          type="submit"
          :disable="!dueDate || !cardNumber || !cvv"
        />
      </div>
    </q-form>
  </q-page>
</template>

<script>
export default {
  data: () => ({
    doc: '',
    email: '',
    cardNumber: '',
    cvv: '',
    dueDate: '',
  }),
  methods: {
    validateMail(val) {
      return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val) || 'Por favor, digite um e-mail válido.';
    },
  },
};
</script>
