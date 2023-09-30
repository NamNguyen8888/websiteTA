import App from '@/App.vue';
import { createApp } from 'vue';
import router from './routes';
import './style.css';

createApp(App).use(router).mount('#app')
