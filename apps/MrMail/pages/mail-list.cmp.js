import mailPreview from '../cmps/mail-preview.cmp.js'
import { mailService } from '../services/mail-service.js';
import { eventBus } from '../services/event-bus.js'



export default {
    template: `
    <section >
    <ul >
    <li v-for="(mail,idx) in mailsForDisplay" :key = "idx"  >
        <mail-preview :mail="mail" @removeMail="removeMail" @click.native="updateReadMode" @selected="selected"></mail-preview>
    </li>
       
</ul>
</section>
 
    `,
    data() {
        return {
            currMail: this.mail,
            mails: null,
            filterBy: null,
        }
    },

    methods: {
        selected() {
            mailService.updateMail()



        },
        removeMail(id) {
            mailService.removeMail(id)
            eventBus.$emit('mail-changed', this.mails);
        },
        updateReadMode(mail) {
            this.$emit('readMail', mail)
            mailService.updateMail()
            eventBus.$emit('mail-changed', this.mails);

        },



    },
    computed: {
        mailsForDisplay() {
            if (!this.filterBy && !this.isRead) return this.mails
            if (!this.filterBy.words) {
                return this.mails
            }
            return this.mails.filter(mail => {
                if (!this.filterBy.isRead) {
                    return mail.from.toLowerCase().includes(this.filterBy.words) || mail.subject.toLowerCase().includes(this.filterBy.words)
                }
                if (this.filterBy.words && this.filterBy.isRead === 1) {
                    return mail.from.toLowerCase().includes(this.filterBy.words) || mail.subject.toLowerCase().includes(this.filterBy.words)
                }
                if (this.filterBy.words && this.filterBy.isRead === 2) {
                    return mail.isRead === true
                }
                if (this.filterBy.words && this.filterBy.isRead === 3) {
                    return mail.isRead === false && mail.from.toLowerCase().includes(this.filterBy.words) || mail.subject.toLowerCase().includes(this.filterBy.words)
                }

            })
        },
    },








    created() {
        mailService.query()
            .then(mails => {
                this.mails = mails
            })
        eventBus.$on('set-filter', filter => {
            this.filterBy = filter
            console.log(filter);


        })


    },

    components: {
        mailPreview,
    }

};