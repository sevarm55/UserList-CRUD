import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './pages/Layout.tsx'
import { UserList } from './pages/UserList.tsx'

import './index.css'
import { AddUser } from './pages/AddUser.tsx'

const router = createBrowserRouter([
  {
    path: "", 
    element: <Layout />,
    children:[
      {path: "",element: <UserList />},
      {path: "add",element: <AddUser />}
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
