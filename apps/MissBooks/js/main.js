import bookApp from './cmps/book-app.cmp.js'
// import routes from './services/routes.js'
import bookNavbar from './cmps/bookNavBar.cmp.js'
import userMsg from './cmps/user-msg.cmp.js'
import { eventBus } from '../js/services/event-bus.service.js'



// const router = new VueRouter({ routes })


export default ({
    template: `
        <section class="my-app">   
            <book-navbar></book-navbar>
            <user-msg></user-msg>
            <transition name="slide-fade"> 
            <book-app></book-app>
        </transition>
        </section>
    `,
    components: {
        bookApp,
        bookNavbar,
        userMsg
    },

})