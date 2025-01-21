import { createBrowserRouter, Navigate } from 'react-router-dom';

import ReportPage from './pages/Report'
import Auth from './pages/Auth/auth'
import App from './App';
import LoginForm from './components/forms/LoginForm';
import ForgotForm from './components/forms/ForgotForm';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './pages/Profile';
// import GoBack from '../hooks/goBack'

export const ROUTES = {
  HOME: '/',
  AUTH: {
    ROOT: '/auth',
    LOGIN: '/auth/login',
    FORGOT_PASSWORD: '/auth/forgot-password'
  },
	PROFILE: '/profile',
	APPOINTMENT: '/dashboard'
} as const;

const publicRoutes = [
	{
    path: ROUTES.HOME,
    element: <Navigate to={ROUTES.AUTH.LOGIN} replace />
  },
	{
		path: ROUTES.AUTH.ROOT,
		element: <Auth />,
		children: [
			{
        index: true,
        element: <Navigate to={ROUTES.AUTH.LOGIN} replace />
      },
			{
				path: ROUTES.AUTH.LOGIN,
				element: <LoginForm />
			},
			{
				path: ROUTES.AUTH.FORGOT_PASSWORD,
				element: <ForgotForm />
			}
		]
	},
];

const protectedRoutes = [
	{
		path: ROUTES.PROFILE,
		element: (
			<ProtectedRoute>
				<Profile />
			</ProtectedRoute>
		)
	},
	{
		path: ROUTES.APPOINTMENT,
		element: (
			<ProtectedRoute>
				<ReportPage />
			</ProtectedRoute>
		)
	}
]

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			...publicRoutes,
			...protectedRoutes
		],
		errorElement: <NotFound />
	}
], {
  future: {
		v7_startTransition: true,
    v7_relativeSplatPath: true
  } as any
})