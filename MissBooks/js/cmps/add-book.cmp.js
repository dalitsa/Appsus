import { bookService } from '../services/book.service.js';
import { eventBus } from '../services/event-bus.service.js';

export default {
    template: `
    <section class = "search-input"> 
      <input type="search" 
            placeholder="Try searching something" 
             @input="booksFromGoogle"
             v-model="filter"
            />
            <ul class="filtered-google-books"  v-for="book in books">
           
                <li>{{book.book.volumeInfo.title}}<button @click="addBook(book.book)" class="add-book-btn">+</button></li>
            </ul>
            </section>
            `,
    data() {
        return {
            filter: null,
            books: null
        }

    },
    methods: {
        booksFromGoogle() {
            bookService.getBooksFromGoogle(this.filter)
                .then(res => {
                    console.log(res);
                    this.books = res;
                })
        },
        addBook(book) {
            bookService.query()
            bookService.addBook(book)
                .then(() => {
                    console.log(book);

                    const msg = {
                        txt: 'Book ' + book.volumeInfo.title + ' saved!',
                        type: 'success'
                    }
                    eventBus.$emit('changed', msg, book)
                })

        }
    },



};