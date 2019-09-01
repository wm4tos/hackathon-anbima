import IButton from 'components/interrogation-button.vue';
import PaymentMethods from 'components/payment-methods.vue';
import TitleHelp from 'components/title-help.vue';

export default ({ Vue }) => {
  Vue.component('IButton', IButton);
  Vue.component('PaymentMethods', PaymentMethods);
  Vue.component('TitleHelp', TitleHelp);
};
