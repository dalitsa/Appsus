import { mailService } from '../MrMail/services/mail-service.js';
import mailList from './pages/mail-list.cmp.js'
import navBar from './cmps/nav-bar.cmp.js'
import sideBar from './cmps/side-bar.cmp.js'
import composeArea from './cmps/compose-area.cmp.js'
import { eventBus } from './services/event-bus.js'








export default {
    template: `
 <section class="mail-container" v-if="mails" :mails="mails">
 <transition name="slide-fade"> 
        <router-view class="mail-list"></router-view>
        </transition>
        <nav-bar ></nav-bar>
        <side-bar :mails="mails" ></side-bar>
              
    </section>
    `,
    data() {
        return {
            mails: [],
            isShown: false,
        }
    },

    created() {
        mailService.query()
            .then(mails => {
                this.mails = mails
            })
        eventBus.$on('mail-changed', mails => {
            this.mails = mails
        })
    },






    components: {
        mailList,
        navBar,
        sideBar,
        composeArea

    }

}