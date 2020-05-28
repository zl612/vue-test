import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Hi from '@/components/Hi';
import Hi1 from '@/components/Hi1';
import Hi2 from '@/components/Hi2';
import Error from '@/components/Error';
import Count from '@/components/Count';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      key: '1',
      components: {
        default: HelloWorld,
        left: Hi2,
        right: Hi1,
      },
    },
    {
      path: '/goback',
      redirect: '/',
    },
    {
      path: '*',
      component: Error,
    },
    {
      path: '/count',
      component: Count,
    },
    {
      path: '/hi',
      name: 'Hi',
      component: Hi,
      key: '2',
      // components: {
      //   default: Hi,
      //   left: Hi1,
      //   right: Hi2,
      // },
      beforeEnter: (to, from, next) => {
        console.log('我进入了params模板');
        console.log(to);
        console.log(from);
        next();
      },
      // children: [
      //   // {
      //   //   path: '/',
      //   //   component: Hi,
      //   // },
      //   {
      //     path: 'hi1',
      //     name: 'hi1',
      //     component: Hi1,
      //   },
      //   {
      //     path: 'hi2',
      //     name: 'Hi2',
      //     component: Hi2,
      //   },
      // ],
    },
  ],
});
