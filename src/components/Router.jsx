import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from '../App'
import Sale from '../pages/Sale'
import Cart from '../pages/Cart'

export default function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                { index: true, element: <Sale /> },
                { path: "cart", element: <Cart /> },
            ],
          },
      ]);
  return (
    <RouterProvider router={router} />
  )
}


