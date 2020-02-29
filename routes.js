import welcome from './pages/cmps/welcome.cmp.js'
import bookApp from '../apps/MissBooks/js/main.js'
import keepAppMain from './apps/MissKeep/cmps/keep-app.cmp.js'
import mailAppMain from '../apps/MrMail/mail-app.js'
import mailDetails from '../apps/MrMail/pages/mail-details.cmp.js'
import mailList from '../apps/MrMail/pages/mail-list.cmp.js'
import compose from './apps/MrMail/cmps/compose-area.cmp.js'
import important from './apps/MrMail/cmps/important.cmp.js'
import about from './apps/MissBooks/js/cmps/about.cmp.js'
import addBook from './apps/MissBooks/js/cmps/add-book.cmp.js'
import bookDetails from './apps/MissBooks/js/cmps/book-details.cmp.js'

const routes = [
    { path: '/', component: welcome },
    { path: '/miss-books', component: bookApp },
    { path: '/about', component: about },
    { path: '/miss-books/book/add', component: addBook },
    { path: '/miss-books/book/:id', component: bookDetails },




    { path: '/miss-keep', component: keepAppMain },
    {
        path: '/mr-mail',
        component: mailAppMain,
        children: [
            { path: '', component: mailList },
            { path: 'compose', component: compose },
            { path: 'important', component: important },
            { path: ':id', component: mailDetails },

        ]
    },

];

export default routes