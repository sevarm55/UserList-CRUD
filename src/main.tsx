import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import { UserList } from './pages/UserList.tsx'
import { Layout } from './pages/Layout.tsx'
import { AddUser } from './pages/AddUser.tsx'
import { User } from './pages/User.tsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: "", 
    element: <Layout />,
    children:[
      {path: "",element: <UserList />},
      {path: "add",element: <AddUser />},
      {path: "/users/:id",element: <User />}
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
