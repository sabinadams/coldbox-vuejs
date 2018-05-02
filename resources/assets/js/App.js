var Vue = require( 'vue' );
import App from './App.vue'
import router from './router'

new Vue( {
    router,
    mounted : function() {
        if ( Vue.config.devtools && console.log ) {
            console.log( 'ColdBox, Vue and Vueify all set to go!' );
            console.log( "Vue Version " + Vue.version );
        }
    },
    render: h => h(App)
} ).$mount('#app');
