import { VMoney } from 'v-money';

export default {
  data() {
    return {
      money: {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        precision: 2,
      },
    };
  },
  directives: { money: VMoney },
};
