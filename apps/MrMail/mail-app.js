import { mailService } from '../MrMail/services/mail-service.js';
import mailList from './pages/mail-list.cmp.js'



export default {
    template: `
    
    <section class="mail-container" v-if="mails" :mails="mails">
        <mail-list :mails="mails" >{{mails}}</mail-list>
    </section>
    `,
    data() {
        return {
            mails: []
        }
    },

    created() {
        mailService.query()
            .then(mails => {
                this.mails = mails

            })

    },


    components: {
        mailList,
    }

}