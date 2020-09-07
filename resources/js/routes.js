import AllBooks from './components/AllBooks.vue'
import AddBook from './components/AddBook.vue'
import EditBook from './components/EditBook.vue'
import About from './components/About.vue'

export const routes = [
  {
    name: 'home',
    path: '/',
    component: AllBooks
  },
  {
    name: 'about',
    path: '/about',
    component: About
  },
  {
    name: 'add',
    path: '/add',
    component: AddBook
  },
  {
    name: 'edit',
    path: '/edit/:id',
    component: EditBook
  }
];
