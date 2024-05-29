import React, { useContext } from 'react';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import Rightbar from './components/Rigthbar.jsx'
import Leftbar from './components/Leftbar.jsx';
import { AuthContext } from './context/authContext.jsx';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query';
 




const App = () => {

   const queryClient =new QueryClient();
     
  const {currentUser} = useContext(AuthContext)
  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
      <div>
        <Navbar />
        <div className='flex'>
          <Leftbar />
          <div className='w-[50%]'>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
      </QueryClientProvider>
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
