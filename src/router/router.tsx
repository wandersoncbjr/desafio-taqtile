import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '../components/pages/home';
import { Contact } from '../components/pages/contact';
import { WhoWeAre } from '../components/pages/who-we-are';
import { PropertyDetails } from '../components/pages/details';
import { LoginPage } from '../components/pages/login-page';
import { RegisterPage } from '../components/pages/register-page';

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
  {
    path: '/detalhes-do-imovel',
    element: <PropertyDetails />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/cadastro',
    element: <RegisterPage />,
  },
]);

export { router, RouterProvider };
