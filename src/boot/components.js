import IButton from 'components/interrogation-button.vue';
import PaymentMethods from 'components/payment-methods.vue';

export default ({ Vue }) => {
  Vue.component('IButton', IButton);
  Vue.component('PaymentMethods', PaymentMethods);
};
