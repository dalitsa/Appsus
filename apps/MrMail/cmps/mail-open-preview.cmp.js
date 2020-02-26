import mailDetails from '../pages/mail-details.cmp.js'



export default {
    template: `
    <section  >
        <ul class = "mail-open-preview"> 
       <li class= "open-preview-subject">
        <span class="open-preview-subjectInline"> {{mail.subject}}</span> 
       <router-link :to = "'/mr-mail/'+mail.id">
       <span class ="mail-open-preview-btn"><img src="https://image.flaticon.com/icons/svg/482/482641.svg"></span>
       <span class="mail-open-preview-btn"><img src="https://image.flaticon.com/icons/svg/1827/1827689.svg"></span>
        </router-link>
        </li>
       <li class= "open-preview-from"><span class="open-preview-user"> {{mail.from}} </span> {{mail.fromMail}}</li>
       <li class= "open-preview-body"> {{shortTxt}} </li>
       </ul>
    </section>

`,
    props: ['mail'],

    computed: {
        shortTxt() {
            return this.mail.body.substring(0, 100) + '...'
        }
    },



    components: {
        mailDetails
    }
}