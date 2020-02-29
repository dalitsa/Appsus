import { eventBus } from '../services/event-bus.js'


export default {
    template: `
    <keep-alive>
    <section  class="side-bar">
       <router-link to="/mr-mail/compose"> <div class="side-bar-header"><img src="https://image.flaticon.com/icons/svg/748/748113.svg" class="side-bar-img plus">Compose</div></router-link>
            <router-link to='/mr-mail/'exact>
            <h3 class="filter-inbox"><img src="https://image.flaticon.com/icons/svg/482/482138.svg" class="side-bar-img">Inbox</h3>
            </router-link> 
            <router-link to="/mr-mail/important"> 
           <h3 @click="importantMails"><img src="https://image.flaticon.com/icons/svg/1828/1828970.svg" class="side-bar-img stared">Stared</h3>
           </router-link>  
           <h3><img src="https://image.flaticon.com/icons/svg/2052/2052760.svg" class="side-bar-img sent">Sent-mail</h3>
           <h3><img src="https://image.flaticon.com/icons/svg/1060/1060430.svg" class="side-bar-img draft">Draft</h3>
           <h4>{{mailsRead}}</h4>
    </section>
</keep-alive>
    `,
    props: ['mails'],
    data() {
        return {
            mailsCount: null
        }
    },

    computed: {
        mailsRead() {
            var mailsReaded = []
            this.mails.forEach(mail => {
                if (mail.isRead === true) {
                    mailsReaded.push(mail)

                }
            })
            return 'Total mails ' + this.mails.length + ' | To-read ' + (this.mails.length - mailsReaded.length)
        }
    },
    methods: {
        importantMails() {
            eventBus.$emit('importantMails', this.mails)
            console.log('hi there!');

        }
    }




}