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
            eventBus.$emit('mail-changed', this.mails);


        },
        removeMail(id) {
            mailService.removeMail(id)
            mailService.updateMail()

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
            console.log(this.filterBy);

            if (!this.filterBy) return this.mails

            return this.mails.filter(mail => {
                if (this.filterBy === 'important') return mail.isImportant === true
                if (this.filterBy.isRead === "all") {
                    return mail.from.toLowerCase().includes(this.filterBy.words) || mail.subject.toLowerCase().includes(this.filterBy.words)
                }

                if (this.filterBy.isRead === 'read') {
                    if (!this.filterBy.words) {
                        return mail.isRead === true
                    }
                    return mail.isRead === true && mail.from.toLowerCase().includes(this.filterBy.words) || mail.subject.toLowerCase().includes(this.filterBy.words)
                }
                if (this.filterBy.isRead === 'unread') {
                    if (!this.filterBy.words) {
                        return mail.isRead === false
                    }
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
        eventBus.$on('removeImportantMail', id => {
            console.log(id);
            this.removeMail(id)
            this.selected()
            eventBus.$emit('mail-changed', this.mails);


        })
        eventBus.$on('set-filter', filter => {

            this.filterBy = filter
            console.log(filter);


        })
        eventBus.$on('selected', mail => {
                this.selected()
                console.log('guck');
                eventBus.$emit('mail-changed', this.mails);


            }),
            eventBus.$on('updateReadMode', mail => {
                console.log('yeah');
                this.updateReadMode(mail)
                mailService.updateMail()
                eventBus.$emit('mail-changed', this.mails);


            })







    },

    components: {
        mailPreview,
    }

};