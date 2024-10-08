import { RouteObject } from 'react-router-dom';
import { About } from '@/static/about/About.tsx';
import { Contact } from '@/static/Contact.tsx';

export const staticReactRoutes: RouteObject[] = [
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
];
