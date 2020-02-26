import mailPreview from '../cmps/mail-preview.cmp.js'


export default {
    template: `
    <ul class = "mails-list" >
        <router-link v-for="(mail,idx) in mails" :key = "idx"  :to = "'/mr-mail/'"   >
            <mail-preview :mail="mail"></mail-preview>
        </router-link>
</ul>
 
    `,
    props: ['mails'],


    components: {
        mailPreview
    }

};