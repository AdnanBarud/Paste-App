import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ViewPaste from './components/ViewPaste'
import Pastes from './components/Pastes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



const router = createBrowserRouter(
  [
    {
      path: '/',
      element: 
      <div>
        <Navbar />
        <Home />
      </div>
    },
    {
      path: '/pastes',
      element: 
      <div>
        <Navbar />
        <Pastes />
      </div>
    },
    // {
    //   path: '/id',
    //   element: 
    //   <div>
    //     <Navbar />
    //     <ViewPaste />
    //   </div>
    // },
    {
      path: '/view',
      element: 
      <div>
        <Navbar />
        <ViewPaste />
      </div>
    },
  ]
)
function App() {


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
