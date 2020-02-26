import welcome from '../cmps/welcome.cmp.js'
import bookApp from '../cmps/book-app.cmp.js'
import bookDetails from '../cmps/book-details.cmp.js'
import about from '../cmps/about.cmp.js'
import bookAdd from '../cmps/add-book.cmp.js'




const routes = [
    { path: '/', component: welcome },
    { path: '/book', component: bookApp },
    { path: '/about', component: about },
    { path: '/book/add', component: bookAdd },
    { path: '/book/:id', component: bookDetails },

];

export default routes