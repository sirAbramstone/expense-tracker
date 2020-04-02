import Vue from 'vue';
import { dateFilter } from '~/filters/date.filter';

Vue.filter('date', dateFilter);
