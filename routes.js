import welcome from './pages/cmps/welcome.cmp.js'
import bookAppMain from '../apps/MissBooks/js/main.js'
import keepAppMain from '../apps/MissKeep/js/main.js'

const routes = [
    { path: '/', component: welcome },
    { path: '/miss-books', component: bookAppMain },
    { path: '/miss-keep', component: keepAppMain },



];

export default routes