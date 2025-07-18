import { createBrowserRouter, RouterProvider } from 'react-router'
import React from 'react'
import './App.css'
import { useAuthStore } from './useAuthStore'
import routes from './routes/route'
import MainLayout from './layout/mainlayout'
import EditUserForm from './page/editUserForm'

function App() {
  const {loggedInUser} = useAuthStore((state) => state)
  console.log("loggedInUser", loggedInUser)
  const userRoles: string[] = loggedInUser?.roles?.map((role: any) => role.code?.toLowerCase()) || [];
  console.log("userRoles", userRoles)

  const generatedRoutes: any[] = routes
    .map((route) => {
      const routeRoles: string[] = route.roles?.map((role: string) => role?.toLowerCase()) || [];
      const hasAccess = userRoles.some((role: string) => {
        return role?.toLowerCase() === 'administrators' || routeRoles.includes(role?.toLowerCase());
      });
      return hasAccess
        ? {
            path: route.path,
            element: route.element,
            index: route.index,
          }
        : null;
    })
    .filter(Boolean);

    routes.forEach((route) => {
      if (route.isPublic) {
        generatedRoutes.push({
          path: route.path,
          element: route.element,
          index: route.index,
        });
      }
    });
  
    const router = createBrowserRouter([
      {
        path: '/',
        element: <MainLayout />,
        children: generatedRoutes,
      },
      {
        path: '/user/edit/:id',
        element: <EditUserForm />,
      },
      
  
      //  NO MATCH ROUTE
      {
        path: '*',
        element: (
          <main style={{ padding: '1rem' }}>
            <p>404 Page not found 😂😂😂</p>
          </main>
        ),
      },
    ]);

  return (
    <>
        <React.Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </React.Suspense>
    </>
  )
}

export default App
