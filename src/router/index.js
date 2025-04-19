import { createRouter, createWebHistory } from 'vue-router'
import BiodataPage from '../views/biodata_page.vue'  // Mengimpor komponen BiodataPage

const routes = [
  {
    path: '/biodata',
    name: 'Home',
    component: BiodataPage  // Setel komponen BiodataPage sebagai komponen di root path
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
