import Vue from 'vue';

import store from './store';

// import vueComponent from '../../app/vueComponents/vueComponent.vue';
import vueModal from '../../app/vueComponents/vueModal.vue';
import tasksWidget from '../../app/vueComponents/tasksWidget.vue';
import vueTasks from '../../app/vueComponents/vueTasks.vue';

import customElement from 'vue-custom-element';

Vue.use(customElement);

vueModal.store = store;
tasksWidget.store = store;
vueTasks.store = store;

// Vue.customElement('vue-tag', vueComponent);
Vue.customElement('vue-modal', vueModal);
Vue.customElement('tasks-widget', tasksWidget);
Vue.customElement('vue-tasks', vueTasks);
