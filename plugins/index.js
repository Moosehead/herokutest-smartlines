import Vue from 'vue';
import VTooltip from 'v-tooltip';
import plugins from '@/components/global';

plugins.forEach(plugin => Vue.component(plugin.name, plugin.component));
Vue.use(VTooltip);
