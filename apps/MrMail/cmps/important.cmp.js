import { eventBus } from '../services/event-bus.js'
import mailPreview from '../cmps/mail-preview.cmp.js'


export default {
    template: `
        <section class="important-mail">
        <ul >
        <li v-for="(mail,idx) in mailsForDisplay" :key = "idx" >
        <mail-preview :mail="mail" @removeMail="removeMail(mail.id)" @click.native="updateReadMode(mail)" @selected="selected">lsls</mail-preview>
       </li>

</ul>
</section>
    `,
    data() {
        return {
            mails: [],

        }
    },

    computed: {
        mailsForDisplay() {
            console.log(this.mails);

            return this.mails.filter(mail => {
                return mail.isImportant
            })

        }
    },




    methods: {
        removeMail(id) {
            eventBus.$emit('removeImportantMail', id)
            console.log(id);
            eventBus.$emit('mail-changed', this.mails)
        },
        selected() {
            eventBus.$emit('selected', this.mails)
            eventBus.$emit('mail-changed', this.mails)
        },
        updateReadMode() {
            eventBus.$emit('updateReadMode', this.mail)
            eventBus.$emit('mail-changed', this.mails)
        },


    },
    created() {
        eventBus.$on('importantMails', mails => {
            this.mails = mails
            console.log('thats whattt', this.mails);

        })

    },
    components: {
        mailPreview
    }
}