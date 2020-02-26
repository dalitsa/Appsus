import welcome from './pages/cmps/welcome.cmp.js'
import bookAppMain from '../apps/MissBooks/js/main.js'
import mailAppMain from '../apps/MrMail/mail-app.js'

const routes = [
    { path: '/', component: welcome },
    { path: '/miss-books', component: bookAppMain },
    { path: '/mr-mail/', component: mailAppMain },

];

export default routes