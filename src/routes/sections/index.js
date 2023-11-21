import { Navigate, useRoutes } from 'react-router-dom';
// config
import { PATH_AFTER_LOGIN } from 'src/config-global';
// layouts
import MainLayout from 'src/layouts/main';

//import Home
import { mainRoutes , HomePage} from './main';

import { authRoutes } from './auth';
import { dashboardRoutes } from './dashboard';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <HomePage />
        </MainLayout>
      ),
    },

    // Auth routes
    ...authRoutes,

    // Dashboard routes
    ...dashboardRoutes,

    // Main routes
    ...mainRoutes,

    // No match 404
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
