import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Profile from './pages/Profile/Profile';
import Portfolio from './pages/Portfolio/Portfolio';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		// errorElement:,
		children: [
			{ index: true, element: <Profile /> },
			{ path: '/portfolio', element: <Portfolio /> },
			// { path: '/login', element: <Login /> },
		],
	},
]);

export default router;
