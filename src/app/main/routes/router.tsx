import { MakeMainPage } from '@/app/main/factories/pages/main-page'
import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

export const Router: React.FC = ({}) => {
  const routers = createBrowserRouter([
    {
      path: '/',
      element: <MakeMainPage />,
      index: true
    }
  ])
  return <RouterProvider router={routers}></RouterProvider>
}
