import welcome from './pages/cmps/welcome.cmp.js'
import bookAppMain from '../apps/MissBooks/js/main.js'

const routes = [
    { path: '/', component: welcome },
    { path: '/miss-books', component: bookAppMain },



];

export default routes