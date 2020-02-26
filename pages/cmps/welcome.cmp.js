export default {
    template: `
        <section class="welcome-page"> 
        <transition name="slide-fade"> 
        <h1 class="welcome-header"> Hi there and Welcome to Here </h1>
        </transition>
        <router-link to="/book" exact>
        <h3 class="welcome-small-header"> Discover something new </h3> 
            </router-link>
        
        </section>
    `,
    data() {
        return {
            isShown: false
        }
    },
    created() {
        this.isShown = true
    }
}