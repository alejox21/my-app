import Vue from 'vue';
import vueComponent from './src/app/vueComponent.vue';
import customElement from 'vue-custom-element';

Vue.use(customElement);
Vue.customElement('algo-custom', vueComponent);