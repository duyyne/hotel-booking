import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './components/Layouts/Layout';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Booking from './components/pages/Booking';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            Component: Layout,
            children: [
                { index: true, Component: Home },
                { path: 'booking/:id', Component: Booking },
                { path: '*', Component: NotFound },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
