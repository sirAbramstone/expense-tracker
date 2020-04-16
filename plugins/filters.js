import Vue from 'vue';
import { dateFilter } from '~/filters/date.filter';
import { currencyFilter } from '~/filters/currency.filter';

Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);
