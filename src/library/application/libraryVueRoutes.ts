import { RouteRecordRaw } from 'vue-router';
import BookComponent from '@/library/infrastructure/primary/BookComponent.vue';
import { ISBN } from '@/library/domain/ISBN.ts';
import LibraryApp from "@/library/application/LibraryApp.vue";

export const libraryVueRoutes =
  {
    path: '/',
    component: LibraryApp,
    children: [
      {
        path: 'book/:isbn',
        component: BookComponent,
        props: route => ({ isbn: ISBN.of(route.params['isbn'] as string) }),
      }
    ]
  } satisfies RouteRecordRaw;
