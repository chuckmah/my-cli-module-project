import { ComponentsPlugin, DefaultSpritesPlugin, DirectivesPlugin, FiltersPlugin, FRENCH, FrenchPlugin, UtilsPlugin } from '@ulaval/modul-components';
import '@ulaval/modul-components/dist/styles/main.scss';
import Vue from 'vue';
import App from './app';

Vue.config.productionTip = false;

Vue.use(UtilsPlugin,
    {
        propagateVueParserErrors: true, i18PluginOptions: { curLang: FRENCH },
    }); // propagateVueError to console and use french
Vue.use(ComponentsPlugin, { richTextOptions: { key: 'froela_liscence_key' } }); // Use fake key to avoid error
Vue.use(DirectivesPlugin);
Vue.use(FiltersPlugin);
Vue.use(FrenchPlugin);
Vue.use(DefaultSpritesPlugin);

const vue = new Vue({
    render: (h) => h(App),
});

vue.$mount('#app');
