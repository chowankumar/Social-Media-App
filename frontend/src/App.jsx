import React from 'react';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import Rightbar from './components/Rigthbar.jsx'
import Leftbar from './components/Leftbar.jsx';




const App = () => {

  const currentUser = true
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
  
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/login' />
    }
    return children
  }
  
  const router = createBrowserRouter([
    {  
      path: "/",
      element:
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>,
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

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
