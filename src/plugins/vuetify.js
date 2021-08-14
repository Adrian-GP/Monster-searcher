import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#ef5350',
                secondary: '#FECA1B',
                accent: '#8c9eff',
                error: '#b71c1c',
            },
            dark: {
                primary: '#2196F3',
                secondary: '#FECA1B',
                accent: '#8c9eff',
                error: '#b71c1c',
            },
        },
    },
});
