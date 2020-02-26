export default {
    template: `
       
            <div class ="review-preview">

                <h3>Name: {{review.name}}</h3>
                <h3>Date registered: {{review.date}}</h3>
                <h3>Rate: {{review.rate}} Stars</h3>
                <h3>Comment :{{review.freeTxt}}</h3>
            </div>
       
    `,
    props: ['review'],

}