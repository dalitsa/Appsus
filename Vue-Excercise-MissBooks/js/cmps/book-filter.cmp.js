export default {
    template: `
    <section class="book-filter">
        <h3>Filterd Books</h3>
        <input type="text" 
            placeholder="Start typing...." 
            v-model.lazy="filterBy.title" 
            @keyup.enter="emitFilter"
        />
        <input type="number" 
            placeholder="Min price?" 
            v-model.lazy="filterBy.minPrice" 
            @keyup.enter="emitFilter"
        />
        <input type="number" 
            placeholder="Max price?" 
            v-model.lazy="filterBy.maxPrice" 
            @keyup.enter="emitFilter"
        />
    </section>
    `,
    data() {
        return {
            filterBy: {
                title: '',
                minPrice: 0,
                maxPrice: 1000
            }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('set-filter', {...this.filterBy })

        }
    }

}