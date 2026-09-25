import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import HomePage from './Pages/homePage/HomePage.jsx'
import Features from './Pages/features/Features.jsx'
import HowItWorks from './Pages/howItWorks/HowItWorks.jsx'
import Pricing from './Pages/pricing/Pricing.jsx'
import FAQ from './Pages/faq/FAQ.jsx'
import Login from './Pages/login/Login.jsx'
import GetStarted from './Pages/getStarted/GetStarted.jsx'
import NotFound from './Pages/notFound/NotFound.jsx'

const router = createBrowserRouter(
  [
  {
    path: '/',
    element: <HomePage/>,
  },
  {
    path: '/features',
    element: <Features/>,
  },
  {
    path: '/how-it-works',
    element: <HowItWorks/>,
  },
  {
    path: '/pricing',
    element: <Pricing/>,
  },
  {
    path: '/faq',
    element: <FAQ/>,
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/getstarted',
    element: <GetStarted/>,
  },
  {
    path: '*',
    element: <NotFound/>,
  }
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />,
  </StrictMode>,

)
