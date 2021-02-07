import { createApp } from 'vue';
import App from './App.vue';

// 全局样式
import 'styles/index.scss';
import router from '@/router';
import store from '@/store';
import element3 from 'plugins/element3';

createApp(App).use(element3).use(router).use(store).mount('#app');
