import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Profile from './pages/Profile/Profile';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		// errorElement:,
		children: [
			{ index: true, element: <Profile /> },
			// { index: '/', element: <Profile /> },
			// { path: '/login', element: <Login /> },
		],
	},
]);

export default router;
