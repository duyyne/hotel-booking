import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './components/Layouts/Layout';
import Home from './components/pages/Home';
import Rooms from './components/pages/Rooms';
import Contact from './components/pages/Contact';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            Component: Layout,
            children: [
                { index: true, Component: Home },
                { path: 'rooms', Component: Rooms },
                { path: 'contact', Component: Contact },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
