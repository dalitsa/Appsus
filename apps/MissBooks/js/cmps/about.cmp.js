import bookNavBar from './bookNavBar.cmp.js'


export default {
    template: `
        <section class="about-page"> 
            <book-nav-bar></book-nav-bar>
        <h1 class="about-header"> Meet our team- </h1>
            <img v-for="n in 5" :src="'https://api.adorable.io/avatars/285/'+n"  class ="team-img"/>
    
        <h3 class="about-small-header"> And they are all waiting for you! </h3> 
        
        </section>
    `,
    components: {
        'book-nav-bar': bookNavBar,
    }
}