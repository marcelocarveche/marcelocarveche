import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { MakeIndexPage } from '../factories/pages/index-page'

export const Router: React.FC = ({}) => {
  const routers = createBrowserRouter([
    {
      path: '/',
      element: <MakeIndexPage />,
      index: true
    }
  ])
  return <RouterProvider router={routers}></RouterProvider>
}
