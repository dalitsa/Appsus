import bookApp from './cmps/book-app.cmp.js'
import routes from './services/routes.js'
import bookNavbar from './cmps/bookNavBar.cmp.js'
import userMsg from './cmps/user-msg.cmp.js'


const router = new VueRouter({ routes })


export default ({
    template: `
        <section class="my-app">   
            <user-msg></user-msg>
            <transition name="slide-fade"> 
            <book-navbar></book-navbar>
        </transition>
        <transition name="slide-fade"> 
            <router-view></router-view>
            </transition>

        </section>
    `,
    components: {
        bookApp,
        bookNavbar,
        userMsg
    }
})