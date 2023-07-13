import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '../components/pages/home';
import { Contact } from '../components/pages/contact';
import { WhoWeAre } from '../components/pages/who-we-are';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/quem-somos',
    element: <Contact />,
  },
  {
    path: '/contato',
    element: <WhoWeAre />,
  },
]);

export { router, RouterProvider };
