export default {
    template: `
<li class="book-preview"> 
    <h3>{{book.title}}</h3>
    <h4>Book-price: {{fixedPrice}}</h4>
    <img :src ="book.thumbnail" class="book-img"/>
</li>
    `,
    props: ['book'],
    computed: {
        fixedPrice() {
            if (this.book.listPrice.amount === 'Item is not for sale') return 'Item is not for sale'
            var coin = ''
            var coinLiteral = this.book.listPrice.currencyCode;
            if (coinLiteral === "EUR") coin = '€'
            if (coinLiteral === "USD") coin = '$'
            if (coinLiteral === "ILS") coin = '₪'
            return this.book.listPrice.amount + coin
        }

    },


};