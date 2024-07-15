import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import Tasks from '../pages/Tasks/Tasks';
import Verify from '../pages/SignUp/Verify';

export interface RouteConfig {
  path: string;
  component: React.ComponentType;
  isProtected?: boolean;
}

const routes: RouteConfig[] = [
  {
    path: '/signin',
    component: SignIn,
  },
  {
    path: '/signup',
    component: SignUp,
  },
  {
    path: '/verify',
    component: Verify,
  },
  {
    path: '/',
    component: Tasks,
    isProtected: true,
  },
];

export default routes;
