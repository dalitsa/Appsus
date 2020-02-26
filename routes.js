import welcome from './pages/cmps/welcome.cmp.js'
import bookAppMain from '../apps/MissBooks/js/main.js'
import mailAppMain from '../apps/MrMail/mail-app.js'
import mailDetails from '../apps/MrMail/pages/mail-details.cmp.js'

const routes = [
    { path: '/', component: welcome },
    { path: '/miss-books', component: bookAppMain },
    { path: '/mr-mail/', component: mailAppMain },
    { path: '/mr-mail/:id', component: mailDetails },

];

export default routes