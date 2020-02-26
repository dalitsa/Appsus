import mailPreview from '../cmps/mail-preview.cmp.js'
// import mailOpenPreview from '../cmps/mail-open-preview.cmp.js'


export default {
    template: `
    <ul class = "mails-list"  >
        <!-- <router-link v-for="(mail,idx) in mails" :key = "idx"  :to = "'/mr-mail/'+mail.id"   > -->
    <!-- </router-link> -->
    <li v-for="(mail,idx) in mails" :key = "idx" >
        <mail-preview :mail="mail"></mail-preview>
    </li>
       
</ul>
 
    `,
    props: ['mails'],
    data() {
        return {
            currMail: this.mail,
        }
    },

    methods: {
        selected(mail) {
            console.log(mail);
        }
    },


    components: {
        mailPreview,
        // mailOpenPreview
    }

};