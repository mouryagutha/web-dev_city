import { Children, useState } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Applayout from './Layouts/applayout';
import Landingpage from './pages/Landingpage';
import Dashboard from './pages/dashboard';
import Auth from './pages/auth';
import Link from './pages/link';

const router = createBrowserRouter([
  {
    element:<Applayout/>,
    Children:[
      {
        path:'/',
        element:<Landingpage/>
      },
      {
        path:'/dashboard',
        element:<Dashboard/>
      },
      {
        path:'/auth',
        element:<Auth/>
      },
      {
        path:'/link',
        element:<Link/>
      },
      {
        path:'/',
        element:<Redirect_link/>
      },
      {
        path:'/',
        element:<landingpage/>
      },

    ]
  }
])


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UrlProvider>
      <RouterProvider router={router} />
    </UrlProvider>
        
    </>
  )
}

export default App
