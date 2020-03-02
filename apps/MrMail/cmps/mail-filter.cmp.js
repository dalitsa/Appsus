import { eventBus } from '../services/event-bus.js'


export default {
    template: `
    <section class="mail-filter">
    <label>
        <input type="text" 
            placeholder=" 🔍Mail search" 
            v-model="filterBy.words" 
            @input="searchMail"
            class="filter-input"
        />
        </label>
                <select class="mail-filter-read" v-model="filterBy.isRead" @change="searchMail">

        <option  value='all'>All</option>
        <option  value='read'>Read</option>
        <option  value='unread'>UnRead</option>
</select>
      
    </section>
    `,
    data() {
        return {
            filterBy: {
                words: '',
                isRead: 'all',
                star: null
            }
        }
    },
    methods: {
        searchMail() {
            eventBus.$emit('set-filter', {...this.filterBy })

        },

    }

}