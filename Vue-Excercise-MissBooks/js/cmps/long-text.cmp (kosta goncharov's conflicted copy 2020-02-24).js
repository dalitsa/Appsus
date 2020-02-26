export default {
    template: `
<li>Description:{{textLength}}<button v-if="isLongText" @click="toglleReadMore">{{toggleBtnTxt}}</button></li>
    `,
    props: ['txt'],

    data() {
        return {
            isClicked: false,
            isLongText: false
        }
    },


    computed: {
        textLength() {
            if (this.txt.length <= 99) return this.txt
            if (!this.isClicked) {
                this.isLongText = true
                return this.txt.substring(0, 100)

            } else {

                return this.txt
            }

        },
        toggleBtnTxt() {
            if (this.isClicked) {
                return 'Read less'
            } else {
                return 'Read more'
            }

        }

    },

    methods: {
        toglleReadMore() {
            this.isClicked = !this.isClicked
        }
    }

};