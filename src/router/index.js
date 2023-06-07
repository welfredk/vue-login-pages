import { createRouter, createWebHistory } from 'vue-router';
import SignUp from '../views/SignUp.vue';
import SignIn from '../views/SignIn.Vue';
import Home from '../views/Home.vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // base: '/vue-login-pages/',
  routes: [
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true,
      }
    }
  ]
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async(to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth) {
    try {
      const currentUser = await getCurrentUser();
      if (currentUser) {
        next(); 
      } else {
        next("/signin"); 
      }
    } catch (error) {
      console.error(error);
      next("/signin"); 
    }
  } else {
    next(); 
  }
});



export default router
