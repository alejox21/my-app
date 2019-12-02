import Vue from 'vue';
import vueComponent from '../../app/vueComponents/vueComponent.vue';
import customElement from 'vue-custom-element';

Vue.use(customElement);
Vue.customElement('vue-tag', vueComponent);
