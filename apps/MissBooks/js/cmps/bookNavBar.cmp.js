export default {
    template: `
        <div class="book-navbar">
            <router-link to="/" exact>
               <span class="navbar-btn"> Home </span>
            </router-link>
            <router-link to="/miss-books" exact>
            <span class="navbar-btn">  Our Books </span>
            </router-link>
            <router-link to="/about">
            <span class="navbar-btn">  About </span>
            </router-link>
            <router-link to="/miss-books/book/add">
            <span class="navbar-btn">  Add book </span>
            </router-link>
        </div>
    `,

}