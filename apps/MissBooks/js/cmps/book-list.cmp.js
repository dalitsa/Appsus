import bookPreview from '../cmps/book-preview.cmp.js'


export default {
    template: `
    <ul class = "books-list" >
        <router-link v-for="(book,idx) in books" :key = "idx"  :to= "'miss-books/book/'+book.id"   >
            <book-preview :book="book"  @click.native ="selected(book.id)" > </book-preview>
        </router-link>
</ul>
 
    `,
    props: ['books'],

    methods: {
        selected(id) {
            this.$emit('selected', id)
        }
    },
    components: {
        bookPreview
    }

};