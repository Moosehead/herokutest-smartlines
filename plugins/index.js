import Vue from 'vue';
import VTooltip from 'v-tooltip';
import plugins from '@/components/global';
import filters from '@/filters';

plugins.forEach(plugin => Vue.component(plugin.name, plugin.component));
Vue.use(filters);
Vue.use(VTooltip);
