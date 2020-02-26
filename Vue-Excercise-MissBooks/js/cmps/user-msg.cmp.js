import { eventBus } from '../services/event-bus.service.js'


export default {
    template: `
            <transition name="slide-fade">
                <section class="msg-container" v-if="msg" :class="msg.type">
                    <button @click="closeMsg" class = "user-msg-btn">x</button>
                    <h1>{{msg.txt}}</h1>
                    <router-link :to= "'/book/'+book.id" exact  ><h2>Check it out!</h2></router-link>
                    
                </section>
            </transition>
    `,
    data() {
        return {
            msg: null,
            book: null
        }
    },

    created() {
        eventBus.$on('changed', (msg, book) => {
            this.msg = msg
            this.book = book
            setTimeout(() => {
                this.msg = null
            }, 2000);
        })
    },
    methods: {
        closeMsg() {
            this.msg = null
        }
    }
}