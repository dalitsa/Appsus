import mailOpenPreview from '../cmps/mail-open-preview.cmp.js'
import { eventBus } from '../services/event-bus.js';



export default {
    template: `
<li class="mail-preview "  > 

    <div class="mail-row"  @click ="selected" v-bind:class="readMode">
    <span><span class="fa fa-star" @click.stop="addImportant"  v-bind:class = "addImportance">
    </span><span class="mail-from">{{mail.from}}</span></span>
    <span class="mail-content"><span class = "mail-subject"> {{mail.subject}}</span> 
    <span class="mail-body">{{previewTxt}}</span>
   </span> 
    <span class = "mail-sent-at">{{fixTime}}</span>
    </div>
   <transition name="slide-fade">  <mail-open-preview v-if= "isShown"   @removeMail="removeMail" :mail="currMail"></mail-open-preview>  </transition>
    </li>
       

    `,
    props: ['mail'],

    data() {
        return {
            currMail: null,
            isShown: false,
        }
    },

    computed: {
        fixTime() {
            return new Date(this.mail.sentAt).toLocaleTimeString("en-us")
        },
        previewTxt() {
            return this.mail.body.substring(0, 20) + '...'
        },
        readMode() {
            return { 'is-read': this.mail.isRead }
        },
        addImportance() {
            return { "fa fa-star checked": this.mail.isImportant }
        }


    },
    methods: {
        selected() {
            this.$emit('selected', this.mail)
            this.currMail = this.mail
            this.toggleShown()
            this.mail.isRead = true

        },
        addImportant() {
            this.$emit('selected', this.mail)
            this.$emit('mail-changed')
            this.toggleIsImportant(this.mail)

        },
        toggleShown() {
            this.isShown = !this.isShown
        },
        toggleIsImportant(mail) {
            mail.isImportant = !mail.isImportant
            console.log(mail);

        },

        removeMail(id) {
            this.$emit('removeMail', id)
            this.isShown = false
            this.$emit('mail-changed')
        },


    },

    components: {
        mailOpenPreview
    }

};