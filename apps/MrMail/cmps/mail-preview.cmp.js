import mailOpenPreview from '../cmps/mail-open-preview.cmp.js'


export default {
    template: `
<li class="mail-preview" > 
    <div class="mail-row"  @click ="selected(mail)">{{mail.from}}<span class="mail-content"><span class = "mail-subject"> {{mail.subject}}</span> <span class="mail-body">{{previewTxt}}</span></span> <span class = "mail-sent-at">{{fixTime}}</span></div>
    <mail-open-preview v-if= "isShown" :mail="currMail"></mail-open-preview>
</li>
    `,
    props: ['mail'],

    data() {
        return {
            currMail: null,
            isShown: false
        }
    },

    computed: {
        fixTime() {
            return new Date(this.mail.sentAt).toLocaleTimeString("en-us")
        },
        previewTxt() {
            return this.mail.body.substring(0, 10) + '...'
        }
    },
    methods: {
        selected(mail) {
            this.$emit('selected', mail)
            this.currMail = mail
            this.toggleShown()
        },
        toggleShown() {
            this.isShown = !this.isShown
        }
    },

    components: {
        mailOpenPreview
    }

};