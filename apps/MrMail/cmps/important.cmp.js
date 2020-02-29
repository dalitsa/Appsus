import { eventBus } from '../services/event-bus.js'
import mailPreview from '../cmps/mail-preview.cmp.js'


export default {
    template: `
        <section class="important-mail">
        <ul >
    <li v-for="(mail,idx) in mails" :key = "idx"  >
        {{mail}}
        <mail-preview :mail="mail" @removeMail="removeMail" @click.native="updateReadMode" @selected="selected">lsls</mail-preview>
    </li>
       
</ul>
</section>
    `,
    data() {
        return {
            mails: null
        }
    },
    created() {
        eventBus.$on('importantMails', mails => {
            console.log('im here!');
            this.mails = mails
            console.log(this.mails);


        })

    },
    components: {
        mailPreview
    }
}