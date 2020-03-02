import reviewPreview from '../cmps/review-preview.cmp.js'


export default {
    template: `

        <section>
         <h1 class="review-header">{{msg}}</h1>
        <div class="reviews-container" > 
            <review-preview :review="review" v-for="review in reviews"></review-preview>
     </div>
         </section>
    `,
    props: ['reviews'],

    computed: {
        msg() {

            return (!this.reviews[0]) ? 'There are no reviews yet' : 'Reviews'
        }

    },
    components: {
        reviewPreview
    }

}