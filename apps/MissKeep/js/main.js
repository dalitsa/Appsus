
import keepNavbar from './cmps/keep-navbar.cmp.js'
import keepApp from './cmps/keep-app.cmp.js'
// import userMsg from './cmps/user-msg.cmp.js'




export default ({
    template: `
        <section class="my-keppapp">   
            <user-msg></user-msg>
            <transition name="slide-fade"> 
            <keep-navbar></keep-navbar>
        </transition>
        <transition name="slide-fade"> 
            <router-view></router-view>
            </transition>

        </section>
    `,
    components: {
        keepApp,
        keepNavbar,
        // userMsg
    }
})