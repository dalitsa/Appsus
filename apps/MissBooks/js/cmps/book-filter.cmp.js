export default {
    template: `
    <section >
        <h3 class="book-filter-headline">Filterd Books</h3>
        <div class="book-filter">
        <input type="text" 
            placeholder="Start typing...." 
            v-model.lazy="filterBy.title" 
            @keyup.enter="emitFilter"
            class="book-filter-input filter-text"
        />
        <input type="number" 
            placeholder="Min price?" 
            v-model.lazy="filterBy.minPrice" 
            @keyup.enter="emitFilter"
            class="book-filter-input"
        />
        <input type="number" 
            placeholder="Max price?" 
            v-model.lazy="filterBy.maxPrice" 
            @keyup.enter="emitFilter"
            class="book-filter-input"
        />
</div>
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