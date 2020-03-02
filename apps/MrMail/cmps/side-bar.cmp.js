import { eventBus } from '../services/event-bus.js'



export default {
    template: `
    <keep-alive>
    <section  class="side-bar">
        <router-link to="/mr-mail/compose" class="side-bar" > <div class="side-bar-header">Compose <img src="https://image.flaticon.com/icons/svg/748/748113.svg" class="side-bar-img plus" ></div></router-link>
        <div class = "side-bar-content">
            <router-link to='/mr-mail/'exact class="side-bar">
            <h3 class="filter-inbox" @click="moveToInbox"><img src="https://image.flaticon.com/icons/svg/482/482138.svg" class="side-bar-img">Inbox</h3>
            </router-link> 
            <router-link to="/mr-mail/" class="side-bar" @click.native="importantMails"> 
           <h3 class="side-bar-star" ><img src="https://image.flaticon.com/icons/svg/1828/1828970.svg" class="side-bar-img stared">Stared</h3>
           </router-link>  
           <h3 class="side-bar-sent"><img src="https://image.flaticon.com/icons/svg/2052/2052760.svg" class="side-bar-img sent">Sent-mail</h3>
           <h3 class="side-bar-draft"><img src="https://image.flaticon.com/icons/svg/1060/1060430.svg" class="side-bar-img draft">Draft</h3>
        </div>
        <h3 class ="read-indicator">{{mailsRead}}</h3>
    </section>
</keep-alive>
    `,
    props: ['mails'],
    data() {
        return {
            mailsCount: null,


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
            return 'Total mails ' + this.mails.length + ' | Unread ' + (this.mails.length - mailsReaded.length)
        },
    },
    methods: {
        importantMails() {
            eventBus.$emit('set-filter', 'important')


        },
        moveToInbox() {
            eventBus.$emit('set-filter', '')

        }

    }
}