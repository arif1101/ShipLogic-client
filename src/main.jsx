import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './route/router/router'
import AuthProvider from './context/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <AuthProvider>
    <div className='max-w-[1280px] mx-auto'>

    <RouterProvider router={router} />

    </div>
    </AuthProvider>
  </StrictMode>
);
