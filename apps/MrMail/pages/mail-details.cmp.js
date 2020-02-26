import { mailService } from '../services/mail-service.js';


export default {
    template: `
    <section>
  <div class="mail-details" v-if="mail"> 
    <h1> {{mail.from}} <h4>{{mail.fromMail}}</h4> </h1>
    <h2>{{mail.subject}}</h2>
    <h3>{{mail.body}}</h3>

  </div>
     </section>
    `,
    data() {
        return {
            mail: null
        }
    },
    methods: {

        getmail() {
            const mailId = this.$route.params.id
            console.log(mailId);
            mailService.getById(mailId)
                .then(mail => {
                    this.mail = mail
                })
        }


    },
    computed: {
        fixTime() {
            return new Date(this.mail.sentAt).toLocaleTimeString("en-us")
        }
    },
    // computed: {
    //     readingDesc() {
    //         const pageCount = this.book.pageCount
    //         if (pageCount > 500) return 'Long reading'
    //         if (pageCount > 200 && pageCount <= 500) return 'Decent Reading'
    //         if (pageCount < 100) return 'light Reading'
    //     },
    //     authors() {
    //         console.log(this.book);

    //         return this.book.authors


    //     },
    //     categories() {
    //         return this.book.categories

    //     },
    //     fixPrice() {
    //         if (!this.book.listPrice) {
    //             return 'Item is not for sale'
    //         } else {
    //             let coin = '';
    //             const coinLiteral = this.book.listPrice.currencyCode;
    //             if (coinLiteral === "EUR") coin = '€'
    //             if (coinLiteral === "USD") coin = '$'
    //             if (coinLiteral === "ILS") coin = '₪'
    //             return this.book.listPrice.amount + coin
    //         }

    //     },
    //     bookAge() {
    //         var desc
    //         const age = this.book.publishedDate
    //         if (age > 100) desc = 'Veteran book'
    //         if (age < 1) desc = 'New!'
    //         return age + ', ' + desc
    //     },
    //     togglePrice() {
    //         return (this.book.listPrice.amount < 20) ? 'green' : 'red'
    //     },
    //     onSale() {
    //         return this.book.listPrice.isOnSale;
    //     }

    // },
    created() {

        mailService.query()
            .then(() => {
                this.getmail()

            })


        // },
        // components: {
        //     longText,
        //     reviewAdd,
        //     reviewList
        // }

    }
}