import { bookService } from '../services/book.service.js';


export default {
    template: `
        <form class = "add-review-form" @submit.prevent="pushReview" >
        <input type="text" placeholder="Books reader" v-model ="review.name">
        <input type="date" v-model ="review.date">
        <div class="stars">
    <input class="star star-5" id="star-5" type="radio" name="star" value = 5 v-model ="review.rate" />
    <label class="star star-5" for="star-5"></label>
    <input class="star star-4" id="star-4" type="radio" name="star" value = 4  v-model ="review.rate"/>
    <label class="star star-4" for="star-4"></label>
    <input class="star star-3" id="star-3" type="radio" name="star" value = 3 v-model ="review.rate"/>
    <label class="star star-3" for="star-3"></label>
    <input class="star star-2" id="star-2" type="radio" name="star"  value = 2 v-model ="review.rate"/>
    <label class="star star-2" for="star-2"></label>
    <input class="star star-1" id="star-1" type="radio" name="star" value = 1  v-model ="review.rate"/>
    <label class="star star-1" for="star-1"></label> 
</div>
<textarea name="" id="" cols="30" rows="10"  v-model ="review.freeTxt"></textarea>
<button> Submit!</button>
     </form>
    `,
    data() {
        return {
            review: {
                name: null,
                date: null,
                rate: null,
                freeTxt: null
            },
        }
    },
    methods: {
        pushReview() {
            const bookId = this.$route.params.id
            bookService.addReview(bookId, this.review)
            this.review = {
                name: null,
                date: null,
                rate: null,
                freeTxt: null
            }
        }
    },


}