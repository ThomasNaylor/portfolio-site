import Vue from 'vue';
import Router from 'vue-router';
import router from './router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      meta: {
        title: 'Home - Thomas Naylor | Frontend Web Developer | Cape Town'
      },
      metaTags: [
        {
          name: 'description',
          content: 'Thomas Naylor is a frontend web developer in Cape Town, South Africa with a focus on creating cleanly written websites and web applications.'
        },
        {
          property: 'og:description',
          content: 'Thomas Naylor is a frontend web developer in Cape Town, South Africa with a focus on creating cleanly written websites and web applications.'
        }
      ]
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('./views/Projects.vue'),
      meta: {
        title: 'Projects - Thomas Naylor | Frontend Web Developer | Cape Town'
      },
      metaTags: [
        {
          name: 'description',
          content: 'A collection of projects that I have completed up to date. View more on my github profile.'
        },
        {
          property: 'og:description',
          content: 'A collection of projects that I have completed up to date. View more on my github profile.'
        }
      ]
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('./views/Blog.vue'),
      meta: {
        title: 'Blog - Thomas Naylor | Frontend Web Developer | Cape Town'
      },
      metaTags: [
        {
          name: 'description',
          content: 'Read about my experiences during my time learning to code and what I can share with you on my journey.'
        },
        {
          property: 'og:description',
          content: 'Read about my experiences during my time learning to code and what I can share with you on my journey.'
        }
      ]
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue'),
      meta: {
        title: 'Contact - Thomas Naylor | Frontend Web Developer | Cape Town'
      },
      metaTags: [
        {
          name: 'description',
          content: 'Contact Me. hello@thomasnaylor.co.za. Thomas Naylor | Cape Town | South Africa'
        },
        {
          property: 'og:description',
          content: 'Contact Me. hello@thomasnaylor.co.za. Thomas Naylor | Cape Town | South Africa'
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {

    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
    const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

    if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

    if (!nearestWithMeta) return next();

    nearestWithMeta.meta.metaTags.map(tagDef => {
            const tag = document.createElement('meta');

            Object.keys(tagDef).forEach(key => {
                tag.setAttribute(key, tagDef[key]);
            });

            tag.setAttribute('data-vue-router-controlled', '');

            return tag;
        })
        .forEach(tag => document.head.appendChild(tag));

    next();
});
