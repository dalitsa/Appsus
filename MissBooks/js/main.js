import bookApp from './cmps/book-app.cmp.js'
import routes from './services/routes.js'
import navBar from './cmps/nav-bar.cmp.js'
import userMsg from './cmps/user-msg.cmp.js'


const router = new VueRouter({ routes })


new Vue({
    el: '#app',
    router,
    template: `
        <section class="my-app">   
            <user-msg></user-msg>
            <transition name="slide-fade"> 
            <nav-bar></nav-bar>
        </transition>
        <transition name="slide-fade"> 
            <router-view></router-view>
            </transition>

        </section>
    `,
    components: {
        bookApp,
        navBar,
        userMsg

    }
})