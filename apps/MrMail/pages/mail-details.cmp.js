import { mailService } from '../services/mail-service.js';


export default {
    template: `
    <section>
  <div class="mail-details" v-if="mail"> 
    <h1> {{mail.from}}<h4>{{mail.fromMail}}</h4> </h1>
    <h2>{{mail.subject}}</h2>
    <h3>{{mail.body}}</h3>

  </div>
     </section>
    `,
    data() {
        return {
            mail: null
        }
    },
    methods: {

        getmail(id) {
            if (!id) return
            mailService.getById(id)
                .then(mail => {
                    this.mail = mail

                })
        }


    },
    computed: {
        fixTime() {
            return new Date(this.mail.sentAt).toLocaleTimeString("en-us")
        }
    },

    created() {
        this.getmail(this.$route.params.id)

    }

}