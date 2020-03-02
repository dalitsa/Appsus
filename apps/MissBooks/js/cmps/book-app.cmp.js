import { bookService } from '../services/book.service.js';
import booksList from '../cmps/book-list.cmp.js'
import bookFilter from '../cmps/book-filter.cmp.js'
import bookDetails from '../cmps/book-details.cmp.js'
import addBook from '../cmps/add-book.cmp.js'


export default {
    template: `
    <section class="books-container">

        <router-link to="/list/about" exact> </router-link>
        <book-filter  @set-filter="setFilter"></book-filter>
        <!-- <book-details v-if="selectedBook"  :book="selectedBook" @closePage = "closePage" ></book-details> -->
        <books-list :books="booksForDisplay"  @selected="selectBook"></books-list>
        


    </section>
    `,
    data() {
        return {
            books: [],
            filterBy: {
                title: '',

            },
            selectedBook: null
        }
    },
    created() {
        bookService.query()
            .then(books => {
                this.books = books
            })

    },
    methods: {
        selectBook(id) {
            bookService.getById(id)
                .then(res => {
                    this.selectedBook = res
                })
        },

        closePage() {
            this.selectedBook = null
        },

        setFilter(filterBy) {
            this.filterBy = filterBy
        },

    },


    computed: {
        booksForDisplay() {
            console.log('booksForDisplay');

            const type = this.filterBy
            if (!type.minPrice && !type.maxPrice && !type.title) return this.books
            return this.books.filter(book => {
                if (!type.title) {
                    return book.listPrice.amount > type.minPrice && book.listPrice.amount < type.maxPrice
                } else if (!type.minPrice || !type.maxPrice) {
                    return book.title.includes(type.title)
                } else {
                    return book.title.includes(type.title) && book.listPrice.amount > type.minPrice && book.listPrice.amount < type.maxPrice
                }
            });
        },
    },

    components: {
        booksList,
        bookFilter,
        bookDetails,
        addBook,

    }

}