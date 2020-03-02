import { eventBus } from '../services/event-bus.js'
import { mailService } from '../services/mail-service.js';


export default {
    template: `

 <section class="compose-area">
     <h1 class = "mail-compose-header">New massege </h1>
 <form  @submit.prevent="sendMail" >
<input type="text" placeHolder="To?" v-model="mail.from" class="mail-compose-input">
<input type="text" placeHolder="Cc" v-model="mail.fromMail" class="mail-compose-input">
<input type="text" placeHolder="subject" v-model="mail.subject" class="mail-compose-input">
<textarea placeHolder="Compose mail" id="" cols="30" rows="10" v-model="mail.body" class="mail-compose-text-area"></textarea>
<input class="mail-compose-img" type="image" src="https://image.flaticon.com/icons/svg/2052/2052760.svg"/>
</form>
    </section>
    `,
    data() {
        return {
            mail: {
                from: null,
                fromMail: null,
                subject: null,
                body: null,
                isRead: false,
                // sentAt: null,
                isImportant: false
            },
            mails: null

        }
    },
    methods: {
        sendMail() {

            mailService.addMail(this.mail)
                .then(mails => {
                    eventBus.$emit('mail-changed', mails);

                })
            this.$router.push('/mr-mail')

        }
    },


}