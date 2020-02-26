import navBar from '../pages/cmps/navbar.cmp.js'
import routes from '../routes.js'


const router = new VueRouter({ routes })


new Vue({
    el: '#app',
    router,
    template: `
        <section class="app-sus">   
            <transition name="slide-fade"> 
            <nav-bar></nav-bar>
        </transition>
        <transition name="slide-fade"> 
            <router-view></router-view>
            </transition>

        </section>
    `,
    components: {
        navBar,
    }
})