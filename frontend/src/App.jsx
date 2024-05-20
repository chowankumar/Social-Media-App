import React from 'react';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import Rightbar from './components/Rigthbar.jsx'
import Leftbar from './components/Leftbar.jsx';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className='flex'>
        <Leftbar />
        <div className='flex flex-6'>
          <Outlet />
        </div>
        <Rightbar />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
