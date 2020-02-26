import reviewPreview from '../cmps/review-preview.cmp.js'


export default {
    template: `

        <section>
         <h1 class="review-header">Reviews</h1>
        <div class="reviews-container" > 
            <review-preview :review="review" v-for="review in reviews"></review-preview>
     </div>
         </section>
    `,
    props: ['reviews'],
    components: {
        reviewPreview
    }

}