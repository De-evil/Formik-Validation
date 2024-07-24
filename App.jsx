import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import AppRoutes from './utils/AppRoutes'

function App() {
  const router = createBrowserRouter(AppRoutes)
  return <>
    <RouterProvider router={router} />
  </>
}

export default App;


// Use React with state management, Bootstrap for UI components (Topbar, Form, Col, Button, Container), 
// and Formik for form handling with Yup validation. Utilize ApiService for API calls, useNavigate for 
// navigation, and toast for notifications. This setup ensures a structured, responsive application.