import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/LoginPage.tsx'
import MeetingChat from './pages/MeetingChat.tsx'

const routes = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: "/chat",
      element: <MeetingChat />
    }
  ]
}])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
