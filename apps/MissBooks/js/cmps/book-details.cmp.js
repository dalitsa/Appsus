import { bookService } from '../services/book.service.js';

import longText from '../cmps/long-text.cmp.js'
import reviewAdd from '../cmps/review-add.cmp.js'
import reviewList from '../cmps/review-list.cmp.js'

export default {
    template: `
<ul class="book-details" v-if="book"> 
    <h1>DETAILS</h1>
    <img class = "sale-img" v-if="onSale"  src = "./img/sale.png" />
    <li>Book-name: {{book.title}}</li>
    <li>id: {{book.id}}</li>
    <li>subtitle: {{book.subtitle}}</li>
    <li>published At: {{bookAge}}</li>
    <li>Author: <span v-for="author in authors">{{author}}</span></li>
    <li>Page count: {{book.pageCount}}, {{readingDesc}}</li>
    <long-text v-bind:txt="book.description"> </long-text>
    <li>categories: <span v-for="category in categories">{{category}}</span></li>
    <li>language: {{ book.language}}</li>
    <li>Price: <span :class ="togglePrice">{{ fixPrice}}</span></li>
    <img :src ="book.thumbnail" class="book-img"/>
    <reviewAdd></reviewAdd>
    <reviewList :reviews="book.reviews"></reviewList>
    
</ul>
    `,
    data() {
        return {
            book: null
        }
    },
    methods: {

        getBook() {
            const bookId = this.$route.params.id
            bookService.getById(bookId)
                .then(book => {
                    this.book = book
                })
        }


    },
    computed: {
        readingDesc() {
            const pageCount = this.book.pageCount
            if (pageCount > 500) return 'Long reading'
            if (pageCount > 200 && pageCount <= 500) return 'Decent Reading'
            if (pageCount < 100) return 'light Reading'
        },
        authors() {
            console.log(this.book);

            return this.book.authors


        },
        categories() {
            return this.book.categories

        },
        fixPrice() {
            if (!this.book.listPrice) {
                return 'Item is not for sale'
            } else {
                let coin = '';
                const coinLiteral = this.book.listPrice.currencyCode;
                if (coinLiteral === "EUR") coin = '€'
                if (coinLiteral === "USD") coin = '$'
                if (coinLiteral === "ILS") coin = '₪'
                return this.book.listPrice.amount + coin
            }

        },
        bookAge() {
            var desc
            const age = this.book.publishedDate
            if (age > 100) desc = 'Veteran book'
            if (age < 1) desc = 'New!'
            return age + ', ' + desc
        },
        togglePrice() {
            return (this.book.listPrice.amount < 20) ? 'green' : 'red'
        },
        onSale() {
            return this.book.listPrice.isOnSale;
        }

    },
    created() {

        bookService.query()
            .then(() => {
                this.getBook()

            })


    },
    components: {
        longText,
        reviewAdd,
        reviewList
    }

};