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
                <select class="mail-filter-read" v-model.number="filterBy.isRead" @change="searchMail">

        <option  value=1>All</option>
        <option  value=2>Read</option>
        <option  value=3>UnRead</option>
</select>
      
    </section>
    `,
    data() {
        return {
            filterBy: {
                words: '',
                isRead: null
            }
        }
    },
    methods: {
        searchMail() {
            eventBus.$emit('set-filter', {...this.filterBy })

        },

    }

}