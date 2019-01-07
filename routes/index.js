import Vue from 'vue'
import Pokemon from '@/components/Pokemon'
import router from './router'

Vue.use(Router)

export default new Router ({

    routes: [
        path: '/',
        name: 'Pokemon',
        component: Pokemon

]

})