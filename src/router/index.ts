// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { RouteLocationNormalized, RouteLocationNormalizedLoaded, RouteRecordNormalized } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
  // {
  //   path: '/upload',
  //   component: () => import('@/layouts/UploadView/Default.vue'),
  //   children: [
  //     {
  //       path: '', // 独立路由
  //       name: 'Upload',
  //       component: () => import('@/views/Upload.vue'),
  //     },
  //   ],
  // },
  // {
  //   path: '/anime',
  //   component: () => import('@/layouts/default/Default.vue'),
  //   children: [
  //     {
  //       path: '', // 独立路由
  //       name: 'Anime',
  //       component: () => import('@/views/Anime.vue'),
  //     },
  //   ],
  // },

  // {
  //   path: '/anime_detail',
  //   component: () => import('@/layouts/UploadView/Default.vue'),
  //   children: [
  //     {
  //       path: '', // 独立路由
  //       name: 'AnimeDetail',
  //       component: () => import('@/views/AnimeDetail.vue'),
  //       props: true // 允许传递props
  //     },
  //   ],
  // },

  {
    path: '/upload',
    name: 'Upload',
    component: () => import('@/views/Upload.vue'),
  },
  {
    path: '/anime',
    name: 'Anime',
    component: () => import('@/views/Anime.vue'),
  },
  {
    path: '/anime_detail',
    name: 'AnimeDetail',
    component: () => import('@/views/AnimeDetail.vue'),
    props: (route: RouteLocationNormalized) => ({ videoId: route.query.video_id || '默认视频ID' }),
  },
  {
    path: '/bangumi',
    name: 'Bangumi',
    component: () => import('@/views/AnimeDetail2.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
