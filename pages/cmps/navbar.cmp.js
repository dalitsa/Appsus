export default {
    template: `
        <div class="navbar">
        <img src="./img/logo_transparent.png" alt="" class="appsus-logo">
        <div>
            <router-link to="/miss-books" exact>
               <span class="navbar-btn"> Miss Books </span>
            </router-link>
            <router-link to="/mr-mail" exact>
            <span class="navbar-btn">  Mr. Mail </span>
            </router-link>
            <router-link to="/miss-keep">
            <span class="navbar-btn">  Miss keep </span>
            </router-link>
        </div>
        </div>
    `,

}